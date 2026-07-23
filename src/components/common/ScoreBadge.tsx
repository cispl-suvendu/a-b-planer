import React from 'react';
import { cn } from '@/lib/utils';

type ScoreType = 'success' | 'warning' | 'error' | 'info' | 'neutral';

interface ScoreBadgeProps {
  score: number;
  max?: number;
  label?: string;
  type?: ScoreType;
  className?: string;
}

export function ScoreBadge({
  score,
  max = 100,
  label,
  type = 'neutral',
  className,
}: ScoreBadgeProps) {
  // Auto-determine type based on standard 0-100 logic if not explicitly provided
  let computedType = type;
  if (type === 'neutral') {
    const percentage = (score / max) * 100;
    if (percentage >= 80) computedType = 'success';
    else if (percentage >= 50) computedType = 'warning';
    else computedType = 'error';
  }

  const baseClasses =
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold font-mono border transition-colors';

  const typeClasses: Record<ScoreType, string> = {
    success: 'bg-success/15 text-success border-success/30',
    warning: 'bg-warning/15 text-warning border-warning/30',
    error: 'bg-error/15 text-error border-error/30',
    info: 'bg-info/15 text-info border-info/30',
    neutral: 'bg-muted text-muted-foreground border-border',
  };

  return (
    <div className={cn(baseClasses, typeClasses[computedType], className)}>
      {label && (
        <span className="mr-1.5 font-sans font-medium opacity-80">
          {label}:
        </span>
      )}
      <span>{score}</span>
      <span className="ml-0.5 text-[10px] opacity-60">/{max}</span>
    </div>
  );
}
