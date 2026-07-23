/* eslint-disable @typescript-eslint/no-explicit-any */
import OpenAI from 'openai';
import { BaseService } from './BaseService';
import { env } from '@/env';
import {
  SYSTEM_PROMPT,
  buildUserPrompt,
} from '@/server/prompts/v1/analysis-prompt';
import { AIGeneration, IExperiment } from '@/server/models/AIGeneration';
import { IAISettings } from '@/server/models/User';

export class AIService extends BaseService {
  private openai: OpenAI;

  constructor() {
    super();
    this.openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: env.OPENROUTER_API_KEY,
    });
  }

  /**
   * Generates CRO recommendations and saves them to the database
   */
  async generateRecommendations(
    analysisId: string,
    extractedData: {
      url: string;
      metadata: any;
      lighthouse: any;
      htmlData: any;
      cssData: any;
      domElements: any;
    },
    aiSettings?: IAISettings
  ) {
    this.logger.info(`Starting AI Generation for Analysis ${analysisId}`);

    // Create initial tracking record
    const generation = new AIGeneration({
      analysisId,
      aiModel: aiSettings?.model || env.OPENROUTER_MODEL,
      promptVersion: 'v1',
      status: 'Processing',
      experiments: [],
    });
    await generation.save();

    try {
      let parsedData;
      let lastError: Error | null = null;
      let finalUsage: any = null;
      const MAX_RETRIES = 3;

      for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
          const userPrompt = buildUserPrompt(extractedData);

          const completion = await this.openai.chat.completions.create({
            model: aiSettings?.model || env.OPENROUTER_MODEL,
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              { role: 'user', content: userPrompt },
            ],
            // Many free models crash or fail if response_format is forced without strict schemas.
            // We rely on the prompt to enforce JSON output instead to maximize compatibility.
            max_tokens: aiSettings?.maxTokens || 8000,
            temperature:
              aiSettings?.temperature !== undefined
                ? aiSettings.temperature
                : 0.7,
          });

          const responseContent = completion.choices[0]?.message?.content;
          if (!responseContent) {
            throw new Error('No content returned from AI provider');
          }

          // Parse JSON
          try {
            parsedData = JSON.parse(responseContent);
          } catch {
            // Fallback: sometimes LLMs still wrap in markdown despite instructions
            // Also attempt to strip out any pre-text before the first {
            let cleaned = responseContent
              .replace(/```json/g, '')
              .replace(/```/g, '')
              .trim();
            const firstBrace = cleaned.indexOf('{');
            const lastBrace = cleaned.lastIndexOf('}');
            if (firstBrace !== -1 && lastBrace !== -1) {
              cleaned = cleaned.substring(firstBrace, lastBrace + 1);
            } else {
              throw new Error(
                `No JSON object found in response. Response was: ${responseContent.substring(0, 100)}...`
              );
            }
            // Some models output bad control characters like unescaped newlines in strings
            cleaned = cleaned.replace(/[\u0000-\u001F]+/g, ' ');
            parsedData = JSON.parse(cleaned);
          }

          if (!parsedData || !Array.isArray(parsedData.experiments)) {
            throw new Error(
              'AI returned invalid schema structure (missing experiments array)'
            );
          }

          finalUsage = completion.usage;
          break; // Success! Break out of the retry loop.
        } catch (error) {
          lastError = error instanceof Error ? error : new Error(String(error));
          this.logger.warn(
            `AI Generation attempt ${attempt} failed: ${lastError.message}`
          );
          if (attempt === MAX_RETRIES) {
            throw lastError;
          }
          // Optional short delay between retries
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      }

      if (!parsedData) {
        throw lastError || new Error('Failed to generate after retries');
      }

      // Calculate priority score for each experiment
      const experiments: IExperiment[] = parsedData.experiments.map(
        (exp: Record<string, unknown>) => {
          const impact = Number(exp.expectedImpact) || 5;
          const confidence = Number(exp.confidence) || 5;
          const difficulty = Number(exp.difficulty) || 5;

          // Priority Score = Impact × Confidence ÷ Difficulty
          // Ensure difficulty isn't 0 to prevent Infinity
          const safeDifficulty = Math.max(difficulty, 0.1);
          const priorityScore = parseFloat(
            ((impact * confidence) / safeDifficulty).toFixed(2)
          );

          return {
            title: (exp.title as string) || 'Untitled Experiment',
            currentProblem: (exp.currentProblem as string) || 'Unknown problem',
            hypothesis: (exp.hypothesis as string) || 'Not specified',
            variantA: (exp.variantA as string) || 'Current design',
            variantB: (exp.variantB as string) || 'Proposed design',
            expectedImpact: impact,
            confidence,
            difficulty,
            priorityScore,
            reasoning: (exp.reasoning as string) || 'Not specified',
            implementation: (exp.implementation as string) || 'Not specified',
            copySuggestion: (exp.copySuggestion as string) || '',
            winnerMetric: (exp.winnerMetric as string) || 'Conversion Rate',
          };
        }
      );

      // Update generation record
      generation.status = 'Completed';
      generation.executiveSummary =
        (parsedData.executiveSummary as string) || 'No summary generated.';
      generation.executiveReport = parsedData.executiveReport;
      generation.roadmap = parsedData.roadmap;
      generation.revenueOpportunity = parsedData.revenueOpportunity;
      generation.psychologyAnalysis = parsedData.psychologyAnalysis;
      generation.trustAudit = parsedData.trustAudit;
      generation.copyBreakdown = parsedData.copyBreakdown;
      generation.behaviorSimulation = parsedData.behaviorSimulation;
      generation.competitorGapAnalysis = parsedData.competitorGapAnalysis;
      generation.annotations = parsedData.annotations;
      generation.heatmapData = parsedData.heatmapData;
      generation.experiments = experiments;

      // Track usage/cost
      if (finalUsage) {
        generation.tokensUsed = finalUsage.total_tokens || 0;
        generation.cost = (finalUsage.total_tokens || 0) * 0.00001;
      }

      await generation.save();
      this.logger.info(
        `Successfully generated ${experiments.length} experiments for Analysis ${analysisId}`
      );

      return generation;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      this.logger.error(
        `AI Generation failed for Analysis ${analysisId}: ${errorMessage}`
      );
      generation.status = 'Failed';
      generation.error = errorMessage;
      await generation.save();
      throw error;
    }
  }
}

export const aiService = new AIService();
