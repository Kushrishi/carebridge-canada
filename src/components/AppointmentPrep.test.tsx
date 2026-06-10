import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppointmentPrep } from './AppointmentPrep';

describe('AppointmentPrep', () => {
  it('renders the appointment preparation workflow', () => {
    render(<AppointmentPrep />);

    expect(
      screen.getByRole('heading', {
        name: /appointment preparation/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/30-second doctor summary/i),
    ).toBeInTheDocument();
  });

  it('updates the generated summary when the user edits the main concern', async () => {
    const user = userEvent.setup();

    render(<AppointmentPrep />);

    const mainConcernInput = screen.getByLabelText(/main concern/i);

    await user.clear(mainConcernInput);
    await user.type(mainConcernInput, 'new dizziness after medication change');

    await user.click(
      screen.getByRole('button', {
        name: /generate appointment summary/i,
      }),
    );

    const generatedSummary = screen.getByLabelText(
      /generated appointment preparation summary/i,
    );

    expect(
      within(generatedSummary).getByText(
        /my main concern is new dizziness after medication change/i,
      ),
    ).toBeInTheDocument();
  });

  it('shows the safety boundary', () => {
    render(<AppointmentPrep />);

    expect(screen.getByText(/does not diagnose/i)).toBeInTheDocument();
  });
});