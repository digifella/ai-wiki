---
type: concept
domain: ai-agents
group: safety-guardrails-governance
tags:
  - "concept"
  - "ai-security"
  - "owasp"
  - "ai-agents"
  - "risk-framework"
  - "application-security"
aliases:
  - "OWASP Top 10 for AI"
  - "AI Agent Security Risks"
summary: OWASP framework identifying the top 10 security risks specific to AI agentic applications.
updated: 2026-05-01
---
# Owasp Top 10 For Ai Agents

The OWASP Top 10 for AI Agents is a security framework developed by the [[entities/owasp|Open Worldwide Application Security Project]] to identify and address the most critical vulnerabilities in [[concepts/agentic-ai|autonomous AI systems]]. Unlike traditional OWASP frameworks that focus on [[concepts/web-applications|web applications]] or APIs, this version specifically targets the unique attack surfaces and operational risks introduced by AI agents—systems that can perceive their environment, make decisions, and take actions with minimal human intervention.

## Scope and Application

The framework addresses security concerns that emerge when AI agents operate with degrees of autonomy, including uncontrolled tool usage, prompt injection attacks, inadequate output validation, and unauthorized privilege escalation. These risks differ from conventional [[concepts/software-cybersecurity|software security]] issues because they involve the unpredictable behavior of [[concepts/artificial-intelligence-models|machine learning models]], the delegation of consequential decisions to [[concepts/automations|automated systems]], and the potential for [[concepts/agents|agents]] to interact with [[concepts/external-tools|external tools]] and APIs without proper safeguards.

## Purpose

The framework serves as a guidance document for developers, security teams, and organizations deploying [[concepts/ai-productivity-agents|AI agent systems]]. It prioritizes the most prevalent and impactful security risks to help teams allocate resources effectively when securing [[concepts/agentic-applications|agentic applications]], bridging the gap between [[concepts/safe-ai-use|AI safety]] research and practical security implementation in production environments.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-OWASP-Top-10-Security-Risks-for-AI-Agentic-Applications-Report|OWASP Top 10 Security Risks for AI Agentic Applications Report]] · [▶ source](https://www.youtube.com/watch?v=soFWS8NBcSU)