---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "windows"
  - "openssh"
  - "ssh-keys"
  - "system-administration"
  - "access-control"
  - "infrastructure-config"
aliases:
  - "Windows Admin SSH Keys"
  - "Administrators Authorized Keys File"
  - "OpenSSH Admin Key Config"
summary: "Windows OpenSSH requires administrator SSH keys to be placed in C://ProgramData//ssh//administrators_authorized_keys instead of the standard .ssh/authorized_keys file."
updated: 2026-07-11
group: privacy-security-guardrails
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# administrators_authorized_keys

[[entities/windows|Windows]] [[entities/openssh|OpenSSH]] uses this file to manage SSH keys for **administrator accounts**.

## Critical Configuration Rules
- **Always place new keys here**: `C:\ProgramData\ssh\administrators_authorized_keys`
- **Never use**: `.ssh\authorized_keys` ([[entities/windows|Windows]] OpenSSH **ignores** this for admin accounts)
- **Root cause of access issues**: Incorrect key placement prevents SSH login for admin accounts

## Related Concepts
- [[concepts/ssh]]
- WSL
- [[entities/openssh|OpenSSH]]
- [[entities/windows|Windows]] [[concepts/ssh|OpenSSH]]

2026 04 14 Install SSH and configure to access WSL
## Source Notes

- 2026-04-14: How to get TACK SHARP photos with any camera!
