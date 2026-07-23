import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-background to-background dark:from-indigo-900/20" />
      <div className="absolute right-0 top-0 -z-10 h-[600px] w-[800px] -translate-y-12 translate-x-1/3 rounded-full bg-purple-400/20 blur-[120px] dark:bg-purple-600/10" />
      <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-400/20 blur-[120px] dark:bg-indigo-600/10" />

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="rounded-full bg-indigo-100 p-2 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles h-6 w-6"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
          </div>
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent dark:from-indigo-400 dark:to-purple-400">
            PageAnalyzer
          </span>
        </div>

        <Card className="overflow-hidden rounded-2xl border-border/50 bg-background/80 shadow-2xl backdrop-blur-xl">
          <CardHeader className="space-y-3 pb-8 pt-10 text-center">
            <CardTitle className="text-3xl font-extrabold tracking-tight text-foreground">
              {title}
            </CardTitle>
            <CardDescription className="mx-auto max-w-sm text-base leading-relaxed text-muted-foreground">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-10">{children}</CardContent>
        </Card>
      </div>
    </div>
  );
}
