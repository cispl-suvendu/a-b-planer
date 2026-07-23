import { NextRequest } from 'next/server';
import { withErrorHandler } from '@/server/middlewares/errorHandler';
import { successResponse } from '@/server/utils/apiResponse';
import { ValidationError } from '@/server/errors';

async function healthCheckHandler(req: NextRequest) {
  const url = new URL(req.url);
  const triggerError = url.searchParams.get('error');

  if (triggerError === 'true') {
    throw new ValidationError(
      'This is a simulated validation error to test the handler.'
    );
  }

  return successResponse(
    { status: 'healthy', timestamp: new Date().toISOString() },
    'System is operating normally'
  );
}

export const GET = withErrorHandler(healthCheckHandler);
