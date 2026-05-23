---
type: concept
domain: security-infrastructure
tags:
  - "concept"
  - "internet-privacy"
  - "isp-tracking"
  - "vpn"
  - "encrypted-dns"
  - "data-protection"
  - "online-security"
aliases:
  - "Online Privacy"
  - "ISP Tracking"
summary: Exploration of internet privacy concerns including ISP tracking, VPNs, and encrypted DNS solutions.
updated: 2026-05-23
group: privacy-security-guardrails
---
# Internet Privacy

Internet privacy encompasses the protection of user data and activity across digital networks, addressing concerns about unauthorized tracking, surveillance, and data collection. Internet Service Providers (ISPs) occupy a central position in [[concepts/privacy|privacy]] discussions, as they can monitor and log user traffic [[concepts/assistive-technology|at]] the network level. This capability creates potential vulnerabilities where browsing history, destination sites, and communication patterns may be observed, collected, or sold to third parties.

## Technical Privacy Solutions

Several technical approaches aim to mitigate privacy risks on the internet. Virtual Private Networks (VPNs) encrypt user traffic and route it through remote servers, obscuring both user identity and activity from ISPs and network observers. [[concepts/dns-lookups|Encrypted DNS]] services, such as [[concepts/dns|DNS]] over HTTPS (DoH) and DNS over TLS (DoT), protect DNS queries from being intercepted or logged in plaintext, preventing eavesdropping on which websites users attempt to visit. These solutions operate at different network layers and can be deployed independently or in combination.

## Local Execution and Privacy

An alternative privacy approach involves executing [[concepts/software|applications]] locally rather than on remote servers. Deploying language [[concepts/models|models]] and AI systems on personal devices eliminates the need to transmit sensitive data to external servers for processing. [[concepts/model-customization|Open-weight models]] and lightweight implementations enable users to run powerful software locally on consumer [[concepts/hardware|hardware]], from traditional computers to mobile devices, maintaining data confidentiality while reducing reliance on centralized infrastructure.
## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-07: [[lab-notes/2026-04-07-Anthropic-Dispatch-Remote-Desktop-AI-Integration-Claude-and-OpenClaw|Anthropic Dispatch Remote Desktop AI Integration Claude and OpenClaw]] · [▶ source](https://www.youtube.com/watch?v=1_VlT1vhN04)
- 2026-04-21: Local Mistral · [▶ source](https://www.youtube.com/watch?v=5QEDNZlDf-c)
- 2026-04-27: Google Gemma · [▶ source](https://www.youtube.com/watch?v=yJr_kTCOkFo)