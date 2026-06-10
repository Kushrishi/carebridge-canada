import type { CarePassport } from '../types/care';
import { createCarePassportSummary } from '../utils/carePassportSummary';

type CarePassportSummaryProps = {
  carePassport: CarePassport;
};

export function CarePassportSummary({
  carePassport,
}: CarePassportSummaryProps) {
  const summary = createCarePassportSummary(carePassport);

  return (
    <section className="care-passport-section" aria-labelledby="care-passport-title">
      <div className="section-heading">
        <p className="eyebrow">Care Passport</p>
        <h2 id="care-passport-title">Patient-owned handoff summary</h2>
        <p>
          A clean, export-ready view that can be shown to a doctor, pharmacist,
          specialist, walk-in clinic, emergency department, or family caregiver.
        </p>
      </div>

      <div className="passport-header-card">
        <div>
          <span>Patient</span>
          <strong>{summary.patientLabel}</strong>
          <p>{summary.provinceLabel}</p>
        </div>
        <div>
          <span>Open-loop summary</span>
          <strong>{summary.openLoopSummary}</strong>
          <p>No real patient data is used in this MVP demo.</p>
        </div>
      </div>

      <article className="summary-card passport-change-card">
        <p className="eyebrow">What changed since last visit?</p>
        <ul>
          {summary.whatChangedSinceLastVisit.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <div className="handoff-grid" aria-label="Care Passport handoffs">
        {summary.handoffs.map((handoff) => (
          <article className="handoff-card" key={handoff.audience}>
            <div className="handoff-card-header">
              <div>
                <span>{handoff.audience}</span>
                <h3>{handoff.title}</h3>
                <p>{handoff.subtitle}</p>
              </div>
            </div>

            <div className="handoff-section">
              <h4>Key points</h4>
              <ul>
                {handoff.keyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="handoff-section">
              <h4>Questions to ask</h4>
              <ul>
                {handoff.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </div>

            <div className="handoff-section">
              <h4>Based on</h4>
              <ul>
                {handoff.evidenceLabels.map((label) => (
                  <li key={label}>{label}</li>
                ))}
              </ul>
            </div>

            <p className="handoff-safety">{handoff.safetyReminder}</p>
          </article>
        ))}
      </div>

      <article className="export-placeholder-card">
        <div>
          <p className="eyebrow">Zero-login provider support</p>
          <h3>Export-ready layout</h3>
          <p>
            Future versions can export this Care Passport as a PDF or QR summary
            so providers do not need to create an account.
          </p>
        </div>
        <button type="button">PDF export planned</button>
      </article>
    </section>
  );
}