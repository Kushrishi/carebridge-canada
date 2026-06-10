# CareBridge Canada — Problem Research Brief

## Purpose

This document supports the CareBridge Canada problem thesis with external research and statistics.

It is not a product roadmap, architecture document, validation plan, safety policy, or implementation plan. Those are covered in separate project documents.

This file answers one question:

**What evidence suggests that patients and caregivers struggle with health literacy, after-visit instructions, follow-up loops, medication confusion, language barriers, and caregiver coordination?**

---

## Core Research Thesis

Patients often receive healthcare information without receiving a clear, trackable action plan.

CareBridge Canada is designed around the gap between:

* what a clinician, pharmacist, clinic, hospital, or portal communicates;
* what the patient understands;
* what the family or caregiver remembers;
* what still needs follow-up;
* and what must be confirmed with a qualified healthcare professional.

The product thesis remains:

**Health portals show information. CareBridge turns information into action.**

---

## 1. Health literacy is a major Canadian challenge

A Canadian public-health paper notes that nearly 60% of Canadians age 16 and older do not have the minimum health literacy level needed to fully understand the health information they receive. The issue is even more pronounced among seniors.

### Why this matters

If patients struggle to understand health information, access to records alone is not enough. Patients may still need help turning instructions, referrals, medication questions, labs, and follow-ups into plain-language next steps.

### CareBridge implication

CareBridge should help patients:

* simplify healthcare instructions into plain language;
* preserve the original source text beside any generated summary;
* prepare questions for doctors, nurses, pharmacists, clinics, or specialists;
* create family/caregiver-friendly explanations;
* avoid treating simplified summaries as medical decisions.

### Source

LeBrun et al. “Evaluating the Health Literacy Burden of Canada’s Public Health Leadership.”
https://pmc.ncbi.nlm.nih.gov/articles/PMC3834160/

---

## 2. Patients often misunderstand discharge and follow-up instructions

Research on emergency-department discharge instructions found poor patient understanding across multiple instruction categories. Poor understanding ranged from 24% for follow-up plans to 64% for return-to-emergency-department instructions. The same study found that 42% of patients did not receive complete discharge instructions.

### Why this matters

After a visit, patients may be uncertain about:

* what changed;
* what the next step is;
* when to follow up;
* who to contact;
* whether a referral was sent;
* whether a test or lab needs booking;
* what medication questions should be clarified;
* what information should be brought to the next appointment.

### CareBridge implication

CareBridge should prioritize after-visit continuity:

* plain-language summaries;
* extracted instructions;
* follow-up checklists;
* appointment timing prompts;
* referral, test, and lab tracking;
* pharmacist question preparation;
* evidence cards linked to source instructions.

### Source

Sheikh et al. “Patient understanding of discharge instructions in the emergency department: do different patients need different approaches?”
https://pmc.ncbi.nlm.nih.gov/articles/PMC5805670/

---

## 3. Missed test-result and follow-up loops are patient-safety problems

A BMJ Quality & Safety systematic review found that lack of follow-up of test results is a major safety issue. The review reported wide ranges of missed follow-up: 20.04% to 61.6% for inpatients and 1.0% to 75% for emergency-department patients, depending on the setting and study.

### Why this matters

Many healthcare actions are not one-time events. They are loops.

Example loop:

1. Test or referral is ordered.
2. Test or referral is booked or sent.
3. Patient is contacted.
4. Test or specialist visit happens.
5. Result or specialist feedback is received.
6. Result is reviewed.
7. Patient is told the next step.
8. Follow-up is completed.

If any step is missed, the patient can fall through the cracks.

### CareBridge implication

CareBridge should model healthcare continuity as open and closed loops.

The app should help patients track:

* referrals;
* labs;
* imaging;
* test results;
* follow-up appointments;
* medication questions;
* unresolved instructions;
* who the patient should contact if no update arrives.

### Source

Callen et al. “The safety implications of missed test results for hospitalised patients: a systematic review.”
https://qualitysafety.bmj.com/content/20/2/194

---

## 4. Medication confusion during care transitions is common

A care-transitions paper notes that after hospitalization, 24% of older adults do not fill new prescriptions, 14% experience medication discrepancies, and 46% are nonadherent to medications.

### Why this matters

Medication instructions can be confusing, especially after a hospital visit, family doctor visit, specialist appointment, pharmacy change, or discharge. Patients and caregivers may not know what to ask, who should clarify the medication, or which instructions are current.

### CareBridge implication

CareBridge should not recommend, approve, reject, start, stop, or change prescriptions.

CareBridge should instead:

* help patients prepare medication questions;
* preserve original medication instructions;
* encourage pharmacist or prescribing-clinician confirmation;
* track unresolved medication questions;
* create pharmacist-ready handoffs;
* keep medication support clearly separate from prescription decision-making.

### Source

Mixon et al. “Care Transitions: A Leverage Point for Safe and Effective Medication Use in Older Adults.”
https://pmc.ncbi.nlm.nih.gov/articles/PMC4479140/

---

## 5. Language barriers affect healthcare quality and safety

Canadian Institute for Health Information reporting found that patients who speak neither English nor French had a 30% higher rate of harmful events in Canadian hospitals compared with patients who speak either official language.

