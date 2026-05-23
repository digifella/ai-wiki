---
type: entity
tags:
  - "entity"
  - "ssh"
  - "windows"
  - "key-management"
  - "authentication"
  - "wsl"
  - "administrator"
aliases:
  - "OpenSSH"
  - "SSH Server"
summary: "SSH implementation for Windows that stores administrator keys in C:/ProgramData/ssh/administrators_authorized_keys rather than the standard .ssh/authorized_keys file."
updated: 2026-05-23
---
# Openssh

Openssh is an [[concepts/ssh|SSH]] [[concepts/adoption|implementation]] designed for [[entities/windows|Windows]] environments. It provides [[concepts/secure|secure]] shell access and file transfer [[concepts/capabilities|capabilities]] on Windows systems, functioning as a port of the widely-used OpenSSH [[concepts/software|software]] originally developed for Unix-like operating systems.

## Administrator Key Storage

A notable characteristic of Openssh for Windows is its handling of [[concepts/administrator-authentication|administrator authentication]] keys. Rather than using the standard .ssh/authorized_keys file location found in typical SSH implementations, [[concepts/windows-openssh-configuration|Openssh on Windows]] stores administrator keys in C:/ProgramData/ssh/[[concepts/administrators-authorized-keys|administrators_authorized_keys]]. This distinction reflects Windows' different file system [[concepts/structure|structure]] and permission model compared to Unix-based systems.

This alternative key [[entities/storage|storage]] location allows Openssh to integrate with Windows' native [[concepts/security|security]] framework, where the ProgramData directory serves as a central location for application configuration and system-level data that requires elevated access privileges.

- 2026-04-10 [2026-04-10-Local-AI-Privacy-Risks-and-Mitigation-Strategies](2026-04-10-Local-AI-Privacy-Risks-and-Mitigation-Strategies.md) ← [[concepts/local-ai|Local Ai Privacy Risks And Mitigation Strategies]]
- 2026-04-07 [2026-04-07-Local-AI-Privacy-Risks-and-Mitigation-Strategies](2026-04-07-Local-AI-Privacy-Risks-and-Mitigation-Strategies.md) ← [[concepts/offline-ai|Local Ai]] Privacy Risks And Mitigation Strategies
- 2026-04-08 [2026-04-08-Local-AI-Privacy-Risks-and-Mitigation-Strategies](2026-04-08-Local-AI-Privacy-Risks-and-Mitigation-Strategies.md) ← Local Ai Privacy Risks And Mitigation Strategies
## Source Notes