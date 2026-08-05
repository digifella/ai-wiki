---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "remote-access"
  - "networking"
  - "vpn"
  - "ssh"
  - "rdp"
  - "lm-link"
  - "distributed-ai"
  - "portable-computing"
aliases:
  - "Remote Connection"
  - "Distance Computing"
  - "Network Access"
  - "LM Link"
summary: Remote access encompasses various methods and technologies for connecting to computing resources from a distance, including tools like LM Studio's LM Link.
updated: 2026-07-12
group: deployment-docker-services
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Remote Access

**Remote access** refers to the ability to connect to and control a computer or device from another location over a network. This includes various tools and technologies designed for accessing computing resources remotely.

### Key Concepts & Technologies
- [[concepts/vpn|virtual-private-network]] (VPN)
- [[concepts/remote-desktop]]
- SSH ([[concepts/secure|Secure]] [[concepts/cli|Shell]])
  - Indispensable for [[entities/linux|Linux]], [[concepts/cloud-based-solutions|cloud computing]], DevOps, and [[concepts/server-administration|server administration]].
  - Provides secure remote access via encryption protocols.
  - See: [[lab-notes/2026-06-25-SSH-Fundamentals-Secure-Remote-Access-and-Encryption-Exp|SSH Fundamentals: Secure Remote Access and Encryption Explained]]
- RDP ([[concepts/remote-desktop|Remote Desktop]] Protocol)

### Related Tools and Platforms
- **[[entities/lm-studio|LM Studio]] [[entities/lm-link|LM Link]]**: Enabling remote access to [[concepts/large-language-models|large language models (LLMs)]] on [[concepts/portable-devices|portable devices]].
  - Successfully running [[entities/gpt-oss-120b|GPT-OSS 120B]] (60GB) and [[entities/meta|Meta]] [[entities/llama|Llama]] 70B (70GB) on a [[entities/macbook-pro|MacBook Pro]] with 128GB of RAM
  - Bridging the gap between high-end laptops and more [[concepts/portable-computing|portable computing]] solutions

### References
- [SSH Fundamentals: Secure Remote Access and Encryption Explained](https://www.youtube.com/watch?v=XCb4E5B-AZI)
