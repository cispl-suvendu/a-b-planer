import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, LineChart } from 'lucide-react';
import { IExperimentResponse } from '../api/reportApi';
import { ScoreBadge } from './ScoreBadge';
import { VariantComparison } from './VariantComparison';
import { ImplementationSection } from './ImplementationSection';

interface ExperimentCardProps {
  experiment: IExperimentResponse;
  index: number;
}

export function ExperimentCard({ experiment, index }: ExperimentCardProps) {
  return (
    <Card className="overflow-hidden border-border/60 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <CardHeader className="border-b border-border/40 bg-slate-50/50 pb-4 dark:bg-slate-900/20">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="mb-1 flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-white font-mono text-xs text-slate-500 dark:bg-slate-950"
              >
                Experiment #{index + 1}
              </Badge>
              <div className="flex items-center gap-1 rounded-full border border-indigo-100 bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-600 dark:border-indigo-900/50 dark:bg-indigo-950/50 dark:text-indigo-400">
                <LineChart className="h-3 w-3" />
                {experiment.winnerMetric}
              </div>
            </div>
            <CardTitle className="text-xl">{experiment.title}</CardTitle>
          </div>
          <ScoreBadge score={experiment.priorityScore} />
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              The Problem
            </h4>
            <p className="text-sm text-muted-foreground">
              {experiment.currentProblem}
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="flex items-center gap-1.5 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
              <BrainCircuit className="h-4 w-4" />
              AI Hypothesis
            </h4>
            <p className="text-sm text-muted-foreground">
              {experiment.hypothesis}
            </p>
          </div>
        </div>

        <VariantComparison
          variantA={experiment.variantA}
          variantB={experiment.variantB}
        />

        <div className="space-y-2 pt-2">
          <h4 className="text-sm font-semibold">Strategic Reasoning</h4>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {experiment.reasoning}
          </p>
        </div>

        <ImplementationSection
          implementation={experiment.implementation}
          copySuggestion={experiment.copySuggestion}
        />
      </CardContent>
    </Card>
  );
}
