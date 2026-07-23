import { Navigation } from '@/features/landing/components/Navigation';
import { Hero } from '@/features/landing/components/Hero';
import { TrustedBy } from '@/features/landing/components/TrustedBy';
import { Features } from '@/features/landing/components/Features';
import { Workflow } from '@/features/landing/components/Workflow';
import { Testimonials } from '@/features/landing/components/Testimonials';
import { Pricing } from '@/features/landing/components/Pricing';
import { FAQ } from '@/features/landing/components/FAQ';
import { Footer } from '@/features/landing/components/Footer';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans selection:bg-indigo-500/30">
      <Navigation />

      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Features />
        <Workflow />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
