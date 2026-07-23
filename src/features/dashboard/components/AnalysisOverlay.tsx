'use client';

import React, { useEffect, useState } from 'react';
import { useGetAnalysisHistoryQuery } from '../api/dashboardApi';
import { useRouter } from 'next/navigation';
import { Loader2, Monitor, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnalysisOverlayProps {
  analysisId: string | null;
}

export function AnalysisOverlay({ analysisId }: AnalysisOverlayProps) {
  // Derive if polling is needed
  const { data: temp } = useGetAnalysisHistoryQuery({ page: 1, limit: 10 });
  const hasActive = temp?.data?.some(
    (a) =>
      a._id === analysisId &&
      (a.status === 'Queued' ||
        a.status === 'Processing' ||
        a.status === 'Generating Report')
  );

  const { data } = useGetAnalysisHistoryQuery(
    { page: 1, limit: 10 },
    { pollingInterval: hasActive ? 3000 : 0 }
  );

  const router = useRouter();
  const [isFadingOut, setIsFadingOut] = useState(false);

  const analysis = data?.data?.find((a) => a._id === analysisId);
  const progress = analysis?.progress || 0;

  // If we rely on polling (Vercel), 'stage' might not be provided via SSE, so we derive it from progress
  let displayStage = analysis?.stage;
  if (!displayStage) {
    if (progress < 15) displayStage = 'Validating URL safety...';
    else if (progress < 40) displayStage = 'Capturing website structure...';
    else if (progress < 80)
      displayStage = 'Extracting Content & Running Audit...';
    else if (progress < 100) displayStage = 'Generating AI Analysis...';
    else displayStage = 'Completed';
  }

  useEffect(() => {
    if (analysis?.status === 'Completed' && !isFadingOut) {
      setIsFadingOut(true);
      setTimeout(() => {
        router.push(`/report/${analysisId}`);
      }, 800);
    }
  }, [analysis?.status, analysisId, router, isFadingOut]);

  if (!analysisId || !analysis) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md transition-opacity duration-1000',
        isFadingOut ? 'pointer-events-none opacity-0' : 'opacity-100'
      )}
    >
      <div className="flex h-[80vh] w-full max-w-5xl flex-col items-center px-4">
        {/* Header */}
        <div className="mb-2 flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <Cpu className="h-6 w-6 animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold">AI Auditing</h2>
        </div>
        <p className="mb-6 font-mono text-sm text-muted-foreground">
          {analysis.url}
        </p>

        {/* Live Progress Text */}
        <div className="mb-8 flex items-center gap-3 rounded-full border bg-muted/50 px-6 py-3 shadow-sm">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
          <span className="text-lg font-medium">
            {displayStage || 'Initializing analysis engines...'}
          </span>
          <span className="ml-2 font-bold text-primary">
            {analysis.progress || 0}%
          </span>
        </div>

        {/* Visual Scanner Area */}
        <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden rounded-xl border-2 border-border/50 bg-muted/30 shadow-2xl">
          {!analysis.screenshotUrl ? (
            <div className="flex animate-pulse flex-col items-center text-muted-foreground">
              <Monitor className="mb-4 h-16 w-16 opacity-50" />
              <p className="text-sm font-medium uppercase tracking-widest">
                Capturing Website Structure...
              </p>
            </div>
          ) : (
            <div className="relative h-full w-full bg-background">
              {/* The Screenshot */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={analysis.screenshotUrl}
                alt="Website Screenshot"
                className="h-full w-full object-cover object-top opacity-60"
              />

              {/* Grid Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:40px_40px]" />

              {/* Moving Scan Line */}
              <div className="pointer-events-none absolute left-0 z-10 h-[3px] w-full animate-scan bg-primary shadow-[0_0_20px_5px_rgba(var(--primary),0.6)]" />

              {/* Floating Highlight Boxes to simulate AI detecting elements */}
              <div
                className="pointer-events-none absolute left-[10%] top-[15%] h-24 w-48 animate-pulse rounded border border-primary/50 bg-primary/5"
                style={{ animationDuration: '2s' }}
              />
              <div
                className="pointer-events-none absolute right-[15%] top-[35%] h-32 w-64 animate-pulse rounded border border-indigo-500/50 bg-indigo-500/5"
                style={{ animationDuration: '3s', animationDelay: '500ms' }}
              />
              <div
                className="pointer-events-none absolute bottom-[20%] left-[30%] h-32 w-32 animate-pulse rounded border border-green-500/50 bg-green-500/5"
                style={{ animationDuration: '2.5s', animationDelay: '1000ms' }}
              />

              {/* Crosshairs */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 opacity-50">
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/50" />
                <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-primary/50" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
