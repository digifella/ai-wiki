---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "isp-speeds"
  - "bandwidth"
  - "ethernet-cables"
  - "network-constraints"
  - "cat-5e"
  - "cat-6"
aliases:
  - "Internet Service Provider Speeds"
  - "ISP Bandwidth"
  - "Network Throughput Limits"
summary: "ISP speeds represent the bandwidth capacity provided by an Internet Service Provider, which is constrained by physical layer limitations such as Ethernet cable categories and network hardware capabilities."
updated: 2026-07-11
group: devices-access-networks
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# ISP Speeds

**ISP Speeds** refer to the [[concepts/bus-bandwidth|bandwidth capacity]] provided by an Internet Service Provider, typically measured in Megabits per second (Mbps) or Gigabits per second (Gbps). Actual throughput is constrained by the weakest link in the network chain, including the ISP plan, modem/router capabilities, and physical cabling.

## Key Constraints & Components

*   **Physical Layer Limitations**: The type of Ethernet cable used can bottleneck ISP speeds if the cable category does not support the subscribed [[concepts/network-speed|bandwidth]].
*   **Cable Categories**:
    *   **[[concepts/cat-5e|Cat 5e]]**: Supports up to 1 Gbps; sufficient for most standard residential plans.
    *   **[[concepts/cat-6|Cat 6]]**: Supports up to 10 Gbps (up to 55m); recommended for future-proofing and high-[[concepts/speed|speed]] fiber plans.
    *   **Cat 6a/7/8**: Higher shielding and bandwidth for data center or extreme [[concepts/home-lab|home lab]] environments; often unnecessary for typical ISP connections.
*   **Cost-Effectiveness**: Higher category cables (Cat 7/8) offer [[concepts/diminishing-returns|diminishing returns]] for standard ISP speeds and increase cost/rigidity without practical benefit for <10 Gbps connections.

## Integration Notes

*   See [[lab-notes/2026-06-24-Ethernet-Cable-Selection-Categories-Network-Speed-and-Co|Ethernet Cable Selection: Categories, Network Speed, and Cost-Effectiveness]] for detailed breakdown of cable specs relative to ISP tiers.

## References

*   [Ethernet Cable Selection: Categories, Network Speed, and Cost-Effectiveness](https://www.youtube.com/watch?v=r5GPceyJKt8)
