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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Owasp Top 10 Risks

The OWASP Top 10 for AI Agentic Applications is a security framework developed by the Open Worldwide Application Security Project to identify and mitigate critical vulnerabilities specific to AI agents and autonomous systems. This framework extends traditional OWASP security guidance by addressing risks that emerge when AI systems operate with agency—the ability to take independent actions, make decisions, and interact with external systems. It provides structured guidance for developers, security teams, and organizations building or deploying AI agents.

## Scope and Distinct Risks

Unlike standard web application security models, this framework focuses on the unique threats posed by autonomous decision-making and tool use. It categorizes risks such as prompt injection, where malicious inputs manipulate agent behavior, and supply chain vulnerabilities arising from the integration of third-party models and data sources. The framework also addresses issues related to data privacy, ensuring that sensitive information is not inadvertently exposed through agent interactions or logging mechanisms.

## Mitigation and Implementation

The framework offers actionable mitigation strategies tailored to the lifecycle of agentic applications. Recommendations include implementing strict input validation, enforcing least-privilege access for agent tools, and maintaining comprehensive audit trails for autonomous actions. By adopting these controls, organizations can reduce the attack surface associated with AI agents while maintaining their operational utility and reliability in complex environments.

## Source Notes
- 2026-04-08: [[lab-notes/2026-04-08-OWASP-Top-10-Security-Risks-for-AI-Agentic-Applications-Report|OWASP Top 10 Security Risks for AI Agentic Applications Report]] · [▶ source](https://www.youtube.com/watch?v=soFWS8NBcSU)
