export type Province =
  | 'British Columbia'
  | 'Alberta'
  | 'Saskatchewan'
  | 'Ontario'
  | 'Quebec';

export type FollowUpStatus = 'pending' | 'needs-follow-up' | 'completed';

export type FollowUpCategory =
  | 'referral'
  | 'lab'
  | 'imaging'
  | 'medication'
  | 'appointment'
  | 'family'
  | 'question';

export type EvidenceSourceType =
  | 'appointment-note'
  | 'pasted-instruction'
  | 'follow-up-task'
  | 'province-guide'
  | 'medication-list'
  | 'family-translation';

export type PatientProfile = {
  id: string;
  displayName: string;
  province: Province;
  preferredLanguage: string;
  caregiverModeEnabled: boolean;
};

export type CareConcern = {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'improving' | 'worsening' | 'resolved';
};

export type Appointment = {
  id: string;
  date: string;
  appointmentType: string;
  clinicianLabel: string;
  reason: string;
  notes: string;
};

export type FollowUpTask = {
  id: string;
  title: string;
  category: FollowUpCategory;
  status: FollowUpStatus;
  dueDate?: string;
  linkedConcernId?: string;
  linkedAppointmentId?: string;
};

export type EvidenceCard = {
  id: string;
  label: string;
  sourceType: EvidenceSourceType;
  detail: string;
};

export type CareGap = {
  id: string;
  title: string;
  explanation: string;
  safePrompt: string;
  linkedTaskId?: string;
};

export type CarePassport = {
  patient: PatientProfile;
  mainConcerns: CareConcern[];
  recentAppointments: Appointment[];
  followUpTasks: FollowUpTask[];
  evidenceCards: EvidenceCard[];
};