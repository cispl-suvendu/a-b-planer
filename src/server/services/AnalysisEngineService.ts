import { BaseService } from './BaseService';
import { ValidationUtils } from '../utils/ValidationUtils';
import { metadataService } from './MetadataService';
import { screenshotService } from './ScreenshotService';
import { lighthouseService } from './LighthouseService';
import { aiService } from './AIService';
import { Analysis } from '@/server/models/Analysis';
import { User } from '@/server/models/User';
import { connectToDatabase } from '@/lib/db/mongoose';

export class AnalysisEngineService extends BaseService {
  /**
   * Orchestrates the analysis pipeline.
   * Can accept a progress callback from a background worker.
   * NOTE: The Analysis Service is designed to support future execution via a
   * background queue (BullMQ, Inngest, or another provider) without changing business logic.
   */
  async runAnalysis(
    analysisId: string,
    url: string,
    onProgress?: (
      progress: number,
      stage: string,
      data?: unknown
    ) => Promise<void> | void
  ) {
    try {
      this.logger.info(
        `Starting background analysis for ${analysisId} on ${url}`
      );
      await connectToDatabase();

      // 1. SSRF Validation
      if (onProgress) await onProgress(10, 'Validating URL safety...');
      if (!ValidationUtils.isUrlSafe(url)) {
        throw new Error(
          'URL failed safety validation. Blocked for potential SSRF.'
        );
      }

      await Analysis.findByIdAndUpdate(analysisId, { status: 'Processing' });

      // 2. Capture Screenshot FIRST so the UI can display it
      if (onProgress) await onProgress(15, 'Capturing website structure...');
      this.logger.info(`Capturing screenshot...`);
      const { screenshotUrl, domElements } =
        await screenshotService.captureScreenshot(url, analysisId);
      await Analysis.findByIdAndUpdate(analysisId, {
        screenshotUrl,
        domElements,
      });

      if (onProgress)
        await onProgress(20, 'Analyzing Page...', { screenshotUrl });

      // 3. Run extractions concurrently where possible
      if (onProgress)
        await onProgress(40, 'Extracting Content & Running Audit...', {
          screenshotUrl,
        });
      this.logger.info(`Extracting metadata and lighthouse scores...`);
      const [metadataResult, lighthouseResult] = await Promise.all([
        metadataService.extractMetadata(url),
        lighthouseService.runAudit(url),
      ]);

      await Analysis.findByIdAndUpdate(analysisId, {
        status: 'Generating Report',
      });
      if (onProgress)
        await onProgress(80, 'Saving Extraction Results...', { screenshotUrl });

      // 4. Save analysis results
      await Analysis.findByIdAndUpdate(analysisId, {
        status: 'Generating Report',
        htmlData: metadataResult.htmlData,
        metadata: metadataResult.metadata,
        cssData: metadataResult.cssData,
        lighthouseData: lighthouseResult,
      });

      // 5. Fetch User AI Settings and Generate AI Recommendations
      if (onProgress)
        await onProgress(90, 'Generating AI Insights...', { screenshotUrl });
      this.logger.info(`Starting AI insights generation...`);

      const analysis = await Analysis.findById(analysisId);
      let aiSettings;
      if (analysis) {
        const user = await User.findById(analysis.userId);
        if (user && user.aiSettings) {
          aiSettings = user.aiSettings;
        }
      }

      await aiService.generateRecommendations(
        analysisId,
        {
          url,
          metadata: metadataResult.metadata,
          lighthouse: lighthouseResult,
          htmlData: metadataResult.htmlData,
          cssData: metadataResult.cssData,
          domElements,
        },
        aiSettings
      );

      // 6. Complete Pipeline
      await Analysis.findByIdAndUpdate(analysisId, {
        status: 'Completed',
      });
      if (onProgress) await onProgress(100, 'Completed', { screenshotUrl });
      this.logger.info(`Analysis ${analysisId} completed successfully.`);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      this.logger.error(`Analysis ${analysisId} failed: ${errorMessage}`);
      await connectToDatabase();
      await Analysis.findByIdAndUpdate(analysisId, {
        status: 'Failed',
        metadata: {
          error: error instanceof Error ? error.message : String(error),
        },
      });
      // Important: Notify the UI that the analysis failed so it doesn't get stuck loading
      if (onProgress) await onProgress(0, 'Failed');
    }
  }
}

export const analysisEngineService = new AnalysisEngineService();
