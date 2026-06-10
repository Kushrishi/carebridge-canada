export type SyntheticScenario = {
  id: string;
  title: string;
  patientContext: string;
  careChallenge: string;
  careBridgeUse: string[];
  riskIfMissed: string;
  safetyBoundary: string;
};

export const syntheticScenarios: SyntheticScenario[] = [
  {
    id: 'newcomer-family-support',
    title: 'Newcomer family preparing for a clinic visit',
    patientContext:
      'A newcomer patient is attending a primary care appointment with a family member helping them understand instructions.',
    careChallenge:
      'The patient has questions about medication timing, follow-up instructions, and what to ask during the appointment.',
    careBridgeUse: [
      'Prepare appointment questions before the visit.',
      'Create a plain-language after-visit summary.',
      'Generate a caregiver-friendly family summary.',
      'Keep original instructions beside any translated explanation.',
    ],
    riskIfMissed:
      'Instructions may be misunderstood, follow-up tasks may not be completed, and family support may rely on memory instead of a clear care plan.',
    safetyBoundary:
      'CareBridge supports understanding and communication only. Medication or treatment decisions must be confirmed with a clinician or pharmacist.',
  },
  {
    id: 'older-adult-caregiver',
    title: 'Older adult with family caregiver support',
    patientContext:
      'An older adult has multiple appointments and a family caregiver helping track questions, referrals, and medication concerns.',
    careChallenge:
      'Care information is spread across visits, phone calls, pharmacy conversations, and family notes.',
    careBridgeUse: [
      'Track open follow-ups after appointments.',
      'Summarize what changed since the last visit.',
      'Create a Care Passport for the next clinician or pharmacist.',
      'Identify unresolved care gaps before the next appointment.',
    ],
    riskIfMissed:
      'Pending referrals, unclear medication instructions, or unreviewed results may be forgotten between visits.',
    safetyBoundary:
      'CareBridge does not replace clinical judgment. It helps the patient and caregiver organize what to ask and what to confirm.',
  },
  {
    id: 'moving-provinces',
    title: 'Patient moving between provinces',
    patientContext:
      'A patient is moving from one province to another for work or school while still having open referrals, medication questions, or pending tests.',
    careChallenge:
      'The patient needs a portable summary because coverage, providers, and record access may change during the move.',
    careBridgeUse: [
      'Generate province-aware preparation guidance.',
      'Create a portable Care Passport.',
      'Track which follow-ups are still unresolved.',
      'Prepare questions for a new clinic, pharmacist, or care team.',
    ],
    riskIfMissed:
      'The patient may lose track of previous instructions, pending tests, or who was responsible for the next step.',
    safetyBoundary:
      'CareBridge does not verify health coverage or replace official provincial systems. Patients must confirm coverage and care access through official sources.',
  },
  {
    id: 'after-visit-confusion',
    title: 'Patient unsure what to do after a visit',
    patientContext:
      'A patient leaves an appointment with instructions, a possible referral, and lab work but is unsure what should happen next.',
    careChallenge:
      'The patient needs to distinguish between what to do now, what to monitor, what to ask, and when to follow up.',
    careBridgeUse: [
      'Convert instructions into plain-language next steps.',
      'Create questions to ask the clinic or pharmacist.',
      'Track referral and lab follow-up status.',
      'Keep a safety reminder visible beside generated summaries.',
    ],
    riskIfMissed:
      'The patient may wait passively, miss a follow-up window, or assume someone else is handling the next step.',
    safetyBoundary:
      'CareBridge does not provide diagnosis, triage, or treatment advice. It organizes instructions and prompts the patient to confirm unclear items.',
  },
];