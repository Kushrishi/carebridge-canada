import { render, screen } from '@testing-library/react';
import { CareTaskEvidenceTrace } from './CareTaskEvidenceTrace';

describe('CareTaskEvidenceTrace', () => {
    it('renders the care task evidence trace section', () => {
        render(<CareTaskEvidenceTrace />);

        expect(
            screen.getByRole('heading', {
                name: /care task evidence trace/i,
            }),
        ).toBeInTheDocument();

        expect(screen.getAllByText(/^source instruction$/i)).toHaveLength(4);
        expect(screen.getAllByText(/^generated task$/i)).toHaveLength(4);
    });

    it('connects source instructions to generated follow-up tasks', () => {
        render(<CareTaskEvidenceTrace />);

        expect(
            screen.getByText(/we will send a referral to respirology/i),
        ).toBeInTheDocument();

        expect(
            screen.getByText(/confirm whether the respirology referral was sent/i),
        ).toBeInTheDocument();

        expect(
            screen.getByText(/book spirometry when contacted/i),
        ).toBeInTheDocument();

        expect(
            screen.getByText(/track test booking, completion, and result discussion/i),
        ).toBeInTheDocument();
    });

    it('keeps safety boundaries attached to generated tasks', () => {
        render(<CareTaskEvidenceTrace />);

        expect(
            screen.getByText(/does not interpret test results/i),
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /does not recommend, approve, stop, or change prescriptions/i,
            ),
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /does not decide whether the referral is medically necessary/i,
            ),
        ).toBeInTheDocument();
    });
});