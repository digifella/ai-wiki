---
type: entity
tags:
  - "windows"
  - "ssh"
  - "openssh"
  - "administrator-keys"
  - "wsl"
  - "authentication"
  - "coreutils"
  - "cli-tools"
aliases:
  - "Windows OpenSSH"
  - "Windows SSH Configuration"
  - "GNU Coreutils Windows"
summary: "Windows OpenSSH requires administrator SSH keys in C://ProgramData//ssh//administrators_authorized_keys; GNU coreutils now available as native binaries for Command Prompt."
updated: 2026-07-12
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
# Windows

[[concepts/microsoft-windows|Windows]] [[entities/openssh|OpenSSH]] has specific requirements for managing administrator SSH keys that differ from standard Unix-like systems. Administrator accounts cannot use the conventional `.ssh/authorized_keys` file in the user's home directory. Instead, Windows [[concepts/ssh|OpenSSH]] requires all administrator SSH keys to be stored in `C:\ProgramData\ssh\administrators_authorized_keys`. This centralized location is mandatory for administrative access and is where the OpenSSH service looks for valid keys when authenticating administrator accounts.

## Key Storage and Permissions

The `administrators_authorized_keys` file must be carefully configured with appropriate permissions to function correctly. Unlike standard user SSH keys, this file is world-readable by default and requires specific NTFS permissions to restrict access appropriately. The file should be owned by the system and only readable by administrators and the OpenSSH service account to prevent unauthorized key injection.

## Standard User SSH Keys

Standard (non-administrator) [[concepts/user-accounts|user accounts]] on Windows OpenSSH follow more conventional practices. These users can store their authorized keys in the `.ssh/authorized_keys` file with standard permissions.

## GNU Coreutils Integration

Recent developments allow for native [[entities/linux|Linux]] [[concepts/command-line-interface|command-line]] utilities directly within the Windows environment:

*   **[[concepts/native-binaries|Native Binaries]]:** [[entities/gnu-core-utilities|GNU Core Utilities]] (coreutils) have been officially ported to Windows as native binaries, eliminating reliance on WSL or Cygwin for basic utility functions in [[concepts/command-prompt|Command Prompt]].
*   **Source Context:** This development highlights a shift toward natively supporting Unix-like workflows in standard Windows terminals without subsystem dependencies [[lab-notes/2026-06-12-Coreutils-for-Windows-Native-Linux-Commands-in-Command-P|Coreutils for Windows: Native Linux Commands in Command Prompt]].

## References

*   [Coreutils for Windows: Native Linux Commands in Command Prompt](https://www.youtube.com/watch?v=Bg8FjRGuW_w)
