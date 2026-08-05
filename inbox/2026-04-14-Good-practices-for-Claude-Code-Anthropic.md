---
wiki-ingested: true
title: "Good practices for Claude Code - Anthropic"
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
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Good practices for [[concepts/claude-code|Claude Code]] - [[entities/anthropic|Anthropic]]

---
---
<https://www.youtube.com/watch?v=gv0WHhKelSE>
[[entities/cal-rueb|Cal Rueb]], a member of Technical Staff at Anthropic, presented "[[entities/claude-code|Claude Code]] [[concepts/best-practices|best practices]]," offering insights into the tool, its functionalities, and optimal usage.
**About Cal Rueb and Anthropic's [[entities/applied-ai-team|Applied AI Team]]:** Cal Rueb introduced himself as a member of Anthropic's [[concepts/applied-ai-team|Applied AI team]], which he joined about a year and a half ago. Their mission is to assist customers and partners in building products and features on top of Claude. Rueb spends a significant portion of his day "[[concepts/prompting|prompting]] Claude" to achieve the best outputs from the [[concepts/models|models]]. As an avid coder, he found his [[concepts/coding|coding]] process transformed by Claude Code, which he discovered through internal discussions at Anthropic. His extensive use of the tool led him to become a core contributor to the Claude Code team, focusing on [[concepts/prompt-engineering|prompt engineering]], tool [[concepts/integration|integration]], and evaluation methodologies.
**Understanding Claude Code:** Rueb describes Claude Code as akin to "that coworker that does everything in the terminal and never touches a GUI." He elaborates on its underlying mechanics, referring to it as a "very pure [[entities/agent|agent]]." At Anthropic, an agent is defined by:

* **[[concepts/instructions|Instructions]]:** Clear directives given to the model.
* **Powerful Tools:** [[concepts/capabilities|Capabilities]] like creating and editing [[concepts/files|files]], using CLI and MCP tools, and creating [[concepts/commits|commits]], designed for both narrow tasks like bug fixes and broad refactors.
* **Loop Execution:** The model operates in a loop until it determines the task is complete.

Key features highlighted include:

* **Codebase Awareness:** Claude Code maintains awareness of the project [[concepts/structure|structure]] and uses "[[concepts/agentic-search|agentic search]]" (like glob, grep, find) to navigate and understand the codebase as needed, eliminating the need for manual file additions to context.
* **Transparency:** The tool shows its work, allowing users to observe its operations. It also employs a tiered permissions system that balances powerful capabilities with [[concepts/user-control|user control]].
* **[[concepts/security|Security]]:** Queries go directly to [[concepts/anthropic-models|Anthropic models]] via API without intermediate servers. It supports Anthropic APIs on [[entities/amazon|Amazon]] Bedrock and [[entities/google|Google]] Cloud Vertex AI, offering flexibility in how users consume Claude.

**[[concepts/scenarios|Use Cases]] of Claude Code:** Rueb asserts that Claude Code augments the entire [[concepts/software|software]] product development lifecycle, being "great at everything." He breaks down its utility into five phases:

1. **Discover:**
	**Explore codebase and history:** Helps users understand new codebases quickly, acting as a "thought partner" to outline implementation options. **Search documentation:** Assists in finding relevant information within the project. **Onboard & learn:** Supercharges the onboarding process by helping new engineers understand where features are implemented, what patterns are used, and even summarizing Git history.
	
2. **[[concepts/design|Design]]:**
	**Plan project:** Claude Code can help plan projects by analyzing the codebase and suggesting approaches, allowing users to verify its detailed plans before execution. **Develop tech specs:** Assists in outlining technical specifications. **Define [[concepts/architecture|architecture]]:** Aids in architectural design.
	
3. **Build:**
	**Implement code:** Excellent for building and [[concepts/writing|writing]] code from scratch. **Write and execute tests:** Claude Code simplifies adding unit tests, leading to high test coverage. **Create commits and PRs:** Can automatically generate commit and pull request messages based on completed work.
	
4. **Deploy:**
	**Automate CI/CD:** Integrates with [[concepts/cicd-pipelines|CI/CD pipelines]] for programmatic assistance. **Configure environments:** Helps in setting up and managing [[concepts/developer-platforms|development environments]]. **Manage deployments:** Can aid in [[concepts/deployment|deployment]] processes.
	
5. **Support & Scale:**
	**Debug errors:** Speeds up error [[concepts/debugging|debugging]]. **Large-scale refactor:** Makes large-scale code refactors and migrations more manageable. **Monitor usage & performance:** Can be used to monitor application performance.
	

**Best Practices for Using Claude Code:**

1. **Environment [[concepts/setup|Setup]] & Configuration:**
	**CLAUDE.md files:** Create these files in strategic locations to document [[concepts/commands|commands]], [[concepts/style|style]] guidelines, and key context. Claude Code automatically ingests the `CLAUDE.md` file in the working directory into its context. **Permission management:** Curate allowed tools to reduce interruptions during coding sessions. For read actions, Claude Code operates freely. For write or potentially destructive actions (like [[concepts/running|running]] bash commands), it prompts for user confirmation. Users can also utilize an "auto-accept mode" for quicker workflows. **Integration setup:** Install tools like `gh CLI` for seamless [[entities/github|GitHub]] workflows. Claude Code excels at interacting with [[concepts/command-line-interface|command-line]] tools, so integrating well-documented CLIs like `git`, `docker`, or `bq` can significantly enhance its capabilities. **[[concepts/context-management|Context management]]:** Regularly use `/clear` to reset the [[concepts/conversation-history|conversation history]] and `/compact` to summarize the current [[concepts/session|session]]'s context, maintaining focused conversations.
	
2. **Effective Workflows:**
	**Planning and TODOs:** Start by asking Claude to read relevant files and create a detailed plan. Always verify Claude's TODO list before proceeding. **Smart [[concepts/vibe-coding|vibe coding]]:** Leverage [[concepts/test-driven-development|test-driven development]] and regular commits to code with appropriate [[concepts/ai-safety|guardrails]]. Encourage Claude to make small changes, run tests, and commit frequently. **Use screenshots to guide & debug:** Since Claude's underlying models are multimodal, users can provide screenshots to compare implementations against mockups and offer visual guidance on design tasks.
	
3. **Advanced Techniques:**
	**Multi-Claude & parallelization:** For complex problems, use separate instances of Claude Code for different tasks like coding, reviewing, and [[concepts/testing|testing]]. Deploy worktrees or [[concepts/sub-agents|sub-agents]] to tackle problems simultaneously. **Use escape:** Balance letting Claude work autonomously with interjecting at opportune times. Pressing Escape once stops the current operation, and pressing it twice jumps back in the conversation to a previous state. **Tool expansion & MCP:** Integrate more bash tools, [[concepts/mcp-servers|MCP servers]], and custom slash commands. Claude Code acts as both an MCP client and server, allowing for flexible tool integration. **Headless [[concepts/automation|automation]]:** Utilize the `-p` mode for CI/CD pipelines and large-scale changes, enabling programmatic automation of coding tasks.
	

Rueb concluded by emphasizing the rapid pace of development at Anthropic and encouraged users to stay updated with the latest changes in Claude Code through their public GitHub project. He also highlighted the improved [[concepts/instruction-following|instruction following]] of [[entities/claude-4|Claude 4]], which has significantly enhanced the tool's effectiveness.
