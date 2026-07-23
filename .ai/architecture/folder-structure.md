---
title: Project Folder Architecture
version: 1.0.0
owner: Chief Software Architect
status: Approved
category: Architecture
priority: Critical
ai_read_required: true
---

# Project Folder Architecture

## Purpose

This document defines the official folder structure for the project.

The goal is to create a modular, scalable, enterprise-grade architecture that can comfortably grow to support hundreds of thousands of users and dozens of engineers.

---

# Architecture Philosophy

The project follows:

- Feature-first organization
- Layered backend architecture
- Shared design system
- Domain-driven separation
- Clear ownership
- Low coupling
- High cohesion

Every file must have a clear home.

---

# Root Structure

```
landing-page-ab-planner/

.ai/
docs/

public/

src/

tests/

scripts/

.github/

.env.example

package.json

README.md
```

---

# Source Structure

```
src/

app/
components/
features/
lib/
services/
store/
providers/
hooks/
types/
config/
constants/
styles/
middleware/
```

Every folder has one responsibility.

---

# app/

Owns routing only.

Contains:

```
app/

(auth)/
(dashboard)/
(admin)/
(marketing)/

api/

layout.tsx
page.tsx
loading.tsx
error.tsx
not-found.tsx
```

No business logic.

No database access.

No AI calls.

---

# components/

Shared UI only.

Reusable presentation components.

Examples:

```
components/

button/

card/

modal/

dialog/

table/

badge/

tooltip/

empty-state/

loading/

logo/

icons/
```

No feature-specific logic.

---

# features/

The heart of the application.

Every business capability owns its implementation.

Example:

```
features/

analysis/

history/

dashboard/

billing/

reports/

authentication/

admin/

landing/

settings/
```

Each feature owns its complete implementation.

---

# Feature Structure

Example:

```
analysis/

components/

hooks/

services/

api/

types/

schemas/

constants/

utils/

selectors/

index.ts
```

A feature should be self-contained.

---

# lib/

Infrastructure layer.

Examples:

```
lib/

mongodb/

redis/

bullmq/

openrouter/

logger/

stripe/

auth/

uuid/

cache/
```

No business logic.

Only infrastructure integrations.

---

# services/

Cross-feature business services.

Examples:

```
services/

analysis-engine/

usage/

subscription/

notification/

audit/
```

Use only when logic spans multiple features.

---

# store/

Redux Toolkit.

```
store/

index.ts

rootReducer.ts

middleware.ts

api/

slices/
```

RTK Query APIs live here.

---

# providers/

Global React providers.

Examples:

```
providers/

redux-provider.tsx

theme-provider.tsx

auth-provider.tsx
```

---

# hooks/

Shared reusable hooks.

Only hooks used by multiple features.

Example:

```
useDebounce

useMediaQuery

useIsMounted

usePrevious
```

Feature hooks stay inside the feature.

---

# types/

Global shared types only.

Never become a dumping ground.

Examples:

```
api.types.ts

pagination.types.ts

common.types.ts
```

---

# config/

Application configuration.

Examples:

```
app.config.ts

ai.config.ts

stripe.config.ts

redis.config.ts

features.config.ts
```

---

# constants/

Shared constants.

Examples:

```
routes.ts

roles.ts

plans.ts

limits.ts

```

No business logic.

---

# styles/

Global styles.

```
globals.css

tokens.css

animations.css

utilities.css
```

Tailwind remains the primary styling solution.

---

# middleware/

Application middleware.

Examples:

```
auth

rate-limit

request-id

```

---

# Backend Layers

Every request follows:

```
Route

↓

Controller

↓

Service

↓

Repository

↓

MongoDB
```

Never bypass layers.

---

# AI Layers

```
Controller

↓

Analysis Service

↓

Prompt Builder

↓

AI Gateway

↓

OpenRouter

↓

Validator

↓

Persistence
```

No controller may call OpenRouter directly.

---

# Shared Ownership Rules

Shared folders must only contain code reused by multiple features.

Never move feature code to shared "just in case."

Promote only after a second real use case.

---

# Import Rules

Allowed:

Feature → Shared

Feature → Infrastructure

Feature → Config

Not Allowed:

Feature A → Feature B internals

Component → Database

Component → Redis

Component → OpenRouter

Component → Stripe

---

# Naming Rules

Folders:

kebab-case

Files:

kebab-case

Components:

PascalCase

Hooks:

camelCase

Constants:

UPPER_SNAKE_CASE

Interfaces:

PascalCase

Types:

PascalCase

---

# Ownership Matrix

| Folder     | Owner          |
| ---------- | -------------- |
| app        | Next.js        |
| components | Frontend       |
| features   | Product Teams  |
| lib        | Infrastructure |
| services   | Backend        |
| store      | Frontend       |
| providers  | Frontend       |
| hooks      | Frontend       |
| config     | Architect      |
| middleware | Backend        |
| styles     | UI/UX          |

---

# Scalability Principles

Every new feature should fit inside the existing structure.

Avoid introducing new top-level folders.

If a new top-level folder seems necessary, escalate to the Chief Software Architect.

---

# Review Checklist

Verify:

✓ Correct folder

✓ Correct ownership

✓ No duplicated modules

✓ Feature isolation

✓ Shared code truly reusable

✓ No architecture violations

✓ Import rules respected

✓ Naming consistent

---

# Definition of Done

Architecture is correct when:

Every file has a clear home.

Responsibilities are separated.

Dependencies are directional.

Features remain isolated.

Shared code remains minimal.

The structure supports future growth without major refactoring.

---

# Final Principle

Folders communicate architecture.

If the folder structure is clean, the codebase becomes easier to understand, easier to extend, and easier to maintain.

Architecture should make the correct implementation the easiest implementation.
