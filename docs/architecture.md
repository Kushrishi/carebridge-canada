# CareBridge Canada — Architecture Documentation

## Purpose

This document describes the architecture direction for CareBridge Canada.

The current public MVP is a frontend-only synthetic demo. It uses React, TypeScript, deterministic utility functions, synthetic patient data, and GitHub Pages deployment to demonstrate the product workflow.

A future startup version would require a secure backend, authentication, consent controls, privacy safeguards, audit logs, source-grounded AI/RAG, safety rules, and carefully reviewed data handling before any real patient information is collected.

---

## Architecture Principle

CareBridge is a patient-owned healthcare continuity layer.

It is designed to help patients and caregivers:

* understand instructions;
* organize care tasks;
* track referrals, labs, medications, appointments, and open follow-ups;
* preserve source instructions;
* prepare questions for clinicians and pharmacists;
* create handoff summaries for doctors, pharmacists, family caregivers, and the patient’s own records.

CareBridge is not designed to replace healthcare professionals or make clinical decisions.

---

## Current MVP Architecture

The current MVP is intentionally simple and safe.

```text
Synthetic demo data
        ↓
TypeScript utility functions
        ↓
Rules-based summaries and tasks
        ↓
React components
        ↓
CareBridge UI / GitHub Pages
```

### Current MVP Characteristics

* Frontend-only React application.
* TypeScript data models.
* Synthetic patient scenario only.
* No real patient data.
* No backend.
* No authentication.
* No database.
* No provincial portal integration.
* No external AI API.
* No clinical decision-making.
* Deterministic rules simulate summary generation and task extraction.
* Automated tests validate core workflows.
* GitHub Pages hosts the public demo.

### Why This Is Deliberate

The public MVP is meant to demonstrate the workflow safely without collecting real personal health information.

It proves the product concept:

* appointment preparation;
* after-visit summary;
* follow-up tracker;
* Care Gap Radar;
* Care Passport;
* caregiver message;
* province-aware guidance;
* family translation mode;
* safety rules;
* evidence trace;
* trust center;
* problem research foundation.

It does not attempt to operate as a real production healthcare system.

---

## Future Production Architecture

A production version would use a more secure architecture.

```text
Client App
  React / PWA / Mobile
        ↓
API Gateway
        ↓
Backend Application
        ↓
Database + Object Storage
        ↓
Rules Engine + Audit Logs
        ↓
Optional AI/RAG Service
        ↓
Monitoring + Security + Privacy Controls
```

---

## Frontend Layer

The frontend would support:

* appointment preparation;
* after-visit instruction entry;
* follow-up task tracking;
* Care Passport generation;
* caregiver sharing;
* province-aware checklists;
* multilingual support;
* privacy/consent controls;
* user data export and deletion.

### Frontend Requirements

* Accessible keyboard navigation.
* Mobile-first layout.
* Clear safety boundaries.
* Source text always visible beside summaries.
* No hidden medical claims.
* Clear distinction between generated output and original instructions.
* Clear prompts to confirm medical decisions with qualified professionals.

---

## Backend API Layer

A future backend would expose API endpoints for authenticated users and patient-owned care records.

Possible endpoints:

```text
POST /auth/login
POST /auth/logout
GET  /me

GET  /care-records
POST /care-records
GET  /care-records/:id
PATCH /care-records/:id
DELETE /care-records/:id

POST /care-records/:id/source-notes
GET  /care-records/:id/source-notes

POST /care-records/:id/summaries
GET  /care-records/:id/summaries

GET  /care-records/:id/tasks
POST /care-records/:id/tasks
PATCH /tasks/:id

POST /care-records/:id/care-passport
POST /care-records/:id/caregiver-message

GET  /audit-logs
POST /privacy/export
POST /privacy/delete-account
```

The exact API design would change after privacy, security, legal, and product review.

---

## Core Data Model

A future production system would likely need these entities.

### User

Represents the person using CareBridge.

Fields could include:

* user ID;
* email or login identifier;
* authentication provider;
* consent status;
* account creation date;
* deletion/export settings.

### Patient Profile

Represents a patient-owned profile. In many cases, the user and patient may be the same person.

Fields could include:

* display name;
* preferred language;
* province;
* accessibility preferences;
* caregiver-sharing settings.

