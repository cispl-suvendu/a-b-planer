'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, MousePointer2, AlertTriangle, ArrowDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BehaviorSimulationCardProps {
  behaviorSimulation: {
    first5Seconds?: string;
    scrollLikelihood?: string;
    primaryDistraction?: string;
    simulatedBounceReason?: string;
  };
}

export function BehaviorSimulationCard({
  behaviorSimulation,
}: BehaviorSimulationCardProps) {
  const {
    first5Seconds = 'Waiting for data...',
    scrollLikelihood = 'Unknown',
    primaryDistraction = 'None detected',
    simulatedBounceReason = 'N/A',
  } = behaviorSimulation;

  return (
    <Card className="overflow-hidden border-border/50 shadow-sm">
      <CardHeader className="border-b bg-gradient-to-r from-amber-500/10 to-transparent pb-4">
        <CardTitle className="flex items-center gap-2 text-lg text-amber-600 dark:text-amber-400">
          <Eye className="h-5 w-5" />
          First-Time Visitor Simulation
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Eye className="h-4 w-4" />
              First 5 Seconds
            </h4>
            <div className="h-full rounded-lg border bg-background p-4 shadow-sm">
              <p className="text-sm leading-relaxed text-foreground">
                {first5Seconds}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <ArrowDown className="h-4 w-4" />
              Scroll Likelihood
            </h4>
            <div className="flex h-full flex-col items-start justify-center rounded-lg border bg-background p-4 shadow-sm">
              <Badge
                variant={
                  scrollLikelihood.toLowerCase() === 'low'
                    ? 'destructive'
                    : scrollLikelihood.toLowerCase() === 'medium'
                      ? 'secondary'
                      : 'default'
                }
                className="mb-2 px-4 py-1 text-base"
              >
                {scrollLikelihood}
              </Badge>
              <p className="text-xs text-muted-foreground">
                {scrollLikelihood.toLowerCase() === 'low'
                  ? 'Users are unlikely to scroll past the hero section.'
                  : scrollLikelihood.toLowerCase() === 'medium'
                    ? 'Some users will scroll if the hero is compelling.'
                    : 'High chance users will explore the rest of the page.'}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 text-muted-foreground dark:text-amber-400">
              <MousePointer2 className="h-4 w-4" />
              Primary Distraction
            </h4>
            <div className="relative h-full rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 shadow-sm">
              <p className="text-sm leading-relaxed text-foreground">
                {primaryDistraction}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-destructive text-muted-foreground">
              <AlertTriangle className="h-4 w-4" />
              Simulated Bounce Reason
            </h4>
            <div className="relative h-full rounded-lg border border-destructive/20 bg-destructive/5 p-4 shadow-sm">
              <p className="text-sm font-medium leading-relaxed text-foreground">
                {simulatedBounceReason}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
