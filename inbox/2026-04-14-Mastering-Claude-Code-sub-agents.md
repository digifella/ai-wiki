---
wiki-ingested: true
title: "Mastering Claude Code sub-agents"
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

# Mastering [[concepts/claude-code-sub-agents|Claude Code sub-agents]]

---
---
<https://www.youtube.com/watch?v=mEt-i8FunG8>
[[entities/prompt-engineer|Prompt Engineer]]

The video discusses the concept of "sub-agents" within [[entities/anthropic|Anthropic]]'s Claude Code, highlighting how they address challenges in [[concepts/agentic-systems|agentic systems]] like [[concepts/context-management|context management]] and [[concepts/tool-selection|tool selection]]. \[0:04, 0:10, 0:11, 0:25\]
**What are Sub-Agents?** Sub-agents are [[concepts/specialized-ai-assistants|specialized AI assistants]] in Claude Code that can be invoked to handle specific types of tasks. \[0:27\] They offer more efficient [[concepts/problem-solving|problem-solving]] by providing [[concepts/task-specific-configurations|task-specific configurations]] with customized [[concepts/system-prompts|system prompts]], tools, and a separate [[concepts/context-window|context window]]. \[0:28\] This separation of context is a key benefit, as it keeps the main orchestrator's context window clean and free from unnecessary information. \[0:50, 1:31, 1:57\]
**How Sub-Agents Work:** When the main orchestrator (the main Claude Code instance) encounters a task, it determines if a sub-[[entities/agent|agent]]'s expertise matches the task. \[0:38, 0:40\] If there's a match, the sub-agent takes over. \[0:44\] Each sub-agent operates within its own environment, which includes:

* **Own Context Window:** Separate from the main conversation, preventing context pollution. \[0:46, 1:58\]
* **Custom [[concepts/system-prompt|System Prompt]]:** Guides the sub-agent's specific behavior. \[0:55, 0:58\]
* **Specific Tool Access:** Allows for precise tool selection, improving performance. \[1:06, 2:13, 2:16\]
* **Execution of Specialized Task:** The sub-agent performs its defined operation. \[1:15\] Once the sub-agent completes its task, it returns only the final results to the main orchestrator, keeping the main conversation streamlined. \[1:22, 4:05, 8:57, 9:01\]

**Benefits of Sub-Agents:** The primary benefits of using sub-agents include:

* **Context [[concepts/preservation|Preservation]]:** Maintaining clean and focused [[concepts/context-windows|context windows]] for both the main orchestrator and individual sub-agents. \[1:57\]
* **Flexible Permissions:** Granting sub-agents tool-specific access and setting [[concepts/security|security]] boundaries. \[2:01, 2:09\] This helps prevent powerful tools from being misused by general-[[concepts/purpose|purpose]] agents. \[2:11\]
* **Specialized Expertise:** Enabling domain-specific [[concepts/instructions|instructions]], leading to higher [[concepts/success-rates|success rates]] and task-optimized behavior. \[2:19, 2:20\]
* **Reusability:** Allowing agents to be used across different projects and shared within a team, promoting consistent workflows. \[2:23, 2:27\]

**Creating and Using Sub-Agents in Claude Code:** Sub-agents can be defined either at the project level (`.claude/agents/`) or the user level (`~/.claude/agents/`). \[2:36\] In case of a name conflict, project-level sub-agents take precedence. \[2:38, 2:40\]
To define a sub-agent, you create a [[concepts/markdown|Markdown]] file (`agent-name.md`) that includes:

* `name`: The agent's name. \[2:57\]
* `description`: Its purpose. \[2:59\]
* `tools`: The specific tools it can access. \[3:02\]
* `# System Prompt`: Detailed instructions for its behavior. \[3:04\]

The video demonstrates how to interact with the sub-agent creation process within Claude Code using the `/agents` command. \[4:33\] Users can choose to generate a new agent with Claude's assistance (which helps create the description and select tools) or configure it manually. \[3:34, 3:41, 6:49\]
**Usage Patterns:** Sub-agents can be invoked in two ways:

1. **Automatic Delegation:** Claude Code automatically delegates a task to a matching sub-agent based on its description. \[3:55, 3:59\]
2. **Explicit Invocation:** Users can explicitly call a specific sub-agent (e.g., "Use debugger agent"). \[3:50\]

This multi-agent system allows for the creation of complex orchestration workflows, where sub-agents can be chained sequentially or run in parallel. \[4:14, 4:18\]
The video concludes by reiterating the advantages of sub-agents for managing complexity in [[concepts/ai-agent|AI agent]] workflows and encourages users to explore their [[concepts/capabilities|capabilities]] in Claude Code. \[9:26, 9:51\]