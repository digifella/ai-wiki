---
type: concept
domain: tools-platforms
summary: A view type for generating stakeholder graph visualizations as a background job via specific API actions.
updated: 2026-05-23
group: web-publishing-quartz-websites
stub: true
---
# stakeholder_graph_view

View type for generating stakeholder/[[concepts/network-graph|network graph]] visualizations as a background job.

- **`site/admin/queue_api_shared.php`**:
  - Added to `$JOB_TYPES` (hidden, no file upload)
  - Added to `defaultScheduleType()` returning `'window'`
- **`site/lab/market_radar_api.php`**:
  - Added to `mrQueueCortexJob()` allowed types
  - Added to `$mrTypes` in `list_mr_jobs` and `clear_mr_jobs`
  - 3 new [[concepts/api-actions|API actions]]:
    - `queue_graph_view`: validates `view_mode` (6 values), `focus` params for `ego`/`org_focus`, builds payload with all filter [[concepts/parameters|parameters]]
## Source Notes

- 2026 04 14 [[concepts/claude-ai|Claude]] and Codex 17 March 2026: Implementation by [[entities/claude|Claude]] and [[entities/codex|Codex]] (17 March 2026).
- 2026-04-23: Implemented the Cortex-side [[concepts/network-graph|network graph]] job. K