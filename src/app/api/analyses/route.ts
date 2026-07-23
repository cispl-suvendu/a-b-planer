import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { dashboardService } from '@/server/services/DashboardService';
import { analysisEngineService } from '@/server/services/AnalysisEngineService';
import { eventBus } from '@/server/services/EventBus';
import { Analysis } from '@/server/models/Analysis';
import { z } from 'zod';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);

    const history = await dashboardService.getAnalysisHistory(
      session.user.id,
      page,
      limit
    );
    return NextResponse.json({ success: true, ...history });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

const StartAnalysisSchema = z.object({
  url: z.string().url('Please enter a valid URL'),
});

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const result = StartAnalysisSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: 'Invalid URL' },
        { status: 400 }
      );
    }

    const analysis = await dashboardService.startAnalysis(
      session.user.id,
      result.data.url
    );

    // Add job to AnalysisEngineService directly (designed for future queue replacement)
    analysisEngineService
      .runAnalysis(
        analysis.analysisId,
        result.data.url,
        async (progress, stage, data) => {
          try {
            await Analysis.findByIdAndUpdate(analysis.analysisId, { progress });

            let mappedStatus = 'Processing';
            if (progress >= 80) mappedStatus = 'Generating Report';
            if (progress === 100) mappedStatus = 'Completed';
            if (stage === 'Failed') mappedStatus = 'Failed';

            // Emit SSE event
            eventBus.emit(`progress:${session.user.id}`, {
              analysisId: analysis.analysisId,
              progress,
              stage,
              status: mappedStatus,
              screenshotUrl: (data as { screenshotUrl?: string })
                ?.screenshotUrl,
            });
          } catch (err) {
            console.error('Failed to update progress:', err);
          }
        }
      )
      .catch((error) => {
        console.error(error);
        eventBus.emit(`progress:${session.user.id}`, {
          analysisId: analysis.analysisId,
          progress: 0,
          stage: 'Failed',
          status: 'Failed',
        });
      });

    return NextResponse.json({ success: true, data: analysis });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // If the error has a statusCode (from AppError), use it
    const status = error.statusCode || 500;
    return NextResponse.json(
      { success: false, message: error.message || 'Internal Server Error' },
      { status }
    );
  }
}
