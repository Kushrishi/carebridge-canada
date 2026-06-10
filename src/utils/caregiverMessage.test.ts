import {
  demoCaregiverMessage,
  formatCaregiverMessage,
} from './caregiverMessage';

describe('caregiverMessage', () => {
  it('formats a copy-ready caregiver message', () => {
    const text = formatCaregiverMessage(demoCaregiverMessage);

    expect(text).toContain('CareBridge caregiver note');
    expect(text).toContain('What I may need help with');
    expect(text).toContain('Safety note');
  });

  it('includes concrete caregiver support tasks', () => {
    const text = formatCaregiverMessage(demoCaregiverMessage);

    expect(text).toContain('- Help me remember to confirm whether the referral was sent.');
    expect(text).toContain('- Help me write down medication questions for the pharmacist.');
  });

  it('keeps caregivers away from medical decision-making', () => {
    const text = formatCaregiverMessage(demoCaregiverMessage);

    expect(text).toMatch(/do not make medical decisions/i);
    expect(text).toMatch(/confirmed with a doctor, nurse, pharmacist/i);
  });
});