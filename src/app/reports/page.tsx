'use client';

import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { AnalysisHistoryList } from '@/features/dashboard/components/AnalysisHistoryList';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function ReportsPage() {
  const { status } = useSession();

  if (status === 'unauthenticated') {
    redirect('/login');
  }

  return (
    <AppShell>
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            Browse and access all of your generated landing page optimization
            reports.
          </p>
        </div>

        {/* We reuse the AnalysisHistoryList component here since it neatly fetches and displays recent reports */}
        <AnalysisHistoryList showPagination={true} limit={10} />
      </div>
    </AppShell>
  );
}
