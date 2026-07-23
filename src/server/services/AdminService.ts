import { User, SubscriptionPlan } from '@/server/models/User';
import { Analysis } from '@/server/models/Analysis';
import { BaseService } from './BaseService';
import { Types } from 'mongoose';

export interface AdminStats {
  totalUsers: number;
  totalAnalyses: number;
  paidUsers: number;
}

export interface AdminUserListItem {
  id: string;
  name: string;
  email: string;
  role: string;
  subscriptionPlan: string;
  analysisUsed: number;
  createdAt: string;
}

export class AdminService extends BaseService {
  /**
   * Retrieves high level statistics for the admin dashboard
   */
  async getDashboardStats(): Promise<AdminStats> {
    this.logger.info('Fetching admin dashboard stats');

    try {
      const totalUsers = await User.countDocuments();
      const totalAnalyses = await Analysis.countDocuments();
      const paidUsers = await User.countDocuments({
        subscriptionPlan: { $ne: SubscriptionPlan.FREE },
      });

      return {
        totalUsers,
        totalAnalyses,
        paidUsers,
      };
    } catch (error) {
      this.logger.error({ err: error }, 'Failed to fetch admin stats');
      throw new Error('Failed to fetch admin stats');
    }
  }

  /**
   * Retrieves a paginated list of users
   */
  async getUsers(
    page: number = 1,
    limit: number = 20
  ): Promise<{
    users: AdminUserListItem[];
    total: number;
    pages: number;
  }> {
    this.logger.info(`Fetching admin user list - page ${page}`);

    try {
      const skip = (page - 1) * limit;

      const [users, total] = await Promise.all([
        User.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
        User.countDocuments(),
      ]);

      const mappedUsers = users.map((user) => ({
        id: (user._id as Types.ObjectId).toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        subscriptionPlan: user.subscriptionPlan,
        analysisUsed: user.analysisUsed || 0,
        createdAt: (user.createdAt as Date).toISOString(),
      }));

      return {
        users: mappedUsers,
        total,
        pages: Math.ceil(total / limit),
      };
    } catch (error) {
      this.logger.error({ err: error }, 'Failed to fetch admin users');
      throw new Error('Failed to fetch admin users');
    }
  }
}

export const adminService = new AdminService();
