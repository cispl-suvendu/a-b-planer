import React from 'react';
import { Button } from '@/components/ui/button';

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = 'Something went wrong',
  message,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-6 text-center duration-300 animate-in zoom-in-95">
      <h3 className="mb-2 text-lg font-semibold text-destructive">{title}</h3>
      <p className="mb-4 text-sm text-destructive/90">{message}</p>
      {onRetry && (
        <Button variant="destructive" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}
