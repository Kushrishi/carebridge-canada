import type { EvidenceCard, FollowUpCategory } from '../types/care';

export type AfterVisitInput = {
  sourceLabel: string;
  visitContext: string;
  instructionText: string;
};

export type GeneratedAfterVisitTask = {
  id: string;
  title: string;
  category: FollowUpCategory;
  reason: string;
};

export type AfterVisitSummary = {
  plainLanguageSummary: string;
  extractedInstructions: string[];
  followUpTasks: GeneratedAfterVisitTask[];
  questionsToAsk: string[];
  evidenceCards: EvidenceCard[];
  safetyReminder: string;
};

export function createAfterVisitSummary(
  input: AfterVisitInput,
): AfterVisitSummary {
  const extractedInstructions = parseInstructionItems(input.instructionText);
  const followUpTasks = createFollowUpTasks(extractedInstructions);
  const questionsToAsk = createQuestionsToAsk(extractedInstructions);

  return {
    plainLanguageSummary: createPlainLanguageSummary(input, extractedInstructions),
    extractedInstructions,
    followUpTasks,
    questionsToAsk,
    evidenceCards: [
      {
        id: 'after-visit-evidence-source',
        label: input.sourceLabel.trim() || 'Pasted instruction',
        sourceType: 'pasted-instruction',
        detail:
          'This after-visit summary is based only on the pasted synthetic instruction text.',
      },
      {
        id: 'after-visit-evidence-context',
        label: input.visitContext.trim() || 'Visit context',
        sourceType: 'appointment-note',
        detail:
          'The visit context helps organize the summary but does not replace clinician instructions.',
      },
    ],
    safetyReminder:
      'This summary helps organize instructions for follow-up. It does not diagnose, treat, approve prescriptions, or replace a healthcare professional.',
  };
}

function parseInstructionItems(instructionText: string): string[] {
  return instructionText
    .split(/\n|;|\./)
    .map((item) => item.trim())
    .filter(Boolean);
}

function createPlainLanguageSummary(
  input: AfterVisitInput,
  instructions: string[],
): string {
  const context = input.visitContext.trim() || 'this healthcare visit';

  if (instructions.length === 0) {
    return `No instructions have been added yet for ${context}. Paste synthetic after-visit notes to generate a plain-language summary.`;
  }

  return `Based on the pasted notes for ${context}, the main next steps are to track follow-up items, clarify unclear instructions, and make sure referrals, tests, medications, and appointments do not get missed.`;
}

function createFollowUpTasks(
  instructions: string[],
): GeneratedAfterVisitTask[] {
  const tasks: GeneratedAfterVisitTask[] = [];

  instructions.forEach((instruction, index) => {
    const lowerInstruction = instruction.toLowerCase();

    if (lowerInstruction.includes('referral')) {
      tasks.push({
        id: `after-visit-task-referral-${index}`,
        title: 'Track whether the referral was sent and received',
        category: 'referral',
        reason: instruction,
      });
    }

    if (
      lowerInstruction.includes('blood') ||
      lowerInstruction.includes('lab') ||
      lowerInstruction.includes('spirometry')
    ) {
      tasks.push({
        id: `after-visit-task-lab-${index}`,
        title: 'Track test booking, completion, and result discussion',
        category: 'lab',
        reason: instruction,
      });
    }

    if (
      lowerInstruction.includes('medication') ||
      lowerInstruction.includes('prescription') ||
      lowerInstruction.includes('inhaler') ||
      lowerInstruction.includes('pharmacist')
    ) {
      tasks.push({
        id: `after-visit-task-medication-${index}`,
        title: 'Ask pharmacist or clinician to clarify medication instructions',
        category: 'medication',
        reason: instruction,
      });
    }

    if (
      lowerInstruction.includes('follow up') ||
      lowerInstruction.includes('follow-up') ||
      lowerInstruction.includes('appointment') ||
      lowerInstruction.includes('weeks')
    ) {
      tasks.push({
        id: `after-visit-task-appointment-${index}`,
        title: 'Confirm follow-up appointment timing',
        category: 'appointment',
        reason: instruction,
      });
    }

    if (
      lowerInstruction.includes('family') ||
      lowerInstruction.includes('caregiver') ||
      lowerInstruction.includes('translate')
    ) {
      tasks.push({
        id: `after-visit-task-family-${index}`,
        title: 'Create a family or caregiver checklist',
        category: 'family',
        reason: instruction,
      });
    }
  });

  if (tasks.length === 0 && instructions.length > 0) {
    return [
      {
        id: 'after-visit-task-general',
        title: 'Review instructions and confirm unclear next steps',
        category: 'question',
        reason: instructions[0],
      },
    ];
  }

  return deduplicateTasks(tasks);
}

function createQuestionsToAsk(instructions: string[]): string[] {
  const questions = new Set<string>();

  instructions.forEach((instruction) => {
    const lowerInstruction = instruction.toLowerCase();

    if (lowerInstruction.includes('referral')) {
      questions.add('Was the referral sent, and when should I follow up if I do not hear back?');
    }

    if (
      lowerInstruction.includes('blood') ||
      lowerInstruction.includes('lab') ||
      lowerInstruction.includes('spirometry')
    ) {
      questions.add('When should the test be booked, completed, and discussed?');
    }

    if (
      lowerInstruction.includes('medication') ||
      lowerInstruction.includes('prescription') ||
      lowerInstruction.includes('inhaler') ||
      lowerInstruction.includes('pharmacist')
    ) {
      questions.add('Can a pharmacist or clinician explain how to use this medication safely?');
    }

    if (
      lowerInstruction.includes('follow up') ||
      lowerInstruction.includes('follow-up') ||
      lowerInstruction.includes('weeks')
    ) {
      questions.add('When exactly should the follow-up appointment happen?');
    }
  });

  if (questions.size === 0) {
    questions.add('What are the most important next steps I should not miss?');
    questions.add('Who should I contact if I am confused about the instructions?');
  }

  return Array.from(questions);
}

function deduplicateTasks(
  tasks: GeneratedAfterVisitTask[],
): GeneratedAfterVisitTask[] {
  const seenTitles = new Set<string>();

  return tasks.filter((task) => {
    if (seenTitles.has(task.title)) {
      return false;
    }

    seenTitles.add(task.title);
    return true;
  });
}