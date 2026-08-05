---
type: concept
domain: ai-agents
tags:
  - "parameters"
  - "implementation"
  - "queue-api"
  - "stakeholder-graph-view"
  - "api-actions"
  - "market-radar-api"
  - "job-types"
aliases:
  - "ego/org_focus"
  - "org-focus parameters"
summary: Implementation updates include adding stakeholder-graph-view to the queue and market radar API job types.
updated: 2026-07-11
group: model-efficiency-compression
stub: true
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
status: draft
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# ego/org_focus parameters

## Implementation Updates
**Source:** 2026 04 14 [[concepts/claude-ai|Claude]] and [[concepts/codex|Codex]] 17 March 2026 ([[entities/claude]], [[entities/codex]])

### site/admin/queue_api_shared.php
- Added `[[concepts/stakeholder-graph-view]]` to `$JOB_TYPES` (hidden, no file upload)
- Added to `defaultScheduleType()` returning 'window'

### site/lab/market_radar_api.php
- Added `[[concepts/queue-graph-view|stakeholder_graph_view]]` to `mrQueueCortexJob()` allowed types
- Added to `$mrTypes` in `list_mr_jobs` and `clear_mr_jobs`
- 3 new `[[concepts/api-actions]]` implemented (per summary)
