import { render, screen } from '@testing-library/react';
import { SafetyRulesPanel } from './SafetyRulesPanel';

describe('SafetyRulesPanel', () => {
    it('renders the safety rules engine section', () => {
        render(<SafetyRulesPanel />);

        expect(
            screen.getByRole('heading', {
                name: /safety rules engine/i,
            }),
        ).toBeInTheDocument();

        expect(screen.getByText(/care-continuity lane/i)).toBeInTheDocument();
    });

    it('shows allowed and blocked lanes for safety rules', () => {
        render(<SafetyRulesPanel />);

        expect(screen.getAllByText(/^allowed lane$/i)).toHaveLength(5);
        expect(screen.getAllByText(/^blocked lane$/i)).toHaveLength(5);
        expect(screen.getByRole('heading', { name: /no diagnosis/i })).toBeInTheDocument();
        expect(
            screen.getByRole('heading', {
                name: /no prescription approval/i,
            }),
        ).toBeInTheDocument();
    });

    it('shows an example blocked medication request', () => {
        render(<SafetyRulesPanel />);

        expect(
            screen.getByText(/should i change my dose or stop my medication/i),
        ).toBeInTheDocument();

        expect(screen.getByText(/blocked by safety rules/i)).toBeInTheDocument();
        expect(
            screen.getAllByText(/direct medication questions to a pharmacist/i),
        ).toHaveLength(2);
    });
});