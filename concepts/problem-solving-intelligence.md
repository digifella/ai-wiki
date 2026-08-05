---
type: concept
domain: ai-agents
tags:
  - "problem-solving"
  - "ai-reasoning"
  - "planning"
  - "wargaming"
  - "robustness"
  - "llm-capabilities"
aliases:
  - "Problem-Solving Intelligence"
  - "PSI"
  - "Agent Problem Solving"
  - "AI Planning Intelligence"
summary: Problem-Solving Intelligence is the capacity of agents to resolve complex challenges through structured reasoning, planning, and adaptation, with recent developments emphasizing wargaming to preserve robust decision-maki
updated: 2026-07-12
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Problem-Solving Intelligence

**[[concepts/problem-solving|Problem-Solving]] Intelligence** refers to the capacity of an agent—biological or artificial—to identify, analyze, and resolve complex challenges through structured [[concepts/reasoning|reasoning]], planning, and adaptation. In the context of [[concepts/large-language-models]], this involves moving beyond [[concepts/pattern-matching|pattern matching]] to genuine causal reasoning and multi-step strategy execution.

## Core Components

- **Decomposition**: Breaking complex problems into manageable sub-problems.
- **Planning**: Sequencing actions to achieve a goal while accounting for constraints.
- **Evaluation**: Assessing intermediate states and outcomes to adjust strategy.
- **[[concepts/robustness|Robustness]]**: Maintaining performance under distribution shifts or adversarial conditions.

## Recent Developments & Case Studies

### Wargaming for Robust AI Planning
Recent methodologies emphasize **wargaming** as a critical technique for preserving and enhancing the planning capabilities of advanced models, particularly as access to specific high-performing architectures (e.g., [[concepts/claude-fable-5|Claude Fable 5]]) becomes restricted or costly.

- **Context**: As availability of specific model versions changes, users face challenges in maintaining consistent high-level [[concepts/reasoning-capabilities|reasoning capabilities]].
- **Method**: Implementing wargaming simulations allows for the extraction and [[concepts/preservation|preservation]] of unique planning heuristics and robust [[concepts/decision-making|decision-making]] patterns.
- **Source Integration**: See [[lab-notes/2026-07-06-Preserving-Claude-Fable-5-Intelligence-Wargaming-for-Rob|Preserving Claude Fable 5 Intelligence: Wargaming for Robust AI Planning]] for detailed analysis on extracting [[concepts/fable-5-model|Fable 5]]'s planning intelligence via this "third move" strategy.

## Related Concepts

- Strategic Planning
- Adversarial [[concepts/robustness|Robustness]]
- [[concepts/multi-step-reasoning|Chain-of-Thought]] [[concepts/reasoning|Reasoning]]
- [[concepts/model-distillation]]

## References

- [Preserving Claude Fable 5 Intelligence: Wargaming for Robust AI Planning](https://www.youtube.com/watch?v=nuwlyQXrADg)
