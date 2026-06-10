import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('CareBridge Canada app shell', () => {
  it('renders the CareBridge slogan and section navigation', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /never lose the thread of your care/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('navigation', {
        name: /carebridge product sections/i,
      }),
    ).toBeInTheDocument();
  });

  it('shows summary generation transparency on the overview page', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /how summaries are generated/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/deterministic rules/i)).toBeInTheDocument();
  });

  it('provides a skip link to the main content', () => {
    render(<App />);

    const skipLink = screen.getByRole('link', {
      name: /skip to main content/i,
    });

    expect(skipLink).toHaveAttribute('href', '#main-content');

    expect(screen.getByRole('main')).toBeInTheDocument();

    const mainContent = document.querySelector('#main-content');

    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveAttribute('tabindex', '-1');
  });

  it('opens the appointment preparation section from the hero action', async () => {
    const user = userEvent.setup();

    render(<App />);

    const primaryActions = screen.getByLabelText(/primary actions/i);

    await user.click(
      within(primaryActions).getByRole('button', {
        name: /prepare for a visit/i,
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: /appointment preparation/i,
      }),
    ).toBeInTheDocument();
  });

  it('switches to the after-visit workflow from navigation', async () => {
    const user = userEvent.setup();

    render(<App />);

    const navigation = screen.getByRole('navigation', {
      name: /carebridge product sections/i,
    });

    await user.click(
      within(navigation).getByRole('button', {
        name: /after visit/i,
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: /after-visit summary/i,
      }),
    ).toBeInTheDocument();
  });

  it('switches to the Care Passport from navigation', async () => {
    const user = userEvent.setup();

    render(<App />);

    const navigation = screen.getByRole('navigation', {
      name: /carebridge product sections/i,
    });

    await user.click(
      within(navigation).getByRole('button', {
        name: /care passport/i,
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: /patient-owned handoff summary/i,
      }),
    ).toBeInTheDocument();
  });

  it('shows the export-ready Care Passport in the passport section', async () => {
    const user = userEvent.setup();

    render(<App />);

    const navigation = screen.getByRole('navigation', {
      name: /carebridge product sections/i,
    });

    await user.click(
      within(navigation).getByRole('button', {
        name: /care passport/i,
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: /copyable care passport/i,
      }),
    ).toBeInTheDocument();
  });

  it('shows the copy-ready caregiver message in the passport section', async () => {
    const user = userEvent.setup();

    render(<App />);

    const navigation = screen.getByRole('navigation', {
      name: /carebridge product sections/i,
    });

    await user.click(
      within(navigation).getByRole('button', {
        name: /care passport/i,
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: /copy-ready caregiver message/i,
      }),
    ).toBeInTheDocument();
  });

  it('switches to the province guide from navigation', async () => {
    const user = userEvent.setup();

    render(<App />);

    const navigation = screen.getByRole('navigation', {
      name: /carebridge product sections/i,
    });

    await user.click(
      within(navigation).getByRole('button', {
        name: /province guide/i,
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: /province-aware healthcare navigator/i,
      }),
    ).toBeInTheDocument();
  });

  it('switches to the scenario library from navigation', async () => {
    const user = userEvent.setup();

    render(<App />);

    const navigation = screen.getByRole('navigation', {
      name: /carebridge product sections/i,
    });

    await user.click(
      within(navigation).getByRole('button', {
        name: /scenarios/i,
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: /patient scenario library/i,
      }),
    ).toBeInTheDocument();
  });
  it('switches to the trust center from navigation', async () => {
    const user = userEvent.setup();

    render(<App />);

    const navigation = screen.getByRole('navigation', {
      name: /carebridge product sections/i,
    });

    await user.click(
      within(navigation).getByRole('button', {
        name: /trust center/i,
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: /privacy and safety trust center/i,
      }),
    ).toBeInTheDocument();
  });

  it('keeps the safety boundary visible', () => {
    render(<App />);

    expect(
      screen.getByText(/does not diagnose, treat, approve prescriptions/i),
    ).toBeInTheDocument();
  });
});