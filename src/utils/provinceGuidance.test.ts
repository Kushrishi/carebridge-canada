import {
  createProvinceChecklist,
  getProvinceGuide,
} from './provinceGuidance';

describe('provinceGuidance', () => {
  it('returns guidance for Saskatchewan', () => {
    const guide = getProvinceGuide('Saskatchewan');

    expect(guide.healthCoverageLabel).toMatch(/Saskatchewan health card/i);
    expect(guide.whatToBring).toContain('Saskatchewan health card');
  });

  it('returns guidance for Quebec', () => {
    const guide = getProvinceGuide('Quebec');

    expect(guide.healthCoverageLabel).toMatch(/RAMQ/i);
    expect(guide.appointmentPrep.length).toBeGreaterThan(0);
  });

  it('creates a combined checklist from guide sections', () => {
    const guide = getProvinceGuide('Alberta');
    const checklist = createProvinceChecklist(guide);

    expect(checklist.length).toBeGreaterThan(guide.whatToBring.length);
    expect(checklist).toContain('Alberta health card');
  });

  it('keeps safety reminder non-clinical', () => {
    const guide = getProvinceGuide('Ontario');

    expect(guide.safetyReminder).toMatch(/not official/i);
    expect(guide.safetyReminder).toMatch(/medical advice/i);
  });
});