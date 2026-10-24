---
wiki-ingested: true
title: "Graft: Optimizing AI Agent Performance and Cost in Large Codebases"
date: 2026-09-09
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
aliases:
  - "lab-notes/2026-09-09-Graft-Optimizing-AI-Agent-Performance-and-Cost-in-Large"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Graft: Optimizing AI Agent Performance and Cost in Large Codebases
**Clip title:** Github Top Trending Tool Just Fixed The AI Agent’s Biggest Problem
**Author / channel:** AI LABS
**URL:** https://www.youtube.com/watch?v=cyIWQHYoUg8

### Summary
This video introduces [[concepts/ai-agent|Graft]], an open-source [[concepts/context-layer|context layer]] designed to significantly improve the efficiency and cost-effectiveness of AI coding agents like [[entities/claude-code|Claude Code]] and [[entities/openai|OpenAI]]'s models when working with [[concepts/large-codebases|large codebases]]. The core problem highlighted is that traditional AI agents are slow and costly because they repeatedly search through code files using commands like `grep` and `glob`, and continuously re-send the entire conversation history ([[concepts/context-length|context window]]) to the language model. This process, termed "context bloat," leads to high token consumption, slow response times, and quickly hitting usage limits, ultimately resulting in poorer quality outputs due to the agent's inability to focus.

Graft addresses these fundamental issues by replacing the traditional iterative search and context-feeding mechanism with a dynamic "knowledge graph." Instead of relying on similarity-based vector searches, Graft builds a comprehensive map of the codebase, detailing each code component (node) and its interdependencies (edges). This graph-based approach allows the AI agent to directly query specific code sections and understand their connections without repeatedly scanning the entire project or re-processing redundant information. This intelligent context management ensures the agent receives only the most relevant information for each task, dramatically reducing the size of the [[concepts/context-length|context window]] and the number of [[concepts/tool-calls|tool calls]].

The practical benefits of integrating Graft are substantial. Benchmarking results show that Graft can make AI agents up to 4x cheaper in terms of token usage (42% savings in input tokens) and 3x faster in task completion (60% reduction in latency). It also reduces tool calls by 46% and improves correctness by 5 percentage points, leading to an average cost reduction of 32% per task. Graft operates as a terminal CLI tool that installs into a project, working with various coding agents. It dynamically updates the knowledge graph as code changes, ensuring the agent always works with a current understanding of the project's structure without manual intervention or additional model cost.

In essence, Graft provides a more sophisticated and efficient framework for AI agents to understand and interact with complex software projects. By creating and maintaining a structured, interconnected map of the codebase, it allows agents to navigate code intelligently, rather than exhaustively, saving time, reducing operational costs, and enabling more effective and reliable [[concepts/ai-powered-development|AI-powered development]]. This innovative approach offers a critical leap forward in making AI coding agents practical for real-world software engineering tasks.

### Video Description & Links
#### Description
Claude skills are how Graft plugs into Claude Code, so this is also a Claude skills guide: what are Claude skills, how to use Claude skills, and Claude skills explained, on a tool that cuts the tokens your agent burns searching your project.

Community with All Resources: https://ailabspro.io/?v=mHIdsR_VSrM

Graft: https://trailhq.com/graft

WHY YOUR AGENT BURNS TOKENS BEFORE IT CHANGES ANYTHING

- Coding agents search your project with terminal commands before every edit, and rarely find the right file on the first try
- Every one of those turns resends your whole conversation plus all the earlier tool results
- The context window grows, the model slows down, and you hit your usage limit sooner
- Quality drops too, because there is too much in the window to focus on one thing
- Worst on high end models like Opus, GPT Astra and [[concepts/muse-spark-12|Fable 5.1]], where one task already takes a while

WHAT IS CONTEXT ENGINEERING, AND WHY IT MATTERS HERE

- Context engineering is deciding what actually reaches the model instead of letting the agent discover it from scratch
- Graft's answer is a knowledge graph: a map of every part of your project and how the parts connect
- Each part is a node, each link is an edge, saved as a JSON file with a browser viewer you can explore
- Other tools use vector search, which matches by similarity, so "create an account" and "delete an account" both look right. The map records which part actually uses which

