---
type: concept
domain: ai-agents
group: ai-foundations-concepts
tags:
  - "concept"
  - "agentic-applications"
  - "ai-security"
  - "owasp"
  - "risk-management"
  - "ai-agents"
aliases:
  - "AI Agent Applications"
  - "Agentic AI Systems"
summary: Applications built using AI agents, with documented security risks outlined in the OWASP Top 10 report for agentic systems.
updated: 2026-10-01
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Ai Agentic Applications

AI agentic applications are software systems centered on autonomous or semi-autonomous AI agents capable of perceiving their environment, making decisions, and executing actions with minimal human intervention. Unlike traditional AI models that process input and generate output in a single pass, these systems incorporate planning, reasoning, and tool-use capabilities. This architecture enables agents to accomplish complex, multi-step tasks by dynamically adapting to changing conditions and utilizing external resources to achieve specific goals.

These applications operate across diverse domains, including customer service automation, business process optimization, research assistance, and system administration. By breaking down high-level objectives into manageable sub-tasks, agentic systems can interact with APIs, databases, and other software tools to perform workflows that would otherwise require significant manual oversight. This capability distinguishes them from static predictive models, as they maintain state and context over extended periods to complete long-running processes.

The deployment of AI agentic applications introduces distinct security challenges due to their autonomous nature and reliance on external tools. The OWASP Top 10 for Agentic Systems outlines critical risks associated with these architectures, including unauthorized tool use, prompt injection, and insufficient oversight of agent actions. Because agents can modify data or trigger actions in connected systems, ensuring proper authentication, authorization, and monitoring is essential to prevent unintended consequences or malicious exploitation.

## Source Notes
- 2026-04-08: [[lab-notes/2026-04-08-OWASP-Top-10-Security-Risks-for-AI-Agentic-Applications-Report|OWASP Top 10 Security Risks for AI Agentic Applications Report]] · [▶ source](https://www.youtube.com/watch?v=soFWS8NBcSU)
