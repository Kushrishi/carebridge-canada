import type { Appointment, FollowUpTask } from '../types/care';
import { createCareTimeline } from './careTimeline';

const appointments: Appointment[] = [
  {
    id: 'appointment-1',
    date: '2026-06-12',
    appointmentType: 'Family doctor visit',
    clinicianLabel: 'Family doctor',
    reason: 'Discuss referral plan',
    notes: 'Referral and follow-up were discussed.',
  },
];

const tasks: FollowUpTask[] = [
  {
    id: 'task-1',
    title: 'Book follow-up appointment',
    category: 'appointment',
    status: 'pending',
    dueDate: '2026-07-10',
  },
  {
    id: 'task-2',
    title: 'Ask pharmacist medication question',
    category: 'medication',
    status: 'needs-follow-up',
  },
];

describe('createCareTimeline', () => {
  it('combines appointments and tasks into timeline items', () => {
    const timeline = createCareTimeline(appointments, tasks);

    expect(timeline).toHaveLength(3);
    expect(timeline.some((item) => item.kind === 'Appointment')).toBe(true);
    expect(timeline.some((item) => item.kind === 'Follow-up task')).toBe(true);
  });

  it('keeps undated tasks in the timeline with a clear label', () => {
    const timeline = createCareTimeline(appointments, tasks);

    expect(
      timeline.some((item) => item.dateLabel === 'No due date yet'),
    ).toBe(true);
  });

  it('sorts dated items with later dates first', () => {
    const timeline = createCareTimeline(appointments, tasks);

    expect(timeline[0].title).toBe('Book follow-up appointment');
  });
});