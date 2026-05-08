---
type: concept
domain: security-infrastructure
group: data-pipelines-sync-storage
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
updated: 2026-05-01
---
# Canonical Names

Canonical Names refers to the standardized identification system used within profile management infrastructure to ensure consistent entity recognition and matching across the system. Each profile is assigned a canonical name that serves as its authoritative identifier, enabling the system to accurately track and correlate entities even when multiple name variations or aliases exist.

## Intel Status Indicators

[[concepts/stakeholder-profiles|Profile cards]] now display automated intelligence status indicators that reflect whether matched intel has been found for each entity. These indicators are updated automatically following any profile modification, including saves, creation events, or data imports via CSV. Profiles with matched intel display a green "N intel" indicator, while profiles lacking matched intel show an amber "⚠ no intel" warning badge.

## No Intel Filter

A dedicated filter tab labeled "⚠ No Intel (N)" has been integrated into the profile type navigation bar. This filter provides visibility into profiles that have no matched intelligence on record, allowing administrators and operators to quickly identify gaps in intel coverage and prioritize data enrichment efforts. The filter displays a count of affected profiles for rapid assessment.
