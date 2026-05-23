---
type: concept
domain: ai-agents
tags:
  - "agent-systems"
  - "frontend-development"
  - "ai-agents"
  - "ide-integration"
  - "design-automation"
  - "vision-models"
  - "on-device-ai"
  - "security"
  - "runtime-enforcement"
  - "docker-sandboxes"
aliases:
  - "AI Agents"
  - "Autonomous AI Systems"
  - "Agentic AI"
summary: "Agentic AI refers to AI systems designed to perform specific tasks autonomously, such as Kombai for frontend development integration with IDEs, increasingly incorporating efficient on-device vision capabilities and secure runtime environments like OpenShell for out-of-process enforcement and [[lab-notes/2026-05-23-Docker-Sandboxes-Secure-AI-Agent-Execution-via-Isolated|Docker Sandboxes: Secure AI Agent Execution via Isolated Environments]] for containerized isolation."
updated: 2026-05-23
group: agent-systems-skills
---
# Agentic AI

[[concepts/action-oriented-ai|Agentic AI]] refers to [[concepts/ai-technologies|artificial intelligence]] systems designed to operate autonomously within defined domains, performing specific tasks with minimal human intervention. Unlike traditional [[concepts/ai-powered-applications|AI applications]] that require explicit step-by-step [[concepts/instructions|instructions]] for each action, [[concepts/agentic-frameworks|agentic systems]] can [[entities/make|make]] independent decisions, plan sequences of actions, and work toward predefined objectives based on [[concepts/contextual-understanding|contextual understanding]]. These systems are typically deployed in specialized environments where they can develop and execute strategies to solve problems or complete workflows.

## Characteristics

[[concepts/ai-agentic-applications|Agentic AI systems]] operate with the following key traits:

- **Autonomy & Planning**: Ability to break down complex goals into sub-tasks and execute them without constant human oversight.
- **[[concepts/contextual-awareness|Contextual Awareness]]**: Utilization of [[concepts/contextual-understanding|contextual understanding]] to adapt actions based on real-time [[concepts/feedback|feedback]] and environment state.
- **Tool Use & [[concepts/integration|Integration]]**: Interaction with external systems, such as [[concepts/frontend-development|frontend development]] IDEs (e.g., [[entities/kombai|Kombai]]) or on-device [[concepts/computer-vision|vision]] [[concepts/models|models]].
- **[[concepts/security|Security]] & Isolation**: [[concepts/deployment|Deployment]] in [[concepts/secure|secure]] runtime environments to prevent unauthorized actions. Key methods include:
    - **OpenShell**: Provides [[concepts/out-of-process-enforcement|out-of-process enforcement]] for runtime security.
    - **[[concepts/docker-sandboxes|Docker Sandboxes]]**: Utilizes [[entities/docker|Docker]] containers to create [[concepts/isolated-environments|isolated environments]] for safe [[entities/agent|agent]] execution, preventing system-wide compromise and ensuring reproducibility [[lab-notes/2026-05-23-Docker-Sandboxes-Secure-AI-Agent-Execution-via-Isolated|Docker Sandboxes: Secure AI Agent Execution via Isolated Environments]].
