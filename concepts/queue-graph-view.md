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
updated: 2026-07-17
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Queue Graph View

Queue Graph View is a job type within the [[concepts/job-queue|queue API]] system that enables asynchronous processing of [[concepts/stakeholder-graph-view|stakeholder graph visualization]] tasks. By implementing `stakeholder_graph_view` as a supported job type, the queue infrastructure can handle graph-based analysis operations alongside other processing tasks, allowing these computationally intensive visualization workflows to be queued and executed according to system capacity and scheduling policies.

## Integration with Queue Infrastructure

The feature integrates graph visualization capabilities directly into the queue API's job type system. When a stakeholder graph view is requested, the system creates a queued job that can be processed asynchronously rather than synchronously. This allows the application to remain responsive while graph analysis and rendering operations are performed in the background, with results available once processing completes.

## Scheduling

Queue Graph View implements `stakeholder_graph_view` as a default schedule type within the queue API. This default scheduling behavior establishes how graph visualization jobs are prioritized and executed relative to other queued tasks, ensuring consistent and predictable handling of stakeholder graph processing across the system.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Powered-Autonomous-Social-Video-Content-Generation-and-Optimization|AI Powered Autonomous Social Video Content Generation and Optimization]] · [▶ source](https://www.youtube.com/watch?v=vjJwgXsMfjM)
