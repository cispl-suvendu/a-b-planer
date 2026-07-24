import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { AnalysisHistorySkeleton } from './AnalysisHistorySkeleton';

export function DashboardSkeleton() {
  return (
    <div className="w-full space-y-8 duration-500 animate-in fade-in">
      {/* Input Card Skeleton */}
      <Card className="relative overflow-hidden border-2 border-indigo-500/10">
        <CardHeader className="pb-8 pt-8">
          <div className="flex items-center gap-3">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-9 w-64 rounded-md" />
          </div>
          <Skeleton className="mt-2 h-5 w-80 rounded-md sm:w-96" />
        </CardHeader>
        <CardContent>
          <div className="flex w-full flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
            <Skeleton className="h-14 flex-1 rounded-xl" />
            <Skeleton className="h-14 w-full rounded-xl sm:w-32" />
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t bg-muted/50 py-3">
          <Skeleton className="h-4 w-48 rounded-md sm:w-64" />
          <Skeleton className="h-4 w-20 rounded-md" />
        </CardFooter>
      </Card>

      <AnalysisHistorySkeleton />
    </div>
  );
}
