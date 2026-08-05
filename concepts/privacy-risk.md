---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "privacy"
  - "data-security"
  - "risk-assessment"
  - "contact-tracing"
  - "digital-health"
  - "surveillance"
  - "function-creep"
  - "data-minimization"
aliases:
  - "Privacy Exposure"
  - "Data Privacy Risk"
  - "Information Security Threat"
summary: Privacy risk denotes the potential harm arising from unauthorized access, use, or loss of personal data, particularly in digital health contexts where it requires balancing individual rights against public health benefit
updated: 2026-07-12
group: privacy-security-guardrails
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# privacy risk

**[[concepts/privacy|Privacy]] risk** refers to the potential for harm to individuals or organizations resulting from the [[concepts/security-exposure|unauthorized access]], use, disclosure, or loss of personal data. In the context of [[concepts/digital-health|digital health]] and surveillance technologies, it involves balancing individual rights against collective [[concepts/security|security]] or [[concepts/population-health|public health]] benefits.

## Key Dynamics

- **Risk-Risk Tradeoff**: A framework where users weigh the immediate [[concepts/health|health]] risks of a pandemic against the long-term privacy risks of data collection [[lab-notes/2026-05-26-Duc-Tran---Health-vs.-privacy-The-risk-risk-tradeoff-in|Duc Tran - Health vs. privacy The risk-risk tradeoff in using COVID-19]].
- **Function Creep**: The risk that data collected for specific purposes (e.g., [[concepts/contact-tracing]]) may later be used for unrelated surveillance or profiling.
- **Data Minimization**: The principle that only data strictly necessary for the intended purpose should be collected to mitigate [[concepts/exposure|exposure]].

## Context: COVID-19 Contact Tracing

Research indicates that public acceptance of contact-tracing [[concepts/apps|apps]] depends heavily on the perceived balance between efficacy and intrusion.

- **Empirical Findings**: Tran et al. (2021) utilized fsQCA to analyze the [[concepts/risk-risk-tradeoff]], finding that [[concepts/health-risk|health risk]] perception often overrides privacy concerns during peak pandemic intensity, but privacy risks remain a critical determinant for long-term [[concepts/adoption|adoption]] [[lab-notes/2026-05-26-Duc-Tran---Health-vs.-privacy-The-risk-risk-tradeoff-in|Duc Tran - Health vs. privacy The risk-risk tradeoff in using COVID-19]].
- **Technical Architecture**: Centralized systems pose higher privacy risk due to single points of failure and data aggregation, whereas decentralized models mitigate this by keeping data on local devices.

## Related Concepts

- [[concepts/data-sovereignty]]
- Surveillance Capitalism
- Informed Consent
- [[concepts/gdpr]]
