import { BaseRepository } from './BaseRepository';
import { User, IUser } from '../models/User';

export class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(User);
  }

  async findByGoogleId(googleId: string): Promise<IUser | null> {
    return this.findOne({ googleId });
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return this.findOne({ email });
  }

  async upsertGoogleUser(profile: {
    googleId: string;
    email: string;
    name: string;
    avatar?: string;
  }): Promise<IUser> {
    const existingUser = await this.findByGoogleId(profile.googleId);

    if (existingUser) {
      // Update info if it changed
      let changed = false;
      if (existingUser.name !== profile.name) {
        existingUser.name = profile.name;
        changed = true;
      }
      if (existingUser.avatar !== profile.avatar) {
        existingUser.avatar = profile.avatar;
        changed = true;
      }
      if (changed) {
        return existingUser.save();
      }
      return existingUser;
    }

    // Create new user with default FREE plan
    const newUser = new this.model({
      ...profile,
      analysisUsed: 0,
    });
    return newUser.save();
  }
}

export const userRepository = new UserRepository();
