---
title: Sprint 06 - Background Job System
version: 1.0.0
owner: Backend Engineering Lead
status: Planned
category: Sprint Planning
priority: Critical
ai_read_required: true
last_updated: 2026-07-21
---

# Sprint 06 — Background Job System

## Sprint Goal

Build a scalable background processing system using Redis-based job queues.

The system must handle long-running tasks without blocking API requests.

---

# Sprint Objectives

By the end of this sprint:

- Redis infrastructure is configured.
- Background workers exist.
- Analysis jobs can be queued.
- Job progress can be tracked.
- Failed jobs can retry.
- Users can see processing status.

---

# Why Background Jobs Are Required

The product performs expensive operations:

- Browser rendering
- Screenshot capture
- HTML extraction
- CSS analysis
- Lighthouse audits
- AI processing

These operations cannot run inside HTTP requests.

---

# Job Architecture

```
Frontend

↓

API Server

↓

Create Analysis

↓

Redis Queue

↓

Worker Process

↓

Analysis Pipeline

↓

Database Update

↓

Frontend Polling / Realtime Update
```

---

# Technology

Queue:

```
BullMQ
```

Storage:

```
Redis
```

Runtime:

```
Node.js Worker
```

---

# Redis Responsibilities

Redis is used for:

## Queue Management

Store:

- Pending jobs
- Running jobs
- Failed jobs

---

## Cache

Store:

- Temporary analysis data
- Rate limit data
- Frequently accessed information

---

## Progress Tracking

Store:

- Current stage
- Completion percentage

---

# Worker Architecture

Create separate worker service.

Example:

```
src/

workers/

├── analysis.worker.ts

├── ai.worker.ts

└── email.worker.ts
```

---

# Analysis Worker

Responsible for:

```
Analysis Job

↓

Crawler

↓

Screenshot

↓

Metadata

↓

Lighthouse

↓

Save Result
```

---

# Job States

Required:

```
WAITING

ACTIVE

PROCESSING

COMPLETED

FAILED

CANCELLED
```

---

# Analysis Progress States

User-facing:

```
Queued

↓

Analyzing Page

↓

Extracting Content

↓

Running Audit

↓

Generating Insights

↓

Completed
```

---

# Job Data Structure

Example:

```ts
{
 jobId:string,

 analysisId:string,

 userId:string,

 type:"PAGE_ANALYSIS",

 createdAt:Date
}
```

---

# Queue Design

Create:

```
analysisQueue
```

Future:

```
aiQueue

emailQueue

reportQueue
```

---

# Retry Strategy

Failed jobs should retry automatically.

Example:

```
Attempt 1

↓

Wait

↓

Attempt 2

↓

Wait

↓

Attempt 3

↓

Failed
```

---

# Retry Rules

Retry:

- Temporary network failures
- External API failures

Do not retry:

- Invalid URL
- Security rejection

---

# Error Handling

Every failed job must store:

```
errorCode

errorMessage

stackTrace

attemptCount
```

---

# Database Updates

Analysis lifecycle:

```
CREATED

↓

QUEUED

↓

PROCESSING

↓

COMPLETED

or

FAILED
```

---

# API Requirements

## Start Analysis

```
POST /api/analyses
```

Action:

- Create analysis
- Add queue job
- Return immediately

---

## Check Status

```
GET /api/analyses/{id}/status
```

Returns:

```json
{
  "status": "PROCESSING",
  "progress": 60,
  "stage": "Running Lighthouse Audit"
}
```

---

# Frontend Requirements

Create:

```
AnalysisProgressCard
```

Displays:

- Current status
- Progress bar
- Current stage
- Estimated state

---

# Progress UX

Example:

```
Analyzing your landing page

████████░░

80%

Running CRO checks
```

---

# Real-Time Updates

MVP:

Polling with RTK Query.

Future:

WebSockets / Server Sent Events.

---

# RTK Query Integration

Create:

```
analysisApi
```

Handles:

- Create analysis
- Get status
- Refresh progress

---

# Backend Architecture

Required services:

```
QueueService

WorkerService

ProgressService
```

---

# Repository Layer

Create:

```
JobRepository
```

Responsibilities:

- Store job information
- Track status
- Query failures

---

# Monitoring

Track:

- Queue size
- Failed jobs
- Processing time
- Worker health

---

# Logging

Log:

- Job created
- Job started
- Job completed
- Job failed
- Retry attempts

---

# Analytics Events

Track:

```
analysis_queued

analysis_processing_started

analysis_completed

analysis_failed
```

---

# Testing Requirements

## Queue Tests

Verify:

- Job creation
- Worker execution
- Retry handling

---

## Failure Tests

Test:

- Website timeout
- Browser crash
- AI failure

---

# AI Agent Responsibilities

## Architect Agent

Owns:

- Queue architecture
- Worker boundaries
- Scaling decisions

---

## Backend Developer Agent

Builds:

- Queue system
- Workers
- Progress APIs

---

## Code Reviewer Agent

Checks:

- Reliability
- Error handling
- Scalability
- Security

---

# Acceptance Criteria

Sprint complete when:

✅ Redis connected

✅ BullMQ configured

✅ Worker service exists

✅ Jobs can be queued

✅ Jobs execute asynchronously

✅ Progress tracking works

✅ Retry system works

✅ Failures are stored

---

# Definition of Done

The background system is complete when:

- Heavy operations no longer block APIs.
- Workers can scale independently.
- Users receive progress updates.
- Failed jobs can recover automatically.

---

# Dependencies

Requires:

```
01-foundation-architecture.md

05-url-analysis-engine.md
```

---

# Next Sprint

```
07-ai-analysis-engine.md
```

---

# Change History

## v1.0.0

- Created Redis and worker architecture sprint.
- Defined async processing system.
