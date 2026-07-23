import mongoose from 'mongoose';
import { env } from '@/env';
import { logger } from '@/lib/logger';

declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(env.MONGODB_URI, opts)
      .then((mongoose) => {
        logger.info('Connected to MongoDB');
        return mongoose;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any;
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    logger.error({ err: e }, 'Error connecting to MongoDB');
    throw e;
  }

  return cached.conn;
}
