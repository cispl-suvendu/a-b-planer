'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  LineChart,
  TrendingUp,
  Star,
} from 'lucide-react';
import { useSession } from 'next-auth/react';

export function Hero() {
  const { data: session } = useSession();
  return (
    <section className="relative z-0 overflow-hidden pb-12 pt-28 md:pb-20 md:pt-32 lg:flex lg:min-h-screen lg:items-center lg:pt-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-background to-background dark:from-indigo-900/20" />
      <div className="absolute right-0 top-0 -z-10 h-[600px] w-[800px] -translate-y-12 translate-x-1/3 animate-gradient-move-1 rounded-full bg-purple-400/10 blur-[120px] dark:bg-purple-600/5" />
      <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 animate-gradient-move-2 rounded-full bg-indigo-400/10 blur-[120px] dark:bg-indigo-600/5" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-12">
          {/* Left Content */}
          <div className="mt-4 flex-1 text-center lg:mt-8 lg:text-left">
            {/* Tag */}
            <div
              className="mb-4 inline-flex animate-fade-in-up items-center gap-2 text-sm font-bold uppercase tracking-wider text-indigo-600 opacity-0"
              style={{ animationDelay: '100ms' }}
            >
              <Zap className="h-4 w-4 fill-indigo-600" />
              <span>Turn Clicks Into Customers</span>
            </div>

            {/* Headline */}
            <h1
              className="mb-6 animate-fade-in-up text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 opacity-0 dark:text-foreground md:text-5xl lg:text-[56px]"
              style={{ animationDelay: '200ms' }}
            >
              Find High-Impact <br />
              Changes That <br />
              <span className="text-indigo-600">Increase Conversions</span>
            </h1>

            {/* Subheadline */}
            <p
              className="mx-auto mb-8 max-w-2xl animate-fade-in-up text-lg leading-relaxed text-slate-600 opacity-0 dark:text-muted-foreground lg:mx-0 lg:text-xl"
              style={{ animationDelay: '300ms' }}
            >
              AI analyzes your landing page, uncovers what&apos;s holding you
              back, and gives you prioritized actions that drive real results.
            </p>

            {/* Features List */}
            <div
              className="mb-8 flex animate-fade-in-up flex-col gap-6 text-left opacity-0"
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-foreground">
                    AI-Powered Analysis
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-muted-foreground">
                    Deep audit of design, copy, UX & performance
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                  <LineChart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-foreground">
                    Actionable Recommendations
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-muted-foreground">
                    Prioritized by impact, confidence & effort
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-foreground">
                    Faster Wins, Better Results
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-muted-foreground">
                    Ship changes that actually move the needle
                  </p>
                </div>
              </div>
            </div>

            {/* CTA and Social Proof */}
            <div
              className="mb-6 flex animate-fade-in-up flex-col items-center gap-6 opacity-0 sm:flex-row lg:items-center lg:justify-start"
              style={{ animationDelay: '500ms' }}
            >
              <Link href={session ? '/dashboard' : '/login'}>
                <Button
                  size="lg"
                  className="h-14 w-full rounded-lg bg-[#5338F5] px-8 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#432AC5] hover:shadow-indigo-500/25 sm:w-auto"
                >
                  {session ? 'Go to Dashboard' : 'Start Free Analysis'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <div className="flex flex-col items-center gap-1 sm:items-start">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {/* eslint-disable @next/next/no-img-element */}
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white object-cover dark:border-background"
                      src="https://i.pravatar.cc/100?img=11"
                      alt="User"
                    />
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white object-cover dark:border-background"
                      src="https://i.pravatar.cc/100?img=32"
                      alt="User"
                    />
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white object-cover dark:border-background"
                      src="https://i.pravatar.cc/100?img=12"
                      alt="User"
                    />
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white object-cover dark:border-background"
                      src="https://i.pravatar.cc/100?img=44"
                      alt="User"
                    />
                    {/* eslint-enable @next/next/no-img-element */}
                  </div>
                  <div className="flex gap-0.5 text-[#F59E0B]">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-muted-foreground">
                  Trusted by 1,000+ marketers
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div
              className="flex animate-fade-in-up flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-500 opacity-0 dark:text-muted-foreground lg:justify-start"
              style={{ animationDelay: '600ms' }}
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> No Credit
                Card
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Free 4
                Analyses
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 fill-indigo-500 text-indigo-500" />{' '}
                Instant Results
              </span>
            </div>
          </div>

          {/* Right Image/Dashboard Mockup */}
          <div
            className="perspective-[1000px] relative mt-10 w-full max-w-[700px] flex-1 animate-fade-in-up opacity-0 lg:mt-0 lg:max-w-none"
            style={{ animationDelay: '400ms' }}
          >
            {/* The main dashboard panel */}
            <div className="rotate-y-[-5deg] rotate-x-[2deg] relative flex w-full transform-gpu flex-col overflow-hidden rounded-[24px] border border-slate-200/60 bg-white/90 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1),_0_0_0_1px_rgba(226,232,240,0.5)] backdrop-blur-xl transition-transform duration-700 hover:rotate-0 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] dark:border-border/50 dark:bg-background/80 lg:-right-8 lg:aspect-[16/10] lg:w-[115%]">
              {/* Fake Browser Header */}
              <div className="flex h-12 items-center gap-2 border-b border-slate-100 bg-slate-50/50 px-4 dark:border-border/50 dark:bg-muted/50 md:px-6">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] md:h-3 md:w-3" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] md:h-3 md:w-3" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F] md:h-3 md:w-3" />
                </div>
                <div className="mx-auto flex h-7 max-w-[200px] flex-1 items-center justify-center gap-2 truncate rounded-md bg-white px-3 text-[10px] font-medium text-slate-400 shadow-sm dark:bg-background dark:text-muted-foreground md:max-w-[300px] md:text-[11px]">
                  <div className="h-3 w-3 shrink-0 rounded-full border border-slate-300 dark:border-slate-600" />
                  <span className="truncate">your-landing-page.com</span>
                </div>
                <div className="w-[38px] md:w-[52px]" />{' '}
                {/* Spacer for centering */}
              </div>

              {/* Fake Dashboard Content */}
              <div className="flex flex-1 flex-col gap-4 bg-slate-50/50 p-4 dark:bg-transparent md:p-6">
                {/* Top Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {/* Score */}
                  <div className="flex flex-col items-start justify-center rounded-xl border border-slate-100 bg-white p-4 shadow-sm dark:border-border/50 dark:bg-card">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-emerald-400 font-bold text-emerald-500">
                        98
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-foreground">
                          Performance Score
                        </div>
                        <div className="text-[10px] font-medium text-emerald-500">
                          +12% from last week
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Priority */}
                  <div className="flex flex-col justify-center rounded-xl border border-slate-100 bg-white p-4 shadow-sm dark:border-border/50 dark:bg-card">
                    <div className="text-[10px] font-medium text-slate-500">
                      Top Priority
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-foreground">
                      Improve CTA Visibility
                    </div>
                    <div className="mt-2 inline-flex items-center rounded bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-600 dark:bg-red-900/20 dark:text-red-400">
                      High Impact
                    </div>
                  </div>

                  {/* Estimated Impact */}
                  <div className="relative flex flex-col justify-center overflow-hidden rounded-xl border border-slate-100 bg-white p-4 shadow-sm dark:border-border/50 dark:bg-card sm:col-span-2 md:col-span-1">
                    <div className="text-[10px] font-medium text-slate-500">
                      Estimated Impact
                    </div>
                    <div className="mt-1 text-2xl font-bold text-indigo-600">
                      +24%
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Conversion Rate
                    </div>
                    {/* Small Line Chart */}
                    <div className="absolute -bottom-1 -right-2 h-10 w-20 opacity-50">
                      <svg
                        viewBox="0 0 100 30"
                        className="h-full w-full fill-none stroke-indigo-500 stroke-2"
                      >
                        <path
                          d="M0,25 Q15,25 25,15 T50,20 T75,5 T100,0"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Middle Row */}
                <div className="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-3">
                  {/* Big Chart */}
                  <div className="flex flex-col rounded-xl border border-slate-100 bg-white p-4 shadow-sm dark:border-border/50 dark:bg-card lg:col-span-2">
                    <div className="text-xs font-semibold text-slate-900 dark:text-foreground">
                      Performance Overview
                    </div>
                    <div className="relative mt-auto h-28 w-full">
                      {/* Grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="h-px w-full bg-slate-100 dark:bg-border/50"
                          />
                        ))}
                      </div>
                      {/* Curved line chart */}
                      <svg
                        viewBox="0 0 200 100"
                        className="absolute inset-0 h-full w-full overflow-visible"
                      >
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#4f46e5"
                              stopOpacity="0.4"
                            />
                            <stop
                              offset="100%"
                              stopColor="#4f46e5"
                              stopOpacity="0.05"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,80 Q20,75 40,85 T80,65 T120,70 T160,40 T200,20"
                          fill="url(#gradient)"
                        />
                        <path
                          d="M0,80 Q20,75 40,85 T80,65 T120,70 T160,40 T200,20"
                          fill="none"
                          className="stroke-indigo-600 stroke-[3px]"
                          strokeLinecap="round"
                        />
                        {/* Data point pin */}
                        <circle
                          cx="200"
                          cy="20"
                          r="4"
                          className="fill-indigo-600"
                        />
                        <rect
                          x="188"
                          y="0"
                          width="24"
                          height="14"
                          rx="4"
                          className="fill-indigo-600"
                        />
                        <text
                          x="200"
                          y="10"
                          textAnchor="middle"
                          fill="white"
                          fontSize="8"
                          fontWeight="bold"
                        >
                          96
                        </text>
                      </svg>
                    </div>
                  </div>

                  {/* Key Areas List */}
                  <div className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm dark:border-border/50 dark:bg-card">
                    <div className="text-xs font-semibold text-slate-900 dark:text-foreground">
                      Key Areas
                    </div>
                    <div className="mt-2 flex flex-col gap-3">
                      {[
                        {
                          label: 'Performance',
                          score: 85,
                          color: 'text-amber-500',
                          border: 'border-amber-400',
                        },
                        {
                          label: 'Messaging',
                          score: 82,
                          color: 'text-amber-500',
                          border: 'border-amber-400',
                        },
                        {
                          label: 'Design',
                          score: 78,
                          color: 'text-amber-500',
                          border: 'border-amber-400',
                        },
                        {
                          label: 'SEO',
                          score: 75,
                          color: 'text-amber-500',
                          border: 'border-amber-400',
                        },
                      ].map((area) => (
                        <div
                          key={area.label}
                          className="flex items-center justify-between border-b border-slate-50 pb-2 last:border-0 dark:border-border/50"
                        >
                          <span className="text-[11px] font-medium text-slate-600 dark:text-muted-foreground">
                            {area.label}
                          </span>
                          <div
                            className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${area.border} text-[9px] font-bold ${area.color}`}
                          >
                            {area.score}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                  {/* AI Recommendation */}
                  <div className="flex flex-col rounded-xl border border-slate-100 bg-white p-4 shadow-sm dark:border-border/50 dark:bg-card lg:col-span-1">
                    <div className="text-[10px] font-medium text-slate-500">
                      AI Recommendation
                    </div>
                    <div className="mt-1 text-[11px] font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                      Simplify headline and highlight primary benefit above the
                      fold.
                    </div>
                    <div className="mt-3 inline-flex w-fit items-center gap-1 rounded-md border border-indigo-100 px-3 py-1 text-[10px] font-semibold text-indigo-600 dark:border-indigo-800 dark:text-indigo-400">
                      View Solution <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>

                  {/* Bar Chart placeholder */}
                  <div className="hidden h-28 items-end gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm dark:border-border/50 dark:bg-card sm:flex lg:col-span-2 lg:h-auto">
                    <div className="h-[20%] w-full rounded-t-md bg-indigo-200 dark:bg-indigo-900/50" />
                    <div className="h-[40%] w-full rounded-t-md bg-indigo-300 dark:bg-indigo-800/50" />
                    <div className="h-[50%] w-full rounded-t-md bg-indigo-400 dark:bg-indigo-700/50" />
                    <div className="h-[65%] w-full rounded-t-md bg-indigo-500 dark:bg-indigo-600/50" />
                    <div className="h-[90%] w-full rounded-t-md bg-indigo-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Elements (from screenshot) */}

            {/* Top right Sparkle */}
            <div
              className="absolute -top-8 right-8 flex h-14 w-14 animate-float items-center justify-center rounded-full bg-white text-indigo-500 shadow-xl dark:bg-card"
              style={{ animationDelay: '0s' }}
            >
              <Sparkles className="h-6 w-6" />
            </div>

            {/* Middle left Target */}
            <div
              className="absolute -left-12 top-1/2 flex h-14 w-14 -translate-y-1/2 animate-float items-center justify-center rounded-full bg-white text-indigo-500 shadow-xl dark:bg-card"
              style={{ animationDelay: '1.5s' }}
            >
              <Target className="h-6 w-6" />
            </div>

            {/* Bottom right Thunderbolt */}
            <div
              className="absolute -bottom-8 right-1/4 flex h-14 w-14 animate-float items-center justify-center rounded-full bg-white text-indigo-500 shadow-xl dark:bg-card"
              style={{ animationDelay: '0.75s' }}
            >
              <Zap className="h-6 w-6" />
            </div>

            {/* Middle right Arrow Up */}
            <div
              className="absolute -right-12 top-1/2 flex h-14 w-14 -translate-y-1/2 animate-float items-center justify-center rounded-full bg-white text-emerald-500 shadow-xl dark:bg-card"
              style={{ animationDelay: '2.25s' }}
            >
              <TrendingUp className="h-6 w-6" />
            </div>

            {/* Dashed connecting lines (simulated) */}
            <svg
              className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
              style={{ overflow: 'visible' }}
            >
              <path
                d="M -20,200 L 50,200"
                className="stroke-dasharray-4 fill-none stroke-indigo-200 stroke-2 dark:stroke-indigo-800"
              />
              <path
                d="M 600,0 L 600,-50 L 550,-50"
                className="stroke-dasharray-4 fill-none stroke-indigo-200 stroke-2 dark:stroke-indigo-800"
              />
              <path
                d="M 650,200 L 700,200"
                className="stroke-dasharray-4 fill-none stroke-emerald-200 stroke-2 dark:stroke-emerald-800"
              />
              <path
                d="M 400,450 L 400,500 L 450,500"
                className="stroke-dasharray-4 fill-none stroke-indigo-200 stroke-2 dark:stroke-indigo-800"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
