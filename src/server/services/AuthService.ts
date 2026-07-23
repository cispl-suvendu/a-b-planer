import { BaseService } from './BaseService';
import { userRepository } from '../repositories/UserRepository';
import { IUser } from '../models/User';
import { connectToDatabase } from '@/lib/db/mongoose';

export class AuthService extends BaseService {
  async handleGoogleSignIn(profile: {
    googleId: string;
    email: string;
    name: string;
    avatar?: string;
  }): Promise<IUser> {
    await connectToDatabase();
    // Upsert the user into the database
    const user = await userRepository.upsertGoogleUser(profile);
    return user;
  }
}

export const authService = new AuthService();
