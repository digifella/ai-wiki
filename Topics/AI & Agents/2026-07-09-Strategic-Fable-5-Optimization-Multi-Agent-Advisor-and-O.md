---
wiki-ingested: true
title: "Strategic Fable 5 Optimization: Multi-Agent Advisor and Orchestrator Patterns"
date: 2026-07-09
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-07-09 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Strategic Fable 5 Optimization: Multi-Agent Advisor and Orchestrator Patterns
**Clip title:** You’re Using [[entities/fable|Fable]] 5 Wrong (Do This Instead)
**[[entities/tasia-custode|Author]] / channel:** [[concepts/prompt-based-modeling|Prompt Engineering]]
**URL:** https://www.youtube.com/watch?v=OA8vEleJkq4

### Summary
This video addresses the critical issue of efficiently utilizing powerful, often expensive, [[concepts/large-language-model-llm|large language models]] (LLMs) like [[concepts/claude-fable-5|Claude Fable 5]]. The main topic revolves around avoiding the common mistake of setting [[concepts/claude-fable-5|Fable 5]] to high or extra-high effort for every task, which quickly exhausts [[concepts/rate-limits|usage limits]] and increases costs. Instead, the video advocates for a strategic, multi-agent approach where Fable 5 is reserved for high-level planning and orchestration, while less expensive models handle the actual execution of sub-tasks.

Two primary architectural patterns are highlighted for maximizing Fable 5's value and minimizing cost. The first is the "Advisor" pattern, where a faster, lower-cost executor model (such as Sonnet 5 or [[entities/claude-opus-48|Opus 4.8]]) performs the bulk of the work. Fable 5 acts as an on-demand advisor, providing strategic [[concepts/recommendations|guidance]], reviewing plans, and offering [[concepts/feedback|feedback]] at crucial junctures. This ensures Fable 5's intelligence is leveraged for critical [[concepts/decision-making|decision-making]] without incurring its high cost for every mechanical step. The second pattern is the "Orchestrator" model, where Fable 5 serves as the central planner, breaking down complex queries or tasks into smaller, manageable sub-tasks. These sub-tasks are then "fanned out" to multiple, cheaper worker agents (again, like Sonnet 5 or Opus 4.8) which execute them in parallel. The results from these [[entities/employees|workers]] are then returned to Fable 5 for synthesis and final output.

The video demonstrates how to implement these patterns using both the Claude SDK and direct prompting. For SDK users, [[entities/anthropic-institute|Anthropic]]'s "Advisor tool" allows explicit pairing of an executor model (e.g., [[entities/claude-35-sonnet|Claude Sonnet]] 4-6) with a more intelligent advisor model (e.g., [[concepts/opus|Claude Opus]] 4-8 or Fable 5). Similarly, multi-agent setups can be configured with a powerful coordinator (Fable 5) and specialized worker agents (Sonnet 5) for tasks like web searching. A recommended [[concepts/skill|skill]] like "efficient-fable" further exemplifies this, decomposing work into research, [[concepts/coding|coding]], and testing lanes, and intelligently delegating to lighter agents while Fable handles strategy and review.

The key conclusion drawn from performance benchmarks (like [[concepts/swe-bench-verified|SWE-bench]] Pro and BrowseComp) is that these hybrid [[concepts/expertise-based-ai-assistants|multi-agent systems]] offer a significant advantage in terms of [[concepts/cost-efficient-solutions|cost-efficiency]]. By using Fable 5 as an advisor or orchestrator with cheaper models as executors/workers, users can achieve comparable or slightly lower accuracy at a substantially reduced cost per problem solved. This strategic allocation of model resources ensures that the most capable (and expensive) models are utilized for their core strengths in planning and [[concepts/complex-reasoning|complex reasoning]], while lighter models handle the iterative and less cognitively demanding aspects of a task, optimizing both performance and budget.

### Video Description & Links
#### Description
Fable 5 is a planning model, not a coding model, and treating it like both is how you burn an entire Max subscription in one [[concepts/session|session]]. This video breaks down the advisor and orchestrator patterns that let Fable 5 plan while Opus 4.8 executes, cutting your usage to a fraction of the cost with almost no drop in accuracy.

