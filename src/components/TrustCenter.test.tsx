import { render, screen } from '@testing-library/react';
import { TrustCenter } from './TrustCenter';

describe('TrustCenter', () => {
  it('renders the trust center', () => {
    render(<TrustCenter />);

    expect(
      screen.getByRole('heading', {
        name: /privacy and safety trust center/i,
      }),
    ).toBeInTheDocument();
  });

  it('shows MVP data and clinical safety boundaries', () => {
    render(<TrustCenter />);

    expect(
      screen.getByRole('heading', {
        name: /mvp data boundary/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /clinical safety boundary/i,
      }),
    ).toBeInTheDocument();
  });

  it('shows production readiness requirements', () => {
    render(<TrustCenter />);

    expect(
      screen.getByRole('heading', {
        name: /production readiness requirements/i,
      }),
    ).toBeInTheDocument();
  });
});