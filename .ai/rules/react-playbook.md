---
title: React Playbook
version: 1.0.0
owner: Frontend Engineering Lead
status: Approved
category: Engineering Rules
priority: Critical
ai_read_required: true
---

# React Playbook

## Purpose

This playbook defines how React is used throughout the project.

Every React component must follow these standards.

The goal is consistency, maintainability, accessibility, performance, and reusability.

---

# React Philosophy

React is a UI library.

React components should describe the interface.

Business logic belongs elsewhere.

Components should remain small, predictable, and composable.

---

# Component Philosophy

Every component should have a single responsibility.

Good examples:

AnalysisCard

ReportHeader

UsageCard

ProgressTimeline

AnalysisStatusBadge

Bad examples:

DashboardEverything.tsx

BigComponent.tsx

Main.tsx

---

# Component Types

The project uses four kinds of components.

## 1. Shared Components

Location

```
src/components/
```

Examples

Button

Card

Modal

Dialog

Tooltip

Badge

Skeleton

Logo

---

## 2. Feature Components

Location

```
src/features/<feature>/components/
```

Examples

AnalysisProgress

AnalysisCard

RecommendationList

UpgradeBanner

ReportSidebar

---

## 3. Layout Components

Location

```
src/app/
```

Examples

DashboardLayout

AdminLayout

MarketingLayout

AuthLayout

---

## 4. Provider Components

Location

```
src/providers/
```

Examples

ReduxProvider

ThemeProvider

AuthProvider

---

# Component Size

Recommended limits

Simple Component

< 100 lines

Feature Component

< 200 lines

Complex Container

< 250 lines

If larger:

Split the component.

---

# Component Structure

Recommended order

```tsx
Imports

Types

Constants

Component

Hooks

Handlers

Derived Values

Return JSX

Export
```

Maintain consistency.

---

# Props

Every component uses a Props interface.

Example

```ts
interface AnalysisCardProps {
  report: AnalysisSummary;
  onSelect: (id: string) => void;
}
```

Never use anonymous props.

---

# State Management

React State

Only for UI state.

Examples

Modal

Tabs

Accordion

Popover

Tooltip

Input value

Loading indicator

Business state belongs elsewhere.

---

# Global State

Redux Toolkit

Examples

Authentication

Sidebar

Notifications

Theme

Usage

Never duplicate Redux state locally.

---

# Server State

Always use RTK Query.

Never call fetch() directly inside components.

Never call axios inside components.

---

# Custom Hooks

Extract logic into hooks when:

Logic exceeds 20–30 lines

Logic is reused

Logic becomes difficult to read

Hooks belong:

```
features/<feature>/hooks
```

Shared hooks go to:

```
src/hooks/
```

---

# Derived State

Never store derived values in state.

Use:

```tsx
const completed = reports.filter((r) => r.status === 'completed');
```

Instead of duplicating state.

---

# Memoization

Use only when beneficial.

Allowed

React.memo

useMemo

useCallback

Avoid premature optimization.

Measure before adding memoization.

---

# Effects

Effects synchronize with external systems.

They are not business logic.

Avoid complex useEffect chains.

Prefer custom hooks.

---

# Forms

Always use:

React Hook Form

-

Zod

Never manage complex forms manually.

---

# Conditional Rendering

Prefer early returns.

Example

```tsx
if (loading) return <Loading />;

if (error) return <ErrorState />;
```

Avoid deeply nested ternaries.

---

# Lists

Always provide stable keys.

Never use array index unless the list is static.

---

# Accessibility

Every component supports:

Keyboard navigation

Focus visibility

ARIA labels

Semantic HTML

Reduced motion

Proper headings

---

# Error Boundaries

Critical feature areas should use React Error Boundaries.

Never allow the dashboard to crash entirely.

---

# Loading States

Every async UI needs:

Skeleton

Progress

Status updates

Avoid generic spinners.

---

# Empty States

Every list must support:

No data

No results

No history

No analyses

Teach the user what to do next.

---

# Styling

Tailwind CSS only.

No inline styles.

No CSS Modules.

No Styled Components.

No Emotion.

Use design tokens.

---

# Animations

Use Framer Motion.

Animations should:

Explain state

Guide attention

Increase confidence

Never distract.

---

# Imports

Order:

1. React / Next

2. External libraries

3. Shared modules

4. Feature modules

5. Relative imports

---

# Naming

Components

PascalCase

Hooks

camelCase

Files

kebab-case

Props

<ComponentName>Props

---

# Anti-Patterns

Never:

Put business logic inside JSX

Call APIs inside components

Access MongoDB

Access Redis

Access OpenRouter

Use any

Create giant components

Duplicate JSX

Store derived state

Mutate props

Deeply nest components unnecessarily

---

# Review Checklist

Verify:

✓ Single responsibility

✓ Typed props

✓ Accessible

✓ Responsive

✓ Loading state

✓ Empty state

✓ Error state

✓ No duplicated logic

✓ Proper hook extraction

✓ Uses RTK Query

✓ Uses Redux appropriately

✓ No business logic

---

# Definition of Done

A React component is complete only when:

It follows the design.

It follows the architecture.

It is accessible.

It is responsive.

It is reusable.

It is typed.

It contains no business logic.

It performs well.

---

# Final Principle

React components should describe the interface—not contain the application.

The less business logic inside components, the easier the application becomes to maintain.
