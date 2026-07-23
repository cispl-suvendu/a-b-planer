'use client';

import React, { useEffect, useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BarChart3, CreditCard } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LoadingState } from '@/components/common/LoadingState';
import { ErrorState } from '@/components/common/ErrorState';

interface AdminStats {
  totalUsers: number;
  totalAnalyses: number;
  paidUsers: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await fetch('/api/admin/stats');
      if (!res.ok) throw new Error('Failed to load stats');
      const data = await res.json();
      setStats(data);
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppShell>
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Platform usage and health overview.
            </p>
          </div>
          <Link href="/admin/users">
            <Button variant="outline">Manage Users</Button>
          </Link>
        </div>

        {isLoading ? (
          <LoadingState message="Loading system metrics..." />
        ) : isError ? (
          <ErrorState
            message="Failed to load system metrics."
            onRetry={fetchStats}
          />
        ) : stats ? (
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Users
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalUsers}</div>
                <p className="text-xs text-muted-foreground">
                  Registered accounts
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Analyses
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalAnalyses}</div>
                <p className="text-xs text-muted-foreground">
                  AI insights generated
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Paid Subscriptions
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.paidUsers}</div>
                <p className="text-xs text-muted-foreground">
                  Active PRO users
                </p>
              </CardContent>
            </Card>
          </div>
        ) : null}
      </div>
    </AppShell>
  );
}
