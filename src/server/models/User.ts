import mongoose, { Schema } from 'mongoose';
import { IBaseModel } from './BaseModel';

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  TEAM_MEMBER = 'TEAM_MEMBER',
  OWNER = 'OWNER',
}

export enum SubscriptionPlan {
  FREE = 'FREE',
  PRO = 'PRO',
  ENTERPRISE = 'ENTERPRISE',
}

export interface IAISettings {
  model: string;
  maxTokens: number;
  temperature: number;
}

export interface IUser extends IBaseModel {
  googleId: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  subscriptionPlan: SubscriptionPlan;
  subscriptionId?: mongoose.Types.ObjectId;
  analysisUsed: number;
  aiSettings?: IAISettings;
}

const UserSchema = new Schema<IUser>(
  {
    googleId: { type: String, required: true, unique: true, index: true },
    email: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    avatar: { type: String },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
    },
    subscriptionPlan: {
      type: String,
      enum: Object.values(SubscriptionPlan),
      default: SubscriptionPlan.FREE,
    },
    subscriptionId: { type: Schema.Types.ObjectId, ref: 'Subscription' },
    analysisUsed: { type: Number, default: 0 },
    aiSettings: {
      model: { type: String, default: 'meta-llama/llama-3.1-8b-instruct:free' },
      maxTokens: { type: Number, default: 4000 },
      temperature: { type: Number, default: 0.7 },
    },
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
