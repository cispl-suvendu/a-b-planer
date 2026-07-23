import React from 'react';

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-4">
      {/* Premium subtle animated spinner */}
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
      <p className="animate-pulse text-sm font-medium text-muted-foreground">
        {message}
      </p>
    </div>
  );
}
