---
type: concept
domain: security-infrastructure
tags:
  - "concept"
  - "privacy-settings"
  - "claude-code"
  - "workflow-optimization"
  - "security-controls"
  - "ai-tools"
aliases:
  - "Hidden Settings"
  - "Claude Code Privacy"
  - "Workflow Configuration"
summary: Configuration options in Claude Code that affect workflow, output handling, and privacy settings.
updated: 2026-05-23
group: privacy-security-guardrails
---
# Privacy Controls

Privacy Controls are configuration options available in [[concepts/ai-assisted-coding|Claude Code]] that enable users to manage how their workflows, outputs, and personal data are handled within the system. These settings form a critical component of the [[concepts/security|security]] infrastructure, allowing developers and operators to align [[concepts/claude-code|Claude Code]]'s behavior with their organizational [[concepts/privacy|privacy]] requirements and regulatory obligations. The controls operate across multiple dimensions of the system, from data retention [[concepts/policies|policies]] to [[concepts/output|output]] logging mechanisms.

## Workflow and Data Handling

Privacy Controls affect how Claude Code processes and stores information during execution. Users can configure settings that determine whether [[concepts/workflow|workflow]] data is retained locally, transmitted to external systems, or discarded after processing. These options are particularly relevant for organizations handling sensitive information, as they provide mechanisms to minimize data [[concepts/exposure|exposure]] while maintaining [[concepts/capabilities|system functionality]]. The specific configuration depends on the [[concepts/deployment|deployment]] context and the [[entities/nature|nature]] of the data being processed.

## Output Management

The output handling settings within Privacy Controls govern how results are logged, cached, and made accessible. Organizations can restrict which systems have access to generated outputs, [[concepts/power|control]] whether outputs are stored for audit purposes, and define retention [[entities/windows|windows]] for sensitive results. These configurations help balance the need for system transparency and auditability with privacy requirements.
## Source Notes
- 2026-04-07: 12 Hidden Settings To Enable In Your Claude Code [[concepts/setup|Setup]]