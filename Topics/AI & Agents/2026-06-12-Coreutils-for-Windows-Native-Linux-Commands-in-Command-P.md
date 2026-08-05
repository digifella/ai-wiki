---
wiki-ingested: true
title: "Coreutils for Windows: Native Linux Commands in Command Prompt"
date: 2026-06-12
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: reasoning-context-prompting
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-12 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: Summary

---

## Coreutils for Windows: Native Linux Commands in Command Prompt
**Clip title:** Coreutils for Windows is Here - The Same [[concepts/commands|Commands]] You Use on Linux Now Native to Windows!
**Author / channel:** Gary Explains
**URL:** https://www.youtube.com/watch?v=Bg8FjRGuW_w

### Summary
This video introduces a significant development for [[concepts/command-line-interface|command-line]] users: the official porting of [[entities/gnu-core-utilities|GNU Core Utilities]] (coreutils) to [[entities/windows|Windows]] as native binaries. The presenter, who frequently switches between [[entities/linux|Linux]] and Windows environments, highlights the common frustration of typing familiar [[concepts/linux-commands|Linux commands]] like `ls`, `cat`, or `uptime` into a Windows command prompt only to receive an "unrecognized command" error. Historically, users relied on emulators or workarounds to access these powerful utilities on Windows. Now, [[entities/microsoft|Microsoft]] has made 78 of these coreutils available natively, bridging a long-standing gap in the Windows command-line [[concepts/experience|experience]].

[[concepts/installation|Installation]] of these coreutils is straightforward, either through `winget` (a [[concepts/winget-package-management|Windows package manager]]) or by downloading releases directly from the [[entities/github|GitHub]] repository. The presenter demonstrates how, after installation, commands like `ls` and `uptime` function identically to their Linux counterparts within the Windows Command Prompt, even allowing for command piping (e.g., `ls -l | wc -l`). Users can verify they are using the coreutils version of a command by appending `--version`, which [[entities/will|will]] display "ls (utils coreutils) 0.8.0" rather than an error or the built-in Windows version information. However, a crucial point is that some commands, like `mkdir`, may [[concepts/conflict|conflict]] with Windows' own built-in versions, potentially leading to unexpected behavior such as creating a directory named `--version`.

The video further explores the integration with PowerShell, noting that PowerShell's more sophisticated built-in cmdlets can lead to more naming conflicts than the Command Prompt. For example, PowerShell's `cat` (an alias for `Get-Content`) [[entities/will|will]] take precedence over the coreutils `cat`. To resolve this and consistently use the coreutils versions, the presenter provides a PowerShell script that removes existing aliases and sets new ones for the coreutils binaries, effectively prioritizing them within the PowerShell [[concepts/session|session]]. All these binaries are conveniently located in `C:\Program Files\coreutils\bin`.

In conclusion, this native port of GNU Core Utilities to Windows is a valuable enhancement for developers and [[concepts/power-users|power users]], offering a familiar and robust set of command-line tools. While some [[concepts/installation|initial setup]] and awareness of command conflicts (especially in PowerShell) are necessary, the ability to leverage these powerful utilities directly on Windows significantly streamlines cross-platform workflows and empowers users with advanced scripting capabilities previously limited to Linux environments.

### Video Description & Links
#### Description
Microsoft has released the CoreUtils for Windows. The same commands you use on Linux or [[entities/macos|macOS]], now work the same way on Windows!
---
Thanks to Readdy AI for sponsoring this video:
Link: https://bit.ly/Readdy4_Garyexplains
Code: Gary

#garyexplains

#### Tags
`Gary Explains`, `Tech`, `Explanation`, `Tutorial`, `Windows`, `Microsoft`, `coreutils`, `command line`, `pipes`, `Linux`, `Unix-like`, `Unix-based`, `ls`, `cp`, `pwd`, `cat`, `hostname`, `du`, `mkdir`, `rmdir`, `PowerShell`, `Command Prompt`

#### URLs
- https://bit.ly/Readdy4_Garyexplains

## Related Concepts
- [[concepts/native-binaries|native binaries]] — [Wikipedia](https://en.wikipedia.org/wiki/native_binaries)
- [[concepts/linux-commands|Linux commands]] — [Wikipedia](https://en.wikipedia.org/wiki/Linux_commands)
- [[concepts/command-prompt|command prompt]] — [Wikipedia](https://en.wikipedia.org/wiki/command_prompt)
- [[concepts/command-prompt|coreutils]] — [Wikipedia](https://en.wikipedia.org/wiki/coreutils)
- GNU Core Utilities — [Wikipedia](https://en.wikipedia.org/wiki/GNU_Core_Utilities)
- [[concepts/native-binaries|Native Windows Binaries]] — [Wikipedia](https://en.wikipedia.org/wiki/Native_Windows_Binaries)
- [[concepts/winget-install|PowerShell]] — [Wikipedia](https://en.wikipedia.org/wiki/PowerShell)
- [[entities/winget|Winget]] [[concepts/package-manager|Package Manager]] — [Wikipedia](https://en.wikipedia.org/wiki/Winget_Package_Manager)
- Cross-platform Workflows — [Wikipedia](https://en.wikipedia.org/wiki/Cross-platform_Workflows)
- [[concepts/command-line-interface|Command-line Interface]] — [Wikipedia](https://en.wikipedia.org/wiki/Command-line_Interface)
- Unix-like Tools — [Wikipedia](https://en.wikipedia.org/wiki/Unix-like_Tools)
- Command Piping — [Wikipedia](https://en.wikipedia.org/wiki/Command_Piping)
- Alias Management — [Wikipedia](https://en.wikipedia.org/wiki/Alias_Management)
- Command [[concepts/ses-family|Conflict Resolution]] — [Wikipedia](https://en.wikipedia.org/wiki/Command_Conflict_Resolution)
- [[entities/windows-11|Windows 11]] Terminal — [Wikipedia](https://en.wikipedia.org/wiki/Windows_11_Terminal)
- Scripting Automation — [Wikipedia](https://en.wikipedia.org/wiki/Scripting_Automation)
- Linux Compatibility — [Wikipedia](https://en.wikipedia.org/wiki/Linux_Compatibility)
- Shell Environment — [Wikipedia](https://en.wikipedia.org/wiki/Shell_Environment)
- File System Utilities — [Wikipedia](https://en.wikipedia.org/wiki/File_System_Utilities)

## Related Entities
- [[entities/gary-explains|Gary Explains]] — [Wikipedia](https://en.wikipedia.org/wiki/Gary_Explains)
- [[entities/gnu-core-utilities|GNU Core Utilities]] — [Wikipedia](https://en.wikipedia.org/wiki/GNU_Core_Utilities)
- [[entities/windows|Windows]] — [Wikipedia](https://en.wikipedia.org/wiki/Windows)
- [[entities/microsoft|Microsoft]] — [Wikipedia](https://en.wikipedia.org/wiki/Microsoft)
- GNU Project — [Wikipedia](https://en.wikipedia.org/wiki/GNU_Project)
- PowerShell — [Wikipedia](https://en.wikipedia.org/wiki/PowerShell)
- Command Prompt — [Wikipedia](https://en.wikipedia.org/wiki/Command_Prompt)
- Readdy AI — [Wikipedia](https://en.wikipedia.org/wiki/Readdy_AI)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- [[entities/winget|Winget]] — [Wikipedia](https://en.wikipedia.org/wiki/Winget)
- [[entities/linux|Linux]] — [Wikipedia](https://en.wikipedia.org/wiki/Linux)