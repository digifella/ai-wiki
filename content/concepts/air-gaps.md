---
type: concept
domain: security-infrastructure
group: privacy-security-guardrails
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
updated: 2026-05-01
---
# Air Gaps

An air gap is a security measure that physically or logically isolates a computer system or network from unsecured networks, particularly the internet. By eliminating direct connections between sensitive systems and external networks, air gaps remove a primary attack vector for remote compromise. This isolation prevents unauthorized access and data exfiltration by ensuring that attackers cannot reach protected systems through network-based attacks, regardless of the vulnerabilities present in connected infrastructure.

## Implementation Approaches

Air gaps can be implemented through physical separation, where systems are kept on entirely disconnected [[concepts/hardware|hardware]] and networks with no direct links to other computers or the internet. Logical air gaps use [[concepts/software|software]], firewalls, or network segmentation to create isolated zones within a shared infrastructure, restricting data flow between sensitive and untrusted areas. Both approaches require careful management of any necessary data transfers, which typically occur through controlled channels such as removable media, manual data entry, or dedicated one-way transfer mechanisms.

## Practical Applications and Limitations

Air-gapped systems are commonly deployed in critical infrastructure such as power grids, nuclear facilities, and financial institutions where the cost of compromise is extremely high. However, maintaining an air gap introduces operational challenges: systems require manual updates, integration with [[concepts/external-data|external data]] becomes cumbersome, and complete isolation is difficult to achieve in practice. Additionally, air gaps do not prevent all threats—insider threats, supply chain compromises, and physical attacks remain viable against isolated systems. The effectiveness of an air gap depends on strict operational discipline and [[concepts/continuous-monitoring|continuous monitoring]] of data transfer mechanisms.

## Source Notes
- 2026-04-07: Karpathy
- 2026-04-10: [[lab-notes/2026-04-10-Karpathys-LLM-Wiki-Beyond-RAG-for-Persistent-Knowledge-Bases|Karpathys LLM Wiki Beyond RAG for Persistent Knowledge Bases]] · [▶ source](https://www.youtube.com/watch?v=zVEb19AwkqM)
- 2026-04-12: [[lab-notes/2026-04-12-Heres-what-it-actually-does-how-to-build-it-yourself|Heres what it actually does how to build it yourself]]
- 2026-04-20: [[lab-notes/2026-04-20-Knowledge-Graphs-Advancing-Karpathys-LLM-Wiki-for-Deeper-Insights|Knowledge Graphs Advancing Karpathys LLM Wiki for Deeper Insights]] · [▶ source](https://www.youtube.com/watch?v=yYSTsKo8moU)
