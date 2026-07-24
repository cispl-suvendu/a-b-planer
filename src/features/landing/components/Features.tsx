'use client';

import React from 'react';
import {
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  Clock,
  ShieldCheck,
  Smartphone,
  MousePointerClick,
} from 'lucide-react';

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-50/50 py-16 dark:bg-background md:py-24"
    >
      {/* Background Gradients */}
      <div className="absolute left-0 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/4 rounded-full bg-indigo-200/40 blur-[100px] dark:bg-indigo-900/20" />
      <div className="absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-purple-200/40 blur-[100px] dark:bg-purple-900/20" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        {/* Floating Elements (Decorative) */}
        <div className="absolute -left-12 top-32 z-20 hidden animate-float items-center gap-4 rounded-2xl border border-border/50 bg-white p-4 shadow-xl dark:bg-card lg:flex">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              +23%
            </div>
            <div className="text-xs text-muted-foreground">Conversion Lift</div>
          </div>
        </div>

        <div
          className="absolute -right-4 top-48 z-20 hidden animate-float items-center gap-4 rounded-2xl border border-border/50 bg-white p-4 shadow-xl dark:bg-card lg:flex"
          style={{ animationDelay: '1s' }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              Quick Win
            </div>
            <div className="text-xs text-muted-foreground">
              Improve CTA Contrast
            </div>
          </div>
        </div>

        <div
          className="absolute -bottom-12 left-1/2 z-20 hidden -translate-x-1/2 animate-float items-center gap-4 rounded-2xl border border-border/50 bg-white p-4 shadow-xl dark:bg-card lg:flex"
          style={{ animationDelay: '2s' }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400">
            <Lightbulb className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              AI Recommendation
            </div>
            <div className="text-xs text-muted-foreground">
              Add social proof section
              <br />
              to increase trust
            </div>
          </div>
        </div>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
            <Sparkles className="h-4 w-4" />
            AI-POWERED. DATA-BACKED. RESULTS-DRIVEN.
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
            Why Teams Choose{' '}
            <span className="text-indigo-600 dark:text-indigo-400">
              PageAnalyzer
            </span>
          </h2>
          <p className="text-base text-slate-600 dark:text-muted-foreground md:text-lg">
            From AI-powered visual audits to prioritized experiments,
            PageAnalyzer gives you everything you need to uncover, prioritize,
            and ship winning landing page improvements.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {/* Card 1: AI Visual Analysis */}
          <div className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-border/50 dark:bg-card">
            <div className="p-6 pb-0">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                  <Sparkles className="h-3 w-3" />7 Issues Found
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                AI Visual Analysis
              </h3>
              <p className="mb-8 max-w-sm text-slate-600 dark:text-muted-foreground">
                Our AI scans your landing page and pinpoints exactly what&apos;s
                hurting your conversions.
              </p>
            </div>

            {/* Fake UI */}
            <div className="relative mt-auto flex justify-center p-6 pt-0">
              <div className="relative flex aspect-[3/2] w-full max-w-[450px] flex-col overflow-hidden rounded-t-xl border border-slate-200 bg-slate-50 shadow-inner dark:border-border/50 dark:bg-background">
                <div className="flex gap-1.5 border-b border-slate-200 bg-white p-3 dark:border-border/50 dark:bg-card">
                  <div className="h-2 w-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <div className="h-2 w-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <div className="h-2 w-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                </div>
                <div className="relative flex-1 p-6">
                  <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    Your Product Deserves
                    <br />
                    <span className="text-indigo-600">More Conversions</span>
                  </h4>
                  <p className="mt-2 max-w-[200px] text-[10px] text-slate-500">
                    We help SaaS teams increase conversions with data-backed
                    optimizations.
                  </p>
                  <div className="mt-4 inline-block rounded bg-indigo-600 px-3 py-1.5 text-[10px] font-semibold text-white">
                    Get Started &gt;
                  </div>

                  {/* Abstract Graph */}
                  <svg
                    viewBox="0 0 200 100"
                    className="absolute bottom-4 right-4 h-20 w-40 opacity-50"
                  >
                    <path
                      d="M0,80 Q20,60 40,70 T80,40 T120,50 T160,20 T200,10"
                      fill="none"
                      className="stroke-indigo-400 stroke-[3]"
                    />
                    <path
                      d="M0,80 Q20,60 40,70 T80,40 T120,50 T160,20 T200,10 L200,100 L0,100 Z"
                      fill="url(#featureGradient)"
                    />
                    <defs>
                      <linearGradient
                        id="featureGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#818cf8"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#818cf8"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Pointers */}
                  <div className="absolute right-6 top-8 z-10 hidden w-[140px] items-center gap-2 rounded-lg border border-slate-100 bg-white p-2 shadow-md dark:border-border/50 dark:bg-card sm:flex">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[10px] text-white">
                      1
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-700 dark:text-slate-200">
                        Weak Headline
                      </div>
                      <div className="text-[8px] text-slate-400">
                        Not value focused
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-6 top-20 z-10 hidden w-[140px] items-center gap-2 rounded-lg border border-slate-100 bg-white p-2 shadow-md dark:border-border/50 dark:bg-card sm:flex">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[10px] text-white">
                      2
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-700 dark:text-slate-200">
                        Low Contrast CTA
                      </div>
                      <div className="text-[8px] text-slate-400">
                        Hard to stand out
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-6 top-32 z-10 hidden w-[140px] items-center gap-2 rounded-lg border border-slate-100 bg-white p-2 shadow-md dark:border-border/50 dark:bg-card sm:flex">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[10px] text-white">
                      3
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-700 dark:text-slate-200">
                        Missing Trust Signal
                      </div>
                      <div className="text-[8px] text-slate-400">
                        Add credibility here
                      </div>
                    </div>
                  </div>

                  {/* Connecting Lines (Simulated with absolute divs) */}
                  <div className="absolute left-36 top-10 z-0 h-px w-16 border-t border-dashed border-indigo-400"></div>
                  <div className="absolute left-24 top-24 z-0 h-px w-28 border-t border-dashed border-indigo-400"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Instant AI Feedback */}
          <div className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-border/50 dark:bg-card">
            <div className="p-6 pb-0">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                  <Zap className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                Instant AI Feedback
              </h3>
              <p className="mb-8 max-w-sm text-slate-600 dark:text-muted-foreground">
                Get an{' '}
                <span className="font-semibold text-slate-900 dark:text-white">
                  overall score
                </span>{' '}
                and high-impact recommendations in seconds.
              </p>
            </div>

            {/* Fake UI */}
            <div className="mt-auto p-6 pt-0">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  {/* Score Ring */}
                  <div className="relative mx-auto flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full border-[6px] border-emerald-500/20 sm:mx-0">
                    <svg
                      className="absolute inset-0 h-full w-full -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="46"
                        fill="none"
                        className="stroke-emerald-500"
                        strokeWidth="8"
                        strokeDasharray="289"
                        strokeDashoffset="26"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-4xl font-extrabold text-emerald-500">
                      91
                    </span>
                    <span className="text-[10px] font-medium text-slate-500">
                      Overall Score
                    </span>
                  </div>

                  {/* List */}
                  <div className="flex flex-1 flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-border/50 dark:bg-background">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30">
                          <Target className="h-3 w-3" />
                        </div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          Hero Messaging
                        </span>
                      </div>
                      <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                        High Impact
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30">
                          <MousePointerClick className="h-3 w-3" />
                        </div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          CTA Visibility
                        </span>
                      </div>
                      <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                        High Impact
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                          <ShieldCheck className="h-3 w-3" />
                        </div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          Trust Signals
                        </span>
                      </div>
                      <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                        Medium Impact
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30">
                          <Smartphone className="h-3 w-3" />
                        </div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          Mobile Experience
                        </span>
                      </div>
                      <span className="rounded bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                        Low Impact
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-indigo-50 px-4 py-3 dark:bg-indigo-900/20">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-indigo-600" />
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      Top Opportunity:
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-300">
                      Improve CTA contrast to increase conversions
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Custom Scoring System */}
          <div className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-border/50 dark:bg-card">
            <div className="p-6 pb-0">
              <div className="mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
                  <Target className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                Custom Scoring System
              </h3>
              <p className="mb-8 max-w-[280px] text-slate-600 dark:text-muted-foreground">
                Proprietary scoring across key conversion drivers so you know
                where to focus.
              </p>
            </div>

            {/* Fake UI */}
            <div className="mt-auto p-6 pt-0">
              <div className="flex flex-wrap items-center justify-center gap-6 px-2 sm:justify-between sm:gap-2">
                {[
                  {
                    label: 'Performance',
                    score: 91,
                    color: 'text-emerald-500',
                    stroke: 'stroke-emerald-500',
                    bg: 'border-emerald-500/20',
                    offset: '20',
                  },
                  {
                    label: 'UX & Design',
                    score: 84,
                    color: 'text-emerald-500',
                    stroke: 'stroke-emerald-500',
                    bg: 'border-emerald-500/20',
                    offset: '40',
                  },
                  {
                    label: 'Trust',
                    score: 79,
                    color: 'text-amber-500',
                    stroke: 'stroke-amber-500',
                    bg: 'border-amber-500/20',
                    offset: '60',
                  },
                  {
                    label: 'Messaging',
                    score: 68,
                    color: 'text-amber-500',
                    stroke: 'stroke-amber-500',
                    bg: 'border-amber-500/20',
                    offset: '90',
                  },
                  {
                    label: 'Conversion',
                    score: 63,
                    color: 'text-rose-500',
                    stroke: 'stroke-rose-500',
                    bg: 'border-rose-500/20',
                    offset: '105',
                  },
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3">
                    <div
                      className={`relative flex h-[72px] w-[72px] items-center justify-center rounded-full border-[5px] ${stat.bg}`}
                    >
                      <svg
                        className="absolute inset-0 h-full w-full -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          className={stat.stroke}
                          strokeWidth="10"
                          strokeDasharray="283"
                          strokeDashoffset={stat.offset}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className={`text-xl font-extrabold ${stat.color}`}>
                        {stat.score}
                      </span>
                    </div>
                    <span className="max-w-[60px] whitespace-nowrap text-center text-xs font-semibold leading-tight text-slate-500">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Historical Tracking */}
          <div className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-border/50 dark:bg-card">
            <div className="p-6 pb-0">
              <div className="mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lg shadow-purple-600/20">
                  <Clock className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                Historical Tracking
              </h3>
              <p className="mb-8 max-w-sm text-slate-600 dark:text-muted-foreground">
                Track every analysis, measure improvements, and never lose a
                great test idea.
              </p>
            </div>

            {/* Fake UI */}
            <div className="mt-auto p-6 pt-0">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
                {/* Chart */}
                <div className="relative h-36 flex-1">
                  <svg
                    viewBox="0 0 200 100"
                    className="absolute inset-0 h-full w-full overflow-visible"
                  >
                    <path
                      d="M0,80 L40,90 L80,60 L120,70 L160,30 L200,40"
                      fill="none"
                      className="stroke-purple-400 stroke-[3]"
                    />
                    <path
                      d="M0,80 L40,90 L80,60 L120,70 L160,30 L200,40 L200,100 L0,100 Z"
                      fill="url(#historyGradient)"
                    />
                    <defs>
                      <linearGradient
                        id="historyGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#c084fc"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="100%"
                          stopColor="#c084fc"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <circle cx="0" cy="80" r="4" className="fill-purple-500" />
                    <circle cx="40" cy="90" r="4" className="fill-purple-500" />
                    <circle cx="80" cy="60" r="4" className="fill-purple-500" />
                    <circle
                      cx="120"
                      cy="70"
                      r="4"
                      className="fill-purple-500"
                    />
                    <circle
                      cx="160"
                      cy="30"
                      r="4"
                      className="fill-purple-500"
                    />
                    <circle
                      cx="200"
                      cy="40"
                      r="5"
                      className="fill-white stroke-purple-600 stroke-[2]"
                    />
                  </svg>
                  {/* Tooltip */}
                  <div className="absolute -top-2 right-0 rounded bg-purple-600 px-2 py-1 text-[10px] font-bold text-white shadow">
                    91
                  </div>

                  {/* X Axis labels */}
                  <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] font-medium text-slate-400">
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="w-full rounded-2xl border border-slate-100 bg-slate-50 p-5 dark:border-border/50 dark:bg-background sm:w-40">
                  <div className="mb-5">
                    <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Performance Score
                    </div>
                    <div className="text-3xl font-extrabold text-indigo-600">
                      +18%
                    </div>
                    <div className="mt-1 text-[10px] text-slate-400">
                      Improvement
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                        4 Analyses Run
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                        12 Experiments
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                        7 Shipped
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
