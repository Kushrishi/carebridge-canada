import type { FollowUpStatus } from '../types/care';

type StatusBadgeProps = {
  status: FollowUpStatus;
};

const statusLabels: Record<FollowUpStatus, string> = {
  pending: 'Pending',
  'needs-follow-up': 'Needs follow-up',
  completed: 'Completed',
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`status-badge status-badge--${status}`}>
      {statusLabels[status]}
    </span>
  );
}