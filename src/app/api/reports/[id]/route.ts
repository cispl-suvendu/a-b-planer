import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db/mongoose';
import { Analysis } from '@/server/models/Analysis';
import { AIGeneration } from '@/server/models/AIGeneration';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();

    const analysisId = params.id;

    // 1. Fetch the Analysis record
    const analysis = await Analysis.findById(analysisId);

    if (!analysis) {
      return NextResponse.json({ error: 'Report not found' }, { status: 404 });
    }

    // 2. Verify ownership
    if (analysis.userId.toString() !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // 3. Fetch the AI Generation
    const aiGeneration = await AIGeneration.findOne({ analysisId }).sort({
      createdAt: -1,
    });

    if (!aiGeneration) {
      // It might still be processing, but if they are calling the report API it should be done.
      // If it's missing, it's either in progress or failed.
      return NextResponse.json(
        {
          error: 'Report generation not completed yet or missing.',
          status: analysis.status,
        },
        { status: 404 }
      );
    }

    // 4. Synthesize the "Report"
    const report = {
      id: analysis._id.toString(),
      analysisId: analysis._id.toString(),
      userId: analysis.userId.toString(),
      url: analysis.url,
      screenshotUrl: analysis.screenshotUrl,
      title: `CRO Audit: ${analysis.url}`,
      executiveSummary:
        aiGeneration.executiveSummary || 'No executive summary available.',
      executiveReport: aiGeneration.executiveReport,
      revenueOpportunity: aiGeneration.revenueOpportunity,
      roadmap: aiGeneration.roadmap,
      psychologyAnalysis: aiGeneration.psychologyAnalysis,
      trustAudit: aiGeneration.trustAudit,
      copyBreakdown: aiGeneration.copyBreakdown,
      behaviorSimulation: aiGeneration.behaviorSimulation,
      competitorGapAnalysis: aiGeneration.competitorGapAnalysis,
      annotations: aiGeneration.annotations,
      heatmapData: aiGeneration.heatmapData,
      experiments: aiGeneration.experiments,
      promptVersion: aiGeneration.promptVersion,
      status: analysis.status,
      aiModel: aiGeneration.aiModel,
      createdAt: analysis.createdAt,
      updatedAt: aiGeneration.updatedAt,
    };

    return NextResponse.json({ report });
  } catch (error) {
    console.error('Failed to fetch report:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
