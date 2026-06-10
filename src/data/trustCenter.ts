export type TrustCenterSection = {
  title: string;
  points: string[];
};

export type TrustCenterContent = {
  headline: string;
  summary: string;
  sections: TrustCenterSection[];
  productionReadiness: string[];
};

export const trustCenterContent: TrustCenterContent = {
  headline: 'Privacy and safety trust center',
  summary:
    'CareBridge Canada is designed as a patient-owned continuity layer. The MVP uses synthetic data only and does not connect to provincial portals, clinical systems, pharmacies, or real patient records.',
  sections: [
    {
      title: 'MVP data boundary',
      points: [
        'Uses synthetic demo scenarios and synthetic care tasks only.',
        'Does not ask for real health card numbers, diagnoses, prescriptions, addresses, or identifying patient records.',
        'Does not send data to a backend in the current frontend prototype.',
        'Does not claim integration with AHS, BC Health Gateway, OHIP-connected portals, RAMQ, PharmaNet, or clinic systems.',
      ],
    },
    {
      title: 'Clinical safety boundary',
      points: [
        'Does not diagnose symptoms or conditions.',
        'Does not recommend treatment or medication changes.',
        'Does not approve, reject, or modify prescriptions.',
        'Does not replace doctors, nurses, pharmacists, clinics, hospitals, emergency services, or provincial systems.',
      ],
    },
    {
      title: 'Patient-owned continuity principles',
      points: [
        'Keeps original instructions beside plain-language or translated summaries.',
        'Helps patients prepare questions instead of making clinical decisions for them.',
        'Turns scattered care moments into follow-up tasks and handoff summaries.',
        'Encourages patients to confirm unclear medical instructions with qualified professionals.',
      ],
    },
    {
      title: 'Family and translation safety',
      points: [
        'Family summaries are for support, not clinical authority.',
        'Translated or simplified summaries should be checked against the original source text.',
        'Caregivers can help track questions, appointments, referrals, labs, and medication concerns.',
        'Medication and treatment instructions should be confirmed with clinicians or pharmacists.',
      ],
    },
  ],
  productionReadiness: [
    'Privacy impact assessment before handling real patient data.',
    'Clear consent model for patient-owned notes and caregiver sharing.',
    'Secure authentication and authorization.',
    'Encryption for stored data and data in transit.',
    'Audit trails for generated summaries and exports.',
    'Clinician/pharmacist review of safety language and workflow boundaries.',
    'Accessibility review for mobile, keyboard, and screen-reader use.',
  ],
};