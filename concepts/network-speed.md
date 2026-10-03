---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "networking"
  - "data-transmission"
  - "bandwidth"
  - "ethernet-cables"
  - "throughput"
aliases:
  - "Network Throughput"
  - "Data Transfer Rate"
  - "Bandwidth"
  - "Network Performance"
summary: Network speed is the rate of data transmission across a network, constrained by physical media, cable categories, and infrastructure capabilities.
updated: 2026-07-12
group: devices-access-networks
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Network Speed

**Network [[concepts/speed|Speed]]** refers to the rate at which data is transmitted across a network, typically measured in [[concepts/classical-bits|bits]] per second (bps). It is determined by the capabilities of the physical [[entities/medium|medium]], network interface cards (NICs), and routing infrastructure.

## Physical Layer Constraints
The maximum theoretical speed is often bottlenecked by the physical cabling standard used. For wired connections, [[concepts/ethernet-cable-categories|Ethernet cable categories]] dictate bandwidth limits and interference resistance.

*   **Cable Categories & Speed Limits**:
    *   **[[concepts/cat-5e|Cat 5e]]**: Supports up to 1 Gbps (Gigabit Ethernet) over 100 MHz bandwidth.
    *   **[[concepts/cat-6|Cat 6]]**: Supports 10 Gbps up to 55 meters; 1 Gbps up to 100 meters.
    *   **[[concepts/cat-6a|Cat 6a]]**: Supports 10 Gbps up to 100 meters with improved shielding.
    *   **Cat 7/7a**: Higher shielding, supports 10 Gbps+ but less common in standard deployments.
    *   **[[concepts/cat-8|Cat 8]]**: Supports 25 Gbps or 40 Gbps over short distances (up to 30m), primarily for [[concepts/techno-economics|data centers]].
*   **Selection Criteria**:
    *   Match cable category to ISP plan speeds to avoid bottlenecks.
    *   Consider cost-effectiveness: Cat 5e is sufficient for most residential <1 Gbps plans; Cat 6 is the current standard for future-proofing.
    *   See detailed analysis in [[lab-notes/2026-06-24-Ethernet-Cable-Selection-Categories-Network-Speed-and-Co|Ethernet Cable Selection: Categories, Network Speed, and Cost-Effectiveness]].

## Factors Influencing Effective Speed
*   **Bandwidth vs. Throughput**: Bandwidth is the maximum capacity; throughput is the actual [[concepts/storage-bandwidth|data transfer rate]], often lower due to latency, packet loss, and congestion.
*   **Latency**: The delay before data transfer begins, critical for real-time applications like [[concepts/gaming|gaming]] or VoIP.
*   **Jitter**: Variation in latency, affecting stream stability.

## References
*   [Ethernet Cable Selection: Categories, Network Speed, and Cost-Effectiveness](https://www.youtube.com/watch?v=r5GPceyJKt8)
