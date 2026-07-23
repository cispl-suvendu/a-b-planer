import { ArrowRight } from 'lucide-react';

interface VariantComparisonProps {
  variantA: string;
  variantB: string;
}

export function VariantComparison({
  variantA,
  variantB,
}: VariantComparisonProps) {
  return (
    <div className="mt-4 grid grid-cols-1 items-stretch gap-4 rounded-xl border border-border/50 bg-muted/30 p-4 md:grid-cols-[1fr_auto_1fr]">
      <div className="relative space-y-2">
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
          Control (Variant A)
        </div>
        <div className="h-full rounded-lg border border-border bg-background p-4 text-sm text-muted-foreground shadow-sm">
          {variantA}
        </div>
      </div>

      <div className="flex items-center justify-center py-2 md:py-0">
        <div className="shrink-0 rounded-full border border-border bg-background p-2 shadow-sm">
          <ArrowRight className="hidden h-5 w-5 text-indigo-400 md:block" />
          <ArrowRight className="block h-5 w-5 rotate-90 text-indigo-400 md:hidden" />
        </div>
      </div>

      <div className="relative space-y-2">
        <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
          Proposed (Variant B)
        </div>
        <div className="h-full rounded-lg border border-indigo-500/20 bg-background p-4 text-sm font-medium text-foreground shadow-sm ring-1 ring-indigo-500/10">
          {variantB}
        </div>
      </div>
    </div>
  );
}