CareBridge should avoid collecting unnecessary identifiers, including health card numbers, unless there is a clear legal, privacy, and product reason later.

### Care Record

Represents a care thread or health situation the patient is tracking.

Examples:

* referral follow-up;
* medication question;
* specialist appointment;
* post-discharge instructions;
* lab or imaging follow-up;
* moving-province continuity.

Fields could include:

* care record ID;
* patient profile ID;
* title;
* province context;
* status;
* created date;
* updated date.

### Source Note

Represents original text entered or uploaded by the patient.

Examples:

* after-visit instructions;
* discharge notes;
* pharmacist instructions;
* appointment notes;
* referral instructions;
* patient-entered notes.

Fields could include:

* source note ID;
* care record ID;
* source label;
* source type;
* original text;
* upload metadata;
* created date.

### Generated Summary

Represents a generated plain-language output.

Fields could include:

* summary ID;
* care record ID;
* source note ID;
* summary type;
* generated text;
* generation method;
* safety review result;
* created date.

### Follow-Up Task

Represents a trackable care action.

Fields could include:

* task ID;
* care record ID;
* source note ID;
* title;
* category;
* status;
* due date;
* evidence text;
* safe prompt;
* created date;
* completed date.

### Care Passport

Represents a patient-owned handoff summary.

Fields could include:

* care passport ID;
* care record ID;
* generated text;
* intended audience;
* export format;
* created date.

### Caregiver Share

Represents a patient-controlled caregiver message or handoff.

Fields could include:

* caregiver share ID;
* care record ID;
* message text;
* share method;
* consent state;
* created date.

### Audit Log

Tracks what happened in the system.

Fields could include:

* audit log ID;
* user ID;
* care record ID;
* action type;
* source note ID;
* generated output ID;
* safety review result;
* timestamp.

---

## Safety Rules Engine

The safety rules engine is a core part of the architecture.

It defines what CareBridge can and cannot do.

### Allowed Lane

CareBridge can:

* summarize source instructions;
* organize appointment details;
* extract follow-up tasks;
* prepare questions;
* track care loops;
* create caregiver-friendly summaries;
* preserve source evidence;
* remind users to confirm medical decisions with professionals.

### Blocked Lane

CareBridge must not:

* diagnose conditions;
* recommend treatment;
* approve or reject prescriptions;
* change medication doses;
* interpret test results as medical advice;
* decide whether symptoms are urgent or non-urgent;
* replace doctors, nurses, pharmacists, clinics, hospitals, emergency services, or provincial systems.

### Rules Engine Output

For any generated summary or user request, the rules engine should be able to produce:

* allowed or blocked status;
* triggered safety rules;
* safe alternative;
* required disclaimer;
* audit log entry.

---

## Evidence Trace Layer

CareBridge should preserve traceability between original instructions and generated outputs.

A generated task should be explainable:

```text
Source instruction:
"Book spirometry when contacted."

Generated task:
"Track test booking, completion, and result discussion."

Reason:
A test instruction creates a follow-up loop that can be missed.

Safety boundary:
CareBridge tracks the process but does not interpret test results or diagnose.
```

This is important for trust, auditability, user understanding, and future AI safety.

---

## Future AI/RAG Layer

A future version could use AI and retrieval-augmented generation, but only as a source-grounded care-continuity assistant.

The AI layer should not be treated as the product. The continuity workflow is the product.

### Safe AI Use Cases

AI could help with:

* plain-language summaries;
* extracting follow-up tasks;
* identifying questions to ask;
* simplifying instructions for caregivers;
* translating or adapting language carefully;
* generating Care Passport drafts;
* creating pharmacist-ready questions.

### Unsafe AI Use Cases

AI should not be used to:

* diagnose;
* triage;
* recommend treatment;
* approve prescriptions;
* change medication instructions;
* interpret test results as clinical conclusions;
* replace medical professionals.

### Future RAG Flow

```text
Source note entered by patient
        ↓
Text cleaned and chunked
        ↓
Relevant source passages retrieved
        ↓
AI generates source-grounded draft
        ↓
Safety rules engine reviews output
        ↓
Evidence trace links output to source text
        ↓
Audit log records generation event
        ↓
Patient receives summary, tasks, questions, and handoff
```

