import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProvinceNavigator } from './ProvinceNavigator';

describe('ProvinceNavigator', () => {
  it('renders the province-aware navigator', () => {
    render(<ProvinceNavigator />);

    expect(
      screen.getByRole('heading', {
        name: /province-aware healthcare navigator/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /saskatchewan health card \/ ehealth context/i,
      }),
    ).toBeInTheDocument();
  });

  it('updates guidance when the selected province changes', async () => {
    const user = userEvent.setup();

    render(<ProvinceNavigator />);

    await user.selectOptions(
      screen.getByRole('combobox', {
        name: /^province$/i,
      }),
      'Quebec',
    );

    expect(
      screen.getByRole('heading', {
        name: /ramq context/i,
      }),
    ).toBeInTheDocument();
  });

  it('shows a combined patient-owned checklist', () => {
    render(<ProvinceNavigator />);

    expect(
      screen.getByRole('heading', {
        name: /combined patient-owned checklist/i,
      }),
    ).toBeInTheDocument();
  });

  it('shows the navigation safety boundary', () => {
    render(<ProvinceNavigator />);

    expect(
      screen.getByRole('heading', {
        name: /navigation safety boundary/i,
      }),
    ).toBeInTheDocument();
  });
});