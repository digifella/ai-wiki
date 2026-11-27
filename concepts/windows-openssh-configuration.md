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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Windows Openssh Configuration

Windows OpenSSH implements a distinct authorization mechanism for administrative accounts that diverges from standard Unix and Linux conventions. While typical SSH configurations rely on user-specific public key files located in the `~/.ssh/authorized_keys` directory, Windows OpenSSH requires administrator keys to be stored in a centralized system location. This architectural difference ensures that administrative access is managed at the system level rather than the individual user profile level.

## Administrative Key Storage

The primary file for storing authorized administrator keys is located at `C:\ProgramData\ssh\administrators_authorized_keys`. Unlike standard user configurations, this file is not generated automatically and must be created manually if it does not exist. The file must contain one public key per line, adhering to the standard OpenSSH public key format.

Proper file permissions are critical for the OpenSSH service to read this configuration file. The `administrators_authorized_keys` file must be owned by the `SYSTEM` account and grant read/write access only to `SYSTEM` and `Administrators`. Any other permissions, such as those granted to `Users` or `Authenticated Users`, will cause the SSH service to ignore the file for security reasons. This strict permission model prevents unauthorized users from modifying administrative access credentials.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
