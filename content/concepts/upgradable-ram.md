---
type: concept
domain: ai-agents
group: open-systems-local-models
tags:
  - "self-hosting"
  - "personal-cloud"
  - "tailscale"
  - "hardware-setup"
  - "server-infrastructure"
  - "networking"
aliases:
  - "RAM Upgradability"
  - "Expandable Memory"
summary: A video by Alex Kretzschmar introduces self-hosting and the foundational hardware and software setup for a personal cloud server using Tailscale.
updated: 2026-05-01
---
# Upgradable Ram

Ram (Random Access [[concepts/memory|Memory]]) is a form of volatile computer memory that temporarily stores data and [[concepts/instructions|instructions]] actively being used by a system's processor. Unlike permanent [[entities/storage|storage]] solutions, ram is cleared when a device is powered off, making it essential for real-time computing tasks. The amount and speed of ram available directly impacts system performance, particularly for resource-intensive [[concepts/software|applications]].

## Upgradability and Hardware Considerations

The upgradability of ram depends on the specific hardware platform. Many personal computers and servers feature modular ram configurations that allow users to add, remove, or replace memory modules without replacing the entire system. This modularity is particularly relevant to self-hosting [[concepts/scenarios|scenarios]], where individuals may need to scale their server infrastructure incrementally. Understanding the specifications of your hardware—including supported ram types, maximum capacity, and slot availability—is essential before attempting upgrades.

## Context in Self-Hosting

For those setting up personal cloud servers using tools like Tailscale, ram capacity becomes a consideration when determining what workloads a system can handle. Self-hosted solutions may require different ram configurations depending on their intended use, from lightweight network routing to resource-intensive application hosting. The ability to upgrade ram allows users to adapt their infrastructure as their needs grow without requiring a complete hardware replacement.
