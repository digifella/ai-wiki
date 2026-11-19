---
type: concept
domain: tools-platforms-infrastructure
group: privacy-security-guardrails
tags:
  - "concept"
  - "ssh"
  - "windows-openssh"
  - "key-management"
  - "administrator-access"
  - "authentication"
  - "wsl"
aliases:
  - "Windows SSH Key Setup"
  - "Administrator Authorized Keys"
summary: "On Windows machines, SSH public keys for administrators must be placed in C:/ProgramData/ssh/administrators_authorized_keys, not the standard .ssh/authorized_keys file."
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Ssh Key Authorization

SSH key authorization is a security mechanism that enables remote system access using cryptographic key pairs rather than traditional passwords. During the connection process, the SSH server verifies that the client possesses the private key corresponding to a public key stored on the host. This method is widely adopted in infrastructure management due to its enhanced security profile compared to password-based authentication.

On standard Linux and macOS systems, authorized public keys are typically stored in the `~/.ssh/authorized_keys` file within the user's home directory. This location is automatically recognized by the SSH daemon during the authentication handshake, allowing for seamless key-based login without additional configuration.

On Windows machines, the default behavior differs significantly. For administrative access, SSH public keys must be placed in `C:/ProgramData/ssh/administrators_authorized_keys`. Placing keys in the standard `.ssh/authorized_keys` file on Windows will not grant administrative privileges, as the system explicitly checks the ProgramData path for elevated access scenarios.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
- 2026-04-13: [[lab-notes/2026-04-13-MiniMax-M27-Open-Source-LLM-Rivaling-Opus-46-with-Agent-Capabilities|MiniMax M27 Open Source LLM Rivaling Opus 46 with Agent Capabilities]] · [▶ source](https://www.youtube.com/watch?v=qUGypBKW_sQ)
