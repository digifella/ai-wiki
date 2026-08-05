---
title: "Coreutils for Windows: Native Linux Commands in Command Prompt"
date: 2026-06-12
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Coreutils for Windows: Native Linux Commands in Command Prompt
Generated: 2026-06-12 · API: Gemini 2.5 Flash · Modes: Summary

---

## Coreutils for Windows: Native Linux Commands in Command Prompt
**Clip title:** Coreutils for Windows is Here - The Same Commands You Use on Linux Now Native to Windows!
**Author / channel:** Gary Explains
**URL:** https://www.youtube.com/watch?v=Bg8FjRGuW_w

### Summary
This video introduces a significant development for command-line users: the official porting of GNU Core Utilities (coreutils) to Windows as native binaries. The presenter, who frequently switches between Linux and Windows environments, highlights the common frustration of typing familiar Linux commands like `ls`, `cat`, or `uptime` into a Windows command prompt only to receive an "unrecognized command" error. Historically, users relied on emulators or workarounds to access these powerful utilities on Windows. Now, Microsoft has made 78 of these coreutils available natively, bridging a long-standing gap in the Windows command-line experience.

Installation of these coreutils is straightforward, either through `winget` (a Windows package manager) or by downloading releases directly from the GitHub repository. The presenter demonstrates how, after installation, commands like `ls` and `uptime` function identically to their Linux counterparts within the Windows Command Prompt, even allowing for command piping (e.g., `ls -l | wc -l`). Users can verify they are using the coreutils version of a command by appending `--version`, which will display "ls (utils coreutils) 0.8.0" rather than an error or the built-in Windows version information. However, a crucial point is that some commands, like `mkdir`, may conflict with Windows' own built-in versions, potentially leading to unexpected behavior such as creating a directory named `--version`.

The video further explores the integration with PowerShell, noting that PowerShell's more sophisticated built-in cmdlets can lead to more naming conflicts than the Command Prompt. For example, PowerShell's `cat` (an alias for `Get-Content`) will take precedence over the coreutils `cat`. To resolve this and consistently use the coreutils versions, the presenter provides a PowerShell script that removes existing aliases and sets new ones for the coreutils binaries, effectively prioritizing them within the PowerShell session. All these binaries are conveniently located in `C:\Program Files\coreutils\bin`.

In conclusion, this native port of GNU Core Utilities to Windows is a valuable enhancement for developers and power users, offering a familiar and robust set of command-line tools. While some initial setup and awareness of command conflicts (especially in PowerShell) are necessary, the ability to leverage these powerful utilities directly on Windows significantly streamlines cross-platform workflows and empowers users with advanced scripting capabilities previously limited to Linux environments.

### Video Description & Links
#### Description
Microsoft has released the CoreUtils for Windows. The same commands you use on Linux or macOS, now work the same way on Windows!
---
Thanks to Readdy AI for sponsoring this video:
Link: https://bit.ly/Readdy4_Garyexplains
Code: Gary

#garyexplains

#### Tags
`Gary Explains`, `Tech`, `Explanation`, `Tutorial`, `Windows`, `Microsoft`, `coreutils`, `command line`, `pipes`, `Linux`, `Unix-like`, `Unix-based`, `ls`, `cp`, `pwd`, `cat`, `hostname`, `du`, `mkdir`, `rmdir`, `PowerShell`, `Command Prompt`

#### URLs
- https://bit.ly/Readdy4_Garyexplains
