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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=business-strategy name=Business & Strategy

# Market Radar Api

The Market Radar API is a business intelligence tool designed to enable organizations to monitor market conditions and competitive landscapes through asynchronous data processing. Rather than requiring real-time request handling, the API operates on a queue-based system where analytical jobs are submitted and executed based on available system capacity. This architecture provides organizations with flexible and scalable market analysis capabilities while reducing the costs and infrastructure demands associated with synchronous request processing.

## Queue-Based Architecture

The core functionality relies on a shared script within the queue API that manages job types. A recent update to the Market Radar API introduces the `stakeholder_graph_view` to these job types. This addition allows the system to process and return complex stakeholder relationship data as part of the standard asynchronous workflow. By integrating this view into the queue mechanism, the API ensures that detailed stakeholder mapping is handled efficiently without blocking other analytical tasks.
