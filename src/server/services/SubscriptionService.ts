import { BaseService } from './BaseService';
import { Subscription, ISubscription } from '../models/Subscription';
import { User, SubscriptionPlan } from '../models/User';
import { stripeService } from './StripeService';
import { connectToDatabase } from '@/lib/db/mongoose';
import { NotFoundError } from '@/server/errors';
import mongoose from 'mongoose';

export class SubscriptionService extends BaseService {
  /**
   * Gets or creates a subscription record for a user
   */
  async getOrCreateSubscription(userId: string): Promise<ISubscription> {
    await connectToDatabase();

    let sub = await Subscription.findOne({
      userId: new mongoose.Types.ObjectId(userId),
    });

    if (!sub) {
      sub = await Subscription.create({
        userId: new mongoose.Types.ObjectId(userId),
        plan: 'FREE',
        status: 'active',
        cancelAtPeriodEnd: false,
      });

      // Link back to user
      await User.findByIdAndUpdate(userId, { subscriptionId: sub._id });
    }

    return sub;
  }

  /**
   * Initiates the checkout process for PRO tier
   */
  async createProCheckout(userId: string, email: string, returnUrl: string) {
    // 1. Get current sub
    await this.getOrCreateSubscription(userId);

    // 2. Call Stripe (Mocked)
    const session = await stripeService.createCheckoutSession(
      userId,
      email,
      returnUrl
    );
    return session.url;
  }

  /**
   * Fulfills a checkout (Mock implementation)
   * This mimics what the webhook handler would do.
   */
  async fulfillDummyCheckout(userId: string) {
    await connectToDatabase();

    const user = await User.findById(userId);
    if (!user) throw new NotFoundError('User not found');

    // Upgrade subscription
    const sub = await this.getOrCreateSubscription(userId);
    sub.plan = 'PRO';
    sub.status = 'active';
    sub.stripeCustomerId = `cus_dummy_${Date.now()}`;
    sub.stripeSubscriptionId = `sub_dummy_${Date.now()}`;
    sub.currentPeriodStart = new Date();

    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    sub.currentPeriodEnd = nextMonth;

    await sub.save();

    // Update user model
    user.subscriptionPlan = SubscriptionPlan.PRO;
    await user.save();

    this.logger.info(`Upgraded user ${userId} to PRO tier (Dummy Flow)`);
    return sub;
  }
}

export const subscriptionService = new SubscriptionService();
