'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  useGetAnalysisHistoryQuery,
  AnalysisRecord,
} from '@/features/dashboard/api/dashboardApi';
import { EmptyState } from '@/components/common/EmptyState';
import { ErrorState } from '@/components/common/ErrorState';
import { ScoreBadge } from '@/components/common/ScoreBadge';
import { BarChart3, ExternalLink, Clock, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnalysisHistorySkeleton } from './AnalysisHistorySkeleton';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { usePrevious } from '@/hooks/use-previous';

interface AnalysisHistoryListProps {
  showPagination?: boolean;
  limit?: number;
}

export function AnalysisHistoryList({
  showPagination = false,
  limit = 10,
}: AnalysisHistoryListProps = {}) {
  const { toast } = useToast();
  const [page, setPage] = useState(1);

  // We use polling as a robust fallback for Vercel Serverless environments
  // where in-memory SSE event emitters don't work across lambda boundaries.
  const { data: temp } = useGetAnalysisHistoryQuery({ page, limit });
  const hasActive = temp?.data?.some(
    (a) =>
      a.status === 'Queued' ||
      a.status === 'Processing' ||
      a.status === 'Generating Report'
  );

  const { data, isLoading, isError, refetch } = useGetAnalysisHistoryQuery(
    { page, limit },
    { pollingInterval: hasActive ? 3000 : 0 }
  );

  const history = React.useMemo(() => data?.data || [], [data]);
  const meta = data?.meta;
  const totalPages = meta ? Math.ceil(meta.total / meta.limit) : 1;

  // Track previous history to detect completed state transitions
  const prevHistory = usePrevious(history);

  React.useEffect(() => {
    if (!prevHistory || !history) return;

    // Find items that transitioned to 'Completed' just now
    history.forEach((currentItem: AnalysisRecord) => {
      const prevItem = prevHistory.find(
        (p: AnalysisRecord) => p._id === currentItem._id
      );
      if (
        prevItem &&
        prevItem.status !== 'Completed' &&
        currentItem.status === 'Completed'
      ) {
        toast({
          title: 'Analysis Complete',
          description: `Your report for ${currentItem.url} is ready to view.`,
        });
      }
    });
  }, [history, prevHistory, toast]);

  if (isLoading) return <AnalysisHistorySkeleton />;
  if (isError)
    return (
      <Card>
        <CardContent className="pt-6">
          <ErrorState
            message="Could not load your analysis history."
            onRetry={refetch}
          />
        </CardContent>
      </Card>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Analyses</CardTitle>
        <CardDescription>
          View and access your previously generated landing page reports.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {history.length === 0 ? (
          <EmptyState
            icon={<BarChart3 />}
            title="No analyses yet"
            description="Start by entering a URL above to get your first conversion rate optimization report."
          />
        ) : (
          <div className="space-y-4">
            {history.map((item: AnalysisRecord) => (
              <div
                key={item._id}
                className="group flex items-center justify-between rounded-xl border bg-card p-5 transition-all hover:bg-muted/50 hover:shadow-lg"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border-2 bg-muted shadow-sm transition-transform group-hover:scale-105">
                    {item.screenshotUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.screenshotUrl}
                        alt={item.url}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <Monitor className="h-6 w-6 text-muted-foreground opacity-40" />
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="max-w-[200px] truncate text-lg font-semibold sm:max-w-xs md:max-w-md">
                      {item.url}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock className="h-4 w-4 text-indigo-500" />
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                      {item.status === 'Completed' ? (
                        <Badge
                          variant="outline"
                          className="border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
                        >
                          Completed
                        </Badge>
                      ) : item.status === 'Failed' ? (
                        <Badge
                          variant="outline"
                          className="border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-400"
                        >
                          Failed
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className="animate-pulse border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400"
                        >
                          {item.status}{' '}
                          {item.progress ? `(${item.progress}%)` : ''}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {item.status === 'Completed' ? (
                    <Link href={`/report/${item._id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hidden sm:flex"
                      >
                        View Report <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  ) : (
                    <ScoreBadge
                      score={item.progress || 0}
                      max={100}
                      type={item.status === 'Failed' ? 'error' : 'warning'}
                      label={item.status}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {showPagination && totalPages > 1 && (
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
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Next
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
