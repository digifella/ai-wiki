---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "graph-json"
  - "stakeholder-analysis"
  - "visualization-structure"
  - "filter-parameters"
  - "web-publishing-quartz"
aliases:
  - "Graph Visualization JSON"
  - "Stakeholder Graph Structure"
  - "Node/Edge Data Format"
summary: Graph JSON is a data structure containing node and edge information, layout parameters, and filter contexts used for rendering stakeholder analysis visualizations.
updated: 2026-07-11
group: web-publishing-quartz-websites
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# graph JSON

JSON structure representing graph visualizations for stakeholder analysis, used in graph view [[concepts/visual-rendering|rendering]]. Contains node/edge data, layout parameters, and filter contexts.

## Implementation Details (from 2026 04 14 Claude and Codex 17 March 2026)

- Added `[[concepts/queue-graph-view|stakeholder_graph_view]]` to `$JOB_TYPES` in `site/admin/queue_api_shared.php` (hidden, no file upload)
- Set default schedule via `defaultScheduleType()` returning `'window'`
- Validated `view_mode` (6 values) in `queue_graph_view` API endpoint
- Implemented focus parameters (`ego`, `org_focus`) in payload
- Built payload with all [[concepts/filter-parameters|filter parameters]] in `site/lab/market_radar_api.php`
- Added to `mrQueueCortexJob()` allowed types and `$mrTypes` in `list_mr_jobs`/`clear_mr_jobs`

Backlink: 2026 04 14 [[concepts/claude-ai|Claude]] and [[concepts/codex|Codex]] 17 March 2026
## Source Notes

- 2026-04-23: Anthropic · [▶ source](https://www.youtube.com/watch?v=aO5k3haUz9Q)
