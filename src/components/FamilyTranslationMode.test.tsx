import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FamilyTranslationMode } from './FamilyTranslationMode';

describe('FamilyTranslationMode', () => {
  it('renders the family translation workflow', () => {
    render(<FamilyTranslationMode />);

    expect(
      screen.getByRole('heading', {
        name: /family translation mode/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /family-friendly explanation/i,
      }),
    ).toBeInTheDocument();
  });

  it('changes the translated heading when the language changes', async () => {
    const user = userEvent.setup();

    render(<FamilyTranslationMode />);

    await user.selectOptions(screen.getByLabelText(/target language/i), 'French');

    expect(
      screen.getByRole('heading', {
        name: /liste de suivi pour la famille/i,
      }),
    ).toBeInTheDocument();
  });

  it('shows original instructions beside the family version', () => {
    render(<FamilyTranslationMode />);

    expect(
      screen.getByRole('heading', {
        name: /original text beside family version/i,
      }),
    ).toBeInTheDocument();

    const generatedFamilyTranslation = screen.getByLabelText(
      /generated family translation/i,
    );

    expect(
      within(generatedFamilyTranslation).getByText(/we will send a referral/i),
    ).toBeInTheDocument();
  });

  it('shows translation safety boundary', () => {
    render(<FamilyTranslationMode />);

    expect(
      screen.getByRole('heading', {
        name: /translation safety boundary/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/confirmed with a clinician or pharmacist/i),
    ).toBeInTheDocument();
  });
});