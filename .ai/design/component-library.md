---
title: Component Library System
version: 1.0.0
owner: UI/UX Director Agent
status: Active
category: Design System
last_updated: 2026-07-21
---

# Component Library System

## Purpose

The component library defines reusable UI building blocks for Landing Page A/B Planner.

All frontend interfaces must be created using approved components.

The component system ensures:

- Consistent UI
- Faster development
- Better accessibility
- Easier maintenance
- AI-generated UI consistency

---

# Component Architecture

The component hierarchy:

```
Design Tokens

↓

Primitive Components

↓

Composite Components

↓

Feature Components

↓

Pages
```

---

# Component Rules

Every component must:

- Use design tokens
- Support accessibility
- Have responsive behavior
- Have defined states
- Avoid duplicated patterns

---

# Component Categories

```
Foundations

Navigation

Forms

Feedback

Data Display

Dashboard

Reports

AI Components

Marketing Components
```

---

# Foundations

## Container

Purpose:

Controls page width.

Usage:

```
All pages
```

Requirements:

- Responsive max width
- Horizontal padding
- Consistent alignment

---

## Stack

Purpose:

Vertical spacing management.

Used for:

- Forms
- Cards
- Sections

---

## Grid

Purpose:

Layout organization.

Used for:

- Dashboard cards
- Report sections

---

## Divider

Purpose:

Visual separation.

States:

- Default
- Strong

---

# Button System

Buttons are primary interaction components.

---

# Button Variants

## Primary Button

Usage:

Main actions.

Examples:

- Analyze URL
- Upgrade
- Generate Report

Style:

```
Primary brand color
```

---

## Secondary Button

Usage:

Supporting actions.

Examples:

- Cancel
- Back

---

## Ghost Button

Usage:

Low emphasis actions.

---

## Destructive Button

Usage:

Danger actions.

Examples:

- Delete

---

# Button Sizes

```
Small

Medium

Large
```

---

# Button States

Required:

```
Default

Hover

Focus

Active

Loading

Disabled
```

---

# Input System

Used for:

- URL entry
- Search
- Forms

---

# Input Variants

```
Text Input

URL Input

Search Input

Textarea
```

---

# Input States

Required:

```
Default

Focus

Error

Disabled

Success
```

---

# Form Components

## Form Field

Contains:

```
Label

Input

Helper Text

Error Message
```

---

## Validation Message

Types:

```
Error

Warning

Success
```

---

# Card System

Cards are heavily used.

---

# Card Variants

## Basic Card

Usage:

General content.

---

## Metric Card

Usage:

Dashboard statistics.

Contains:

```
Value

Label

Trend
```

---

## Feature Card

Usage:

Marketing pages.

---

## AI Insight Card

Usage:

AI recommendations.

Contains:

```
AI Badge

Insight

Explanation
```

---

# Card States

```
Default

Hover

Selected

Disabled
```

---

# Badge System

Used for:

- Status
- Categories
- Scores

---

# Badge Types

## Status Badge

Examples:

```
Completed

Processing

Failed
```

---

## Priority Badge

Examples:

```
High Impact

Medium Impact

Low Impact
```

---

## Plan Badge

Examples:

```
Free

Pro
```

---

# Tooltip System

Purpose:

Explain unfamiliar UI.

Used for:

- AI scores
- Metrics
- Advanced settings

---

# Modal System

Used for:

- Confirmation
- Details
- Upgrade prompts

---

# Modal Structure

```
Header

Content

Actions
```

---

# Modal States

```
Default

Loading

Success

Error
```

---

# Dropdown System

Used for:

- Filters
- Menus
- Settings

---

# Navigation Components

## Header

Used:

Marketing pages.

Contains:

- Logo
- Navigation
- CTA

---

## Sidebar

Used:

Application dashboard.

Contains:

- Navigation items
- User menu

---

## Breadcrumb

Used:

Deep pages.

---

# Table System

Used for:

Admin dashboard.

---

# Table Features

Support:

- Sorting
- Filtering
- Pagination
- Empty states

---

# Data Display Components

## Avatar

Used for:

User identity.

---

## Progress Bar

Used for:

Analysis processing.

States:

```
Queued

Processing

Completed

Failed
```

---

## Metric Display

Used for:

Analytics.

Contains:

```
Number

Label

Trend
```

---

# Loading Components

## Skeleton

Used for:

Page loading.

---

## Spinner

Used for:

Small async actions.

---

## Progress Loader

Used for:

AI processing.

Example:

```
Analyzing page structure...

Generating recommendations...
```

---

# Empty State Components

Every empty page needs:

```
Illustration

Title

Description

CTA
```

---

# Error State Components

Every error needs:

```
Error icon

Message

Recovery action
```

---

# AI Specific Components

## AI Badge

Purpose:

Identify AI-generated content.

---

## AI Recommendation Card

Contains:

```
Problem

Hypothesis

Recommendation

Impact Score
```

---

## Confidence Score

Displays:

AI confidence.

---

## Experiment Card

Core report component.

Contains:

```
Title

Priority

Current Version

Suggested Version

Expected Impact

Implementation Notes
```

---

# Dashboard Components

## Dashboard Header

Contains:

- Greeting
- Actions
- Notifications

---

## Analysis Card

Displays:

```
URL

Status

Date

Action
```

---

## Usage Meter

Displays:

Free usage:

```
3/4 analyses used
```

---

# Marketing Components

## Hero Section

Contains:

- Headline
- Description
- CTA
- Visual

---

## Feature Section

Reusable feature blocks.

---

## Testimonial Card

Social proof.

---

## Pricing Card

Contains:

- Plan
- Price
- Features
- CTA

---

# Accessibility Requirements

Every component must support:

- Keyboard navigation
- Focus states
- Screen readers
- Proper ARIA labels

---

# Component Naming Rules

Use:

```
PascalCase
```

Examples:

```
Button

ExperimentCard

MetricCard
```

---

# File Structure

Recommended:

```
components/

├── ui/

├── dashboard/

├── reports/

├── marketing/

└── ai/
```

---

# AI Agent Rules

Agents must:

Before creating UI:

1. Check existing components
2. Reuse patterns
3. Request new component approval

Never:

- Duplicate components
- Create random variants
- Ignore tokens

---

# Acceptance Criteria

Component library complete when:

✅ Core UI components defined

✅ Dashboard components defined

✅ Report components defined

✅ AI components defined

✅ Accessibility rules defined

---

# Change History

## v1.0.0

Created reusable component library system.
