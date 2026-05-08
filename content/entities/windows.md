---
type: entity
tags:
  - "windows"
  - "ssh"
  - "wsl"
  - "security"
  - "openssh-configuration"
  - "system-administration"
aliases:
  - "Microsoft Windows"
summary: "Windows OpenSSH requires administrator SSH keys to be stored in C://ProgramData//ssh//administrators_authorized_keys."
updated: 2026-04-22
---
# Windows

- **Critical Rule for Admin [[concepts/ssh|SSH]] Keys**: For Administrator accounts, **all new SSH keys must be placed in** `C:\ProgramData\ssh\[[concepts/administrators-authorized-keys|administrators_authorized_keys]]` (Windows [[entities/openssh|OpenSSH]] ignores `.ssh/authorized_keys` for admin accounts).
- To access Windows Subsystem for Linux ([[entities/wsl|WSL]]) via SSH, ensure OpenSSH server is installed and configured.
- Backlink: [[concepts/date-2026-04-13|2026]] 04 14 Install SSH and configure to access WSL

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Local-AI-Privacy-Risks-and-Mitigation-Strategies|Local AI Privacy Risks and Mitigation Strategies]] · [▶ source](https://www.youtube.com/watch?v=GWUnPiDzzkE)
- 2026-04-10: [[lab-notes/2026-04-10-NemoClaw-vs-OpenClaw-NVIDIAs-Secure-AI-Agent-for-Enterprise|NemoClaw vs OpenClaw NVIDIAs Secure AI Agent for Enterprise]] · [▶ source](https://www.youtube.com/watch?v=LfvKkrVSO-U)
- 2026-04-13: [[lab-notes/2026-04-13-Lightroom-Classic-v15-AI-Powered-Enhancements-for-Creative-Control-and|Lightroom Classic v15 AI Powered Enhancements for Creative Control and]] · [▶ source](https://www.youtube.com/watch?v=dKXqg50v1sA)
- 2026-04-30: [[lab-notes/2026-04-30-AionUI-Free-Desktop-Platform-for-Multi-Agent-AI-Manageme|AionUI: Free Desktop Platform for Multi-Agent AI Management and Automation]] · [▶ source](https://www.youtube.com/watch?v=vWxE6VO9TKo)