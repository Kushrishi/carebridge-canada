export type ExportReadyPassportSection = {
  title: string;
  items: string[];
};

export type ExportReadyPassport = {
  patientLabel: string;
  generatedDateLabel: string;
  purpose: string;
  sections: ExportReadyPassportSection[];
  safetyNote: string;
};

export const demoExportReadyPassport: ExportReadyPassport = {
  patientLabel: 'Synthetic patient: Maya S.',
  generatedDateLabel: 'Generated for demo use',
  purpose:
    'A patient-owned summary for the next appointment, pharmacy visit, or family caregiver handoff.',
  sections: [
    {
      title: 'Current care thread',
      items: [
        'Recent primary care visit created follow-up tasks for medication review, lab work, and referral tracking.',
        'Patient wants a clear explanation of what happens next and who is responsible for each step.',
      ],
    },
    {
      title: 'Open follow-ups',
      items: [
        'Confirm whether the specialist referral was sent and where it was sent.',
        'Confirm whether lab results have been reviewed with a clinician.',
        'Ask pharmacist to review medication instructions and possible timing confusion.',
      ],
    },
    {
      title: 'Questions to ask',
      items: [
        'What is the most important next step before the next appointment?',
        'Who should the patient contact if no referral update arrives?',
        'Which medication instructions should be followed exactly as written?',
      ],
    },
    {
      title: 'Family or caregiver notes',
      items: [
        'Family can help track appointment dates, referral calls, medication questions, and lab follow-up.',
        'Original clinician instructions should be kept beside any plain-language or translated summary.',
      ],
    },
  ],
  safetyNote:
    'CareBridge Canada does not diagnose, treat, approve prescriptions, or replace healthcare professionals. Confirm medical decisions with qualified clinicians or pharmacists.',
};

export function formatExportReadyPassport(
  passport: ExportReadyPassport,
): string {
  const sectionText = passport.sections
    .map((section) => {
      const items = section.items.map((item) => `- ${item}`).join('\n');

      return `${section.title}\n${items}`;
    })
    .join('\n\n');

  return [
    'CAREBRIDGE CANADA CARE PASSPORT',
    passport.patientLabel,
    passport.generatedDateLabel,
    '',
    'Purpose',
    passport.purpose,
    '',
    sectionText,
    '',
    'Safety note',
    passport.safetyNote,
  ].join('\n');
}