import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { subscriptionService } from '@/server/services/SubscriptionService';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Fulfill the dummy checkout
    await subscriptionService.fulfillDummyCheckout(session.user.id);

    // Redirect back to dashboard
    return NextResponse.redirect(
      new URL('/dashboard?upgraded=true', request.url)
    );
  } catch (error) {
    console.error('Dummy fulfillment error:', error);
    return NextResponse.redirect(
      new URL('/dashboard?error=upgrade_failed', request.url)
    );
  }
}
