import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExportReadyPassport } from './ExportReadyPassport';

describe('ExportReadyPassport', () => {
  it('renders the copyable Care Passport section', () => {
    render(<ExportReadyPassport />);

    expect(
      screen.getByRole('heading', {
        name: /copyable care passport/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/carebridge canada care passport/i),
    ).toBeInTheDocument();
  });

  it('copies the export text to clipboard', async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);

    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText,
      },
      configurable: true,
    });

    render(<ExportReadyPassport />);

    await user.click(
      screen.getByRole('button', {
        name: /copy care passport/i,
      }),
    );

    await waitFor(() => {
      expect(writeText).toHaveBeenCalledWith(
        expect.stringContaining('CAREBRIDGE CANADA CARE PASSPORT'),
      );
    });

    expect(screen.getByText(/copied to clipboard/i)).toBeInTheDocument();
  });
});