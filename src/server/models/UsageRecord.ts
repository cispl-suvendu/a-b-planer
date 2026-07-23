import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUsageRecord extends Document {
  userId: mongoose.Types.ObjectId;
  action: string;
  count: number;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

const UsageRecordSchema = new Schema<IUsageRecord>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    action: {
      type: String,
      required: true,
      index: true,
    },
    count: {
      type: Number,
      default: 1,
    },
    metadata: {
      type: Schema.Types.Mixed,
    },
  },
  { timestamps: true }
);

export const UsageRecord: Model<IUsageRecord> =
  mongoose.models.UsageRecord ||
  mongoose.model<IUsageRecord>('UsageRecord', UsageRecordSchema);
