---
type: concept
domain: security-infrastructure
tags:
  - "admin"
  - "security"
  - "ssh"
  - "windows"
  - "ssh-admin"
  - "windows-openssh"
  - "authorized-keys"
  - "admin-config"
aliases:
  - "Admin Account"
summary: "An account with elevated system privileges, typically required for system configuration and management tasks."
updated: 2026-04-15
group: privacy-security-guardrails
---
# Administrator account

An account with elevated system privileges, typically required for system configuration and management tasks.

## SSH Configuration Note

When configuring SSH access for an Administrator account on [[entities/windows|Windows]] (using [[entities/openssh|OpenSSH]]):
- **Authorized keys must be placed in `C:\ProgramData\ssh\[[concepts/administrators-authorized-keys|administrators_authorized_keys]]`** — [[entities/windows|Windows]] OpenSSH ignores `~\.ssh\authorized_keys` for admin accounts. This was the root cause of configuration issues in the past.

Related concepts:
- [[concepts/ssh]]
- OpenSSH
- authorized_keys
- [[entities/wsl|WSL]]

Backlink: 2026 04 14 Install SSH and configure to access WSL
