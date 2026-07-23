---
title: Business Model
version: 1.0.0
owner: Founder
status: Approved
category: Product Documentation
priority: Critical
ai_read_required: true
last_updated: 2026-07-21
---

# Business Model

## Purpose

This document defines how Landing Page A/B Planner creates, delivers, and captures value.

It establishes the subscription model, user lifecycle, feature gating strategy, upgrade flow, and future monetization plans.

All pricing logic, subscription validation, and access control must follow the rules defined here.

---

# Business Model Overview

Landing Page A/B Planner follows a **Freemium SaaS** model.

Users can experience the product with a generous free allowance before upgrading to unlock unlimited usage.

Our objective is to let users experience the value of AI-generated experimentation reports before asking for payment.

---

# Customer Lifecycle

Anonymous Visitor

↓

Landing Page

↓

Google Sign-In

↓

Free Account Created

↓

First Analysis

↓

Value Realization

↓

Continue Using Free Plan

↓

Free Limit Reached

↓

Upgrade Prompt

↓

Stripe Checkout

↓

Pro Subscription

↓

Long-Term Customer

---

# Subscription Plans

## Free Plan

Purpose:

Allow users to evaluate the platform with meaningful usage.

### Included

- Google Authentication
- Dashboard
- Analysis History
- Report Viewer
- AI Experiment Reports
- Progress Tracking

### Limits

- 4 lifetime analyses
- One analysis at a time
- No priority support
- No future premium features

Once the lifetime limit is reached, new analyses are blocked until the user upgrades.

Existing reports remain accessible.

---

## Pro Plan

Purpose:

Designed for users who regularly optimize websites.

### Included

- Unlimited analyses
- Unlimited report history
- Faster queue priority (future)
- Advanced report features (future)
- PDF export (future)
- Continuous monitoring (future)
- Team collaboration (future)
- API access (future)

The MVP exposes only the features currently implemented while preparing the architecture for future capabilities.

---

## Enterprise (Future)

Future plan for larger organizations.

Potential capabilities:

- Multiple workspaces
- Teams
- SSO
- Dedicated support
- Custom AI prompts
- Usage analytics
- SLA
- White-label reports

Not included in MVP.

---

# Pricing Strategy

Current public pricing:

Pro

$19/month

Architecture must also support:

- Monthly billing
- Yearly billing

Only Monthly is displayed during MVP.

Yearly billing remains hidden until launch.

---

# Upgrade Philosophy

We do not aggressively force upgrades.

Instead, users should naturally reach the limit after experiencing the product's value.

Upgrade prompts should emphasize:

- Unlimited analyses
- Continued optimization
- Time savings
- Professional recommendations

Avoid dark patterns or misleading messaging.

---

# Feature Gating

Features are controlled by subscription level.

| Feature               | Free       | Pro       |
| --------------------- | ---------- | --------- |
| Google Login          | ✅         | ✅        |
| Dashboard             | ✅         | ✅        |
| AI Analysis           | 4 Lifetime | Unlimited |
| Analysis History      | ✅         | ✅        |
| Report Viewer         | ✅         | ✅        |
| PDF Export            | ❌         | Future    |
| Continuous Monitoring | ❌         | Future    |
| Team Collaboration    | ❌         | Future    |
| API Access            | ❌         | Future    |

The backend must always enforce access restrictions.

Frontend gating is for UX only.

---

# Analysis Usage Rules

Every successful analysis consumes one credit.

Failed analyses caused by:

- Platform errors
- AI provider failures
- Internal exceptions

must **not** consume a user's lifetime allowance.

Usage is deducted only after a report is successfully generated and stored.

---

# Subscription States

Supported states:

- Free
- Active
- Past Due
- Cancelled
- Expired
- Trial (Future)

The system should be designed to support additional subscription states without requiring architectural changes.

---

# Stripe Integration

Stripe is the billing provider.

Requirements:

- Checkout Sessions
- Customer Records
- Webhooks
- Subscription Synchronization
- Billing Portal (future)

Stripe Secret Keys are managed through environment variables.

No payment secrets should ever reach the client.

---

# Cancellation Policy

When a Pro subscription is cancelled:

- Users retain access until the billing period ends.
- Existing reports remain accessible.
- New analyses are blocked after expiration unless the user renews.

No report data is deleted due to cancellation.

---

# Refund Policy

Refund handling is managed manually during MVP.

Future versions may introduce automated workflows.

---

# Revenue Strategy

Primary revenue source:

Recurring monthly subscriptions.

Future opportunities:

- Annual subscriptions
- Enterprise plans
- Team plans
- API pricing
- White-label licensing
- Agency plans
- Marketplace integrations

---

# Business Rules

- Every user starts on the Free plan.
- Authentication is required before analysis.
- Four analyses are granted per account for life.
- Credits are never reset.
- Upgrading immediately removes the analysis limit.
- Downgrading restores Free plan restrictions.
- Existing reports are always accessible.
- Subscription status is validated on the backend.

---

# Success Metrics

The business model should optimize for:

- Free-to-Pro conversion rate
- Monthly Recurring Revenue (MRR)
- Customer Lifetime Value (LTV)
- Churn rate
- Activation rate
- Analysis completion rate
- Retention

Revenue growth should never come at the expense of customer trust.

---

# AI Guidance

When suggesting product improvements:

- Protect the free experience.
- Encourage value before monetization.
- Avoid unnecessary paywalls.
- Recommend upgrades only when they genuinely benefit the user.
- Never propose pricing changes without updating this document.

---

# Related Documents

- pricing-strategy.md
- business-rules.md
- success-metrics.md
- future-roadmap.md

---

# Change History

## v1.0.0

- Defined the Freemium SaaS business model.
- Established Free, Pro, and future Enterprise plans.
- Documented subscription lifecycle, feature gating, and Stripe integration strategy.
