import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PriorityRoadmapCardProps {
  roadmap: {
    week1?: { task: string; category: string; impact: string }[];
    week2?: { task: string; category: string; impact: string }[];
    week3?: { task: string; category: string; impact: string }[];
  };
}

export function PriorityRoadmapCard({ roadmap }: PriorityRoadmapCardProps) {
  if (!roadmap.week1 && !roadmap.week2 && !roadmap.week3) return null;

  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader className="border-b pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Calendar className="h-5 w-5 text-indigo-500" />
          AI Priority Roadmap
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-6 md:grid-cols-3">
          <RoadmapWeek title="Week 1" tasks={roadmap.week1} isFirst />
          <RoadmapWeek title="Week 2" tasks={roadmap.week2} />
          <RoadmapWeek title="Week 3" tasks={roadmap.week3} />
        </div>
      </CardContent>
    </Card>
  );
}

function RoadmapWeek({
  title,
  tasks,
  isFirst,
}: {
  title: string;
  tasks?: { task: string; category: string; impact: string }[];
  isFirst?: boolean;
}) {
  if (!tasks || tasks.length === 0) return null;

  return (
    <div className="relative">
      {!isFirst && (
        <div className="absolute -left-4 top-1/2 hidden -translate-y-1/2 text-muted-foreground/30 md:block">
          <ArrowRight className="h-6 w-6" />
        </div>
      )}
      <div className="h-full rounded-xl border border-border/50 bg-muted/30 p-4">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
          {title}
        </h3>
        <ul className="space-y-4">
          {tasks.map((t, idx) => (
            <li
              key={idx}
              className="space-y-2 rounded-lg border bg-background p-3 shadow-sm"
            >
              <p className="text-sm font-medium leading-tight">{t.task}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {t.category}
                </span>
                <Badge
                  variant={
                    t.impact.toLowerCase() === 'high'
                      ? 'destructive'
                      : t.impact.toLowerCase() === 'medium'
                        ? 'default'
                        : 'secondary'
                  }
                  className="px-1.5 py-0 text-[10px]"
                >
                  {t.impact} Impact
                </Badge>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
