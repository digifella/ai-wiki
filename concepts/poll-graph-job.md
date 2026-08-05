---
type: concept
domain: tools-platforms-infrastructure
group: web-publishing-quartz-websites
tags:
  - "queue-api"
  - "stakeholder-graph-view"
  - "market-radar-api"
  - "job-types"
  - "api-actions"
aliases:
  - "stakeholder_graph_view job"
  - "market radar polling"
summary: "Updates include adding stakeholder_graph_view to the queue_api_shared.php job types, modifying market_radar_api.php, and adding 3 new API actions."
updated: 2026-07-17
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Poll Graph Job

Poll Graph Job is a job type integrated into the [[concepts/job-queue|queue API]] system for processing graph-related data updates. It enables asynchronous processing of stakeholder graph views and related data transformations within the platform's infrastructure. The job type was added to the [[concepts/code|codebase]] through modifications to core API files that manage job queuing and scheduling.

## Implementation Details

The Poll Graph Job was introduced to `queue_api_shared.php` as `stakeholder_graph_view`, configured as a hidden job type. Associated updates included modifications to `market_radar_api.php` and the addition of 3 new [[concepts/api-actions|API actions]] to support the job's functionality. These changes expanded the queue API's capabilities to handle graph-related operations as part of the platform's standard job processing workflow.
