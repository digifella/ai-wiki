---
wiki-ingested: true
domain: ai-agents
group: anthropic-claude
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

[[entities/claude-4|Claude]]:

● All references are consistent. Here's a summary of what was implemented:

  1. site/admin/queue_api_shared.php

  - Added stakeholder_graph_view to $JOB_TYPES (hidden, no file upload)
  - Added to defaultScheduleType() returning 'window'

  2. site/lab/market_radar_api.php

  - Added stakeholder_graph_view to mrQueueCortexJob() allowed types
  - Added to $mrTypes in both list_mr_jobs and clear_mr_jobs
  - 3 new [[concepts/api-actions|API actions]]:
    - queue_graph_view — validates view_mode (6 values), focus params for ego/org_focus, builds payload with all filter
  params, queues via mrQueueCortexJob()
    - poll_graph_job — checks job status, reads graph JSON from output file or output_data on completion
    - list_graph_jobs — returns last 20 graph jobs with org-scope filtering

  3. site/lab/market-radar.php

  - Network subtab button added to the [[entities/intel|intel]] subtabs bar
  - switchIntelSubtab() updated with 'network' in the tab list + lazy Cytoscape init
  - MR_TYPE_LABELS and _mrJobDetail() updated for the new job type
  - Network panel HTML (~50 lines): toolbar with view mode select, focus pickers, confidence slider, edge type filter
  popover, search, generate/fit/export buttons, history dropdown; canvas wrap with Cytoscape mount, loading overlay, empty
  state, legend; detail drawer; insights bar
  - CSS (~90 lines): all network styles using existing CSS variables, mobile responsive (drawer becomes bottom sheet at
  ≤760px)
  - JavaScript (~400 lines): Cytoscape lazy load from CDN, full graph lifecycle (init → generate → poll → render), node/edge
   styling by type, layout per view mode (cose/concentric/breadthfirst), filters (edge type/confidence/direct-only), node
  search with dimming, node/edge/path detail drawer, expand hop, PNG export, graph history, profile card network button
  [[concepts/integration|integration]]


===

## Related Concepts
- [[concepts/stakeholder-graph-view|stakeholder_graph_view]] — [Wikipedia](https://en.wikipedia.org/wiki/stakeholder_graph_view)
- [[concepts/market-radar-api|market_radar_api]] — [Wikipedia](https://en.wikipedia.org/wiki/market_radar_api)
- [[concepts/queue-graph-view|queue_graph_view]] — [Wikipedia](https://en.wikipedia.org/wiki/queue_graph_view)
- [[concepts/poll-graph-job|poll_graph_job]] — [Wikipedia](https://en.wikipedia.org/wiki/poll_graph_job)
- [[concepts/list-graph-jobs|list_graph_jobs]] — [Wikipedia](https://en.wikipedia.org/wiki/list_graph_jobs)
- [[concepts/graph-json|graph JSON]] — [Wikipedia](https://en.wikipedia.org/wiki/graph_JSON)

## Related Entities
- [[entities/claude|Claude]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude)