---
type: concept
domain: health-wellbeing
tags:
  - "healthcare-privacy"
  - "us-federal-law"
  - "patient-data-protection"
  - "health-information-security"
  - "hipaa-compliance"
  - "medical-records"
aliases:
  - "Health Insurance Portability and Accountability Act"
  - "HIPAA compliance"
  - "Protected Health Information regulations"
summary: HIPAA is a 1996 US federal law establishing national standards for protecting patient health information (PHI) through privacy, security, and breach notification rules.
updated: 2026-07-11
group: health-practice-patient-knowledge
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=health-wellbeing name=Health & Wellbeing

# HIPAA

**Health Insurance Portability and [[concepts/accountability|Accountability]] Act** (HIPAA) is a US federal law enacted in 1996 that mandates the [[concepts/secure|protection]] of sensitive patient health information. It establishes national standards for the protection of individually identifiable health information, known as **Protected Health Information (PHI)**.

## Core Components
- **[[concepts/privacy|Privacy]] Rule**: Sets national standards for the protection of PHI, including patient rights to access their records.
- **[[concepts/security|Security]] Rule**: Requires administrative, physical, and technical safeguards for electronic PHI (ePHI).
- **Breach Notification Rule**: Mandates notifications in the event of a breach of unsecured PHI.
- **Enforcement Rule**: Establishes penalties for violations.

## Scope and Applicability
Applies to **Covered [[concepts/nodes|Entities]]** (health plans, [[concepts/health|healthcare]] clearinghouses, [[concepts/health-care|healthcare]] providers) and their **Business Associates** who handle PHI. It does not generally apply to [[concepts/apps|health apps]] or devices unless they are integrated with a covered entity's systems and act as business associates.

## Intersections with Global Privacy Frameworks
HIPAA often intersects with international privacy regulations, particularly in the context of [[concepts/digital-health|digital health]] and cross-border data flows.

- **GDPR vs. HIPAA**: While HIPAA is sector-specific (healthcare), the **[[concepts/gdpr]]** is comprehensive. In joint projects involving US and EU entities, both regimes may apply.
- **CCPA**: The **CCPA** ([[concepts/ccpa|California Consumer Privacy Act]]) may overlap with HIPAA for California residents, though HIPAA generally preempts CCPA when handling PHI, except in specific disclosure [[concepts/scenarios|scenarios]].

## Recent Developments in Digital Health Privacy
The rise of [[concepts/contact-tracing|contact tracing]] and [[concepts/digital-surveillance|digital surveillance]] technologies during pandemics has highlighted tensions between [[concepts/population-health|public health]] monitoring and individual privacy rights under HIPAA and other frameworks.

- See analysis in [[lab-notes/2026-05-26-Bradford---COVID-19-contact-tracing-apps|Bradford - COVID-19 contact tracing apps]] for a detailed examination of how HIPAA, **[[concepts/gdpr]]**, and **CCPA** intersect in the context of [[concepts/covid-19|COVID-19]] tracking apps, emphasizing the limitations of HIPAA in covering non-clinical digital surveillance tools.

## Key References
- 45 CFR Parts 160, 162, 164 (HIPAA Rules)
- [[lab-notes/2026-05-26-Bradford---COVID-19-contact-tracing-apps|Bradford - COVID-19 contact tracing apps]]