CLAUDE CODE SKILLS, HOOKS, AND HOW GRAFT INSTALLS

- How to add skills in Claude the easy way: the graft init command creates the skill inside your project folder for you
- So if you have looked at how to create Claude skills, this is the version where the tool generates it
- The skill tells the agent how to use Graft and which commands it has, which is what skills Claude loads at session start are for
- It also installs hooks, and the video explains what a hook is: a small script that runs on its own at a set point
- AI automation at the plumbing level: one hook hands over the instructions at session start, one attaches up to three matching locations to every prompt, one updates the map after Claude edits a file
- For a project you already started, graft build maps the code that is already there

HOW TO USE CLAUDE SKILLS LIKE THIS ONE IN A REAL PROJECT

- Claude skills tutorial style walkthrough: copy the install command, or paste their setup prompt into your agent and let it install everything
- Run init inside the folder you are working in, pick your coding agent, and the setup lands in that project
- Works with Claude Code and Codex, and other AI agents that use terminal commands or MCP
- There is an MCP option too. With hooks, Graft attaches locations to every message. With MCP, the agent asks only when it needs something. In their tests MCP got a few more answers right, the CLI was faster, and you get both
- No separate API key, so it runs on your normal [[entities/claude|Claude AI]] subscription

THE NUMBERS FROM THEIR BENCHMARK

- Best case, four times cheaper in token usage
- Across 162 runs: 60% less time, 46% fewer tool calls, 42% fewer tokens, 32% lower cost on average
- The saving comes from searching the agent no longer does, so it pays off more the bigger the project

WHAT HAPPENED WHEN WE BUILT A REAL APP WITH IT

- A booking and scheduling app, like Calendly but for independent providers, built with Fable 5.1 twice, once with Graft and once without
- With Graft: 39 minutes and about 31% of the context window. Without: 47 minutes and about 35%. Both apps worked
- The gap widened after that. A full landing page revamp took under 2 minutes, then Graft updated the map and showed its estimate of the tokens saved
- We started from a PRD and a claude.md tuned for long autonomous runs, and that template is in AI Labs Pro

THE HONEST LIMITATION

- Graft only maps code, so your PRD, area files and learnings.md are still read the old way
- We modified it for projects with multiple plan files, and that version is in AI Labs Pro

One of the best Claude skills is the one you never think about, and this is that kind of tool. If you build with AI tools every day and your agent eats your limit before it writes a line, this is the fix. More AI, Claude and Claude Code workflows every week.

0:00 Intro
0:55 Why agents burn tokens
3:34 What Graft does
6:23 How it works
8:17 Setup
10:04 Testing it

#ai #claude #ClaudeCode #aiautomation #claudeai #aitools #aiagents #claudeskills

#### Tags
`claude skills`, `skills claude`, `new claude skills`, `claude skills 2.0`, `top claude skills`, `claude code skills`, `claude skills 2026`, `claude skills tips`, `best claude skills`, `claude ai skills`, `claude skills setup`, `claude skills vs mcp`, `build claude skills`, `claude skills guide`, `learn claude skills`, `skills for claude`, `claude skills course`, `claude skills cowork`, `what is claude skills`, `what are claude skills`, `claude skills example`, `claude skill`, `claude agent skills`

#### URLs
- https://ailabspro.io/?v=mHIdsR_VSrM
- https://trailhq.com/graft

## Related Concepts
- [[concepts/graft|Graft]]
- [[concepts/ai-agent|AI Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_agent)
- [[concepts/context-layer|Context Layer]]
- [[concepts/large-codebases|Large Codebases]]
- [[concepts/graft|Cost Optimization]]
- [[concepts/performance-optimization|Performance Optimization]]
- [[concepts/god-mode-productivity|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_%28AI%29)
- [[concepts/vision-model|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- Knowledge Graph — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_graph)
- [[concepts/local-processing|Latency Reduction]]
- [[concepts/tool-calls|Tool Calls]]

## Related Entities
- [[entities/ai-labs|AI LABS]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_%28AI%29)
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- [[entities/graft|Graft]]
- Hedra — [Wikipedia](https://en.wikipedia.org/wiki/Polyhedron)