---
type: entity
tags:
  - "windows"
  - "ssh"
  - "openssh"
  - "administrator-keys"
  - "wsl"
  - "authentication"
aliases:
  - "Windows OpenSSH"
  - "Windows SSH Configuration"
summary: "Windows OpenSSH requires administrator SSH keys to be stored in C://ProgramData//ssh//administrators_authorized_keys."
updated: 2026-05-23
---
# Windows

Windows [[entities/openssh|OpenSSH]] has specific requirements for managing administrator [[concepts/ssh|SSH]] keys that differ from standard Unix-like systems. Administrator accounts cannot use the conventional `.ssh/authorized_keys` file in the user's home directory. Instead, Windows OpenSSH requires all administrator SSH keys to be stored in `C:\ProgramData\ssh\administrators_authorized_keys`. This centralized location is mandatory for administrative access and is where the OpenSSH service looks for valid keys when authenticating administrator accounts.

## WSL Integration

Windows Subsystem for [[entities/linux|Linux]] ([[entities/wsl|WSL]]) can be accessed via SSH when the OpenSSH server is properly installed and configured on the Windows host system. This allows remote command execution and file transfer to WSL instances through standard SSH clients, bridging Windows and Linux environments on the same machine.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Local-AI-Privacy-Risks-and-Mitigation-Strategies|Local AI Privacy Risks and Mitigation Strategies]] · [▶ source](https://www.youtube.com/watch?v=GWUnPiDzzkE)
- 2026-04-10: [[lab-notes/2026-04-10-NemoClaw-vs-OpenClaw-NVIDIAs-Secure-AI-Agent-for-Enterprise|NemoClaw vs OpenClaw NVIDIAs Secure AI Agent for Enterprise]] · [▶ source](https://www.youtube.com/watch?v=LfvKkrVSO-U)
- 2026-04-13: [[lab-notes/2026-04-13-Lightroom-Classic-v15-AI-Powered-Enhancements-for-Creative-Control-and|Lightroom Classic v15 AI Powered Enhancements for Creative Control and]] · [▶ source](https://www.youtube.com/watch?v=dKXqg50v1sA)
- 2026-04-30: [[lab-notes/2026-04-30-AionUI-Free-Desktop-Platform-for-Multi-Agent-AI-Manageme|AionUI: Free Desktop Platform for Multi-Agent AI Management and Automation]] · [▶ source](https://www.youtube.com/watch?v=vWxE6VO9TKo)