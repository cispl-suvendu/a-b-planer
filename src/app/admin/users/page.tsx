'use client';

import React, { useEffect, useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { LoadingState } from '@/components/common/LoadingState';
import { ErrorState } from '@/components/common/ErrorState';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface AdminUserListItem {
  id: string;
  name: string;
  email: string;
  role: string;
  subscriptionPlan: string;
  analysisUsed: number;
  createdAt: string;
}

interface UsersResponse {
  users: AdminUserListItem[];
  total: number;
  pages: number;
}

export default function AdminUsersPage() {
  const [data, setData] = useState<UsersResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (page: number) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await fetch(`/api/admin/users?page=${page}&limit=20`);
      if (!res.ok) throw new Error('Failed to load users');
      const result = await res.json();
      setData(result);
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
        <div className="flex flex-col gap-2">
          <Link
            href="/admin"
            className="mb-2 flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Manage Users</h1>
          <p className="text-muted-foreground">
            View all registered users and their subscription status.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>User Directory</CardTitle>
            <CardDescription>
              A complete list of all users on the platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <LoadingState message="Loading users..." />
            ) : isError ? (
              <ErrorState
                message="Failed to load users."
                onRetry={() => fetchUsers(page)}
              />
            ) : data && data.users.length > 0 ? (
              <div className="overflow-x-auto rounded-md border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 font-medium">Name</th>
                      <th className="px-4 py-3 font-medium">Email</th>
                      <th className="px-4 py-3 font-medium">Role</th>
                      <th className="px-4 py-3 font-medium">Plan</th>
                      <th className="px-4 py-3 text-right font-medium">
                        Usage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {data.users.map((user) => (
                      <tr
                        key={user.id}
                        className="transition-colors hover:bg-muted/50"
                      >
                        <td className="px-4 py-3 font-medium">{user.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {user.email}
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            variant={
                              user.role === 'ADMIN' ? 'default' : 'secondary'
                            }
                          >
                            {user.role}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            variant={
                              user.subscriptionPlan === 'PRO'
                                ? 'default'
                                : 'outline'
                            }
                          >
                            {user.subscriptionPlan}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-right">
                          {user.analysisUsed}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="py-8 text-center text-muted-foreground">
                No users found.
              </div>
            )}

            {data && data.pages > 1 && (
              <div className="mt-4 flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {page} of {data.pages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page >= data.pages}
                  onClick={() => setPage((p) => Math.min(data.pages, p + 1))}
                >
                  Next
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
