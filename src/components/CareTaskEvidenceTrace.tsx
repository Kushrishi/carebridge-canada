type EvidenceTraceItem = {
  id: string;
  sourceInstruction: string;
  generatedTask: string;
  reason: string;
  safetyBoundary: string;
};

const evidenceTraceItems: EvidenceTraceItem[] = [
  {
    id: 'referral-trace',
    sourceInstruction: 'We will send a referral to respirology.',
    generatedTask: 'Confirm whether the respirology referral was sent.',
    reason:
      'A referral instruction creates an unfinished loop until the patient knows whether it was sent, where it was sent, and when to follow up.',
    safetyBoundary:
      'CareBridge tracks the referral loop. It does not decide whether the referral is medically necessary.',
  },
  {
    id: 'spirometry-trace',
    sourceInstruction: 'Book spirometry when contacted.',
    generatedTask: 'Track test booking, completion, and result discussion.',
    reason:
      'A test instruction can create multiple follow-up steps: booking, completing the test, and confirming that results were reviewed.',
    safetyBoundary:
      'CareBridge tracks the test process. It does not interpret test results or provide a diagnosis.',
  },
  {
    id: 'medication-trace',
    sourceInstruction:
      'Ask the pharmacist to explain inhaler instructions if prescribed.',
    generatedTask: 'Ask the pharmacist to clarify medication instructions.',
    reason:
      'Medication instructions can be confusing, so the safest generated action is a question for a pharmacist or clinician.',
    safetyBoundary:
      'CareBridge helps prepare medication questions. It does not recommend, approve, stop, or change prescriptions.',
  },
  {
    id: 'follow-up-trace',
    sourceInstruction: 'Follow up in four weeks.',
    generatedTask: 'Confirm follow-up appointment timing.',
    reason:
      'A follow-up instruction should become a trackable appointment or reminder so it is not lost after the visit.',
    safetyBoundary:
      'CareBridge tracks the follow-up plan. It does not decide whether timing is clinically appropriate.',
  },
];

export function CareTaskEvidenceTrace() {
  return (
    <section
      className="evidence-trace-section"
      aria-labelledby="evidence-trace-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Source-grounded workflow</p>
        <h2 id="evidence-trace-title">Care task evidence trace</h2>
        <p>
          Each generated follow-up task should be explainable. CareBridge keeps
          the original instruction, generated task, reasoning, and safety
          boundary together.
        </p>
      </div>

      <div className="evidence-trace-list">
        {evidenceTraceItems.map((item) => (
          <article className="evidence-trace-card" key={item.id}>
            <div>
              <span>Source instruction</span>
              <p>{item.sourceInstruction}</p>
            </div>

            <div>
              <span>Generated task</span>
              <p>{item.generatedTask}</p>
            </div>

            <div>
              <span>Why this task exists</span>
              <p>{item.reason}</p>
            </div>

            <div className="evidence-trace-safety">
              <span>Safety boundary</span>
              <p>{item.safetyBoundary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}