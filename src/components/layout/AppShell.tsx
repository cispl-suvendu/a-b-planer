'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { LayoutDashboard, FileText, Settings, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserDropdown } from './UserDropdown';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data: session } = useSession();

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Reports', href: '/reports', icon: FileText },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  if (session?.user?.role === 'ADMIN') {
    navLinks.push({ name: 'Admin', href: '/admin', icon: Shield });
  }

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 font-semibold tracking-tight text-primary"
          >
            A/B Planner
          </Link>
        </div>
        <nav className="flex flex-1 flex-col gap-2 overflow-auto px-4 py-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <Icon className="h-4 w-4" />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex w-full flex-col sm:gap-4 sm:py-4 sm:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="flex-1 sm:hidden">
            <span className="font-semibold tracking-tight text-primary">
              A/B Planner
            </span>
          </div>
          <div className="hidden flex-1 sm:block">
            {/* Breadcrumbs can go here */}
          </div>
          <div className="flex items-center gap-4">
            <UserDropdown />
          </div>
        </header>

        {/* Page Content */}
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
}
