'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MousePointerClick, AlertCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export interface Annotation {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  suggestion: string;
}

interface ScreenshotAnnotationsCardProps {
  screenshotUrl?: string;
  annotations?: Annotation[];
}

export function ScreenshotAnnotationsCard({
  screenshotUrl,
  annotations,
}: ScreenshotAnnotationsCardProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setScale(entry.contentRect.width / 1440);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (!screenshotUrl || !annotations || annotations.length === 0) return null;

  return (
    <Card className="overflow-hidden border-border/50 shadow-sm">
      <CardHeader className="border-b pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <MousePointerClick className="h-5 w-5 text-indigo-500" />
          Visual AI Annotations
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Hover over the markers on the page to view specific AI
          recommendations.
        </p>
      </CardHeader>
      <CardContent className="bg-muted/20 p-0">
        {/* Container must be relatively positioned so markers can absolute position inside it */}
        <div className="relative max-h-[800px] w-full overflow-auto border-b border-t">
          <div
            ref={containerRef}
            className="relative"
            style={{ minWidth: '100%' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={screenshotUrl}
              alt="Page Screenshot"
              className="w-full origin-top-left object-cover"
              style={{ display: 'block' }}
            />

            {/* Render markers */}
            <TooltipProvider>
              {annotations.map((ann, idx) => (
                <Tooltip key={ann.id} delayDuration={100}>
                  <TooltipTrigger asChild>
                    <button
                      onMouseEnter={() => setActiveId(ann.id)}
                      onMouseLeave={() => setActiveId(null)}
                      className={`absolute z-10 -ml-4 -mt-4 flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-bold shadow-xl transition-all duration-200 ${
                        activeId === ann.id
                          ? 'z-20 scale-125 border-white bg-indigo-600 text-white'
                          : 'border-white bg-indigo-500/90 text-white hover:bg-indigo-600'
                      }`}
                      style={{
                        left: `clamp(5%, ${ann.x * scale}px, 95%)`,
                        top: `clamp(5%, ${ann.y * scale}px, 95%)`,
                      }}
                    >
                      {idx + 1}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    side={ann.x > 720 ? 'left' : 'right'}
                    sideOffset={5}
                    collisionPadding={10}
                    className="z-[100] w-72 space-y-2 border-indigo-200 bg-background p-4 shadow-2xl dark:border-indigo-900"
                  >
                    <div className="mb-2 flex items-start gap-2 border-b border-border pb-2 font-semibold text-indigo-700 dark:text-indigo-400">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <h4>{ann.title}</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground">
                      {ann.description}
                    </p>
                    <div className="mt-3 rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                      <strong className="mb-1 block text-emerald-900 dark:text-emerald-200">
                        Suggestion:{' '}
                      </strong>{' '}
                      {ann.suggestion}
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
