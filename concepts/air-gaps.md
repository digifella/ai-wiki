---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "air-gap"
  - "network-isolation"
  - "security-architecture"
  - "physical-security"
  - "infrastructure-hardening"
aliases:
  - "air-gapped systems"
  - "network segmentation"
  - "isolated networks"
summary: Air gaps are physical or logical separations that isolate systems from unsecured networks to prevent unauthorized access or data transfer.
updated: 2026-07-04
group: privacy-security-guardrails
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-04" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Air Gaps

An air gap is a [[concepts/security|security]] measure that physically or logically isolates a computer system or network from unsecured networks, particularly the internet. By eliminating direct connections between sensitive systems and external networks, air gaps remove a primary attack vector for remote compromise. This [[concepts/disconnection|isolation]] prevents [[concepts/security-exposure|unauthorized access]] and data exfiltration by ensuring that attackers cannot reach protected systems through network-based attacks, regardless of the vulnerabilities present in connected infrastructure.

## Implementation Methods

Air gaps can be implemented either physically, by keeping systems completely disconnected from networks, or logically, through firewalls and [[concepts/network-segmentation|network segmentation]] that restrict data [[concepts/flow|flow]] between protected and untrusted systems. Physical air gaps provide the strongest isolation but limit legitimate data transfer, requiring manual or carefully controlled processes for moving information between systems. Logical air gaps offer more operational flexibility while still creating substantial barriers to unauthorized access.

## Common Applications

Air-gapped systems are commonly used in critical infrastructure environments, including power [[concepts/grids|grids]], industrial control systems, and nuclear facilities, where network compromise could have severe consequences. Financial institutions, government agencies, and organizations handling classified information also employ air gaps to protect sensitive data. Even non-critical systems may use air gaps when the security requirements justify the operational limitations they impose.

## Limitations and Trade-offs

While effective against remote attacks, air gaps do not protect against insider threats, physical theft, or attacks delivered through removable media or other offline channels. Maintaining an air-gapped system requires strict data handling procedures and ongoing security discipline. The operational burden of transferring data to and from isolated systems can create pressure to compromise the isolation, making proper policy enforcement essential to the effectiveness of the approach.
## Source Notes
- 2026-04-07: Karpathy
- 2026-04-10: [[lab-notes/2026-04-10-Karpathys-LLM-Wiki-Beyond-RAG-for-Persistent-Knowledge-Bases|Karpathys LLM Wiki Beyond RAG for Persistent Knowledge Bases]] · [▶ source](https://www.youtube.com/watch?v=zVEb19AwkqM)
- 2026-04-12: [[lab-notes/2026-04-12-Heres-what-it-actually-does-how-to-build-it-yourself|Heres what it actually does how to build it yourself]]
- 2026-04-20: [[lab-notes/2026-04-20-Knowledge-Graphs-Advancing-Karpathys-LLM-Wiki-for-Deeper-Insights|Knowledge Graphs Advancing Karpathys LLM Wiki for Deeper Insights]] · [▶ source](https://www.youtube.com/watch?v=yYSTsKo8moU)
