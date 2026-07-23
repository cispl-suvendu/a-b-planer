---
title: Sprint 04 - Dashboard Application Shell
version: 1.0.0
owner: Frontend Engineering Lead
status: Planned
category: Sprint Planning
priority: Critical
ai_read_required: true
last_updated: 2026-07-21
---

# Sprint 04 — Dashboard Application Shell

## Sprint Goal

Build the main authenticated product workspace where users manage landing page analyses, view history, monitor usage, and access reports.

The dashboard should provide a professional SaaS experience from the first login.

---

# Sprint Objectives

By the end of this sprint:

- Authenticated users can access dashboard.
- Dashboard layout is implemented.
- Users can submit analysis requests.
- Usage limits are visible.
- Analysis history is displayed.
- Loading and empty states exist.
- Dashboard architecture supports future features.

---

# User Experience Goal

The dashboard should answer three questions immediately:

## 1. What can I do?

Start a new landing page analysis.

---

## 2. What have I done?

View previous reports.

---

## 3. What should I do next?

Take action based on AI recommendations.

---

# Dashboard Information Architecture

```
Dashboard

├── Header
│
├── Usage Overview
│
├── New Analysis
│
├── Analysis History
│
└── Upgrade Section
```

---

# Application Layout

Main structure:

```
App Shell

├── Sidebar
│
├── Header
│
└── Main Content
```

---

# Header Requirements

Contains:

- Product logo
- User avatar
- User menu
- Subscription status

---

# Sidebar Requirements

MVP:

Navigation:

```
Dashboard

Reports

Settings
```

Future:

```
Teams

Monitoring

Integrations
```

---

# Dashboard Home

Route:

```
/dashboard
```

---

# Section 1 — Welcome Area

Purpose:

Introduce the product.

Example:

"Find your next highest-impact landing page experiments."

Contains:

- User greeting
- Primary CTA
- Usage information

---

# Section 2 — Analysis Creation

Main dashboard action.

Component:

```
AnalysisInputCard
```

Contains:

- URL input
- Analyze button
- Validation state

---

# URL Input Rules

Accept:

```
https://example.com
```

Validate:

- Required
- Valid URL format
- HTTPS recommended

---

# User States

## Free User

Display:

```
3 of 4 analyses remaining
```

---

## Limit Reached

Display:

Upgrade message.

Example:

"You have used your free analyses. Upgrade to continue."

---

## Pro User

Display:

Unlimited access.

---

# Section 3 — Analysis History

Component:

```
AnalysisHistoryList
```

Displays:

- URL
- Status
- Created date
- Report availability

---

# History States

## Empty State

Example:

"No analyses yet"

CTA:

"Analyze your first page"

---

## Loading State

Use:

Skeleton loaders.

---

## Error State

Display:

- Friendly message
- Retry action

---

# Analysis Status UI

Support:

```
Queued

Processing

Generating Report

Completed

Failed
```

---

# Report Navigation

Completed analyses link to:

```
/report/{reportId}
```

Public ID format:

```
rpt_xxxxx
```

---

# Frontend Architecture

Feature structure:

```
features/

dashboard/

├── components/

├── hooks/

├── api/

├── types/

└── utils/
```

---

# Redux State

Dashboard should use:

Redux Toolkit

Store:

- User information
- UI preferences

---

# RTK Query APIs

Create:

```
dashboardApi
```

Handles:

- Dashboard data
- Analysis history
- Usage information

---

# Backend Requirements

Create APIs:

---

## Dashboard Summary

```
GET /api/dashboard
```

Returns:

```json
{
  "user": {},
  "usage": {},
  "recentAnalyses": []
}
```

---

## Analysis History

```
GET /api/analyses
```

Supports:

- Pagination
- Sorting

---

# Backend Services

Required:

```
DashboardService

AnalysisService
```

---

# Pagination Rules

History must support:

Future scalability.

Example:

```
page=1

limit=20
```

Do not load unlimited records.

---

# Performance Requirements

Dashboard should:

- Load quickly
- Avoid unnecessary API calls
- Cache stable data

RTK Query caching should be used.

---

# Responsive Requirements

Mobile:

375px

Tablet:

768px

Desktop:

1440px

---

# UI/UX Requirements

The dashboard should feel:

- Premium
- Clean
- Intelligent
- Focused

Avoid:

- Complex navigation
- Too many cards
- Information overload

---

# Analytics Events

Track:

```
dashboard_viewed

analysis_started

upgrade_prompt_viewed
```

---

# Testing Requirements

## Frontend

Test:

- Dashboard rendering
- Empty states
- Loading states
- Error states
- Responsive layout

---

## Backend

Test:

- Dashboard API
- Permission checks
- Pagination

---

# AI Agent Responsibilities

## UI/UX Director Agent

Owns:

- Dashboard experience
- Visual hierarchy
- Interaction quality

---

## Feature Developer Agent

Implements:

- Components
- APIs
- State management

---

## Code Reviewer Agent

Checks:

- Architecture
- Performance
- Accessibility
- Responsive behavior

---

# Acceptance Criteria

Sprint complete when:

✅ Dashboard accessible after login

✅ User information displayed

✅ Analysis input exists

✅ Usage displayed

✅ History list works

✅ Empty/loading/error states exist

✅ Responsive design works

---

# Definition of Done

The dashboard is production-ready when:

- Users understand next action immediately.
- Components follow design system.
- API usage follows RTK Query.
- Code follows architecture rules.

---

# Dependencies

Requires:

```
01-foundation-architecture.md

02-authentication-user-system.md

03-design-system-ui-foundation.md
```

---

# Next Sprint

```
05-url-analysis-engine.md
```

---

# Change History

## v1.0.0

- Created dashboard application sprint.
- Defined authenticated workspace experience.
