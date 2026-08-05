---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "system-administration"
  - "elevated-privileges"
  - "ssh-configuration"
  - "windows-openSSH"
  - "access-control"
  - "security-infrastructure"
  - "authorized-keys"
aliases:
  - "Admin Account"
  - "Root Account"
  - "Privileged Account"
  - "System Administrator"
summary: An account with elevated system privileges, typically required for system configuration and management tasks.
updated: 2026-07-11
group: privacy-security-guardrails
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Administrator account

An account with elevated system privileges, typically required for system configuration and management tasks.

## SSH Configuration Note

When configuring SSH access for an Administrator account on [[entities/windows|Windows]] (using [[entities/openssh|OpenSSH]]):
- **Authorized keys must be placed in `C:\ProgramData\ssh\[[concepts/administrators-authorized-keys|administrators_authorized_keys]]`** — [[entities/windows|Windows]] OpenSSH ignores `~\.ssh\authorized_keys` for admin accounts. This was the root cause of configuration issues in the past.

Related concepts:
- [[concepts/ssh]]
- OpenSSH
- authorized_keys
- WSL

Backlink: 2026 04 14 Install SSH and configure to access WSL
