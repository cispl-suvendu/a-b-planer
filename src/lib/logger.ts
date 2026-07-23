import pino from 'pino';

export const logger = pino({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  // Transport is removed in development to prevent thread-stream worker crashes in Next.js 14
});
