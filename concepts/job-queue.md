---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "background-processing"
  - "queue-system"
  - "job-types"
  - "stakeholder-graph"
  - "market-radar-api"
  - "data-pipeline"
aliases:
  - "Job Queue System"
  - "Background Job Processor"
  - "Task Queue"
  - "Queue API"
summary: The job queue system handles background processing of jobs, including a new `stakeholder_graph_view` job type integrated with the market radar API for generating stakeholder graph views.
updated: 2026-07-11
group: data-pipelines-sync-storage
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# job queue

Queue system for background processing of jobs, including new types for stakeholder graph views.

- Added `[[concepts/queue-graph-view|stakeholder_graph_view]]` job type (hidden, no file upload) to `$JOB_TYPES` and `defaultScheduleType()` in `site/admin/queue_api_shared.php` with default schedule `window`
- Integrated into [[concepts/market-radar-api|market radar API]]:
  - Added to `$mrTypes` in `list_mr_jobs` and `clear_mr_jobs` in `site/lab/market_radar_api.php`
  - New API action `queue_graph_view` validates `view_mode` (6 values), processes `focus` params for `ego`/`org_focus`, and builds payload with all [[concepts/filter-parameters|filter parameters]]

2026 04 14 [[concepts/claude-ai|Claude]] and [[concepts/codex|Codex]] 17 March 2026
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Powered-Autonomous-Social-Video-Content-Generation-and-Optimization|AI Powered Autonomous Social Video Content Generation and Optimization]] · [▶ source](https://www.youtube.com/watch?v=vjJwgXsMfjM)
