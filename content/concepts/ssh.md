---
type: concept
domain: security-infrastructure
tags:
  - "ssh"
  - "security"
  - "wsl"
  - "openssh"
  - "ssh-protocol"
  - "network-security"
  - "remote-access"
  - "server-configuration"
  - "cryptographic-protocol"
aliases:
  - "Secure Shell"
summary: "SSH is a cryptographic network protocol used for secure remote login, command execution, and file transfers."
updated: 2026-04-16
group: deployment-docker-services
---
# SSH

[[concepts/secure|Secure]] Shell (SSH) is a cryptographic network protocol for [[concepts/secure|secure]] remote login, command execution, and file transfers.

## Installation
- **[[entities/windows|Windows]]**: Install [[entities/openssh|OpenSSH]] server via PowerShell (Admin):
  `Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0`
- **Linux**: `sudo apt install openssh-server` (Debian/[[entities/ubuntu|Ubuntu]])

## Configuration
- **[[entities/windows|Windows]] ([[entities/wsl|WSL]])**:
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
- Use SSH key passphrases
- Restrict access via `AllowUsers` in `sshd_config`

Backlink: 2026 04 14 Install SSH and configure to access WSL
