---
title: Next.js App Router Playbook
version: 1.0.0
owner: Chief Software Architect
status: Approved
category: Engineering Rules
priority: Critical
ai_read_required: true
---

# Next.js App Router Playbook

## Purpose

This playbook defines the official Next.js architecture for the project.

Every route, page, layout, API, middleware, and rendering strategy must follow these rules.

Consistency is mandatory.

---

# Framework Version

Framework

Next.js (Latest Stable)

Architecture

App Router

Language

TypeScript Strict Mode

Runtime

Node.js

Do not use Pages Router.

---

# Philosophy

The App Router is responsible only for routing, rendering, and composition.

Business logic must never live inside pages.

Pages should remain thin.

---

# Rendering Strategy

Choose rendering intentionally.

Default:

Server Components

Use Client Components only when required.

---

## Server Components

Use for:

- Static content
- Data fetching
- Layout composition
- SEO
- Metadata
- Dashboard shells

Avoid unnecessary `"use client"`.

---

## Client Components

Use only when required.

Examples:

- Forms
- Dropdowns
- Modals
- Tabs
- Tooltips
- Drag & Drop
- Animations
- Local state
- Browser APIs

Never make an entire page a Client Component if only one widget requires it.

---

# Data Fetching

Never fetch data directly inside UI components.

Preferred flow:

Component

↓

RTK Query

↓

API Route

↓

Controller

↓

Service

↓

Repository

↓

MongoDB

Never:

Component

↓

MongoDB

Never:

Component

↓

OpenRouter

Never:

Component

↓

Redis

---

# Route Handlers

API routes belong inside:

app/api/

Every route must delegate immediately.

Example:

Route

↓

Controller

↓

Service

↓

Repository

Route handlers should contain almost no business logic.

---

# Server Actions

Policy:

Not used for MVP.

Reason:

The application already follows a clean API architecture using RTK Query.

Server Actions may be evaluated in future versions but are not part of the approved architecture.

---

# Middleware

Use middleware only for:

Authentication

Authorization

Redirects

Security headers

Rate limiting (entry point)

Localization (future)

Never perform business logic inside middleware.

---

# Layouts

Use nested layouts to avoid duplication.

Examples:

Public Layout

Dashboard Layout

Admin Layout

Authentication Layout

Each layout owns:

Navigation

Sidebar

Header

Footer

Global UI

---

# Route Groups

Use route groups for organization.

Example:

```
(app)

(auth)

(dashboard)

(admin)
```

Route groups improve maintainability without affecting URLs.

---

# Loading UI

Every asynchronous route must provide:

loading.tsx

Prefer skeleton loaders over spinners.

Loading should communicate progress.

---

# Error Boundaries

Every major route should include:

error.tsx

Provide:

Friendly message

Retry action

Support link (future)

Never expose stack traces.

---

# Not Found

Provide:

not-found.tsx

Explain clearly.

Offer navigation back to the dashboard or homepage.

---

# Metadata

Every page must define metadata.

Include:

Title

Description

Open Graph

Twitter

Canonical URL

Robots

Never leave metadata blank.

---

# Dynamic Routes

Public routes should use UUIDs.

Example:

```
/report/rpt_8Ks91LpQa2
```

Never expose Mongo ObjectIds.

---

# Navigation

Use Next.js navigation APIs.

Avoid full page reloads.

Preserve application state where appropriate.

---

# Images

Always use:

next/image

Never use raw img tags unless absolutely necessary.

Optimize:

Responsive sizes

Lazy loading

Priority images only when required.

---

# Fonts

Use:

next/font

Avoid loading fonts from third-party CDNs.

---

# Environment Variables

Only expose variables with:

NEXT_PUBLIC_

Everything else remains server-side.

Never expose secrets.

---

# API Calls

Frontend communicates only with internal APIs.

Never call OpenRouter directly.

Never call Stripe directly.

Never call MongoDB directly.

---

# Caching Strategy

Browser Cache

↓

Next.js Cache

↓

Redis Cache

↓

MongoDB

Always invalidate cache intentionally.

Never cache AI responses indefinitely.

---

# Security

Always implement:

Secure headers

CSRF protection (where applicable)

CSP

Cookie security

Input validation

Output sanitization

Rate limiting

---

# File Organization

Every route contains only route-related files.

Example:

```
page.tsx

layout.tsx

loading.tsx

error.tsx

not-found.tsx

components/

hooks/
```

Business logic belongs elsewhere.

---

# Performance

Optimize:

Streaming

Code splitting

Lazy loading

Image optimization

Partial rendering

Bundle size

Avoid unnecessary client JavaScript.

---

# Accessibility

Every route must support:

Keyboard navigation

Focus management

Semantic HTML

Screen readers

Reduced motion

---

# SEO

Public pages must include:

Structured metadata

Canonical URLs

Open Graph

Twitter Cards

Proper heading hierarchy

Semantic HTML

Dashboard routes should be noindex.

---

# Authentication

Google OAuth

↓

NextAuth

↓

Protected Middleware

↓

API Authorization

Never trust client-side authentication.

---

# Logging

Log:

Authentication

Errors

AI requests

Analysis lifecycle

Webhook events

Do not log secrets.

---

# Forbidden Practices

Never:

Access MongoDB from components

Access Redis from components

Access OpenRouter from components

Place business logic in page.tsx

Turn every page into a Client Component

Expose secrets

Skip validation

Skip error boundaries

Use Pages Router

---

# Review Checklist

Verify:

✓ Correct rendering strategy

✓ Proper layouts

✓ Route groups used

✓ Metadata defined

✓ Loading UI exists

✓ Error boundary exists

✓ API architecture respected

✓ No business logic in pages

✓ Optimized images

✓ Accessibility

✓ SEO

---

# Definition of Done

A Next.js feature is complete only when:

The App Router architecture is respected.

Rendering strategy is intentional.

Business logic is separated.

SEO is complete.

Accessibility passes.

Performance is optimized.

Security is maintained.

The feature is production-ready.

---

# Final Principle

The App Router is the framework, not the application.

Keep routing concerns inside the App Router.

Keep business logic inside the backend architecture.

Maintain a clear separation between presentation, orchestration, and business logic at all times.
