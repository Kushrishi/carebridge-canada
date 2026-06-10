import {
  createAfterVisitSummary,
  type AfterVisitInput,
} from './afterVisitSummary';

const input: AfterVisitInput = {
  sourceLabel: 'Synthetic doctor instructions',
  visitContext: 'family doctor visit',
  instructionText:
    'We will send a referral to respirology.\nBook spirometry when contacted.\nFollow up in four weeks.\nAsk pharmacist about inhaler instructions.',
};

describe('createAfterVisitSummary', () => {
  it('creates a plain-language after-visit summary', () => {
    const summary = createAfterVisitSummary(input);

    expect(summary.plainLanguageSummary).toMatch(/family doctor visit/i);
    expect(summary.plainLanguageSummary).toMatch(/next steps/i);
  });

  it('extracts instructions from pasted text', () => {
    const summary = createAfterVisitSummary(input);

    expect(summary.extractedInstructions).toContain(
      'We will send a referral to respirology',
    );
    expect(summary.extractedInstructions).toContain(
      'Book spirometry when contacted',
    );
  });

  it('creates follow-up tasks from referral, lab, medication, and appointment instructions', () => {
    const summary = createAfterVisitSummary(input);

    expect(summary.followUpTasks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ category: 'referral' }),
        expect.objectContaining({ category: 'lab' }),
        expect.objectContaining({ category: 'medication' }),
        expect.objectContaining({ category: 'appointment' }),
      ]),
    );
  });

  it('creates evidence cards for auditability', () => {
    const summary = createAfterVisitSummary(input);

    expect(summary.evidenceCards).toHaveLength(2);
    expect(summary.evidenceCards[0].sourceType).toBe('pasted-instruction');
  });

  it('keeps the safety reminder non-diagnostic', () => {
    const summary = createAfterVisitSummary(input);

    expect(summary.safetyReminder).toMatch(/does not diagnose/i);
    expect(summary.safetyReminder).toMatch(/healthcare professional/i);
  });
});