import './App.css';
import { CareTimeline } from './components/CareTimeline';
import { FollowUpTracker } from './components/FollowUpTracker';
import { demoCarePassport } from './data/demoCareGraph';
import { countOpenTasks, createCareGaps } from './utils/careGapRadar';
import { AppointmentPrep } from './components/AppointmentPrep';

function App() {
  const careGaps = createCareGaps(demoCarePassport.followUpTasks);
  const openTaskCount = countOpenTasks(demoCarePassport.followUpTasks);

  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">CareBridge Canada</p>
        <h1>Never lose the thread of your care.</h1>
        <p className="hero-copy">
          A patient-owned healthcare continuity layer that turns appointments,
          instructions, referrals, medications, labs, symptoms, and family
          questions into a living action plan.
        </p>

        <div className="hero-actions" aria-label="Primary actions">
          <button type="button">Prepare for a visit</button>
          <button type="button" className="secondary-button">
            View Care Passport
          </button>
        </div>
      </section>

      <section className="patient-card" aria-label="Synthetic demo patient">
        <div>
          <p className="eyebrow">Synthetic MVP demo</p>
          <h2>{demoCarePassport.patient.displayName}</h2>
          <p>
            Province: {demoCarePassport.patient.province} · Preferred language:{' '}
            {demoCarePassport.patient.preferredLanguage}
          </p>
        </div>
        <strong>No real patient data</strong>
      </section>

      <section className="workflow-grid" aria-label="CareBridge workflow">
        <article>
          <h2>Before the visit</h2>
          <p>
            Prepare concerns, symptoms, medications, questions, and a
            doctor-ready 30-second summary.
          </p>
        </article>

        <article>
          <h2>After the visit</h2>
          <p>
            Convert instructions into plain-language summaries, evidence cards,
            follow-up tasks, and family checklists.
          </p>
        </article>

        <article>
          <h2>Between visits</h2>
          <p>
            Track referrals, labs, imaging, medications, appointments,
            unresolved questions, and unfinished care loops.
          </p>
        </article>
      </section>

      <AppointmentPrep />

      <CareTimeline
        appointments={demoCarePassport.recentAppointments}
        tasks={demoCarePassport.followUpTasks}
      />

      <section className="dashboard-section">
        <div>
          <p className="eyebrow">Care Gap Radar</p>
          <h2>
            {careGaps.length} care gap flagged · {openTaskCount} open tasks
          </h2>
          <p>
            CareBridge flags unfinished loops. It does not diagnose, treat,
            approve prescriptions, or replace clinical judgment.
          </p>

          <div className="care-gap-list">
            {careGaps.map((gap) => (
              <article className="care-gap-card" key={gap.id}>
                <h3>{gap.title}</h3>
                <p>{gap.explanation}</p>
                <span>{gap.safePrompt}</span>
              </article>
            ))}
          </div>
        </div>

        <FollowUpTracker tasks={demoCarePassport.followUpTasks} />
      </section>

      <section className="passport-section">
        <div>
          <p className="eyebrow">Care Passport preview</p>
          <h2>Doctor-ready handoff</h2>
          <p>
            Main concern:{' '}
            <strong>{demoCarePassport.mainConcerns[0]?.title}</strong>
          </p>
          <p>{demoCarePassport.mainConcerns[0]?.description}</p>
        </div>

        <div className="evidence-panel">
          <h3>Evidence Cards</h3>
          {demoCarePassport.evidenceCards.map((card) => (
            <article key={card.id}>
              <strong>{card.label}</strong>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="safety-card">
        <h2>Safety principle</h2>
        <p>
          CareBridge supports understanding, preparation, communication, and
          follow-up. It does not diagnose, treat, approve prescriptions, provide
          emergency triage, or replace doctors, nurses, pharmacists, clinics,
          hospitals, or provincial health systems.
        </p>
      </section>
    </main>
  );
}

export default App;