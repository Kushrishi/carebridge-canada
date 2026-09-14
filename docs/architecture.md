# CareBridge Canada — Architecture

## Purpose

This document describes the architecture of the **public CareBridge demo** and the boundary between that demo and the separate private full-stack prototype.

The public repository is intentionally synthetic and frontend-only. It demonstrates care-continuity workflows without collecting real patient information or making clinical decisions.

## Core architectural idea

CareBridge is organized around continuity, not chat.

The useful system primitive is an action-oriented record of:

- what source information exists;
- what happened;
- what remains unresolved;
- what action is expected next;
- who owns that action;
- what evidence supports it; and
- whether the loop is still open or has been completed.

The interface may summarize or query that state, but the continuity workflow is the product concept.

## Public demo architecture

```text
Synthetic demo data
        |
        v
Typed TypeScript models
        |
        v
Deterministic continuity utilities
        |
        +--> summaries / follow-up tasks
        +--> safety rules
        +--> evidence traces
        |
        v
React interface
        |
        v
GitHub Pages
```

The public demo has:

- React + TypeScript + Vite;
- synthetic scenarios only;
- deterministic summary/task logic;
- appointment-preparation and after-visit workflows;
- follow-up and handoff views;
- explicit safety boundaries;
- automated tests and CI;
- no backend;
- no database;
- no authentication;
- no live external model;
- no real healthcare-system integration; and
- no real patient data.

This repository demonstrates product behavior. It is **not** presented as a production healthcare architecture or clinical validation.

## Public/private separation

A separate private startup lab explores the deeper full-stack architecture.

Publicly disclosed elements of that prototype include:

- FastAPI backend workflows;
- SQLite / SQLAlchemy persistence;
- source-note and retrieval workflows;
- structured outputs and validation;
- audit trails;
- backend-only model-provider controls; and
- bounded AI workflow evaluation.

The private prototype exists to test architecture and model-facing behavior with synthetic data. It does not establish production readiness, clinical effectiveness, or regulatory clearance.

## Action model

CareBridge should represent continuity items with enough structure to answer four questions reliably:

1. **What is the source?**
2. **What needs to happen next?**
3. **Who owns the next step?**
4. **Is the loop still open?**

A future normalized continuity item may contain fields such as:

```text
source
care_event
action
owner
status
expected_date
dependencies
evidence
escalation_or_follow_up_rule
```

The exact production data model is intentionally not frozen.

## Evidence and provenance

Derived outputs should remain traceable to source information.

For example:

```text
Source:
"Book spirometry when contacted."

Derived continuity item:
"Track whether spirometry is booked and completed."

Evidence:
The original instruction above.
```

The system should make it possible to distinguish:

- original source text;
- deterministic/model-derived structure;
- user edits; and
- current task state.

That distinction is important for auditability and for avoiding unsupported claims.

## Safety boundary

CareBridge may support non-clinical organization such as:

- summarizing provided instructions;
- preparing questions;
- tracking appointments, referrals, tests, and follow-ups;
- organizing medication questions for a pharmacist or prescriber;
- creating patient/caregiver handoffs; and
- showing the source evidence behind a continuity item.

CareBridge should not:

- diagnose;
- recommend treatment;
- approve, start, stop, or change prescriptions;
- provide emergency triage;
- interpret a test as a clinical conclusion; or
- replace licensed healthcare professionals.

The architecture should enforce this boundary rather than rely only on interface disclaimers.

## Current private evaluation direction

The next model-facing work is deliberately bounded.

The private prototype is testing whether a model can choose from a small registry of typed, deterministic continuity tools while preserving:

- schema-valid arguments;
- backend-controlled execution;
- source provenance;
- grounded output;
- explicit permission and safety boundaries;
- auditable traces; and
- measurable failure behavior.

The model does not receive arbitrary database access or unrestricted external actions.

This work is an engineering/evaluation milestone, not a claim that autonomous healthcare agents are appropriate.

## Production architecture is intentionally deferred

A real product handling patient information would require substantial additional work that the public prototype does not attempt to simulate as completed infrastructure, including:

- identity and authentication;
- consent and caregiver permissions;
- encryption and secrets management;
- data-retention/export/deletion controls;
- audit and incident-response processes;
- privacy and legal review;
- production monitoring and security controls;
- validated interoperability/integration work; and
- clear intended-use and regulatory analysis.

No real patient information should be introduced merely to make the prototype appear more production-like.

## Interoperability

FHIR / Canadian interoperability standards may become relevant if customer discovery validates a workflow that genuinely needs them.

They are **not** a current implementation requirement for the public demo. The project should not build speculative EHR or provincial-portal integrations before a validated use case justifies the complexity.

## Non-goals for the current phase

The current phase does not require:

- a generic healthcare chatbot;
- multi-agent orchestration;
- autonomous appointment booking or clinician messaging;
- production EHR integrations;
- a vector database without measured need;
- microservices or Kubernetes;
- real PHI; or
- diagnosis/treatment/triage features.

## Summary

The public CareBridge architecture should remain simple and inspectable. The private prototype is where bounded full-stack and model-tooling experiments happen.

The architectural objective is not to maximize AI usage. It is to determine whether source-grounded, auditable software can make unresolved care-continuity actions clearer without taking over clinical decision-making.
