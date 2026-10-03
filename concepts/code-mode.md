---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "concept"
  - "mcp"
  - "docker"
  - "model-context-protocol"
  - "code-mode"
  - "containerization"
aliases:
  - "Dynamic MCPs with Docker"
summary: A method for using the Model Context Protocol (MCP) safely via Docker.
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
group: developer-tooling-clis
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Code Mode

Code Mode is a safety-focused approach to utilizing the [[concepts/external-tools|Model Context Protocol]] (MCP) within containerized environments. It isolates [[concepts/mcp-server|MCP server]] implementations in [[concepts/docker-containers|Docker containers]] to limit the potential impact of [[concepts/code-execution|code execution]], whether from malicious input, model errors, or unintended side effects. By running MCP tools in a sandboxed container rather than directly on the host system, Code Mode restricts access to [[concepts/computational-resources|system resources]] and prevents unauthorized modifications to the host environment.

## Architecture and Isolation

In Code Mode, each MCP server runs within its own Docker container, ensuring strict separation between the protocol [[concepts/open-source-philosophy|logic]] and the underlying [[concepts/infrastructure|infrastructure]]. This architecture leverages Docker's native [[concepts/disconnection|isolation]] capabilities to confine the execution context, preventing the MCP server from interacting with the host's file system, network interfaces, or other processes unless explicitly permitted. The isolation ensures that even if a model generates harmful [[concepts/instructions|instructions]] or a tool contains vulnerabilities, the damage remains contained within the ephemeral container lifecycle.

## Operational Benefits

This method enhances [[concepts/security|security]] by minimizing the [[concepts/attack-surface|attack surface]] associated with dynamic tool execution. Since the containers are typically short-lived and stateless, any malicious artifacts or configuration changes are discarded upon termination, reducing the risk of persistent compromise. Code Mode allows developers to integrate complex MCP capabilities while maintaining a high degree of [[concepts/trust|trust]] in the execution environment, making it suitable for [[concepts/scenarios|scenarios]] where untrusted or dynamically generated code must interact with external systems.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Powered-Autonomous-Social-Video-Content-Generation-and-Optimization|AI Powered Autonomous Social Video Content Generation and Optimization]] · [▶ source](https://www.youtube.com/watch?v=vjJwgXsMfjM)
- 2026-04-10: [[lab-notes/2026-04-10-Claude-Code-20-Upgrade-Enhanced-AI-Coding-Workflow-Automation-and|Claude Code 20 Upgrade Enhanced AI Coding Workflow Automation and]] · [▶ source](https://www.youtube.com/watch?v=ShTxTquBDxY)
- 2026-04-18: [[lab-notes/2026-04-18-Anthropics-Claude-Design-AI-Driven-Generative-Design-Platform|Anthropics Claude Design AI Driven Generative Design Platform]] · [▶ source](https://www.youtube.com/watch?v=t_LBECIQQqs)
- 2026-04-22: Google Gemma · [▶ source](https://www.youtube.com/watch?v=ZxQ2DuejRhU)
- 2026-04-26: [[lab-notes/2026-04-26-Craig-Does-AI-JSON-Prompts-for-Advanced-ChatGPT-Image-2.0-Control|Craig Does AI: JSON Prompts for Advanced ChatGPT Image 2.0 Control]] · [▶ source](https://www.youtube.com/watch?v=qXUww5tnLHs)
- 2026-04-30: [[lab-notes/2026-04-30-AionUI-Free-Desktop-Platform-for-Multi-Agent-AI-Manageme|AionUI: Free Desktop Platform for Multi-Agent AI Management and Automation]] · [▶ source](https://www.youtube.com/watch?v=vWxE6VO9TKo)
