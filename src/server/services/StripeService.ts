import { BaseService } from './BaseService';

// Dummy Stripe implementation
export class StripeService extends BaseService {
  /**
   * Creates a dummy checkout session URL
   */
  async createCheckoutSession(
    userId: string,
    email: string,
    returnUrl: string
  ) {
    this.logger.info(`Creating dummy Stripe checkout session for ${email}`);

    // We'll redirect to our visual dummy checkout form, passing the returnUrl
    // Ensure we handle absolute vs relative paths safely by constructing a full URL
    // Since this runs on the server, we don't easily have window.location.
    // The frontend should have provided an absolute returnUrl, so we can extract origin from it.

    let origin = '';
    try {
      const parsedUrl = new URL(returnUrl);
      origin = parsedUrl.origin;
    } catch {
      // Fallback if returnUrl is relative
      origin = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    }

    const mockSessionUrl = `${origin}/checkout/dummy?returnUrl=${encodeURIComponent(returnUrl)}`;

    return {
      url: mockSessionUrl,
      id: `dummy_session_${Date.now()}`,
    };
  }

  /**
   * Simulates webhook processing (not actually needed for dummy flow if we upgrade immediately,
   * but keeping the signature for future real implementation)
   */
  async constructEvent(payload: string, signature: string) {
    void payload;
    void signature;
    this.logger.info('Verifying dummy Stripe signature');
    return { type: 'checkout.session.completed', data: { object: {} } };
  }
}

export const stripeService = new StripeService();
