'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  useGetAnalysisHistoryQuery,
  AnalysisRecord,
} from '@/features/dashboard/api/dashboardApi';
import { EmptyState } from '@/components/common/EmptyState';
import { LoadingState } from '@/components/common/LoadingState';
import { ErrorState } from '@/components/common/ErrorState';
import { ScoreBadge } from '@/components/common/ScoreBadge';
import { BarChart3, ExternalLink, Clock, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
  const { data, isLoading, isError, refetch } = useGetAnalysisHistoryQuery({
    page,
    limit,
  });

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

  if (isLoading)
    return (
      <Card>
        <CardContent className="pt-6">
          <LoadingState message="Loading your history..." />
        </CardContent>
      </Card>
    );
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
                className="flex items-center justify-between rounded-lg border bg-card p-4 transition-colors hover:bg-accent/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded border bg-muted">
                    {item.screenshotUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.screenshotUrl}
                        alt={item.url}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <Monitor className="h-5 w-5 text-muted-foreground opacity-50" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="max-w-[200px] truncate font-medium sm:max-w-xs md:max-w-sm">
                      {item.url}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />{' '}
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                      <span>Status: {item.status}</span>
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
