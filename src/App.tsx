import { useState } from 'react';
import './App.css';
import { AfterVisitSummary } from './components/AfterVisitSummary';
import { AppNavigation } from './components/AppNavigation';
import { AppointmentPrep } from './components/AppointmentPrep';
import { CarePassportSummary } from './components/CarePassportSummary';
import { CareTimeline } from './components/CareTimeline';
import { FamilyTranslationMode } from './components/FamilyTranslationMode';
import { FollowUpTracker } from './components/FollowUpTracker';
import { demoCarePassport } from './data/demoCareGraph';
import type { AppView } from './types/navigation';
import { countOpenTasks, createCareGaps } from './utils/careGapRadar';
import { ProvinceNavigator } from './components/ProvinceNavigator';
import { ExportReadyPassport } from './components/ExportReadyPassport';
import { SyntheticScenarioLibrary } from './components/SyntheticScenarioLibrary';
import { TrustCenter } from './components/TrustCenter';
import { CopyReadyCaregiverMessage } from './components/CopyReadyCaregiverMessage';
import { SummaryGenerationExplainer } from './components/SummaryGenerationExplainer';
import { CareTaskEvidenceTrace } from './components/CareTaskEvidenceTrace';

function App() {
  const [activeView, setActiveView] = useState<AppView>('overview');
  const careGaps = createCareGaps(demoCarePassport.followUpTasks);
  const openTaskCount = countOpenTasks(demoCarePassport.followUpTasks);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

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
            <button type="button" onClick={() => setActiveView('before')}>
              Prepare for a visit
            </button>
            <button
              type="button"
              className="secondary-button"
              onClick={() => setActiveView('passport')}
            >
              View Care Passport
            </button>
          </div>
        </section>

        <AppNavigation activeView={activeView} onViewChange={setActiveView} />

        <div id="main-content" className="main-content" tabIndex={-1}>
          {activeView === 'overview' && (
            <OverviewSection
              careGapCount={careGaps.length}
              openTaskCount={openTaskCount}
              onViewChange={setActiveView}
            />
          )}

          {activeView === 'before' && <AppointmentPrep />}

          {activeView === 'after' && (
            <>
              <AfterVisitSummary />
              <CareTaskEvidenceTrace />
            </>
          )}

          {activeView === 'family' && <FamilyTranslationMode />}

          {activeView === 'province' && <ProvinceNavigator />}

          {activeView === 'scenarios' && <SyntheticScenarioLibrary />}

          {activeView === 'trust' && <TrustCenter />}

          {activeView === 'timeline' && (
            <CareTimeline
              appointments={demoCarePassport.recentAppointments}
              tasks={demoCarePassport.followUpTasks}
            />
          )}

          {activeView === 'follow-up' && (
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
          )}

          {activeView === 'passport' && (
            <>
              <CarePassportSummary carePassport={demoCarePassport} />
              <ExportReadyPassport />
              <CopyReadyCaregiverMessage />
            </>
          )}

        </div>

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
    </>
  );
}

type OverviewSectionProps = {
  careGapCount: number;
  openTaskCount: number;
  onViewChange: (view: AppView) => void;
};

function OverviewSection({
  careGapCount,
  openTaskCount,
  onViewChange,
}: OverviewSectionProps) {
  return (
    <>
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

      <section className="overview-dashboard" aria-label="CareBridge overview">
        <article>
          <p className="eyebrow">Care Gap Radar</p>
          <h2>{careGapCount} care gap flagged</h2>
          <p>
            CareBridge identifies unfinished loops such as referrals, labs,
            medication questions, and follow-up appointments.
          </p>
          <button type="button" onClick={() => onViewChange('follow-up')}>
            Open follow-up tracker
          </button>
        </article>

        <article>
          <p className="eyebrow">Action Graph</p>
          <h2>{openTaskCount} open tasks connected</h2>
          <p>
            Appointments, instructions, referrals, medications, and family
            summaries are connected into one patient-owned action system.
          </p>
          <button type="button" onClick={() => onViewChange('timeline')}>
            View Action Graph
          </button>
        </article>

        <article>
          <p className="eyebrow">Zero-login handoff</p>
          <h2>Care Passport ready</h2>
          <p>
            Create different summaries for doctors, pharmacists, family
            caregivers, and the patient&apos;s own records.
          </p>
          <button type="button" onClick={() => onViewChange('passport')}>
            Open Care Passport
          </button>
        </article>

        <article>
          <p className="eyebrow">Canada-first navigator</p>
          <h2>Province guidance ready</h2>
          <p>
            Generate province-aware preparation guidance without connecting to
            provincial portals or storing real health card information.
          </p>
          <button type="button" onClick={() => onViewChange('province')}>
            Open province guide
          </button>
        </article>

        <article>
          <p className="eyebrow">Synthetic validation</p>
          <h2>Scenario library added</h2>
          <p>
            Explore realistic synthetic patient journeys that show how
            CareBridge reduces confusion between appointments.
          </p>
          <button type="button" onClick={() => onViewChange('scenarios')}>
            Open scenarios
          </button>
        </article>
        <article>
          <p className="eyebrow">Trust and safety</p>
          <h2>Safety boundaries visible</h2>
          <p>
            Show how the MVP protects users by avoiding diagnosis, avoiding real
            patient data, and clearly separating support from clinical advice.
          </p>
          <button type="button" onClick={() => onViewChange('trust')}>
            Open trust center
          </button>
        </article>
      </section>

      <SummaryGenerationExplainer />
    </>
  );
}

export default App;