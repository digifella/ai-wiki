---
type: concept
domain: ai-agents
tags:
  - "ai-coding-agents"
  - "software-development"
  - "repository-context"
  - "persistent-memory"
  - "token-optimization"
  - "autonomous-systems"
aliases:
  - "Coding Agents"
  - "AI Programming Assistants"
  - "Autonomous Code Editors"
summary: AI coding agents are autonomous or semi-autonomous AI systems that assist in code writing, debugging, and maintenance through natural language interactions with repository context, where system harness design often outweighs LLM choice.
updated: 2026-07-11
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

group: [[concepts/coding|coding]]-agents-dev-workflows

# AI coding agents

Autonomous or semi-[[concepts/voice-assistants|autonomous systems]] that use AI to assist in [[concepts/writing|writing]], [[concepts/debugging|debugging]], and maintaining code through natural language interactions with [[concepts/codebase-context|repository context]].

## Key findings

- **Context File Efficacy**: A 2026 [[entities/eth-zurich|ETH Zurich]] study, *Evaluating [[concepts/agentsmd|AGENTS.md]]: Are [[concepts/repository-level-context-files|Repository-Level Context Files]] Helpful for [[concepts/ai-coding-assistance|Coding Agents]]?*, found that repository-level context files (like `AGENTS.md` and `[[concepts/claude-ai|CLAUDE]].md`) can degrade [[concepts/autonomous-ai-coding-agent|AI coding agent]] performance, contradicting common industry practice of using them for [[concepts/recommendations|guidance]]. (Source: [[entities/theo|Theo]], watch?v=GcNu6wrLTJc%7CYouTube)
- **[[concepts/persistent-memory|Persistent Memory]] & [[concepts/token-optimization|Token Efficiency]]**: [[lab-notes/2026-05-26-OpenCode-and-Claude-Mem-Persistent-Memory-10x-Token-Savi|OpenCode and Claude-Mem: Persistent Memory, 10x Token Savings for AI Agents]] highlights the "cold start" problem inherent in session-based agents. By implementing persistent [[concepts/memory|memory]] [[concepts/causes|mechanisms]] like Claude-Mem, systems can retain state across sessions, reducing redundant context loading and achieving up to 10x [[concepts/token-savings|token savings]].
- **[[entities/anthropic-institute|Anthropic]]'s Long-Running Workflows**: [[entities/anthropic|Anthropic]]'s specific workflows for long-running [[entities/claude|Claude]] sessions emphasize structured [[concepts/memory-management|memory management]] to handle extended development tasks without context overflow.
- **Context Degradation Risks**: Observations from 2026-04-14 indicate that agents can perform worse with explicit context files like `claude.md` if not carefully curated, suggesting that implicit context [[concepts/document-retrieval|retrieval]] or selective injection is often superior to blanket repository inclusion.
- **System Architecture Priority**: System [[concepts/architecture|architect]]ure decisions regarding memory [[concepts/data-persistence|persistence]] and [[concepts/context-window|context window]] management frequently outweigh the [[concepts/incremental-progress|marginal gains]] of swapping LLM providers.
