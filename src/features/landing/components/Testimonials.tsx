import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote:
        'PageAnalyzer completely changed how we approach CRO. The AI identified three UX bottlenecks we missed for months. Our conversion rate jumped 24% in the first week.',
      name: 'Sarah Jenkins',
      role: 'Head of Growth, Acme Corp',
      avatar: 'SJ',
    },
    {
      quote:
        "It's like having a senior conversion copywriter and UX designer on call 24/7. The automated annotations make it incredibly easy to share feedback with our dev team.",
      name: 'Marcus Dubois',
      role: 'Founder, GlobalTech',
      avatar: 'MD',
    },
    {
      quote:
        'We used to spend hours manually auditing our landing pages before launching ad campaigns. Now, we run everything through PageAnalyzer in seconds before going live.',
      name: 'Elena Rodriguez',
      role: 'Marketing Director, NextWave',
      avatar: 'ER',
    },
    {
      quote:
        'The custom scoring system is brilliant. It gives us a tangible metric to track our optimization progress across different client websites.',
      name: 'David Chen',
      role: 'Agency Owner, Innovate',
      avatar: 'DC',
    },
  ];

  return (
    <section id="testimonials" className="scroll-mt-20 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Marketers Love Our Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Don&apos;t just take our word for it. See how teams are using AI to
            build higher converting landing pages.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <Card
              key={i}
              className="border-border/50 bg-card shadow-sm transition-colors hover:border-indigo-500/30"
            >
              <CardContent className="p-8">
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mb-8 text-lg font-medium leading-relaxed text-foreground">
                  &quot;{item.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 text-lg font-bold text-indigo-700 dark:from-indigo-900/50 dark:to-purple-900/50 dark:text-indigo-300">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
