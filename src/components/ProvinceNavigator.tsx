import { useMemo, useState } from 'react';
import type { Province } from '../types/care';
import {
  createProvinceChecklist,
  getProvinceGuide,
} from '../utils/provinceGuidance';

const provinceOptions: Province[] = [
  'British Columbia',
  'Alberta',
  'Saskatchewan',
  'Ontario',
  'Quebec',
];

export function ProvinceNavigator() {
  const [selectedProvince, setSelectedProvince] =
    useState<Province>('Saskatchewan');

  const guide = getProvinceGuide(selectedProvince);

  const combinedChecklist = useMemo(
    () => createProvinceChecklist(guide),
    [guide],
  );

  return (
    <section className="province-section" aria-labelledby="province-title">
      <div className="section-heading">
        <p className="eyebrow">Canada-first navigation</p>
        <h2 id="province-title">Province-aware healthcare navigator</h2>
        <p>
          Choose a province and generate preparation guidance for appointments,
          referrals, labs, imaging, records, and moving between provinces.
        </p>
      </div>

      <div className="province-grid">
        <div className="province-control-card">
          <label>
            Province
            <select
              value={selectedProvince}
              onChange={(event) =>
                setSelectedProvince(event.target.value as Province)
              }
            >
              {provinceOptions.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </label>

          <article className="summary-card summary-card--primary">
            <p className="eyebrow">Coverage context</p>
            <h3>{guide.healthCoverageLabel}</h3>
            <p>{guide.portalContext}</p>
          </article>

          <article className="summary-card safety-summary">
            <h3>Navigation safety boundary</h3>
            <p>{guide.safetyReminder}</p>
          </article>
        </div>

        <div className="province-output">
          <GuideCard title="What to bring" items={guide.whatToBring} />
          <GuideCard title="Appointment preparation" items={guide.appointmentPrep} />
          <GuideCard title="Referral tracking" items={guide.referralTracking} />
          <GuideCard
            title="Lab and imaging tracking"
            items={guide.labImagingTracking}
          />
          <GuideCard
            title="Moving provinces"
            items={guide.movingProvinceNotes}
          />

          <article className="summary-card">
            <h3>Combined patient-owned checklist</h3>
            <ul>
              {combinedChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

type GuideCardProps = {
  title: string;
  items: string[];
};

function GuideCard({ title, items }: GuideCardProps) {
  return (
    <article className="summary-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}