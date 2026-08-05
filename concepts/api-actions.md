---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "api-endpoints"
  - "webhooks"
  - "validation-rules"
  - "market-radar"
  - "stakeholder-graph"
  - "job-types"
  - "queue-api"
aliases:
  - "API Operations"
  - "Endpoint Actions"
  - "Market Radar API Actions"
summary: API actions are specific system operations triggered via endpoints, defined by parameters, validation rules, and behaviors such as stakeholder graph views and job type configurations.
updated: 2026-07-11
group: apis-integrations-mcp
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# API actions

API actions are specific operations triggered via endpoints, defined by their parameters, validation rules, and associated system behaviors.

Recent implementation (from [[entities/claude|Claude]] and [[entities/codex|Codex]] 17 March 2026):
- Added `[[concepts/queue-graph-view|stakeholder_graph_view]]` to `$JOB_TYPES` (hidden, no file upload) in queue_api_shared.php
- Set `defaultScheduleType()` to return `'window'`
- Added `stakeholder_graph_view` to `mrQueueCortexJob()` allowed types in [[concepts/market-radar-api|market_radar_api]].php
- Added `stakeholder_graph_view` to `$mrTypes` in `list_mr_jobs` and `clear_mr_jobs`
- Added `queue_graph_view` action: validates `view_mode` (6 values), processes `focus` params for `ego`/`org_focus`, builds payload with all filters

2026 04 14 [[concepts/claude-ai|Claude]] and [[concepts/codex|Codex]] 17 March 2026
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Anthropic-Dispatch-Remote-Desktop-AI-Integration-Claude-and-OpenClaw|Anthropic Dispatch Remote Desktop AI Integration Claude and OpenClaw]] · [▶ source](https://www.youtube.com/watch?v=1_VlT1vhN04)
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Cowork-Desktop-AI-Co-worker-Core-Capabilities-and-Advantages|Claude Cowork Desktop AI Co worker Core Capabilities and Advantages]] · [▶ source](https://www.youtube.com/watch?v=z9rdrNrkvDY)
- 2026-04-09: [[lab-notes/2026-04-09-Project-Glasswing-Mitigating-Anthropic-Mythos-AIs-Zero-Day-Vulnerability-Capabilities|Project Glasswing: Mitigating Anthropic Mythos AI's Zero-Day Vulnerability Capabilities]]
- 2026-04-10: [[lab-notes/2026-04-10-Claude-Managed-Agents-API-Suite-for-Building-and-Deploying-Autonomous-|Claude Managed Agents API Suite for Building and Deploying Autonomous ]] · [▶ source](https://www.youtube.com/watch?v=NLWiIj47IdI)
