'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Cpu,
  LineChart,
  LayoutGrid,
  BarChart2,
  Clock,
  Settings,
  UserCircle,
  Globe,
  Link2,
  Zap,
  Code2,
  ShieldCheck,
} from 'lucide-react';

export function Workflow() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'input',
      title: '1. Paste Your URL',
      description:
        'Simply copy and paste any landing page URL into our dashboard. No installation or coding required.',
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      id: 'ai',
      title: '2. AI Scans Your Page',
      description:
        'Our vision models capture your page, break down the DOM, and analyze the UX, messaging, and trust signals.',
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      id: 'insights',
      title: '3. Get Actionable Wins',
      description:
        'Receive a prioritized list of A/B test ideas and visual annotations pinpointing exactly what to change.',
      icon: <LineChart className="h-6 w-6" />,
    },
  ];

  return (
    <section
      id="workflow"
      className="relative z-0 overflow-hidden py-16 md:py-24"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-50 via-slate-50/50 to-slate-50/50 dark:from-indigo-900/10 dark:via-background dark:to-background" />
      <div className="absolute left-0 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/4 -translate-y-1/4 animate-gradient-move-2 rounded-full bg-purple-400/10 blur-[120px] dark:bg-purple-600/5" />
      <div className="absolute bottom-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/4 translate-y-1/4 animate-gradient-move-1 rounded-full bg-indigo-400/10 blur-[120px] dark:bg-indigo-600/5" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
            <Sparkles className="h-4 w-4" />
            AI-POWERED. DATA-BACKED. RESULTS-DRIVEN.
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
            Simplify Your{' '}
            <span className="text-indigo-600 dark:text-indigo-400">
              CRO Workflow
            </span>
          </h2>
          <p className="text-base text-slate-600 dark:text-muted-foreground md:text-lg">
            From AI-powered visual audits to prioritized experiments,
            PageAnalyzer gives you everything you need to uncover, prioritize,
            and ship winning landing page improvements.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:gap-16">
          {/* Left side: Steps */}
          <div className="hide-scrollbar relative flex w-full snap-x snap-mandatory flex-row gap-4 overflow-x-auto pb-6 lg:w-[450px] lg:flex-col lg:gap-0 lg:overflow-visible lg:py-4 lg:pb-0">
            {/* Dotted line connecting steps */}
            <div className="absolute bottom-12 left-[59px] top-12 z-0 hidden w-px border-l-[2px] border-dashed border-indigo-200 dark:border-indigo-900/50 lg:block"></div>

            {tabs.map((tab, idx) => (
              <div
                key={tab.id}
                className="group relative z-10 flex w-[85%] shrink-0 cursor-pointer snap-center sm:w-[320px] lg:mb-12 lg:w-full lg:last:mb-0"
                onClick={() => setActiveTab(idx)}
              >
                <div
                  className={`relative flex w-full flex-col items-start gap-4 rounded-3xl p-6 transition-all duration-300 sm:flex-row lg:gap-6 lg:p-8 ${activeTab === idx ? 'border-[2px] border-indigo-500 bg-white shadow-xl shadow-indigo-100/50 ring-4 ring-indigo-50 dark:bg-card dark:shadow-none dark:ring-indigo-900/20' : 'border-[2px] border-transparent hover:bg-white/50 dark:hover:bg-card/50'}`}
                >
                  {/* The arrow pointing to the right when active */}
                  {activeTab === idx && (
                    <div className="absolute -right-8 top-1/2 hidden -translate-y-1/2 text-indigo-600 dark:text-indigo-500 lg:block">
                      <svg
                        width="20"
                        height="28"
                        viewBox="0 0 16 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0L16 12L0 24V0Z" />
                      </svg>
                    </div>
                  )}

                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 sm:h-14 sm:w-14 ${activeTab === idx ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-500 dark:bg-slate-800 dark:text-slate-400'}`}
                  >
                    {tab.icon}
                  </div>
                  <div className="pt-1">
                    <h3
                      className={`mb-2 text-xl font-bold sm:mb-3 sm:text-2xl ${activeTab === idx ? 'text-slate-900 dark:text-white' : 'text-slate-600 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-slate-200'}`}
                    >
                      {tab.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed sm:text-lg ${activeTab === idx ? 'text-slate-600 dark:text-slate-300' : 'text-slate-500 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-400'}`}
                    >
                      {tab.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: Mock UI */}
          <div className="perspective-[1000px] relative flex w-full items-center lg:flex-1">
            {/* The Dashboard Window */}
            <div className="relative z-10 flex h-[500px] w-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_60px_-15px_rgba(79,70,229,0.15)] dark:border-border/50 dark:bg-card md:h-[600px]">
              {/* Window Header */}
              <div className="z-20 flex h-16 items-center justify-between border-b border-slate-100 bg-white px-6 dark:border-border/50 dark:bg-card sm:px-8">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-indigo-600" />
                  <span className="text-xl font-bold text-slate-900 dark:text-white">
                    PageAnalyzer
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="hidden flex-col items-end gap-1.5 sm:flex">
                    <div className="h-2 w-16 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                    <div className="h-2 w-10 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                    <UserCircle className="h-6 w-6" />
                  </div>
                </div>
              </div>

              <div className="relative flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="z-10 flex w-16 shrink-0 flex-col items-center gap-6 border-r border-slate-100 bg-slate-50/50 py-4 dark:border-border/50 dark:bg-background/50 sm:w-24 sm:gap-8 sm:py-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 sm:h-14 sm:w-14 sm:rounded-2xl">
                    <LayoutGrid className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 sm:h-14 sm:w-14 sm:rounded-2xl">
                    <BarChart2 className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="mt-auto flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Settings className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </div>

                {/* Main Content Area Container (Relative for Tab Transitions) */}
                <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-slate-50/30 p-4 dark:bg-background/20 sm:p-10">
                  {/* Tab 1: Input URL State */}
                  <div
                    className={`absolute inset-0 flex transform flex-col items-center justify-center p-3 transition-all duration-700 ease-out sm:p-10 ${activeTab === 0 ? 'z-10 scale-100 opacity-100' : 'pointer-events-none z-0 scale-95 opacity-0'}`}
                  >
                    <div className="hide-scrollbar flex w-full max-w-[550px] flex-col items-center overflow-y-auto rounded-3xl border border-slate-100 bg-white p-5 text-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] dark:border-border/50 dark:bg-card dark:shadow-none sm:p-12">
                      <div className="mb-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 sm:mb-6 sm:h-20 sm:w-20">
                        <Globe className="h-8 w-8 sm:h-10 sm:w-10" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white sm:mb-3 sm:text-3xl">
                        Analyze Any Landing Page
                      </h3>
                      <p className="mb-6 max-w-[320px] text-xs text-slate-500 dark:text-muted-foreground sm:mb-10 sm:text-base">
                        Enter the URL of the landing page you want to analyze
                        for conversion optimization.
                      </p>

                      <div className="mb-6 flex w-full flex-col gap-2 sm:relative sm:mb-12 sm:flex-row sm:items-center">
                        <div className="relative w-full">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 sm:left-5">
                            <Link2 className="h-4 w-4 sm:h-6 sm:w-6" />
                          </div>
                          <input
                            type="text"
                            value="https://your-landing-page.com"
                            readOnly
                            className="h-12 w-full truncate rounded-xl border-2 border-indigo-100 bg-white pl-9 pr-4 text-xs text-slate-500 focus:outline-none dark:border-border/50 dark:bg-background dark:text-slate-400 sm:h-16 sm:rounded-2xl sm:pl-14 sm:pr-40 sm:text-base"
                          />
                        </div>
                        <button className="h-12 w-full rounded-xl bg-indigo-600 px-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-indigo-700 sm:absolute sm:bottom-2 sm:right-2 sm:top-2 sm:w-auto sm:px-8 sm:text-base">
                          Analyze
                        </button>
                      </div>

                      <div className="flex w-full flex-col items-start gap-4 px-2 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3 text-left sm:gap-4">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 sm:h-12 sm:w-12">
                            <Zap className="h-4 w-4 sm:h-6 sm:w-6" />
                          </div>
                          <div className="text-[10px] font-semibold leading-tight text-slate-700 dark:text-slate-300 sm:text-xs">
                            No Installation
                            <br className="hidden sm:block" /> Required
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-left sm:gap-4">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 sm:h-12 sm:w-12">
                            <Code2 className="h-4 w-4 sm:h-6 sm:w-6" />
                          </div>
                          <div className="text-[10px] font-semibold leading-tight text-slate-700 dark:text-slate-300 sm:text-xs">
                            No Coding
                            <br className="hidden sm:block" /> Needed
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-left sm:gap-4">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 sm:h-12 sm:w-12">
                            <ShieldCheck className="h-4 w-4 sm:h-6 sm:w-6" />
                          </div>
                          <div className="text-[10px] font-semibold leading-tight text-slate-700 dark:text-slate-300 sm:text-xs">
                            Secure &<br className="hidden sm:block" /> Private
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 2: AI Scanning State */}
                  <div
                    className={`absolute inset-0 flex transform items-center justify-center transition-all duration-700 ease-out ${activeTab === 1 ? 'z-10 scale-100 opacity-100' : 'pointer-events-none z-0 scale-95 opacity-0'}`}
                  >
                    <div className="relative flex h-56 w-56 items-center justify-center sm:h-80 sm:w-80">
                      {/* Scanning visual */}
                      <div className="absolute inset-0 rounded-full border-2 border-indigo-200 opacity-20 dark:border-indigo-800"></div>
                      <div className="absolute inset-6 rounded-full border-2 border-indigo-300 opacity-40 dark:border-indigo-700 sm:inset-8"></div>
                      <div className="absolute inset-12 rounded-full border-2 border-indigo-400 opacity-60 dark:border-indigo-600 sm:inset-16"></div>

                      <div className="absolute inset-0 animate-[spin_4s_linear_infinite] rounded-full border-r-4 border-t-4 border-indigo-500" />
                      <div className="absolute inset-6 animate-[spin_3s_linear_infinite_reverse] rounded-full border-b-4 border-l-4 border-purple-500 sm:inset-8" />

                      <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl dark:bg-card sm:h-32 sm:w-32">
                        <Cpu className="h-10 w-10 animate-pulse text-indigo-600 sm:h-14 sm:w-14" />
                      </div>

                      {/* Floating scanning dots */}
                      <div className="absolute -top-4 left-1/2 h-3 w-3 animate-bounce rounded-full bg-indigo-500 sm:-top-8 sm:h-4 sm:w-4"></div>
                      <div className="absolute -right-4 bottom-8 h-2 w-2 animate-ping rounded-full bg-purple-400 sm:-right-8 sm:bottom-12 sm:h-3 sm:w-3"></div>
                      <div className="absolute -left-6 top-1/4 h-4 w-4 animate-pulse rounded-full bg-emerald-400 sm:-left-10 sm:h-5 sm:w-5"></div>
                    </div>
                  </div>

                  {/* Tab 3: Insights State */}
                  <div
                    className={`absolute inset-0 flex transform flex-col p-4 transition-all duration-700 ease-out sm:p-10 ${activeTab === 2 ? 'z-10 scale-100 opacity-100' : 'pointer-events-none z-0 scale-95 opacity-0'}`}
                  >
                    <div className="hide-scrollbar flex h-full w-full flex-col overflow-y-auto rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] dark:border-border/50 dark:bg-card dark:shadow-none sm:p-8">
                      <h4 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white sm:mb-8 sm:text-2xl">
                        <Sparkles className="h-6 w-6 text-indigo-500 sm:h-7 sm:w-7" />{' '}
                        Found 3 Critical Issues
                      </h4>

                      <div className="flex flex-1 flex-col gap-6">
                        <div className="flex items-start gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-5 dark:border-border/50 dark:bg-background/50">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-base font-bold text-red-600">
                            1
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                              Weak Hero Headline
                            </div>
                            <div className="mt-1.5 text-sm text-slate-500">
                              Replace current headline with a value-driven
                              statement. Recommended test variant provided.
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-5 dark:border-border/50 dark:bg-background/50">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-base font-bold text-amber-600">
                            2
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                              Invisible Call-to-Action
                            </div>
                            <div className="mt-1.5 text-sm text-slate-500">
                              The primary CTA blends into the background. Change
                              color to #4F46E5 to increase contrast.
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-5 dark:border-border/50 dark:bg-background/50">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-600">
                            3
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                              Missing Social Proof
                            </div>
                            <div className="mt-1.5 text-sm text-slate-500">
                              Add customer logos directly below the hero section
                              to establish immediate credibility.
                            </div>
                          </div>
                        </div>
                      </div>
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
