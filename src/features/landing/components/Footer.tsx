'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

export function Footer() {
  const { data: session } = useSession();
  return (
    <footer className="mt-10 border-t border-border bg-background">
      {/* Pre-footer CTA */}
      <div className="bg-indigo-600 dark:bg-indigo-900/80">
        <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 py-16 md:flex-row md:px-6 md:py-20">
          <div className="max-w-2xl text-center text-white md:text-left">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Take Control of Your Conversions Today!
            </h2>
            <p className="text-lg text-indigo-100 md:text-xl">
              Streamline your workflow, identify UX blockers, and build better
              landing pages with AI.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href={session ? '/dashboard' : '/login'}>
              <Button
                size="lg"
                className="h-14 rounded-full bg-white px-8 text-lg font-bold text-indigo-600 shadow-xl hover:bg-indigo-50"
              >
                {session ? 'Go to Dashboard' : 'Start Analyzing Free'}{' '}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-full bg-indigo-100 p-2 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-xl font-extrabold tracking-tight text-transparent dark:from-indigo-400 dark:to-purple-400">
                PageAnalyzer
              </span>
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Empowering marketers and agencies to build higher converting
              landing pages with the power of artificial intelligence.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-indigo-100 hover:text-indigo-600"
              >
                X
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-indigo-100 hover:text-indigo-600"
              >
                in
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-foreground">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="#features"
                  className="transition-colors hover:text-indigo-600"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#workflow"
                  className="transition-colors hover:text-indigo-600"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="transition-colors hover:text-indigo-600"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="transition-colors hover:text-indigo-600"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-foreground">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-indigo-600">
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-colors hover:text-indigo-600"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-indigo-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-indigo-600">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-indigo-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-indigo-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-indigo-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-indigo-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} PageAnalyzer Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
