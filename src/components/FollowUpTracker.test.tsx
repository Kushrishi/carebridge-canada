import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { FollowUpTask } from '../types/care';
import { FollowUpTracker } from './FollowUpTracker';

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

describe('FollowUpTracker', () => {
  it('renders task summary counts', () => {
    render(<FollowUpTracker tasks={tasks} />);

    expect(screen.getByText(/follow-up tracker/i)).toBeInTheDocument();
    expect(screen.getByText(/total tasks/i)).toBeInTheDocument();
  });

  it('filters tasks by status', async () => {
    const user = userEvent.setup();

    render(<FollowUpTracker tasks={tasks} />);

    await user.click(
      screen.getByRole('button', {
        name: /needs follow-up/i,
      }),
    );

    expect(screen.getByText(/confirm referral was sent/i)).toBeInTheDocument();
    expect(screen.queryByText(/book bloodwork/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/pick up medication/i)).not.toBeInTheDocument();
  });
});