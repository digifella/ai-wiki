---
type: concept
domain: tools-platforms-infrastructure
group: developer-tooling-clis
tags:
  - "concept"
  - "windows"
  - "openssh"
  - "ssh-keys"
  - "administrator-keys"
  - "ssh-configuration"
  - "key-management"
aliases:
  - "Windows OpenSSH Setup"
  - "OpenSSH on Windows"
summary: "Windows OpenSSH requires administrator keys to be placed in C:/ProgramData/ssh/administrators_authorized_keys, not the standard .ssh/authorized_keys file."
updated: 2026-07-21
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Windows OpenSSH Configuration

Windows OpenSSH uses a different authorization mechanism for administrator accounts compared to standard Unix and Linux implementations. While typical SSH configurations store authorized public keys in a user's home directory under `~/.ssh/authorized_keys`, Windows OpenSSH requires administrator keys to be placed in a centralized system location: `C:\ProgramData\ssh\administrators_authorized_keys`. This distinction applies to any user account with administrative privileges on the Windows system.

## Key Storage and Management

The `administrators_authorized_keys` file serves as the authorization store for all administrative SSH access on a Windows system. This centralized approach differs from per-user key files and streamlines management when multiple administrator accounts need SSH access. Non-administrator user accounts on Windows still follow the standard pattern of storing authorized keys in their individual user profile directories.

## File Permissions

Proper file permissions are critical for the `administrators_authorized_keys` file to function correctly. Windows enforces strict access controls on this file; it must have appropriate NTFS permissions set to prevent unauthorized modification. The file should be readable by the SSH service but writable only by system administrators, ensuring that only authorized personnel can modify which keys are accepted for administrative access.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
