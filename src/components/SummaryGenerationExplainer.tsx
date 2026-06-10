export function SummaryGenerationExplainer() {
  return (
    <section
      className="generation-explainer-section"
      aria-labelledby="generation-explainer-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Generation transparency</p>
        <h2 id="generation-explainer-title">How summaries are generated</h2>
        <p>
          The public MVP is intentionally transparent: it demonstrates the
          CareBridge workflow with synthetic data and deterministic rules, not
          real medical AI or real patient records.
        </p>
      </div>

      <div className="generation-explainer-grid">
        <article>
          <h3>Current MVP</h3>
          <p>
            Today, CareBridge uses TypeScript utility functions to transform
            synthetic appointment details and synthetic instructions into
            structured summaries, follow-up tasks, evidence cards, and handoff
            text.
          </p>
          <ul>
            <li>No real patient data is used.</li>
            <li>No backend receives health information.</li>
            <li>No AI model is making medical decisions.</li>
            <li>No diagnosis, treatment, prescription, or triage advice is generated.</li>
          </ul>
        </article>

        <article>
          <h3>Future AI/RAG layer</h3>
          <p>
            A future production version could use AI and retrieval-augmented
            generation only as a source-grounded continuity assistant.
          </p>
          <ul>
            <li>Summaries would cite the original source instructions.</li>
            <li>Generated tasks would link back to evidence text.</li>
            <li>Unsafe medical advice would be blocked by safety rules.</li>
            <li>Every generated output would be auditable.</li>
          </ul>
        </article>

        <article>
          <h3>Safety-first design</h3>
          <p>
            CareBridge is designed to help patients prepare, organize,
            translate, track, and communicate care information. It does not
            replace clinicians, pharmacists, hospitals, provincial systems, or
            emergency services.
          </p>
          <ul>
            <li>Patients keep the original instruction beside any summary.</li>
            <li>Unclear medical instructions should be confirmed with professionals.</li>
            <li>Caregivers receive support notes, not clinical authority.</li>
            <li>The app stays in the care-continuity lane.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}