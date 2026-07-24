'use client';

import { useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CreditCard } from 'lucide-react';

function DummyCheckoutForm() {
  const [showUpgradeNotice, setShowUpgradeNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowUpgradeNotice(true);
  };

  return (
    <Card className="mx-auto w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Mock Checkout
        </CardTitle>
        <CardDescription>
          This is a simulated checkout flow. Any test card details will work.
        </CardDescription>
      </CardHeader>

      {showUpgradeNotice ? (
        <CardContent className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
          <div className="mb-2 rounded-full bg-indigo-50 p-4">
            <CreditCard className="h-10 w-10 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Upgrade Request</h2>
          <p className="max-w-sm text-sm text-slate-600">
            Self-serve upgrades are currently disabled. To upgrade to the Pro
            plan, please contact our team directly.
          </p>
          <div className="mt-4 rounded-md border border-slate-200 bg-slate-100 p-4">
            <p className="mb-1 text-sm font-semibold text-slate-800">
              Email us at:
            </p>
            <a
              href="mailto:suvendu.chatterjee@codeclouds.in"
              className="font-bold text-indigo-600 hover:underline"
            >
              suvendu.chatterjee@codeclouds.in
            </a>
          </div>
          <Button
            variant="outline"
            className="mt-6 w-full"
            onClick={() => (window.location.href = '/dashboard')}
          >
            Return to Dashboard
          </Button>
        </CardContent>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                defaultValue="test@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="cardName"
                className="text-sm font-medium leading-none"
              >
                Name on Card
              </label>
              <Input
                id="cardName"
                placeholder="Jane Doe"
                required
                defaultValue="Jane Doe"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="cardNumber"
                className="text-sm font-medium leading-none"
              >
                Card Number
              </label>
              <Input
                id="cardNumber"
                placeholder="4242 4242 4242 4242"
                required
                defaultValue="4242 4242 4242 4242"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="expiry"
                  className="text-sm font-medium leading-none"
                >
                  Expiry (MM/YY)
                </label>
                <Input
                  id="expiry"
                  placeholder="12/26"
                  required
                  defaultValue="12/26"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="cvc"
                  className="text-sm font-medium leading-none"
                >
                  CVC
                </label>
                <Input id="cvc" placeholder="123" required defaultValue="123" />
              </div>
            </div>

            <div className="mt-4 rounded-md border bg-slate-50 p-3 text-sm text-slate-500">
              <p className="font-semibold text-slate-700">Order Summary:</p>
              <div className="mt-1 flex justify-between">
                <span>Pro Plan (Monthly)</span>
                <span>$4.00</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-indigo-600 font-semibold text-white hover:bg-indigo-700"
            >
              Pay $4.00
            </Button>
          </CardFooter>
        </form>
      )}
    </Card>
  );
}

export default function DummyCheckoutPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Suspense fallback={<div>Loading checkout...</div>}>
        <DummyCheckoutForm />
      </Suspense>
    </div>
  );
}
