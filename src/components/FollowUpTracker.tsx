import { useMemo, useState } from 'react';
import type { FollowUpStatus, FollowUpTask } from '../types/care';
import { StatusBadge } from './StatusBadge';

type FollowUpTrackerProps = {
  tasks: FollowUpTask[];
};

type TaskFilter = FollowUpStatus | 'all';

const filterLabels: Record<TaskFilter, string> = {
  all: 'All',
  'needs-follow-up': 'Needs follow-up',
  pending: 'Pending',
  completed: 'Completed',
};

const filters: TaskFilter[] = ['all', 'needs-follow-up', 'pending', 'completed'];

export function FollowUpTracker({ tasks }: FollowUpTrackerProps) {
  const [activeFilter, setActiveFilter] = useState<TaskFilter>('all');

  const filteredTasks = useMemo(() => {
    if (activeFilter === 'all') {
      return tasks;
    }

    return tasks.filter((task) => task.status === activeFilter);
  }, [activeFilter, tasks]);

  const needsFollowUpCount = tasks.filter(
    (task) => task.status === 'needs-follow-up',
  ).length;

  const pendingCount = tasks.filter((task) => task.status === 'pending').length;

  return (
    <section className="tracker-panel" aria-labelledby="follow-up-tracker-title">
      <div className="section-heading">
        <p className="eyebrow">Closed-loop follow-up</p>
        <h2 id="follow-up-tracker-title">Follow-up tracker</h2>
        <p>
          Track whether referrals, labs, medications, appointments, and family
          instructions are completed, pending, or worth following up.
        </p>
      </div>

      <div className="tracker-summary" aria-label="Follow-up summary">
        <div>
          <strong>{needsFollowUpCount}</strong>
          <span>needs follow-up</span>
        </div>
        <div>
          <strong>{pendingCount}</strong>
          <span>pending</span>
        </div>
        <div>
          <strong>{tasks.length}</strong>
          <span>total tasks</span>
        </div>
      </div>

      <div className="tracker-filters" aria-label="Task status filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={activeFilter === filter ? 'filter-button active' : 'filter-button'}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filterLabels[filter]}
          </button>
        ))}
      </div>

      <div className="task-list" aria-label="Filtered follow-up tasks">
        {filteredTasks.map((task) => (
          <article className="task-card" key={task.id}>
            <div>
              <span>{task.category}</span>
              <h3>{task.title}</h3>
              {task.dueDate && <p>Due: {task.dueDate}</p>}
              <p className="task-question">
                Ask: Was this done, is it still pending, or should it be raised
                at the next visit?
              </p>
            </div>
            <StatusBadge status={task.status} />
          </article>
        ))}
      </div>
    </section>
  );
}