---
type: entity
tags:
  - "grafana"
  - "incident-management"
  - "on-call-scheduling"
  - "alert-routing"
  - "observability"
  - "open-source"
aliases:
  - "Grafana On-Call"
  - "Grafana OnCall"
  - "On-Call Scheduling Tool"
  - "Incident Response Tool"
summary: Grafana On-Call is an open-source incident management and on-call scheduling tool within the Grafana observability stack that automates alert routing and manages on-call rotations.
updated: 2026-07-12
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
# Grafana On-Call

**[[concepts/grafana-on-call|Grafana On-Call]]** is an [[concepts/open-source|open-source]] [[concepts/incident-response|incident management]] and on-call scheduling tool, part of the Grafana observability stack. It enables teams to automate alert routing, manage on-call rotations, and streamline incident response workflows.

## Key Features
- **On-Call Scheduling**: Visual calendar for managing shifts and rotations.
- **Alert Routing**: Integrates with Prometheus, Alertmanager, and other sources to route alerts to the correct responders.
- **Escalation [[concepts/policies|Policies]]**: Configurable rules for escalating unresolved incidents.
- **Incident Management**: Centralized dashboard for tracking and resolving incidents.

## Recent Developments & Related Entities
- **Archest.[[concepts/ai-integration|AI Integration]] Context**: The team behind Grafana On-Call has expanded into [[concepts/ai-agent-autonomy|AI agent security]] and control. Recent work highlights **[[entities/archestai|Archest.AI]]**, an open-source enterprise platform for securely running [[concepts/agentic-ai|AI agents]] in production.
	- See detailed analysis: [[lab-notes/2026-07-01-Archest.AI-Secure-Control-and-Visibility-for-Production|Archest.AI: Secure Control and Visibility for Production AI Agents]]
	- This shift indicates a broader focus on [[concepts/secure|secure]] automation and visibility for AI-driven operations, complementing traditional observability tools.

## References
- [Archest.AI: Secure Control and Visibility for Production AI Agents](https://www.youtube.com/watch?v=9JiA6RYpEYo)
