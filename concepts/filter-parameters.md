---
type: concept
domain: ai-agents
tags:
  - "api-parameters"
  - "data-filtering"
  - "query-strings"
  - "request-body"
  - "dynamic-results"
  - "backend-logic"
aliases:
  - "API filters"
  - "Query parameters"
  - "Filter criteria"
  - "Refinement parameters"
summary: Filter parameters are API parameters passed as query strings or request bodies that enable dynamic filtering of results based on specific criteria.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# filter parameters

Parameters used to refine API data queries, typically passed as query strings or request bodies. Enable dynamic filtering of results based on specific criteria.

## Implementation Notes (from Claude and Codex, 17 March 2026)

- Added [[concepts/stakeholder-graph-view]] to job types (hidden, no file upload) in `site/admin/queue_api_shared.php`
- Added to default schedule type function (returning 'window') in `site/admin/queue_api_shared.php`
- Added [[concepts/stakeholder-graph-view]] to market radar queue cortex job allowed types in `site/lab/market_radar_api.php`
- Added to `$mrTypes` in both list market radar jobs and clear market radar jobs in `site/lab/market_radar_api.php`
- 3 new [[concepts/api-actions|API actions]]:
  - `queue_graph_view`: validates `view_mode` (6 values), `focus` params for `ego`/`org_focus`, builds payload with all filter parameters

2026 04 14 [[concepts/claude-ai|Claude]] and [[concepts/codex|Codex]] 17 March 2026
