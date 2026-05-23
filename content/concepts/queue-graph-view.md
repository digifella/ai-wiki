---
type: concept
domain: tools-platforms
tags:
  - "queue-api"
  - "job-types"
  - "graph-view"
  - "stakeholder-graph"
  - "api-actions"
  - "schedule-types"
aliases:
  - "stakeholder_graph_view"
  - "queue API graph view"
summary: The update implements stakeholder_graph_view as a job type and default schedule type within the queue API.
updated: 2026-05-23
group: web-publishing-quartz-websites
---
# Queue Graph View

Queue Graph View is a job type implemented within the queue API system that enables the processing and scheduling of stakeholder graph visualization tasks. The feature was added to the core queue infrastructure to support graph-based analysis and reporting [[concepts/capabilities|capabilities]] alongside existing queue job types.

## Implementation Details

The Queue Graph View [[concepts/adoption|implementation]] involves two primary components. First, `stakeholder_graph_view` was registered as a job type in the queue API shared configuration, designated as a hidden job type that does not require [[concepts/file-uploads|file uploads]]. Second, the job type was integrated into the default scheduling system, with the window scheduling type assigned as its default schedule behavior. This integration ensures that graph view jobs follow the established queue processing patterns and scheduling conventions.

## Integration Points

The feature was subsequently integrated into the [[concepts/market-radar-api|Market Radar API]], where it was added to the job queuing function to allow graph view tasks to be submitted and processed through the market analysis pipeline. This multi-[[concepts/integration|system integration]] enables stakeholder graph visualization to be treated as a first-class queue job type across the platform's API ecosystem.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Powered-Autonomous-Social-Video-Content-Generation-and-Optimization|AI Powered Autonomous Social Video Content Generation and Optimization]] · [▶ source](https://www.youtube.com/watch?v=vjJwgXsMfjM)