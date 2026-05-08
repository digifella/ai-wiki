---
type: concept
domain: security-infrastructure
group: data-pipelines-sync-storage
tags:
  - "network-attached-storage"
  - "data-storage"
  - "infrastructure"
  - "network-storage"
  - "nas"
aliases:
  - "Network Attached Storage"
summary: NAS refers to network-attached storage.
updated: 2026-05-01
title: nas
---
# Nas

Network-attached [[entities/storage|storage]] (NAS) is a dedicated file storage device connected to a computer network that allows multiple users and heterogeneous client devices to retrieve data from centralized disk capacity. Unlike direct-attached storage, which connects solely to a single computer, NAS systems connect via standard network protocols such as Ethernet, making stored files accessible to any authorized device on the network.

## Architecture and Function

NAS devices typically run a lightweight operating system optimized for file serving and storage management. They contain one or more hard drives or solid-state drives configured in various redundancy arrangements such as RAID to protect against drive failure. The system exposes storage through network file-sharing protocols, most commonly SMB/CIFS for [[entities/windows|Windows]] environments and NFS for Unix-like systems, though HTTP and other protocols are sometimes supported. Users access NAS storage similarly to local network drives, with access controls and permissions enforced by the device.

## Common Applications

NAS systems serve a range of organizational and personal [[concepts/scenarios|use cases]], including centralized backup repositories, shared document storage, media libraries accessible across multiple devices, and archival of infrequently accessed data. They are often preferred over cloud storage solutions where organizations require on-premises data retention, local network access speeds, or lower operational costs at scale. Consumer and small-business NAS units typically support 2 to 8 drives, while enterprise systems accommodate dozens of drives and redundant network connections.
