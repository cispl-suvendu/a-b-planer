---
title: Project Constitution
version: 1.0.0
owner: Chief Software Architect
status: Approved
last_updated: 2026-07-21
category: Constitution
priority: Critical
ai_read_required: true
---

# Project Constitution

> This document defines the immutable engineering, architectural, product, and quality principles for the project.
>
> Every AI agent, engineer, designer, reviewer, and contributor must follow these rules.
>
> If a request conflicts with this constitution, the request must be rejected or escalated to the Founder.

---

# Article 1 — Long-Term Thinking

The project must always prioritize long-term maintainability over short-term implementation speed.

Every architectural decision should assume:

- The application will serve over 100,000 users.
- The codebase will continue to grow for many years.
- Multiple engineers and AI agents will contribute simultaneously.
- Future AI tools may be added to the platform.

Never introduce technical debt knowingly.

---

# Article 2 — Production-Ready Code

Every generated feature must be production-ready.

Never generate:

- Placeholder implementations
- TODO comments
- Mock business logic
- Fake API responses
- Temporary shortcuts

If implementation is incomplete, stop and explain why.

---

# Article 3 — Single Source of Truth

Every piece of business logic must exist in only one place.

Never duplicate:

- validation
- calculations
- business rules
- API logic
- database queries
- utility functions

Reuse existing modules whenever possible.

---

# Article 4 — Separation of Concerns

Every layer has one responsibility.

Frontend handles presentation.

Backend handles orchestration.

Services contain business logic.

Repositories handle persistence.

Infrastructure handles third-party integrations.

Business logic must never exist inside:

- React components
- Route handlers
- Database models

---

# Article 5 — Feature Ownership

Every feature must own its own:

- components
- services
- types
- hooks
- validators
- tests
- documentation

Shared code belongs only inside shared modules.

---

# Article 6 — Type Safety

The project uses TypeScript Strict Mode.

Never use:

- any
- implicit any
- unknown without narrowing
- unsafe casting

Every API request and response must be typed.

Every external response must be validated.

---

# Article 7 — Architecture First

No feature may modify the project architecture without approval from the Chief Software Architect.

The following require architectural approval:

- folder structure
- shared interfaces
- database schema
- infrastructure
- authentication
- caching strategy
- queue strategy

Feature agents are not permitted to change architecture.

---

# Article 8 — User Experience

Every screen must answer:

1. Where am I?
2. What is happening?
3. What should I do next?

The interface must prioritize:

- clarity
- consistency
- usability
- accessibility
- speed

Never add visual complexity without improving usability.

---

# Article 9 — Accessibility

Accessibility is mandatory.

Every feature must support:

- keyboard navigation
- focus visibility
- screen readers
- semantic HTML
- sufficient contrast
- reduced motion preferences

Accessibility is never optional.

---

# Article 10 — Performance

Performance is a feature.

Always optimize:

- rendering
- network requests
- bundle size
- database queries
- AI requests
- caching

Never sacrifice performance without measurable user benefit.

---

# Article 11 — Security

Security is mandatory.

Every request must be validated.

Every endpoint must be authorized.

Never trust client input.

Never expose secrets.

Never bypass validation.

Every feature must assume malicious input.

---

# Article 12 — AI Principles

The AI must behave like an experienced CRO consultant.

Never behave like a chatbot.

Recommendations must always be:

- actionable
- measurable
- prioritized
- explainable
- implementation-ready

Every AI response must be validated before persistence.

---

# Article 13 — Quality Standards

Quality is more important than delivery speed.

Every feature must include:

- loading states
- empty states
- error handling
- responsive design
- accessibility
- validation

No feature is complete without these.

---

# Article 14 — Documentation

Every significant decision must be documented.

Architecture changes require documentation updates.

New infrastructure requires documentation.

New patterns require documentation.

Documentation is part of the product.

---

# Article 15 — Scalability

Every implementation should assume future scaling.

Avoid solutions that only work for small projects.

Caching, indexing, modularization, and observability should be considered from the beginning.

---

# Article 16 — Consistency

The project should feel like it was built by one engineering team.

Never introduce:

- inconsistent naming
- duplicate patterns
- mixed architectures
- conflicting coding styles

Consistency is more valuable than cleverness.

---

# Article 17 — Design Philosophy

The product should feel:

- Premium
- Calm
- Fast
- Professional
- Trustworthy
- Enterprise-ready

Design inspiration comes from products like:

- OpenAI
- Linear
- Vercel
- Stripe
- Notion

Never copy designs.

Instead, learn from their simplicity and attention to detail.

---

# Article 18 — Product Philosophy

Every feature must answer one question:

"Does this make the product more valuable for the user?"

If not, the feature should not be built.

Avoid feature creep.

The MVP should remain focused.

---

# Article 19 — Decision Hierarchy

When conflicts occur, follow this priority:

1. Founder Decision
2. Project Constitution
3. Architecture Documents
4. Engineering Rules
5. Sprint Documentation
6. Feature Requests

Lower-priority documents may never override higher-priority documents.

---

# Article 20 — Definition of Done

A feature is only considered complete when:

- Architecture follows project standards.
- Code is production-ready.
- Types are complete.
- Validation exists.
- Accessibility is implemented.
- Responsive design is complete.
- Error handling is included.
- Documentation is updated.
- QA review passes.

If any requirement is missing, the feature is not complete.

---

# Final Principle

Every contributor should leave the codebase in a better state than they found it.

The goal is not only to build software.

The goal is to build software that remains maintainable, scalable, and enjoyable to work on for years to come.
