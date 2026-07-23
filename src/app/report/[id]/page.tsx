'use client';

import React, { useState, useEffect } from 'react';
import { useGetReportByIdQuery } from '@/features/reports/api/reportApi';
import { ReportHeader } from '@/features/reports/components/ReportHeader';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

import { ExecutiveDashboardCard } from '@/features/reports/components/ExecutiveDashboardCard';
import { PriorityRoadmapCard } from '@/features/reports/components/PriorityRoadmapCard';
import { RevenueOpportunityCard } from '@/features/reports/components/RevenueOpportunityCard';
import {
  ScreenshotAnnotationsCard,
  Annotation,
} from '@/features/reports/components/ScreenshotAnnotationsCard';
import {
  VisualHeatmapCard,
  HeatmapPoint,
} from '@/features/reports/components/VisualHeatmapCard';
import { PsychologyAnalysisCard } from '@/features/reports/components/PsychologyAnalysisCard';
import { TrustAuditCard } from '@/features/reports/components/TrustAuditCard';
import { CopyBreakdownCard } from '@/features/reports/components/CopyBreakdownCard';
import { BehaviorSimulationCard } from '@/features/reports/components/BehaviorSimulationCard';
import { CompetitorGapCard } from '@/features/reports/components/CompetitorGapCard';

type ExecutiveReportType = Parameters<
  typeof ExecutiveDashboardCard
>[0]['report'];
type RevenueOpportunityType = Parameters<
  typeof RevenueOpportunityCard
>[0]['revenueOpportunity'];
type PriorityRoadmapType = Parameters<typeof PriorityRoadmapCard>[0]['roadmap'];
type PsychologyAnalysisType = Parameters<
  typeof PsychologyAnalysisCard
>[0]['psychologyAnalysis'];
type TrustAuditType = Parameters<typeof TrustAuditCard>[0]['trustAudit'];
type CopyBreakdownType = Parameters<
  typeof CopyBreakdownCard
>[0]['copyBreakdown'];
type BehaviorSimulationType = Parameters<
  typeof BehaviorSimulationCard
>[0]['behaviorSimulation'];
type CompetitorGapType = Parameters<
  typeof CompetitorGapCard
>[0]['competitorGapAnalysis'];

export default function ReportPage({ params }: { params: { id: string } }) {
  const [isPolling, setIsPolling] = useState(true);

  const { data, isLoading, isError, error } = useGetReportByIdQuery(params.id, {
    // Poll every 3 seconds ONLY if the report is still processing
    pollingInterval: isPolling ? 3000 : 0,
  });

  useEffect(() => {
    if (data?.report) {
      setIsPolling(false);
    } else if (isError) {
      const isGenerating =
        (error as { status?: number; data?: { status?: string } })?.status ===
          404 &&
        (error as { status?: number; data?: { status?: string } })?.data
          ?.status === 'Generating Report';
      if (!isGenerating) {
        setIsPolling(false);
      }
    }
  }, [data, isError, error]);

  if (isLoading) {
    return (
      <div className="container max-w-5xl animate-pulse space-y-8 py-12">
        <div className="h-32 rounded-xl bg-muted"></div>
        <div className="h-40 rounded-xl bg-muted"></div>
        <div className="space-y-4">
          <div className="h-96 rounded-xl bg-muted"></div>
          <div className="h-96 rounded-xl bg-muted"></div>
        </div>
      </div>
    );
  }

  // Handle the case where the AI generation is still in progress
  if (
    isError &&
    (error as { status?: number; data?: { status?: string } })?.status ===
      404 &&
    (error as { status?: number; data?: { status?: string } })?.data?.status ===
      'Generating Report'
  ) {
    return (
      <div className="container flex max-w-5xl flex-col items-center justify-center space-y-6 py-24 text-center">
        <Loader2 className="h-12 w-12 animate-spin text-indigo-500" />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            AI is analyzing your page...
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            Our CRO expert model is currently processing your website&apos;s
            data and formulating high-impact A/B test experiments. This usually
            takes 15-45 seconds.
          </p>
        </div>
      </div>
    );
  }

  if (isError || !data?.report) {
    return (
      <div className="container flex max-w-5xl flex-col items-center justify-center space-y-6 py-24 text-center">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Report Unavailable
          </h2>
          <p className="text-muted-foreground">
            We couldn&apos;t load this optimization report. It may not exist or
            you don&apos;t have permission to view it.
          </p>
        </div>
        <Link href="/dashboard">
          <Button variant="outline">Return to Dashboard</Button>
        </Link>
      </div>
    );
  }

  const { report } = data;

  return (
    <div className="container max-w-5xl space-y-8 py-8">
      <div>
        <Link href="/dashboard">
          <Button
            variant="ghost"
            className="-ml-4 mb-4 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
        <ReportHeader report={report} />
      </div>

      <ExecutiveDashboardCard
        summary={report.executiveSummary || 'No summary available'}
        report={report.executiveReport as ExecutiveReportType}
      />

      {report.revenueOpportunity && (
        <RevenueOpportunityCard
          revenueOpportunity={
            report.revenueOpportunity as RevenueOpportunityType
          }
        />
      )}

      {report.roadmap && (
        <PriorityRoadmapCard roadmap={report.roadmap as PriorityRoadmapType} />
      )}

      {report.psychologyAnalysis && (
        <PsychologyAnalysisCard
          psychologyAnalysis={
            report.psychologyAnalysis as PsychologyAnalysisType
          }
        />
      )}

      {report.trustAudit && (
        <TrustAuditCard trustAudit={report.trustAudit as TrustAuditType} />
      )}

      {report.copyBreakdown && (
        <CopyBreakdownCard
          copyBreakdown={report.copyBreakdown as CopyBreakdownType}
        />
      )}

      {report.behaviorSimulation && (
        <BehaviorSimulationCard
          behaviorSimulation={
            report.behaviorSimulation as BehaviorSimulationType
          }
        />
      )}

      {report.competitorGapAnalysis && (
        <CompetitorGapCard
          competitorGapAnalysis={
            report.competitorGapAnalysis as CompetitorGapType
          }
        />
      )}

      {report.annotations && (
        <ScreenshotAnnotationsCard
          screenshotUrl={report.screenshotUrl}
          annotations={report.annotations as Annotation[]}
        />
      )}

      {report.heatmapData && (
        <VisualHeatmapCard
          screenshotUrl={report.screenshotUrl}
          heatmapData={report.heatmapData as HeatmapPoint[]}
        />
      )}
    </div>
  );
}
