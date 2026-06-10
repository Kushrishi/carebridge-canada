import { render, screen } from '@testing-library/react';
import { SummaryGenerationExplainer } from './SummaryGenerationExplainer';

describe('SummaryGenerationExplainer', () => {
  it('explains how summaries are generated in the current MVP', () => {
    render(<SummaryGenerationExplainer />);

    expect(
      screen.getByRole('heading', {
        name: /how summaries are generated/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/deterministic rules/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/typescript utility functions/i),
    ).toBeInTheDocument();
  });

  it('distinguishes the current MVP from a future AI and RAG layer', () => {
    render(<SummaryGenerationExplainer />);

    expect(screen.getByText(/future ai\/rag layer/i)).toBeInTheDocument();
    expect(screen.getByText(/source-grounded/i)).toBeInTheDocument();
    expect(screen.getByText(/auditable/i)).toBeInTheDocument();
  });

  it('keeps the safety boundary visible', () => {
    render(<SummaryGenerationExplainer />);

    expect(screen.getByText(/no real patient data is used/i)).toBeInTheDocument();
    expect(screen.getByText(/no ai model is making medical decisions/i)).toBeInTheDocument();
    expect(screen.getByText(/does not replace clinicians/i)).toBeInTheDocument();
  });
});