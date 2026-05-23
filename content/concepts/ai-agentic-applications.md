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
updated: 2026-05-24
---
# AI Agentic Applications

AI agentic applications are software systems built around autonomous or semi-autonomous AI agents that can perceive their environment, make decisions, and take actions with minimal human intervention. Unlike traditional AI models that process input and generate output, agentic systems incorporate planning, reasoning, and tool-use capabilities that enable agents to accomplish complex tasks through iterative decision-making and environmental interaction.

## Architecture and Capabilities

These applications typically combine large language models with external tools, APIs, and knowledge systems that agents can access and coordinate. Common components include perception systems for environmental sensing, decision-making modules for action selection, and execution layers that interact with external systems. Agentic applications can range from simple chatbots with tool access to complex autonomous systems that manage workflows across multiple domains, such as customer service, data analysis, code generation, or business process automation.

## Security Considerations

The autonomous nature of agentic applications introduces security challenges distinct from traditional AI systems. The OWASP Top 10 for Large Language Model Applications, extended for agentic systems, identifies critical risks including insecure tool access, inadequate input validation, insufficient monitoring of agent actions, and potential for agent misbehavior or unintended task execution. Because agents make autonomous decisions and can invoke external tools or systems, vulnerabilities in agent design, tool integration, or oversight mechanisms can lead to unintended consequences including unauthorized actions, data exposure, or system compromise.

## Source Notes
- 2026-04-08: [[lab-notes/2026-04-08-OWASP-Top-10-Security-Risks-for-AI-Agentic-Applications-Report|OWASP Top 10 Security Risks for AI Agentic Applications Report]] · [▶ source](https://www.youtube.com/watch?v=soFWS8NBcSU)