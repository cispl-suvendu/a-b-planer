'use client';

import { PricingCard } from '@/features/billing/components/PricingCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function PricingPage() {
  const [error, setError] = useState('');

  const handleUpgrade = async () => {
    try {
      const returnUrl = `${window.location.origin}/api/subscription/fulfill-dummy`;

      const res = await fetch('/api/subscription/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ returnUrl }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to initialize checkout');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: unknown) {
      setError((err as Error).message || 'Something went wrong');
    }
  };

  return (
    <div className="container max-w-5xl space-y-12 py-24">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Simple, transparent pricing
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Choose the plan that fits your needs. Upgrade anytime to unlock the
          full power of AI-driven CRO.
        </p>
      </div>

      {error && (
        <div className="mx-auto max-w-2xl rounded-md bg-destructive/10 p-4 text-center text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        <PricingCard
          title="Free"
          price="Free"
          description="Perfect for exploring the tool"
          features={[
            '4 Lifetime Analyses',
            'Basic CRO Reports',
            'Standard Priority Generation',
          ]}
          buttonText="Current Plan"
          onSelect={() => {}}
        />
        <PricingCard
          title="Pro"
          price="$29"
          description="For serious marketers and agencies"
          features={[
            'Unlimited Analyses',
            'Full Report History',
            'Highest Priority Generation',
            'Export to PDF (Coming soon)',
            'Team collaboration (Coming soon)',
          ]}
          isPro={true}
          buttonText="Upgrade Now"
          onSelect={handleUpgrade}
        />
      </div>

      <div className="mt-12 text-center">
        <Link href="/dashboard">
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
