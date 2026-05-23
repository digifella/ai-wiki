---
type: concept
domain: security-infrastructure
tags:
  - "profile-cards"
  - "intel-indicators"
  - "filtering"
  - "automated-status"
  - "data-matching"
aliases:
  - "Profile Intel Status"
  - "No Intel Filter"
summary: Profile cards now display automated intel status indicators and a new filter tab has been added for profiles with no matched intel.
updated: 2026-05-23
group: data-pipelines-sync-storage
---
# Canonical Names

Canonical Names is a standardized identification system used within profile management infrastructure to ensure consistent entity recognition and matching across the system. Each profile is assigned a canonical name that serves as its authoritative identifier, enabling the system to accurately track and correlate entities even when multiple name variations or aliases exist. This approach reduces duplication and ensures that references to the same entity are resolved to a single authoritative record.

## Intel Status Indicators

[[concepts/stakeholder-profiles|Profile cards]] now display automated intelligence status [[concepts/indicators|indicators]] that reflect whether matched intelligence has been found for each entity. These indicators provide immediate visual [[concepts/feedback|feedback]] on the data completeness and [[concepts/verification|verification]] status of individual profiles within the system. The indicators are generated through automated matching processes that cross-reference profile information against available [[concepts/threat-intelligence|intelligence sources]].

## Profile Filtering

A new filter tab has been added to the profile interface to enable users to view and work with profiles that have no matched intelligence. This filtering capability allows administrators and analysts to identify entities that may require additional data collection, verification, or investigation to establish complete intelligence records.
