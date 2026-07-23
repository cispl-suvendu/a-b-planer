import { BaseService } from './BaseService';
import { Analysis } from '../models/Analysis';
import { User } from '../models/User';
import { connectToDatabase } from '@/lib/db/mongoose';
import { NotFoundError } from '@/server/errors';
import { Types } from 'mongoose';
import { featureGateService } from './FeatureGateService';

export class DashboardService extends BaseService {
  /**
   * Retrieves the dashboard summary for a user, including their usage limits and recent analyses.
   */
  async getDashboardSummary(userId: string) {
    await connectToDatabase();

    const user = await User.findById(userId).lean();
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const recentAnalyses = await Analysis.find({
      userId: new Types.ObjectId(userId),
    })
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    const usage = await featureGateService.getUsageLimits(userId);

    return {
      usage,
      recentAnalyses,
    };
  }

  /**
   * Retrieves paginated analysis history for a user.
   */
  async getAnalysisHistory(
    userId: string,
    page: number = 1,
    limit: number = 20
  ) {
    await connectToDatabase();

    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      Analysis.find({ userId: new Types.ObjectId(userId) })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Analysis.countDocuments({ userId: new Types.ObjectId(userId) }),
    ]);

    return {
      data,
      meta: {
        page,
        limit,
        total,
      },
    };
  }

  /**
   * Queues a new analysis if the user has remaining credits.
   */
  async startAnalysis(userId: string, url: string) {
    await connectToDatabase();

    // Will throw ForbiddenError if they hit limit
    await featureGateService.assertCanCreateAnalysis(userId);

    const analysis = await Analysis.create({
      userId: new Types.ObjectId(userId),
      url,
      status: 'Queued',
    });

    return {
      success: true,
      analysisId: analysis._id.toString(),
    };
  }
}

export const dashboardService = new DashboardService();
