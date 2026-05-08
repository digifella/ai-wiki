---
type: concept
domain: ai-agents
tags:
  - "api"
  - "validation"
  - "job-queue"
  - "api-validation"
  - "stakeholder-graph-view"
  - "api-actions"
  - "view-mode-logic"
aliases:
  - "view_mode validation"
summary: "This document describes the logic governing the validation and permitted types for various view modes within the API and job queue systems."
updated: 2026-04-28
group: safety-guardrails-governance
---
# view_mode validation

Logic governing the validation and permitted types for various view modes within the API and [[concepts/job-queue|job queue]] systems.

## Implementation Updates
- **site/admin/queue_api_shared.php**
	- Added `[[concepts/stakeholder-graph-view|stakeholder_graph_view]]` to `$JOB_TYPES` (hidden, no file upload).
	- Updated `defaultScheduleType()` to return `'window'`.
- **site/lab/market_radar_api.php**
	- Added `[[concepts/queue-graph-view|stakeholder_graph_view]]` to `mrQueueCortexJob()` allowed types.
	- Added to `$mrTypes` in both `list_mr_jobs` and `clear_mr_jobs`.
	- 3 new `[[concepts/api-actions|API actions]]` implemented.

## Metadata
- **Source**: 2026 04 14 [[concepts/claude-ai|Claude]] and Codex 17 March 2026
