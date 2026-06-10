import type { CareGap, FollowUpTask } from '../types/care';

export function createCareGaps(tasks: FollowUpTask[]): CareGap[] {
  return tasks
    .filter((task) => task.status === 'needs-follow-up')
    .map((task) => ({
      id: `gap-${task.id}`,
      title: `${formatCategory(task.category)} may need follow-up`,
      explanation: task.title,
      safePrompt:
        'This may be worth following up with your clinic, pharmacist, or healthcare provider.',
      linkedTaskId: task.id,
    }));
}

export function countOpenTasks(tasks: FollowUpTask[]): number {
  return tasks.filter((task) => task.status !== 'completed').length;
}

function formatCategory(category: FollowUpTask['category']): string {
  return category.charAt(0).toUpperCase() + category.slice(1);
}