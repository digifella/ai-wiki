---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "vulnerability-scoring"
  - "security-metrics"
  - "risk-assessment"
  - "cvss"
  - "cybersecurity-standards"
  - "ai-security"
  - "cisa-guidance"
  - "remediation-prioritization"
aliases:
  - "Common Vulnerability Scoring System"
  - "CVSS"
  - "Vulnerability Severity Metric"
  - "Security Scoring Standard"
summary: "CVSS is an open industry standard that provides a quantitative measure of security vulnerability severity through base, temporal, and environmental metrics, though its standalone utility is being re-evaluated in the cont"
updated: 2026-07-16
group: enterprise-security-risk
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# CVSS

**Common [[concepts/vulnerability|Vulnerability]] Scoring System** (CVSS) is an open industry standard for describing the characteristics of [[concepts/security|security]] vulnerabilities. It provides a quantitative measure of the severity of a vulnerability, enabling organizations to prioritize remediation efforts.

## Core Components

- **Base Metrics**: Inherent characteristics of a vulnerability that are constant over time and across user environments.
- **Temporal Metrics**: Characteristics that change over time, such as the availability of exploits or remediation.
- **Environmental Metrics**: Characteristics specific to a particular organization's computing environment.

## Current Status and Evolution

As of mid-2026, the relevance and application of CVSS are undergoing significant scrutiny due to the [[concepts/emergent-behavior|emergence]] of [[concepts/private-execution|Open-Weight AI]] and complex threat landscapes.

- **Limitations in AI Context**: Traditional CVSS scoring struggles to quantify risks associated with [[concepts/model-weights|model weights]], prompt injection, and data poisoning in [[concepts/large-language-models]].
- **CISA Prioritization Shifts**: The [[entities/cisa|Cybersecurity and Infrastructure Security Agency]] (CISA) is moving beyond static CVSS scores toward dynamic prioritization models that account for exploitability and asset criticality in real-time.
- **Industry Discourse**: Recent discussions suggest a potential "end of CVSS" as a standalone metric, advocating for hybrid models that integrate contextual risk data. See [[lab-notes/2026-07-16-Open-Weight-AI-Security-Risks-and-CISAs-Vulnerability-Pr|Open-Weight AI Security Risks and CISA's Vulnerability Prioritization Model]] for detailed analysis on how [[concepts/ethical-considerations|open-weight AI risks]] are reshaping vulnerability assessment frameworks.

## References

- [Open-Weight AI Security Risks and CISA's Vulnerability Prioritization Model](https://www.youtube.com/watch?v=qXGJ7pi-XOo)
