---
title: Feature Catalog
version: 1.0.0
owner: Founder
status: Approved
category: Product Documentation
priority: Critical
ai_read_required: true
last_updated: 2026-07-21
---

# Feature Catalog

## Purpose

This document defines all current and planned product features for Landing Page A/B Planner.

Each feature has a unique identifier that can be referenced by:

- Product planning
- Engineering tasks
- Sprint documents
- AI agents
- Architecture decisions

---

# Feature Status Definitions

## MVP

Required for initial product launch.

---

## Phase 2

Planned after MVP validation.

---

## Future

Long-term product vision.

---

# Feature Priority Definitions

## P0 — Critical

Required for product launch.

---

## P1 — Important

Required soon after MVP or before public launch.

---

## P2 — Enhancement

Improves experience but not required.

---

## P3 — Future

Long-term capability.

---

# Authentication Features

---

# AUTH-001 — Google Authentication

Status:

MVP

Priority:

P0

Description:

Allow users to create accounts and access the application using Google OAuth.

User Value:

Fast and frictionless onboarding.

Requirements:

- Google OAuth
- Secure sessions
- Protected routes
- User creation

Dependencies:

- Authentication system
- Database

---

# AUTH-002 — User Profile Management

Status:

MVP

Priority:

P1

Description:

Store and manage user information.

Data:

- Name
- Email
- Avatar
- Subscription status

---

# Dashboard Features

---

# DASH-001 — Main Dashboard

Status:

MVP

Priority:

P0

Description:

Central workspace where users manage analyses.

Includes:

- URL submission
- Usage information
- History list

---

# DASH-002 — Usage Tracking

Status:

MVP

Priority:

P0

Description:

Display remaining free analyses.

Rules:

Free:

4 lifetime analyses

Pro:

Unlimited

---

# DASH-003 — Analysis History

Status:

MVP

Priority:

P0

Description:

Allow users to view previous reports.

---

# Analysis Engine Features

---

# ANALYSIS-001 — URL Submission

Status:

MVP

Priority:

P0

Description:

Accept webpage URL from user.

Validation:

- Valid URL
- Public access
- Supported protocol

---

# ANALYSIS-002 — Web Page Extraction

Status:

MVP

Priority:

P0

Description:

Extract webpage information.

Collect:

- HTML
- CSS
- Metadata
- Structure

---

# ANALYSIS-003 — Screenshot Capture

Status:

MVP

Priority:

P0

Description:

Capture webpage screenshot for visual AI analysis.

Flow:

Capture

↓

Analyze

↓

Delete

---

# ANALYSIS-004 — Lighthouse Audit

Status:

MVP

Priority:

P0

Description:

Collect performance and accessibility information.

Metrics:

- Performance
- SEO
- Accessibility
- Best practices

---

# ANALYSIS-005 — Background Processing Queue

Status:

MVP

Priority:

P0

Description:

Run analysis asynchronously.

Technology:

- Redis
- BullMQ

States:

Queued

↓

Processing

↓

Completed

↓

Failed

---

# AI Features

---

# AI-001 — CRO Analysis Engine

Status:

MVP

Priority:

P0

Description:

Generate conversion optimization recommendations.

Provider:

OpenRouter

---

# AI-002 — Prompt Version Management

Status:

MVP

Priority:

P1

Description:

Store AI prompt versions with reports.

Purpose:

Maintain reproducibility.

Example:

v1

v2

v3

---

# AI-003 — Experiment Generation

Status:

MVP

Priority:

P0

Description:

Generate structured A/B test experiments.

Output:

- Problem
- Hypothesis
- Variant A
- Variant B
- Impact
- Confidence
- Difficulty
- Implementation

---

# Report Features

---

# REPORT-001 — Report Storage

Status:

MVP

Priority:

P0

Description:

Store generated reports permanently.

---

# REPORT-002 — Report Viewer

Status:

MVP

Priority:

P0

Description:

Professional report presentation.

---

# REPORT-003 — Priority Ranking

Status:

MVP

Priority:

P0

Description:

Rank experiments using:

Priority Score = Impact × Confidence ÷ Difficulty

---

# REPORT-004 — PDF Export

Status:

Phase 2

Priority:

P2

Description:

Export professional CRO reports.

---

# Billing Features

---

# BILLING-001 — Subscription System

Status:

MVP Architecture

Priority:

P1

Description:

Prepare backend for Stripe subscriptions.

---

# BILLING-002 — Stripe Checkout

Status:

Phase 2

Priority:

P1

Description:

Enable paid subscriptions.

---

# BILLING-003 — Subscription Webhooks

Status:

Phase 2

Priority:

P1

Description:

Synchronize Stripe events.

---

# Admin Features

---

# ADMIN-001 — Admin Dashboard

Status:

MVP

Priority:

P1

Description:

Internal management dashboard.

Includes:

- Users
- Reports
- Subscriptions
- AI usage

---

# ADMIN-002 — System Monitoring

Status:

MVP

Priority:

P1

Description:

Monitor:

- Errors
- Failed jobs
- AI failures
- Logs

---

# Future Product Features

---

# FUTURE-001 — Competitor Analysis

Status:

Future

Description:

Analyze competitor landing pages.

---

# FUTURE-002 — Continuous Monitoring

Status:

Future

Description:

Automatically monitor pages over time.

---

# FUTURE-003 — Website Crawling

Status:

Future

Description:

Analyze multiple pages automatically.

---

# FUTURE-004 — Team Collaboration

Status:

Future

Description:

Shared workspaces and permissions.

---

# FUTURE-005 — API Platform

Status:

Future

Description:

Allow external integrations.

---

# FUTURE-006 — Browser Extension

Status:

Future

Description:

Analyze pages directly from browser.

---

# FUTURE-007 — AI Copy Generator

Status:

Future

Description:

Generate improved landing page copy.

---

# FUTURE-008 — Experiment Tracking

Status:

Future

Description:

Track A/B test results after implementation.

---

# Feature Decision Rules

Before adding a new feature:

Evaluate:

1. Customer value
2. Alignment with vision
3. MVP impact
4. Engineering complexity
5. Maintenance cost
6. Revenue potential

---

# AI Agent Rules

AI agents must:

- Reference existing feature IDs.
- Avoid creating duplicate features.
- Respect MVP boundaries.
- Request approval before adding major features.

---

# Related Documents

- mvp-scope.md
- business-rules.md
- future-roadmap.md
- success-metrics.md

---

# Change History

## v1.0.0

- Created complete feature inventory.
- Defined feature IDs.
- Added MVP and future capabilities.
