# CareBridge Canada

![CareBridge Canada CI](https://github.com/Kushrishi/carebridge-canada/actions/workflows/ci.yml/badge.svg)

**Live demo:** GitHub Pages deployment in progress.

**Never lose the thread of your care.**

CareBridge Canada is a patient-owned care continuity layer that turns appointments, instructions, referrals, medications, labs, symptoms, and family questions into a living action plan.

It helps Canadians prepare before visits, understand after visits, follow through between visits, translate care for family, and generate useful handoffs for doctors, nurses, and pharmacists.

## Core thesis

Health portals show information.

**CareBridge turns information into action.**

Canadian healthcare can be fragmented across family doctors, walk-in clinics, specialists, pharmacists, labs, imaging, hospitals, provincial portals, referrals, discharge instructions, and family caregivers. Patients are often expected to remember and connect everything themselves.

CareBridge is designed to help patients not fall through those gaps.

## What CareBridge is

CareBridge is a patient-owned healthcare continuity platform focused on:

- appointment preparation
- after-visit summaries
- follow-up task tracking
- referral, lab, imaging, and medication organization
- doctor-ready and pharmacist-ready handoffs
- family caregiver summaries
- plain-language explanations
- translated care checklists
- province-aware Canadian healthcare navigation

## What CareBridge is not

CareBridge is not:

- an AI doctor
- a diagnosis app
- a treatment recommendation engine
- a prescription approval bot
- an emergency triage system
- a replacement for doctors, nurses, pharmacists, hospitals, clinics, or provincial health portals

CareBridge supports understanding, preparation, communication, and follow-up. It does not replace clinical judgment.

## Main product loop

CareBridge is built around the **Before / After / Between** care loop.

### Before the visit

Prepare:

- main concern
- symptom timeline
- medication list
- questions
- what changed since last visit
- doctor-ready 30-second summary

### After the visit

Convert instructions into:

- plain-language summary
- follow-up checklist
- tasks with due dates
- pharmacist questions
- family/caregiver checklist
- translated explanation

### Between visits

Track:

- referrals
- labs
- imaging
- medications
- follow-up appointments
- unresolved questions
- symptom changes
- care gaps

### Next visit

Generate:

- what changed since last visit
- completed tasks
- pending tasks
- unresolved questions
- care-gap summary
- updated Care Passport

## Differentiation

CareBridge is not a generic AI health chatbot.

The unique idea is that CareBridge acts as a **patient-owned action layer between healthcare visits**.

The system turns fragmented healthcare moments into connected next steps.

## Core systems

### Care Passport

A patient-owned summary that can be shown to a doctor, pharmacist, specialist, walk-in clinic, emergency department, or family caregiver.

### What Changed Since Last Visit?

A pre-appointment summary showing new symptoms, worsened symptoms, improved symptoms, medication changes, completed tasks, pending tasks, unanswered questions, and pending referrals/labs.

### Closed-Loop Follow-Up Tracker

A tracker that asks whether care tasks were completed, are still pending, or need follow-up with a clinic, pharmacist, or healthcare provider.

### CareBridge Action Graph

The deeper system behind the app. It connects concerns, appointments, instructions, tasks, referrals, labs, imaging, medications, pharmacist questions, family summaries, translations, and province-specific navigation.

### Care Gap Radar

A safe unfinished-loop detector. It flags pending referrals, overdue labs, missing follow-ups, unresolved medication questions, untranslated instructions, and unanswered appointment questions.

### Evidence Cards

Every generated summary should show what it was based on, such as appointment notes, pasted instructions, saved tasks, or province guidance.

## MVP scope

The first version uses synthetic data only.

The MVP will prove whether CareBridge can:

- turn messy healthcare information into clear next steps
- help patients prepare for appointments
- track follow-ups
- create doctor/pharmacist/family handoffs
- support family translation workflows
- identify unfinished care loops safely

## Initial tech direction

Phase 1:

- React
- TypeScript
- Vite
- mobile-first PWA design
- synthetic data
- local state
- Vitest testing

Later phases:

- FastAPI backend
- SQLite/PostgreSQL database
- AI summarization
- RAG over trusted guidance and user notes
- encrypted user accounts
- PDF export
- iOS/Android via Expo React Native or native mobile rebuild

## Safety principle

CareBridge supports understanding, preparation, communication, and follow-up.

It does not diagnose, treat, approve prescriptions, provide emergency triage, or replace clinical judgment.