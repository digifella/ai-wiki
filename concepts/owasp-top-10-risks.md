---
type: concept
domain: tools-platforms-infrastructure
group: privacy-security-guardrails
tags:
  - "concept"
  - "owasp"
  - "ai-security"
  - "agentic-applications"
  - "risk-management"
  - "security-frameworks"
aliases:
  - "OWASP Top 10 for AI"
  - "AI Agent Security Risks"
summary: OWASP framework identifying the top 10 security risks for AI agentic applications.
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Owasp Top 10 Risks

The OWASP Top 10 for AI Agentic Applications is a security framework developed by the Open Worldwide Application Security Project to identify and mitigate critical vulnerabilities specific to AI agents and autonomous systems. This framework extends traditional OWASP security guidance by addressing risks that emerge when AI systems operate with agency—the ability to take independent actions to achieve goals. It provides a standardized list of the most significant security concerns for developers and security professionals building applications where AI models can perceive, reason, and act without direct human intervention at every step.

The framework categorizes risks into distinct areas such as injection attacks against large language models, flaws in the agent's planning and execution logic, and vulnerabilities in tool use and API integration. It also addresses issues related to data privacy, model supply chain integrity, and the potential for unintended consequences arising from misaligned objectives. By focusing on the unique attack surfaces created by autonomous decision-making, the list helps organizations prioritize defenses against threats that do not exist in static software architectures.

Implementing the OWASP Top 10 for AI Agentic Applications requires a shift in security practices to include runtime monitoring, strict permission boundaries for agent actions, and robust validation of both input data and output actions. The framework serves as a foundational reference for auditing AI systems, ensuring that autonomous capabilities do not compromise the confidentiality, integrity, or availability of the underlying infrastructure or the data they process.

## Source Notes
- 2026-04-08: [[lab-notes/2026-04-08-OWASP-Top-10-Security-Risks-for-AI-Agentic-Applications-Report|OWASP Top 10 Security Risks for AI Agentic Applications Report]] · [▶ source](https://www.youtube.com/watch?v=soFWS8NBcSU)
