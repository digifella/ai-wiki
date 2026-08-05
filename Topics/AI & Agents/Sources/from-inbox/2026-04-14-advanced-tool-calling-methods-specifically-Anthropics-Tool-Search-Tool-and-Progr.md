---
wiki-ingested: true
title: "advanced tool-calling methods, specifically Anthropic's Tool Search Tool and Programmatic Tool Calli"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# advanced [[concepts/tool-calling|tool-calling]] methods, specifically [[entities/anthropic|Anthropic]]'s [[concepts/tool-search-tool|Tool Search Tool]] and Programmatic Tool Calli

---
---
* * *

# [[entities/youtube|YouTube]] Summary Report

Generated: 2026-03-09 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: Summary, Key Timestamps

* * *

## Video 1

**URL:** https://www.youtube.com/watch?v=R7OCrqyGMeY

### Summary

This video provides a detailed explanation and demonstration of advanced tool-calling methods, specifically Anthropic's "Tool Search Tool" and "[[concepts/programmatic-tool-calling|Programmatic Tool Calling]]," which aim to solve common challenges in building efficient AI agents. The main problems addressed are the excessive consumption of [[concepts/context-tokens|context tokens]] by [[concepts/tool-definitions|tool definitions]], the bloating of the [[concepts/context-window|context window]] by intermediate tool call results, and the agent's difficulty in selecting the correct tool from a large library. Anthropic claimed an 85% reduction in token usage with these features, now generally available with [[entities/claude-sonnet-4.5|Claude Sonnet]] 4.6.
The "Tool Search Tool" tackles the issue of context bloat from upfront tool definitions. Instead of loading all tool definitions at the start of a conversation, this tool allows the AI agent to dynamically search for and load only the necessary tools when a specific query requires them. The speaker demonstrates how this reduces the initial token count significantly (e.g., from 13,000 to 6,300 tokens in an initial "Hello" response) by deferring the loading of extensive tool schemas until they are actively needed, making the agent more efficient.
"Programmatic Tool Calling" is introduced as a [[concepts/solution|solution]] for managing the pollution of context by numerous intermediate tool call results, especially in multi-step processes. This method involves the AI agent generating and executing a Python script within an isolated sandbox environment ([[concepts/docker|Docker]] and G-Visor are used in the demonstration). This script can perform multiple, sequential operations (e.g., fetching team members, their expenses, and budget limits) and then compile a single, concise result that is returned to the LLM. This significantly reduces the number of tokens transferred back and forth with the LLM, as the complex data processing happens efficiently within the sandboxed code execution environment.
The video emphasizes that these advanced tool-calling concepts are not exclusive to Anthropic's API but are fundamental agent-building [[concepts/design|design]] patterns applicable across various frameworks and models, including [[concepts/open-source|open-source]] options like Ollama's Qwen 3.5. The speaker showcases how to integrate these features into a custom Python and React application, demonstrating their effectiveness and efficiency. A key takeaway is the importance of efficient tool design and strategic feature layering to optimize agent performance, manage context, and securely execute code, leading to more robust and accurate AI agent interactions.

### Key Timestamps

Here's a list of key moments and topics from the video, with timestamps:

