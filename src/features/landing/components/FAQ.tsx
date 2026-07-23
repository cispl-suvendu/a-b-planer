import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'What kind of analysis does PageAnalyzer provide?',
      answer:
        'Our AI vision models break down your landing page into multiple categories: UX, Messaging, Trust & Credibility, and Performance. We highlight specific sections of your page and provide actionable recommendations (A/B test ideas) to improve your conversion rate.',
    },
    {
      question: 'Do I need to install any tracking code on my website?',
      answer:
        'No! Our tool operates entirely externally. Simply paste your public URL into our dashboard, and our AI will render the page, take a screenshot, and analyze the DOM and visual elements just like a real user would.',
    },
    {
      question: 'Is there a limit to the number of URLs I can analyze?',
      answer:
        'Free users get 4 free analyses to test out the platform. Pro users enjoy unlimited analyses, allowing you to test iterations, monitor competitors, and continuously optimize your funnels.',
    },
    {
      question: 'Can I export the reports to share with my team?',
      answer:
        'Yes. Pro users can export full analysis reports as PDFs or share public links directly with designers and developers, making it easy to implement the recommended changes.',
    },
    {
      question: 'How accurate is the AI scoring system?',
      answer:
        'Our proprietary scoring system has been trained on thousands of high-converting landing pages across various industries. While it doesn&apos;t replace real user data, it serves as an excellent benchmark to identify obvious friction points before you spend money on ads.',
    },
  ];

  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            All Your Questions, Answered
          </h2>
          <p className="text-lg text-muted-foreground">
            Find quick answers to the most commonly asked questions about our
            platform. If you need further help, feel free to contact our support
            team.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-border/50 px-2"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-semibold transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
