import React from 'react';

export function TrustedBy() {
  const logos = [
    { name: 'Acme Corp', fallback: 'ACME' },
    { name: 'GlobalTech', fallback: 'GlobalTech' },
    { name: 'NextWave', fallback: 'NEXTWAVE' },
    { name: 'Innovate', fallback: 'Innovate' },
    { name: 'Future', fallback: 'FUTURE' },
    { name: 'Stark', fallback: 'STARK' },
  ];

  return (
    <section className="border-y border-border/50 bg-muted/20 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          Trusted by top e-commerce and SaaS brands worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center text-xl font-bold tracking-tighter text-foreground/80 transition-colors hover:text-foreground md:text-2xl"
            >
              {logo.fallback}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
