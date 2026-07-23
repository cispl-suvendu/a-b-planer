import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAnalysis extends Document {
  userId: mongoose.Types.ObjectId;
  url: string;
  status:
    'Queued' | 'Processing' | 'Generating Report' | 'Completed' | 'Failed';
  progress: number;
  analysisType: string;
  screenshotUrl?: string;
  htmlData?: Record<string, unknown>;
  cssData?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  lighthouseData?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

const AnalysisSchema = new Schema<IAnalysis>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    url: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [
        'Queued',
        'Processing',
        'Generating Report',
        'Completed',
        'Failed',
      ],
      default: 'Queued',
    },
    analysisType: {
      type: String,
      default: 'HTML+Screenshot+CSS+Lighthouse+Metadata',
    },
    progress: {
      type: Number,
      default: 0,
    },
    screenshotUrl: String,
    htmlData: Schema.Types.Mixed,
    cssData: Schema.Types.Mixed,
    metadata: Schema.Types.Mixed,
    lighthouseData: Schema.Types.Mixed,
  },
  { timestamps: true }
);

export const Analysis: Model<IAnalysis> =
  mongoose.models.Analysis ||
  mongoose.model<IAnalysis>('Analysis', AnalysisSchema);
