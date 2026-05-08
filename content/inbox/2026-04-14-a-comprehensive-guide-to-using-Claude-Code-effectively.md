---
wiki-ingested: true
title: "a comprehensive guide to using Claude Code effectively"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
---
# a comprehensive guide to using [[concepts/claude-code|Claude Code]] effectively

---
---
<https://www.youtube.com/watch?v=amEUIuBKwvg>
Complete guide to Claude code - Channel Cole Medin Aug 14, 2025

This video provides a comprehensive guide to using Claude Code effectively, covering installation, features, and advanced [[concepts/context-engineering|context engineering]] techniques.
Here's a breakdown of the key topics:
**I. Introduction & Overview**

* The speaker expresses addiction to Claude Code and context engineering, emphasizing the ability to build "anything."
* The video aims to be a start-to-finish guide, covering all features and [[concepts/best-practices|best practices]].
* Strategies discussed include [[concepts/global-rules|global rules]], [[concepts/custom-commands|custom commands]], agentic workflows, hooks, subagents, and [[concepts/parallel-agents|parallel agents]].
* Acknowledges Claude Code's current limitations ([[concepts/rate-limits|rate limits]], outages, cost) but states the strategies are broadly applicable to other AI coding assistants, though Claude is currently considered the best.
* All tips and strategies are available in a linked GitHub README for users to follow along.

**II. Key Strategies for Using Claude Code**
**Tip 1: Create and Optimize CLAUDE.md Files**

* **Purpose:** Set up context files that Claude automatically pulls into every conversation, containing project-specific information, commands, and guidelines. Acts as a "[[concepts/system-prompt|system prompt]]" for Claude.
* **Creation:** Use the built-in command `/init` to initialize a new `CLAUDE.md` file. Alternatively, create your own `CLAUDE.md` based on a template (e.g., from the `dynamous-community/context-engineering-hub` for Python projects).
* **Advanced Prompting Techniques:** **Power Keywords:** Claude responds to specific keywords with enhanced behavior (information-dense keywords): `IMPORTANT`: Emphasizes critical [[concepts/instructions|instructions]]. `Proactively`: Encourages Claude to take initiative and suggest improvements. `Ultra-think`: Triggers more thorough analysis (use sparingly). **Essential [[concepts/prompt-engineering|Prompt Engineering]] Tips:** Avoid prompting for "production-ready" code (often leads to over-engineering). Prompt Claude to write scripts to check its work, and create a validation script after implementation. Avoid backward compatibility unless specifically needed (Claude tends to preserve old code unnecessarily). Focus on clarity and specific requirements rather than vague quality descriptors.
* **File Placement Strategies:** Claude automatically reads `CLAUDE.md` from multiple locations: Root of repository (most common), checked into Git, shared with the team. `.CLAUD.local.md` (local only, added to `.gitignore`). Parent directories (for monorepos), allowing for general project info, frontend-specific, or backend-specific context. Reference external files for flexibility: use `echo "Follow best practices in: ~/company/engineering-standards.md" > CLAUDE.md`.
* **Pro Tip:** Many teams keep their `CLAUDE.md` minimal and reference a shared standards document. This allows switching between AI assistants, updating standards without changing every project, and sharing best practices across teams.

**Tip 2: Set Up Permission Management**

* Configure tool allowlists to streamline development while maintaining security for file operations and system commands.
* **Methods:** **Interactive Allowlist:** Claude asks for permission, select "Always allow" for common operations. **Use** `**/permissions**` **command:** Allows you to manage allow/deny tool permission rules. **Create project settings file:** Create `.claude/settings.local.json` to define allowed tools.
* **Security Best Practices:** Never allow `Bash(rm -rf:*)` or similar destructive commands. Use specific command patterns rather than generic `Bash(*)`. Review permissions regularly. Use different permission sets for different projects.

**Tip 3: Master Custom Slash Commands**

* Slash commands are user-defined commands living in `.claude/commands/` that enable reusable, parameterized workflows.
* **Built-in Commands:** `/init`, `/permissions`, `/clear`, `/agents`, `/help`.
* **Creating Your Own Commands:** Create a markdown file in `.claude/commands/`. Define the command's purpose and steps using markdown. Commands can use `$ARGUMENTS` to receive parameters.
* **Custom Command Example:** `/primer` performs a comprehensive repository analysis. Example: `/primer src/heavy-computation.js`

**Tip 4: Integrate [[concepts/mcp-servers|MCP Servers]] ([[concepts/model-context-protocol|Model Context Protocol]])**

