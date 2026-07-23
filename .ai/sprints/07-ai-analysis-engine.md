---
title: Sprint 07 - AI Analysis Engine
version: 1.0.0
owner: AI System Architect
status: Planned
category: Sprint Planning
priority: Critical
ai_read_required: true
last_updated: 2026-07-21
---

# Sprint 07 — AI Analysis Engine

## Sprint Goal

Build the AI-powered CRO recommendation engine that analyzes landing page data and generates prioritized A/B testing experiments.

The system converts raw website analysis data into actionable growth recommendations.

---

# Sprint Objectives

By the end of this sprint:

- OpenRouter integration works.
- AI models are configurable through environment variables.
- Prompt versioning exists.
- Structured AI responses are generated.
- Experiment hypotheses are created.
- Priority scoring is calculated.
- AI usage is tracked.

---

# AI Architecture Principle

The AI system must behave like a CRO expert.

It should not produce:

- Generic advice
- Random suggestions
- Unprioritized lists

It should produce:

- Business-focused experiments
- Clear reasoning
- Expected impact

---

# AI Provider

MVP:

```
OpenRouter
```

---

# Model Strategy

AI models are controlled from backend.

Users cannot select models.

Configuration:

```
AI_PROVIDER=openrouter

AI_MODEL=model_name
```

---

# Environment Configuration

Example:

```
OPENROUTER_API_KEY=

OPENROUTER_MODEL=
```

---

# Future Providers

Architecture should support:

```
OpenAI

Anthropic

Local Models

Enterprise Models
```

---

# AI Service Architecture

Required:

```
AIController

↓

AIService

↓

PromptService

↓

OpenRouterClient

↓

AI Model
```

---

# AI Service Responsibilities

AIService handles:

- Request preparation
- Model communication
- Response parsing
- Error handling
- Usage tracking

---

# Prompt Management

Prompts must be versioned.

Structure:

```
prompts/

v1/

analysis-prompt.ts

v2/

analysis-prompt.ts
```

---

# Prompt Version Storage

Every report must store:

```
promptVersion
```

Example:

```
v1
```

Purpose:

Old reports remain reproducible.

---

# AI Input Data

AI receives:

```
Landing Page URL

+

HTML Analysis

+

Screenshot Insights

+

CSS Data

+

Metadata

+

Lighthouse Data
```

---

# AI Output Format

AI must return structured JSON.

Example:

```json
{
  "experiments": []
}
```

---

# Experiment Structure

Every experiment must contain:

```json
{
  "title": "",

  "currentProblem": "",

  "hypothesis": "",

  "variantA": "",

  "variantB": "",

  "expectedImpact": "",

  "confidence": "",

  "difficulty": "",

  "reasoning": "",

  "implementation": "",

  "copySuggestion": "",

  "winnerMetric": ""
}
```

---

# Experiment Quality Rules

Every recommendation must answer:

## Problem

What is wrong?

---

## Hypothesis

Why will this improve conversion?

---

## Solution

What should change?

---

## Measurement

How will success be measured?

---

# Priority Scoring Formula

Required:

```
Priority Score

=

Impact

×

Confidence

÷

Difficulty
```

---

# Score Definitions

## Impact

Range:

```
1-10
```

Measures:

Potential conversion improvement.

---

## Confidence

Range:

```
1-10
```

Measures:

Evidence strength.

---

## Difficulty

Range:

```
1-10
```

Measures:

Implementation complexity.

---

# Example

```
Impact: 9

Confidence: 8

Difficulty: 3


Priority:

9 × 8 ÷ 3

= 24
```

---

# AI Response Validation

AI output must be validated.

Required:

- Schema validation
- Required fields
- Type checking

Recommended:

Zod

---

# AI Failure Handling

Handle:

- Timeout
- Invalid response
- Rate limit
- Provider failure

---

# AI Cost Tracking

Store:

```
model

tokensUsed

estimatedCost

promptVersion
```

---

# Database Design

Collection:

```
ai_generations
```

Fields:

```ts
{
id:string,

analysisId:string,

model:string,

promptVersion:string,

tokensUsed:number,

cost:number,

status:string,

createdAt:Date
}
```

---

# AI Queue Integration

AI processing runs through:

```
aiQueue
```

Flow:

```
Analysis Completed

↓

AI Job Created

↓

AI Worker

↓

Generate Experiments

↓

Save Report Data
```

---

# AI Worker

Create:

```
ai.worker.ts
```

Responsibilities:

- Receive AI jobs
- Call AI service
- Validate output
- Save results

---

# Logging

Track:

- AI request started
- Model used
- Token usage
- Errors
- Response time

---

# Analytics Events

Track:

```
ai_request_started

ai_request_completed

ai_request_failed
```

---

# Security Requirements

Never expose:

- API keys
- Internal prompts
- Provider configuration

---

# Testing Requirements

## Unit Tests

Test:

- Prompt generation
- Response validation
- Score calculation

---

## Integration Tests

Test:

- OpenRouter communication
- AI worker flow

---

# AI Agent Responsibilities

## Architect Agent

Controls:

- AI architecture
- Data contracts
- Scaling decisions

---

## AI Developer Agent

Implements:

- AI services
- Prompt system
- Validation

---

## Code Reviewer Agent

Checks:

- Output reliability
- Security
- Cost control
- Maintainability

---

# Acceptance Criteria

Sprint complete when:

✅ OpenRouter works

✅ AI model controlled by ENV

✅ Prompt versioning works

✅ AI output is structured

✅ Experiments generated

✅ Priority scores calculated

✅ AI usage tracked

---

# Definition of Done

AI engine is complete when:

- Website analysis data can generate CRO experiments.
- Results are reproducible.
- Output is structured for frontend display.
- AI costs are measurable.

---

# Dependencies

Requires:

```
05-url-analysis-engine.md

06-background-job-system.md
```

---

# Next Sprint

```
08-report-system.md
```

---

# Change History

## v1.0.0

- Created AI analysis architecture.
- Defined OpenRouter integration.
- Defined experiment generation system.
