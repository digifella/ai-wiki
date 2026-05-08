---
wiki-ingested: true
title: "AutoResearch Autonomous AI Agent Self-Improvement Through Code Iteration"
created: "2026-04-10 14:05"
date: 2026-04-10
source: lab-summary
provider:
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: ai-foundations-concepts
---
## AutoResearch: Autonomous AI Agent Self-Improvement Through Code Iteration
**Clip title:** The only [[entities/autoresearch|AutoResearch]] [[concepts/tutorial|tutorial]] you’ll ever need
**Author / channel:** [[entities/david|David]] Ondrej
**URL:** https://www.youtube.com/watch?v=uBWuKh1nZ2Y

### Summary
This video provides a clear explanation of [[concepts/autoresearch|AutoResearch]], an [[concepts/open-source|open-source]]
tool developed by [[entities/andrej-karpathy|Andrej Karpathy]], a renowned AI researcher and co-founder
of [[entities/openai|OpenAI]]. The central idea behind [[entities/autoresearch|AutoResearch]] is to enable [[concepts/ai-agents|AI agents]] to
autonomously improve themselves. It operates on a continuous [[concepts/loop|loop]] where an
[[concepts/ai-agent|AI agent]] formulates a hypothesis, modifies its code based on this
hypothesis, trains or runs the updated code for a fixed time (typically 5
minutes per experiment), evaluates the results, and then decides whether to
"keep" the changes (committing them to version control) or "discard" them
(reverting to the previous state). This automated, [[concepts/iterative-refinement|iterative process]] aims
to accelerate research and [[concepts/optimization|optimization]] significantly.

A key aspect of [[concepts/automated-code-modification|AutoResearch]]'s methodology is the "[[concepts/fixed-time-budget|fixed time budget]]" for
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
beyond just training [[concepts/ai-models|AI models]]. This [[concepts/recursive-self-improvement|recursive self-improvement]] loop can be
applied to nearly any domain where a clear, objective outcome can be
measured. Practical [[concepts/use-cases|use cases]] demonstrated include optimizing website
loading speeds, [backtesting](https://en.wikipedia.org/wiki/Backtesting) and refining trading strategies using objective
metrics like the [Sharpe ratio](https://en.wikipedia.org/wiki/Sharpe_Ratio), automating marketing A/B tests (e.g., for
emails, ad creatives, headlines), and enhancing software development
processes by improving code performance or [[concepts/fine-tuning|fine-tuning]] [[concepts/open-source-ai|open-source AI]]
models for [[concepts/local-deployment|local deployment]]. The fundamental principle is: "If you can
score it, you can autoresearch it."

However, AutoResearch is not a universal [[concepts/solution|solution]]. It fails in [[concepts/scenarios|scenarios]]
where "better" is subjective (e.g., brand [[concepts/design|design]], complex UX), or if the
evaluation loop is too slow or requires human intervention, negating the
"auto" aspect. The core skill in this new paradigm shifts from merely
executing tasks to "knowing what to measure"—that is, picking the right
objective metric and setting appropriate constraints. Karpathy envisions a
future akin to the [[concepts/seti|SETI]]@home project, but for [[concepts/ai-research|AI research]], where thousands
of AI [[concepts/agents|agents]] are distributed across numerous machines, working autonomously
to advance various fields simultaneously, effectively emulating an entire
research community. The video concludes with a live demonstration of
setting up an AutoResearch loop to optimize a website's loading [[concepts/speed|speed]],
quickly achieving significant performance improvements.

## Related Concepts
- [[concepts/autonomous-ai-agent|Autonomous AI Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Autonomous_AI_Agent)
- [[concepts/ai-coding|Code Iteration]] — [Wikipedia](https://en.wikipedia.org/wiki/Code_Iteration)
- [[concepts/self-improvement|Self-Improvement]] — [Wikipedia](https://en.wikipedia.org/wiki/Self-Improvement)
- [[concepts/self-improvement|Recursive Self-Improvement]] — [Wikipedia](https://en.wikipedia.org/wiki/Recursive_Self-Improvement)
- [[concepts/iterative-refinement|Iterative Refinement]] — [Wikipedia](https://en.wikipedia.org/wiki/Iterative_Refinement)
- [[concepts/ai-workflow|Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Optimization)
- [[concepts/fixed-time-budget|Fixed Time Budget]] — [Wikipedia](https://en.wikipedia.org/wiki/Fixed_Time_Budget)
- [Objective Metrics](https://en.wikipedia.org/wiki/Objective_Metrics) — [Wikipedia](https://en.wikipedia.org/wiki/Objective_Metrics)
- A/B [[concepts/testing|Testing]] — [Wikipedia](https://en.wikipedia.org/wiki/A/B_Testing)
- Backtesting — [Wikipedia](https://en.wikipedia.org/wiki/Backtesting)
- Sharpe Ratio — [Wikipedia](https://en.wikipedia.org/wiki/Sharpe_Ratio)
- [[concepts/fine-tuning|Fine-tuning]] — [Wikipedia](https://en.wikipedia.org/wiki/Fine-tuning)
- [[concepts/local-deployment|Local Deployment]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Deployment)
- [[concepts/open-source|Open-source Software]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-source_Software)
- [[concepts/claude-notebooklm-integration|Automated Research]] — [Wikipedia](https://en.wikipedia.org/wiki/Automated_Research)
- [[concepts/machine-learning|Machine Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Machine_Learning)
