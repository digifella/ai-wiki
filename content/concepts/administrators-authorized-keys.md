---
type: concept
domain: security-infrastructure
summary: "Windows OpenSSH requires administrator SSH keys to be placed in C://ProgramData//ssh//administrators_authorized_keys instead of the standard .ssh/authorized_keys file."
updated: 2026-05-23
group: privacy-security-guardrails
---
# administrators_authorized_keys

[[entities/windows|Windows]] [[entities/openssh|OpenSSH]] uses this file to manage SSH keys for **administrator accounts**.

## Critical Configuration Rules
- **Always place new keys here**: `C:\ProgramData\ssh\administrators_authorized_keys`
- **Never use**: `.ssh\authorized_keys` ([[entities/windows|Windows]] OpenSSH **ignores** this for admin accounts)
- **Root cause of access issues**: Incorrect key placement prevents SSH login for admin accounts

## Related Concepts
- [[concepts/ssh]]
- [[entities/wsl|WSL]]
- [[entities/openssh|OpenSSH]]
- [[entities/windows|Windows]] OpenSSH

2026 04 14 Install [[concepts/ssh|SSH]] and configure to access [[entities/wsl|WSL]]
## Source Notes

- 2026-04-14: How to get TACK SHARP photos with any camera!