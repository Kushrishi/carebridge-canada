# CareBridge Canada — Product Thesis

## Core thesis

Healthcare information can exist while the next action is still unclear.

CareBridge explores whether source-grounded software can make non-clinical continuity work easier to understand and track without taking over clinical decision-making.

## Product identity

CareBridge is best thought of as a **continuity action layer**, not a health-record replacement and not a general-purpose medical chatbot.

Its core job is to make four things explicit:

1. what happened;
2. what still needs to happen;
3. who owns the next step; and
4. what source evidence supports that state.

The underlying representation is an action-oriented continuity graph of source information, events, open actions, owners, status, dependencies, and handoffs.

## Current product loop

The existing prototype demonstrates a simple patient/caregiver loop:

```text
prepare for a visit
        ↓
organize what happened
        ↓
track unresolved follow-up
        ↓
carry context into the next handoff
```

This is a useful concept demonstration, not a frozen commercial wedge.

## What CareBridge should optimize for

The long-term value should come from reliably closing or clarifying continuity loops, not from maximizing chatbot usage.

Potentially useful outcomes include:

- fewer unresolved actions with unknown status;
- clearer ownership of the next step;
- less manual coordination work;
- fewer status-check calls/messages;
- better source provenance for summaries and handoffs; and
- more reliable transfer of context between patient, caregiver, and care team.

Which of these matters enough to support a company remains an open validation question.

## Product boundary

CareBridge may organize, summarize provided source material, track non-clinical follow-up, and prepare questions or handoffs.

Clinical decisions remain with patients and qualified healthcare professionals.

CareBridge should not diagnose, recommend treatment, provide emergency triage, or independently change/approve medication decisions.

## Commercial status

CareBridge is currently a **startup hypothesis**, not a launched product.

The first buyer, user segment, and workflow are intentionally unfrozen while customer discovery tests where continuity failures are frequent, expensive, measurable, and poorly handled by existing systems.

A provider-funded B2B2C referral/follow-up workflow is a leading hypothesis to test, not a committed product direction.

## North-star question

> **Can CareBridge make an unresolved care-continuity loop clearer, more traceable, and easier to close without making the clinical decision itself?**
