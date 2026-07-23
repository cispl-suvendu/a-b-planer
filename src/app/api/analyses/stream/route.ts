import { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { eventBus } from '@/server/services/EventBus';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const userId = session.user.id;

  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const onProgress = (data: any) => {
        try {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify(data)}\n\n`)
          );
        } catch {
          // ignore error
        }
      };

      // Subscribe to this specific user's progress events
      eventBus.on(`progress:${userId}`, onProgress);

      // Send an initial ping to establish connection
      controller.enqueue(encoder.encode(`: ping\n\n`));

      // Ping every 15 seconds to keep connection alive
      const interval = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(`: ping\n\n`));
        } catch {
          clearInterval(interval);
        }
      }, 15000);

      // Clean up when the client disconnects
      req.signal.addEventListener('abort', () => {
        eventBus.off(`progress:${userId}`, onProgress);
        clearInterval(interval);
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'Content-Encoding': 'none',
      'X-Accel-Buffering': 'no',
    },
  });
}