LINKS:
https://x.com/ClaudeDevs/status/2074606058128224365
https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool
https://github.com/anthropics/claude-cookbooks/blob/main/managed_agents/CMA_plan_big_execute_small.ipynb
https://x.com/ericzakariasson/status/2072639126034137444
https://platform.claude.com/docs/en/managed-agents/multi-agent
https://github.com/BuilderIO/skills/blob/main/skills/efficient-fable/README.md

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

#### Tags
`prompt engineering`, `Prompt Engineer`, `LLMs`, `AI`, `artificial Intelligence`, `Llama`, `GPT-4`, `fine-tuning LLMs`

#### URLs
- https://x.com/ClaudeDevs/status/2074606058128224365
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool
- https://github.com/anthropics/claude-cookbooks/blob/main/managed_agents/CMA_plan_big_execute_small.ipynb
- https://x.com/ericzakariasson/status/2072639126034137444
- https://platform.claude.com/docs/en/managed-agents/multi-agent
- https://github.com/BuilderIO/skills/blob/main/skills/efficient-fable/README.md
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
- [[concepts/multi-agent-systems|Multi-Agent Systems]] — [Wikipedia](https://en.wikipedia.org/wiki/Multi-Agent_Systems)
- [[concepts/orchestrator-pattern|Orchestrator Pattern]] — [Wikipedia](https://en.wikipedia.org/wiki/Orchestrator_Pattern)
- [[concepts/advisor-pattern|Advisor Pattern]] — [Wikipedia](https://en.wikipedia.org/wiki/Advisor_Pattern)
- [[concepts/cost-optimization|Cost Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Cost_Optimization)
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- [[concepts/strategic-resource-allocation|Strategic Resource Allocation]] — [Wikipedia](https://en.wikipedia.org/wiki/Strategic_Resource_Allocation)
- [[concepts/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- [[concepts/world-foundation-models|Agent Orchestration]] — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Orchestration)
- [[concepts/computational-efficiency|Computational Efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/Computational_Efficiency)
- [[concepts/model-selection-strategy|Model Selection Strategy]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Selection_Strategy)
- [[concepts/task-decomposition|Task Decomposition]] — [Wikipedia](https://en.wikipedia.org/wiki/Task_Decomposition)
- Hybrid Multi-Agent Systems — [Wikipedia](https://en.wikipedia.org/wiki/Hybrid_Multi-Agent_Systems)
- [[concepts/simultaneous-builds|Parallel Execution]] — [Wikipedia](https://en.wikipedia.org/wiki/Parallel_Execution)
- High-Level Planning — [Wikipedia](https://en.wikipedia.org/wiki/High-Level_Planning)
- Sub-task Delegation — [Wikipedia](https://en.wikipedia.org/wiki/Sub-task_Delegation)
- [[concepts/performance-benchmarks|Performance Benchmarks]] — [Wikipedia](https://en.wikipedia.org/wiki/Performance_Benchmarks)

## Related Entities
- [[entities/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- [[entities/claude-fable-5|Claude Fable 5]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Fable_5)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/anthropic|Anthropic]] — [Wikipedia](https://en.wikipedia.org/wiki/Anthropic)
- Claude SDK — [Wikipedia](https://en.wikipedia.org/wiki/Claude_SDK)
- [[entities/claude-sonnet|Claude Sonnet]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Sonnet)
- [[entities/claude-opus|Claude Opus]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Opus)
- SWE-bench Pro — [Wikipedia](https://en.wikipedia.org/wiki/SWE-bench_Pro)
- BrowseComp — [Wikipedia](https://en.wikipedia.org/wiki/BrowseComp)
- BuilderIO — [Wikipedia](https://en.wikipedia.org/wiki/BuilderIO)
- efficient-fable — [Wikipedia](https://en.wikipedia.org/wiki/efficient-fable)
- ClaudeDevs — [Wikipedia](https://en.wikipedia.org/wiki/ClaudeDevs)