import type { FollowUpTask } from '../types/care';
import { countOpenTasks, createCareGaps } from './careGapRadar';

const tasks: FollowUpTask[] = [
  {
    id: 'task-1',
    title: 'Confirm referral was sent',
    category: 'referral',
    status: 'needs-follow-up',
  },
  {
    id: 'task-2',
    title: 'Book bloodwork',
    category: 'lab',
    status: 'pending',
  },
  {
    id: 'task-3',
    title: 'Pick up medication',
    category: 'medication',
    status: 'completed',
  },
];

describe('Care Gap Radar utilities', () => {
  it('creates care gaps only for tasks that need follow-up', () => {
    const gaps = createCareGaps(tasks);

    expect(gaps).toHaveLength(1);
    expect(gaps[0].title).toMatch(/referral may need follow-up/i);
    expect(gaps[0].safePrompt).toMatch(/healthcare provider/i);
  });

  it('counts open tasks but excludes completed tasks', () => {
    expect(countOpenTasks(tasks)).toBe(2);
  });
});