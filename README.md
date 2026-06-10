# CareBridge Canada

![CareBridge Canada CI](https://github.com/Kushrishi/carebridge-canada/actions/workflows/ci.yml/badge.svg)
![Deploy CareBridge Canada](https://github.com/Kushrishi/carebridge-canada/actions/workflows/deploy.yml/badge.svg)

**Live demo:** https://kushrishi.github.io/carebridge-canada/

**Never lose the thread of your care.**

CareBridge Canada is a patient-owned healthcare continuity platform concept that helps Canadians prepare for appointments, understand care instructions, track follow-ups, support family caregivers, and generate clinician-ready handoff summaries.

This is not an AI doctor. It does not diagnose, prescribe, approve treatment, or replace clinicians, pharmacists, hospitals, emergency services, or provincial health portals.

## Product thesis

Health portals show information. CareBridge turns information into action.

Many patients leave healthcare visits with fragmented instructions, pending referrals, unclear follow-ups, medication questions, language barriers, or family members who need to help but do not have a clear summary. CareBridge Canada is designed as a continuity layer that helps patients organize the thread of care between visits.

## Current MVP

The current MVP is a frontend prototype built with React, TypeScript, Vite, and automated tests. It uses synthetic data only.

Implemented product sections:

* **Appointment preparation** — turns patient concerns, medication notes, and follow-up questions into a structured pre-visit summary.
* **After-visit summary** — converts pasted synthetic instructions into plain-language next steps, questions, and evidence cards.
* **Family translation mode** — creates caregiver-friendly summaries with simulated Punjabi, Hindi, French, and Urdu support.
* **Province-aware navigator** — provides Canada-first preparation guidance for British Columbia, Alberta, Saskatchewan, Ontario, and Quebec.
* **Action Graph timeline** — connects appointments, referrals, tests, prescriptions, and follow-up tasks.
* **Follow-up tracker** — highlights unresolved care gaps and pending next steps.
* **Care Passport** — generates patient-owned handoff summaries for doctors, pharmacists, and family caregivers.

## Safety boundaries

CareBridge Canada is intentionally designed with strict healthcare safety boundaries.

It does not:

* diagnose symptoms
* recommend treatment
* approve or change prescriptions
* replace doctors, nurses, pharmacists, hospitals, clinics, or emergency services
* claim integration with provincial portals
* store real patient data in the MVP

It does:

* organize patient-owned notes
* prepare questions for appointments
* summarize instructions in plain language
* track follow-up tasks
* support caregiver communication
* preserve original source text beside generated summaries
* remind users to confirm medical decisions with qualified healthcare professionals

## Why this matters

Patients often fall through the cracks not because no information exists, but because the next step is unclear.

CareBridge focuses on continuity problems such as:

* “What did the doctor tell me to do?”
* “What should I ask at my next appointment?”
* “Was the referral actually sent?”
* “Who is supposed to call next?”
* “Did someone explain the lab or imaging result?”
* “How do I help my parent understand their care plan?”
* “What should I bring when I move provinces or see a new provider?”

## Technical architecture

Current implementation:

* React
* TypeScript
* Vite
* Vitest
* React Testing Library
* GitHub Actions CI
* GitHub Pages deployment

Planned future architecture:

* Python FastAPI backend
* SQLite or PostgreSQL persistence
* retrieval-augmented generation over patient-owned notes
* rules engine for follow-up detection and safety boundaries
* translation support with original text preservation
* exportable PDF care summaries
* stronger accessibility and mobile PWA support

## Project structure

```txt
src/
  components/        Product UI sections
  data/              Synthetic demo care graph
  test/              Test setup
  types/             Shared TypeScript types
  utils/             Deterministic care logic and summary generation

docs/
  action-graph.md
  privacy-and-data-principles.md
  problem-statement.md
  product-thesis.md
  roadmap.md
  safety-boundaries.md
  synthetic-personas.md
  validation-plan.md
```

## Validation

The project includes automated tests for:

* app navigation
* appointment preparation
* after-visit summarization
* family translation mode
* province guidance
* care timeline generation
* follow-up tracking
* Care Passport handoff summaries

Run locally:

```bash
npm install
npm test
npm run build
npm run dev
```

GitHub Actions automatically runs tests and builds the app on every push.

## Status

CareBridge Canada is currently a portfolio-grade MVP prototype. The next development milestones are:

1. Add export-ready Care Passport summaries.
2. Add stronger mobile PWA polish.
3. Add province-specific disclaimer cards.
4. Add synthetic user scenarios.
5. Add backend persistence.
6. Add RAG over patient-owned notes.
7. Add PDF export.
8. Add accessibility review and keyboard navigation improvements.

## Disclaimer

CareBridge Canada is a software prototype for healthcare continuity, organization, and communication support. It is not a medical device, clinical decision system, diagnostic tool, prescription tool, or substitute for professional medical advice.
