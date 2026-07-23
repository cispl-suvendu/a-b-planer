# Design System & UI Foundation

## Overview

The Landing Page A/B Planner design system is built to provide a premium, trustworthy, and heavily scalable SaaS aesthetic. It is based on **Tailwind CSS**, **Radix UI (shadcn-ui)**, and custom structural layouts.

## Core Principles

1. **Clarity Over Complexity:** Keep interfaces minimal and progressive.
2. **Premium Intelligence:** UI should feel modern and AI-powered without being gimmicky.
3. **Action-Oriented:** Always guide the user to the next step.

## Component Hierarchy

We strictly follow this hierarchy to ensure consistency:

1. **Design Tokens:** Global CSS Variables in `src/app/globals.css`. Do not hardcode hex colors in Tailwind classes.
2. **Primitive Components:** Low-level, reusable pieces in `src/components/ui/` (e.g., `Button`, `Input`, `Dialog`). Always use these instead of raw HTML elements.
3. **Common UX Components:** Reusable states in `src/components/common/` (e.g., `EmptyState`, `LoadingState`, `ErrorState`, `ScoreBadge`).
4. **Layout Components:** Top-level structural shells in `src/components/layout/` (e.g., `AppShell`, `AuthLayout`).

## Color System

- **Primary (`bg-primary`, `text-primary`):** Indigo branding color used for primary actions.
- **Neutral/Background:** Clean whites/slates for backgrounds and cards.
- **Semantic:**
  - `success` (Green) for good metrics.
  - `warning` (Yellow) for cautions.
  - `error` (Red) for critical issues.
  - `info` (Blue) for neutral insights.

_Usage Example:_

```tsx
<div className="rounded-md border border-success/30 bg-success/15 p-2 text-success">
  High Impact
</div>
```

## Adding New Primitives

If a new core component is needed, generate it via the shadcn CLI:
`npx shadcn@4.12.0 add <component-name>`
