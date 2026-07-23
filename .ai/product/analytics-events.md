---
title: Analytics Events
version: 1.0.0
owner: Founder
status: Approved
category: Product Documentation
priority: Critical
ai_read_required: true
last_updated: 2026-07-21
---

# Analytics Events

## Purpose

This document defines the product analytics tracking system for Landing Page A/B Planner.

It establishes:

- Event naming conventions
- Required tracking events
- Event properties
- User behavior measurement
- Conversion funnel tracking

All product analytics implementations must follow this document.

---

# Analytics Goals

Analytics should help answer:

## Product Questions

- Are users reaching value?
- Where do users drop off?
- Which features are used most?
- Are reports useful?

---

## Business Questions

- How many users convert?
- Why do users upgrade?
- What drives retention?

---

## AI Questions

- How often does AI fail?
- How expensive is each report?
- Which prompts perform better?

---

# Event Naming Convention

Format:

```
object_action
```

Examples:

```
user_signed_up

analysis_created

report_viewed

subscription_upgraded
```

Rules:

- Use lowercase.
- Use snake_case.
- Use past tense.
- Events represent completed actions.

---

# User Events

---

# user_signed_up

Triggered:

When a new account is created.

Properties:

```
{
 user_id,
 provider,
 timestamp
}
```

---

# user_logged_in

Triggered:

Successful authentication.

Properties:

```
{
 user_id,
 provider
}
```

---

# user_logged_out

Triggered:

User ends session.

---

# User Onboarding Events

---

# onboarding_started

Triggered:

User enters onboarding flow.

---

# onboarding_completed

Triggered:

User reaches dashboard.

Properties:

```
{
 user_id,
 completion_time
}
```

---

# Dashboard Events

---

# dashboard_viewed

Triggered:

User opens dashboard.

Properties:

```
{
 user_id,
 plan
}
```

---

# Analysis Events

---

# analysis_started

Triggered:

User submits URL.

Properties:

```
{
 user_id,
 url_domain,
 plan
}
```

---

# analysis_created

Triggered:

Analysis record successfully created.

Properties:

```
{
 analysis_id,
 user_id,
 url_domain
}
```

---

# analysis_queued

Triggered:

Background job added.

Properties:

```
{
 analysis_id,
 queue_name
}
```

---

# analysis_processing_started

Triggered:

Worker begins processing.

Properties:

```
{
 analysis_id
}
```

---

# analysis_completed

Triggered:

Report successfully generated.

Properties:

```
{
 analysis_id,
 user_id,
 processing_time,
 ai_model,
 prompt_version
}
```

---

# analysis_failed

Triggered:

Analysis fails.

Properties:

```
{
 analysis_id,
 error_type,
 error_message,
 retry_count
}
```

---

# Report Events

---

# report_viewed

Triggered:

User opens report.

Properties:

```
{
 report_id,
 analysis_id,
 user_id
}
```

---

# experiment_viewed

Triggered:

User expands an experiment.

Properties:

```
{
 report_id,
 experiment_id,
 priority_score
}
```

---

# report_completed

Triggered:

User reaches end of report.

Measures engagement.

---

# Usage Events

---

# free_limit_reached

Triggered:

User consumes all free analyses.

Properties:

```
{
 user_id,
 total_analysis_count
}
```

---

# upgrade_prompt_viewed

Triggered:

Upgrade modal/page displayed.

Properties:

```
{
 user_id,
 trigger_source
}
```

Example:

```
analysis_limit
premium_feature
```

---

# Billing Events

---

# checkout_started

Triggered:

User starts Stripe checkout.

Properties:

```
{
 user_id,
 plan
}
```

---

# subscription_started

Triggered:

Payment successfully completed.

Properties:

```
{
 user_id,
 plan,
 billing_period
}
```

---

# subscription_cancelled

Triggered:

User cancels subscription.

Properties:

```
{
 user_id,
 reason
}
```

---

# subscription_expired

Triggered:

Subscription ends.

---

# AI Events

---

# ai_request_started

Triggered:

AI processing begins.

Properties:

```
{
 analysis_id,
 provider,
 model
}
```

---

# ai_request_completed

Triggered:

AI returns valid response.

Properties:

```
{
 analysis_id,
 tokens_used,
 cost_estimate,
 model,
 prompt_version
}
```

---

# ai_request_failed

Triggered:

AI failure.

Properties:

```
{
 analysis_id,
 provider,
 error_type
}
```

---

# Admin Events

---

# admin_login

Triggered:

Administrator authentication.

---

# admin_report_viewed

Triggered:

Admin views report.

---

# Performance Events

---

# page_loaded

Triggered:

Important page loads.

Properties:

```
{
 page_name,
 load_time
}
```

---

# api_error

Triggered:

Frontend receives API error.

Properties:

```
{
 endpoint,
 status_code,
 error_type
}
```

---

# Funnel Tracking

Primary funnel:

```
Landing Page Viewed

↓

Signup Started

↓

Signup Completed

↓

Dashboard Viewed

↓

Analysis Started

↓

Analysis Completed

↓

Report Viewed

↓

Upgrade Viewed

↓

Subscription Started
```

---

# Activation Definition

A user is activated when:

```
Signup Completed

+

First Analysis Completed

+

Report Viewed
```

---

# Retention Definition

A returning user:

Uses the product again after first report generation.

---

# Analytics Privacy Rules

Never track:

- Passwords
- API keys
- Payment details
- Sensitive user data

Track only:

- Product usage
- Performance
- Business events

---

# Implementation Rules

Analytics events should be:

- Centralized
- Typed
- Documented
- Consistent

Avoid:

- Random event names
- Duplicate tracking
- Frontend-only business events

Critical business events should be emitted from backend.

---

# Future Analytics

Future tracking:

- Experiment implementation
- A/B test results
- Team collaboration
- Competitor analysis
- AI recommendation feedback

---

# AI Guidance

When building features:

AI agents should ask:

"How will we measure success?"

Every major feature should have:

- Success event
- Usage metric
- Business impact metric

---

# Related Documents

- success-metrics.md
- business-rules.md
- feature-catalog.md
- product-overview.md

---

# Change History

## v1.0.0

- Defined analytics architecture.
- Created product event taxonomy.
- Added user, AI, billing, and system events.
