import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Providers } from '@/store/provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000')
  ),
  title: 'Landing Page A/B Planner | AI-Powered Optimization',
  description:
    'Transform your landing pages with AI-powered insights. Uncover issues, prioritize high-impact A/B tests, and ship winning variations to boost conversions.',
  keywords: [
    'Conversion Rate Optimization',
    'CRO',
    'A/B Testing',
    'Landing Page Optimization',
    'AI Audit',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Landing Page A/B Planner | AI-Powered Optimization',
    description:
      'Transform your landing pages with AI-powered insights. Uncover issues, prioritize high-impact A/B tests, and ship winning variations to boost conversions.',
    siteName: 'Landing Page A/B Planner',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Page A/B Planner | AI-Powered Optimization',
    description:
      'Transform your landing pages with AI-powered insights. Uncover issues, prioritize high-impact A/B tests, and ship winning variations to boost conversions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('font-sans antialiased', inter.variable)}>
      <body className="min-h-screen bg-background text-foreground">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
