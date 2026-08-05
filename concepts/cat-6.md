---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "ethernet-cabling"
  - "network-infrastructure"
  - "structured-cabling"
  - "data-transmission"
  - "lan-standards"
  - "tiaeia-568"
  - "iso-iec-11801"
  - "network-performance"
aliases:
  - "Category 6"
  - "Cat6"
  - "Ethernet Cat 6"
  - "Class E Cabling"
summary: Cat 6 is an Ethernet cabling standard supporting up to 250 MHz bandwidth and 10 Gbps data rates over 55 meters, offering improved crosstalk performance over Cat 5e for structured LAN deployments.
updated: 2026-07-11
group: devices-access-networks
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Cat 6

**Cat 6** (Category 6) is a standard for Ethernet cabling defined by [[TIA/EIA-568]] and [[ISO/IEC 11801]]. It supports bandwidths up to 250 MHz and data rates of 10 Gbps over distances up to 55 meters, and 1 Gbps up to 100 meters. It is widely used in structured cabling for Local Area Networks (LANs) due to its balance of performance and cost.

## Specifications
- **[[concepts/network-speed|Bandwidth]]:** 250 MHz
- **Max Data Rate:** 10 Gbps (up to 55m), 1 Gbps (up to 100m)
- **Crosstalk:** Improved [[entities/alien|alien]] crosstalk (AXT) performance compared to [[concepts/cat-5e]] via tighter twisting and internal splitters.
- **Connector:** RJ-45
- **Shielding:** Available as UTP (Unshielded Twisted Pair), F/UTP, or S/FTP depending on EMI requirements.

## Comparison with Other Categories
- **vs [[concepts/cat-5e]]:** Cat 6 offers higher bandwidth (250 MHz vs 100 MHz) and better crosstalk resistance, making it suitable for 10GBASE-T networks over shorter distances.
- **vs [[concepts/cat-6a|Cat 6a]]:** Cat 6a (Augmented) supports 10 Gbps over the full 100m distance and operates at 500 MHz. Cat 6 is thinner and more flexible but limited in 10Gbps reach.
- **vs Cat 7/Cat 8:** Higher categories offer greater bandwidth (600 MHz–2000 MHz) and shielding but are often overkill for standard residential or small business deployments and require specific connectors (GG45/TERA for [[concepts/cat-7|Cat 7]]).

## Selection Guidelines
- **Cost-Effectiveness:** For most modern deployments where [[concepts/isp-speeds|ISP speeds]] are ≤1 Gbps, Cat 6 is the optimal choice, offering future-proofing for 10Gbps without the premium cost of Cat 6a.
- **ISP [[concepts/speed|Speed]] Alignment:** Cable selection should match or exceed the bandwidth requirements of the Internet Service Provider plan to avoid bottlenecks.
- **[[concepts/installation|Installation]]:** Requires careful handling to maintain twist [[concepts/honesty|integrity]]; excessive untwisting at termination points degrades performance.

## References
- [Ethernet Cable Selection: Categories, Network Speed, and Cost-Effectiveness](https://www.youtube.com/watch?v=r5GPceyJKt8)
- See also: [[lab-notes/2026-06-24-Ethernet-Cable-Selection-Categories-Network-Speed-and-Co|Ethernet Cable Selection: Categories, Network Speed, and Cost-Effectiveness]]
