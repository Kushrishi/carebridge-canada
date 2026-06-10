import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AfterVisitSummary } from './AfterVisitSummary';

describe('AfterVisitSummary', () => {
  it('renders the after-visit summary workflow', () => {
    render(<AfterVisitSummary />);

    expect(
      screen.getByRole('heading', {
        name: /after-visit summary/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/plain-language summary/i),
    ).toBeInTheDocument();
  });

  it('updates generated tasks when pasted instructions change', async () => {
    const user = userEvent.setup();

    render(<AfterVisitSummary />);

    const instructionInput = screen.getByLabelText(
      /pasted synthetic instructions/i,
    );

    await user.clear(instructionInput);
    await user.type(
      instructionInput,
      'Complete blood work next week. Ask pharmacist about prescription instructions.',
    );

    await user.click(
      screen.getByRole('button', {
        name: /generate after-visit plan/i,
      }),
    );

    expect(
      screen.getByText(/track test booking, completion, and result discussion/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /ask pharmacist or clinician to clarify medication instructions/i,
      ),
    ).toBeInTheDocument();
  });

  it('shows evidence cards and safety boundary', () => {
    render(<AfterVisitSummary />);

    expect(
      screen.getByRole('heading', {
        name: /evidence cards/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/does not diagnose/i)).toBeInTheDocument();
  });
});