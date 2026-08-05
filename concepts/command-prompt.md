---
type: concept
domain: ai-agents
tags:
  - "command-line"
  - "windows"
  - "shell"
  - "coreutils"
  - "linux"
  - "windows-shell"
  - "batch-scripting"
  - "environment-variables"
  - "gnu-portability"
  - "cmd-exe"
aliases:
  - "cmd.exe"
  - "Windows Shell"
  - "Command Interpreter"
  - "MS-DOS Command Processor"
summary: Command Prompt is the native command-line interpreter for Microsoft Windows, supporting batch scripting, environment variables, and recent integrations with GNU Core Utilities for Linux-like functionality.
updated: 2026-07-11
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Command Prompt

**Command Prompt** (`cmd.exe`) is the [[concepts/command-line-interface|command-line]] interpreter on [[entities/microsoft|Microsoft]] [[entities/windows|Windows]] operating systems. It provides a [[concepts/text-based-interface|text-based interface]] for executing [[concepts/commands|commands]], scripts, and [[concepts/software|programs]]. Unlike the older DOS [[concepts/cli|shell]], modern `cmd` supports batch scripting (`batchfile`), environmental variable expansion, and redirection.

## Evolution & Context
- Historically rooted in MS-DOS `COMMAND.COM`.
- Often contrasted with PowerShell, which offers object-oriented pipelines and greater extensibility.
- Compatible with WSL (Windows Subsystem for [[entities/linux|Linux]]) for running Linux binaries natively or via virtualization.

## Key Features
- **[[concepts/batch-processing|Batch Processing]]**: Executes `.bat` or `.cmd` scripts sequentially.
- **[[concepts/environment-variables|Environment Variables]]**: Accesses system variables like `%PATH%` and `%USERPROFILE%`.
- **Redirection & Piping**: Supports standard Unix-like I/O redirection (`>`, `>>`, `<`) and piping (`|`).

## Integration with GNU Tools
Recent developments have expanded the [[concepts/native-capabilities|native capabilities]] of `cmd` by porting Unix-standard utilities directly to Windows, reducing reliance on WSL or third-party emulation layers like Cygwin/MSYS2.

- [[lab-notes/2026-06-12-Coreutils-for-Windows-Native-Linux-Commands-in-Command-P|Coreutils for Windows: Native Linux Commands in Command Prompt]] documents the official porting of **[[entities/gnu-core-utilities|GNU Core Utilities]]** to Windows as [[concepts/native-binaries|native binaries]].
	- This update allows users to execute standard [[concepts/linux-commands|Linux commands]] (e.g., `ls`, `cp`, `mv`) directly within `cmd` without translation layers.
	- Source: [Coreutils for Windows: Native Linux Commands in Command Prompt](https://www.youtube.com/watch?v=Bg8FjRGuW_w)

## Common Commands
| Command | Description |
| :--- | :--- |
| `dir` | List directory contents. |
| `cd` | Change current directory. |
| `cls` | Clear screen. |
| `echo` | Display messages or set variables. |
| `type` | Display file content (equivalent to `cat`). |

## References
- [Coreutils for Windows: Native Linux Commands in Command Prompt](https://www.youtube.com/watch?v=Bg8FjRGuW_w)
