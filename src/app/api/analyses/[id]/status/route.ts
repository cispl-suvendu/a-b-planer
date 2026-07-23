import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db/mongoose';
import { Analysis } from '@/server/models/Analysis';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectToDatabase();

    const analysis = await Analysis.findOne({
      _id: params.id,
      userId: session.user.id,
    }).lean();

    if (!analysis) {
      return NextResponse.json(
        { success: false, error: 'Analysis not found' },
        { status: 404 }
      );
    }

    let progress = 0;
    let stage = 'Queued';

    if (analysis.status === 'Completed') {
      progress = 100;
      stage = 'Completed';
    } else if (analysis.status === 'Failed') {
      progress = 0;
      stage = 'Failed';
    } else {
      // Without BullMQ, we just rely on the DB status for the MVP.
      // Progress can be inferred from status stages on the frontend.
      stage = analysis.status;
    }

    return NextResponse.json({
      success: true,
      data: {
        status: analysis.status,
        progress,
        stage,
      },
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch status' },
      { status: 500 }
    );
  }
}
