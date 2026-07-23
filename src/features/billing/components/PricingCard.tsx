'use client';

import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useState } from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPro?: boolean;
  buttonText: string;
  onSelect: () => Promise<void> | void;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  isPro,
  buttonText,
  onSelect,
}: PricingCardProps) {
  const [loading, setLoading] = useState(false);

  const handleSelect = async () => {
    setLoading(true);
    try {
      await onSelect();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      className={`relative flex flex-col ${isPro ? 'border-indigo-500 shadow-xl shadow-indigo-100' : 'border-border'}`}
    >
      {isPro && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <span className="flex items-center gap-1 rounded-full bg-indigo-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            <Zap className="h-3 w-3 fill-white" /> Recommended
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-extrabold">{price}</span>
          {price !== 'Free' && (
            <span className="text-muted-foreground">/month</span>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check
                className={`h-5 w-5 shrink-0 ${isPro ? 'text-indigo-500' : 'text-slate-400'}`}
              />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={isPro ? 'default' : 'outline'}
          onClick={handleSelect}
          disabled={loading}
        >
          {loading ? 'Processing...' : buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
