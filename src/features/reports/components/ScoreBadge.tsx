import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ArrowUpRight, TrendingUp, Zap } from 'lucide-react';

interface ScoreBadgeProps {
  score: number;
}

export function ScoreBadge({ score }: ScoreBadgeProps) {
  // Determine style based on score value
  let variantClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
  let Icon = TrendingUp;
  let label = 'Medium Priority';

  if (score >= 25) {
    variantClass =
      'bg-rose-100 text-rose-700 hover:bg-rose-200 border-rose-200';
    Icon = Zap;
    label = 'Highest Priority';
  } else if (score >= 15) {
    variantClass =
      'bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-200';
    Icon = ArrowUpRight;
    label = 'High Priority';
  } else if (score < 8) {
    variantClass =
      'bg-slate-100 text-slate-500 hover:bg-slate-200 border-slate-200';
    label = 'Low Priority';
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <Badge
        variant="outline"
        className={cn(
          'flex items-center gap-1.5 border px-2.5 py-1 text-xs font-medium',
          variantClass
        )}
      >
        <Icon className="h-3 w-3" />
        {label}
      </Badge>
      <span className="font-mono text-xs text-muted-foreground">
        Score: {score.toFixed(1)}
      </span>
    </div>
  );
}
