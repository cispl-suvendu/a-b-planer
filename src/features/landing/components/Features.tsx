import React from 'react';
import { LayoutDashboard, Zap, Target, History } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export function Features() {
  const features = [
    {
      title: 'Instant AI Feedback',
      description:
        'Get deep, actionable CRO insights in seconds, powered by advanced vision models that understand design and copy.',
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      bgColor: 'bg-amber-100 dark:bg-amber-900/30',
    },
    {
      title: 'Automated Annotations',
      description:
        'Our AI visually pins issues directly onto your landing page screenshot, showing you exactly what to fix and where.',
      icon: <Target className="h-6 w-6 text-emerald-500" />,
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
    },
    {
      title: 'Custom Scoring System',
      description:
        'See how your page performs across UX, Messaging, Trust, and Performance with our proprietary scoring algorithm.',
      icon: <LayoutDashboard className="h-6 w-6 text-indigo-500" />,
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
    },
    {
      title: 'Historic Tracking',
      description:
        'Keep a record of every analysis. Track your improvements over time and never lose a great A/B test idea.',
      icon: <History className="h-6 w-6 text-purple-500" />,
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
  ];

  return (
    <section id="features" className="scroll-mt-20 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the features that empower top marketers to optimize faster,
            convert better, and leave the guesswork behind.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader>
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor}`}
                >
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
