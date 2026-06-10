import { render, screen } from '@testing-library/react';
import { demoCarePassport } from '../data/demoCareGraph';
import { CarePassportSummary } from './CarePassportSummary';

describe('CarePassportSummary', () => {
  it('renders the Care Passport section', () => {
    render(<CarePassportSummary carePassport={demoCarePassport} />);

    expect(
      screen.getByRole('heading', {
        name: /patient-owned handoff summary/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/Aiden Brooks/i)).toBeInTheDocument();
  });

  it('renders doctor, pharmacist, and family handoffs', () => {
    render(<CarePassportSummary carePassport={demoCarePassport} />);

    expect(
      screen.getByRole('heading', {
        name: /doctor-ready handoff/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /pharmacist-ready handoff/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /family\/caregiver handoff/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders the what changed since last visit summary', () => {
    render(<CarePassportSummary carePassport={demoCarePassport} />);

    expect(screen.getByText(/what changed since last visit/i)).toBeInTheDocument();
    expect(screen.getByText(/main concern being tracked/i)).toBeInTheDocument();
  });

  it('shows export-ready provider support', () => {
    render(<CarePassportSummary carePassport={demoCarePassport} />);

    expect(screen.getByText(/zero-login provider support/i)).toBeInTheDocument();
    expect(screen.getByText(/PDF export planned/i)).toBeInTheDocument();
  });
});