### Why this matters

Language barriers can make healthcare instructions harder to understand and harder to act on. Families may also act as informal interpreters or memory support, which can create risk if original instructions are not preserved.

### CareBridge implication

CareBridge should support multilingual families carefully by:

* keeping original source text visible;
* providing plain-language summaries;
* creating caregiver-friendly checklists;
* making translation safety boundaries explicit;
* warning that simplified or translated summaries should be checked against the original;
* encouraging confirmation with clinicians or pharmacists.

### Source

Canadian Institute for Health Information. “Patients with language barriers at higher risk of experiencing unintended hospital harm.”
https://www.cihi.ca/en/news/patients-with-language-barriers-at-higher-risk-of-experiencing-unintended-hospital-harm

---

## 6. Family caregivers are part of the healthcare continuity system

Statistics Canada has studied caregiving experiences using the 2018 General Social Survey on Caregiving and Care Receiving. This work examines caregiving activities, time spent caregiving, rewards, and stress among older caregivers in Canada.

### Why this matters

Family caregivers often help patients:

* remember appointment dates;
* track referrals;
* understand instructions;
* ask medication questions;
* prepare for appointments;
* monitor whether follow-up tasks were completed;
* communicate across family members.

However, caregivers may not have a clear shared action plan. They may rely on memory, screenshots, family chats, paper notes, or incomplete instructions.

### CareBridge implication

CareBridge should support caregivers without giving them clinical authority.

The app should provide:

* caregiver-friendly messages;
* family checklists;
* patient-owned sharing;
* safety reminders;
* task tracking;
* clear separation between support and medical decision-making.

### Source

Statistics Canada. “The experiences and needs of older caregivers in Canada.”
https://www150.statcan.gc.ca/n1/pub/75-006-x/2020001/article/00007-eng.htm

---

## Evidence Summary

The research supports the broad CareBridge problem thesis:

* Many patients struggle to understand health information.
* After-visit and discharge instructions are often misunderstood.
* Test-result and follow-up loops can be missed.
* Medication confusion is common during care transitions.
* Language barriers can increase patient-safety risk.
* Family caregivers are already helping manage continuity, often without structured tools.

This supports the need for a patient-owned continuity layer that helps people understand, organize, track, translate, and communicate care information safely.

---

## Startup Interpretation

The first startup wedge should not be diagnosis, symptom triage, treatment advice, or prescription management.

The strongest initial wedge is:

**After-visit continuity for patients and caregivers.**

This means CareBridge should focus first on:

1. turning after-visit instructions into plain-language summaries;
2. extracting follow-up tasks;
3. preserving source instructions beside generated outputs;
4. tracking open referral, lab, medication, appointment, and caregiver loops;
5. creating questions to ask clinicians or pharmacists;
6. generating Care Passports and caregiver messages;
7. keeping safety boundaries visible.

---

## Product Boundary Reinforced by Research

The research supports care-continuity support, not clinical decision replacement.

CareBridge should stay in this lane:

* summarize;
* organize;
* track;
* translate carefully;
* prepare questions;
* create handoffs;
* preserve evidence;
* encourage professional confirmation.

CareBridge should avoid:

* diagnosis;
* treatment recommendations;
* emergency triage;
* prescription approval;
* dose changes;
* test-result interpretation as clinical advice;
* claims of replacing clinicians, pharmacists, hospitals, clinics, or provincial systems.

---

## Research Gaps for Later

The existing research supports the broad problem, but future startup validation should still investigate:

* which user segment feels the strongest pain;
* whether patients trust a patient-owned continuity assistant;
* whether caregivers would use shared summaries;
* whether pharmacists find pharmacist-ready questions useful;
* whether users prefer copy/paste, PDF upload, photo scan, or voice input;
* whether users would pay for the product;
* whether the first go-to-market wedge should target caregivers, newcomers, patients moving provinces, medication confusion, or referral tracking.

These questions should be answered later through lightweight discovery, prototype testing, and carefully scoped pilots.

---

## References

1. LeBrun et al. “Evaluating the Health Literacy Burden of Canada’s Public Health Leadership.”
   https://pmc.ncbi.nlm.nih.gov/articles/PMC3834160/

2. Sheikh et al. “Patient understanding of discharge instructions in the emergency department: do different patients need different approaches?”
   https://pmc.ncbi.nlm.nih.gov/articles/PMC5805670/

3. Callen et al. “The safety implications of missed test results for hospitalised patients: a systematic review.”
   https://qualitysafety.bmj.com/content/20/2/194

4. Mixon et al. “Care Transitions: A Leverage Point for Safe and Effective Medication Use in Older Adults.”
   https://pmc.ncbi.nlm.nih.gov/articles/PMC4479140/

5. Canadian Institute for Health Information. “Patients with language barriers at higher risk of experiencing unintended hospital harm.”
   https://www.cihi.ca/en/news/patients-with-language-barriers-at-higher-risk-of-experiencing-unintended-hospital-harm

6. Statistics Canada. “The experiences and needs of older caregivers in Canada.”
   https://www150.statcan.gc.ca/n1/pub/75-006-x/2020001/article/00007-eng.htm
