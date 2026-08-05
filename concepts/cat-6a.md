---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "ethernet-cabling"
  - "network-infrastructure"
  - "cat-6a"
  - "10gbase-t"
aliases:
  - "Category 6a"
  - "Augmented Category 6"
  - "Cat 6a"
summary: Cat 6a is an Ethernet cabling standard supporting 10 Gigabit Ethernet speeds up to 100 meters with improved crosstalk protection compared to Cat 6.
updated: 2026-07-11
group: devices-access-networks
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Cat 6a

**Category 6a** (Augmented Category 6) is a standard for Ethernet cabling defined by the TIA/EIA-568-B.2-10 and ISO/IEC 11801 specifications. It supports 10 Gigabit Ethernet (10GBASE-T) up to 100 meters, doubling the distance capability of standard [[concepts/cat-6|Cat 6]] for 10G speeds.

## Specifications
- **Bandwidth:** 500 MHz
- **Max [[concepts/speed|Speed]]:** 10 Gbps
- **Max Distance:** 100 m (328 ft) for 10GBASE-T
- **Crosstalk:** Improved [[entities/alien|alien]] crosstalk (AXT) [[concepts/secure|protection]] compared to Cat 6 via thicker jackets or internal splitters.
- **Compatibility:** Backward compatible with [[concepts/cat-5e|Cat 5e]], Cat 6, and Cat 3.

## Comparison with Other Categories
- **vs Cat 6:** Cat 6 supports 10 Gbps only up to 37–55 meters. Cat 6a extends this to 100 meters. Cat 6a has stricter specifications for crosstalk and system noise.
- **vs Cat 5e:** Cat 5e is limited to 1 Gbps at 100 MHz. Cat 6a offers significantly higher bandwidth and speed.
- **vs [[concepts/cat-8|Cat 8]]:** Cat 8 supports 25/40 Gbps but is limited to 30 meters and is primarily designed for data center short-reach applications. Cat 6a is more cost-effective for general building infrastructure.

## Integration Notes
- Selection depends on [[concepts/isp-speeds|ISP speeds]], future-proofing needs, and budget constraints. See [[lab-notes/2026-06-24-Ethernet-Cable-Selection-Categories-Network-Speed-and-Co|Ethernet Cable Selection: Categories, Network Speed, and Cost-Effectiveness]] for detailed analysis on cost-effectiveness relative to [[concepts/network-speed|network speed]].
- Key considerations include:
  - Matching cable category to ISP plan (e.g., Cat 5e sufficient for <1 Gbps, Cat 6a for 10 Gbps home [[entities/labs|labs]]).
  - [[concepts/cost-benefit-analysis|Cost-benefit analysis]] of upgrading from Cat 6 to Cat 6a for long runs.
  - Physical [[concepts/installation|installation]] differences (Cat 6a is thicker/stiffer).

## References
- [Ethernet Cable Selection: Categories, Network Speed, and Cost-Effectiveness](https://www.youtube.com/watch?v=r5GPceyJKt8)
