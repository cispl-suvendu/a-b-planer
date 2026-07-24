import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function AnalysisHistorySkeleton() {
  return (
    <Card className="w-full duration-500 animate-in fade-in">
      <CardHeader>
        <Skeleton className="mb-2 h-7 w-40 rounded-md sm:w-48" />
        <Skeleton className="h-4 w-64 rounded-md sm:w-72" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border p-5"
            >
              <div className="flex items-center gap-5">
                <Skeleton className="h-16 w-24 flex-shrink-0 rounded-lg" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-6 w-32 rounded-md sm:w-64" />
                  <div className="flex gap-4">
                    <Skeleton className="h-5 w-24 rounded-md" />
                    <Skeleton className="h-5 w-20 rounded-full" />
                  </div>
                </div>
              </div>
              <Skeleton className="hidden h-9 w-28 rounded-md sm:block" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
