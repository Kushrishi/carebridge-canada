import { reviewCareBridgeRequest, safetyRules } from '../utils/safetyRules';

const demoReview = reviewCareBridgeRequest(
  'Should I change my dose or stop my medication?',
);

export function SafetyRulesPanel() {
  return (
    <section
      className="safety-rules-section"
      aria-labelledby="safety-rules-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Rules engine</p>
        <h2 id="safety-rules-title">Safety rules engine</h2>
        <p>
          CareBridge uses explicit product rules to keep the workflow in the
          care-continuity lane: organize, summarize, track, translate, and
          prepare questions.
        </p>
      </div>

      <div className="safety-rules-grid">
        {safetyRules.map((rule) => (
          <article className="safety-rule-card" key={rule.id}>
            <h3>{rule.title}</h3>

            <div>
              <span>Allowed lane</span>
              <p>{rule.allowedLane}</p>
            </div>

            <div>
              <span>Blocked lane</span>
              <p>{rule.blockedLane}</p>
            </div>

            <div className="safety-rule-alternative">
              <span>Safe alternative</span>
              <p>{rule.safeAlternative}</p>
            </div>
          </article>
        ))}
      </div>

      <article className="safety-rule-demo">
        <p className="eyebrow">Example rule check</p>
        <h3>Blocked request</h3>
        <p>
          “Should I change my dose or stop my medication?”
        </p>
        <strong>
          Result: {demoReview.isAllowed ? 'Allowed' : 'Blocked by safety rules'}
        </strong>
        <p>{demoReview.safeAlternative}</p>
      </article>
    </section>
  );
}