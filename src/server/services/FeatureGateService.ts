import { BaseService } from './BaseService';
import { User, IUser, SubscriptionPlan } from '../models/User';
import { Analysis } from '../models/Analysis';
import { connectToDatabase } from '@/lib/db/mongoose';
import { ForbiddenError } from '@/server/errors';
import mongoose from 'mongoose';

export class FeatureGateService extends BaseService {
  private static readonly FREE_TIER_LIMIT = 4;

  /**
   * Checks if the user is allowed to create another analysis.
   * Throws ForbiddenError if limits are exceeded.
   */
  async assertCanCreateAnalysis(userId: string) {
    await connectToDatabase();

    const user = (await User.findById(userId).lean()) as IUser;
    if (!user) throw new ForbiddenError('User not found');

    // Pro and Enterprise have unlimited
    if (
      user.subscriptionPlan === SubscriptionPlan.PRO ||
      user.subscriptionPlan === SubscriptionPlan.ENTERPRISE
    ) {
      return true;
    }

    // Check free limits
    const analysesCount = await Analysis.countDocuments({
      userId: new mongoose.Types.ObjectId(userId),
    });
    if (analysesCount >= FeatureGateService.FREE_TIER_LIMIT) {
      throw new ForbiddenError(
        'You have reached your free tier limit of 4 analyses. Please upgrade to continue.'
      );
    }

    return true;
  }

  /**
   * Returns the user's current limit state
   */
  async getUsageLimits(userId: string) {
    await connectToDatabase();

    const user = (await User.findById(userId).lean()) as IUser;
    const analysesCount = await Analysis.countDocuments({
      userId: new mongoose.Types.ObjectId(userId),
    });

    const isUnlimited =
      user?.subscriptionPlan === SubscriptionPlan.PRO ||
      user?.subscriptionPlan === SubscriptionPlan.ENTERPRISE;
    const totalAllowed = isUnlimited
      ? Infinity
      : FeatureGateService.FREE_TIER_LIMIT;
    const remaining = isUnlimited
      ? Infinity
      : Math.max(0, totalAllowed - analysesCount);

    return {
      totalAllowed: isUnlimited ? null : totalAllowed,
      used: analysesCount,
      remaining: isUnlimited ? null : remaining,
      isUnlimited,
      plan: user?.subscriptionPlan || SubscriptionPlan.FREE,
    };
  }
}

export const featureGateService = new FeatureGateService();
