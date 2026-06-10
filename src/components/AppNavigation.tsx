import type { AppView } from '../types/navigation';

type AppNavigationProps = {
  activeView: AppView;
  onViewChange: (view: AppView) => void;
};

type AppViewConfig = {
  id: AppView;
  label: string;
  description: string;
};

const appViews: AppViewConfig[] = [
  {
    id: 'overview',
    label: 'Overview',
    description: 'Mission, patient context, and product loop',
  },
  {
    id: 'before',
    label: 'Before visit',
    description: 'Appointment preparation and questions',
  },
  {
    id: 'after',
    label: 'After visit',
    description: 'Plain-language instructions and next steps',
  },
  {
    id: 'family',
    label: 'Family translation',
    description: 'Caregiver checklist and translated support',
  },
  {
    id: 'timeline',
    label: 'Action Graph',
    description: 'Connected appointments and care tasks',
  },
  {
    id: 'follow-up',
    label: 'Follow-up',
    description: 'Care Gap Radar and task tracker',
  },
  {
    id: 'passport',
    label: 'Care Passport',
    description: 'Doctor, pharmacist, and family handoffs',
  },
];

export function AppNavigation({
  activeView,
  onViewChange,
}: AppNavigationProps) {
  return (
    <nav className="app-navigation" aria-label="CareBridge product sections">
      {appViews.map((view) => (
        <button
          key={view.id}
          type="button"
          className={
            activeView === view.id ? 'nav-tab nav-tab--active' : 'nav-tab'
          }
          aria-pressed={activeView === view.id}
          onClick={() => onViewChange(view.id)}
        >
          <span>{view.label}</span>
          <small>{view.description}</small>
        </button>
      ))}
    </nav>
  );
}