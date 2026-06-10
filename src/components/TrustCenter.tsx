import { trustCenterContent } from '../data/trustCenter';

export function TrustCenter() {
  return (
    <section className="trust-section" aria-labelledby="trust-title">
      <div className="section-heading">
        <p className="eyebrow">Trust and safety</p>
        <h2 id="trust-title">{trustCenterContent.headline}</h2>
        <p>{trustCenterContent.summary}</p>
      </div>

      <div className="trust-grid">
        {trustCenterContent.sections.map((section) => (
          <article key={section.title} className="trust-card">
            <h3>{section.title}</h3>
            <ul>
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className="trust-production-card">
        <p className="eyebrow">Before real-world deployment</p>
        <h3>Production readiness requirements</h3>
        <ul>
          {trustCenterContent.productionReadiness.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}