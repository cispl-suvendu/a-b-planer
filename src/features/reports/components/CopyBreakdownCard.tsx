'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Type, MessageSquareText, Heading } from 'lucide-react';
import { CircularScore } from './CircularScore';

interface CopyBreakdownCardProps {
  copyBreakdown: {
    readabilityScore?: number;
    jargonCount?: number;
    valuePropositionClarity?: string;
    headlineCritique?: string;
    ctaCritique?: string;
  };
}

export function CopyBreakdownCard({ copyBreakdown }: CopyBreakdownCardProps) {
  const {
    readabilityScore,
    jargonCount = 0,
    valuePropositionClarity = 'Unknown',
    headlineCritique = 'No critique available.',
    ctaCritique = 'No critique available.',
  } = copyBreakdown;

  return (
    <Card className="overflow-hidden border-border/50 shadow-sm">
      <CardHeader className="border-b bg-gradient-to-r from-rose-500/10 to-transparent pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg text-rose-600 dark:text-rose-400">
            <Type className="h-5 w-5" />
            Copy & Messaging Breakdown
          </CardTitle>
          {readabilityScore !== undefined && (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                Readability Score
              </span>
              <CircularScore
                score={readabilityScore}
                size={48}
                strokeWidth={4}
              />
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="space-y-6 md:col-span-4">
            <div className="rounded-xl border bg-muted/30 p-4">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Value Prop Clarity
              </h4>
              <p className="text-lg font-bold capitalize text-foreground">
                {valuePropositionClarity}
              </p>
            </div>
            <div className="rounded-xl border bg-muted/30 p-4">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Industry Jargon Detected
              </h4>
              <div className="flex items-end gap-2">
                <span
                  className={`text-3xl font-black ${jargonCount > 3 ? 'text-destructive' : 'text-emerald-500'}`}
                >
                  {jargonCount}
                </span>
                <span className="pb-1 text-sm text-muted-foreground">
                  instances
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:col-span-8">
            <div className="space-y-2">
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                <Heading className="h-4 w-4" />
                Headline Critique
              </h4>
              <div className="relative rounded-lg border bg-background p-4 shadow-sm">
                <div className="absolute bottom-0 left-0 top-0 w-1 rounded-l-lg bg-rose-500" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {headlineCritique}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                <MessageSquareText className="h-4 w-4" />
                CTA Critique
              </h4>
              <div className="relative rounded-lg border bg-background p-4 shadow-sm">
                <div className="absolute bottom-0 left-0 top-0 w-1 rounded-l-lg bg-indigo-500" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {ctaCritique}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
