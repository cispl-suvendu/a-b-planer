'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export function Pricing() {
  const { data: session } = useSession();
  const plans = [
    {
      name: 'Free',
      description: 'Get started with AI-driven CRO analysis.',
      price: '$0',
      period: '',
      buttonText: 'Start for Free',
      buttonVariant: 'outline' as const,
      features: [
        '4 Free Analyses Total',
        'Basic UX & Messaging Scores',
        'Standard Vision Model',
        'Community Support',
      ],
    },
    {
      name: 'Pro',
      description: 'Unlock advanced tools and unlimited workflows.',
      price: '$4',
      period: 'per month',
      buttonText: 'Get Started',
      buttonVariant: 'default' as const,
      highlighted: true,
      features: [
        'Unlimited Analyses',
        'Advanced Scoring System',
        'Custom AI Models',
        'PDF Report Exports',
        'Priority Support',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for agencies and large teams.',
      price: 'Custom',
      period: '',
      buttonText: 'Contact Us',
      buttonVariant: 'outline' as const,
      features: [
        'Everything in Pro',
        'API Access',
        'Dedicated Account Manager',
        'Custom Data Integrations',
        'Team Management',
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="relative z-0 scroll-mt-20 overflow-hidden py-20 md:py-32"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-slate-50/50 to-slate-50/50 dark:from-indigo-900/10 dark:via-background dark:to-background" />
      <div className="absolute right-1/4 top-0 -z-10 h-[500px] w-[600px] -translate-y-1/3 translate-x-1/3 animate-gradient-move-1 rounded-full bg-indigo-400/10 blur-[120px] dark:bg-indigo-600/5" />
      <div className="absolute bottom-0 left-1/4 -z-10 h-[600px] w-[500px] -translate-x-1/3 translate-y-1/3 animate-gradient-move-2 rounded-full bg-purple-400/10 blur-[120px] dark:bg-purple-600/5" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
            <Sparkles className="h-4 w-4" />
            PRICING & PLANS
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
            Flexible Plans for{' '}
            <span className="text-indigo-600 dark:text-indigo-400">
              Every Need
            </span>
          </h2>
          <p className="text-base text-slate-600 dark:text-muted-foreground md:text-lg">
            Choose the plan that fits your goals. Upgrade anytime as your
            conversion optimization needs grow.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex h-full flex-col ${
                plan.highlighted
                  ? 'z-10 scale-105 border-indigo-500 shadow-2xl'
                  : 'border-border/50 bg-card shadow-sm hover:shadow-md'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-8 pt-8 text-center">
                <CardTitle className="mb-2 text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <p className="h-10 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-end justify-center gap-1">
                  <span className="text-5xl font-extrabold tracking-tighter">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="mb-2 text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 px-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 rounded-full p-1 ${plan.highlighted ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' : 'bg-muted text-muted-foreground'}`}
                      >
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-8 pb-8 pt-6">
                <Link
                  href={
                    plan.name === 'Enterprise'
                      ? 'mailto:sales@example.com'
                      : session
                        ? '/dashboard'
                        : '/login'
                  }
                  className="w-full"
                >
                  <Button
                    variant={plan.buttonVariant}
                    className={`h-12 w-full rounded-xl text-base font-semibold ${
                      plan.highlighted
                        ? 'bg-indigo-600 transition-all hover:bg-indigo-700 hover:shadow-lg'
                        : ''
                    }`}
                  >
                    {plan.name !== 'Enterprise' && session
                      ? 'Go to Dashboard'
                      : plan.buttonText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
