import puppeteer from 'puppeteer';
import { BaseService } from './BaseService';
import path from 'path';
import fs from 'fs/promises';

export class ScreenshotService extends BaseService {
  /**
   * Captures a full page screenshot using Puppeteer.
   * Returns a URL/path to the saved screenshot.
   */
  async captureScreenshot(url: string, analysisId: string): Promise<string> {
    this.logger.info(`Capturing screenshot for ${url}`);
    let browser;
    try {
      browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });

      const page = await browser.newPage();

      // Set a generic desktop viewport
      await page.setViewport({ width: 1440, height: 900 });

      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

      // Ensure directory exists
      const screenshotDir = path.join(process.cwd(), 'public', 'screenshots');
      await fs.mkdir(screenshotDir, { recursive: true });

      const fileName = `${analysisId}.webp`;
      const filePath = path.join(screenshotDir, fileName);

      await page.screenshot({
        path: filePath,
        type: 'webp',
        fullPage: true,
      });

      return `/screenshots/${fileName}`;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      this.logger.error(`Screenshot failed for ${url}: ${error.message}`);
      throw error;
    } finally {
      if (browser) {
        await browser.close();
      }
    }
  }
}

export const screenshotService = new ScreenshotService();
