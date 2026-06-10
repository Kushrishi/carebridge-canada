import {
  createFamilyTranslation,
  type FamilyTranslationInput,
} from './familyTranslation';

const input: FamilyTranslationInput = {
  originalInstructions:
    'Referral to specialist. Book spirometry. Ask pharmacist about inhaler.',
  plainEnglishSummary:
    'The patient needs to track a referral, breathing test, and medication instructions.',
  targetLanguage: 'Punjabi',
};

describe('createFamilyTranslation', () => {
  it('creates a family-friendly plain-English summary', () => {
    const output = createFamilyTranslation(input);

    expect(output.plainEnglishSummary).toMatch(/track a referral/i);
  });

  it('creates a translated checklist for the selected language', () => {
    const output = createFamilyTranslation(input);

    expect(output.translatedHeading).toMatch(/ਪਰਿਵਾਰ/);
    expect(output.translatedChecklist.length).toBeGreaterThan(0);
  });

  it('creates evidence cards for auditability', () => {
    const output = createFamilyTranslation(input);

    expect(output.evidenceCards).toHaveLength(2);
    expect(output.evidenceCards[0].sourceType).toBe('pasted-instruction');
  });

  it('keeps translation safety boundaries clear', () => {
    const output = createFamilyTranslation(input);

    expect(output.safetyReminder).toMatch(/confirmed with a clinician or pharmacist/i);
  });
});