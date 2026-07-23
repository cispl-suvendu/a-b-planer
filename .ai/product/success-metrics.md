---
title: Success Metrics
version: 1.0.0
owner: Founder
status: Approved
category: Product Documentation
priority: Critical
ai_read_required: true
last_updated: 2026-07-21
---

# Success Metrics

## Purpose

This document defines the metrics used to evaluate the success, health, and growth of Landing Page A/B Planner.

Metrics should guide decisions, not create vanity goals.

The product should optimize for customer value first, followed by business growth.

---

# North Star Metric

## Successful Experiment Insight Generated

Definition:

The number of completed AI analysis reports where users receive a structured, actionable A/B testing recommendation.

Formula:

```
Completed Valid Reports
=
Analysis Completed
+
AI Output Generated
+
Report Saved
```

Why this matters:

The core value of the product is helping users discover what to test next.

---

# Product Activation Metrics

## First Analysis Completion Rate

Measures:

How many new users complete their first analysis.

Formula:

```
Users Completing First Analysis
/
Total New Users
```

Target:

High priority metric.

A user who completes analysis understands the product value.

---

## Time To First Value (TTFV)

Measures:

Time between signup and receiving the first report.

Goal:

Reduce friction.

Target:

Minutes, not hours.

---

## Report View Rate

Measures:

Users who open and review generated reports.

Formula:

```
Reports Viewed
/
Reports Generated
```

---

## Experiment Engagement Rate

Measures:

Users interacting with recommendations.

Examples:

- Opening experiments
- Expanding details
- Reviewing variants

---

# User Growth Metrics

## New Signups

Measures:

Number of new registered users.

Track:

- Daily
- Weekly
- Monthly

---

## Signup Conversion Rate

Formula:

```
Signups
/
Landing Page Visitors
```

Measures marketing effectiveness.

---

## Organic Growth

Track:

- SEO traffic
- Referral traffic
- Direct traffic

---

# Free Plan Metrics

## Free Activation Rate

Measures:

Percentage of free users who complete at least one analysis.

---

## Free Usage Completion

Measures:

How many users consume their free allowance.

Example:

Users completing:

- 1 analysis
- 2 analyses
- 3 analyses
- 4 analyses

---

## Upgrade Trigger Rate

Measures:

Users reaching the free limit.

---

# Monetization Metrics

## Free To Pro Conversion Rate

Formula:

```
Paid Users
/
Free Users
```

Primary SaaS conversion metric.

---

## Monthly Recurring Revenue (MRR)

Measures:

Recurring subscription revenue.

---

## Average Revenue Per User (ARPU)

Formula:

```
MRR
/
Total Paying Customers
```

---

## Customer Lifetime Value (LTV)

Measures:

Expected revenue from a customer.

---

## Churn Rate

Measures:

Percentage of customers cancelling subscriptions.

Formula:

```
Cancelled Customers
/
Total Customers
```

---

# Retention Metrics

## Monthly Active Users (MAU)

Measures:

Users actively using the product monthly.

---

## Returning User Rate

Measures:

Users who return after first analysis.

---

## Report Repeat Usage

Measures:

Users generating multiple reports.

Strong indicator of product value.

---

# AI Quality Metrics

## AI Report Success Rate

Measures:

Percentage of successful AI generations.

Formula:

```
Valid AI Reports
/
Total AI Requests
```

---

## AI Failure Rate

Track:

- Provider errors
- Invalid output
- Timeout failures

---

## AI Cost Per Report

Measures:

Average AI cost.

Formula:

```
AI Token Cost
/
Generated Reports
```

---

## Recommendation Quality

Future measurement:

Users rate recommendations:

- Helpful
- Not helpful

---

# Performance Metrics

## Analysis Completion Time

Measures:

Time from URL submission to report completion.

Track:

- Average
- Median
- Worst case

---

## Queue Processing Time

Measures:

Background job efficiency.

---

## API Response Time

Track:

Important endpoints:

- Authentication
- Dashboard
- Report loading
- Analysis creation

---

# Reliability Metrics

## System Error Rate

Track:

- API failures
- Worker failures
- Database errors

---

## Job Failure Rate

Measures:

Background processing reliability.

---

## Uptime

Goal:

Production SaaS reliability.

---

# Security Metrics

Track:

- Failed authentication attempts
- Suspicious requests
- Rate limit violations

---

# Admin Dashboard Metrics

The admin dashboard should display:

## Users

- Total users
- Active users
- New users

---

## Subscription

- Free users
- Pro users
- MRR
- Churn

---

## Analysis

- Total analyses
- Completed reports
- Failed reports
- Average completion time

---

## AI

- Models used
- Token consumption
- Cost estimates
- Error rates

---

# Metric Prioritization

Metrics are grouped by importance.

---

## Tier 1 — Product Health

Highest priority:

- Successful reports generated
- First analysis completion
- Time to first value
- Returning users

---

## Tier 2 — Business Growth

- Free to Pro conversion
- MRR
- Churn
- LTV

---

## Tier 3 — Optimization

- AI costs
- Performance
- Feature engagement

---

# Metric Rules

Metrics must:

- Connect to user value.
- Support decision making.
- Avoid vanity measurements.
- Be measurable.
- Be actionable.

---

# AI Guidance

When suggesting product improvements:

Prioritize changes that improve:

1. User activation
2. Report quality
3. Retention
4. Conversion
5. Reliability

Do not optimize only for usage volume.

---

# Related Documents

- analytics-events.md
- business-model.md
- feature-catalog.md
- product-overview.md

---

# Change History

## v1.0.0

- Defined product success measurements.
- Established North Star Metric.
- Added product, business, AI, and reliability metrics.
