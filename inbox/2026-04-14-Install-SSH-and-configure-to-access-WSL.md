---
wiki-ingested: true
title: "Install SSH and configure to access WSL"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: security-infrastructure
group: deployment-docker-services
---
## The One Rule to Remember
You're an Administrator on that [[entities/windows|Windows]] machine, so **any new key always goes into:**
```
C:\ProgramData\ssh\administrators_authorized_keys
```
Never .[[concepts/ssh|ssh]]\\authorized\_keys — Windows [[entities/openssh|OpenSSH]] ignores that file for admin accounts. That was the root cause of all the pain today.