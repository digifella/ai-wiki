---
wiki-ingested: true
title: "Claude Code v2.1.147: Deterministic Multi-Agent Workflow Orchestration Tool"
date: 2026-05-26
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: anthropic-claude
type: "source-summary"
aliases:
  - "lab-notes/2026-05-26-Claude-Code-v2.1.147-Deterministic-Multi-Agent-Workflow"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Claude Code v2.1.147: Deterministic Multi-Agent Workflow Orchestration Tool
**Clip title:** [[entities/anthropic-institute|Anthropic]] Just Dropped the Update Everyone's Been Waiting For
**Author / channel:** Ray Amjad
**URL:** https://www.youtube.com/watch?v=c0gVowvMR-g

### Summary
The video introduces a significant new feature in [[concepts/ai-assisted-coding|Claude Code]] v2.1.147: the [[concepts/workflow|workflow]] tool for deterministic [[concepts/multi-agent-ai-management|multi-agent orchestration]]. This update fundamentally alters how users can automate [[concepts/complex-tasks|complex tasks]]. Previously, Claude's main [[concepts/session|session]] acted as the "orchestrator," directly managing [[concepts/subagents|subagents]] and passing results back and forth. This older approach suffered from several drawbacks, including a "token tax" where every coordination decision consumed valuable [[concepts/tokens|tokens]], a lack of visibility into the workflow's real-time progress beyond a scrolling text wall, and the "forgetting" issue where the main session's context window would fill up, leading to less efficient and less deterministic behavior, especially with complex conditional logic.

The new workflow tool addresses these limitations by shifting the orchestration from the AI model itself to a dedicated code file (e.g., a [[concepts/javascript|JavaScript]] file). This "code wrapper" allows results to be passed directly between subagents, effectively eliminating the "token tax" and ensuring the main orchestrator's context window never fills. This change brings numerous benefits, including deterministic execution, enhanced visibility into each step of the process, automatic retries for failed agents, and the ability to pause and resume workflows. Users can now define phases, employ [[concepts/loops|loops]] and conditionals within their workflows, utilize schemas for structured outputs, and run agents in parallel or through pipelines, leading to more robust and efficient [[concepts/automation|automation]].

The video demonstrates how to create a workflow by defining a JavaScript file with a [[concepts/metadata|metadata]] section (name, description, phases) and schemas for [[concepts/json-structuring|structured data]]. Workflow logic leverages functions like `agent()` to spawn subagents, `parallel()` to run multiple agents concurrently, `pipeline()` to stream items through sequential stages, and `budget.remaining()` to control [[concepts/token-consumption|token consumption]] within loops. Examples include triaging Sentry issues, sweeping dead code, and personalizing outreach messages. This approach allows for complex processes where different agents, potentially using different models (e e.g., Haiku for research, [[concepts/opus|Opus]] for drafting), collaborate seamlessly, with results passed directly and efficiently.

In conclusion, the workflow tool is ideal for repeatable tasks, processes that "fan out" to many agents or stages, and tasks that are long enough to warrant resumability in case of failure. It offers a powerful shift where "the plan belongs in code, the model belongs on the work," providing developers with a structured, observable, and efficient way to build sophisticated AI-driven [[concepts/automations|automations]] within Claude Code. While a dedicated workflow [[concepts/creator|creator]] [[concepts/skill|skill]] can aid in development, the core [[concepts/value|value]] lies in the code-based, deterministic orchestration that overcomes the inherent limitations of purely model-driven agent coordination.

### Video Description & Links
#### Description
—— MY CLASSES ——

—— MY APPS ——

📲 Tensor AI: Never Miss the AI News
- on iOS: https://apps.apple.com/us/app/ai-news-tensor-ai/id6746403746
- on [[entities/android|Android]]: https://play.google.com/store/apps/details?id=app.tensorai.tensorai

—————

CONNECT WITH ME
🌍 My website/blog: https://www.rayamjad.com/

—————

Links Mentioned:
- Workflow Creator: https://github.com/ray-amjad/claude-code-workflow-creator

Timestamps:
00:00 - Introduction
01:21 - The Big Picture
03:18 - How Workflows Look
04:52 - Making a Workflow
06:21 - Workflow Demo
07:42 - Running the Workflow
09:17 - Workflow 2 Example
10:14 - Workflow 3 Example
11:10 - Result of Workflow 1
11:21 - Workflow 3 Demo
12:24 - Workflow Creator
12:46 - The Toolkit
13:31 - Budgets
13:49 - My Suggestion
14:24 - When to Workflow
15:04 - Conclusion

#### URLs
- https://apps.apple.com/us/app/ai-news-tensor-ai/id6746403746
- https://play.google.com/store/apps/details?id=app.tensorai.tensorai
- https://www.rayamjad.com/
- https://github.com/ray-amjad/claude-code-workflow-creator

## Related Concepts
- [[concepts/deterministic-multi-agent-workflow-orchestration-tool|Deterministic Multi-Agent Workflow Orchestration]]
- [[concepts/claude-code-v21147|Claude Code v2.1.147]]
- [[concepts/session-management|Session Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Session_%28computer_networking%29)
- [[concepts/context-window|Context Window Preservation]]
- [[concepts/ai-agent-execution|Parallel Agent Execution]]
- [[concepts/structured-output|Structured Output Schemas]]

## Related Entities
- [[entities/ray-amjad|Ray Amjad]]
- [[entities/anthropic|Anthropic]] — [Wikipedia](https://en.wikipedia.org/wiki/Anthropic)
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_%28AI%29)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- Haiku — [Wikipedia](https://en.wikipedia.org/wiki/Haiku)
- [[entities/opus|Opus]]