* Connect Claude Code to MCP servers for enhanced functionality.
* **Serena [[concepts/mcp-server|MCP Server]]:** A powerful coding toolkit for semantic code analysis and editing. Serena is [[concepts/open-source|open-source]] and enhances LLMs for free.
* **[[concepts/integration|Integration]]:** Install `uv` and add Serena using a command like `claude mcp add serena --uvx --from git+https://github.com/oraios/serena start-mcp-server --context ide-assistant --project $(pwd)`.
* Manage MCP servers using `claude mcp list`, `claude mcp get serena`, `claude mcp remove serena`.
* **Coming Soon:** Archon V2 (HUGE Overhaul) - a comprehensive knowledge and task management backbone for AI coding assistants, enabling true [[concepts/human-ai-collaboration|human-AI collaboration]] on code for the first time. (Beta launch livestream on Saturday the 16th at 9:00 AM CDT).

**Tip 5: Context Engineering with Examples**

* Transforms your development workflow from [[concepts/simple-prompting|simple prompting]] to comprehensive context engineering, providing AI with all information needed for end-to-end implementation.
* **The PRP (Product Requirements Prompt) Framework:** A simple 3-step strategy: Define your requirements with examples and context (edit `INITIAL.md` to include example code and patterns). Generate a comprehensive PRP (`/generate-prp INITIAL.md`). Execute the PRP to implement your feature (`/execute-prp PRPs/your-feature-name.md`).
* **Defining Your Requirements:** `INITIAL.md` should always include feature, examples, documentation, and other considerations (e.g., environment variables, keeping agents simple, following main agent reference patterns, comprehensive testing with TestModel).
* **Critical PRP Strategies:** Examples (most powerful tool), Validation Gates (ensure comprehensive testing and iteration), No [[concepts/vibe-coding|Vibe Coding]] (validate PRPs before execution and code after execution).
* Context engineering works with any [[entities/ai-coding-assistant|AI coding assistant]] - the PRP framework and example-driven approach are universal principles.

**Tip 6: Leverage Subagents for Specialized Tasks**

* Subagents are [[concepts/specialized-ai-assistants|specialized AI assistants]] that operate in [[concepts/separate-context-windows|separate context windows]] with focused expertise. They enable Claude to delegate specific tasks, improving quality and efficiency.
* **Understanding Subagents:** Has its own [[concepts/context-window|context window]] (no pollution from main conversation). Operates with specialized [[concepts/system-prompts|system prompts]]. Can be limited to specific tools. Works autonomously on delegated tasks.
* **Creating Your Own Subagents:** Use the `/agents` command or create a file in `.claude/agents/`.
* **Subagent Best Practices:** Focused expertise, proactive descriptions, tool limitations, information flow design, one-shot context.

**Tip 7: Automate with Hooks**

* Hooks provide deterministic control over Claude Code's behavior through user-defined shell commands that execute at predefined lifecycle events.
* **Available Hook Events:** PreToolUse, PostToolUse, UserPromptSubmit, SubagentStop, Stop, SessionStart, PreCompact, Notification.
* **Setting Up Hooks:** Create hook script in `.claude/hooks/`. Make it executable (`chmod +x your-hook.sh`). Add to settings in `.claude/settings.json`.

**Tip 8: GitHub CLI Integration**

* Set up the GitHub CLI to enable Claude to interact with GitHub for issues, pull requests, and repository management.
* **Custom GitHub Commands:** Use `/fix-github-issue [number]` for automated fixes, which fetches issue details, analyzes the problem, searches relevant code, implements the fix, runs tests, and creates a PR.

**Tip 9: Safe Yolo Mode with Dev Containers**

* Allows Claude Code to perform any action while maintaining safety through [[concepts/containerization|containerization]]. Enables rapid development without destructive behavior on your host machine.
* **Prerequisites:** Install Docker, VS Code (or compatible editors).
* **Security Features:** Network isolation with whitelist, no access to host filesystem, restricted outbound connections, safe experimentation environment.
* **[[concepts/setup-process|Setup Process]]:** Open in VS Code, press F1, select "Dev Containers: Reopen in Container," wait for container build, open terminal, authenticate Claude Code in container, run in YOLO mode (`claude --dangerously-skip-permissions`).

**Tip 10: Parallel Development with Git Worktrees**

* Use Git worktrees to enable multiple Claude instances working on independent tasks simultaneously, or automate parallel implementations of the same feature.
* **Manual Worktree Setup:** Create worktrees for different features, launch Claude in each worktree.
* **Automated Parallel Agents:** Set up parallel worktrees using `/prep-parallel user-system 3`. Execute parallel implementations: create a plan file (`plan.md`), run parallel execution using `/execute-parallel user-system plan.md 3`. Select the best implementation: review results, test each implementation, merge the best.
* **Benefits:** No conflicts, multiple approaches, [[concepts/quality-gates|quality gates]], easy integration.

In the comments ShareX is a way to share screenshot with Claude Code. Apparently the Shift key works in some way as well.
