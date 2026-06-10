import type { Appointment, FollowUpTask } from '../types/care';

export type CareTimelineItem = {
  id: string;
  date?: string;
  dateLabel: string;
  kind: 'Appointment' | 'Follow-up task';
  title: string;
  description: string;
  status?: FollowUpTask['status'];
};

export function createCareTimeline(
  appointments: Appointment[],
  tasks: FollowUpTask[],
): CareTimelineItem[] {
  const appointmentItems: CareTimelineItem[] = appointments.map((appointment) => ({
    id: `timeline-${appointment.id}`,
    date: appointment.date,
    dateLabel: formatDateLabel(appointment.date),
    kind: 'Appointment',
    title: appointment.reason,
    description: `${appointment.appointmentType} with ${appointment.clinicianLabel}. ${appointment.notes}`,
  }));

  const taskItems: CareTimelineItem[] = tasks.map((task) => ({
    id: `timeline-${task.id}`,
    date: task.dueDate,
    dateLabel: task.dueDate ? `Due ${formatDateLabel(task.dueDate)}` : 'No due date yet',
    kind: 'Follow-up task',
    title: task.title,
    description: `Category: ${task.category}`,
    status: task.status,
  }));

  return [...appointmentItems, ...taskItems].sort(sortTimelineItems);
}

function sortTimelineItems(
  firstItem: CareTimelineItem,
  secondItem: CareTimelineItem,
): number {
  if (firstItem.date && secondItem.date) {
    return secondItem.date.localeCompare(firstItem.date);
  }

  if (firstItem.date && !secondItem.date) {
    return -1;
  }

  if (!firstItem.date && secondItem.date) {
    return 1;
  }

  return firstItem.title.localeCompare(secondItem.title);
}

function formatDateLabel(dateValue: string): string {
  const date = new Date(`${dateValue}T12:00:00`);

  return new Intl.DateTimeFormat('en-CA', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}