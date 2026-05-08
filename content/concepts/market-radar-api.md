---
type: concept
domain: business-strategy
group: market-intelligence-geo-seo
tags:
  - "api-development"
  - "job-queue"
  - "stakeholder-graph"
  - "market-intelligence"
  - "php-backend"
aliases:
  - "Market Radar Queue API"
  - "MR API"
summary: The Market Radar API update includes adding stakeholder_graph_view to job types within the queue API shared script.
updated: 2026-05-01
---
# Market Radar Api

The Market Radar API is a business intelligence tool designed to provide stakeholders with market analysis and competitive monitoring capabilities. It functions as part of a broader queue-based API infrastructure that manages different job types and processing schedules.

## Implementation Details

The Market Radar API implementation includes integration with the queue API shared script, specifically through the addition of [[concepts/queue-graph-view|stakeholder_graph_view]] as a supported job type. This job type is configured as a hidden process without file upload functionality. The [[concepts/poll-graph-job|stakeholder_graph_view job]] type uses a default schedule window for processing, as defined in the defaultScheduleType() function within the queue [[concepts/api-configuration|API configuration]].

## Architecture

The API operates through two primary components: the queue API shared script located at site/admin/queue_api_shared.php, which manages job type definitions and scheduling, and the Market Radar API implementation at site/lab/market_radar_api.php. This modular architecture allows for flexible [[concepts/job-queue|job queue]] management while maintaining centralized configuration of job types and their associated [[concepts/parameters|parameters]].
