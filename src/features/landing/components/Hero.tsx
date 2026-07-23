'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useSession } from 'next-auth/react';

export function Hero() {
  const { data: session } = useSession();
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-48">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-background to-background dark:from-indigo-900/20" />
      <div className="absolute right-0 top-0 -z-10 h-[600px] w-[800px] -translate-y-12 translate-x-1/3 rounded-full bg-purple-400/20 blur-[120px] dark:bg-purple-600/10" />
      <div className="absolute left-0 top-40 -z-10 h-[600px] w-[600px] -translate-x-1/3 rounded-full bg-indigo-400/20 blur-[120px] dark:bg-indigo-600/10" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-600 dark:border-indigo-800/50 dark:bg-indigo-900/30 dark:text-indigo-400">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Landing Page Analysis</span>
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Analyze, Optimize, <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
                and Convert.
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground lg:mx-0">
              Instantly identify conversion blockers and get actionable
              AI-driven recommendations to skyrocket your landing page
              performance without touching a line of code.
            </p>

            <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href={session ? '/dashboard' : '/login'}>
                <Button
                  size="lg"
                  className="h-14 w-full rounded-full bg-indigo-600 px-8 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-500/25 sm:w-auto"
                >
                  {session ? 'Go to Dashboard' : 'Start Analyzing for Free'}{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#workflow">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 w-full rounded-full px-8 text-lg font-semibold sm:w-auto"
                >
                  See How it Works
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm font-medium text-muted-foreground lg:justify-start">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" /> No credit
                card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" /> 4 free
                analyses
              </span>
            </div>
          </div>

          {/* Right Image/Dashboard Mockup */}
          <div className="relative w-full max-w-2xl flex-1 lg:max-w-none">
            {/* Main Mockup Card */}
            <div className="relative flex aspect-[4/3] flex-col overflow-hidden rounded-2xl border border-border/50 bg-background/80 shadow-2xl backdrop-blur-xl">
              {/* Fake Browser Header */}
              <div className="flex h-10 items-center gap-2 border-b bg-muted/50 px-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 flex h-5 max-w-sm flex-1 items-center truncate rounded-md border bg-background px-3 font-mono text-[10px] text-muted-foreground">
                  https://your-landing-page.com
                </div>
              </div>

              {/* Fake Dashboard Content */}
              <div className="flex flex-1 gap-6 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] p-6 [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]">
                {/* Sidebar */}
                <div className="flex w-1/3 flex-col gap-4">
                  <div className="h-24 rounded-xl border bg-card p-4 shadow-sm">
                    <div className="mb-3 h-3 w-20 rounded bg-indigo-100 dark:bg-indigo-900" />
                    <div className="h-8 w-16 rounded-lg bg-indigo-600" />
                  </div>
                  <div className="flex h-32 flex-col gap-3 rounded-xl border bg-card p-4 shadow-sm">
                    <div className="h-3 w-24 rounded bg-muted" />
                    <div className="h-3 w-full rounded bg-muted/50" />
                    <div className="h-3 w-4/5 rounded bg-muted/50" />
                    <div className="h-3 w-full rounded bg-muted/50" />
                  </div>
                </div>

                {/* Main View */}
                <div className="flex flex-1 flex-col gap-4">
                  <div className="flex h-40 flex-col justify-end rounded-xl border bg-card p-4 shadow-sm">
                    <div className="flex h-24 items-end gap-3">
                      <div className="h-[40%] w-1/4 rounded-t-md bg-indigo-200 dark:bg-indigo-800" />
                      <div className="h-[60%] w-1/4 rounded-t-md bg-indigo-300 dark:bg-indigo-700" />
                      <div className="h-[80%] w-1/4 rounded-t-md bg-indigo-400 dark:bg-indigo-600" />
                      <div className="h-[100%] w-1/4 rounded-t-md bg-indigo-500" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-24 flex-1 rounded-xl border bg-card p-4 shadow-sm" />
                    <div className="flex h-24 w-24 items-center justify-center rounded-xl border bg-card p-4 shadow-sm">
                      <div className="h-12 w-12 rotate-45 rounded-full border-4 border-emerald-500 border-l-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements for depth */}
            <div
              className="absolute -bottom-6 -left-6 flex animate-bounce items-center gap-4 rounded-xl border bg-card p-4 shadow-xl delay-100 hover:animate-none"
              style={{ animationDuration: '3s' }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                98
              </div>
              <div>
                <div className="text-sm font-semibold">Performance Score</div>
                <div className="text-xs font-medium text-emerald-600">
                  +12% from last week
                </div>
              </div>
            </div>

            <div
              className="absolute -right-6 -top-6 flex animate-bounce items-center gap-3 rounded-xl border bg-card p-4 shadow-xl hover:animate-none"
              style={{ animationDuration: '4s' }}
            >
              <Sparkles className="h-5 w-5 text-indigo-500" />
              <div className="text-sm font-semibold">3 Quick Wins Found</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
