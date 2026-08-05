---
wiki-ingested: true
title: "Claude's Dynamic Workflows: Solving AI Inefficiencies with Custom Harnesses"
date: 2026-06-04
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: applied-ai-workflows
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-04 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Claude's Dynamic Workflows: Solving AI Inefficiencies with Custom Harnesses
**Clip title:** [[concepts/claude-ai|Claude]] Can Now Build Its Own [[concepts/harness|Harness]]... For Every Task
**Author / channel:** [[concepts/prompt-based-modeling|Prompt Engineering]]
**URL:** https://www.youtube.com/watch?v=l5rae4LMKBc

### Summary
This video introduces the concept of "Dynamic Workflows" in [[concepts/ai-assisted-coding|Claude Code]], a significant advancement in how [[concepts/ai-models|AI models]], particularly Claude, approach diverse tasks. Traditionally, AI models designed for coding tasks are often forced to use a single, generic "harness" for all types of work, including knowledge-based and non-coding tasks like [[concepts/writing|writing]] resumes or business plans. This monolithic approach leads to several inefficiencies, such as "agentic laziness" (quitting early), "self-preferential bias" (grading its own work too kindly), and "goal drift" (losing sight of the original brief), all stemming from everything operating within a single, overflowing [[concepts/context-window|context window]].

Dynamic workflows offer a [[concepts/solution|solution]] by enabling [[entities/claude-opus-4|Claude Opus 4]].8 to write and orchestrate a custom, multi-[[entities/agent|agent]] "harness" on the fly for each specific task. This approach ensures that every piece of work benefits from a purpose-built [[concepts/structure|structure]], tailored to its unique requirements. A [[concepts/workflow|workflow]] is fundamentally a script that manages a team of Claudes, allowing for the spawning of [[concepts/sub-agents|sub-agents]], [[concepts/parallel-processing|parallel processing]] of tasks across clean, isolated contexts, and streaming items through chains of stages. Unlike static workflows that are generic and built ahead of time, dynamic workflows adapt to the task at hand, offering precise and context-aware solutions.

The video highlights six key patterns that define how dynamic workflows operate. These include "Classify, then act," where an agent routes tasks to [[concepts/specialized-sub-agents|specialized sub-agents]]; "Fan out, then synthesize," which splits work across clean contexts and merges results, preventing bias contamination; "Adversarial [[concepts/verification|verification]]," where a separate "critic" agent rigorously checks the output of a worker agent against a rubric; "Generate, then filter," which produces numerous [[concepts/ideas|ideas]] and then selects the best ones; "Tournament," where agents compete on the same task, with a judge selecting winners through rounds; and "Loop until done," which allows the workflow to decide when a task is truly finished based on conditions, not fixed passes, thereby combating agentic laziness. These patterns are designed to overcome the inherent limitations of static, one-size-fits-all [[concepts/agentic-ai|AI agents]].

In practice, users can initiate a dynamic workflow simply by asking Claude to "create a workflow" or use a keyword like "ultracode" in their prompt, potentially capping the token cost. The system then automatically dispatches a custom workflow. Examples of tasks suited for dynamic workflows include ranking resumes, tearing apart a [[concepts/business-plan|business plan]] from multiple angles (using adversarial strategy), mining past sessions for rules, or identifying root [[concepts/causes|causes]] from large volumes of [[concepts/communication|communication]] data. These are typically non-coding tasks that demand nuanced understanding and complex orchestration.

The overarching takeaway is that dynamic workflows represent a new starting point for discovery in AI, moving beyond simple [[concepts/code-generation|code generation]] to tackle more complex and "messy" problems. By allowing AI to autonomously build and manage specialized workflows, it promises more effective and reliable results across a broader spectrum of [[concepts/software|applications]]. However, users are cautioned to consider whether a task genuinely requires the extensive [[concepts/compute|compute]] of a dynamic workflow, as they can be more token-intensive than simpler [[concepts/agentic-patterns|agentic patterns]].

### Video Description & Links
#### Description
In this video I explain why using one coding harness (like Claude Code/Codex) for all [[concepts/knowledge-work|knowledge work]] breaks down as the context window fills, leading to agentic laziness, self-preferential bias, and goal drift. I show how dynamic workflows solve this by splitting work into clean contexts via a [[concepts/javascript|JavaScript]] workflow that can spawn agents, run them in parallel, and use pipelines, choose models, resume after interruption, and optionally isolate work trees.

