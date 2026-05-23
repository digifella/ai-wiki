---
type: concept
domain: creative-pursuits
tags:
  - "tcp-ip-model"
  - "network-layer"
  - "ip-routing"
  - "packet-switching"
  - "logical-addressing"
  - "icmp"
  - "igmp"
  - "satellite-internet"
aliases:
  - "Network Layer"
  - "OSI Layer 3"
  - "IP Layer"
summary: The Internet layer of the TCP/IP model handles packet routing across networks using logical IP addressing and protocols including IP, ICMP, and IGMP.
updated: 2026-05-23
group: photoshop-layer-workflows
---
# Internet Layer

The Internet layer is the second layer of the TCP/IP model, responsible for routing data packets across different networks. It operates using logical addressing through IP (Internet Protocol) addresses, which identify devices on a network independently of their physical location or [[concepts/hardware|hardware]] type. This layer enables communication between devices on separate networks by determining the best path for packets to travel from source to destination.

## Core Protocols

The primary protocols operating [[concepts/assistive-technology|at]] the Internet layer are IP, ICMP, and IGMP. IP comes in two versions—IPv4 and IPv6—and handles the actual packaging and delivery of data. ICMP (Internet [[concepts/power|Control]] Message Protocol) provides diagnostic and error-reporting functions, allowing devices to communicate about network conditions and problems. IGMP (Internet Group Management Protocol) manages multicast group memberships, enabling efficient delivery of data to multiple recipients simultaneously.

## Relationship to Other Layers

The Internet layer sits between the Link layer below it (which handles physical transmission) and the Transport layer above it (which manages end-to-end communication). This position makes it fundamental to how modern networks function, as it abstracts away the specific details of underlying hardware while providing the routing infrastructure that allows [[concepts/global-connectivity|global connectivity]] across diverse network types.
## Source Notes
- 2026-04-14: The Starlink Breakthrough Everyone Missed
- 2026-04-07: [[lab-notes/2026-04-07-Firecrawl-AI-Essential-Web-Data-for-Autonomous-AI-Agents|Firecrawl AI Essential Web Data for Autonomous AI Agents]] · [▶ source](https://www.youtube.com/watch?v=eH8JdttKIdA)
- 2026-04-17: [[lab-notes/2026-04-17-Bridging-the-AI-Agent-Speed-Gap-Rebuilding-Human-Centric-Web-Infrastru|Bridging the AI Agent Speed Gap Rebuilding Human Centric Web Infrastru]] · [▶ source](https://www.youtube.com/watch?v=XlfumXPPrLY)
- 2026-04-27: Google Gemma · [▶ source](https://www.youtube.com/watch?v=yJr_kTCOkFo)