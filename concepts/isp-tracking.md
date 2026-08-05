---
type: concept
domain: ux-design
tags:
  - "isp-tracking"
  - "dns-privacy"
  - "encrypted-dns"
  - "internet-monitoring"
  - "data-encryption"
aliases:
  - "ISP Surveillance"
  - "DNS Logging"
  - "Network Monitoring"
summary: ISPs track user activity by logging unencrypted DNS requests, revealing visited domains despite HTTPS encryption of content.
updated: 2026-07-11
group: typography-layout
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ux-design name=UX & Design

# ISP tracking

Internet Service Providers (ISPs) monitor user activity by observing **DNS requests** (revealing visited domains), even when **HTTPS** encrypts content (passwords, emails). This makes users "the product" sold for advertising.

- **[[concepts/internet-privacy|ISP tracking]] mechanism**: Logs domain names resolved via unencrypted DNS, bypassing HTTPS content encryption
- **VPNs are oversold**: Often paid services with logging risks; not a free or perfect [[concepts/privacy|privacy]] [[concepts/solution|solution]]
- **[[concepts/dns-lookups|Encrypted DNS]]** (e.g., DNS over HTTPS/TLS) provides a **free, effective alternative**:
  - Encrypts DNS queries to prevent ISP visibility
  - Stops being "the product" without cost or [[concepts/trust|trust]] issues
  - Complements HTTPS by protecting domain-level [[concepts/privacy|privacy]]
- **Key insight**: HTTPS ≠ privacy (only secures content), while [[concepts/encrypted-dns|Encrypted DNS]] secures domain [[concepts/metadata|metadata]]

Related concepts:
- HTTPS: Encrypts content but not domain requests
- VPNs: Often marketed as [[concepts/user-control|privacy tools]] but introduce new risks
- [[concepts/dns|Encrypted DNS]]: Recommended free [[concepts/solution|solution]] for domain-level privacy

2026 04 14 Encrypted dns [[entities/dave|dave]] garage
## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-07: [[lab-notes/2026-04-07-Building-a-Secure-Personalized-AI-Second-Brain-using-Claude-Code|Building a Secure Personalized AI Second Brain using Claude Code]] · [▶ source](https://www.youtube.com/watch?v=1FiER-40zng)
- 2026-04-08: [[lab-notes/2026-04-08-Agentic-Visual-Reasoning-Enhancing-VLMs-for-Precise-Object-Counting-an|Agentic Visual Reasoning Enhancing VLMs for Precise Object Counting an]] · [▶ source](https://www.youtube.com/watch?v=VFYnD1WREdU)
- 2026-04-10: [[lab-notes/2026-04-10-Claude-Managed-Agents-API-Suite-for-Building-and-Deploying-Autonomous-|Claude Managed Agents API Suite for Building and Deploying Autonomous ]] · [▶ source](https://www.youtube.com/watch?v=NLWiIj47IdI)
- 2026-04-13: [[lab-notes/2026-04-13-Fujifilm-Autofocus-Setup-Guide-Modes-Features-and-Optimization|Fujifilm Autofocus Setup Guide Modes Features and Optimization]] · [▶ source](https://www.youtube.com/watch?v=C00MqhLjKnE)
- 2026-04-19: [[lab-notes/2026-04-19-Automating-Client-Onboarding-with-NotebookLM-and-Gemini-AI|Automating Client Onboarding with NotebookLM and Gemini AI]] · [▶ source](https://www.youtube.com/watch?v=qic1Wgk1P6o)
- 2026-04-22: Google · [▶ source](https://www.youtube.com/watch?v=2DlsrKlF7XQ)
- 2026-04-27: Iran · [▶ source](https://www.youtube.com/watch?v=ApIb-nTdoLU)
