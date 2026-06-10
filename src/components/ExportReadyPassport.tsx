import { useMemo, useState } from 'react';
import {
  demoExportReadyPassport,
  formatExportReadyPassport,
} from '../utils/exportReadyPassport';

export function ExportReadyPassport() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>(
    'idle',
  );

  const exportText = useMemo(
    () => formatExportReadyPassport(demoExportReadyPassport),
    [],
  );

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(exportText);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('failed');
    }
  }

  return (
    <section
      className="export-passport-section"
      aria-labelledby="export-passport-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Export-ready summary</p>
        <h2 id="export-passport-title">Copyable Care Passport</h2>
        <p>
          Generate a clean patient-owned summary that can be copied into a
          message, printed, or brought to a doctor, pharmacist, or caregiver.
        </p>
      </div>

      <div className="export-passport-grid">
        <article className="summary-card summary-card--primary">
          <h3>What this export is for</h3>
          <p>{demoExportReadyPassport.purpose}</p>
          <ul>
            <li>Prepares the patient for the next visit.</li>
            <li>Highlights unresolved follow-ups.</li>
            <li>Creates a shared handoff for care supporters.</li>
            <li>Keeps safety boundaries visible.</li>
          </ul>

          <button type="button" onClick={handleCopy}>
            Copy Care Passport
          </button>

          {copyStatus === 'copied' && (
            <p className="copy-status">Copied to clipboard.</p>
          )}

          {copyStatus === 'failed' && (
            <p className="copy-status copy-status--error">
              Copy failed. Select the text manually.
            </p>
          )}
        </article>

        <article className="export-passport-preview">
          <div className="export-passport-paper">
            <pre>{exportText}</pre>
          </div>
        </article>
      </div>
    </section>
  );
}