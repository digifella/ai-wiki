---
wiki-ingested: true
title: "Major updates for Claude Code - Alex Finn"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
---
# Major updates for [[concepts/claude-code|Claude Code]] - [[entities/alex-finn|Alex Finn]]

---
---
<https://www.youtube.com/watch?v=Cb49pGTSigI>
Resume old sessions. When you go in a project and run this command, you can see all your old Claude Code sessions and resume whichever one you want so you don’t lose context: claude —resume
See what takes up your context. [[concepts/running|Running]] this command shows you what takes up your [[concepts/context-window|context window]]. Great to use when Claude is hallucinating a lot or not cooperating: /context
See your usage. Good for interesting stats or seeing how close you are getting to your limits: /stats
Rename your sessions. Good for organizing all your sessions by name so you know which to resume: /rename “your name”
Double escape to rewind the conversation to a previous message. Undoes code changes very easily.
Type ‘ultrathink’ to make claude code work way harder and get much better results

# to add custom memories. Just type # then tell Claude something for it to remember across sessions.

claude —dangerously-skip-permissions to put claude into yolo mode. Doesn’t ask for permissions anymore. Great for running long tasks independently.
/plugins for the claude [[concepts/plugins|plugins]] store. Make sure to install the [[concepts/design|design]] [[concepts/skill|skill]]!
ctrl+s to save prompts. Stashes your prompt and puts it back into the window after your next message

Based on the video, here are the 10 secret Claude Code updates that can significantly improve your [[concepts/workflow|workflow]]:

1. **Resume Sessions**: You can now pick up exactly where you left off in previous conversations. By typing `claude --resume` into your terminal, you can view a list of all past sessions and resume them with all their original context intact.
2. **Visualize Context (**`**/context**`**)**: If Claude starts performing poorly, it’s often due to a cluttered context window. Use the new `/context` slash command to see a visual breakdown (including token counts) of what is taking up space, such as [[concepts/system-prompts|system prompts]], past messages, or tools. You can then use `/clear` to free up space.
3. **[[concepts/usage-statistics|Usage Statistics]] (**`**/stats**`**)**: Use the `/stats` command to track your activity. It provides a dashboard showing your token usage, favorite [[concepts/models|models]] (like [[entities/opus|Opus]] or Sonnet), current streaks, and peak usage hours, helping you manage your plan limits.
4. **Name Your Sessions (**`**/rename**`**)**: To keep your resumed sessions organized, use the `/rename` command followed by a custom name (e.g., `/rename kanban-board`). This makes it much easier to identify specific tasks when browsing through your [[concepts/session|session]] history.
5. **Rewind Feature (Double Escape)**: If you make a mistake or want to undo a series of changes, you can now press the **Escape key twice** (`Esc` + `Esc`). This opens a rewind menu that allows you to restore your code, your conversation, or both to a specific previous point.
6. **Ultrathink Mode**: For particularly difficult bugs or complex planning, you can trigger a deeper [[concepts/reasoning|reasoning]] mode by including the keyword **"ultrathink"** in your prompt. This tells Claude to allocate a much higher token budget and extra computational effort to solve the problem.
7. **Custom Memories (**`**#**`**)**: You can now manually add information to Claude’s long-term [[concepts/memory|memory]] without editing the `CLAUDE.md` file directly. Simply start a message with the **hashtag symbol (**`**#**`**)** to enter memory mode and save project-specific [[concepts/instructions|instructions]] (e.g., "# Always use the design skill for UI changes").
8. **YOLO Mode**: For advanced users who want Claude to work autonomously, use the flag `claude --dangerously-skip-permissions`. This prevents Claude from stopping to ask for permission for every individual command or file edit, allowing it to run uninterrupted.
9. **Plugin Store (**`**/plugins**`**)**: The `/plugins` command acts like an app store for Claude Code. It allows you to discover and install "[[concepts/skills|skills]]" and [[concepts/model-context-protocol|Model Context Protocol]] (MCP) integrations—such as specialized front-end design tools or [[entities/notion|Notion]] integrations—with a single click.
10. **Stash Prompts (**`**Ctrl + S**`**)**: If you are halfway through [[concepts/writing|writing]] a long prompt but realize you need to run a different command first, you can hit **Control + S**. This stashes your current draft, allowing you to run other tasks and then automatically brings your saved prompt back into the input line afterward.