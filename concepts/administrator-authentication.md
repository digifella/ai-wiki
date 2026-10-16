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
updated: 2026-10-10
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
group: privacy-security-guardrails
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Administrator Authentication

On [[concepts/microsoft-windows|Windows]] systems running [[concepts/ssh|OpenSSH]], the [[concepts/authentication|authentication]] mechanism for privileged accounts differs significantly from standard [[concepts/unix|Unix]] and [[entities/linux|Linux]] implementations. While typical [[concepts/user-accounts|user accounts]] rely on per-user configuration files located within their respective home directories, administrator accounts utilize a centralized [[entities/storage|storage]] location. This architectural distinction reflects Windows' specific approach to privilege separation and system-wide [[concepts/security|security]] management.

The primary configuration file for administrator public keys is `administrators_authorized_keys`, which is stored in the `C:\ProgramData\ssh\` directory. This path is distinct from the standard `authorized_keys` file used for regular [[concepts/user-authentication|user authentication]], ensuring that administrative access is managed at the system level rather than the user level.

Proper configuration of this file requires strict adherence to Windows file permissions. The file must be accessible only by the SYSTEM account and administrators to prevent unauthorized modification or key injection. Failure to set these permissions correctly can result in OpenSSH ignoring the file or rejecting authentication attempts due to security violations.

This centralized approach simplifies the management of administrative access across multiple user accounts on a single host. It allows system administrators to control privileged access without needing to modify individual user profiles, thereby reducing the risk of configuration errors and enhancing the overall security posture of the SSH service.
