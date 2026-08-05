---
wiki-ingested: true
domain: ai-agents
group: anthropic-claude
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=XWp4k9K6oK8>
Here is a [[concepts/markdown|markdown]] summary of the video transcript, detailing the [[concepts/workflow|workflow]] for effective long-running [[concepts/ai-coding|AI coding]] agents.

# Effective Harnesses for Long-Running Agents ([[concepts/claude-code|Claude Code]] Workflow)

This document outlines a [[concepts/solution|solution]] developed by [[entities/anthropic|Anthropic]] and adapted by the [[entities/video-creator|video creator]] to solve the primary issue with AI coding agents: **[[concepts/context-window|Context Window]] Limitations.**

## 🔴 The Problem

When AI agents (like Claude) attempt to "one-shot" large applications or complex features, they encounter two specific failure modes:

1. **[[concepts/context-compaction|Context Compaction]]:** As the task grows, the conversation is compacted to save tokens. The AI loses the specific details of what it previously did, leading to half-implemented features or hallucinations about progress.
2. **False Completion:** Without strict [[concepts/testing|testing]] protocols, agents tend to mark features as "complete" even if they are untested or buggy.

## 🟢 The Solution: A Two-[[concepts/agent-workflow|Agent Workflow]]

Inspired by real-world engineering teams, this workflow splits the process into an **Initializer Agent** and a **Coding Agent** working incrementally.

### Phase 1: The Initializer Agent

The first agent session focuses solely on setting up the environment and documentation. It does not write application code yet. It creates the following:

* `**CLAUDE.md**`: A project overview file containing [[concepts/architecture|architecture]], [[concepts/tech-stack|tech stack]], and [[concepts/commands|commands]].
* `**init.sh**`: A script to initialize the dev server.
* `**features_list.json**`: A JSON file listing every feature and its testing steps.
	* _Note:_ JSON is used instead of Markdown because models are less likely to corrupt the structure.
	* All features start with `"passes": false`.
* `**claude-progress.md**`: A file to track what agents have done.
* **Tooling Setup**: Installs tools like **Puppeteer** so the agent can browse the local host and visually test the app (since it can't "see" the browser otherwise).
* **Initial Git Commit**: Commits the scaffolding to create a baseline.

### Phase 2: The Coding Agent (Incremental Loop)

The second agent picks up where the first left off, but follows a strict loop to manage context:

1. **Read State**: The agent reads the Git logs and the progress [[concepts/files|files]] to understand the project state (rather than relying on [[concepts/conversation-history|chat history]]).
2. **Implement Single Feature**: It selects the highest priority feature from `features_list.json`.
3. **Test**: It uses Puppeteer to verify the feature works end-to-end.
4. **Update Documentation**:
	* Updates `features_list.json` (sets `"passes": true`).
	* Updates `claude-progress.md` with the completed task.
5. **Git Commit**: It commits the changes with a descriptive message.
	* _Critical:_ By committing continuously, the "Save State" is in the Git history, not the AI's context window.
6. **Repeat**: The process repeats for the next feature.

## 🔑 Key Advantages

* **Resumability**: Because the state is stored in Git and files (not the chat), if the session crashes or compacts, a new agent can run `git log` and `cat claude-progress.md` to pick up exactly where the previous one stopped.
* **Testing [[concepts/compliance|Compliance]]**: The workflow forces the agent to mark tests as "failed" initially, preventing it from lying about completion without running Puppeteer tests.
* **Context Efficiency**: By focusing on one feature at a time, the context usage remains low (e.g., 84% usage after many features) compared to other methods like BMAD which might hit limits faster.

## 🆚 Comparison to [[concepts/bmad-method|BMAD Method]]

While similar to the **BMAD (Breakthrough Method for Agile Development)** workflow, this specific Claude workflow is:

* **Integrated**: [[concepts/context-utilization|Context utilization]] is more efficient.
* **Git-Centric**: Relies heavily on Git logs for [[concepts/memory|memory]] rather than just file summaries.
* **Simpler**: Does not require calling agents separately; it creates a natural loop.

## Related Concepts
- [[concepts/context-window-limitations|Context Window Limitations]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Window_Limitations)
- [[concepts/one-shot-large-applications|One-Shot Large Applications]] — [Wikipedia](https://en.wikipedia.org/wiki/One-Shot_Large_Applications)
- [[concepts/conversation-compaction|Conversation Compaction]] — [Wikipedia](https://en.wikipedia.org/wiki/Conversation_Compaction)
- [[concepts/ai-coding-agents|AI Coding Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Coding_Agents)

## Related Entities
- [[entities/claude-code-workflow|Claude Code Workflow]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code_Workflow)