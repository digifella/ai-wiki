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
summary: "Applications built using AI agents, with documented security risks outlined in the OWASP Top 10 report for agentic systems."
updated: 2026-05-01
---
# AI Agentic Applications

AI agentic applications are [[concepts/software|software]] systems built around autonomous or semi-[[concepts/action-oriented-ai|autonomous AI agents]] that can perceive their environment, make decisions, and take actions with minimal human intervention. These applications extend beyond traditional [[concepts/ai-models|AI models]] by incorporating planning, [[concepts/reasoning|reasoning]], and [[concepts/tool-use-automation|tool-use]] capabilities, enabling [[concepts/agents|agents]] to accomplish [[concepts/complex-tasks|complex tasks]] across domains such as customer service, business [[concepts/automation|automation]], research, and system administration.

## Security Considerations

The [[concepts/deployment|deployment]] of [[concepts/agentic-ai|AI agents]] introduces distinct security challenges that differ from conventional software systems. The [[concepts/owasp-top-10-for-ai-agents|OWASP Top 10 for AI]] [[concepts/agentic-frameworks|Agentic Systems]] documents the primary security risks specific to these applications, including inadequate [[concepts/input-validation|input validation]], insecure tool integration, unrestricted agent actions, and insufficient monitoring of agent behavior. These risks arise from the increased autonomy agents possess and their ability to interact with external systems and data sources.

Organizations building [[concepts/agentic-applications|agentic applications]] must implement robust security controls at multiple layers: agent instruction design, tool permissions and sandboxing, decision logging and audit trails, and human oversight mechanisms. The autonomous [[entities/nature|nature]] of agents means that security failures can propagate quickly and across multiple systems, making proactive [[concepts/risk-assessment|risk assessment]] and containment strategies essential during both development and deployment phases.

## Source Notes
- 2026-04-08: [[lab-notes/2026-04-08-OWASP-Top-10-Security-Risks-for-AI-Agentic-Applications-Report|OWASP Top 10 Security Risks for AI Agentic Applications Report]] · [▶ source](https://www.youtube.com/watch?v=soFWS8NBcSU)