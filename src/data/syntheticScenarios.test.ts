import { syntheticScenarios } from './syntheticScenarios';

describe('syntheticScenarios', () => {
  it('includes multiple synthetic patient scenarios', () => {
    expect(syntheticScenarios.length).toBeGreaterThanOrEqual(4);
  });

  it('includes scenario safety boundaries', () => {
    for (const scenario of syntheticScenarios) {
      expect(scenario.safetyBoundary.length).toBeGreaterThan(20);
    }
  });

  it('keeps scenarios focused on continuity instead of diagnosis', () => {
    const allScenarioText = syntheticScenarios
      .map((scenario) => [
        scenario.title,
        scenario.patientContext,
        scenario.careChallenge,
        scenario.careBridgeUse.join(' '),
        scenario.riskIfMissed,
        scenario.safetyBoundary,
      ].join(' '))
      .join(' ');

    expect(allScenarioText).toMatch(/follow-up|handoff|instructions|continuity/i);
    expect(allScenarioText).not.toMatch(/diagnose the patient/i);
  });
});