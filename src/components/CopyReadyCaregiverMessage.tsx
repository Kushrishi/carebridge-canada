import { useMemo, useState } from 'react';
import {
  demoCaregiverMessage,
  formatCaregiverMessage,
} from '../utils/caregiverMessage';

export function CopyReadyCaregiverMessage() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>(
    'idle',
  );

  const caregiverMessageText = useMemo(
    () => formatCaregiverMessage(demoCaregiverMessage),
    [],
  );

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(caregiverMessageText);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('failed');
    }
  }

  return (
    <section
      className="caregiver-message-section"
      aria-labelledby="caregiver-message-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Family support</p>
        <h2 id="caregiver-message-title">Copy-ready caregiver message</h2>
        <p>
          Create a short family-friendly note that explains what the patient may
          need help remembering without asking the caregiver to make medical
          decisions.
        </p>
      </div>

      <div className="caregiver-message-grid">
        <article className="summary-card summary-card--primary">
          <h3>Why this matters</h3>
          <p>
            Many care gaps happen because families want to help but do not know
            what to track. This message turns the care thread into a simple
            support request.
          </p>

          <ul>
            <li>Explains the situation in plain language.</li>
            <li>Lists concrete ways a caregiver can help.</li>
            <li>Keeps medical decisions with clinicians and pharmacists.</li>
          </ul>

          <button type="button" onClick={handleCopy}>
            Copy caregiver message
          </button>

          {copyStatus === 'copied' && (
            <p className="copy-status">Caregiver message copied.</p>
          )}

          {copyStatus === 'failed' && (
            <p className="copy-status copy-status--error">
              Copy failed. Select the text manually.
            </p>
          )}
        </article>

        <article className="caregiver-message-preview">
          <pre>{caregiverMessageText}</pre>
        </article>
      </div>
    </section>
  );
}