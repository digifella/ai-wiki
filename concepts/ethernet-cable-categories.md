---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "networking"
  - "ethernet"
  - "cabling"
  - "infrastructure"
aliases:
  - "Ethernet Categories"
  - "Twisted-Pair Cabling"
  - "Cat 5e/6/6a/7/8"
summary: Ethernet cable categories define twisted-pair cabling performance specifications based on bandwidth capacity, maximum data rate, and interference resistance.
updated: 2026-07-11
group: platforms-runtimes-environments
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Ethernet Cable Categories

Ethernet cable categories define the performance specifications of twisted-pair cabling, primarily determined by [[concepts/bus-bandwidth|bandwidth capacity]], maximum data rate, and interference resistance. Selection depends on ISP [[concepts/speed|speed]], distance, and cost-effectiveness.

## Category Specifications

- **Cat 5e**: [[concepts/cat-5e|Enhanced Category 5]]. Supports up to 1 Gbps at 100 MHz. Standard for most home/office Gigabit networks.
- **[[concepts/cat-6|Cat 6]]**: Supports up to 10 Gbps at 250 MHz (up to 55m). Better crosstalk [[concepts/secure|protection]] than Cat 5e.
- **Cat 6a**: [[concepts/cat-6a|Augmented Category 6]]. Supports 10 Gbps at 500 MHz (up to 100m). Required for full-length 10GbE runs.
- **Cat 7/7a**: Shielded twisted pair (STP). Supports up to 10 Gbps ([[concepts/cat-7|Cat 7]]) or 40 Gbps (Cat 7a) at higher frequencies. Less common in standard deployments due to proprietary connectors.
- **[[concepts/cat-8|Cat 8]]**: Supports 25 Gbps or 40 Gbps at 2000 MHz. Limited to 30m. Designed for data center short-reach links.

## Selection Guidelines

- **Match ISP Speed**: Do not overspend on Cat 6a/8 if ISP provides <1 Gbps; Cat 5e is sufficient.
- **Future-Proofing**: Cat 6 is the cost-effective sweet spot for new installations, supporting 10 Gbps over shorter distances.
- **Distance Constraints**: 10 Gbps speeds degrade significantly beyond 55m on Cat 6; use Cat 6a for 100m runs.
- **Interference**: Shielded cables (Cat 7/8) are only necessary in high-interference environments; unshielded (UTP) suffices for typical residential/commercial use.

## References

- [Ethernet Cable Selection: Categories, Network Speed, and Cost-Effectiveness](https://www.youtube.com/watch?v=r5GPceyJKt8)
- [[lab-notes/2026-06-24-Ethernet-Cable-Selection-Categories-Network-Speed-and-Co|Ethernet Cable Selection: Categories, Network Speed, and Cost-Effectiveness]]
