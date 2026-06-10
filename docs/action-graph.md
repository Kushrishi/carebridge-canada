# CareBridge Action Graph

The CareBridge Action Graph is the core system behind the app.

CareBridge should not only store notes. It should connect healthcare information into an action-oriented graph.

## Purpose

The Action Graph connects:

- concerns
- symptoms
- appointments
- instructions
- tasks
- referrals
- labs
- imaging
- medications
- pharmacist questions
- family summaries
- translations
- province-specific navigation
- evidence cards
- care gaps

## Example

Shortness of breath concern

→ mentioned at appointment  
→ spirometry suggested  
→ respirology referral pending  
→ follow-up due in four weeks  
→ symptoms changed  
→ question added for next doctor visit  
→ family explanation translated  
→ Care Passport updated  

## Why this matters

Most apps store information.

CareBridge should connect information to unfinished loops and next actions.

This makes the product different from a generic AI chatbot or static health notes app.

## Action Graph object types

Initial object types:

- PatientProfile
- CareConcern
- Appointment
- SymptomEntry
- CareInstruction
- FollowUpTask
- ReferralItem
- LabImagingItem
- MedicationItem
- PharmacistQuestion
- FamilySummary
- TranslationItem
- EvidenceCard
- CareGap
- CarePassport

## Care Gap Radar

The Care Gap Radar should scan the Action Graph for unfinished loops.

Examples:

- referral still pending
- lab work not booked
- imaging not scheduled
- follow-up appointment missing
- medication question unresolved
- instruction not translated for family
- symptom changed since last visit
- doctor question still unanswered

Care Gap Radar should not diagnose.

It should only flag organization and follow-up issues.

Safe wording:

This may be worth following up with your clinic, pharmacist, or healthcare provider.