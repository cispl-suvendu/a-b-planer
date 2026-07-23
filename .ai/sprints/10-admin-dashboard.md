---
title: Sprint 10 - Admin Dashboard
version: 1.0.0
owner: Backend Engineering Lead
status: Planned
category: Sprint Planning
priority: High
ai_read_required: true
last_updated: 2026-07-21
---

# Sprint 10 — Admin Dashboard

## Sprint Goal

Build a secure internal administration dashboard for monitoring and managing the Landing Page A/B Planner platform.

The admin dashboard provides operational visibility into:

- Users
- Subscriptions
- Analyses
- AI usage
- Errors
- System health

---

# Sprint Objectives

By the end of this sprint:

- Admin authentication exists.
- Admin routes are protected.
- User management works.
- Subscription visibility exists.
- Analysis monitoring exists.
- AI usage metrics are available.
- Error logs can be reviewed.

---

# Admin Philosophy

The admin panel is not a customer-facing feature.

It is an internal operations tool.

Priorities:

- Visibility
- Debugging
- Monitoring
- Decision making

---

# Admin Access

Route:

```
/admin
```

Only:

```
ADMIN
```

role users can access.

---

# Security Requirements

Mandatory:

- Role-based access control
- Protected routes
- Server-side permission checks
- Audit logging

Never rely only on frontend protection.

---

# Admin Architecture

Structure:

```
Admin UI

↓

Admin API

↓

Admin Services

↓

Repositories

↓

Database
```

---

# Database Requirements

Admin uses existing data:

Collections:

```
users

subscriptions

analyses

reports

ai_generations

logs
```

---

# Admin Dashboard Home

Route:

```
/admin/dashboard
```

---

# Dashboard Metrics

Display:

## User Metrics

- Total users
- New users
- Active users

---

## Subscription Metrics

- Free users
- Pro users
- Conversion rate

---

## Analysis Metrics

- Total analyses
- Completed analyses
- Failed analyses

---

## AI Metrics

- AI requests
- Token usage
- Estimated cost
- Failed generations

---

# Admin Navigation

Structure:

```
Admin Dashboard

├── Overview

├── Users

├── Subscriptions

├── Analyses

├── Reports

├── AI Usage

├── Logs

└── Settings
```

---

# User Management

Route:

```
/admin/users
```

Features:

View:

- User list
- Email
- Plan
- Created date
- Analysis count

---

Actions:

Future:

- Disable user
- Change plan
- View activity

---

# Subscription Management

Route:

```
/admin/subscriptions
```

Display:

- User
- Plan
- Status
- Billing period

---

# Analysis Monitoring

Route:

```
/admin/analyses
```

Display:

- URL
- User
- Status
- Processing time
- Created date

---

# Failed Analysis View

Important for debugging.

Display:

- Error type
- Error message
- Retry count
- Timestamp

---

# AI Usage Dashboard

Route:

```
/admin/ai
```

Display:

- Model usage
- Token consumption
- Cost estimation
- Prompt versions

---

# Prompt Version Monitoring

Display:

Example:

```
v1

Reports Generated: 500

Average Cost: $0.03
```

---

# Logs System

Route:

```
/admin/logs
```

Display:

Application logs:

- Errors
- Warnings
- Important events

---

# Logging Architecture

Uses:

```
Pino
```

Future:

```
Sentry
```

---

# Backend Services

Create:

```
AdminService

AdminAnalyticsService

AdminUserService
```

---

# API Endpoints

---

## Admin Dashboard Stats

```
GET /api/admin/dashboard
```

---

## Users

```
GET /api/admin/users
```

---

## Analyses

```
GET /api/admin/analyses
```

---

## AI Usage

```
GET /api/admin/ai-usage
```

---

## Logs

```
GET /api/admin/logs
```

---

# Frontend Architecture

Feature:

```
features/

admin/

├── components/

├── api/

├── hooks/

├── types/

└── utils/
```

---

# UI Requirements

Admin UI should be:

- Functional
- Clean
- Data-focused

Not:

- Marketing-style

---

# Components Required

Create:

```
AdminMetricCard

DataTable

FilterBar

StatusBadge

ChartCard

LogViewer
```

---

# Analytics

Admin events:

```
admin_login

admin_report_viewed
```

---

# Testing Requirements

## Backend

Test:

- Admin permissions
- API security
- Data aggregation

---

## Frontend

Test:

- Protected routes
- Data rendering
- Permission states

---

# AI Agent Responsibilities

## Architect Agent

Controls:

- Permission model
- Admin boundaries

---

## Developer Agent

Builds:

- Admin APIs
- Admin UI

---

## Code Reviewer Agent

Checks:

- Security
- Data exposure
- Authorization

---

# Acceptance Criteria

Sprint complete when:

✅ Admin login works

✅ Admin routes protected

✅ Metrics dashboard exists

✅ Users visible

✅ Subscription data visible

✅ AI usage visible

✅ Logs visible

---

# Definition of Done

Admin system is complete when:

- Founder can monitor the SaaS.
- Problems can be diagnosed.
- AI costs can be controlled.
- User activity is measurable.

---

# Dependencies

Requires:

```
02-authentication-user-system.md

07-ai-analysis-engine.md

09-subscription-billing-system.md
```

---

# Next Sprint

```
11-quality-security.md
```

---

# Change History

## v1.0.0

- Created admin dashboard sprint.
- Defined internal monitoring requirements.
