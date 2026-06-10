import {
  createAppointmentPrepSummary,
  type AppointmentPrepInput,
} from './appointmentPrep';

const input: AppointmentPrepInput = {
  appointmentType: 'family doctor visit',
  mainConcern: 'shortness of breath',
  symptomTimeline: 'Worse when walking\nImproves with rest',
  currentMedications: 'Ask about inhaler instructions',
  recentChanges: 'Referral still pending\nSpirometry not booked',
  topQuestions: 'Was referral sent?\nWhen should I follow up?',
};

describe('createAppointmentPrepSummary', () => {
  it('creates a doctor-ready 30-second summary', () => {
    const summary = createAppointmentPrepSummary(input);

    expect(summary.thirtySecondSummary).toMatch(/family doctor visit/i);
    expect(summary.thirtySecondSummary).toMatch(/shortness of breath/i);
    expect(summary.thirtySecondSummary).toMatch(/referral still pending/i);
  });

  it('parses multiline fields into structured lists', () => {
    const summary = createAppointmentPrepSummary(input);

    expect(summary.symptomTimelineItems).toEqual([
      'Worse when walking',
      'Improves with rest',
    ]);

    expect(summary.questionsForClinician).toEqual([
      'Was referral sent?',
      'When should I follow up?',
    ]);
  });

  it('keeps safety reminder non-diagnostic', () => {
    const summary = createAppointmentPrepSummary(input);

    expect(summary.safetyReminder).toMatch(/does not diagnose/i);
    expect(summary.safetyReminder).toMatch(/clinical judgment/i);
  });
});