* **00:00** — Introduction: Anthropic's new beta features for advanced tool use on the Claude Developer Platform.
* **00:08** — Identifying problems with traditional AI agent building: Tool definitions consuming large amounts of context.
* **00:13** — Problem 2: Intermediate results from tool calls bloating context even further.
* **00:21** — Problem 3: Agents struggling to pick the right tool from a growing number of options.
* **00:30** — Announcement: Claude [[entities/sonnet-46|Sonnet 4.6]] makes new features generally available, promising an 85% reduction in token usage.
* **00:52** — Introducing the two main features discussed: Programmatic Tool Calling and the Tool Search Tool.
* **01:07** — Overview of the [[concepts/custom-ai-agent|custom AI agent]] system used for demonstrations, built with Python/FastAPI, [[concepts/ai-models|AI models]] (OpenRouter/Ollama), and an LLM Sandbox (Docker/G-Visor).
* **01:40** — Live demonstration of the **Tool Search Tool**: Showing initial token usage (13k) upon saying "Hello" due to 60 tools loaded upfront.
* **02:24** — Implementing deferred loading for tools to optimize context usage.
* **02:29** — Re-demonstration with deferred loading: Token usage reduced to 6.3k, with only 12 tools (and the `tool_search` tool) loaded initially.
* **02:44** — Explanation of how `tool_search` works: dynamically discovers and loads tools from a registry based on query.
* **02:50** — Live demo: Using `tool_search` to fetch the latest commit from a GitHub project. The agent finds and loads the `list_commits` tool, then executes it.
* **03:22** — Once a tool is found and loaded by `tool_search`, it remains in context for subsequent related questions in the session.
* **03:59** — Transition to **Programmatic Tool Calling**, highlighting its potential.
* **04:13** — Introducing Anthropic's "Budget [[concepts/compliance|Compliance]] Check" example to showcase programmatic tool calling.
* **04:31** — Explaining the "traditional approach" from Anthropic's paper: many sequential tool calls, high token consumption, and intermediate bloat.
* **04:44** — Live demo (traditional approach, sandbox disabled): Asking to identify team members exceeding their travel budget.
* **05:07** — Results of traditional approach: Identifies 3 out of 4 correct members, indicating inaccuracy.
* **05:29** — Langfuse trace for traditional approach: 56 tool calls, 76k prompt tokens, 11 rounds of LLM interaction.
* **05:59** — Live demo (programmatic tool calling, sandbox enabled, using [[entities/claude-haiku|Claude Haiku]]).
* **06:08** — The agent uses `tool_search`, then generates Python code to execute the budget analysis logic in a sandbox.
* **06:17** — Initial code execution leads to errors, demonstrating the iterative nature of LLM [[concepts/code-generation|code generation]] and self-correction.
* **06:41** — Final accurate result after multiple iterations: Identifies all 4 team members correctly.
* **07:31** — Langfuse trace for programmatic tool calling with Claude Haiku: 6 rounds, 12 tool calls, 58k prompt tokens.
* **07:44** — Token usage comparison: Traditional (116k tokens, 11 rounds) vs. Programmatic (58k tokens, 6 rounds).
* **08:04** — Discussion: Programmatic tool calling is crucial for large [[concepts/training-data|datasets]] where individual tool calls would be inefficient or impossible.
* **08:30** — Key takeaway: Questioning if LLMs should perform ad-hoc data processing or relay information from pre-created, verified scripts/skills.
* **09:01** — Switching the LLM from Claude Haiku to Qwen 3.5 27B (local model) for the programmatic tool calling demo.
* **09:23** — Re-running the programmatic tool calling demo with Qwen 3.5.
* **09:48** — Qwen 3.5 achieves an accurate result through code generation.
* **09:55** — Langfuse trace for programmatic tool calling with Qwen 3.5: 45k tokens, only 4 tool calls.
* **10:20** — Detailed architectural explanation of programmatic tool calling.
* **10:55** — Step 1: Generate Code – User input goes to Backend Server (FastAPI/Python), which passes to AI Models (OpenRouter/Ollama), getting back a tool call to execute Python code.
* **11:14** — Step 2: LLM Sandbox – The backend spins up a Docker container (LLM Sandbox with G-Visor for [[concepts/secure|security]]) to execute the Python code.
* **11:50** — Step 3: Tool Bridge – A secure HTTP bridge connects the sandbox back to the Python app, allowing the Python script to call tools hosted externally without direct sandbox access.
* **13:10** — Benefits of the Tool Bridge [[concepts/architecture|architecture]]: fast execution (LLM is bypassed), no context bloat from intermediate calls.
* **13:48** — Security enhancement: G-Visor for Docker containers provides stronger [[concepts/disconnection|isolation]].
* **14:04** — Cloudflare Research on "Code Mode": LLMs are more effective at handling complex tools when presented as a [[concepts/typescript|TypeScript]] API (generating code) rather than standard MCP (direct tool calls).
* **14:40** — Typed Python Stubs: Tool definitions are converted into auto-generated Python functions for the sandbox, which the LLM then triggers. API credentials are never exposed to the sandbox.
* **15:10** — Importance of Efficient Tool Design: Addresses context bloat, intermediate results, and parameter errors.
* **15:47** — Tool Use Examples: Providing sample tool calls and usage patterns improves LLM [[concepts/accuracy|accuracy]], especially for complex JSON schemas.
* **16:59** — Strategic Layering of Features: Use Tool Search for context bloat, Programmatic Tool Calling for intermediate results, and Tool Use Examples for parameter handling.
* **17:19** — Call to action for the AI Automators community for further [[concepts/learning|learning]].
