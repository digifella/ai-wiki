---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "ssh"
  - "remote-login"
  - "key-management"
  - "system-security"
  - "encryption"
aliases:
  - "Secure Shell"
  - "OpenSSH"
summary: SSH is a cryptographic network protocol used for secure remote login, command execution, and file transfers, providing encrypted communication channels over unsecured networks.
updated: 2026-07-12
group: deployment-docker-services
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# SSH

[[concepts/secure|Secure]] [[concepts/cli|Shell]] (SSH) is a cryptographic network protocol for [[concepts/secure|secure]] remote login, [[concepts/instruction-following|command execution]], and file transfers. It is an indispensable tool for [[concepts/linux|Linux]], [[concepts/cloud-computing|cloud computing]], [[concepts/devops|DevOps]], and [[concepts/server-administration|server administration]], ensuring encrypted communication over unsecured networks.

See also: [[lab-notes/2026-06-25-SSH-Fundamentals-Secure-Remote-Access-and-Encryption-Exp|SSH Fundamentals: Secure Remote Access and Encryption Explained]]

## Installation
- **[[entities/windows|Windows]]**: Install [[entities/openssh|OpenSSH]] server via PowerShell (Admin):
  `Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0`
- **[[entities/linux|Linux]]**: `sudo apt install openssh-server` (Debian/[[entities/ubuntu|Ubuntu]])

## Configuration
- **[[entities/windows|Windows]] (WSL)**:
  - **Administrator accounts**: All keys **must** go to:
    `C:\ProgramData\ssh\administrators_authorized_keys`
    *(Windows OpenSSH ignores `.ssh\authorized_keys` for admin accounts)*
  - **Non-admin accounts**: Use `C:\Users\<user>\.ssh\authorized_keys`
- **Linux**: Keys go to `~/.ssh/authorized_keys`

## Key Management
- Generate keys: `ssh-keygen -t ed25519`
- Distribute public keys to `authorized_keys` files on target servers
- Always use key-based [[concepts/authentication|authentication]] instead of passwords

## Security
- Disable root login (`PermitRootLogin no` in `sshd_config`)
- Ensure all data transmitted is encrypted to prevent interception

## References
- [SSH Fundamentals: Secure Remote Access and Encryption Explained](https://www.youtube.com/watch?v=XCb4E5B-AZI)
