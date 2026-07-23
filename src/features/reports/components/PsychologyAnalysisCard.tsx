'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Zap, AlertTriangle, Lightbulb } from 'lucide-react';
import { CircularScore } from './CircularScore';
import { Badge } from '@/components/ui/badge';

interface PsychologyAnalysisCardProps {
  psychologyAnalysis: {
    cognitiveLoad?: string;
    frictionPoints?: string[];
    motivationTriggers?: string[];
    overallHeuristicScore?: number;
  };
}

export function PsychologyAnalysisCard({
  psychologyAnalysis,
}: PsychologyAnalysisCardProps) {
  const {
    cognitiveLoad = 'Unknown',
    frictionPoints = [],
    motivationTriggers = [],
    overallHeuristicScore,
  } = psychologyAnalysis;

  return (
    <Card className="overflow-hidden border-border/50 shadow-sm">
      <CardHeader className="border-b bg-gradient-to-r from-violet-500/10 to-transparent pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg text-violet-600 dark:text-violet-400">
            <Brain className="h-5 w-5" />
            Psychology & Behavioral Analysis
          </CardTitle>
          {overallHeuristicScore !== undefined && (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                Heuristic Score
              </span>
              <CircularScore
                score={overallHeuristicScore}
                size={48}
                strokeWidth={4}
              />
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Cognitive Load */}
          <div className="flex flex-col items-center justify-center rounded-xl border bg-muted/30 p-5 text-center">
            <Zap
              className={`mb-3 h-10 w-10 ${
                cognitiveLoad.toLowerCase() === 'high'
                  ? 'text-destructive'
                  : cognitiveLoad.toLowerCase() === 'medium'
                    ? 'text-amber-500'
                    : 'text-emerald-500'
              }`}
            />
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Cognitive Load
            </h4>
            <Badge
              variant={
                cognitiveLoad.toLowerCase() === 'high'
                  ? 'destructive'
                  : cognitiveLoad.toLowerCase() === 'medium'
                    ? 'secondary'
                    : 'default'
              }
              className="px-4 py-1 text-sm"
            >
              {cognitiveLoad}
            </Badge>
            <p className="mt-3 text-xs text-muted-foreground">
              {cognitiveLoad.toLowerCase() === 'high'
                ? 'Users have to think too much. Simplify.'
                : cognitiveLoad.toLowerCase() === 'medium'
                  ? 'Acceptable, but could be clearer.'
                  : 'Excellent! Very intuitive for users.'}
            </p>
          </div>

          {/* Friction Points */}
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-destructive">
              <AlertTriangle className="h-4 w-4" />
              Friction Points
            </h4>
            <ul className="space-y-3">
              {frictionPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 rounded-lg border border-destructive/10 bg-destructive/5 p-3 text-sm"
                >
                  <span className="font-bold text-destructive">•</span>
                  <span className="leading-tight">{point}</span>
                </li>
              ))}
              {frictionPoints.length === 0 && (
                <li className="text-sm italic text-muted-foreground">
                  No major friction points detected.
                </li>
              )}
            </ul>
          </div>

          {/* Motivation Triggers */}
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Lightbulb className="h-4 w-4" />
              Motivation Triggers
            </h4>
            <ul className="space-y-3">
              {motivationTriggers.map((trigger, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 rounded-lg border border-emerald-500/10 bg-emerald-500/5 p-3 text-sm"
                >
                  <span className="font-bold text-emerald-500">✓</span>
                  <span className="leading-tight">{trigger}</span>
                </li>
              ))}
              {motivationTriggers.length === 0 && (
                <li className="text-sm italic text-muted-foreground">
                  No clear motivation triggers detected.
                </li>
              )}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