### AI/RAG Requirements

A production AI/RAG system should require:

* source-grounded generation;
* citations to original user-provided text;
* safety filtering;
* uncertainty handling;
* refusal for clinical decision requests;
* audit logging;
* user-visible source text;
* privacy review;
* security review;
* human clinical/pharmacy review of safety language.

---

## Privacy and Consent Architecture

CareBridge should follow privacy-by-design principles.

### Privacy Principles

* Collect the minimum data required.
* Avoid unnecessary identifiers.
* Use patient-owned notes and explicit consent.
* Make caregiver sharing opt-in.
* Allow users to export data.
* Allow users to delete data.
* Keep audit logs for safety-sensitive generation events.
* Do not collect real health card numbers unless truly required later.
* Do not claim provincial portal integration unless integration exists.

### Consent Requirements

Before using real data, CareBridge would need clear consent flows for:

* account creation;
* storing care notes;
* generating summaries;
* sharing with caregivers;
* exporting Care Passports;
* deleting data;
* future AI processing, if used.

---

## Security Architecture

A real system would require security controls before collecting real patient information.

Required areas:

* secure authentication;
* encrypted data in transit;
* encrypted data at rest;
* secure session management;
* role-based access controls;
* audit logs;
* rate limiting;
* vulnerability management;
* dependency scanning;
* backup and recovery;
* incident response plan;
* data retention policy;
* access/delete/export workflows.

---

## Deployment Architecture

The current demo is deployed using GitHub Pages.

A real startup deployment would need a more secure setup.

Possible future deployment:

```text
Frontend:
Vercel / Netlify / Cloudflare Pages / managed static hosting

Backend:
Managed container service or app platform

Database:
Managed PostgreSQL

Object storage:
Encrypted document storage, if uploads are supported

Monitoring:
Application logs, error tracking, uptime monitoring

Security:
Secrets manager, access controls, audit logging
```

If real patient information is involved, hosting, vendor agreements, data residency, privacy law, and security review would need careful assessment.

---

## Current MVP vs Future Production System

| Area                 | Current MVP                          | Future Startup Version                                        |
| -------------------- | ------------------------------------ | ------------------------------------------------------------- |
| Data                 | Synthetic only                       | Patient-owned real data only after privacy/security readiness |
| Backend              | None                                 | Secure authenticated API                                      |
| Database             | None                                 | Encrypted database                                            |
| AI                   | None                                 | Source-grounded AI/RAG only if safety-reviewed                |
| Summary generation   | Deterministic TypeScript rules       | Rules + possible AI/RAG + audit logs                          |
| Safety               | Visible disclaimers and tested rules | Rules engine, review pipeline, audit logs                     |
| Export               | Copy/print demo                      | PDF, share links, data export                                 |
| Caregiver sharing    | Copy-ready message                   | Consent-based sharing                                         |
| Province integration | Guidance only                        | Only real integrations if legally and technically approved    |
| Deployment           | GitHub Pages                         | Secure production infrastructure                              |

---

## Production Readiness Checklist

Before any real patient data is collected, CareBridge would need:

* privacy review;
* legal review;
* security architecture;
* authentication;
* encrypted storage;
* consent model;
* audit logs;
* user data export;
* user data deletion;
* incident response plan;
* clinical/pharmacy safety language review;
* clear intended-use statement;
* no diagnosis/treatment/triage/prescription claims;
* documentation of what the system does and does not do.

---

## Architecture Non-Goals

CareBridge should not initially build:

* diagnosis engine;
* symptom checker;
* emergency triage system;
* prescription approval tool;
* treatment recommendation engine;
* replacement for provincial portals;
* replacement for EMRs;
* clinician-facing medical decision system;
* real provincial portal integration before legal and technical review.

---

## Summary

CareBridge Canada should evolve carefully.

The public MVP proves the care-continuity workflow with synthetic data. A future startup version would need secure backend infrastructure, patient-owned data controls, source-grounded generation, safety rules, audit logs, privacy safeguards, and clinical/pharmacy-reviewed boundaries.

The architecture goal is not to make CareBridge an AI doctor.

The architecture goal is to make CareBridge the safest and clearest patient-owned layer for understanding, organizing, tracking, and communicating care between healthcare visits.
