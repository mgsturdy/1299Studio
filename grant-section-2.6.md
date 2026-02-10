## 2.6 Anticipated Tasks

To achieve the project objectives and deliverables, Buzz Me Up will undertake the following major tasks over 9 months. The project is structured to front-load platform parity work, begin voice AI R&D early (Month 2), and sustain R&D effort through Month 8 — ensuring sufficient time for custom model development, fine-tuning, and rigorous validation.

---

### Month 1: Android Build & Core Platform Parity

**Developer Roles (full-time, 3 engineers):**

- Port iOS features to native Android (React Native base).
- Implement cross-platform syncing for AI agent, notifications, and user data.
- Front-end implementation of product designs for Android.

**Product Role (full-time):** Define UX flows, manage sprints, oversee testing, and backlog.

**Estimated cost:**

| Line Item                               | Amount       |
| --------------------------------------- | ------------ |
| Development (3 engineers)               | $27,500      |
| QA & Testing (engineer allocation)      | $2,500       |
| Product Management                      | $7,083       |
| API Usage (R&D)                         | $250         |
| **Phase Total**                         | **$37,333**  |

> Note: QA & Testing is performed by the engineering team; the allocation is carved from total engineering compensation to reflect time spent on quality assurance activities. This convention applies to all phases below.

---

### Months 2–3: Security Integrations & Voice R&D Foundation (Parallel Tracks)

The team splits into two parallel tracks: two engineers focus on onsite integrations while one engineer begins laying the foundation for voice AI R&D.

**Track A — Integrations (2 engineers):**

- Integrate with fob readers, cameras, and other security hardware APIs.
- Build custom integrations for parcel (e.g., Canada Post) and food delivery services (e.g., Uber Eats, DoorDash). These integrations involve secure API hooks to verify delivery details in real-time — e.g., pulling order IDs or tracking codes from provider APIs, cross-referencing against resident preferences, and automating door access grants via Twilio-linked intercoms, all while logging anonymized data for audits.
- Extend AI agent to handle new data sources for verification and automation.

**Track B — Voice R&D Foundation (1 engineer):**

- ASR architecture design and framework evaluation (Hugging Face Transformers, NVIDIA NeMo).
- Build anonymized dataset collection pipeline from intercom/VOIP interactions across enterprise pilots.
- Set up AWS GPU training infrastructure and experiment tracking.
- Benchmark baseline models against VOIP-specific audio conditions (echo, distortion, background noise from building hardware).

**Product Role (full-time):** Map integration flows, scope voice R&D milestones, manage parallel sprints, and backlog.

**Contractor Role (part-time, as needed):** API security expert for privacy-compliant implementations.

**Estimated cost:**

| Line Item                                            | Amount       |
| ---------------------------------------------------- | ------------ |
| Development (3 engineers)                            | $55,000      |
| QA & Testing (engineer allocation)                   | $5,000       |
| Product Management                                   | $14,167      |
| Specialist Contractor (API security)                 | $10,000      |
| API Usage (R&D)                                      | $750         |
| Compute Resources (AWS GPU — initial training setup) | $2,500       |
| **Phase Total**                                      | **$87,417**  |

_~$43,709 per month._

---

### Months 4–6: Core Voice AI R&D

All 3 engineers converge on voice AI. This is the R&D-heaviest phase of the project.

**Developer Roles (full-time, 3 engineers):**

- Fine-tune a custom Automatic Speech Recognition (ASR) model optimized for intercom and VOIP environments. This proprietary model will be trained using anonymized datasets from thousands of real-world calls, focusing on handling speaker variations such as accents, ages, and dialects prevalent in multi-family buildings (e.g., Canadian English, French, and multicultural influences in Vancouver).
- Address VOIP-specific challenges like audio distortion, echo, and background noise from building hardware, aiming to reduce word error rates by 20–30% compared to generic models and achieve transcription accuracy >95% in noisy conditions.
- R&D on real-time voice processing, including noise reduction algorithms targeting <200ms latency.
- Utilize open-source frameworks like Hugging Face Transformers or NVIDIA NeMo, with training conducted on AWS GPU instances to create model weights that are uniquely owned by Buzz Me Up.
- Integrate ASR layer into our Pipecat-orchestrated pipeline, enabling real-time processing with latency under 150ms for 95% of interactions.
- Target call verification accuracy >98%, reducing false escalations to human operators and improving overall system efficiency.

**Product Role (full-time):** Define R&D milestones, model evaluation criteria, data pipeline requirements, and backlog.

**Contractor Role (part-time, as needed):** ML infrastructure and data engineering specialist for training pipeline optimization.

**Estimated cost:**

