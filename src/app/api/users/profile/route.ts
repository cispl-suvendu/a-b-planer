import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { withErrorHandler } from '@/server/middlewares/errorHandler';
import { successResponse } from '@/server/utils/apiResponse';
import { UnauthorizedError, NotFoundError } from '@/server/errors';
import { userRepository } from '@/server/repositories/UserRepository';
import { connectToDatabase } from '@/lib/db/mongoose';

async function profileHandler() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    throw new UnauthorizedError('Not authenticated');
  }

  await connectToDatabase();
  const user = await userRepository.findById(session.user.id);

  if (!user) {
    throw new NotFoundError('User profile not found in database');
  }

  return successResponse({ user }, 'User profile retrieved');
}

export const GET = withErrorHandler(profileHandler);
