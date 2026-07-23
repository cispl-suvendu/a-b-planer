import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, ArrowUpRight } from 'lucide-react';

interface RevenueOpportunityCardProps {
  revenueOpportunity: {
    heroLift?: number;
    ctaLift?: number;
    trustLift?: number;
    pricingLift?: number;
    totalLift?: number;
  };
}

export function RevenueOpportunityCard({
  revenueOpportunity,
}: RevenueOpportunityCardProps) {
  const {
    heroLift = 0,
    ctaLift = 0,
    trustLift = 0,
    pricingLift = 0,
    totalLift = 0,
  } = revenueOpportunity;

  // If we don't have a total lift or any data, hide this component
  if (!totalLift && !heroLift && !ctaLift) return null;

  return (
    <Card className="overflow-hidden border-border/50 bg-gradient-to-br from-background to-emerald-500/5 shadow-sm">
      <CardHeader className="border-b border-emerald-500/10 pb-3">
        <CardTitle className="flex items-center gap-2 text-lg text-emerald-600 dark:text-emerald-400">
          <DollarSign className="h-5 w-5" />
          Revenue Opportunity
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full flex-1 space-y-6">
            <p className="text-sm text-muted-foreground">
              Based on industry benchmarks and our AI analysis, resolving these
              top issues can yield the following estimated conversion lifts:
            </p>
            <div className="space-y-4">
              <LiftRow label="Hero Section Improvements" value={heroLift} />
              <LiftRow label="CTA Visibility & Copy" value={ctaLift} />
              <LiftRow label="Trust Signals & Social Proof" value={trustLift} />
              <LiftRow label="Pricing Clarity" value={pricingLift} />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-emerald-500 p-8 text-white shadow-lg shadow-emerald-500/20 md:w-64">
            <TrendingUp className="mb-2 h-10 w-10 opacity-80" />
            <span className="mb-1 text-sm font-medium uppercase tracking-widest text-emerald-100">
              Potential Total
            </span>
            <div className="flex items-start">
              <span className="text-5xl font-black">+{totalLift}</span>
              <span className="mt-1 text-2xl font-bold">%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function LiftRow({ label, value }: { label: string; value: number }) {
  if (!value) return null;
  return (
    <div className="flex items-center justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-sm font-bold text-emerald-600 dark:text-emerald-400">
        <ArrowUpRight className="h-4 w-4" />
        {value}%
      </div>
    </div>
  );
}
