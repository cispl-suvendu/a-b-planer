import React from 'react';
import { UserDropdown } from './UserDropdown';

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold tracking-tight text-primary">
            A/B Planner
          </div>
          <nav className="hidden gap-6 md:flex">
            <a
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <UserDropdown />
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for conversion rate optimizers.
          </p>
        </div>
      </footer>
    </div>
  );
}
