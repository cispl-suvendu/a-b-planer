'use client';

import React, { useState } from 'react';
import { MousePointerClick, Cpu, LineChart } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function Workflow() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'input',
      title: '1. Paste Your URL',
      description:
        'Simply copy and paste any landing page URL into our dashboard. No installation or coding required.',
      icon: <MousePointerClick className="h-5 w-5" />,
    },
    {
      id: 'ai',
      title: '2. AI Scans Your Page',
      description:
        'Our vision models capture your page, break down the DOM, and analyze the UX, messaging, and trust signals.',
      icon: <Cpu className="h-5 w-5" />,
    },
    {
      id: 'insights',
      title: '3. Get Actionable Wins',
      description:
        'Receive a prioritized list of A/B test ideas and visual annotations pinpointing exactly what to change.',
      icon: <LineChart className="h-5 w-5" />,
    },
  ];

  return (
    <section id="workflow" className="scroll-mt-20 bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Simplify Your CRO Workflow
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;ve streamlined website analysis so you can focus on what
            matters most: growing your business.
          </p>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-8">
          {/* Tabs */}
          <div className="flex w-full flex-col gap-4 lg:w-1/3">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`rounded-2xl border-2 p-6 text-left transition-all duration-300 ${
                  activeTab === idx
                    ? 'border-indigo-500 bg-card shadow-lg'
                    : 'border-transparent hover:border-border hover:bg-card/50'
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`rounded-lg p-2 ${activeTab === idx ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' : 'bg-muted text-muted-foreground'}`}
                  >
                    {tab.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold ${activeTab === idx ? 'text-foreground' : 'text-muted-foreground'}`}
                  >
                    {tab.title}
                  </h3>
                </div>
                <p
                  className={`text-base ${activeTab === idx ? 'text-muted-foreground' : 'text-muted-foreground/70'}`}
                >
                  {tab.description}
                </p>
              </button>
            ))}
          </div>

          {/* Image/Mockup area */}
          <div className="w-full lg:w-2/3">
            <Card className="relative flex aspect-video items-center justify-center overflow-hidden border-border/50 bg-card p-8 shadow-xl">
              {/* Tab 1: Input */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeTab === 0 ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
              >
                <div className="w-full max-w-lg space-y-6">
                  <div className="mx-auto mb-2 h-6 w-48 rounded bg-muted" />
                  <div className="flex h-16 w-full items-center gap-3 rounded-xl border-2 border-indigo-500/30 bg-background px-4 shadow-inner">
                    <div className="h-6 w-6 rounded bg-muted text-muted-foreground opacity-50" />
                    <div className="h-4 w-64 rounded bg-muted/80" />
                    <div className="ml-auto h-10 w-24 rounded-lg bg-indigo-600" />
                  </div>
                </div>
              </div>

              {/* Tab 2: AI Scanning */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 to-transparent transition-opacity duration-500 ${activeTab === 1 ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
              >
                <div className="relative h-64 w-64">
                  <div className="absolute inset-0 animate-[spin_4s_linear_infinite] rounded-full border-4 border-indigo-500/30" />
                  <div className="absolute inset-4 animate-[spin_3s_linear_infinite_reverse] rounded-full border-4 border-purple-500/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu className="h-16 w-16 animate-pulse text-indigo-500" />
                  </div>
                </div>
              </div>

              {/* Tab 3: Insights */}
              <div
                className={`absolute inset-0 p-8 transition-opacity duration-500 ${activeTab === 2 ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
              >
                <div className="flex h-full w-full gap-6">
                  <div className="flex w-1/3 flex-col gap-4">
                    <div className="h-24 rounded-xl border border-emerald-500/20 bg-emerald-500/10" />
                    <div className="h-24 rounded-xl border border-amber-500/20 bg-amber-500/10" />
                    <div className="h-24 rounded-xl border border-indigo-500/20 bg-indigo-500/10" />
                  </div>
                  <div className="relative flex-1 overflow-hidden rounded-xl border bg-background shadow-sm">
                    <div className="absolute left-4 top-4 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-[10px] font-bold text-white shadow-lg">
                      1
                    </div>
                    <div className="absolute right-1/4 top-1/2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-amber-500 text-[10px] font-bold text-white shadow-lg">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
