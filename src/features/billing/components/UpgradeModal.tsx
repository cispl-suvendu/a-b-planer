'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PricingCard } from './PricingCard';
import { useState } from 'react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UpgradeModal({ isOpen, onClose }: UpgradeModalProps) {
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
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Upgrade to Pro
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            You&apos;ve reached your free limit. Upgrade to unlock unlimited
            analyses and premium features!
          </DialogDescription>
        </DialogHeader>

        {error && (
          <div className="rounded-md bg-destructive/10 p-3 text-center text-sm text-destructive">
            {error}
          </div>
        )}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
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
            onSelect={onClose}
          />
          <PricingCard
            title="Pro"
            price="$4"
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
      </DialogContent>
    </Dialog>
  );
}
