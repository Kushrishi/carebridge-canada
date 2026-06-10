export type CaregiverMessage = {
  recipientLabel: string;
  patientLabel: string;
  situation: string;
  helpNeeded: string[];
  reminder: string;
  safetyNote: string;
};

export const demoCaregiverMessage: CaregiverMessage = {
  recipientLabel: 'Family caregiver',
  patientLabel: 'Synthetic patient: Maya S.',
  situation:
    'I am trying to keep track of my next healthcare steps after a recent appointment.',
  helpNeeded: [
    'Help me remember to confirm whether the referral was sent.',
    'Help me track whether lab results have been reviewed.',
    'Help me write down medication questions for the pharmacist.',
    'Help me prepare questions before the next appointment.',
  ],
  reminder:
    'Please help me stay organized, but do not make medical decisions for me.',
  safetyNote:
    'Any medication, diagnosis, treatment, or urgent-care question should be confirmed with a doctor, nurse, pharmacist, clinic, or emergency service.',
};

export function formatCaregiverMessage(message: CaregiverMessage): string {
  const helpItems = message.helpNeeded.map((item) => `- ${item}`).join('\n');

  return [
    `Hi, I am sharing this CareBridge caregiver note with you.`,
    '',
    message.patientLabel,
    '',
    'Situation:',
    message.situation,
    '',
    'What I may need help with:',
    helpItems,
    '',
    'Reminder:',
    message.reminder,
    '',
    'Safety note:',
    message.safetyNote,
  ].join('\n');
}