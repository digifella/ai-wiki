---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "networking"
  - "wired-infrastructure"
  - "ethernet-cabling"
  - "hardware-configuration"
aliases:
  - "Wired Network"
  - "Ethernet Setup"
  - "Network Cabling"
  - "Physical Layer Configuration"
summary: "Wired network setups utilize twisted-pair copper cabling and hardware like routers and switches to provide stable, low-latency connectivity."
updated: 2026-07-09
group: devices-access-networks
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-09" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Wired Network Setup

A wired network setup provides stable, low-latency connectivity compared to wireless alternatives. Proper configuration requires selecting appropriate hardware, specifically Routers, Switchs, and cabling infrastructure.

## Cabling Infrastructure

The physical layer of a wired network relies on twisted-pair copper cabling. Selection depends on [[concepts/network-speed|bandwidth]] requirements, distance, and cost-effectiveness.

### Ethernet Cable Categories
*   **[[concepts/cat-5e|Cat 5e]]**: Supports up to 1 Gbps at 100 MHz. Sufficient for most standard home broadband connections.
*   **[[concepts/cat-6|Cat 6]]**: Supports up to 10 Gbps at 250 MHz (up to 55 meters). Recommended for future-proofing and higher throughput.
*   **[[concepts/cat-6a|Cat 6a]]**: Supports 10 Gbps at 500 MHz (up to 100 meters). Reduces crosstalk and interference.
*   **Cat 7/7a**: Shielded cables supporting higher frequencies; often overkill for residential use.
*   **[[concepts/cat-8|Cat 8]]**: Supports 25 Gbps or 40 Gbps at 2000 MHz. Designed for [[concepts/techno-economics|data centers]] and short-distance high-[[concepts/speed|speed]] links.

### Selection Criteria
*   **ISP Speed Alignment**: Match cable category to ISP plan. Cat 5e is the bottleneck for >1 Gbps plans; upgrade to Cat 6 or higher.
*   **Cost-Effectiveness**: Avoid over-specifying. Cat 6 is generally the sweet spot for performance vs. cost in modern homes.
*   **Interference**: Shielded cables (STP/FTP) are necessary in environments with high electromagnetic interference.

See detailed analysis in [[lab-notes/2026-06-24-Ethernet-Cable-Selection-Categories-Network-Speed-and-Co|Ethernet Cable Selection: Categories, Network Speed, and Cost-Effectiveness]].

## Hardware Configuration
*   **Router**: Acts as the [[concepts/gateway|gateway]] between the local network and the ISP.
*   **Switch**: Expands the number of available LAN ports. Ensure switches support Gigabit or 10-Gigabit speeds depending on cabling.
*   **NIC (Network Interface Card)**: End-device hardware must support the negotiated speed of the cable and switch.

## References
*   [Ethernet Cable Selection: Categories, Network Speed, and Cost-Effectiveness](https://www.youtube.com/watch?v=r5GPceyJKt8)
