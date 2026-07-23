import React from 'react';

interface CircularScoreProps {
  score: number;
  size?: number;
  strokeWidth?: number;
}

export function CircularScore({
  score,
  size = 64,
  strokeWidth = 5,
}: CircularScoreProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  let colorClass = 'text-destructive';
  let bgClass = 'text-destructive/20';
  let textClass = 'text-destructive';
  let innerBgClass = 'fill-destructive/10';

  if (score >= 90) {
    colorClass = 'text-emerald-500';
    bgClass = 'text-emerald-500/20';
    textClass = 'text-emerald-700 dark:text-emerald-400';
    innerBgClass = 'fill-emerald-500/10';
  } else if (score >= 50) {
    colorClass = 'text-amber-500';
    bgClass = 'text-amber-500/20';
    textClass = 'text-amber-700 dark:text-amber-500';
    innerBgClass = 'fill-amber-500/10';
  }

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90 transform">
        {/* Inner background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius - 1} // slightly smaller to fit inside perfectly
          className={innerBgClass}
        />
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          className={bgClass}
          stroke="currentColor"
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`${colorClass} transition-all duration-1000 ease-out`}
          stroke="currentColor"
        />
      </svg>
      <span
        className={`absolute font-mono text-lg font-bold tracking-tighter ${textClass}`}
      >
        {score}
      </span>
    </div>
  );
}
