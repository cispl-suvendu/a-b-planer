---
title: Typography System
version: 1.0.0
owner: UI/UX Director Agent
status: Active
category: Design Foundation
last_updated: 2026-07-21
---

# Typography System

## Purpose

The typography system defines the text hierarchy for Landing Page A/B Planner.

Typography must support:

- Marketing storytelling
- SaaS dashboard usability
- AI report readability
- Data visualization
- Accessibility

---

# Typography Philosophy

The product should feel:

- Intelligent
- Clear
- Professional
- Modern

Avoid:

- Overly playful fonts
- Developer-tool appearance
- Dense enterprise dashboards

---

# Font Strategy

## Primary Font

Recommended:

```
Inter
```

Reason:

- Excellent UI readability
- Strong SaaS adoption
- Great number rendering
- Open source
- Works well with dashboards

---

# Font Family

Token:

```
font-family-primary
```

Value:

```
Inter,
system-ui,
sans-serif
```

---

# Secondary Font

Optional future:

```
Display Font
```

Used only for:

- Marketing hero
- Brand moments

Never use secondary fonts inside the application dashboard.

---

# Font Weights

Available:

```
400
Regular
```

Usage:

- Body text
- Descriptions

---

```
500
Medium
```

Usage:

- Labels
- Navigation
- Supporting emphasis

---

```
600
Semibold
```

Usage:

- Buttons
- Card titles
- Important UI

---

```
700
Bold
```

Usage:

- Main headings
- Strong emphasis

---

# Type Scale

All typography must use tokens.

---

# Display Typography

## Display XL

Usage:

Marketing hero headline.

Token:

```
text-display-xl
```

Example:

```
Analyze any landing page.
Discover what increases conversions.
```

---

## Display Large

Usage:

Marketing sections.

Token:

```
text-display-lg
```

---

# Heading System

## Heading 1

Usage:

Page titles.

Token:

```
text-h1
```

Properties:

```
font-size: 48px

line-height: 1.1

weight: 700
```

---

## Heading 2

Usage:

Major sections.

Token:

```
text-h2
```

Properties:

```
font-size: 36px

line-height: 1.2

weight: 700
```

---

## Heading 3

Usage:

Cards and subsections.

Token:

```
text-h3
```

Properties:

```
font-size: 24px

line-height: 1.3

weight: 600
```

---

## Heading 4

Usage:

Small sections.

Token:

```
text-h4
```

Properties:

```
font-size: 20px

line-height: 1.4

weight: 600
```

---

# Body Typography

## Body Large

Usage:

Hero descriptions.

Token:

```
text-body-lg
```

Properties:

```
18px

line-height: 1.6
```

---

## Body Default

Usage:

Normal content.

Token:

```
text-body
```

Properties:

```
16px

line-height: 1.6
```

---

## Body Small

Usage:

Secondary information.

Token:

```
text-body-sm
```

Properties:

```
14px

line-height: 1.5
```

---

# Label Typography

## Label Large

Usage:

Buttons and important controls.

Token:

```
text-label-lg
```

Properties:

```
15px

weight:600
```

---

## Label Default

Usage:

Forms and navigation.

Token:

```
text-label
```

Properties:

```
14px

weight:500
```

---

# Caption Typography

Usage:

Metadata:

- Dates
- Status
- Helper text

Token:

```
text-caption
```

Properties:

```
12px

line-height:1.4
```

---

# Dashboard Typography

Dashboard requires fast scanning.

Rules:

## Numbers

Metrics should use:

```
text-display-lg
```

Example:

```
128
Analyses Completed
```

---

## Table Data

Use:

```
text-body-sm
```

---

## Status Labels

Use:

```
text-label
```

---

# Report Typography

Reports need strong hierarchy.

Structure:

```
Report Title

↓

Summary

↓

Experiment Title

↓

Problem

↓

Hypothesis

↓

Recommendation
```

---

Recommended:

Experiment title:

```
text-h3
```

Description:

```
text-body
```

Metadata:

```
text-caption
```

---

# Line Height Rules

Readable text:

```
1.5 - 1.7
```

Headings:

```
1.1 - 1.3
```

---

# Letter Spacing

Headings:

```
-0.02em
```

Body:

```
0
```

Labels:

```
0.01em
```

---

# Responsive Typography

## Mobile

375px:

Reduce:

- Display sizes
- Heading sizes

---

Example:

Desktop:

```
48px
```

Mobile:

```
36px
```

---

# Typography Rules

Never:

- Use random font sizes
- Use more than required weights
- Create one-off text styles

---

# Tailwind Mapping

Example:

```
text-display-xl

↓

Tailwind utility

↓

CSS token
```

---

# CSS Variable Strategy

Example:

```css
--font-size-h1: 48px;

--line-height-h1: 1.1;

--font-weight-h1: 700;
```

---

# Accessibility Rules

Typography must support:

- Minimum readable size
- Clear hierarchy
- Sufficient contrast
- Zoom compatibility

---

# AI Agent Rules

Agents must:

- Use typography tokens
- Maintain hierarchy
- Avoid arbitrary font sizes

---

# Acceptance Criteria

Typography system complete when:

✅ Font strategy defined

✅ Scale defined

✅ Weight rules defined

✅ Dashboard typography defined

✅ Report typography defined

✅ Responsive rules defined

---

# Change History

## v1.0.0

Created typography system foundation.
