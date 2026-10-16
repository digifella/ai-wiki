---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "wsl"
  - "cli"
  - "containers"
  - "microsoft"
  - "docker-alternative"
  - "windows"
  - "native-integration"
  - "developer-tools"
aliases:
  - "WSLC"
  - "WSL Container CLI"
  - "Microsoft WSL Container Tool"
  - "Native WSL Container Manager"
summary: WSLC is a Microsoft-developed command-line interface tool that manages containers natively within the Windows Subsystem for Linux environment as an alternative to Docker Desktop.
updated: 2026-07-12
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# wslc CLI

**[[concepts/native-container-support|wslc]]** is a [[concepts/cli-tools|command-line interface]] tool introduced by [[entities/microsoft|Microsoft]] to manage [[concepts/containerization-technology|containers]] natively within the [[entities/wsl|Windows Subsystem for Linux]] (WSL) environment. It serves as a native alternative to third-party container runtimes, specifically designed to replace the need for [[entities/docker-desktop]] on [[entities/windows|Windows]] systems.

## Key Features & Context

- **[[concepts/native-integration|Native Integration]]**: Operates directly within WSL, leveraging the kernel integration rather than relying on a separate [[entities/linux|Linux]] VM or heavy [[concepts/desktop-application|desktop application]].
- **[[entities/docker|Docker Desktop]] Replacement**: Provides equivalent [[concepts/container-management|container management]] capabilities without the [[concepts/licensing|licensing]] costs or resource overhead associated with [[concepts/docker-desktop|Docker Desktop]].
- **CLI-Centric**: Designed for [[concepts/terminal-based-workflows|terminal-based workflows]], offering direct control over container lifecycles.

## Related Notes

- [[lab-notes/2026-07-07-WSLC-Microsofts-Native-WSL-Container-Solution-Replacing|WSLC: Microsoft's Native WSL Container Solution Replacing Docker Desktop]]

## References

- [WSLC: Microsoft's Native WSL Container Solution Replacing Docker Desktop](https://www.youtube.com/watch?v=4mkSbJUZpLs)
