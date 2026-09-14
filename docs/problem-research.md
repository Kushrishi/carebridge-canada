# CareBridge Canada — Problem Research Brief

## Purpose

This document records evidence for the **broad healthcare-continuity problem** that motivated CareBridge.

It does **not** establish that CareBridge has found the right product, customer, buyer, workflow, or business model. Those questions require direct customer discovery and product validation.

The narrow thesis supported by the sources below is that patients and caregivers can face difficulty understanding instructions, completing follow-up loops, coordinating medication questions, crossing language barriers, and maintaining continuity across people and settings.

## 1. Health literacy

Canadian public-health literature has documented substantial health-literacy challenges, particularly for older adults and people navigating complex health information.

**CareBridge implication:** access to records alone may not be enough. A continuity tool may need to preserve source material while helping users organize instructions and prepare questions in clearer language.

Source:

LeBrun et al., “Evaluating the Health Literacy Burden of Canada’s Public Health Leadership.”  
https://pmc.ncbi.nlm.nih.gov/articles/PMC3834160/

## 2. After-visit and discharge understanding

Research on emergency-department discharge instructions has found meaningful gaps in patient understanding across follow-up and return-instruction categories.

**CareBridge implication:** after-visit information may be a useful source for structured next-step tracking, but a summary feature by itself should not be assumed to be a differentiated product.

Source:

Sheikh et al., “Patient understanding of discharge instructions in the emergency department: do different patients need different approaches?”  
https://pmc.ncbi.nlm.nih.gov/articles/PMC5805670/

## 3. Missed follow-up loops

A systematic review in *BMJ Quality & Safety* documented missed follow-up of test results across hospital and emergency settings and treated failure to follow up results as a patient-safety concern.

A healthcare action is often a loop rather than a single event:

```text
order / referral
      ↓
sent or booked
      ↓
visit / test completed
      ↓
result or specialist feedback received
      ↓
reviewed
      ↓
patient informed
      ↓
next action completed
```

**CareBridge implication:** the stronger product primitive may be explicit open/closed continuity state rather than a general-purpose health chatbot.

Source:

Callen et al., “The safety implications of missed test results for hospitalised patients: a systematic review.”  
https://qualitysafety.bmj.com/content/20/2/194

## 4. Medication questions during transitions

Care-transition literature has documented medication discrepancies and adherence problems after hospitalization.

**CareBridge implication:** software may help preserve instructions and organize questions for pharmacists or prescribers, but it should not recommend, approve, start, stop, or modify medication therapy.

Source:

Mixon et al., “Care Transitions: A Leverage Point for Safe and Effective Medication Use in Older Adults.”  
https://pmc.ncbi.nlm.nih.gov/articles/PMC4479140/

## 5. Language barriers

Canadian reporting has linked language barriers with increased risk of unintended hospital harm.

**CareBridge implication:** language accessibility matters, but translated or simplified material should remain traceable to original source information and should not be presented as independent clinical interpretation.

Source:

Canadian Institute for Health Information, “Patients with language barriers at higher risk of experiencing unintended hospital harm.”  
https://www.cihi.ca/en/news/patients-with-language-barriers-at-higher-risk-of-experiencing-unintended-hospital-harm

## 6. Family caregivers

Statistics Canada has documented the scope and burden of unpaid caregiving. Caregivers often participate in appointment logistics, communication, reminders, and day-to-day coordination.

**CareBridge implication:** caregiver-facing continuity views may be useful, but patient consent, ownership, and role boundaries matter.

Source:

Statistics Canada, “The experiences and needs of older caregivers in Canada.”  
https://www150.statcan.gc.ca/n1/pub/75-006-x/2020001/article/00007-eng.htm

## What this evidence does and does not support

The literature supports the broad premise that continuity work can be difficult:

- information may be hard to understand;
- follow-up loops can be missed;
- medication questions can remain unresolved;
- language can create additional friction; and
- caregivers already perform substantial coordination work.

It does **not** show that:

- patients will pay for CareBridge;
- after-visit summaries are the right first product;
- an AI assistant is preferable to deterministic workflow software;
- a consumer app is the right distribution model;
- a specific clinic/provider segment will buy the product; or
- CareBridge improves clinical outcomes.

Those remain open questions.

## Current startup hypothesis

The commercial wedge is intentionally **unfrozen**.

The next discovery phase should test which non-clinical continuity failures are frequent, costly, measurable, and owned by a plausible buyer.

A leading hypothesis worth testing is provider-funded, B2B2C closed-loop referral/follow-up work. It is not yet a product decision.

The project should be willing to pivot if interviews show that another continuity workflow has clearer pain and economics, or to freeze the startup thesis if existing products/workflows already solve the problem adequately.

## Current product boundary

CareBridge remains in the non-clinical continuity lane:

- organize source information;
- surface unresolved actions;
- preserve provenance;
- track status and ownership;
- prepare questions;
- support patient/caregiver handoffs; and
- encourage appropriate professional confirmation.

It should avoid:

- diagnosis;
- treatment recommendations;
- emergency triage;
- prescription approval or dose changes;
- independent clinical interpretation of results; and
- claims that it replaces clinicians, pharmacies, hospitals, clinics, or health-system infrastructure.

## Research gaps that matter next

The highest-value unanswered questions are operational and commercial:

- Which continuity failure occurs most often in a specific workflow?
- Who currently notices and repairs it?
- How much staff or patient time does that consume?
- What existing software is supposed to handle it?
- Why does that workflow still fail?
- Which outcome would a buyer actually pay to improve?
- What integration/procurement burden would adoption require?
- What actions must remain human-controlled?

These questions should be answered through concrete workflow interviews and narrowly scoped validation rather than by adding more public-demo features.
