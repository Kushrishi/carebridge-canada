export type AppointmentPrepInput = {
  appointmentType: string;
  mainConcern: string;
  symptomTimeline: string;
  currentMedications: string;
  recentChanges: string;
  topQuestions: string;
};

export type AppointmentPrepSummary = {
  thirtySecondSummary: string;
  symptomTimelineItems: string[];
  medicationNotes: string[];
  recentChangeItems: string[];
  questionsForClinician: string[];
  notToForget: string[];
  safetyReminder: string;
};

export function createAppointmentPrepSummary(
  input: AppointmentPrepInput,
): AppointmentPrepSummary {
  const symptomTimelineItems = parseList(input.symptomTimeline);
  const medicationNotes = parseList(input.currentMedications);
  const recentChangeItems = parseList(input.recentChanges);
  const questionsForClinician = parseList(input.topQuestions);

  const mainConcern = input.mainConcern.trim() || 'the main health concern';
  const appointmentType = input.appointmentType.trim() || 'the appointment';

  return {
    thirtySecondSummary: `I am here for ${appointmentType}. My main concern is ${mainConcern}. Since the last visit, the main changes are: ${formatInlineList(
      recentChangeItems,
    )}. I would like to clarify next steps, what to monitor, and whether any referrals, labs, medications, or follow-ups are needed.`,
    symptomTimelineItems,
    medicationNotes,
    recentChangeItems,
    questionsForClinician,
    notToForget: [
      'Mention what changed since the last visit.',
      'Ask what the next step is and when to follow up.',
      'Confirm whether any referral, lab, imaging, or medication task is pending.',
      'Ask who to contact if instructions are unclear.',
    ],
    safetyReminder:
      'This summary is for appointment preparation only. It does not diagnose, treat, or replace clinical judgment.',
  };
}

function parseList(value: string): string[] {
  return value
    .split(/\n|;/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatInlineList(items: string[]): string {
  if (items.length === 0) {
    return 'not yet clearly documented';
  }

  if (items.length === 1) {
    return items[0];
  }

  return `${items.slice(0, -1).join(', ')}, and ${items.at(-1)}`;
}