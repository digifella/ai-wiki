---
wiki-ingested: true
title: "Claude and Codex 17 March 2026"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
---
# [[entities/claude|Claude]] and [[entities/codex|Codex]] 17 March 2026

[[concepts/claude|Claude]]:

● All references are consistent. Here's a [[concepts/summary|summary]] of what was implemented:

  1. site/admin/queue_api_shared.php

  - Added [[concepts/stakeholder-graph-view|stakeholder_graph_view]] to $JOB_TYPES (hidden, no file upload)
  - Added to defaultScheduleType() returning 'window'

  2. site/lab/market_radar_api.php

  - Added stakeholder_graph_view to mrQueueCortexJob() allowed types
  - Added to $mrTypes in both list_mr_jobs and clear_mr_jobs
  - 3 new [[concepts/api-actions|API actions]]:
    - [[concepts/queue-graph-view|queue_graph_view]] — validates view_mode (6 values), focus params for ego/org_focus, builds payload with all filter
  params, queues via mrQueueCortexJob()
    - [[concepts/poll-graph-job|poll_graph_job]] — checks job status, reads [[concepts/graph-json|graph JSON]] from output file or output_data on completion
    - [[concepts/list-graph-jobs|list_graph_jobs]] — returns last 20 graph jobs with org-scope filtering

  3. site/lab/market-radar.php

  - Network subtab button added to the [[entities/intel|intel]] subtabs bar
  - switchIntelSubtab() updated with 'network' in the tab list + lazy Cytoscape init
  - MR_TYPE_LABELS and _mrJobDetail() updated for the new job type
  - Network panel HTML (~50 lines): toolbar with view mode select, focus pickers, confidence slider, edge type filter
  popover, search, generate/fit/export buttons, history dropdown; [[concepts/canvas|canvas]] wrap with Cytoscape mount, loading overlay, empty
  state, legend; detail drawer; insights bar
  - CSS (~90 lines): all network styles using existing CSS variables, mobile responsive (drawer becomes bottom sheet at
  ≤760px)
  - JavaScript (~400 lines): Cytoscape lazy load from CDN, full graph lifecycle (init → generate → poll → render), node/edge
   styling by type, layout per view mode (cose/concentric/breadthfirst), filters (edge type/confidence/direct-only), node
  search with dimming, node/edge/path detail drawer, expand hop, PNG export, graph history, profile card network button
  [[concepts/integration|integration]]


===