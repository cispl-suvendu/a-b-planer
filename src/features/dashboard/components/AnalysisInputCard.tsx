'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useStartAnalysisMutation } from '@/features/dashboard/api/dashboardApi';
import { Sparkles, Loader2, ArrowUpCircle } from 'lucide-react';
import { z } from 'zod';
import { UpgradeModal } from '@/features/billing/components/UpgradeModal';
import { AnalysisOverlay } from './AnalysisOverlay';

interface AnalysisInputCardProps {
  remaining: number | null;
  isUnlimited: boolean;
}

const urlSchema = z.string().url();

export function AnalysisInputCard({
  remaining,
  isUnlimited,
}: AnalysisInputCardProps) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [startAnalysis, { isLoading }] = useStartAnalysisMutation();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [activeAnalysisId, setActiveAnalysisId] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setError('');
    const result = urlSchema.safeParse(url);
    if (!result.success) {
      setError('Please enter a valid URL including https://');
      return;
    }

    if (!isUnlimited && remaining !== null && remaining <= 0) {
      setShowUpgradeModal(true);
      return;
    }

    try {
      const response = await startAnalysis({ url }).unwrap();
      setUrl('');
      setActiveAnalysisId(response.analysisId);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err?.status === 403) {
        setShowUpgradeModal(true);
      } else {
        setError(
          err?.data?.message || 'Failed to start analysis. Please try again.'
        );
      }
    }
  };

  return (
    <Card className="relative overflow-hidden border-2 border-indigo-500/20 bg-gradient-to-br from-background to-indigo-50/30 shadow-2xl shadow-indigo-500/10 dark:to-indigo-950/20">
      <CardHeader className="pb-8 pt-8">
        <CardTitle className="flex items-center gap-3 text-3xl font-extrabold tracking-tight">
          <div className="rounded-full bg-indigo-100 p-2.5 text-indigo-600 shadow-inner dark:bg-indigo-900/50 dark:text-indigo-400">
            <Sparkles className="h-7 w-7" />
          </div>
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            New Landing Page Analysis
          </span>
        </CardTitle>
        <CardDescription className="mt-2 text-base font-medium text-muted-foreground">
          Enter the URL of the landing page you want to analyze for conversion
          rate optimization.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex w-full items-center space-x-2">
            <Input
              type="url"
              placeholder="https://your-landing-page.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              disabled={isLoading}
              className="h-14 flex-1 rounded-xl border-2 px-5 text-lg shadow-sm transition-all focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
            />
            <Button
              onClick={handleAnalyze}
              disabled={isLoading}
              size="lg"
              className={
                !isUnlimited && remaining === 0
                  ? 'h-14 rounded-xl bg-indigo-600 px-8 text-lg font-semibold transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25'
                  : 'h-14 rounded-xl bg-indigo-600 px-8 text-lg font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25 active:translate-y-0'
              }
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {!isUnlimited && remaining === 0 ? (
                <>
                  <ArrowUpCircle className="mr-2 h-4 w-4" />
                  Upgrade to Pro
                </>
              ) : (
                'Analyze'
              )}
            </Button>
          </div>
          {error && (
            <p className="mt-1 text-sm font-medium text-destructive">{error}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t bg-muted/50 py-3">
        <p className="text-xs text-muted-foreground">
          {isUnlimited ? (
            'Unlimited analyses remaining on your Pro plan.'
          ) : (
            <span>
              You have <strong className="text-foreground">{remaining}</strong>{' '}
              out of 4 free analyses remaining.
            </span>
          )}
        </p>
        {!isUnlimited && (
          <Button
            variant="link"
            size="sm"
            onClick={() => setShowUpgradeModal(true)}
            className="h-auto p-0 text-indigo-600"
          >
            View Plans
          </Button>
        )}
      </CardFooter>
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
      />

      {/* Analysis Overlay */}
      {activeAnalysisId && <AnalysisOverlay analysisId={activeAnalysisId} />}
    </Card>
  );
}
