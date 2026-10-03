---
type: concept
domain: tools-platforms-infrastructure
group: web-publishing-quartz-websites
tags:
  - "queue-api"
  - "job-types"
  - "graph-view"
  - "stakeholder-graph"
  - "api-actions"
  - "schedule-types"
aliases:
  - "stakeholder_graph_view"
  - "queue API graph view"
summary: The update implements stakeholder_graph_view as a job type and default schedule type within the queue API.
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Queue Graph View

Queue Graph View is a job type within the [[concepts/job-queue|queue API]] system designed to handle asynchronous processing for [[concepts/stakeholder-graph-view|stakeholder graph visualization]] tasks. By defining `stakeholder_graph_view` as a supported job type, the queue infrastructure can manage graph-based analysis operations alongside other standard processing workflows. This integration allows computationally intensive visualization tasks to be queued and executed based on system capacity and scheduling policies.

The update implements `stakeholder_graph_view` as both a job type and a default schedule type within the queue API. This configuration ensures that stakeholder graph visualization requests are automatically routed through the queue infrastructure, enabling efficient resource allocation and load balancing. The feature integrates graph visualization logic with the broader queue system, allowing these operations to scale according to defined scheduling constraints.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Powered-Autonomous-Social-Video-Content-Generation-and-Optimization|AI Powered Autonomous Social Video Content Generation and Optimization]] · [▶ source](https://www.youtube.com/watch?v=vjJwgXsMfjM)
