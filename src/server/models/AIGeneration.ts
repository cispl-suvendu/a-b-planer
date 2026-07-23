import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IExperiment {
  title: string;
  currentProblem: string;
  hypothesis: string;
  variantA: string;
  variantB: string;
  expectedImpact: number; // 1-10
  confidence: number; // 1-10
  difficulty: number; // 1-10
  priorityScore: number; // Impact * Confidence / Difficulty
  reasoning: string;
  implementation: string;
  copySuggestion?: string;
  winnerMetric: string;
}

export interface IAIGeneration extends Document {
  analysisId: string;
  aiModel: string;
  promptVersion: string;
  tokensUsed: number;
  cost: number;
  status: 'Processing' | 'Completed' | 'Failed';
  error?: string;
  executiveSummary?: string;
  executiveReport?: Record<string, unknown>;
  roadmap?: Record<string, unknown>;
  revenueOpportunity?: Record<string, unknown>;
  psychologyAnalysis?: Record<string, unknown>;
  trustAudit?: Record<string, unknown>;
  copyBreakdown?: Record<string, unknown>;
  behaviorSimulation?: Record<string, unknown>;
  competitorGapAnalysis?: Record<string, unknown>;
  annotations?: unknown[];
  heatmapData?: unknown[];
  experiments: IExperiment[];
  createdAt: Date;
  updatedAt: Date;
}

const ExperimentSchema = new Schema<IExperiment>({
  title: { type: String, required: true },
  currentProblem: { type: String, required: true },
  hypothesis: { type: String, required: true },
  variantA: { type: String, required: true },
  variantB: { type: String, required: true },
  expectedImpact: { type: Number, required: true },
  confidence: { type: Number, required: true },
  difficulty: { type: Number, required: true },
  priorityScore: { type: Number, required: true },
  reasoning: { type: String, required: true },
  implementation: { type: String, required: true },
  copySuggestion: { type: String },
  winnerMetric: { type: String, required: true },
});

const AIGenerationSchema = new Schema<IAIGeneration>(
  {
    analysisId: { type: String, required: true, index: true },
    aiModel: { type: String, required: true },
    promptVersion: { type: String, required: true },
    tokensUsed: { type: Number, default: 0 },
    cost: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ['Processing', 'Completed', 'Failed'],
      default: 'Processing',
    },
    error: { type: String },
    executiveSummary: { type: String },
    executiveReport: Schema.Types.Mixed,
    roadmap: Schema.Types.Mixed,
    revenueOpportunity: Schema.Types.Mixed,
    psychologyAnalysis: Schema.Types.Mixed,
    trustAudit: Schema.Types.Mixed,
    copyBreakdown: Schema.Types.Mixed,
    behaviorSimulation: Schema.Types.Mixed,
    competitorGapAnalysis: Schema.Types.Mixed,
    annotations: [Schema.Types.Mixed],
    heatmapData: [Schema.Types.Mixed],
    experiments: [ExperimentSchema],
  },
  {
    timestamps: true,
    collection: 'ai_generations',
  }
);

export const AIGeneration: Model<IAIGeneration> =
  mongoose.models.AIGeneration ||
  mongoose.model<IAIGeneration>('AIGeneration', AIGenerationSchema);
