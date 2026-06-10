import { useMemo, useState } from 'react';
import {
  createAppointmentPrepSummary,
  type AppointmentPrepInput,
} from '../utils/appointmentPrep';

const defaultPrepInput: AppointmentPrepInput = {
  appointmentType: 'family doctor follow-up',
  mainConcern: 'shortness of breath and waiting for respirology referral',
  symptomTimeline:
    'Breathing feels worse when walking uphill\nSymptoms are not constant\nNo clear update yet on referral timing',
  currentMedications:
    'No confirmed new medication in this synthetic demo\nAsk pharmacist if any inhaler is prescribed',
  recentChanges:
    'Referral may still be pending\nSpirometry has not been booked yet\nNeed follow-up plan before next visit',
  topQuestions:
    'Was the respirology referral sent?\nWhen should spirometry be booked?\nWhat symptoms should I track before the next visit?\nWhen should I follow up if I do not hear back?',
};

export function AppointmentPrep() {
  const [prepInput, setPrepInput] =
    useState<AppointmentPrepInput>(defaultPrepInput);
  const [hasGeneratedSummary, setHasGeneratedSummary] = useState(true);

  const summary = useMemo(
    () => createAppointmentPrepSummary(prepInput),
    [prepInput],
  );

  function updateField(field: keyof AppointmentPrepInput, value: string) {
    setPrepInput((currentInput) => ({
      ...currentInput,
      [field]: value,
    }));
  }

  return (
    <section className="appointment-prep-section" aria-labelledby="appointment-prep-title">
      <div className="section-heading">
        <p className="eyebrow">Before the visit</p>
        <h2 id="appointment-prep-title">Appointment preparation</h2>
        <p>
          Turn scattered concerns, symptoms, medication notes, and questions into
          a doctor-ready visit summary.
        </p>
      </div>

      <div className="appointment-prep-grid">
        <form
          className="prep-form"
          onSubmit={(event) => {
            event.preventDefault();
            setHasGeneratedSummary(true);
          }}
        >
          <label>
            Appointment type
            <input
              value={prepInput.appointmentType}
              onChange={(event) =>
                updateField('appointmentType', event.target.value)
              }
            />
          </label>

          <label>
            Main concern
            <textarea
              value={prepInput.mainConcern}
              onChange={(event) =>
                updateField('mainConcern', event.target.value)
              }
            />
          </label>

          <label>
            Symptom timeline
            <textarea
              value={prepInput.symptomTimeline}
              onChange={(event) =>
                updateField('symptomTimeline', event.target.value)
              }
            />
          </label>

          <label>
            Current medications or medication questions
            <textarea
              value={prepInput.currentMedications}
              onChange={(event) =>
                updateField('currentMedications', event.target.value)
              }
            />
          </label>

          <label>
            What changed since last visit?
            <textarea
              value={prepInput.recentChanges}
              onChange={(event) =>
                updateField('recentChanges', event.target.value)
              }
            />
          </label>

          <label>
            Top questions
            <textarea
              value={prepInput.topQuestions}
              onChange={(event) =>
                updateField('topQuestions', event.target.value)
              }
            />
          </label>

          <button type="submit">Generate appointment summary</button>
        </form>

        {hasGeneratedSummary && (
          <div className="prep-summary" aria-label="Generated appointment preparation summary">
            <article className="summary-card summary-card--primary">
              <p className="eyebrow">30-second doctor summary</p>
              <p>{summary.thirtySecondSummary}</p>
            </article>

            <SummaryList
              title="Symptom timeline"
              items={summary.symptomTimelineItems}
              emptyLabel="No symptom timeline added yet."
            />

            <SummaryList
              title="What changed since last visit?"
              items={summary.recentChangeItems}
              emptyLabel="No changes added yet."
            />

            <SummaryList
              title="Medication notes"
              items={summary.medicationNotes}
              emptyLabel="No medication notes added yet."
            />

            <SummaryList
              title="Questions to ask"
              items={summary.questionsForClinician}
              emptyLabel="No questions added yet."
            />

            <SummaryList
              title="Do not forget"
              items={summary.notToForget}
              emptyLabel="No reminder items generated."
            />

            <article className="summary-card safety-summary">
              <h3>Safety boundary</h3>
              <p>{summary.safetyReminder}</p>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}

type SummaryListProps = {
  title: string;
  items: string[];
  emptyLabel: string;
};

function SummaryList({ title, items, emptyLabel }: SummaryListProps) {
  return (
    <article className="summary-card">
      <h3>{title}</h3>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{emptyLabel}</p>
      )}
    </article>
  );
}