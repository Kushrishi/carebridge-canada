# CareBridge Canada — Public Roadmap

## Status

The original public-demo roadmap is complete.

The `carebridge-canada` repository now serves as a stable, synthetic product concept and portfolio artifact. It should not keep accumulating features simply to make the demo larger.

The deeper full-stack and AI-system work is intentionally separated into a private startup lab.

## Completed public-demo milestones

The public v1.0 demo established:

- React + TypeScript + Vite application shell
- synthetic care scenarios
- appointment preparation
- after-visit organization
- follow-up tracking
- evidence traces
- caregiver-oriented summaries
- province-aware preparation guidance
- Care Passport handoffs
- deterministic safety rules
- automated tests and CI
- deployed GitHub Pages demo

These features are considered complete enough for the public concept demo.

## Current technical direction

Current engineering work is happening in the private prototype, not this repository.

The next bounded technical question is whether model-directed routing can use a small set of typed, deterministic continuity tools while preserving:

- valid tool arguments;
- provenance;
- grounding;
- explicit safety boundaries;
- deterministic backend execution;
- auditable failure behavior; and
- measurable latency/cost.

The public repository should only be updated when a completed private milestone produces evidence worth communicating publicly.

## Current product direction

The broad continuity problem remains the product thesis, but the commercial wedge is intentionally **not frozen**.

The project should not assume that the first customer is a direct-to-consumer patient user or that after-visit summaries are sufficient differentiation.

Customer discovery should test which continuity failures are:

- frequent;
- operationally painful;
- poorly handled by existing systems;
- measurable; and
- owned by a buyer with budget and motivation to improve them.

A leading hypothesis to investigate is provider-funded, B2B2C closed-loop referral/follow-up work, but this is a hypothesis rather than a committed roadmap.

## Explicit non-goals for the next phase

Do not add to the public demo merely for breadth.

The next phase does **not** require:

- real patient data;
- production EHR or provincial-portal integrations;
- diagnosis, treatment, prescription, or triage features;
- a generic healthcare chatbot;
- autonomous external actions;
- a mobile app;
- a multi-agent framework;
- microservices or Kubernetes;
- a vector database without evidence that one is needed; or
- another UI redesign.

## Update rule

The public demo should remain stable until one of the following creates a real reason to update it:

1. a completed and evaluated private technical milestone;
2. customer discovery identifies a materially different product wedge;
3. a real interoperability/integration experiment becomes justified; or
4. the project is frozen or redirected based on evidence.

The goal is to accumulate **technical or customer evidence**, not version numbers.
