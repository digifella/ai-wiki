---
type: concept
domain: tools-platforms-infrastructure
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
updated: 2026-07-13
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Administrator Authentication

On Windows systems running OpenSSH, administrator accounts use a centralized public key storage location rather than the per-user configuration found on Unix and Linux systems. Administrator public keys must be stored in `C:\ProgramData\ssh\administrators_authorized_keys` instead of the standard `~/.ssh/authorized_keys` file in a user's home directory. This architectural difference reflects Windows' distinct approach to privilege separation and credential management.

## Storage and Access Control

The `administrators_authorized_keys` file is located in the system-wide `C:\ProgramData\ssh\` directory and requires appropriate file permissions to function correctly. Access to this file is restricted to the SYSTEM account and members of the Administrators group, ensuring that only privileged operations can modify administrator SSH credentials. The file must be created manually if it does not already exist after OpenSSH installation on Windows.

## Configuration Implications

System administrators configuring SSH access for administrator accounts on Windows must place public keys in this centralized location rather than managing them within individual user profiles. This differs from the standard practice on Unix-like systems where each user maintains their own authorized keys file. Failure to place administrator keys in the correct location will result in authentication failures, even if the keys are valid and properly formatted.
