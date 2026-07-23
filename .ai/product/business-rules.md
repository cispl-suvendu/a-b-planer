---
title: Business Rules
version: 1.0.0
owner: Founder
status: Approved
category: Product Documentation
priority: Critical
ai_read_required: true
last_updated: 2026-07-21
---

# Business Rules

## Purpose

This document defines the operational rules and logic of Landing Page A/B Planner.

These rules represent the expected behavior of the product.

All frontend behavior, backend services, database operations, and AI workflows must follow these rules.

---

# User Account Rules

## Account Creation

Users must authenticate before accessing the application.

Supported authentication:

- Google OAuth only

MVP does not support:

- Email/password
- Magic links
- Other social providers

---

## User Lifecycle

New user flow:

Visitor

↓

Google Login

↓

Account Created

↓

Free Plan Assigned

↓

Dashboard Access

---

## Default Subscription

Every new user receives:

```
subscriptionPlan = FREE
```

Default usage:

```
analysisLimit = 4
analysisUsed = 0
```

---

# Subscription Rules

## Subscription Plans

Supported internally:

- FREE
- PRO

Future:

- TEAM
- ENTERPRISE

---

## Free Plan Rules

Free users can:

- Create account
- Submit analysis
- View reports
- View history

Limit:

```
4 lifetime analyses
```

---

## Pro Plan Rules

Pro users:

- Have unlimited analyses
- Have unlimited history
- Can access future premium features

---

# Analysis Credit Rules

## Credit Consumption

One successful analysis consumes:

```
1 analysis credit
```

---

## Credit Deduction Timing

Credits are deducted only after:

```
Analysis Completed
+
Report Successfully Stored
```

---

## Failed Analysis

Credits are NOT consumed when failure occurs because of:

- Internal server error
- AI provider failure
- Screenshot failure
- Queue failure
- Temporary infrastructure issue

---

## Free Limit Check

Before creating analysis:

Backend must verify:

```
IF user.plan === FREE
AND user.analysisUsed >= 4

BLOCK REQUEST
```

Frontend checks are not trusted.

---

# Analysis Rules

## Supported Input

User submits:

```
Public URL
```

Supported:

- HTTP
- HTTPS

Invalid:

- Empty URL
- Private localhost URLs
- Invalid domains

---

# Analysis Scope

MVP analyzes:

Only the submitted page.

Examples:

Allowed:

```
example.com
example.com/pricing
example.com/product
```

Not supported:

```
Entire website crawling
```

---

# Analysis Processing Flow

Every analysis follows:

```
Created

↓

Queued

↓

Processing

↓

Extracting Data

↓

Capturing Screenshot

↓

Running Lighthouse

↓

AI Processing

↓

Generating Report

↓

Completed
```

---

# Analysis Status

Allowed states:

```
CREATED

QUEUED

PROCESSING

AI_GENERATING

COMPLETED

FAILED
```

No other states should exist.

---

# Retry Rules

Temporary failures may retry.

Examples:

- Network timeout
- AI provider timeout
- Screenshot failure

Maximum retry count:

```
3
```

After maximum retries:

```
FAILED
```

---

# Report Rules

## Report Creation

A report exists only when:

```
Analysis Completed
AND
AI Output Validated
```

---

## Report Ownership

Reports belong to:

```
User ID
```

Users can only access their own reports.

---

## Report Storage

Every report must store:

- Analysis ID
- User ID
- URL
- Screenshot metadata
- AI model
- Prompt version
- Generated experiments
- Created timestamp

---

# AI Output Rules

AI output must follow:

Structured format.

Required fields:

```
Current Problem

Hypothesis

Variant A

Variant B

Expected Impact

Confidence

Difficulty

Priority Score

Why

Implementation

Winner Metric
```

---

# Priority Score Rules

Formula:

```
Priority Score =
Impact × Confidence ÷ Difficulty
```

Example:

```
Impact = 8
Confidence = 7
Difficulty = 3

Priority = 18.6
```

---

# AI Model Rules

AI model selection is controlled by backend.

Users cannot select models.

Configuration:

Environment variables.

Example:

```
AI_PROVIDER=openrouter
AI_MODEL=model_name
```

---

# Prompt Version Rules

Every AI-generated report must store:

```
promptVersion
```

Example:

```
v1
v2
v3
```

Old reports must remain reproducible.

---

# Screenshot Rules

Screenshot lifecycle:

```
Capture

↓

Analyze

↓

Delete
```

Screenshots are temporary assets.

Permanent storage is not required for MVP.

---

# History Rules

## Free Users

Can access:

Their existing reports.

---

## Pro Users

Unlimited history.

---

# Admin Rules

Admin users can:

View:

- Users
- Reports
- Subscriptions
- AI usage
- Logs
- Errors

Admin access must be protected.

---

# Security Rules

Mandatory:

- Server-side authorization
- Input validation
- Rate limiting
- Secure environment variables
- No exposed secrets

---

# Logging Rules

Application logging:

Technology:

Pino

Levels:

```
ERROR
WARN
INFO
DEBUG
```

Important events:

- User login
- Analysis created
- Job failed
- AI error
- Payment event

---

# Cache Rules

Redis can be used for:

- Queue management
- Temporary analysis state
- Performance optimization

Redis must not become the primary database.

MongoDB remains the source of truth.

---

# Payment Rules

Stripe is the payment provider.

Environment variables:

```
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
STRIPE_PRICE_ID
```

Payment implementation must support:

- Monthly subscription
- Future yearly plans

---

# Data Ownership Rules

Users own:

- Their account
- Their reports
- Their analysis history

System owns:

- AI prompts
- System configuration
- Admin data

---

# AI Agent Rules

Before implementing any feature:

Agents must verify:

1. Does it follow these rules?
2. Does it affect subscription logic?
3. Does it change user permissions?
4. Does it require architecture approval?

---

# Related Documents

- feature-catalog.md
- mvp-scope.md
- pricing-strategy.md
- product-overview.md

---

# Change History

## v1.0.0

- Defined complete product behavior.
- Established subscription rules.
- Defined analysis lifecycle.
- Defined AI/report requirements.
