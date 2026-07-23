---
title: Sprint 05 - URL Analysis Engine
version: 1.0.0
owner: Backend Engineering Lead
status: Planned
category: Sprint Planning
priority: Critical
ai_read_required: true
last_updated: 2026-07-21
---

# Sprint 05 — URL Analysis Engine

## Sprint Goal

Build the website analysis engine that collects all required information from a landing page before AI processing.

The analysis engine is responsible for transforming a URL into a structured analysis dataset.

---

# Sprint Objectives

By the end of this sprint:

- Users can submit valid URLs.
- System can fetch landing pages.
- HTML content can be extracted.
- Screenshots can be generated.
- CSS information can be collected.
- Metadata can be extracted.
- Lighthouse audit data can be captured.
- Analysis records are stored.

---

# Analysis Philosophy

The product should analyze pages like a professional CRO consultant.

The analysis must understand:

- Visual presentation
- Messaging
- Conversion elements
- Technical quality
- SEO basics
- Performance

---

# Supported Analysis Type

MVP:

```
HTML

+

Screenshot

+

CSS

+

Lighthouse

+

Metadata
```

---

# Supported Pages

Default:

Landing pages

---

The system should be generic enough to support:

Future:

- SaaS homepages
- Product pages
- Pricing pages
- Shopify PDPs
- Webflow pages

---

# Analysis Flow

```
Create Analysis

↓

Validate URL

↓

Create Analysis Record

↓

Queue Processing Job

↓

Fetch Page

↓

Capture Screenshot

↓

Extract HTML

↓

Extract CSS

↓

Collect Metadata

↓

Run Lighthouse

↓

Save Results
```

---

# Analysis Data Model

Collection:

```
analyses
```

---

Fields:

```ts
{
 id:string,

 userId:string,

 url:string,

 status:string,

 analysisType:string,

 screenshotUrl:string,

 htmlData:{},

 cssData:{},

 metadata:{},

 lighthouseData:{},

 createdAt:Date,

 updatedAt:Date
}
```

---

# Analysis Status

Supported:

```
CREATED

QUEUED

PROCESSING

COMPLETED

FAILED
```

---

# URL Validation

Requirements:

Validate:

- URL format
- Protocol
- Domain availability

Reject:

- Invalid URLs
- Localhost URLs
- Private IP addresses

---

# Security Requirements

The crawler must protect against:

- SSRF attacks
- Internal network access
- Malicious URLs
- Infinite redirects

---

# URL Safety Rules

Block:

```
localhost

127.0.0.1

private IP ranges

internal domains
```

---

# HTML Extraction

Collect:

- Page structure
- Headings
- Text content
- Links
- Images
- Buttons
- Forms

---

# Screenshot System

Requirement:

Capture full page screenshot.

Process:

```
Open Browser

↓

Load Page

↓

Wait For Network Idle

↓

Capture Screenshot

↓

Store Temporarily

```

---

# Screenshot Storage Rule

MVP:

```
Capture

↓

Analyze

↓

Delete
```

Screenshots should not be permanently stored unless required.

---

# Browser Automation

Recommended:

Puppeteer

or

Playwright

---

# CSS Analysis

Collect:

- Colors
- Typography
- Spacing
- Layout patterns
- Responsive information

---

# Metadata Extraction

Collect:

SEO:

- Title
- Description
- Open Graph tags

Technical:

- Canonical URL
- Robots information

---

# Lighthouse Integration

Collect:

Performance:

- Performance score
- Accessibility score
- SEO score
- Best practices score

---

# Backend Architecture

Required services:

```
AnalysisService

CrawlerService

ScreenshotService

MetadataService

LighthouseService
```

---

# Repository Layer

Create:

```
AnalysisRepository
```

Responsibilities:

- Create analysis
- Update status
- Save results
- Fetch history

---

# API Endpoints

---

## Create Analysis

```
POST /api/analyses
```

Request:

```json
{
  "url": "https://example.com"
}
```

Response:

```json
{
  "analysisId": "an_xxxxx",
  "status": "QUEUED"
}
```

---

## Get Analysis Status

```
GET /api/analyses/{id}
```

---

# Processing Architecture

This sprint prepares for:

Background jobs.

Do not perform long analysis directly inside HTTP requests.

---

# Error Handling

Handle:

- Website unavailable
- Timeout
- Browser failure
- Lighthouse failure
- Invalid content

---

# Logging

Log:

- Analysis start
- URL
- Duration
- Failures
- External service errors

---

# Performance Requirements

Targets:

Initial request:

< 500ms

Processing:

Async

---

# Analytics Events

Track:

```
analysis_started

analysis_created

analysis_failed
```

---

# Testing Requirements

## Backend Tests

Test:

- URL validation
- Analysis creation
- Repository methods
- Service errors

---

## Security Tests

Test:

- SSRF prevention
- Invalid URLs
- Timeout handling

---

# AI Agent Responsibilities

## Architect Agent

Reviews:

- Crawler architecture
- Security decisions
- Data model

---

## Backend Agent

Implements:

- Services
- APIs
- Repository

---

## Code Reviewer Agent

Checks:

- Security
- Performance
- Clean architecture

---

# Acceptance Criteria

Sprint complete when:

✅ URL submission works

✅ Analysis record created

✅ Page crawling works

✅ Screenshot generated

✅ HTML extracted

✅ CSS extracted

✅ Metadata collected

✅ Lighthouse data stored

✅ Errors handled safely

---

# Definition of Done

The analysis engine is complete when:

- A URL can be converted into structured analysis data.
- The system is ready for AI processing.
- Architecture supports background processing.

---

# Dependencies

Requires:

```
01-foundation-architecture.md

04-dashboard-application-shell.md
```

---

# Next Sprint

```
06-background-job-system.md
```

---

# Change History

## v1.0.0

- Created URL analysis engine sprint.
- Defined CRO data collection pipeline.
