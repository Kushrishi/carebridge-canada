# CareBridge Canada — Validation Plan

CareBridge should be validated as both a **technical system** and a **startup hypothesis**. A polished demo is not evidence that the product is useful, and broad evidence that healthcare continuity is difficult is not evidence that CareBridge has found the right customer or workflow.

## 1. Product-discovery objective

The immediate product question is:

> **Which non-clinical continuity failure happens often enough, hurts enough, and has a clear enough owner/buyer to justify a product?**

The current commercial wedge is intentionally not frozen.

A leading hypothesis to test is provider-funded, B2B2C closed-loop referral/follow-up work, but discovery should be allowed to reject that hypothesis.

## 2. Interview target

Aim for roughly **15–20 high-quality conversations** before making a major product pivot.

Suggested mix:

- **5–7 operational users** — clinic managers, medical office assistants, referral coordinators, care coordinators, discharge/follow-up staff;
- **4–6 patients or family caregivers** who have experienced multi-step or fragmented care; and
- **4–6 clinical users** — physicians, nurses, pharmacists, or other professionals who see continuity failures in practice.

Operational users are especially important because they can reveal where staff time, handoffs, status calls, and failed loops create measurable cost.

## 3. Interview method

Do **not** begin by pitching CareBridge or asking whether an AI assistant sounds useful.

Prefer concrete recent examples:

- Tell me about the last referral that did not go smoothly.
- What happens after a referral is sent?
- How do you know the patient was actually scheduled?
- Who notices if nobody follows up?
- What happens when a result needs follow-up?
- Which system is supposed to track that?
- What work still happens through phone, fax, inboxes, spreadsheets, or manual reminders?
- How often does that happen?
- Who spends time fixing it?
- What happens if the loop is never closed?
- What existing product is supposed to solve this?
- Why does that product or workflow still fail?
- What would you never allow software to do automatically?
- Who would need to approve a new tool?
- Who would actually pay for it?

For patients/caregivers, ask for recent workflows rather than preferences:

- Walk me through what happened after your last specialist, hospital, or clinic visit.
- What did you have to remember or chase yourself?
- How did you know what was still pending?
- Who helped you keep track of it?
- What information was missing or difficult to understand?
- What tools did you actually use: portal, notes app, paper, messages, calendar, phone calls?

## 4. Evidence to capture

For every recurring problem, record:

- **frequency** — how often it occurs;
- **severity** — what happens when it fails;
- **existing work** — what people already do to manage it;
- **workflow owner** — who is responsible for closing the loop;
- **buyer** — who has budget or authority;
- **existing alternatives** — software/processes already used;
- **switching friction** — integration, training, compliance, procurement;
- **measurable outcome** — what would improve if the problem were solved.

Avoid treating enthusiasm as validation.

## 5. Continue / pivot / freeze criteria

### Continue a startup direction when

A recurring workflow failure appears across independent interviews, someone clearly owns the work, the current solution is inadequate, and there is a measurable outcome that matters to a plausible buyer.

### Pivot when

The continuity problem is real but the original user, buyer, or workflow is wrong.

For example, patients may value the concept while clinics bear most of the operational cost. That would support testing a B2B2C model rather than forcing a direct-to-consumer product.

### Freeze the startup thesis when

After a reasonable discovery set, pain is mostly anecdotal, existing tools solve it adequately, no buyer cares enough to change workflow, or the only viable value proposition requires crossing into high-risk clinical decision-making.

CareBridge can still remain useful engineering evidence even if the startup thesis is frozen.

## 6. Candidate business metrics

Do not optimize around vanity metrics such as chatbot conversations or time spent in the app.

If a provider-side wedge is validated, useful outcomes may include:

- follow-up completion rate;
- unresolved referral rate;
- time from referral/order to next completed step;
- staff touches per patient/case;
- inbound status calls/messages;
- no-show recovery;
- percentage of open loops with a known owner/status; and
- manual coordination time.

The correct metric depends on the validated workflow.

## 7. Technical validation

The private prototype has a separate technical milestone: bounded model-directed tool use.

Technical evaluation should compare model-directed routing with a deterministic baseline and measure at least:

- correct tool selection;
- correct no-tool behavior;
- schema-valid arguments;
- invented/nonexistent tool rate;
- unsafe-action rate;
- evidence retrieval/fidelity;
- grounded final claims;
- deterministic error handling;
- latency; and
- model/token cost.

Technical success does not validate the business. Business discovery does not validate model reliability. Keep the two evidence streams separate.

## 8. Data boundary

Discovery interviews should not be used as a reason to collect real medical records or PHI into the prototype.

Do not ask interviewees to upload private records, prescriptions, lab results, or identifying clinical data. The current engineering environments remain synthetic-only until privacy, legal, security, and product requirements justify a separate real-data phase.

## 9. Decision rule

Every meaningful CareBridge phase should produce at least one of:

1. **new technical evidence**, or
2. **new customer/workflow evidence**.

If a proposed task produces neither, it is probably not the next thing to build.
