# CareBridge Canada v1.0 Release Notes

## Release summary

CareBridge Canada v1.0 is a synthetic, safety-bounded healthcare-continuity MVP.

The release demonstrated how a patient-owned continuity layer could help patients and caregivers prepare for visits, organize instructions, track follow-ups, preserve source text, and create handoff summaries without acting as a diagnosis, treatment, prescription, or emergency-triage tool.

## Core thesis at v1.0

Health portals show information. CareBridge turns information into action.

That principle remains useful, but the commercial wedge is no longer treated as settled. See the [current roadmap](roadmap.md) for the project's present technical and product direction.

## Implemented in v1.0

- Appointment preparation workflow
- After-visit summary workflow
- Generation-state feedback for summary actions
- Care task evidence trace
- Family translation mode
- Province-aware navigator
- Synthetic patient scenario library
- Trust and safety center
- Tested safety rules engine
- Action Graph timeline
- Care Gap Radar
- Follow-up tracker
- Care Passport handoff summaries
- Copyable Care Passport
- Print-optimized Care Passport
- Copy-ready caregiver message
- Summary generation transparency
- Problem research brief
- Architecture documentation
- Accessibility improvements
- Mobile-responsive layout
- CI and GitHub Pages deployment

## Safety boundaries

CareBridge Canada v1.0 does not:

- diagnose symptoms or conditions
- recommend treatment
- approve, reject, start, stop, or change prescriptions
- interpret test results as medical advice
- provide emergency triage
- replace doctors, nurses, pharmacists, clinics, hospitals, emergency services, or provincial systems
- use real patient data
- connect to provincial portals
- use an external AI API

## Technical scope at release

The public v1.0 MVP is a frontend-only React and TypeScript application.

It uses:

- React
- TypeScript
- Vite
- Vitest
- React Testing Library
- GitHub Actions
- GitHub Pages
- synthetic demo data
- deterministic TypeScript utility functions
- tested safety rules

## Direction at the v1.0 release — historical

At the time of the v1.0 release, the leading product hypothesis was after-visit continuity for patients and caregivers, and later phases were expected to add backend persistence, authentication, auditability, source-grounded AI, and stronger privacy/security controls.

That section is preserved here as historical context rather than the current roadmap. Since v1.0, deeper full-stack and AI-system work has moved to a separate private prototype, and the commercial wedge has been deliberately reopened for customer discovery rather than assuming the original B2C-oriented hypothesis is correct.

For current direction, see:

- [Public roadmap](roadmap.md)
- [Product thesis](product-thesis.md)
- [Validation plan](validation-plan.md)

## Release checklist

At release, the project met the following checks:

- Tests passed
- Production build passed
- GitHub Actions CI passed
- GitHub Pages deployed successfully
- Public demo used synthetic data only
- Safety boundaries were visible
- README and documentation were updated
