---
type: concept
domain: ai-agents
tags:
  - "system-safety"
  - "ai-agents"
  - "security-guardrails"
  - "isolation"
  - "least-privilege"
aliases:
  - "Agent Safety"
  - "AI System Safety"
summary: System safety is the discipline of ensuring autonomous AI agents operate within defined boundaries through isolation, least privilege, and observability to prevent unintended consequences.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-19T22:00:59+00:00" }
group: safety-guardrails-governance
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# System Safety

**System safety** refers to the discipline of ensuring that complex systems, particularly [[concepts/autonomous-ai-systems|autonomous AI]] agents, operate within defined boundaries to prevent unintended consequences, resource exhaustion, or security breaches. It involves architectural decisions that isolate execution environments and enforce strict permission models.

## Core Principles

- **Isolation**: Decoupling agent execution from the host system to contain failures.
- **Least Privilege**: Granting agents only the minimum permissions necessary for their tasks.
- **Observability**: Monitoring agent actions in real-time to detect anomalies.

## Implementation Strategies

### Execution Environments
- **[[concepts/docker-sandboxes|Docker Sandboxes]]**: Lightweight containers used to isolate agent processes, preventing access to the host file system or network unless explicitly allowed.
- **Micro-VMs**: Heavier but more secure isolation layers (e.g., Firecracker) that provide hardware-level separation, suitable for high-risk operations.

### Agent Safety Patterns
- **Human-in-the-Loop**: Requiring approval for high-impact actions to avoid tedious manual monitoring of every step [[lab-notes/2026-08-20-Building-Safe-AI-Agents-Docker-Sandboxes-and-Micro-VMs|Building Safe AI Agents: Docker Sandboxes and Micro-VMs]].
- **Action Validation**: Pre-execution checks to ensure agent outputs align with safety constraints.

## Related Concepts
- AI Alignment
- Zero Trust Architecture
- Container Security

## References
- [Building Safe AI Agents: Docker Sandboxes and Micro-VMs](https://www.youtube.com/watch?v=erQnRkMrpls)
