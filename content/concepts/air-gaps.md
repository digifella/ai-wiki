---
type: concept
domain: security-infrastructure
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
updated: 2026-05-23
group: privacy-security-guardrails
---
# Air Gaps

An air gap is a [[concepts/security|security]] measure that physically or logically isolates a computer system or network from unsecured networks, particularly the internet. By eliminating direct connections between sensitive systems and external networks, air gaps remove a primary attack vector for remote compromise. This isolation prevents unauthorized access and data exfiltration by ensuring that attackers cannot reach protected systems through network-based attacks, regardless of the vulnerabilities present in connected infrastructure.

## Implementation Methods

Air gaps can be implemented through physical isolation, where systems are literally disconnected from external networks and kept in separate physical locations. Logical air gaps use [[concepts/software|software]] and [[concepts/network-controls|network controls]] to create isolation within shared infrastructure, such as [[concepts/virtual-machines|virtual machines]] or containerized environments with restricted communication channels. In practice, most high-security environments use combinations of both approaches, with additional controls governing how data moves between isolated and connected systems.

## Limitations and Challenges

While air gaps eliminate remote network-based attacks, they do not prevent all compromise vectors. Data must eventually move between isolated systems and the outside world, creating potential transfer points for malware or unauthorized data. Physical access to air-gapped systems remains a [[concepts/vulnerability|vulnerability]] if not properly controlled. Additionally, air gaps complicate system administration, software updates, and legitimate data sharing, requiring careful procedures and specialized transfer mechanisms to maintain both security and operational functionality.
## Source Notes
- 2026-04-07: Karpathy
- 2026-04-10: [[lab-notes/2026-04-10-Karpathys-LLM-Wiki-Beyond-RAG-for-Persistent-Knowledge-Bases|Karpathys LLM Wiki Beyond RAG for Persistent Knowledge Bases]] · [▶ source](https://www.youtube.com/watch?v=zVEb19AwkqM)
- 2026-04-12: [[lab-notes/2026-04-12-Heres-what-it-actually-does-how-to-build-it-yourself|Heres what it actually does how to build it yourself]]
- 2026-04-20: [[lab-notes/2026-04-20-Knowledge-Graphs-Advancing-Karpathys-LLM-Wiki-for-Deeper-Insights|Knowledge Graphs Advancing Karpathys LLM Wiki for Deeper Insights]] · [▶ source](https://www.youtube.com/watch?v=yYSTsKo8moU)