---
type: concept
domain: security-infrastructure
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
updated: 2026-05-01
---
# Ssh Key Authorization

SSH key authorization is a security mechanism that allows [[concepts/remote-access|remote access]] to systems using cryptographic key pairs instead of passwords. When a user attempts to connect via SSH, the server verifies that the connecting client possesses the corresponding private key to a public key stored on the system. This approach is generally more [[concepts/secure|secure]] than password [[concepts/authentication|authentication]] and is widely used in infrastructure management.

## Windows Configuration

On Windows machines, SSH key authorization requires special configuration due to differences in the operating system's permission model. For administrator accounts, authorized public keys must be placed in `C:/ProgramData/ssh/[[concepts/administrators-authorized-keys|administrators_authorized_keys]]` rather than in the standard `.ssh/authorized_keys` file used on Unix-like systems. This location is checked by the Windows [[entities/openssh|SSH server]] when authenticating administrative connections. Non-administrator users on Windows typically use the standard `~/.ssh/authorized_keys` path in their home directory.

## Setup and Maintenance

Proper file permissions are critical for SSH key authorization to function correctly, particularly on Windows where the administrators_authorized_keys file must have restricted access. System administrators need to ensure that only authorized public keys are added to these files and should regularly audit them as part of access control reviews. Key rotation and removal of obsolete keys are standard maintenance practices to minimize security risk.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
- 2026-04-13: [[lab-notes/2026-04-13-MiniMax-M27-Open-Source-LLM-Rivaling-Opus-46-with-Agent-Capabilities|MiniMax M27 Open Source LLM Rivaling Opus 46 with Agent Capabilities]] · [▶ source](https://www.youtube.com/watch?v=qUGypBKW_sQ)