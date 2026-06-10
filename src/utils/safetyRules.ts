export type SafetyRuleId =
  | 'no-diagnosis'
  | 'no-treatment'
  | 'no-prescription-approval'
  | 'no-emergency-triage'
  | 'human-confirmation-required';

export type SafetyRule = {
  id: SafetyRuleId;
  title: string;
  allowedLane: string;
  blockedLane: string;
  safeAlternative: string;
};

export type SafetyReviewResult = {
  isAllowed: boolean;
  triggeredRules: SafetyRule[];
  safeAlternative: string;
};

export const safetyRules: SafetyRule[] = [
  {
    id: 'no-diagnosis',
    title: 'No diagnosis',
    allowedLane:
      'Help the patient describe symptoms, timeline, changes, and questions for a clinician.',
    blockedLane:
      'Do not identify a condition, rule out a condition, or tell the patient what they have.',
    safeAlternative:
      'Prepare a symptom summary and encourage confirmation with a qualified healthcare professional.',
  },
  {
    id: 'no-treatment',
    title: 'No treatment recommendation',
    allowedLane:
      'Help the patient organize instructions that were already given by a clinician or pharmacist.',
    blockedLane:
      'Do not recommend treatment, change care plans, or tell the patient what medical action to take.',
    safeAlternative:
      'Create questions the patient can ask their doctor, nurse, pharmacist, or clinic.',
  },
  {
    id: 'no-prescription-approval',
    title: 'No prescription approval',
    allowedLane:
      'Help the patient prepare medication questions and keep pharmacist instructions visible.',
    blockedLane:
      'Do not approve, reject, start, stop, change, or compare prescriptions as medical advice.',
    safeAlternative:
      'Direct medication questions to a pharmacist or prescribing clinician.',
  },
  {
    id: 'no-emergency-triage',
    title: 'No emergency triage',
    allowedLane:
      'Help the patient keep emergency instructions from official sources visible.',
    blockedLane:
      'Do not decide whether symptoms are urgent, non-urgent, safe, or unsafe.',
    safeAlternative:
      'For urgent or worsening symptoms, use local emergency services or a qualified healthcare professional.',
  },
  {
    id: 'human-confirmation-required',
    title: 'Human confirmation required',
    allowedLane:
      'Turn care information into summaries, tasks, evidence traces, and questions.',
    blockedLane:
      'Do not present generated content as a final clinical decision.',
    safeAlternative:
      'Keep source instructions beside summaries and ask users to confirm medical decisions with professionals.',
  },
];

const ruleTriggers: Record<SafetyRuleId, RegExp[]> = {
  'no-diagnosis': [
    /do i have/i,
    /diagnose/i,
    /what condition/i,
    /what disease/i,
    /is this asthma/i,
    /is this cancer/i,
  ],
  'no-treatment': [
    /how should i treat/i,
    /what treatment/i,
    /should i take/i,
    /what should i take/i,
    /should i do/i,
  ],
  'no-prescription-approval': [
    /change my dose/i,
    /stop my medication/i,
    /start this medication/i,
    /approve this prescription/i,
    /is this prescription right/i,
  ],
  'no-emergency-triage': [
    /is this an emergency/i,
    /should i go to the er/i,
    /should i go to emergency/i,
    /is this urgent/i,
    /can i wait/i,
  ],
  'human-confirmation-required': [
    /make the decision/i,
    /tell me exactly what to do/i,
    /final answer medically/i,
  ],
};

export function reviewCareBridgeRequest(input: string): SafetyReviewResult {
  const triggeredRules = safetyRules.filter((rule) =>
    ruleTriggers[rule.id].some((pattern) => pattern.test(input)),
  );

  if (triggeredRules.length === 0) {
    return {
      isAllowed: true,
      triggeredRules: [],
      safeAlternative:
        'This request stays in the care-continuity lane: summarize, organize, track, translate, or prepare questions.',
    };
  }

  return {
    isAllowed: false,
    triggeredRules,
    safeAlternative: triggeredRules[0].safeAlternative,
  };
}