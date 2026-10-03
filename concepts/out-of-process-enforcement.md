---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "out-of-process-enforcement"
  - "ai-agent-security"
  - "process-isolation"
  - "runtime-enforcement"
  - "tamper-resistance"
  - "resource-limits"
  - "sandboxing"
  - "openshell"
aliases:
  - "external enforcement"
  - "isolated policy enforcement"
  - "out-of-process security"
summary: A security mechanism that handles critical policy decisions and execution controls in a separate process to prevent compromised agent code from bypassing safety checks.
updated: 2026-07-12
group: privacy-security-guardrails
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Out-of-Process Enforcement

**Out-of-Process Enforcement** is a [[concepts/security|security]] and stability mechanism where critical policy decisions, resource limits, or execution controls are handled by a separate process rather than within the agent's own execution context. This [[concepts/disconnection|isolation]] prevents compromised or buggy code from bypassing safety checks or destabilizing the host system.

## Core Principles
- **Isolation**: Separation of [[concepts/trust|trust]] boundaries between the [[concepts/ai-agent|AI agent]] and the enforcement [[concepts/engine|engine]].
- **Tamper Resistance**: Since enforcement [[concepts/open-source-philosophy|logic]] resides outside the agent’s process, the agent cannot modify or disable its own constraints via [[concepts/memory|memory]] manipulation.
- **System Stability**: Faults in the agent do not crash the enforcement layer or the host OS.

## Implementation Context: OpenShell & NVIDIA NemoClaw
- **OpenShell**: Identified as the underlying [[concepts/secure-runtime|secure runtime]] for [[concepts/agentic-ai|AI agents]], providing the infrastructure for out-of-process enforcement [[lab-notes/2026-05-22-OpenShell-Secure-Runtime-for-AI-Agents-with-Out-of-Proce|OpenShell: Secure Runtime for AI Agents with Out-of-Process Enforcement]].
- **[[concepts/agent-toolkit|NVIDIA NemoClaw]]**: An agent toolkit for building specialized [[concepts/ai-agents|AI agents]]; relies on OpenShell rather than implementing enforcement internally.
- **Key [[concepts/innovation|Innovation]]**: The shift from in-process [[concepts/ai-safety|guardrails]] to a dedicated runtime environment (OpenShell) ensures that enforcement is structural rather than advisory.

## Benefits
- Prevents privilege escalation by [[concepts/ai-connectors|AI agents]].
- Enables granular resource management (CPU, memory, network) via the external process.
- Facilitates auditing and logging of agent actions without exposing logs to the agent itself.

## Related Concepts
- Sandboxing
- [[concepts/ai-agent-security]]
- Runtime Enforcement
