import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function ReportSkeleton() {
  return (
    <div className="container max-w-5xl space-y-8 py-8 duration-500 animate-in fade-in">
      {/* Back button & Header Skeleton */}
      <div>
        <Skeleton className="mb-4 h-5 w-32 rounded-md" />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <Skeleton className="h-10 w-64 rounded-md" />
            <Skeleton className="h-5 w-48 rounded-md" />
          </div>
          <Skeleton className="h-10 w-40 rounded-lg" />
        </div>
      </div>

      {/* Executive Summary Skeleton */}
      <Card>
        <CardHeader className="pb-4">
          <Skeleton className="h-8 w-48 rounded-md" />
          <Skeleton className="mt-2 h-4 w-64 rounded-md" />
        </CardHeader>
        <CardContent>
          <div className="mb-6 grid gap-6 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-24 rounded-md" />
                <Skeleton className="h-8 w-16 rounded-md" />
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-[90%] rounded-md" />
            <Skeleton className="h-4 w-[80%] rounded-md" />
          </div>
        </CardContent>
      </Card>

      {/* Revenue Opportunity Skeleton */}
      <Card className="border-indigo-500/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-7 w-56 rounded-md" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl border p-4">
                <Skeleton className="mb-2 h-4 w-20 rounded-md" />
                <Skeleton className="h-8 w-32 rounded-md" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Visual/Analysis Content Skeleton */}
      <Card>
        <CardHeader>
          <Skeleton className="h-7 w-48 rounded-md" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[400px] w-full rounded-xl" />
        </CardContent>
      </Card>
    </div>
  );
}
