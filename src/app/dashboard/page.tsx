'use client';

import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { AnalysisInputCard } from '@/features/dashboard/components/AnalysisInputCard';
import { AnalysisHistoryList } from '@/features/dashboard/components/AnalysisHistoryList';
import { useGetDashboardSummaryQuery } from '@/features/dashboard/api/dashboardApi';
import { DashboardSkeleton } from '@/features/dashboard/components/DashboardSkeleton';
import { ErrorState } from '@/components/common/ErrorState';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const {
    data: summary,
    isLoading,
    isError,
    refetch,
  } = useGetDashboardSummaryQuery(undefined, {
    skip: status !== 'authenticated',
  });

  if (status === 'unauthenticated') {
    redirect('/login');
  }

  return (
    <AppShell>
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {session?.user?.name || 'Optimizer'}. Find your next
            highest-impact landing page experiments.
          </p>
        </div>

        {isLoading ? (
          <DashboardSkeleton />
        ) : isError ? (
          <ErrorState
            message="Failed to load your dashboard data."
            onRetry={refetch}
          />
        ) : summary ? (
          <>
            <AnalysisInputCard
              remaining={summary.usage.remaining}
              isUnlimited={summary.usage.isUnlimited}
            />
            <AnalysisHistoryList />
          </>
        ) : null}
      </div>
    </AppShell>
  );
}
