---
type: concept
domain: security-infrastructure
updated: 2026-05-23
group: deployment-docker-services
---
# Isolated Environments

**Isolated Environments** are controlled contexts that restrict access to host resources, ensuring that processes ([[concepts/code|code]], [[concepts/agents|agents]], or [[concepts/software|applications]]) run with limited privileges and confined impact. This is critical for [[concepts/security|security]], reproducibility, and [[concepts/testing|testing]], particularly when executing untrusted or stochastic code such as [[concepts/ai-agent]]s.

## Core Principles
- **Resource Containment:** Restricts [[concepts/cpu|CPU]], [[concepts/memory|memory]], and file system access.
- **Network Isolation:** Prevents unauthorized outbound/inbound connections.
- **Process Separation:** Ensures that a failure or malicious action in one environment does not propagate to the host or other containers.
- **Ephemeral State:** Environments are often disposable, resetting to a known good state after execution.

## Implementations & Tools

### Containerization
- [[entities/docker]] is the standard for creating lightweight, reproducible isolated environments using [[entities/linux|Linux]] namespaces and cgroups.
- **Security Model:** Containers share the host kernel but are isolated by user space. Vulnerabilities can exist if containers are run as root or with excessive [[concepts/capabilities|capabilities]].

### Virtual Machines (VMs)
- Provide stronger isolation via [[concepts/hardware|hardware]] virtualization (hypervisors).
- Higher overhead than containers but necessary when kernel-level isolation is insufficient.

## Use Cases in AI Agents
[[concepts/agentic-ai|AI agents]] often require internet access, file manipulation, and [[concepts/code-execution|code execution]]. [[concepts/running|Running]] them directly on a host is high-risk. Isolated environments mitigate:
- **Code Injection Attacks:** Agents generating and executing malicious scripts.
- **Data Exfiltration:** Preventing agents from accessing sensitive host data.
- **Collateral Damage:** Preventing accidental deletion or modification of host [[concepts/files|files]].

## Recent Developments & References

- **[[concepts/docker-sandboxes|Docker Sandboxes]] for [[concepts/ai-agents|AI Agents]]:** A specific [[concepts/adoption|implementation]] pattern demonstrated by [[entities/bijan-bowen|Bijan Bowen]] [[concepts/highlights|highlights]] using [[concepts/docker|Docker]] to create "safe spaces" for [[concepts/ai-connectors|AI agents]]. This approach ensures that even if an [[entities/agent|agent]] attempts harmful actions, the damage is contained within the sandbox.
  - See: [[lab-notes/2026-05-23-Docker-Sandboxes-Secure-AI-Agent-Execution-via-Isolated|Docker Sandboxes: Secure AI Agent Execution via Isolated Environments]]
  - Key benefits include hands-on guidance for securing agent execution flows and practical demonstrations of containment boundaries.

## Related Concepts
- Least Privilege
- Container [[concepts/security|Security]]
- [[concepts/ai-safety]]
- Reproducibility
