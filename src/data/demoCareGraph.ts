import type {
  Appointment,
  CareConcern,
  CarePassport,
  EvidenceCard,
  FollowUpTask,
  PatientProfile,
} from '../types/care';

export const demoPatient: PatientProfile = {
  id: 'patient-aiden-brooks',
  displayName: 'Aiden Brooks',
  province: 'Saskatchewan',
  preferredLanguage: 'English',
  caregiverModeEnabled: true,
};

export const demoConcerns: CareConcern[] = [
  {
    id: 'concern-shortness-of-breath',
    title: 'Shortness of breath',
    description:
      'Patient wants to track breathing symptoms, referral status, and follow-up instructions before the next visit.',
    status: 'active',
  },
];

export const demoAppointments: Appointment[] = [
  {
    id: 'appointment-family-doctor-june',
    date: '2026-06-12',
    appointmentType: 'Family doctor follow-up',
    clinicianLabel: 'Family doctor',
    reason: 'Discuss breathing symptoms and referral plan',
    notes:
      'Doctor discussed respirology referral, spirometry testing, symptom tracking, and follow-up in four weeks.',
  },
];

export const demoFollowUpTasks: FollowUpTask[] = [
  {
    id: 'task-referral-respirology',
    title: 'Confirm whether the respirology referral was sent',
    category: 'referral',
    status: 'needs-follow-up',
    dueDate: '2026-06-19',
    linkedConcernId: 'concern-shortness-of-breath',
    linkedAppointmentId: 'appointment-family-doctor-june',
  },
  {
    id: 'task-book-spirometry',
    title: 'Book spirometry when contacted',
    category: 'lab',
    status: 'pending',
    linkedConcernId: 'concern-shortness-of-breath',
    linkedAppointmentId: 'appointment-family-doctor-june',
  },
  {
    id: 'task-pharmacist-question',
    title: 'Ask pharmacist to explain new inhaler instructions if prescribed',
    category: 'medication',
    status: 'pending',
    linkedConcernId: 'concern-shortness-of-breath',
  },
  {
    id: 'task-follow-up-visit',
    title: 'Prepare 30-second summary before family doctor follow-up',
    category: 'appointment',
    status: 'pending',
    dueDate: '2026-07-10',
    linkedConcernId: 'concern-shortness-of-breath',
    linkedAppointmentId: 'appointment-family-doctor-june',
  },
  {
    id: 'task-family-checklist',
    title: 'Create family checklist from after-visit notes',
    category: 'family',
    status: 'pending',
    linkedConcernId: 'concern-shortness-of-breath',
  },
];

export const demoEvidenceCards: EvidenceCard[] = [
  {
    id: 'evidence-appointment-note',
    label: 'Family doctor note',
    sourceType: 'appointment-note',
    detail:
      'Based on the synthetic appointment note from June 12 about referral, spirometry, and follow-up.',
  },
  {
    id: 'evidence-follow-up-task',
    label: 'Pending referral task',
    sourceType: 'follow-up-task',
    detail:
      'Based on the open task asking whether the respirology referral was sent.',
  },
  {
    id: 'evidence-province-guide',
    label: 'Province context',
    sourceType: 'province-guide',
    detail:
      'Based on synthetic Saskatchewan navigation context. No government portal integration is used in the MVP.',
  },
];

export const demoCarePassport: CarePassport = {
  patient: demoPatient,
  mainConcerns: demoConcerns,
  recentAppointments: demoAppointments,
  followUpTasks: demoFollowUpTasks,
  evidenceCards: demoEvidenceCards,
};