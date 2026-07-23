---
title: MVP Scope
version: 1.0.0
owner: Founder
status: Approved
category: Product Documentation
priority: Critical
ai_read_required: true
last_updated: 2026-07-21
---

# MVP Scope

## Purpose

This document defines the exact scope of Version 1 of Landing Page A/B Planner.

The purpose is to create a focused, valuable, and launch-ready product while avoiding unnecessary complexity.

Every feature request must be evaluated against this document.

Features outside this scope require explicit approval.

---

# MVP Goal

The MVP goal is:

> Allow a user to submit a landing page URL and receive a professional AI-generated A/B testing plan with prioritized experiment recommendations.

The MVP proves that users find value in AI-powered CRO recommendations.

---

# MVP Core User Journey

## Step 1 — Visitor Discovery

User visits marketing landing page.

User understands:

- What the product does
- Who it helps
- Pricing
- Value proposition

---

## Step 2 — Authentication

User signs in using:

Google OAuth

After authentication:

User receives a Free account.

---

## Step 3 — Dashboard

User enters the application dashboard.

Dashboard provides:

- Welcome experience
- Analysis input
- Usage information
- Analysis history
- Upgrade information

---

## Step 4 — Submit URL

User provides:

A public webpage URL.

Default use case:

Landing page analysis.

Supported:

- Marketing landing pages
- SaaS homepages
- Product pages
- Pricing pages
- Any direct webpage URL

MVP does not crawl entire websites.

Only the provided URL is analyzed.

---

## Step 5 — Background Analysis

Analysis runs asynchronously.

User sees:

Queued

↓

Processing

↓

Analyzing

↓

Generating Report

↓

Completed

---

## Step 6 — AI Report

User receives structured CRO recommendations.

Report includes:

- Summary
- Current page analysis
- Problems identified
- Test hypotheses
- Variant A
- Variant B
- Suggested copy
- Expected impact
- Confidence score
- Difficulty score
- Priority score
- Implementation guidance
- Winner metric

---

## Step 7 — History

User can view previous reports.

Free:

Limited by analysis credits.

Pro:

Unlimited history.

---

# MVP Features

---

# Feature 1 — Authentication

Priority:

P0

Status:

Required

Includes:

- Google login
- Session management
- Protected dashboard

Not included:

- Email/password login
- Magic links
- Social providers

---

# Feature 2 — Marketing Landing Page

Priority:

P0

Status:

Required

Purpose:

Explain product value.

Includes:

- Hero section
- Product explanation
- How it works
- Benefits
- Pricing preview
- CTA

---

# Feature 3 — Dashboard

Priority:

P0

Status:

Required

Includes:

- URL submission
- Usage counter
- Report list
- User information

---

# Feature 4 — Landing Page Analysis Engine

Priority:

P0

Status:

Required

Analysis includes:

HTML extraction

↓

Screenshot capture

↓

CSS analysis

↓

Metadata extraction

↓

Lighthouse audit

↓

AI processing

---

# Feature 5 — Background Processing

Priority:

P0

Status:

Required

Technology:

BullMQ

Redis

Requirements:

- Queue jobs
- Track progress
- Handle failures
- Retry temporary errors

---

# Feature 6 — AI Report Generation

Priority:

P0

Status:

Required

Technology:

OpenRouter

Requirements:

- Prompt versioning
- Structured output
- Validation
- Storage

---

# Feature 7 — Report Viewer

Priority:

P0

Status:

Required

Requirements:

Professional presentation.

Must display:

- Experiments
- Priority ranking
- Impact
- Confidence
- Difficulty
- Implementation

---

# Feature 8 — Usage Limits

Priority:

P0

Status:

Required

Rules:

Free users:

4 lifetime analyses

Pro users:

Unlimited

---

# Feature 9 — Pricing Page

Priority:

P1

Status:

Required

Includes:

- Free plan
- Pro plan
- Upgrade CTA

---

# Feature 10 — Stripe Preparation

Priority:

P1

Status:

Required

Implementation:

Backend ready for:

- Stripe products
- Checkout
- Webhooks
- Subscription sync

Actual payment activation can happen later.

---

# Feature 11 — Admin Panel

Priority:

P1

Status:

Required

Includes:

- Users
- Subscriptions
- Analyses
- AI usage
- Errors
- Logs

---

# MVP Excluded Features

The following are intentionally excluded.

---

## PDF Export

Future Phase.

---

## Team Collaboration

Future Phase.

---

## Continuous Monitoring

Future Phase.

---

## Website Crawling

Future Phase.

MVP analyzes only the submitted URL.

---

## Browser Extension

Future Phase.

---

## API Access

Future Phase.

---

## AI Copy Rewrite

Future Phase.

---

## Competitor Monitoring

Future Phase.

---

## Automated A/B Testing

Future Phase.

---

## Multiple Workspaces

Future Phase.

---

# MVP Technical Boundaries

The MVP must:

- Use scalable architecture.
- Use service layers.
- Support future subscriptions.
- Support future AI models.
- Store prompt versions.
- Use UUID public identifiers.
- Maintain enterprise coding standards.

---

# MVP Quality Requirements

Before launch:

## Performance

- Fast dashboard loading
- Optimized assets
- Efficient queries

---

## Security

- Authentication protected
- API authorization
- Secure environment variables
- Input validation

---

## Accessibility

- Keyboard support
- Semantic HTML
- Good contrast
- Responsive design

---

## Reliability

- Background jobs recover from failure
- AI failures handled gracefully
- Logging implemented

---

# MVP Launch Criteria

The MVP is ready when:

✓ User can sign up

✓ User can analyze a URL

✓ Analysis completes successfully

✓ AI generates structured recommendations

✓ Reports are saved

✓ Users can view history

✓ Free limits work

✓ Pro architecture exists

✓ Admin can monitor system

✓ Production deployment works

---

# MVP Success Definition

The MVP succeeds when users repeatedly say:

"I know exactly what landing page changes I should test next."

The goal is not maximum features.

The goal is proving customer value.

---

# AI Guidance

Before suggesting a new feature, AI agents must ask:

1. Does this directly improve the core workflow?
2. Is it required for MVP success?
3. Can it wait until Phase 2?

If it is not critical, defer it.

---

# Related Documents

- product-overview.md
- feature-catalog.md
- business-rules.md
- future-roadmap.md

---

# Change History

## v1.0.0

- Defined MVP boundaries.
- Established core user journey.
- Documented required and excluded features.
- Created launch criteria.
