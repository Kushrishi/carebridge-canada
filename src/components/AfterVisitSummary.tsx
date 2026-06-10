import { useMemo, useState } from 'react';
import {
  createAfterVisitSummary,
  type AfterVisitInput,
} from '../utils/afterVisitSummary';

const defaultAfterVisitInput: AfterVisitInput = {
  sourceLabel: 'Synthetic family doctor instructions',
  visitContext: 'family doctor visit about breathing symptoms',
  instructionText:
    'We will send a referral to respirology.\nBook spirometry when contacted.\nFollow up in four weeks.\nAsk the pharmacist to explain inhaler instructions if prescribed.\nTrack symptoms before the next visit.',
};

export function AfterVisitSummary() {
  const [afterVisitInput, setAfterVisitInput] = useState<AfterVisitInput>(
    defaultAfterVisitInput,
  );
  const [submittedAfterVisitInput, setSubmittedAfterVisitInput] =
    useState<AfterVisitInput>(defaultAfterVisitInput);
  const [hasDraftChanges, setHasDraftChanges] = useState(false);
  const [generationStatus, setGenerationStatus] = useState<
    'sample' | 'generated'
  >('sample');

  const summary = useMemo(
    () => createAfterVisitSummary(submittedAfterVisitInput),
    [submittedAfterVisitInput],
  );

  function updateField(field: keyof AfterVisitInput, value: string) {
    setAfterVisitInput((currentInput) => ({
      ...currentInput,
      [field]: value,
    }));
    setHasDraftChanges(true);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedAfterVisitInput(afterVisitInput);
    setHasDraftChanges(false);
    setGenerationStatus('generated');
  }

  return (
    <section className="after-visit-section" aria-labelledby="after-visit-title">
      <div className="section-heading">
        <p className="eyebrow">After the visit</p>
        <h2 id="after-visit-title">After-visit summary</h2>
        <p>
          Paste synthetic doctor, discharge, or pharmacy instructions and turn
          them into clear next steps, questions, and evidence cards.
        </p>
      </div>

      <div className="after-visit-grid">
        <form className="after-visit-form" onSubmit={handleSubmit}>
          <label>
            Source label
            <input
              value={afterVisitInput.sourceLabel}
              onChange={(event) =>
                updateField('sourceLabel', event.target.value)
              }
            />
          </label>

          <label>
            Visit context
            <input
              value={afterVisitInput.visitContext}
              onChange={(event) =>
                updateField('visitContext', event.target.value)
              }
            />
          </label>

          <label>
            Pasted synthetic instructions
            <textarea
              value={afterVisitInput.instructionText}
              onChange={(event) =>
                updateField('instructionText', event.target.value)
              }
            />
          </label>

          <button type="submit">Generate after-visit plan</button>

          <p className="form-hint" role="status">
            {hasDraftChanges
              ? 'Changes ready. Generate again to refresh the after-visit plan.'
              : generationStatus === 'generated'
                ? 'After-visit plan generated from the current synthetic instructions.'
                : 'Sample after-visit plan shown from synthetic demo instructions.'}
          </p>
        </form>

        <div
          className="after-visit-output"
          aria-label="Generated after-visit summary"
        >
          <article className="summary-card summary-card--primary">
            <p className="eyebrow">Plain-language summary</p>
            <p>{summary.plainLanguageSummary}</p>
          </article>

          <article className="summary-card">
            <h3>Extracted instructions</h3>
            <ul>
              {summary.extractedInstructions.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ul>
          </article>

          <article className="summary-card">
            <h3>Generated follow-up checklist</h3>
            <div className="generated-task-list">
              {summary.followUpTasks.map((task) => (
                <div className="generated-task" key={task.id}>
                  <strong>{task.title}</strong>
                  <span>{task.category}</span>
                  <p>Based on: {task.reason}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="summary-card">
            <h3>Questions to ask</h3>
            <ul>
              {summary.questionsToAsk.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </article>

          <article className="summary-card">
            <h3>Evidence Cards</h3>
            <div className="generated-task-list">
              {summary.evidenceCards.map((card) => (
                <div className="generated-task" key={card.id}>
                  <strong>{card.label}</strong>
                  <span>{card.sourceType.replaceAll('-', ' ')}</span>
                  <p>{card.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="summary-card safety-summary">
            <h3>Safety boundary</h3>
            <p>{summary.safetyReminder}</p>
          </article>
        </div>
      </div>
    </section>
  );
}