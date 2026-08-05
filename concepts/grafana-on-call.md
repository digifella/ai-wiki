---
type: concept
domain: ai-agents
tags:
  - "incident-management"
  - "alert-routing"
  - "on-call-scheduling"
  - "grafana"
  - "open-source"
  - "observability"
aliases:
  - "Grafana On-Call"
  - "GOC"
  - "Incident Response Tool"
summary: Grafana On-Call is an open-source incident management tool that automates alert routing, on-call scheduling, and incident response by integrating with Grafana, Prometheus, and various notification channels.
updated: 2026-07-11
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Grafana On-Call

**[[entities/grafana-on-call|Grafana On-Call]]** is an [[concepts/open-source|open-source]] [[concepts/incident-response|incident management]] tool that integrates with Grafana and Prometheus to automate alert routing, on-call scheduling, and incident response. It enables teams to manage alerts from various sources (PagerDuty, Slack, [[entities/email|email]]) and ensures the right people are notified at the right time.

## Key Features
- **Unified [[concepts/monitoring-and-alerting|Alert Management]]**: Aggregates alerts from multiple monitoring tools into a single interface.
- **On-Call Scheduling**: Supports complex rotation schedules, overrides, and escalation [[concepts/policies|policies]].
- **Integration Hub**: Connects with [[entities/slack]], [[entities/microsoft|Microsoft]] Teams, PagerDuty, and custom webhooks.
- **Incident Lifecycle**: Tracks incidents from detection to [[concepts/solution|resolution]], including post-mortem documentation.

## Related Concepts & Integrations
- **[[entities/archestai|Archest]].[[concepts/ai-integration|AI Integration]]**: Recent developments highlight the intersection of [[concepts/incident-response|incident management]] and [[concepts/ai-agent-autonomy|AI agent security]]. Specifically, the team behind [[entities/grafana-on-call|Grafana On-Call]] has contributed to **[[entities/archestai|Archest.AI]]**, an [[concepts/open-source-enterprise-ai|open-source enterprise AI]] platform focused on [[concepts/secure-control|secure control]] and visibility for [[concepts/production-ai|production AI]] agents. This [[concepts/connection|connection]] underscores a shift towards managing AI-driven incidents and ensuring [[concepts/secure|secure]] agent behavior in production environments. See [[lab-notes/2026-07-01-Archest.AI-Secure-Control-and-Visibility-for-Production|Archest.AI: Secure Control and Visibility for Production AI Agents]] for detailed analysis.

## References
- [Archest.AI: Secure Control and Visibility for Production AI Agents](https://www.youtube.com/watch?v=9JiA6RYpEYo)
