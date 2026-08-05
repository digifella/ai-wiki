---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "api"
  - "queue"
  - "polling"
  - "development"
  - "job-queues"
  - "asynchronous-tasks"
  - "api-monitoring"
  - "task-polling"
  - "api-integration"
aliases:
  - "asynchronous-task-monitoring"
  - "job-queue-polling"
summary: A mechanism for monitoring asynchronous task progress and managing job queues via API.
updated: 2026-07-11
group: apis-integrations-mcp
stub: true
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
status: draft
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# job status polling

Mechanism for monitoring asynchronous task progress and managing job queues via API.

## Implementation Updates
- **site/admin/queue_api_shared.php**
    - Added `[[concepts/stakeholder-graph-view|stakeholder_graph_view]]` to `$JOB_TYPES` (hidden, no file upload).
    - Added to `defaultScheduleType()` returning `'window'`.
- **site/lab/market_radar_api.php**
    - Added `stakeholder_graph_view` to `mrQueueCortexJob()` allowed types.
    - Added to `$mrTypes` in both `list_mr_jobs` and `clear_mr_jobs`.
    - Integrated 3 new `[[concepts/api-actions|API actions]]`.

## Related
- 2026 04 14 [[concepts/claude-ai|Claude]] and [[concepts/codex|Codex]] 17 March 2026
