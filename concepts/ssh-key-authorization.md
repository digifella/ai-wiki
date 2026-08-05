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
updated: 2026-07-18
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Ssh Key Authorization

SSH key authorization is a security mechanism that allows remote access to systems using cryptographic key pairs instead of passwords. When a user attempts to connect via SSH, the server verifies that the connecting client possesses the corresponding private key to a public key stored on the system. This approach is generally more secure than password authentication and is widely used in infrastructure management.

## Windows Configuration

On Windows machines, SSH key authorization requires special configuration due to differences in the operating system's file structure. Administrator SSH public keys must be placed in `C:/ProgramData/ssh/administrators_authorized_keys` rather than the standard `.ssh/authorized_keys` file used on Unix-like systems. This location is specific to Windows SSH implementations and ensures that administrative access is properly controlled through the operating system's security model.

## Standard Unix-like Configuration

On Linux, macOS, and other Unix-like systems, authorized public keys are typically stored in the user's home directory under `.ssh/authorized_keys`. This file contains one public key per line and is read by the SSH daemon when authenticating incoming connections. Proper file permissions (usually 600) are essential for security, as the SSH daemon will reject overly permissive key files.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
- 2026-04-13: [[lab-notes/2026-04-13-MiniMax-M27-Open-Source-LLM-Rivaling-Opus-46-with-Agent-Capabilities|MiniMax M27 Open Source LLM Rivaling Opus 46 with Agent Capabilities]] · [▶ source](https://www.youtube.com/watch?v=qUGypBKW_sQ)
