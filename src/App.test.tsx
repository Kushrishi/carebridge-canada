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

  it('keeps the safety boundary visible', () => {
    render(<App />);

    expect(
      screen.getByText(/does not diagnose, treat, approve prescriptions/i),
    ).toBeInTheDocument();
  });
});