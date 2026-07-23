import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target } from 'lucide-react';

interface SummaryCardProps {
  summary: string;
}

export function SummaryCard({ summary }: SummaryCardProps) {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Target className="h-5 w-5 text-indigo-500" />
          Executive Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed text-muted-foreground">{summary}</p>
      </CardContent>
    </Card>
  );
}
