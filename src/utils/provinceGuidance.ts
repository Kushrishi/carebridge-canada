import type { Province } from '../types/care';

export type ProvinceGuide = {
  province: Province;
  healthCoverageLabel: string;
  portalContext: string;
  whatToBring: string[];
  appointmentPrep: string[];
  referralTracking: string[];
  labImagingTracking: string[];
  movingProvinceNotes: string[];
  safetyReminder: string;
};

export const provinceGuides: Record<Province, ProvinceGuide> = {
  'British Columbia': {
    province: 'British Columbia',
    healthCoverageLabel: 'BC MSP / BC Services Card context',
    portalContext:
      'Patients may have access to provincial or clinic-based record systems, but the MVP does not connect to them.',
    whatToBring: [
      'BC Services Card or health coverage information',
      'Medication list',
      'Recent appointment notes',
      'Questions for the clinician or pharmacist',
    ],
    appointmentPrep: [
      'Prepare a short timeline of what changed since the last visit.',
      'Ask what follow-up is expected and when.',
      'Clarify who to contact if a referral, test, or result is delayed.',
    ],
    referralTracking: [
      'Ask whether the referral was sent.',
      'Ask where the referral was sent.',
      'Ask when to follow up if no appointment is received.',
    ],
    labImagingTracking: [
      'Confirm whether testing has been ordered.',
      'Ask how results will be communicated.',
      'Track whether results have been discussed with a clinician.',
    ],
    movingProvinceNotes: [
      'Keep a patient-owned summary of medications, referrals, recent visits, and pending tests.',
      'Confirm how coverage and local care access may change after moving.',
    ],
    safetyReminder:
      'This guidance is for preparation and navigation only. Confirm coverage, records, and care instructions with official sources or healthcare providers.',
  },
  Alberta: {
    province: 'Alberta',
    healthCoverageLabel: 'Alberta health card / MyHealth Records context',
    portalContext:
      'Patients may use provincial or clinic-based systems for some records, but CareBridge MVP does not connect to them.',
    whatToBring: [
      'Alberta health card',
      'Current medication list',
      'Recent lab, imaging, or referral notes if available',
      'Prepared questions',
    ],
    appointmentPrep: [
      'Summarize the main concern in 30 seconds.',
      'List new, worsened, improved, or unresolved symptoms.',
      'Ask what should happen next after the visit.',
    ],
    referralTracking: [
      'Ask if the referral was sent and to which specialty or clinic.',
      'Ask expected wait or follow-up timing.',
      'Ask who to call if no update arrives.',
    ],
    labImagingTracking: [
      'Confirm whether lab work or imaging is due.',
      'Ask whether fasting or preparation is needed.',
      'Track whether results were reviewed.',
    ],
    movingProvinceNotes: [
      'Create a Care Passport before moving provinces.',
      'Keep copies of important medication and follow-up information.',
    ],
    safetyReminder:
      'This is not official coverage advice or clinical advice. Confirm details with provincial resources, clinics, pharmacists, or clinicians.',
  },
  Saskatchewan: {
    province: 'Saskatchewan',
    healthCoverageLabel: 'Saskatchewan health card / eHealth context',
    portalContext:
      'Patients may have access to some provincial health information, but this MVP stores only synthetic patient-owned notes.',
    whatToBring: [
      'Saskatchewan health card',
      'Medication list',
      'Referral or test information if known',
      'Questions for the appointment',
    ],
    appointmentPrep: [
      'Prepare what changed since the last visit.',
      'Ask what the next care step is.',
      'Ask when to follow up if a referral or test is pending.',
    ],
    referralTracking: [
      'Ask whether the referral was sent.',
      'Ask which clinic or specialty received it.',
      'Ask when it is reasonable to call back.',
    ],
    labImagingTracking: [
      'Confirm what test was ordered.',
      'Ask where and when it should be completed.',
      'Track whether the result has been discussed.',
    ],
    movingProvinceNotes: [
      'Keep a summary if moving between provinces for work, school, or family.',
      'Track coverage changes, medication continuity, and pending referrals.',
    ],
    safetyReminder:
      'This is navigation support only. It does not verify health coverage or replace advice from healthcare professionals or official provincial systems.',
  },
  Ontario: {
    province: 'Ontario',
    healthCoverageLabel: 'OHIP context',
    portalContext:
      'Patients may use hospital, clinic, pharmacy, or provincial record tools, but CareBridge MVP does not integrate with them.',
    whatToBring: [
      'OHIP card',
      'Medication list',
      'Specialist, lab, or imaging details if available',
      'Top concerns and questions',
    ],
    appointmentPrep: [
      'Summarize the reason for the visit clearly.',
      'List any change since the last appointment.',
      'Ask what should happen before the next visit.',
    ],
    referralTracking: [
      'Ask if the referral was sent.',
      'Ask whether the clinic should call the patient or whether the patient should call.',
      'Track unanswered referral questions.',
    ],
    labImagingTracking: [
      'Ask where the lab or imaging should be completed.',
      'Ask how results will be reviewed.',
      'Track results that have not been discussed.',
    ],
    movingProvinceNotes: [
      'Prepare a portable Care Passport if moving into or out of Ontario.',
      'Track medications, family doctor access, and unresolved referrals.',
    ],
    safetyReminder:
      'This is not official OHIP or medical advice. Confirm details with official sources and healthcare providers.',
  },
  Quebec: {
    province: 'Quebec',
    healthCoverageLabel: 'RAMQ context',
    portalContext:
      'Patients may interact with provincial, pharmacy, clinic, or hospital systems, but this MVP does not connect to RAMQ or clinical systems.',
    whatToBring: [
      'RAMQ card or health coverage information',
      'Medication list',
      'Recent instructions or discharge notes',
      'Questions in English or French if helpful',
    ],
    appointmentPrep: [
      'Prepare a concise summary of the problem.',
      'List changes since the last visit.',
      'Ask for follow-up timing in writing if possible.',
    ],
    referralTracking: [
      'Ask whether a referral is needed or already sent.',
      'Ask which clinic or specialist is involved.',
      'Track who should contact whom next.',
    ],
    labImagingTracking: [
      'Confirm what test is needed.',
      'Ask where results will appear or who will discuss them.',
      'Track results that have not been explained.',
    ],
    movingProvinceNotes: [
      'Create a summary when moving to Quebec from another province.',
      'Track coverage transition, medications, and pending care items.',
    ],
    safetyReminder:
      'This is healthcare navigation support only. Confirm official coverage, language, and care details with healthcare providers or official systems.',
  },
};

export function getProvinceGuide(province: Province): ProvinceGuide {
  return provinceGuides[province];
}

export function createProvinceChecklist(guide: ProvinceGuide): string[] {
  return [
    ...guide.whatToBring,
    ...guide.appointmentPrep,
    ...guide.referralTracking,
    ...guide.labImagingTracking,
  ];
}