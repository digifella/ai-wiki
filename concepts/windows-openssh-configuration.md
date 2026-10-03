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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Windows OpenSSH Configuration

Windows OpenSSH implements a distinct authorization mechanism for administrative accounts that diverges from standard Unix and Linux conventions. While typical SSH configurations rely on user-specific public key files located in the `~/.ssh/authorized_keys` directory, Windows OpenSSH requires administrator keys to be stored in a centralized system location. This architectural difference ensures that administrative access is managed at the system level rather than the individual user profile level.

The primary file for storing authorized public keys for administrator accounts is `C:\ProgramData\ssh\administrators_authorized_keys`. This path is used for any user account that holds administrative privileges on the Windows host. By centralizing these keys, the system allows for uniform management of elevated access controls without requiring modifications to individual user home directories.

Proper configuration of this file is critical for secure remote administration. Administrators must ensure that the file contains the correct public keys and that appropriate file system permissions are applied to prevent unauthorized modifications. This approach maintains security integrity by restricting administrative SSH access to keys explicitly defined in the system-wide authorized keys file.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
