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
updated: 2026-07-16
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=business-strategy name=Business & Strategy

# Market Radar Api

The Market Radar API is a business intelligence tool designed to enable organizations to monitor market conditions and competitive landscapes through asynchronous data processing. Rather than requiring real-time request handling, the API operates on a queue-based system where analytical jobs are submitted and executed based on available system capacity. This architecture provides organizations with flexible and scalable market analysis capabilities while reducing the costs and infrastructure demands associated with synchronous request processing.

## Queue-Based Architecture

The API's queue system manages analytical tasks submitted by stakeholders, processing them according to system availability rather than immediate demand. Jobs are submitted to a shared script queue that handles distribution and execution. Recent updates to the API have expanded job type functionality to include stakeholder_graph_view, which provides additional capabilities for analyzing relationships and dependencies within organizational structures and market networks. This addition enables more granular analysis of stakeholder interactions and influence patterns within competitive environments.
