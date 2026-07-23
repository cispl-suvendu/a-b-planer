---
title: Tailwind CSS Playbook
version: 1.0.0
owner: UI/UX Director
status: Approved
category: Engineering Rules
priority: Critical
ai_read_required: true
---

# Tailwind CSS Playbook

## Purpose

This playbook defines how Tailwind CSS is used across the project.

Tailwind is the implementation tool for the design system—not the design system itself.

Every UI should feel consistent, premium, and intentional.

---

# Design Philosophy

Our interface should feel:

- Premium
- Minimal
- Calm
- Professional
- Fast
- Spacious
- Modern
- Enterprise Ready

Inspired by:

- Linear
- Vercel
- Stripe
- OpenAI
- Notion

Never imitate.

Learn from their consistency.

---

# Styling Philosophy

Prefer:

Simple

↓

Readable

↓

Reusable

↓

Consistent

Never build components by randomly combining Tailwind utilities.

---

# Design Tokens First

Never hardcode:

Colors

Spacing

Radius

Typography

Shadows

Z-index

Transitions

Everything should come from design tokens.

Example:

Good

```css
bg-background
text-foreground
border-border
rounded-lg
```

Bad

```css
bg-white
text-gray-700
rounded-[13px]
```

---

# Color System

Use semantic colors.

Primary

Secondary

Background

Foreground

Surface

Muted

Border

Success

Warning

Danger

Info

Never style by color name.

Style by meaning.

---

# Spacing Scale

Use an 8px grid.

Preferred spacing:

4

8

12

16

24

32

40

48

56

64

80

96

Avoid arbitrary spacing values.

---

# Typography

Typography should communicate hierarchy.

Never style using random text sizes.

Use semantic classes.

Example

Heading XL

Heading LG

Heading MD

Body LG

Body MD

Body SM

Caption

Typography tokens should control:

Font

Weight

Size

Line Height

Letter Spacing

---

# Border Radius

Use a small set.

Examples

sm

md

lg

xl

2xl

full

Avoid custom radius values.

---

# Shadows

Use shadows sparingly.

Only to indicate elevation.

Prefer subtle depth.

Avoid dramatic shadows.

---

# Layout

Always use:

Container

Grid

Flex

Gap

Space

Avoid margin hacks.

Use gap whenever possible.

---

# Containers

Maximum content width:

1280px

Dashboard content:

1440px

Forms:

640–720px

Landing page hero:

Wide container

Maintain generous whitespace.

---

# Responsive Design

Mobile First.

Breakpoints:

sm

md

lg

xl

2xl

Avoid arbitrary breakpoints.

---

# Component Styling

Every component should have:

Default

Hover

Focus

Active

Disabled

Loading

Error

Success

Variants

Never style only the default state.

---

# Dark Mode

Architecture must support dark mode.

Even if disabled initially.

Never hardcode colors that prevent future support.

---

# Icons

Use a single icon library.

Recommended:

Lucide React

Icons should:

Match text weight

Remain consistent

Never mix icon libraries.

---

# Animation

Motion should communicate state.

Examples:

Hover

Loading

Expand

Collapse

Progress

Success

Use Framer Motion.

Avoid excessive animation.

---

# Utility Classes

Prefer reusable component patterns.

Avoid repeating long utility chains.

If repeated three times:

Extract into a reusable component.

---

# CSS

Global CSS should contain only:

Design Tokens

Utilities

Scrollbar

Selection

Focus styles

Animation variables

Avoid writing component CSS.

---

# Accessibility

Always provide:

Visible focus

Accessible contrast

Large touch targets

Reduced motion support

Readable typography

---

# Forbidden Practices

Never:

Use arbitrary colors

Use arbitrary spacing

Use arbitrary font sizes

Use inline styles

Use !important

Mix design styles

Create visual inconsistency

---

# Review Checklist

Verify:

✓ Semantic colors

✓ Design tokens

✓ Consistent spacing

✓ Responsive

✓ Focus states

✓ Hover states

✓ Disabled states

✓ Loading states

✓ Accessible contrast

✓ Consistent typography

---

# Definition of Done

Styling is complete only when:

It follows the design system.

It uses semantic tokens.

It is responsive.

It is accessible.

It feels visually consistent.

It matches the premium product vision.

---

# Final Principle

Tailwind is an implementation detail.

Users should notice the product—not the utility classes behind it.

Consistency builds trust.
