import type { CarePassport, FollowUpTask } from '../types/care';

export type CarePassportAudience = 'doctor' | 'pharmacist' | 'family';

export type CarePassportHandoff = {
  audience: CarePassportAudience;
  title: string;
  subtitle: string;
  keyPoints: string[];
  questions: string[];
  evidenceLabels: string[];
  safetyReminder: string;
};

export type CarePassportSummary = {
  patientLabel: string;
  provinceLabel: string;
  openLoopSummary: string;
  whatChangedSinceLastVisit: string[];
  handoffs: CarePassportHandoff[];
};

export function createCarePassportSummary(
  carePassport: CarePassport,
): CarePassportSummary {
  const openTasks = carePassport.followUpTasks.filter(
    (task) => task.status !== 'completed',
  );

  const needsFollowUpTasks = carePassport.followUpTasks.filter(
    (task) => task.status === 'needs-follow-up',
  );

  const mainConcern =
    carePassport.mainConcerns[0]?.title ?? 'No main concern documented';

  const recentAppointment = carePassport.recentAppointments[0];

  return {
    patientLabel: carePassport.patient.displayName,
    provinceLabel: `${carePassport.patient.province} · ${carePassport.patient.preferredLanguage}`,
    openLoopSummary: `${openTasks.length} open follow-up items, including ${needsFollowUpTasks.length} item that may need follow-up.`,
    whatChangedSinceLastVisit: [
      `Main concern being tracked: ${mainConcern}.`,
      recentAppointment
        ? `Most recent appointment: ${recentAppointment.reason} on ${recentAppointment.date}.`
        : 'No recent appointment documented yet.',
      ...summarizeTasksByStatus(carePassport.followUpTasks),
    ],
    handoffs: [
      createDoctorHandoff(carePassport),
      createPharmacistHandoff(carePassport),
      createFamilyHandoff(carePassport),
    ],
  };
}

function createDoctorHandoff(carePassport: CarePassport): CarePassportHandoff {
  const mainConcern =
    carePassport.mainConcerns[0]?.description ?? 'No concern details documented.';

  return {
    audience: 'doctor',
    title: 'Doctor-ready handoff',
    subtitle: 'For family doctor, walk-in clinic, specialist, or urgent visit.',
    keyPoints: [
      mainConcern,
      ...carePassport.followUpTasks
        .filter((task) => task.status !== 'completed')
        .map((task) => `${formatTaskStatus(task)}: ${task.title}`),
    ],
    questions: [
      'What changed since the last visit that matters most?',
      'Which referrals, labs, imaging, medications, or follow-ups are still pending?',
      'When should the patient follow up if they do not hear back?',
    ],
    evidenceLabels: carePassport.evidenceCards.map((card) => card.label),
    safetyReminder:
      'This handoff is patient-prepared context. It does not diagnose, treat, or replace clinical judgment.',
  };
}

function createPharmacistHandoff(
  carePassport: CarePassport,
): CarePassportHandoff {
  const medicationTasks = carePassport.followUpTasks.filter(
    (task) => task.category === 'medication',
  );

  return {
    audience: 'pharmacist',
    title: 'Pharmacist-ready handoff',
    subtitle: 'For medication questions, instructions, adherence, and confusion points.',
    keyPoints:
      medicationTasks.length > 0
        ? medicationTasks.map((task) => `${formatTaskStatus(task)}: ${task.title}`)
        : ['No medication-specific task is documented in this synthetic demo.'],
    questions: [
      'Can you explain how this medication should be taken or used?',
      'What side effects or usage issues should the patient ask about?',
      'What should the patient do if they are confused about the instructions?',
    ],
    evidenceLabels: carePassport.evidenceCards.map((card) => card.label),
    safetyReminder:
      'This handoff helps the patient ask better medication questions. It does not approve prescriptions or replace pharmacist counseling.',
  };
}

function createFamilyHandoff(carePassport: CarePassport): CarePassportHandoff {
  return {
    audience: 'family',
    title: 'Family/caregiver handoff',
    subtitle: 'For family members helping the patient remember next steps.',
    keyPoints: [
      `Patient province/context: ${carePassport.patient.province}.`,
      `Preferred language: ${carePassport.patient.preferredLanguage}.`,
      ...carePassport.followUpTasks
        .filter((task) => task.status !== 'completed')
        .map((task) => `${formatTaskStatus(task)}: ${task.title}`),
    ],
    questions: [
      'What needs to happen next?',
      'Which tasks are still pending?',
      'What should the family help the patient remember before the next visit?',
    ],
    evidenceLabels: carePassport.evidenceCards.map((card) => card.label),
    safetyReminder:
      'This family version is for understanding and organization only. It should be confirmed with a clinician or pharmacist.',
  };
}

function summarizeTasksByStatus(tasks: FollowUpTask[]): string[] {
  const needsFollowUp = tasks.filter((task) => task.status === 'needs-follow-up');
  const pending = tasks.filter((task) => task.status === 'pending');
  const completed = tasks.filter((task) => task.status === 'completed');

  return [
    `${needsFollowUp.length} task may need follow-up.`,
    `${pending.length} tasks are pending.`,
    `${completed.length} tasks are completed.`,
  ];
}

function formatTaskStatus(task: FollowUpTask): string {
  return task.status.replaceAll('-', ' ');
}