---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "ethernet-cabling"
  - "network-infrastructure"
  - "cable-categories"
  - "bandwidth-specifications"
aliases:
  - "Ethernet Cable Standards"
  - "Cable Category Ratings"
  - "Network Cabling Specs"
summary: Ethernet cable selection is determined by category ratings that dictate bandwidth capacity, data transfer speeds, and shielding properties to balance performance against cost.
updated: 2026-07-11
group: devices-access-networks
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Cable Specifications

## Ethernet Cabling Standards

Ethernet cable selection is determined by category ratings, which dictate [[concepts/bus-bandwidth|bandwidth capacity]], maximum data transfer speeds, and shielding properties. Proper selection balances performance requirements against cost-effectiveness for specific network environments.

### Key Categories and Specifications

*   **[[concepts/cat-5e|Cat 5e]]**: Enhanced Category 5; supports Gigabit Ethernet (1 Gbps) up to 100 MHz. Standard for most residential and small office deployments.
*   **[[concepts/cat-6|Cat 6]]**: Supports 10 Gbps up to 55 meters; 1 Gbps up to 100 meters. Operates at 250 MHz. Includes better crosstalk reduction than Cat 5e.
*   **[[concepts/cat-6a|Cat 6a]]**: Augmented Category 6; supports 10 Gbps up to 100 meters. Operates at 500 MHz. Often shielded (STP/FTP) to reduce interference in dense environments.
*   **Cat 7/7a**: Proprietary standards with individual shielding for each pair. Supports 10 Gbps at 600 MHz ([[concepts/cat-7|Cat 7]]) or 1000 MHz (Cat 7a). Not officially recognized by ISO/IEC or TIA/EIA but widely available.
*   **[[concepts/cat-8|Cat 8]]**: Designed for data center environments. Supports 25 Gbps and 40 Gbps up to 30 meters. Operates at 2000 MHz. Requires heavy shielding.

### Selection Criteria

*   **ISP [[concepts/speed|Speed]] Alignment**: Cable category should match or exceed the [[concepts/network-speed|bandwidth]] provided by the Internet Service Provider to avoid bottlenecks.
*   **Distance Constraints**: Higher categories (Cat 6a, Cat 8) have stricter distance limitations for maximum speed [[concepts/storing|retention]].
*   **Interference Environment**: Shielded cables (STP/FTP) are necessary in environments with high electromagnetic interference (EMI).
*   **Future-Proofing**: Installing Cat 6a or higher provides headroom for future network upgrades without rewiring.

### References

*   [Ethernet Cable Selection: Categories, Network Speed, and Cost-Effectiveness](https://www.youtube.com/watch?v=r5GPceyJKt8)

### Related Notes

*   Network Infrastructure
*   [[concepts/network-speed|Bandwidth]] Management
*   [[lab-notes/2026-06-24-Ethernet-Cable-Selection-Categories-Network-Speed-and-Co|Ethernet Cable Selection: Categories, Network Speed, and Cost-Effectiveness]]
