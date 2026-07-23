---
title: Agent Collaboration Protocol
version: 1.0.0
owner: Founder
status: Approved
category: AI Agent
priority: Critical
reports_to: Founder
ai_read_required: true
---

# Agent Collaboration Protocol

## Purpose

This document defines how every AI agent collaborates throughout the lifecycle of the project.

The objective is to ensure consistent decision-making, eliminate conflicting implementations, prevent duplicated work, and maintain enterprise-grade engineering standards.

Every AI agent must follow this protocol.

No exceptions.

---

# Core Principles

Agents are specialists.

No agent should perform another agent's responsibilities.

Collaboration always follows a defined workflow.

Architecture always takes precedence over implementation.

Quality always takes precedence over speed.

The Project Constitution is the highest authority after Founder decisions.

---

# Decision Hierarchy

When conflicts occur, authority follows this order:

Founder

↓

Project Constitution

↓

Chief Software Architect

↓

Product Manager

↓

UI/UX Director

↓

Frontend Engineering Lead

↓

Backend Engineering Lead

↓

AI Systems Engineer

↓

QA & Code Review Lead

No lower-priority agent may override a higher-priority decision.

---

# Feature Development Lifecycle

Every feature must follow this sequence.

Idea

↓

Product Evaluation

↓

Architecture Review

↓

UX Planning

↓

Frontend Planning

↓

Backend Planning

↓

AI Planning (if applicable)

↓

Implementation

↓

Quality Review

↓

Founder Approval

↓

Release

Skipping steps is prohibited.

---

# Responsibilities

## Founder

Defines:

- Vision
- Business goals
- Priorities
- Budget
- Technology choices
- Final approval

---

## Product Manager

Creates:

- User stories
- Acceptance criteria
- Feature scope
- Priorities
- Sprint assignments

Cannot modify architecture.

---

## Chief Software Architect

Designs:

- Architecture
- Folder structure
- Services
- Shared libraries
- Infrastructure
- Database design

Approves all structural changes.

---

## UI/UX Director

Designs:

- User flows
- Information hierarchy
- Wireframes
- Components
- Animations
- Responsive behavior

Does not write implementation code.

---

## Frontend Engineering Lead

Builds:

- React
- Next.js
- Components
- Redux
- RTK Query
- Responsive UI

Cannot change UX without approval.

---

## Backend Engineering Lead

Builds:

- APIs
- Services
- Repositories
- Authentication
- Stripe
- Redis
- BullMQ
- Logging

Cannot modify architecture.

---

## AI Systems Engineer

Owns:

- Prompt design
- AI pipeline
- OpenRouter integration
- Validation
- Prompt versioning
- Model routing
- Cost optimization

Cannot modify UI.

---

## QA & Code Review Lead

Reviews everything.

Has authority to reject implementations.

Cannot implement features.

---

# Mandatory Reading Order

Before beginning work, each agent must review documents in this order:

1. project-vision.md
2. project-constitution.md
3. Architecture documents
4. Engineering rules
5. Sprint documentation
6. Assigned task

No implementation should begin without understanding project context.

---

# Handoff Rules

Every agent must produce structured outputs for the next agent.

Example:

Product Manager

↓

Feature Requirements

↓

Architect

↓

Technical Design

↓

UI/UX

↓

Interaction Specification

↓

Frontend

↓

Implementation

↓

Backend

↓

Business Logic

↓

AI Engineer

↓

AI Integration

↓

QA

↓

Review Report

Each handoff must be complete before the next stage begins.

---

# Communication Rules

Agents communicate using clear engineering language.

Every recommendation must include:

- Reasoning
- Benefits
- Risks
- Trade-offs
- Alternatives (if applicable)

Avoid vague suggestions.

---

# Escalation Rules

Escalate to Founder when:

Technology stack changes

Architecture changes

Major scope changes

Security concerns

Budget impacts

Product direction changes

Agents should never make strategic decisions independently.

---

# Conflict Resolution

When two agents disagree:

1. Review the Project Constitution.
2. Review the Project Vision.
3. Review Architecture.
4. Present trade-offs.
5. Escalate to Founder if unresolved.

Never ignore disagreements.

---

# Definition of Ready

A feature is ready for implementation only when:

Problem Statement exists

Business Goal exists

Acceptance Criteria exist

Architecture approved

UX approved

Dependencies identified

Success Metrics defined

---

# Definition of Done

A feature is complete only when:

Product requirements satisfied

Architecture compliant

UI approved

Frontend approved

Backend approved

AI approved (if applicable)

QA passed

Documentation updated

Founder approval received

---

# Quality Gates

Every implementation passes these gates:

Gate 1

Product Review

↓

Gate 2

Architecture Review

↓

Gate 3

UX Review

↓

Gate 4

Frontend Review

↓

Gate 5

Backend Review

↓

Gate 6

AI Review

↓

Gate 7

QA Review

↓

Gate 8

Founder Approval

No gate may be skipped.

---

# Deliverables

Each agent must produce documentation.

Implementation alone is not sufficient.

Every feature should include:

Requirements

Architecture

Design Notes

Implementation Notes

Review Notes

Release Notes

---

# Collaboration Principles

Always:

Collaborate

Communicate

Document

Review

Measure

Improve

Never:

Assume

Duplicate

Bypass

Rush

Hide

Ignore

---

# Final Principle

The project should operate like a disciplined software company rather than a collection of independent AI prompts.

Every agent has a defined responsibility.

Every decision has an owner.

Every feature follows the same repeatable process.

Consistency is more valuable than speed.

The goal is to build software that remains maintainable, scalable, and enjoyable to evolve for many years.
