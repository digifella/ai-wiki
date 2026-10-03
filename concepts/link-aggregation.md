---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "networking"
  - "link-aggregation"
  - "bandwidth"
  - "redundancy"
  - "failover"
  - "nas-setup"
  - "home-server"
  - "terramaster"
aliases:
  - "LAG"
  - "Link Aggregation Group"
  - "Port Trunking"
  - "Bonding"
summary: Link aggregation combines multiple network interfaces into a single logical link to increase bandwidth and provide redundancy.
updated: 2026-07-11
group: devices-access-networks
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Link aggregation

Link aggregation (LAG) is a networking technique used to combine multiple network interfaces into a single logical link. This increases total [[concepts/network-speed|bandwidth]] and provides redundancy/failover capabilities in the event of a single link failure.

## Implementation Context & Hardware
- **[[concepts/m2-storage|TerraMaster F4-425 Plus]]** (as discussed in 2026 04 14 Making a powerful [[concepts/home-server|home server]] [[entities/gary-explains|Gary Explains]]):
    - Utilized as a powerful NAS and [[concepts/home-server]] candidate.
    - **[[concepts/cpu|Processor]]**: [[concepts/intel-n150|Intel N150]] CPU (performance-efficient).
    - **[[concepts/memory|Memory]]**: 16G.
    - Source: [Gary Explains Review](https://www.youtube.com/watch?v=9jKlDCnk-mM)
## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
