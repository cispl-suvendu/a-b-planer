'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame } from 'lucide-react';

export interface HeatmapPoint {
  x: number;
  y: number;
  radius: number;
  intensity: number; // 1-10
}

interface VisualHeatmapCardProps {
  screenshotUrl?: string;
  heatmapData?: HeatmapPoint[];
}

export function VisualHeatmapCard({
  screenshotUrl,
  heatmapData,
}: VisualHeatmapCardProps) {
  if (!screenshotUrl || !heatmapData || heatmapData.length === 0) return null;

  return (
    <Card className="overflow-hidden border-border/50 shadow-sm">
      <CardHeader className="border-b pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Flame className="h-5 w-5 text-orange-500" />
          Attention Heatmap
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Simulated visual hierarchy. Red areas indicate high cognitive load and
          visual draw.
        </p>
      </CardHeader>
      <CardContent className="bg-muted/20 p-0">
        <div className="relative max-h-[800px] w-full overflow-auto border-b border-t">
          <div className="relative" style={{ minWidth: '100%' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={screenshotUrl}
              alt="Page Screenshot Heatmap"
              className="w-full origin-top-left object-cover opacity-90"
              style={{ display: 'block' }}
            />

            {/* Heatmap overlay canvas basically implemented via absolutely positioned radial gradients for simplicity */}
            <div
              className="pointer-events-none absolute inset-0 z-10"
              style={{ mixBlendMode: 'multiply' }}
            >
              {heatmapData.map((point, idx) => {
                // Map intensity (1-10) to an opacity and color range
                // Higher intensity = Red, Medium = Yellow/Orange, Low = Green/Blue
                const intensityRatio = point.intensity / 10;
                let color = 'rgba(239, 68, 68, 0.7)'; // Red
                if (intensityRatio < 0.4)
                  color = 'rgba(59, 130, 246, 0.4)'; // Blue
                else if (intensityRatio < 0.7)
                  color = 'rgba(245, 158, 11, 0.5)'; // Amber

                return (
                  <div
                    key={idx}
                    className="absolute rounded-full"
                    style={{
                      left: `${point.x - point.radius}px`,
                      top: `${point.y - point.radius}px`,
                      width: `${point.radius * 2}px`,
                      height: `${point.radius * 2}px`,
                      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                      filter: 'blur(10px)',
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
