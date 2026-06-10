import type { EvidenceCard } from '../types/care';

export type SupportedFamilyLanguage =
  | 'Punjabi'
  | 'Hindi'
  | 'French'
  | 'Urdu';

export type FamilyTranslationInput = {
  originalInstructions: string;
  plainEnglishSummary: string;
  targetLanguage: SupportedFamilyLanguage;
};

export type FamilyTranslationOutput = {
  plainEnglishSummary: string;
  translatedHeading: string;
  translatedChecklist: string[];
  caregiverChecklist: string[];
  evidenceCards: EvidenceCard[];
  safetyReminder: string;
};

const translatedHeadings: Record<SupportedFamilyLanguage, string> = {
  Punjabi: 'ਪਰਿਵਾਰ ਲਈ ਦੇਖਭਾਲ ਚੈਕਲਿਸਟ',
  Hindi: 'परिवार के लिए देखभाल चेकलिस्ट',
  French: 'Liste de suivi pour la famille',
  Urdu: 'خاندان کے لیے دیکھ بھال کی چیک لسٹ',
};

const translatedChecklistTemplates: Record<SupportedFamilyLanguage, string[]> = {
  Punjabi: [
    'ਡਾਕਟਰ ਜਾਂ ਕਲਿਨਿਕ ਨਾਲ ਰੈਫਰਲ ਦੀ ਸਥਿਤੀ ਪੁੱਛੋ।',
    'ਟੈਸਟ ਜਾਂ ਲੈਬ ਬੁੱਕ ਹੋਈ ਹੈ ਜਾਂ ਨਹੀਂ, ਇਹ ਪੱਕਾ ਕਰੋ।',
    'ਦਵਾਈ ਬਾਰੇ ਕੋਈ ਗਲਤਫ਼ਹਮੀ ਹੋਵੇ ਤਾਂ ਫਾਰਮਾਸਿਸਟ ਨੂੰ ਪੁੱਛੋ।',
    'ਅਗਲੀ ਮੁਲਾਕਾਤ ਕਦੋਂ ਹੈ, ਇਹ ਲਿਖ ਲਵੋ।',
  ],
  Hindi: [
    'डॉक्टर या क्लिनिक से रेफरल की स्थिति पूछें।',
    'जांच या लैब बुक हुई है या नहीं, यह पक्का करें।',
    'दवा को लेकर कोई भ्रम हो तो फार्मासिस्ट से पूछें।',
    'अगली मुलाकात कब है, यह लिख लें।',
  ],
  French: [
    'Demander à la clinique si la référence a été envoyée.',
    'Confirmer quand le test ou le laboratoire doit être réservé.',
    'Demander au pharmacien de clarifier les instructions de médicament.',
    'Noter la date du prochain rendez-vous ou suivi.',
  ],
  Urdu: [
    'ڈاکٹر یا کلینک سے ریفرل کی صورتحال پوچھیں۔',
    'ٹیسٹ یا لیب بک ہوئی ہے یا نہیں، اس کی تصدیق کریں۔',
    'دوا کے بارے میں کوئی الجھن ہو تو فارماسسٹ سے پوچھیں۔',
    'اگلی ملاقات یا فالو اپ کی تاریخ لکھ لیں۔',
  ],
};

export function createFamilyTranslation(
  input: FamilyTranslationInput,
): FamilyTranslationOutput {
  const plainEnglishSummary =
    input.plainEnglishSummary.trim() ||
    'These instructions should be reviewed with the patient, family, and healthcare provider.';

  return {
    plainEnglishSummary,
    translatedHeading: translatedHeadings[input.targetLanguage],
    translatedChecklist: translatedChecklistTemplates[input.targetLanguage],
    caregiverChecklist: [
      'Confirm what needs to happen next.',
      'Write down pending referrals, tests, medications, and appointments.',
      'Ask the patient what changed since the last visit.',
      'Bring unresolved questions to the next doctor or pharmacist visit.',
    ],
    evidenceCards: [
      {
        id: 'family-translation-original',
        label: 'Original pasted instructions',
        sourceType: 'pasted-instruction',
        detail:
          'The family version is based on the original synthetic instructions entered by the user.',
      },
      {
        id: 'family-translation-plain-english',
        label: 'Plain-English summary',
        sourceType: 'family-translation',
        detail:
          'The translated checklist is based on a simplified family-friendly version, not a direct clinical decision.',
      },
    ],
    safetyReminder:
      'This family version is for understanding and organization only. It may contain simplified or simulated translation text and should be confirmed with a clinician or pharmacist.',
  };
}