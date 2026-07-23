---
title: Sprint 09 - Subscription Billing System
version: 1.0.0
owner: Backend Engineering Lead
status: Planned
category: Sprint Planning
priority: Critical
ai_read_required: true
last_updated: 2026-07-21
---

# Sprint 09 — Subscription Billing System

## Sprint Goal

Build a scalable subscription and usage management system supporting Free and Pro plans.

The system must support Stripe integration while allowing payment configuration to be added later.

---

# Sprint Objectives

By the end of this sprint:

- Free plan rules are implemented.
- Usage limits are enforced.
- Pro subscription architecture exists.
- Stripe integration foundation exists.
- Subscription status is tracked.
- Feature access can be controlled.

---

# Pricing Model

## Free Plan

Purpose:

Allow users to experience product value.

Includes:

```
Google Login Required

4 Lifetime Analyses

Basic Reports
```

---

## Pro Plan

Purpose:

Unlimited usage.

Includes:

```
Unlimited Analyses

Full Report History

Future Premium Features
```

---

# Subscription Architecture

Plans:

```
FREE

PRO
```

Future:

```
TEAM

ENTERPRISE
```

---

# User Subscription Lifecycle

## New User

```
Google Signup

↓

Create User

↓

Assign FREE Plan

↓

4 Analysis Credits
```

---

## Free User Upgrade

```
Free User

↓

Clicks Upgrade

↓

Stripe Checkout

↓

Payment Complete

↓

Webhook Received

↓

Upgrade PRO

```

---

# Database Design

## Subscription Collection

```
subscriptions
```

Fields:

```ts
{
id:string,

userId:string,

plan:string,

status:string,

stripeCustomerId?:string,

stripeSubscriptionId?:string,

currentPeriodStart?:Date,

currentPeriodEnd?:Date,

createdAt:Date,

updatedAt:Date
}
```

---

# User Model Update

Add:

```ts
subscriptionId: string;
```

---

# Usage Tracking

Collection:

```
usage_records
```

Purpose:

Track product consumption.

---

Fields:

```ts
{
id:string,

userId:string,

action:string,

count:number,

createdAt:Date
}
```

---

# Analysis Limit Rules

Free users:

```
Maximum = 4 lifetime analyses
```

Logic:

Before creating analysis:

```
Check User Plan

↓

If FREE

Check Usage

↓

Allow or Reject
```

---

# Usage Service

Create:

```
UsageService
```

Responsibilities:

- Check limits
- Increment usage
- Track consumption

---

# Subscription Service

Create:

```
SubscriptionService
```

Responsibilities:

- Create subscriptions
- Update plans
- Validate status
- Manage access

---

# Feature Access System

Create:

```
FeatureGateService
```

Purpose:

Centralize permission logic.

Example:

```ts
canCreateAnalysis(user);

canAccessUnlimitedReports(user);
```

---

# Stripe Architecture

Payment provider:

```
Stripe
```

---

# Environment Configuration

Required:

```
STRIPE_SECRET_KEY=

STRIPE_WEBHOOK_SECRET=

STRIPE_PRICE_ID=
```

---

# Stripe Integration Layer

Create:

```
StripeService
```

Responsibilities:

- Create checkout sessions
- Validate webhooks
- Manage subscriptions

---

# Checkout Flow

```
User clicks Upgrade

↓

Frontend requests checkout

↓

Backend creates Stripe session

↓

User redirected to Stripe

↓

Payment completed

↓

Webhook received

↓

Subscription updated
```

---

# Webhook System

Endpoint:

```
POST /api/webhooks/stripe
```

Handle:

Events:

```
checkout.session.completed

customer.subscription.created

customer.subscription.updated

customer.subscription.deleted
```

---

# Security Requirements

Never trust frontend subscription state.

Backend must verify:

- Stripe events
- User permissions
- Subscription status

---

# API Requirements

---

## Get Current Subscription

```
GET /api/subscription
```

Returns:

```json
{
  "plan": "FREE",
  "status": "ACTIVE"
}
```

---

## Create Checkout Session

```
POST /api/subscription/checkout
```

---

## Upgrade Status

```
GET /api/subscription/status
```

---

# Frontend Requirements

Create:

```
PricingCard

UpgradeModal

SubscriptionBadge

UsageIndicator
```

---

# Dashboard Integration

Show:

Free user:

```
3/4 analyses remaining
```

Pro user:

```
Unlimited analyses
```

---

# Pricing Page Integration

The pricing page should support:

Current:

```
Free

Pro Monthly
```

Future:

```
Annual

Team

Enterprise
```

---

# Analytics Events

Track:

```
upgrade_prompt_viewed

checkout_started

subscription_started

subscription_cancelled
```

---

# Error Handling

Handle:

- Payment failure
- Webhook failure
- Subscription mismatch
- Expired subscription

---

# Testing Requirements

## Backend Tests

Test:

- Free limits
- Pro access
- Subscription updates
- Webhooks

---

## Security Tests

Verify:

- Users cannot fake Pro status.
- Webhooks are verified.
- Protected features are secured.

---

# AI Agent Responsibilities

## Architect Agent

Reviews:

- Billing architecture
- Security model
- Data ownership

---

## Backend Developer Agent

Builds:

- Services
- Stripe integration
- Feature gates

---

## Code Reviewer Agent

Checks:

- Security
- Payment correctness
- Scalability

---

# Acceptance Criteria

Sprint complete when:

✅ Free plan works

✅ 4 analysis limit enforced

✅ Upgrade flow exists

✅ Stripe architecture ready

✅ ENV configuration exists

✅ Subscription status tracked

✅ Feature gates work

---

# Definition of Done

Billing system is complete when:

- Users have controlled access.
- Stripe can be connected without architectural changes.
- Subscription state is reliable.
- Payment security rules are followed.

---

# Dependencies

Requires:

```
02-authentication-user-system.md

04-dashboard-application-shell.md
```

---

# Next Sprint

```
10-admin-dashboard.md
```

---

# Change History

## v1.0.0

- Created subscription architecture.
- Defined Free and Pro plans.
- Added Stripe-ready billing system.
