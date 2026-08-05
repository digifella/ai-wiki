---
type: concept
domain: ai-agents
tags:
  - "multi-agent-systems"
  - "design-patterns"
  - "agent-orchestration"
  - "cost-optimization"
  - "decision-support"
  - "iterative-refinement"
aliases:
  - "Advisory Agent Pattern"
  - "Strategic Guidance Pattern"
  - "Analysis-Execution Decoupling"
summary: The Advisor Pattern is a multi-agent design where specialized agents provide recommendations and critiques to an orchestrator, separating analytical evaluation from task execution to improve cost efficiency and workflow
updated: 2026-07-11
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Advisor Pattern

The **Advisor Pattern** is a design pattern in [[concepts/expertise-based-ai-assistants|multi-agent systems]] where [[concepts/specialized-sub-agents|specialized agents]] provide [[concepts/recommendations|recommendations]], critiques, or strategic guidance to a primary Orchestrator or [[concepts/decision-making|decision-making]] agent. Unlike direct execution agents, advisors do not perform the final action but influence the trajectory of the workflow through analysis and suggestion.

## Core Mechanics

- **Decoupling Analysis from Execution**: Separates the [[concepts/cognitive-load|cognitive load]] of evaluation from the mechanical load of task completion.
- **[[concepts/iterative-learning|Iterative Refinement]]**: Advisors can review outputs from Executor agents and suggest improvements before finalization.
- **[[concepts/cost-efficient-solutions|Cost Efficiency]]**: Allows the use of smaller, cheaper models for advisory roles while reserving large, expensive models (e.g., [[entities/claude-fable-5]]) for [[concepts/complex-reasoning|complex reasoning]] or final synthesis.

## Integration with Multi-Agent Systems

In [[concepts/complex-workflows|complex workflows]], the Advisor Pattern often works in tandem with the [[concepts/orchestrator-pattern]]. The orchestrator manages the [[concepts/flow|flow]], while advisors provide domain-specific insights. Recent optimizations highlight the [[concepts/value|importance]] of structuring these interactions to avoid redundant token usage and latency.

### Strategic Fable 5 Optimization

Recent analyses indicate that inefficient use of high-capability models like [[entities/claude-fable-5]] often stems from treating them as monolithic [[concepts/central-processing-units|processors]] rather than integrating them into structured [[concepts/multi-agent-frameworks|multi-agent frameworks]].

- **Key Insight**: Direct [[concepts/prompting|prompting]] of powerful models for every step is suboptimal. Instead, using a multi-agent structure with dedicated advisors reduces [[concepts/context-window|context window]] pressure and improves coherence.
- **Source Integration**: See [[lab-notes/2026-07-09-Strategic-Fable-5-Optimization-Multi-Agent-Advisor-and-Orchestrator|Strategic Fable 5 Optimization: Multi-Agent Advisor and Orchestrator Patterns]] for detailed breakdowns of this optimization strategy.
- **Implementation**:
  - Use [[concepts/lightweight-models|lightweight models]] for initial drafting or data gathering.
  - [[concepts/deployment|Deploy]] the Advisor Pattern to critique drafts using the high-capability model.
  - Finalize with the orchestrator synthesizing the advised improvements.

## Benefits

- **Improved Accuracy**: Specialized advisors reduce [[concepts/data-hallucination|hallucination]] rates by focusing on narrow domains.
- **Scalability**: Easier to swap out specific advisors without redesigning the entire system.
- **[[concepts/opacity|Transparency]]**: Provides an audit trail of *why* a decision was made (via advisor [[concepts/notes|notes]]).

## References

- [Strategic Fable 5 Optimization: Multi-Agent Advisor and Orchestrator Patterns](https://www.youtube.com/watch?v=OA8vEleJkq4)