Anthropic Blogpost: https://claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code
Dynamic Workflow: https://youtu.be/WnmVGVOPtrA

My [[concepts/tone|voice]] to text App: whryte.com
Website: https://engineerprompt.ai/
RAG Beyond Basics Course:
https://prompt-s-site.thinkific.com/courses/rag
Signup for Newsletter, localgpt:
https://tally.so/r/3y9bb0

Let's Connect: 
🦾 Discord: https://discord.com/invite/t4eYQRUcXB
☕ Buy me a Coffee: https://ko-fi.com/promptengineering
|🔴 Patreon: https://www.patreon.com/PromptEngineering
💼[[concepts/consulting|Consulting]]: https://calendly.com/engineerprompt/consulting-call
📧 Business [[entities/contact|Contact]]: engineerprompt@[[entities/gmail|gmail]].com
Become Member: http://tinyurl.com/y5h28s6h

💻 Pre-configured localGPT VM: https://bit.ly/localGPT (use Code: PromptEngineering for 50% off).  

Signup for Newsletter, localgpt:
https://tally.so/r/3y9bb0

00:00 Why One Harness Fails
02:58 Static vs Dynamic Example
03:53 Anthropic Patterns Overview
04:19 Pattern Classify and Act
04:52 Pattern Fan Out Synthesize
05:29 Pattern Critic and Rubric
06:08 Pattern Generate and Filter
06:44 Pattern Tournament Bracket
07:36 Pattern Loop Until Done
12:03 [[concepts/design|Design]] Considerations and Costs

#### Tags
`Claude Code`, `Codex`, `AI agents`, `dynamic workflows`, `Claude workflows`, `Anthropic workflows`, `harness patterns`, `custom harness`, `one harness fails`, `agent workflows`, `coding agents`, `AI coding tools`, `Claude Opus 4.8`, `agentic workflows`, `multi agent systems`, `AI automation`, `workflow automation`, `context window`, `context engineering`, `AI context management`, `AI agent patterns`, `LLM agents`, `LLM workflows`, `AI productivity`, `Claude Code tutorial`, `AI task automation`, `prompt engineering`

#### URLs
- https://claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code
- https://youtu.be/WnmVGVOPtrA
- https://engineerprompt.ai/
- https://prompt-s-site.thinkific.com/courses/rag
- https://tally.so/r/3y9bb0
- https://discord.com/invite/t4eYQRUcXB
- https://ko-fi.com/promptengineering
- https://www.patreon.com/PromptEngineering
- https://calendly.com/engineerprompt/consulting-call
- http://tinyurl.com/y5h28s6h
- https://bit.ly/localGPT

## Related Concepts
- [[concepts/dynamic-workflows|Dynamic Workflows]] — [Wikipedia](https://en.wikipedia.org/wiki/Dynamic_Workflows)
- [[concepts/ai-inefficiencies|AI Inefficiencies]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Inefficiencies)
- Custom Harnesses — [Wikipedia](https://en.wikipedia.org/wiki/Custom_Harnesses)
- Agentic Laziness — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_Laziness)
- Self-Preferential Bias — [Wikipedia](https://en.wikipedia.org/wiki/Self-Preferential_Bias)
- Goal Drift — [Wikipedia](https://en.wikipedia.org/wiki/Goal_Drift)
- [[concepts/multi-agent-orchestration|Multi-Agent Orchestration]] — [Wikipedia](https://en.wikipedia.org/wiki/Multi-Agent_Orchestration)
- Context Isolation — [Wikipedia](https://en.wikipedia.org/wiki/Context_Isolation)
- Adversarial Verification — [Wikipedia](https://en.wikipedia.org/wiki/Adversarial_Verification)
- Fan-Out Synthesis — [Wikipedia](https://en.wikipedia.org/wiki/Fan-Out_Synthesis)
- Tournament Selection — [Wikipedia](https://en.wikipedia.org/wiki/Tournament_Selection)
- [[concepts/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)

## Related Entities
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- [[entities/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- [[entities/claude|Claude]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude)
- [[entities/claude-opus-48|Claude Opus 4.8]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Opus_4.8)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)