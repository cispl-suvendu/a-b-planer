---
title: TypeScript Playbook
version: 1.0.0
owner: Chief Software Architect
status: Approved
category: Engineering Rules
priority: Critical
ai_read_required: true
---

# TypeScript Playbook

## Purpose

This document defines the TypeScript standards for the entire project.

Every TypeScript file must follow these rules.

Type safety is mandatory.

---

# TypeScript Configuration

Always use:

- "strict": true
- "noImplicitAny": true
- "strictNullChecks": true
- "noUncheckedIndexedAccess": true
- "exactOptionalPropertyTypes": true

Never weaken compiler rules for convenience.

---

# Philosophy

TypeScript exists to prevent bugs before runtime.

Prefer compile-time safety over runtime surprises.

Never bypass the compiler.

---

# General Rules

Always:

- Define explicit types
- Prefer interfaces for object contracts
- Use type aliases for unions and utility types
- Export reusable types
- Keep types close to the feature they belong to

Never:

- Use `any`
- Ignore compiler errors
- Disable TypeScript rules
- Use unsafe type assertions without justification

---

# Interfaces vs Types

Use **interface** for:

- API contracts
- Component props
- Service contracts
- Repository contracts
- Database entities

Example:

```ts
interface AnalysisReport {
  id: string;
  title: string;
}
```

Use **type** for:

- Unions
- Intersections
- Utility types
- Function signatures
- Literal types

Example:

```ts
type Plan = 'free' | 'pro';
```

---

# Component Props

Every component must have a dedicated Props interface.

Good:

```ts
interface ButtonProps {
  label: string;
  disabled?: boolean;
}
```

Avoid inline prop definitions.

---

# API Types

Every endpoint must define:

- Request type
- Response type
- Error type

Never use anonymous response objects.

---

# DTOs

Create dedicated DTOs.

Never expose database models directly.

Example:

CreateAnalysisRequest

CreateAnalysisResponse

AnalysisSummary

AnalysisDetails

---

# Enums

Avoid TypeScript enums.

Prefer string literal unions.

Good:

```ts
type AnalysisStatus = 'queued' | 'running' | 'completed' | 'failed';
```

---

# Utility Types

Prefer built-in utilities.

Examples:

Partial

Required

Pick

Omit

Record

Readonly

Avoid reinventing utility types.

---

# Null Safety

Never assume values exist.

Always handle:

undefined

null

optional fields

Use optional chaining and nullish coalescing where appropriate.

---

# Type Guards

Use type guards for unknown values.

Example:

```ts
function isAnalysis(value: unknown): value is AnalysisReport {
  // validation
}
```

Avoid unsafe casting.

---

# Generics

Use generics when they improve reusability.

Do not introduce unnecessary complexity.

Prefer readability.

---

# Async Functions

Always define return types.

Example:

```ts
async function createReport(): Promise<AnalysisReport> {}
```

Never return implicit Promise<any>.

---

# Error Types

Use custom error classes.

Avoid throwing raw strings.

Good:

```ts
throw new AnalysisLimitError();
```

Bad:

```ts
throw 'Limit reached';
```

---

# Imports

Import only what is required.

Prefer named exports.

Avoid wildcard imports.

Group imports consistently:

1. External libraries
2. Internal shared modules
3. Feature modules
4. Relative imports

---

# File Naming

Use lowercase with dots.

Examples:

analysis.types.ts

analysis.dto.ts

analysis.mapper.ts

analysis.validator.ts

---

# Shared Types

Feature-specific types stay inside the feature.

Only move types to shared when reused by multiple features.

Avoid creating a global dumping ground.

---

# Zod Integration

Zod is the source of truth for runtime validation.

Infer TypeScript types from Zod schemas whenever possible.

Example:

```ts
type CreateAnalysis = z.infer<typeof createAnalysisSchema>;
```

Do not duplicate schema definitions.

---

# Forbidden Practices

Never:

Use any

Suppress compiler errors

Cast through unknown

Duplicate interfaces

Create massive shared type files

Mix DTOs with database entities

Use Object as a type

Use Function as a type

---

# Code Review Checklist

Verify:

✓ No any

✓ Strong typing

✓ DTO separation

✓ Runtime validation

✓ Explicit return types

✓ Reusable interfaces

✓ Null safety

✓ Correct generics

✓ No duplicate types

✓ Consistent naming

---

# Definition of Done

TypeScript implementation is complete only when:

It compiles without warnings.

Strict mode passes.

Types are reusable.

Runtime validation exists.

No unsafe casts remain.

Public APIs are fully typed.

---

# Final Principle

If TypeScript cannot prove the code is safe, assume it is not safe.

Never silence the compiler.

Let the compiler become your first code reviewer.
