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
updated: 2026-05-01
---
# Administrator Authentication

On [[entities/windows|Windows]] systems [[concepts/running|running]] [[entities/openssh|OpenSSH]], administrator accounts use a different public key [[entities/storage|storage]] mechanism than standard Unix and Linux systems. Rather than storing authorized keys in individual user home directories, Windows OpenSSH centralizes administrator public keys in a system-wide location: `C:\ProgramData\ssh\[[concepts/administrators-authorized-keys|administrators_authorized_keys]]`. This centralized approach reflects Windows' [[concepts/architecture|architecture]] for privilege management and system configuration, where administrative settings are typically stored in protected system directories rather than distributed across user profiles.

## Key Storage and Access Control

The `administrators_authorized_keys` file applies collectively to all administrator-level accounts on the machine, allowing any admin user to authenticate using keys listed in this single file. The file itself is protected by Windows file permissions, restricting write access to system administrators and the SYSTEM account. This design contrasts with the Unix model where each user maintains their own `~/.ssh/authorized_keys` file, and allows Windows administrators to manage SSH access at the system level rather than per-user.

## Configuration Considerations

System administrators deploying [[concepts/windows-openssh-configuration|OpenSSH on Windows]] must ensure that public keys are placed in the correct location for administrator authentication to function. Standard [[concepts/user-accounts|user accounts]] continue to use the traditional `authorized_keys` file in their user directories. The distinction between administrator and standard user key storage is an important implementation detail when configuring SSH access on Windows systems.
