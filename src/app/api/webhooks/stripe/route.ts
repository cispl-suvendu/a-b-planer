import { NextRequest, NextResponse } from 'next/server';
import { stripeService } from '@/server/services/StripeService';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature' },
        { status: 400 }
      );
    }

    const event = await stripeService.constructEvent(rawBody, signature);
    void event;

    // Dummy webhook processor
    // In reality, this would read event.type (e.g. checkout.session.completed)
    // and update the Subscription service.

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
  }
}
