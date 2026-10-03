---
type: concept
domain: tools-platforms-infrastructure
group: devices-access-networks
tags:
  - "time-server"
  - "ntp"
  - "ptp"
  - "time-synchronization"
  - "network-infrastructure"
  - "reliability"
  - "telstra-outage"
  - "gps"
aliases:
  - "Network Time Server"
  - "Time Synchronization Server"
summary: "A Time Server provides precise time synchronization to network systems using protocols like NTP or PTP to ensure accuracy for distributed operations and security."
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Time Server

A **Time Server** is a computer or network device that provides precise time synchronization services to other systems, typically using protocols such as Network Time Protocol (NTP) or [[concepts/accuracy|Precision]] Time Protocol (PTP). Accurate timekeeping is critical for distributed systems, financial transactions, logging, and [[concepts/internet-security|network security]].

## Key Functions
- **Synchronization**: Aligns system clocks across a network to a reference standard (e.g., Coordinated Universal Time).
- **Stratum [[concepts/hierarchy|Hierarchy]]**: Organizes servers by distance from the primary time source (Stratum 0/1) to reduce latency and error accumulation.
- **[[concepts/robustness|Fault Tolerance]]**: Redundant servers prevent single points of failure in time distribution.

## Recent Incidents & Reliability Concerns
- **Telstra Outage (2026)**: A nationwide disruption in Australia was attributed to an obsolete [[concepts/gps-time-synchronization|GPS time synchronization]] server. The failure highlighted risks associated with aging infrastructure and lack of redundancy in critical telecom networks. Potential fines reached $30 million. See [[lab-notes/2026-07-16-Telstra-Outage-Obsolete-GPS-Time-Server-Caused-Nationwid|Telstra Outage: Obsolete GPS Time Server Caused Nationwide Disruption]] for details.

## References
- [Telstra Outage: Obsolete GPS Time Server Caused Nationwide Disruption](https://www.youtube.com/watch?v=1T9xQy-dsQo)
