import { Card, CardContent } from '@/components/ui/card';
import { Target, CheckCircle2, AlertCircle } from 'lucide-react';
import { CircularScore } from './CircularScore';

interface ExecutiveDashboardCardProps {
  summary: string;
  report?: {
    scores?: {
      overall?: number;
      performance?: number;
      ux?: number;
      messaging?: number;
      trust?: number;
      seo?: number;
      accessibility?: number;
      conversion?: number;
    };
    topWins?: string[];
    topProblems?: string[];
  };
}

export function ExecutiveDashboardCard({
  summary,
  report,
}: ExecutiveDashboardCardProps) {
  const scores = report?.scores;
  const topWins = report?.topWins || [];
  const topProblems = report?.topProblems || [];

  return (
    <Card className="overflow-hidden border-border/50 shadow-sm">
      <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 flex items-center gap-2 text-2xl font-bold tracking-tight">
              <Target className="h-6 w-6 text-indigo-500" />
              Executive Summary
            </h2>
            <p className="max-w-3xl leading-relaxed text-muted-foreground">
              {summary}
            </p>
          </div>
          {scores?.overall !== undefined && (
            <div className="flex min-w-[120px] flex-col items-center justify-center rounded-xl border bg-background p-4 shadow-sm">
              <span className="mb-1 text-sm font-medium text-muted-foreground">
                Overall Score
              </span>
              <span className="text-4xl font-black text-primary">
                {scores.overall}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">/ 100</span>
            </div>
          )}
        </div>
      </div>

      <CardContent className="p-6">
        {scores && (
          <div className="mb-8 flex w-full flex-wrap justify-center gap-4 md:justify-between">
            <ScoreItem label="Performance" score={scores.performance} />
            <ScoreItem label="Accessibility" score={scores.accessibility} />
            <ScoreItem label="Best Practices" score={scores.ux} />
            <ScoreItem label="SEO" score={scores.seo} />
            <ScoreItem label="Messaging" score={scores.messaging} />
            <ScoreItem label="Trust" score={scores.trust} />
            <ScoreItem label="Conversion" score={scores.conversion} />
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {topProblems.length > 0 && (
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-destructive">
                <AlertCircle className="h-5 w-5" />
                Top {topProblems.length} Problems
              </h3>
              <ul className="space-y-3">
                {topProblems.map((problem, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-lg border border-destructive/10 bg-destructive/5 p-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-destructive/20 text-xs font-bold text-destructive">
                      {idx + 1}
                    </span>
                    <span className="text-sm">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {topWins.length > 0 && (
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-emerald-500">
                <CheckCircle2 className="h-5 w-5" />
                Top {topWins.length} Wins
              </h3>
              <ul className="space-y-3">
                {topWins.map((win, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-lg border border-emerald-500/10 bg-emerald-500/5 p-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {idx + 1}
                    </span>
                    <span className="text-sm">{win}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function ScoreItem({ label, score }: { label: string; score?: number }) {
  if (score === undefined) return null;
  return (
    <div className="flex min-w-[100px] flex-1 flex-col items-center justify-center gap-3">
      <CircularScore score={score} size={76} strokeWidth={6} />
      <span className="whitespace-nowrap text-sm font-medium text-foreground">
        {label}
      </span>
    </div>
  );
}
