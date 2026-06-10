import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppNavigation } from './AppNavigation';

describe('AppNavigation', () => {
  it('renders product section buttons', () => {
    render(<AppNavigation activeView="overview" onViewChange={() => {}} />);

    expect(
      screen.getByRole('button', {
        name: /overview/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /care passport/i,
      }),
    ).toBeInTheDocument();
  });

  it('calls onViewChange when a section is selected', async () => {
    const user = userEvent.setup();
    const onViewChange = vi.fn();

    render(
      <AppNavigation activeView="overview" onViewChange={onViewChange} />,
    );

    await user.click(
      screen.getByRole('button', {
        name: /family translation/i,
      }),
    );

    expect(onViewChange).toHaveBeenCalledWith('family');
  });
});