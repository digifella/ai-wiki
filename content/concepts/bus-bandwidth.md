---
type: concept
domain: tools-platforms
group: developer-tooling-clis
tags:
  - "concept"
  - "self-hosting"
  - "hardware"
  - "software"
  - "personal-cloud-server"
  - "tailscale"
  - "bandwidth"
  - "performance"
  - "infrastructure"
  - "networking"
aliases:
  - "bandwidth capacity"
  - "bus throughput"
summary: A video by Alex Kretzschmar introduces self-hosting and the foundational hardware and software for a personal cloud server.
updated: 2026-05-01
---
# Bus Bandwidth

Bus bandwidth refers to the maximum amount of data that can be transferred across a computer bus in a given period of time, typically measured in gigabytes per second (GB/s). It represents a critical performance bottleneck in computer [[concepts/architecture|architecture]], as it determines how quickly data can move between the CPU, [[concepts/memory|memory]], [[entities/storage|storage]], and peripherals. The wider the bus and the faster the clock speed, the greater the potential bandwidth.

## Common Bus Types

Different buses in a computer system have varying bandwidth capacities. PCIe (PCI Express) lanes are commonly used for graphics cards and storage devices, with newer generations offering significantly higher throughput. Memory buses connecting RAM to the CPU operate at very high speeds to minimize latency during data access. Older [[concepts/open-standards|standards]] like [[concepts/usb-20|USB 2.0]] have relatively low bandwidth, while newer interfaces such as [[concepts/usb-30|USB 3.0]] and Thunderbolt support much faster data transfers.

## Practical Impact

Bus bandwidth limitations can constrain overall system performance when data throughput demands exceed available capacity. For instance, a high-speed NVMe storage drive may be underutilized if connected through an older, slower bus interface. Similarly, GPUs require substantial bandwidth to the main system memory to process large datasets efficiently. Understanding bus bandwidth is essential for matching [[concepts/hardware|hardware components]] appropriately and identifying potential performance bottlenecks in a given system configuration.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Space-Based-AI-Data-Centers-Feasibility-Techno-Economics-Engineering|Space Based AI Data Centers Feasibility Techno Economics Engineering]] · [▶ source](https://www.youtube.com/watch?v=cLcF9UCD9-s)
- 2026-04-22: LLM Inference · [▶ source](https://www.youtube.com/watch?v=B18zBnjZKmc)
