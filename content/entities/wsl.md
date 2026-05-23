---
type: entity
summary: The Windows Subsystem for Linux (WSL) enables running Linux environments natively on Windows 10/11.
updated: 2026-05-23
---
# WSL

[[entities/windows|Windows]] Subsystem for [[entities/linux|Linux]] (WSL) enables [[concepts/running|running]] Linux environments natively on [[entities/windows-10|Windows 10]]/11.

## SSH Configuration
- **Non-admin accounts**: Place public keys in `~/.ssh/authorized_keys` within WSL.
- **Admin accounts**: **Always** use `C:\ProgramData\ssh\[[concepts/administrators-authorized-keys|administrators_authorized_keys]]` ([[entities/windows|Windows]] [[entities/openssh|OpenSSH]] ignores `~/.ssh/authorized_keys` for admin accounts).
- Install [[concepts/ssh|SSH]] server: `sudo apt update && sudo apt install openssh-server`
- Start service: `sudo service ssh start`
- Enable on boot: `sudo systemctl enable ssh`
- Configure Windows Firewall to allow port 22.

## Access
- From Windows: `ssh username@localhost`
- From external machines: `ssh username@<windows-ip>`

[[concepts/date-2026-04-13|2026]] 04 14 Install SSH and configure to access WSL
## Source Notes