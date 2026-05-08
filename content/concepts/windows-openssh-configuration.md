---
type: concept
domain: tools-platforms
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
updated: 2026-05-01
---
# Windows OpenSSH Configuration

[[entities/windows|Windows]] [[entities/openssh|OpenSSH]] handles administrator key [[concepts/authorization|authorization]] differently than standard Unix/Linux implementations. Rather than using the conventional `~/.ssh/authorized_keys` file in a user's home directory, Windows OpenSSH requires administrator public keys to be placed in `C:\ProgramData\ssh\[[concepts/administrators-authorized-keys|administrators_authorized_keys]]`. This centralized location applies to any user account with administrative privileges on the system.

## Key File Permissions

The `administrators_authorized_keys` file has strict permission requirements to function correctly. The file must have appropriate NTFS access controls that restrict read access to the SYSTEM account and Administrators group. Incorrect permissions will cause OpenSSH to ignore the file, preventing key-based [[concepts/authentication|authentication]] even if the correct keys are present.

## User vs Administrator Keys

Non-administrator users continue to use the standard `~/.ssh/authorized_keys` file located in their user profile directory. Only accounts with administrator privileges need to use the centralized `administrators_authorized_keys` file. This distinction allows Windows OpenSSH to maintain different authorization paths based on privilege level, though it differs significantly from typical Linux configurations where all users follow the same pattern.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!