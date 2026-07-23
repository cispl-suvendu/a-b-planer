import { Code, Terminal } from 'lucide-react';

interface ImplementationSectionProps {
  implementation: string;
  copySuggestion?: string;
}

export function ImplementationSection({
  implementation,
  copySuggestion,
}: ImplementationSectionProps) {
  return (
    <div className="mt-4 space-y-3 border-t border-border/50 pt-4">
      <div>
        <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold">
          <Terminal className="h-4 w-4 text-slate-500" />
          Implementation Guide
        </h4>
        <p className="rounded-md border border-slate-100 bg-slate-50 p-3 text-sm leading-relaxed text-muted-foreground dark:border-slate-800 dark:bg-slate-900">
          {implementation}
        </p>
      </div>

      {copySuggestion && (
        <div>
          <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold">
            <Code className="h-4 w-4 text-slate-500" />
            Suggested Copy
          </h4>
          <div className="rounded-md border border-indigo-100 bg-indigo-50 p-3 text-sm font-medium text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/30 dark:text-indigo-300">
            &quot;{copySuggestion}&quot;
          </div>
        </div>
      )}
    </div>
  );
}
