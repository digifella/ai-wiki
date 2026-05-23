---
type: concept
domain: tools-platforms
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
updated: 2026-05-23
group: web-publishing-quartz-websites
---
# Poll Graph Job

Poll Graph Job is a job type integrated into the queue API system for processing graph-related data updates. It was added to the [[concepts/code|codebase]] through modifications to core API [[concepts/files|files]] that handle job queuing and scheduling across the platform.

## Implementation Details

The job type was introduced to `site/admin/queue_api_shared.php` as `[[concepts/queue-graph-view|stakeholder_graph_view]]`, configured as a hidden job type that does not require [[concepts/file-uploads|file uploads]]. It was registered in the `defaultScheduleType()` function with a scheduling window type, establishing how the job is processed by the queue system.

## Integration with Market Radar

The Poll Graph Job type was subsequently integrated into `site/lab/market_radar_api.php` as an allowed job type within the `mrQueueCortexJob()` function. It was also added to the `$mrTypes` variable used by both the `list_mr_jobs` and `clear_mr_jobs` functions, enabling the Market Radar system to recognize and manage these jobs within its [[concepts/workflow|workflow]].
