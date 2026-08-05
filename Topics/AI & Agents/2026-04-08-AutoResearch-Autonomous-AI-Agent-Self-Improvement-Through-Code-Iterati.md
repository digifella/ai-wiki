---
wiki-ingested: true
title: "AutoResearch: Autonomous AI Agent Self-Improvement Through Code Iteration"
created: "2026-04-08 09:10"
date: 2026-04-08
source: lab-summary
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## AutoResearch: Autonomous AI Agent Self-Improvement Through Code Iteration
**Clip title:** The only [[concepts/automated-code-modification|AutoResearch]] [[concepts/tutorial|tutorial]] you’ll ever need
**Author / channel:** [[entities/david|David]] Ondrej
**URL:** https://www.youtube.com/watch?v=uBWuKh1nZ2Y

### Summary
This video provides a clear explanation of AutoResearch, an [[concepts/open-source|open-source]]
tool developed by Andrej Karpathy, a renowned AI researcher and co-founder
of OpenAI. The central idea behind AutoResearch is to enable AI agents to
autonomously improve themselves. It operates on a continuous [[concepts/loop|loop]] where an
AI [[entities/agent|agent]] formulates a hypothesis, modifies its code based on this
hypothesis, trains or runs the updated code for a fixed time (typically 5
minutes per experiment), evaluates the results, and then decides whether to
"keep" the changes (committing them to version control) or "discard" them
(reverting to the previous state). This automated, [[concepts/iterative-refinement|iterative process]] aims
to accelerate research and optimization significantly.

A key aspect of AutoResearch's methodology is the "[[concepts/fixed-time-budget|fixed time budget]]" for
each experiment. By limiting every experiment to, for instance, 5 minutes,
all results become directly comparable, regardless of what changes the
agent made. This prevents the AI from simply "cheating" by training longer
and ensures that only genuinely better [[concepts/ideas|ideas]] or modifications lead to
improvement. The system is structured around three critical [[concepts/files|files]]:
`program.md` (where a human defines the overall goal, constraints, and
rules for the agent), `train.py` (the *only* file the AI agent is allowed
to modify), and `prepare.py` (which contains the objective metric and
evaluation logic, and cannot be touched by the AI to prevent it from
manipulating the success criteria).

The video emphasizes that the implications of AutoResearch extend far
beyond just training [[concepts/ai-models|AI models]]. This [[concepts/ai-recursive-self-improvement|recursive self-improvement]] loop can be
applied to nearly any domain where a clear, objective outcome can be
measured. Practical [[concepts/scenarios|use cases]] demonstrated include optimizing website
loading speeds, backtesting and refining trading strategies using objective
metrics like the Sharpe ratio, automating marketing A/B tests (e.g., for
emails, ad creatives, headlines), and enhancing software development
processes by improving code performance or [[concepts/fine-tuning|fine-tuning]] open-source AI
models for [[concepts/local-deployment|local deployment]]. The fundamental principle is: "If you can
score it, you can autoresearch it."

However, AutoResearch is not a universal [[concepts/solution|solution]]. It fails in scenarios
where "better" is subjective (e.g., brand [[concepts/design|design]], complex UX), or if the
evaluation loop is too slow or requires human intervention, negating the
"auto" aspect. The core skill in this new paradigm shifts from merely
executing tasks to "knowing what to measure"—that is, picking the right
objective metric and setting appropriate constraints. Karpathy envisions a
future akin to the [[concepts/seti|SETI]]@home project, but for [[concepts/ai-research|AI research]], where thousands
of [[concepts/agentic-ai|AI agents]] are distributed across numerous machines, working autonomously
to advance various fields simultaneously, effectively emulating an entire
research community. The video concludes with a live demonstration of
setting up an AutoResearch loop to optimize a website's loading [[concepts/speed|speed]],
quickly achieving significant performance improvements.

## Related Concepts
- [[concepts/autonomous-ai-agents|Autonomous AI Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/Autonomous_AI_Agents)
- [[concepts/self-improving-ai|Self-improving AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Self-improving_AI)
- [[concepts/ai-coding|Code iteration]] — [Wikipedia](https://en.wikipedia.org/wiki/Code_iteration)
- [[concepts/hypothesis-formulation|Hypothesis formulation]] — [Wikipedia](https://en.wikipedia.org/wiki/Hypothesis_formulation)
