'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Telescope, Map, Crosshair } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface CompetitorGapCardProps {
  competitorGapAnalysis: {
    inferredIndustry?: string;
    missingStandardFeatures?: string[];
    differentiationOpportunity?: string;
  };
}

export function CompetitorGapCard({
  competitorGapAnalysis,
}: CompetitorGapCardProps) {
  const {
    inferredIndustry = 'Unknown',
    missingStandardFeatures = [],
    differentiationOpportunity = 'No clear opportunity identified.',
  } = competitorGapAnalysis;

  return (
    <Card className="overflow-hidden border-border/50 shadow-sm">
      <CardHeader className="border-b bg-gradient-to-r from-teal-500/10 to-transparent pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg text-teal-600 dark:text-teal-400">
            <Telescope className="h-5 w-5" />
            Competitor Gap Analysis
          </CardTitle>
          <Badge
            variant="outline"
            className="border-teal-200 bg-teal-50 text-xs text-muted-foreground"
          >
            Industry: {inferredIndustry}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-destructive text-muted-foreground">
              <Map className="h-4 w-4" />
              Missing Standard Features
            </h4>
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
              Based on the inferred industry, these are standard elements your
              competitors likely have that you are currently missing.
            </p>
            <ul className="space-y-3">
              {missingStandardFeatures.map((feature, idx) => (
                <li key={idx} className="flex gap-3 text-sm">
                  <span className="mt-0.5 font-bold text-destructive">✗</span>
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
              {missingStandardFeatures.length === 0 && (
                <li className="text-sm italic text-muted-foreground">
                  No missing standard features detected. You are keeping up with
                  the industry!
                </li>
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground text-teal-600 dark:text-teal-400">
              <Crosshair className="h-4 w-4" />
              Differentiation Opportunity
            </h4>
            <div className="relative h-full rounded-xl border border-teal-500/20 bg-teal-500/5 p-5 shadow-sm">
              <p className="text-sm font-medium leading-relaxed text-foreground">
                {differentiationOpportunity}
              </p>
              <div className="mt-4 border-t border-teal-500/10 pt-4">
                <p className="text-xs text-muted-foreground">
                  Use this insight in your next A/B experiment to carve out a
                  unique value proposition in your market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
