'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, ShieldAlert, ShieldCheck } from 'lucide-react';
import { CircularScore } from './CircularScore';

interface TrustAuditCardProps {
  trustAudit: {
    trustScore?: number;
    missingSignals?: string[];
    credibilityStrengths?: string[];
    riskReversalStatus?: string;
  };
}

export function TrustAuditCard({ trustAudit }: TrustAuditCardProps) {
  const {
    trustScore,
    missingSignals = [],
    credibilityStrengths = [],
    riskReversalStatus = 'Unknown',
  } = trustAudit;

  return (
    <Card className="overflow-hidden border-border/50 shadow-sm">
      <CardHeader className="border-b bg-gradient-to-r from-blue-500/10 to-transparent pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg text-blue-600 dark:text-blue-400">
            <Shield className="h-5 w-5" />
            Trust & Credibility Audit
          </CardTitle>
          {trustScore !== undefined && (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                Trust Score
              </span>
              <CircularScore score={trustScore} size={48} strokeWidth={4} />
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="space-y-6 md:col-span-4">
            <div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Risk Reversal Status
              </h4>
              <div className="flex items-center gap-3">
                {riskReversalStatus.toLowerCase() === 'excellent' ? (
                  <ShieldCheck className="h-8 w-8 text-emerald-500" />
                ) : riskReversalStatus.toLowerCase() === 'poor' ? (
                  <ShieldAlert className="h-8 w-8 text-destructive" />
                ) : (
                  <Shield className="h-8 w-8 text-blue-500" />
                )}
                <span className="text-xl font-bold capitalize">
                  {riskReversalStatus}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Risk reversal reduces the perceived risk of converting (e.g.,
                Money-back guarantees, free trials, zero-commitment).
              </p>
            </div>
          </div>

          <div className="space-y-4 md:col-span-4">
            <h4 className="border-b pb-2 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Credibility Strengths
            </h4>
            <ul className="space-y-3">
              {credibilityStrengths.map((strength, idx) => (
                <li key={idx} className="flex gap-3 text-sm">
                  <span className="mt-0.5 font-bold text-emerald-500">✓</span>
                  <span className="leading-tight">{strength}</span>
                </li>
              ))}
              {credibilityStrengths.length === 0 && (
                <li className="text-sm italic text-muted-foreground">
                  No major strengths found.
                </li>
              )}
            </ul>
          </div>

          <div className="space-y-4 md:col-span-4">
            <h4 className="border-b pb-2 text-sm font-semibold uppercase tracking-wider text-destructive">
              Missing Trust Signals
            </h4>
            <ul className="space-y-3">
              {missingSignals.map((signal, idx) => (
                <li key={idx} className="flex gap-3 text-sm">
                  <span className="mt-0.5 font-bold text-destructive">✗</span>
                  <span className="leading-tight">{signal}</span>
                </li>
              ))}
              {missingSignals.length === 0 && (
                <li className="text-sm italic text-muted-foreground">
                  No missing signals detected.
                </li>
              )}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
