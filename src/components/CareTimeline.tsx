import type { Appointment, FollowUpTask } from '../types/care';
import { createCareTimeline } from '../utils/careTimeline';
import { StatusBadge } from './StatusBadge';

type CareTimelineProps = {
  appointments: Appointment[];
  tasks: FollowUpTask[];
};

export function CareTimeline({ appointments, tasks }: CareTimelineProps) {
  const timelineItems = createCareTimeline(appointments, tasks);

  return (
    <section className="timeline-section" aria-labelledby="care-timeline-title">
      <div className="section-heading">
        <p className="eyebrow">CareBridge Action Graph</p>
        <h2 id="care-timeline-title">Care timeline</h2>
        <p>
          A connected view of appointments and follow-up tasks, showing how care
          moments become next actions.
        </p>
      </div>

      <div className="timeline-list">
        {timelineItems.map((item) => (
          <article className="timeline-item" key={item.id}>
            <div className="timeline-marker" aria-hidden="true" />
            <div>
              <div className="timeline-meta">
                <span>{item.kind}</span>
                <span>{item.dateLabel}</span>
                {item.status && <StatusBadge status={item.status} />}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}