| Line Item                                               | Amount        |
| ------------------------------------------------------- | ------------- |
| Development (3 engineers)                               | $82,500       |
| QA & Testing (engineer allocation)                      | $7,500        |
| Product Management                                      | $21,250       |
| Specialist Contractor (ML infrastructure)               | $10,000       |
| API Usage (R&D)                                         | $1,500        |
| Compute Resources (AWS GPU — heavy model training)      | $5,000        |
| **Phase Total**                                         | **$127,750**  |

_~$42,583 per month._

---

### Months 7–8: Advanced Voice AI, TTS & System Hardening

**Developer Roles (full-time, 3 engineers):**

- Explore extensions to proprietary Text-to-Speech (TTS) capabilities by fine-tuning models based on ElevenLabs outputs to create branded voice personas tailored to user contexts.
- Continue ASR model refinement based on pilot data and real-world performance metrics.
- Extend AI agent for security and concierge tasks using new hardware data from onsite integrations.
- Develop privacy-compliant analytics for integrations and user behavior.
- Implement continuous application monitoring using Datadog or similar, with dashboards for latency, error rates, and API health; plan includes automated alerts, weekly reviews, and integration with CI/CD for proactive fixes.

**Product Role (full-time):** Define data points, user flows, enterprise tools, and backlog.

**Contractor Role (part-time, as needed):** Monitoring and DevOps specialist.

**Estimated cost:**

| Line Item                                                 | Amount       |
| --------------------------------------------------------- | ------------ |
| Development (3 engineers)                                 | $52,500      |
| QA & Testing (engineer allocation)                        | $7,500       |
| Product Management                                        | $14,167      |
| Specialist Contractor (monitoring/DevOps)                 | $5,000       |
| API Usage (R&D)                                           | $750         |
| Compute Resources (AWS GPU — continued model training)    | $2,500       |
| **Phase Total**                                           | **$82,417**  |

_~$41,209 per month._

---

### Month 9: Testing, Refinement & Launch Preparation

**Developer Roles (full-time, 3 engineers):**

- Full QA, load testing, and iterations based on beta feedback, verifying metrics like 99.9% uptime via AWS CloudWatch and stress testing.
- End-to-end validation of voice AI pipeline: ASR accuracy, TTS quality, latency benchmarks, and call verification rates.
- Finalize onboarding and in-app education for new features.
- Prepare enterprise dashboards for expanded partners.

**Product Role (full-time):** Sprint planning, feedback integration, and backlog.

**Contractor Role (part-time, as needed):** QA specialist.

**Estimated cost:**

| Line Item                               | Amount       |
| --------------------------------------- | ------------ |
| Development (3 engineers)               | $22,500      |
| QA & Testing (engineer allocation)      | $7,500       |
| Product Management                      | $7,083       |
| Specialist Contractor (QA specialist)   | $5,000       |
| API Usage (R&D)                         | $500         |
| **Phase Total**                         | **$42,583**  |

> Note: Month 9 allocates 25% of engineering hours to QA & Testing, reflecting the testing-intensive nature of the launch preparation phase.

---

## Total Estimated Project Cost

### Personnel

| Category                        | Calculation                                                     | Total        |
| ------------------------------- | --------------------------------------------------------------- | ------------ |
| Development (engineering)       | $27,500 + $55,000 + $82,500 + $52,500 + $22,500               | **$240,000** |
| QA & Testing (engineering)      | $2,500 + $5,000 + $7,500 + $7,500 + $7,500                    | **$30,000**  |
| _Engineering subtotal_          | _3 full-time engineers at $120k/yr × 9/12_                     | _$270,000_   |
| Product/Project Management      | $7,083 + $14,167 + $21,250 + $14,167 + $7,083                 | **$63,750**  |
|                                 | _$85k/yr × 9/12_                                               |              |
| Specialist Contractors          | $0 + $10,000 + $10,000 + $5,000 + $5,000                      | **$30,000**  |
| **Personnel Subtotal**          |                                                                 | **$363,750** |

> QA & Testing ($30,000) is performed by the engineering team — not a separate hire. This amount is allocated from the three engineers' total compensation ($270,000) to make the time spent on quality assurance activities visible.

### Non-Personnel (R&D)

| Category                                         | Calculation                              | Total      |
| ------------------------------------------------ | ---------------------------------------- | ---------- |
| API & Cloud Services (R&D)                       | $250 + $750 + $1,500 + $750 + $500      | **$3,750** |
| Compute Resources (GPU instances for training)   | $2,500 + $5,000 + $2,500                | **$10,000** |
| **Non-Personnel Subtotal**                       |                                          | **$13,750** |

### Grand Total

| Verification                                                              | Amount       |
| ------------------------------------------------------------------------- | ------------ |
| By category: $363,750 + $13,750                                          | **$377,500** |
| By phase: $37,333 + $87,417 + $127,750 + $82,417 + $42,583              | **$377,500** |

**Total Estimated Project Cost: $377,500**
