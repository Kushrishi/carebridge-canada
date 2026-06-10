import { trustCenterContent } from './trustCenter';

describe('trustCenterContent', () => {
  it('states the MVP uses synthetic data only', () => {
    expect(trustCenterContent.summary).toMatch(/synthetic data only/i);
  });

  it('includes privacy and clinical safety sections', () => {
    const sectionTitles = trustCenterContent.sections.map(
      (section) => section.title,
    );

    expect(sectionTitles).toContain('MVP data boundary');
    expect(sectionTitles).toContain('Clinical safety boundary');
  });

  it('keeps the product away from diagnosis and treatment claims', () => {
    const allText = [
      trustCenterContent.summary,
      ...trustCenterContent.sections.flatMap((section) => section.points),
      ...trustCenterContent.productionReadiness,
    ].join(' ');

    expect(allText).toMatch(/does not diagnose/i);
    expect(allText).toMatch(/does not recommend treatment/i);
    expect(allText).toMatch(/does not approve/i);
  });

  it('defines production readiness requirements', () => {
    expect(trustCenterContent.productionReadiness.length).toBeGreaterThanOrEqual(
      5,
    );
  });
});