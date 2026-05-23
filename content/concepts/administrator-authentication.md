---
type: concept
domain: security-infrastructure
group: privacy-security-guardrails
tags:
  - "concept"
  - "windows-ssh"
  - "openssh-configuration"
  - "administrator-authentication"
  - "ssh-key-management"
aliases:
  - "Windows SSH Admin Keys"
  - "OpenSSH Administrator Config"
summary: "On Windows, OpenSSH requires administrator public keys to be stored in C://ProgramData//ssh//administrators_authorized_keys rather than the standard authorized_keys file."
updated: 2026-05-24
---
# Administrator Authentication

On Windows systems running OpenSSH, administrator accounts follow a different public key storage mechanism than standard Unix and Linux implementations. Rather than storing authorized keys in individual user home directories, Windows OpenSSH centralizes administrator public keys in a system-wide location at `C:\ProgramData\ssh\administrators_authorized_keys`. This centralized approach reflects Windows' distinct privilege model and administrative account structure.

## Key Storage Location

The `administrators_authorized_keys` file serves as the repository for public keys that are permitted to authenticate as administrator-level accounts. This file must be created and maintained at the system level, and proper file permissions are critical for security. Only the SYSTEM account and Administrators group should have read access to this file, as inappropriate permissions can compromise the authentication mechanism.

## Implications for Configuration

When configuring OpenSSH on Windows for administrative access, users must place their public keys in this centralized location rather than in their individual user profiles. This requirement differs substantially from typical Unix-based OpenSSH deployments, where each user maintains their own `~/.ssh/authorized_keys` file. System administrators managing Windows OpenSSH installations must account for this distinction when setting up remote access controls.
