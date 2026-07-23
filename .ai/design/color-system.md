---
title: Color System
version: 1.0.0
owner: UI/UX Director Agent
status: Active
category: Design Foundation
last_updated: 2026-07-21
---

# Color System

## Purpose

The color system defines the visual language of Landing Page A/B Planner.

The product should communicate:

- AI intelligence
- Trust
- Growth
- Professional analytics
- Confidence

Colors must support:

- SaaS dashboard interfaces
- CRO reports
- Data visualization
- Marketing pages

---

# Color Philosophy

The product should avoid looking like:

- A generic AI tool
- A developer dashboard
- A complex analytics platform

The visual direction:

```
Modern SaaS

+

AI Intelligence

+

Growth Analytics

+

Premium Consulting Experience
```

---

# Color Architecture

The system follows:

```
Brand Colors

↓

Semantic Colors

↓

UI States

↓

Components
```

---

# Primary Brand Palette

## Primary Color

Purpose:

Main brand identity.

Usage:

- Primary CTA
- Active navigation
- Important highlights
- Key actions

Token:

```
color-primary
```

Recommended direction:

```
Deep Indigo / AI Blue
```

Reason:

Represents:

- Intelligence
- Trust
- Technology

---

## Primary Hover

Token:

```
color-primary-hover
```

Usage:

Interactive states.

---

## Primary Soft

Token:

```
color-primary-soft
```

Usage:

- Background highlights
- Selected states
- Information cards

---

# Secondary Brand Palette

Purpose:

Growth and optimization signals.

Token:

```
color-secondary
```

Direction:

```
Emerald / Growth Green
```

Used for:

- Positive improvements
- Conversion wins
- Success metrics

---

# Accent Palette

Purpose:

Create visual energy.

Token:

```
color-accent
```

Used for:

- AI highlights
- Important insights
- Premium features

Direction:

```
Purple / Violet
```

---

# Neutral Color System

Neutrals create most of the interface.

---

# Background Colors

## App Background

Token:

```
background-primary
```

Usage:

Main application background.

---

## Surface Background

Token:

```
background-surface
```

Usage:

Cards, panels, sections.

---

## Elevated Surface

Token:

```
background-elevated
```

Usage:

Modals, dropdowns, floating panels.

---

# Border Colors

## Default Border

Token:

```
border-default
```

Usage:

Cards, inputs, dividers.

---

## Strong Border

Token:

```
border-strong
```

Usage:

Important separation.

---

## Focus Border

Token:

```
border-focus
```

Usage:

Keyboard and input focus.

---

# Text Colors

## Primary Text

Token:

```
text-primary
```

Usage:

Headings and important content.

---

## Secondary Text

Token:

```
text-secondary
```

Usage:

Descriptions and supporting content.

---

## Muted Text

Token:

```
text-muted
```

Usage:

Metadata and captions.

---

# Semantic Color System

Semantic colors communicate meaning.

---

# Success Color

Purpose:

Positive outcomes.

Used for:

- Completed analysis
- Winning experiments
- Growth metrics

Token:

```
color-success
```

Example:

```
+32% conversion opportunity
```

---

# Warning Color

Purpose:

Needs attention.

Used for:

- Medium priority issues
- Pending states

Token:

```
color-warning
```

---

# Error Color

Purpose:

Failure states.

Used for:

- Failed analysis
- Validation errors
- System failures

Token:

```
color-error
```

---

# Info Color

Purpose:

Neutral information.

Used for:

- Tips
- AI explanations
- Help messages

Token:

```
color-info
```

---

# CRO Report Color Mapping

The report system requires special semantic colors.

---

# Impact Score Colors

## High Impact

Token:

```
impact-high
```

Meaning:

Large conversion opportunity.

---

## Medium Impact

Token:

```
impact-medium
```

Meaning:

Worth testing.

---

## Low Impact

Token:

```
impact-low
```

Meaning:

Minor optimization.

---

# Confidence Score Colors

High confidence:

```
confidence-high
```

Medium:

```
confidence-medium
```

Low:

```
confidence-low
```

---

# Difficulty Colors

Easy:

```
difficulty-easy
```

Medium:

```
difficulty-medium
```

Hard:

```
difficulty-hard
```

---

# AI Insight Colors

AI-generated information should have a unique visual identity.

Token:

```
ai-highlight
```

Usage:

- AI suggestions
- Generated recommendations
- Smart insights

---

# Pricing Colors

## Free Plan

Neutral:

```
plan-free
```

---

## Pro Plan

Premium:

```
plan-pro
```

Used for:

- Upgrade cards
- Premium badges

---

# Button Color Rules

## Primary Button

Use:

```
color-primary
```

For:

- Start Analysis
- Upgrade
- Save

---

## Secondary Button

Use:

```
background-surface

border-default
```

---

## Destructive Button

Use:

```
color-error
```

---

# Data Visualization Colors

Charts require consistent colors.

Order:

```
Primary

Secondary

Accent

Success

Warning

Info
```

Avoid random chart colors.

---

# Accessibility Rules

All colors must meet:

```
WCAG 2.2 AA
```

Requirements:

- Text contrast checked
- Focus states visible
- Do not rely only on color

---

# Dark Mode Preparation

Every color must have:

```
light value

dark value
```

Never hardcode:

```
white

black
```

---

# AI Agent Rules

UI agents must:

- Use semantic colors
- Use existing tokens
- Request new colors before creating them

Never:

- Pick random hex values
- Create component-specific colors

---

# Acceptance Criteria

Color system is complete when:

✅ Brand palette defined

✅ Semantic colors defined

✅ Report colors defined

✅ AI highlight colors defined

✅ Accessibility rules defined

---

# Change History

## v1.0.0

Created product color system foundation.
