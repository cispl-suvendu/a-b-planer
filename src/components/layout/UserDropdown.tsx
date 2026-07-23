/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User as UserIcon } from 'lucide-react';

export function UserDropdown() {
  const { data: session, status } = useSession();

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    return name.substring(0, 2).toUpperCase();
  };

  if (status === 'loading') {
    return <div className="h-9 w-9 animate-pulse rounded-full bg-muted"></div>;
  }

  if (status === 'unauthenticated' || !session) {
    return (
      <Link href="/login">
        <Button variant="default">Sign In</Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border bg-muted outline-none ring-0 transition-opacity hover:opacity-80">
        {session.user?.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={session.user.image}
            alt={session.user?.name || 'User'}
            className="h-full w-full object-cover"
          />
        ) : session.user?.name ? (
          <div className="flex h-full w-full items-center justify-center bg-primary text-sm font-semibold text-primary-foreground">
            {getInitials(session.user.name)}
          </div>
        ) : (
          <UserIcon className="h-5 w-5 text-muted-foreground" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2 w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session.user?.name || 'Account'}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session.user?.email || ''}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>
        {session.user?.role === 'ADMIN' && (
          <DropdownMenuItem asChild>
            <Link href="/admin">Admin Panel</Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer text-destructive focus:text-destructive"
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
