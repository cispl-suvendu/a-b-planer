import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { withErrorHandler } from '@/server/middlewares/errorHandler';
import { successResponse } from '@/server/utils/apiResponse';
import { UnauthorizedError } from '@/server/errors';

async function meHandler() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    throw new UnauthorizedError('Not authenticated');
  }

  return successResponse(
    { user: session.user },
    'Authenticated user retrieved'
  );
}

export const GET = withErrorHandler(meHandler);
