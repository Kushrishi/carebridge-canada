import { useMemo, useState } from 'react';
import {
  createFamilyTranslation,
  type FamilyTranslationInput,
  type SupportedFamilyLanguage,
} from '../utils/familyTranslation';

const languageOptions: SupportedFamilyLanguage[] = [
  'Punjabi',
  'Hindi',
  'French',
  'Urdu',
];

const defaultFamilyInput: FamilyTranslationInput = {
  originalInstructions:
    'We will send a referral to respirology. Book spirometry when contacted. Follow up in four weeks. Ask the pharmacist to explain inhaler instructions if prescribed.',
  plainEnglishSummary:
    'The clinic may send a specialist referral. The patient may need breathing testing, a follow-up visit, and medication clarification from a pharmacist.',
  targetLanguage: 'Punjabi',
};

export function FamilyTranslationMode() {
  const [familyInput, setFamilyInput] =
    useState<FamilyTranslationInput>(defaultFamilyInput);

  const familySummary = useMemo(
    () => createFamilyTranslation(familyInput),
    [familyInput],
  );

  function updateField<K extends keyof FamilyTranslationInput>(
    field: K,
    value: FamilyTranslationInput[K],
  ) {
    setFamilyInput((currentInput) => ({
      ...currentInput,
      [field]: value,
    }));
  }

  return (
    <section
      className="family-translation-section"
      aria-labelledby="family-translation-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Family Care Circle</p>
        <h2 id="family-translation-title">Family translation mode</h2>
        <p>
          Convert synthetic care instructions into a plain-English family
          summary, translated checklist, caregiver checklist, and evidence
          cards.
        </p>
      </div>

      <div className="family-translation-grid">
        <form className="family-form">
          <label>
            Target language
            <select
              value={familyInput.targetLanguage}
              onChange={(event) =>
                updateField(
                  'targetLanguage',
                  event.target.value as SupportedFamilyLanguage,
                )
              }
            >
              {languageOptions.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </label>

          <label>
            Original synthetic instructions
            <textarea
              value={familyInput.originalInstructions}
              onChange={(event) =>
                updateField('originalInstructions', event.target.value)
              }
            />
          </label>

          <label>
            Plain-English family summary
            <textarea
              value={familyInput.plainEnglishSummary}
              onChange={(event) =>
                updateField('plainEnglishSummary', event.target.value)
              }
            />
          </label>
        </form>

        <div className="family-output" aria-label="Generated family translation">
          <article className="summary-card summary-card--primary">
            <p className="eyebrow">Plain English first</p>
            <h3>Family-friendly explanation</h3>
            <p>{familySummary.plainEnglishSummary}</p>
          </article>

          <article className="summary-card translated-card">
            <p className="eyebrow">{familyInput.targetLanguage}</p>
            <h3>{familySummary.translatedHeading}</h3>
            <ul>
              {familySummary.translatedChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="summary-card">
            <h3>Caregiver checklist</h3>
            <ul>
              {familySummary.caregiverChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="summary-card">
            <h3>Original text beside family version</h3>
            <p>{familyInput.originalInstructions}</p>
          </article>

          <article className="summary-card">
            <h3>Evidence Cards</h3>
            <div className="generated-task-list">
              {familySummary.evidenceCards.map((card) => (
                <div className="generated-task" key={card.id}>
                  <strong>{card.label}</strong>
                  <span>{card.sourceType.replaceAll('-', ' ')}</span>
                  <p>{card.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="summary-card safety-summary">
            <h3>Translation safety boundary</h3>
            <p>{familySummary.safetyReminder}</p>
          </article>
        </div>
      </div>
    </section>
  );
}