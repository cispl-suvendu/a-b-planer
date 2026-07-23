import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISubscription extends Document {
  userId: mongoose.Types.ObjectId;
  plan: 'FREE' | 'PRO' | 'ENTERPRISE';
  status:
    | 'active'
    | 'canceled'
    | 'past_due'
    | 'unpaid'
    | 'incomplete'
    | 'incomplete_expired'
    | 'trialing';
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  currentPeriodStart?: Date;
  currentPeriodEnd?: Date;
  cancelAtPeriodEnd: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const SubscriptionSchema = new Schema<ISubscription>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
      unique: true, // One subscription per user
    },
    plan: {
      type: String,
      enum: ['FREE', 'PRO', 'ENTERPRISE'],
      default: 'FREE',
    },
    status: {
      type: String,
      enum: [
        'active',
        'canceled',
        'past_due',
        'unpaid',
        'incomplete',
        'incomplete_expired',
        'trialing',
      ],
      default: 'active',
    },
    stripeCustomerId: { type: String, sparse: true },
    stripeSubscriptionId: { type: String, sparse: true },
    currentPeriodStart: { type: Date },
    currentPeriodEnd: { type: Date },
    cancelAtPeriodEnd: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Subscription: Model<ISubscription> =
  mongoose.models.Subscription ||
  mongoose.model<ISubscription>('Subscription', SubscriptionSchema);
