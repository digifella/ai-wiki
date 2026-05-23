---
type: concept
domain: tools-platforms
tags:
  - "queue-api"
  - "job-types"
  - "stakeholder-graph"
  - "web-publishing"
  - "php"
aliases:
  - "Queue API Job Types"
  - "Stakeholder Graph View"
summary: Records updates to the queue API job types and the addition of the stakeholder graph view.
updated: 2026-05-23
group: web-publishing-quartz-websites
---
# List Graph Jobs

List Graph Jobs refers to updates made to the queue API [[concepts/job-management|job management]] system to support the [[concepts/queue-graph-view|stakeholder graph view]] feature. The [[concepts/adoption|implementation]] involved modifications to core queue administration [[concepts/files|files]] to recognize and handle a new job type alongside existing queue operations.

## Queue API Updates

The primary changes were made to the queue API shared configuration file, which maintains the registry of available job types. The [[concepts/poll-graph-job|stakeholder_graph_view job]] type was added to this registry as a hidden job type that does not require [[concepts/file-uploads|file uploads]]. This addition also established that jobs of this type would use a 'window' schedule type by default, integrating the new feature into the existing scheduling framework.

## Stakeholder Graph View Integration

The [[concepts/market-radar-api|market radar API]] was simultaneously updated to support the stakeholder graph view functionality. These coordinated changes between the queue system and the market radar API created the infrastructure needed to process and display stakeholder relationship data in graph format alongside other queue-managed operations.
