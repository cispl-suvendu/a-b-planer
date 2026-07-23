'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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
import { Loader2, CreditCard, CheckCircle2 } from 'lucide-react';

function DummyCheckoutForm() {
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get('returnUrl') || '/dashboard';

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network delay
    setTimeout(() => {
      setSuccess(true);

      // Redirect after success animation
      setTimeout(() => {
        window.location.href = `${returnUrl}?success=true&session_id=dummy_session_${Date.now()}`;
      }, 1500);
    }, 1500);
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

      {success ? (
        <CardContent className="flex flex-col items-center justify-center space-y-4 py-12">
          <CheckCircle2 className="h-16 w-16 text-green-500 animate-in zoom-in" />
          <h2 className="text-xl font-bold">Payment Successful!</h2>
          <p className="text-center text-sm text-muted-foreground">
            Redirecting back to application...
          </p>
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
                <span>$29.00</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Pay $29.00'
              )}
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
