---
type: concept
domain: tools-platforms
tags:
  - "concept"
  - "mcp"
  - "model-context-protocol"
  - "docker"
  - "api-integration"
  - "code-execution"
  - "safety"
aliases:
  - "MCP Docker Integration"
  - "Dynamic Model Context Protocol"
summary: Dynamic MCPs enable safe execution of Model Context Protocol operations through Docker containerization.
updated: 2026-05-23
group: apis-integrations-mcp
---
# Dynamic Mcps

Dynamic [[concepts/mcps|MCPs]] represent an approach to executing [[concepts/external-tools|Model Context Protocol]] operations within containerized environments, primarily using [[entities/docker-desktop|Docker]]. This method addresses [[concepts/security|security]] and isolation concerns that arise when allowing [[concepts/ai-models|AI models]] to perform actions on host systems. By [[concepts/running|running]] [[concepts/mcp-servers|MCP servers]] inside containers, operations are sandboxed and limited to the resources and permissions explicitly allocated to that container.

## Architecture and Implementation

Dynamic MCPs leverage [[concepts/docker|Docker]]'s [[concepts/containerization|containerization]] to create isolated execution contexts for protocol operations. Rather than running MCP servers directly on the host system with broad access to [[concepts/files|files]] and system resources, they operate within defined container boundaries. This approach allows developers to specify exactly what [[concepts/capabilities|capabilities]] each MCP instance should have, reducing the [[concepts/attack-surface|attack surface]] and preventing unintended side effects on the host system.

## Security and Safety Benefits

The containerized approach provides several safety advantages. Resource usage can be capped [[concepts/assistive-technology|at]] the container level, preventing runaway processes from consuming unlimited [[concepts/cpu|CPU]] or [[concepts/memory|memory]]. File system access can be restricted to specific mounted volumes, and network access can be controlled through Docker's networking configuration. This makes Dynamic MCPs particularly valuable when executing untrusted or experimental protocol operations, or when running multiple MCP instances that need to remain isolated from one another.
