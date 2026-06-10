import {
  demoExportReadyPassport,
  formatExportReadyPassport,
} from './exportReadyPassport';

describe('exportReadyPassport', () => {
  it('formats an export-ready Care Passport', () => {
    const text = formatExportReadyPassport(demoExportReadyPassport);

    expect(text).toContain('CAREBRIDGE CANADA CARE PASSPORT');
    expect(text).toContain('Synthetic patient');
    expect(text).toContain('Open follow-ups');
    expect(text).toContain('Safety note');
  });

  it('includes bullet-style handoff items', () => {
    const text = formatExportReadyPassport(demoExportReadyPassport);

    expect(text).toContain('- Confirm whether the specialist referral was sent');
    expect(text).toContain('- What is the most important next step');
  });

  it('keeps the non-diagnostic safety boundary', () => {
    const text = formatExportReadyPassport(demoExportReadyPassport);

    expect(text).toMatch(/does not diagnose/i);
    expect(text).toMatch(/does not.*approve prescriptions/i);
  });
});