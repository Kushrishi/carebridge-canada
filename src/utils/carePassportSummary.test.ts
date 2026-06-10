import { demoCarePassport } from '../data/demoCareGraph';
import { createCarePassportSummary } from './carePassportSummary';

describe('createCarePassportSummary', () => {
  it('creates patient and province labels', () => {
    const summary = createCarePassportSummary(demoCarePassport);

    expect(summary.patientLabel).toBe('Aiden Brooks');
    expect(summary.provinceLabel).toMatch(/Saskatchewan/i);
  });

  it('creates doctor, pharmacist, and family handoffs', () => {
    const summary = createCarePassportSummary(demoCarePassport);

    expect(summary.handoffs).toHaveLength(3);
    expect(summary.handoffs.map((handoff) => handoff.audience)).toEqual([
      'doctor',
      'pharmacist',
      'family',
    ]);
  });

  it('includes evidence labels in each handoff', () => {
    const summary = createCarePassportSummary(demoCarePassport);

    summary.handoffs.forEach((handoff) => {
      expect(handoff.evidenceLabels).toContain('Family doctor note');
    });
  });

  it('keeps each handoff safety reminder non-diagnostic', () => {
    const summary = createCarePassportSummary(demoCarePassport);

    expect(summary.handoffs[0].safetyReminder).toMatch(/does not diagnose/i);
    expect(summary.handoffs[1].safetyReminder).toMatch(/does not approve prescriptions/i);
    expect(summary.handoffs[2].safetyReminder).toMatch(/confirmed with a clinician/i);
  });
});