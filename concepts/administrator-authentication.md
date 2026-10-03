---
type: concept
domain: tools-platforms-infrastructure
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
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
group: privacy-security-guardrails
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Administrator Authentication

On [[concepts/microsoft-windows|Windows]] systems running [[concepts/ssh|OpenSSH]], the [[concepts/authentication|authentication]] mechanism for privileged accounts differs significantly from standard Unix and [[entities/linux|Linux]] implementations. While typical [[concepts/user-accounts|user accounts]] rely on per-user configuration files located within their respective home directories, administrator accounts utilize a centralized [[entities/storage|storage]] location. This architectural distinction reflects Windows' specific approach to privilege separation and credential management, ensuring that administrative access is controlled through a system-wide configuration rather than individual user profiles.

Administrator public keys must be stored in the file `C:\ProgramData\ssh\administrators_authorized_keys`. This path serves as the equivalent of the standard `~/.ssh/authorized_keys` file used for non-privileged users. By centralizing these keys, the system ensures that all administrative access is validated against a single, [[concepts/secure|secure]] repository, simplifying the management of elevated privileges across the host.

This configuration requires careful [[concepts/attention-mechanism|attention]] to file permissions and ownership to maintain [[concepts/security|security]] [[concepts/honesty|integrity]]. Because the file resides in a system-wide directory, it must be accessible to the SSH service while preventing unauthorized modifications by standard users. Properly configuring this file is essential for enabling public key authentication for administrative tasks without compromising the security posture of the Windows environment.
