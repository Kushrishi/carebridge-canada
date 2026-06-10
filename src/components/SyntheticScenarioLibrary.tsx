import { useMemo, useState } from 'react';
import {
  syntheticScenarios,
  type SyntheticScenario,
} from '../data/syntheticScenarios';

export function SyntheticScenarioLibrary() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(
    syntheticScenarios[0].id,
  );

  const selectedScenario = useMemo(
    () =>
      syntheticScenarios.find((scenario) => scenario.id === selectedScenarioId) ??
      syntheticScenarios[0],
    [selectedScenarioId],
  );

  return (
    <section className="scenario-section" aria-labelledby="scenario-title">
      <div className="section-heading">
        <p className="eyebrow">Synthetic validation</p>
        <h2 id="scenario-title">Patient scenario library</h2>
        <p>
          Explore synthetic care-continuity situations that explain who
          CareBridge Canada is designed to support and what risk the workflow
          reduces.
        </p>
      </div>

      <div className="scenario-grid">
        <div className="scenario-list" aria-label="Synthetic patient scenarios">
          {syntheticScenarios.map((scenario) => (
            <button
              key={scenario.id}
              type="button"
              className={
                scenario.id === selectedScenario.id
                  ? 'scenario-option scenario-option--active'
                  : 'scenario-option'
              }
              aria-pressed={scenario.id === selectedScenario.id}
              onClick={() => setSelectedScenarioId(scenario.id)}
            >
              {scenario.title}
            </button>
          ))}
        </div>

        <ScenarioDetail scenario={selectedScenario} />
      </div>
    </section>
  );
}

type ScenarioDetailProps = {
  scenario: SyntheticScenario;
};

function ScenarioDetail({ scenario }: ScenarioDetailProps) {
  return (
    <article className="scenario-detail">
      <p className="eyebrow">Selected scenario</p>
      <h3>{scenario.title}</h3>

      <div className="scenario-detail-grid">
        <section>
          <h4>Patient context</h4>
          <p>{scenario.patientContext}</p>
        </section>

        <section>
          <h4>Care challenge</h4>
          <p>{scenario.careChallenge}</p>
        </section>

        <section>
          <h4>CareBridge use</h4>
          <ul>
            {scenario.careBridgeUse.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h4>Risk if missed</h4>
          <p>{scenario.riskIfMissed}</p>
        </section>

        <section className="scenario-safety">
          <h4>Safety boundary</h4>
          <p>{scenario.safetyBoundary}</p>
        </section>
      </div>
    </article>
  );
}