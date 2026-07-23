import { NextRequest } from 'next/server';
import { logger } from '@/lib/logger';
import { errorResponse } from '../utils/apiResponse';
import { AppError } from '../errors/AppError';

type HandlerFunction = (
  req: NextRequest,
  ...args: unknown[]
) => Promise<Response> | Response;

export function withErrorHandler(handler: HandlerFunction): HandlerFunction {
  return async (req: NextRequest, ...args: unknown[]) => {
    try {
      return await handler(req, ...args);
    } catch (error: unknown) {
      if (error instanceof AppError) {
        if (!error.isOperational) {
          logger.error({ err: error }, 'Non-operational error occurred');
        } else {
          logger.debug({ err: error }, 'Operational error occurred');
        }
        return errorResponse(error);
      }

      // Log unexpected errors
      logger.error(
        { err: error },
        'Unexpected error caught in error handler middleware'
      );
      return errorResponse(
        new AppError('Internal Server Error', 500, 'INTERNAL_ERROR', false)
      );
    }
  };
}
