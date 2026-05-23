---
type: concept
domain: tools-platforms
tags:
  - "api"
  - "backend"
  - "development"
  - "api-payloads"
  - "job-queuing"
  - "market-radar"
  - "data-structuring"
  - "api-implementation"
aliases:
  - "API payload construction"
  - "Payload structuring"
summary: The process of defining and structuring data payloads for API requests, specifically regarding job queuing and market radar updates.
updated: 2026-05-23
group: apis-integrations-mcp
---
# API payload building

The process of defining and structuring data payloads for API requests, specifically regarding job queuing and market radar updates.

## Implementation Updates
- **site/admin/queue_api_shared.php**
    - Added `[[concepts/stakeholder-graph-view|stakeholder_graph_view]]` to `$JOB_TYPES` (configured as hidden, no file upload).
    - Updated `defaultScheduleType()` to return 'window'.
- **site/lab/market_radar_api.php**
    - Added `stakeholder_graph_view` to `mrQueueCortexJob()` allowed types.
    - Updated `$mrTypes` in both `list_mr_jobs` and `clear_mr_jobs`.
    - Integrated 3 new `[[concepts/api-actions|API actions]]`.

---
**Backlink:** 2026 04 14 [[concepts/claude-ai|Claude]] and [[concepts/codex|Codex]] 17 March 2026
