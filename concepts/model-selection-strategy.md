---
type: concept
domain: ai-agents
tags:
  - "model-selection"
  - "llm-routing"
  - "cost-optimization"
  - "multi-agent"
  - "orchestrator-pattern"
aliases:
  - "LLM Routing Strategy"
  - "Model Tiering"
  - "Dynamic Model Assignment"
summary: Model Selection Strategy is a systematic approach to choosing appropriate LLMs for specific tasks by balancing cost, latency, and capability through techniques like hierarchical routing and multi-agent orchestration.
updated: 2026-07-11
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Model Selection Strategy

**Model Selection Strategy** refers to the systematic approach of choosing the most appropriate [[concepts/large-language-model]] (LLM) or combination of models for a specific task, balancing factors such as cost, latency, accuracy, and capability. Effective strategies often involve hierarchical routing, where simpler tasks are handled by smaller, cheaper models, while [[concepts/complex-reasoning|complex reasoning]] is reserved for larger, more expensive models.

## Core Principles

- **[[concepts/cost-efficient-solutions|Cost-Efficiency]]**: Avoid using high-capability models for trivial tasks. Use [[concepts/small-language-models]] or specialized [[concepts/open-standard-protocols|APIs]] for classification, formatting, or simple extraction.
- **Capability Matching**: Align model capabilities with task complexity. Use [[concepts/multi-step-reasoning|Chain-of-Thought]] [[concepts/reasoning|reasoning]] only when necessary.
- **Latency Optimization**: Select models based on response time requirements. Real-time applications may prioritize [[concepts/speed|speed]] over marginal accuracy gains.
- **Dynamic Routing**: Implement Router Models or heuristic-based systems to dynamically assign tasks to the optimal model tier.

## Multi-Agent and Orchestrator Patterns

Recent optimizations highlight the use of multi-agent architectures to refine model selection and execution:

- **Advisor-[[concepts/orchestrator-pattern|Orchestrator Pattern]]**: Utilizes a lightweight "advisor" model to analyze task requirements and select the appropriate "executor" model or agent. This reduces the computational load on expensive models like [[entities/claude]] or [[entities/gemini]] by pre-filtering and structuring inputs.
- **Strategic [[concepts/claude-fable-5|Fable 5]] Optimization**: Specific optimizations for high-end models (e.g., [[concepts/fable-5-model|Fable 5]]) involve avoiding direct, unstructured queries. Instead, use multi-agent patterns where an orchestrator breaks down complex prompts into manageable sub-tasks, assigning them to [[concepts/specialized-sub-agents|specialized agents]]. This prevents [[concepts/context-window|context window]] waste and improves coherence. See [[lab-notes/2026-07-09-Strategic-Fable-5-Optimization-Multi-Agent-Advisor-and-Orchestrator|Strategic Fable 5 Optimization: Multi-Agent Advisor and Orchestrator Patterns]] for detailed implementation [[concepts/notes|notes]].
- **[[concepts/iterative-learning|Iterative Refinement]]**: Use a smaller model for initial drafts and a larger model for critique and refinement, rather than relying on a single large model for end-to-end generation.

## Implementation Tactics

1. **[[concepts/tiered-llm-strategy|Tiered Model Architecture]]**:
   - **Tier 1 (Fast/Cheap)**: [[concepts/embedding-models]] or small LLMs for intent classification and routing.
   - **Tier 2 (Balanced)**: [[concepts/intermediate-model|Mid-sized models]] for standard generation and [[concepts/summarization|summarization]].
   - **Tier 3 (High-Capability)**: Large models for complex reasoning, [[concepts/code-generation|code generation]], and creative tasks.

2. **[[concepts/prompt-based-modeling|Prompt Engineering]] for Selection**:
   - Design prompts that explicitly request the model to self-assess complexity and suggest delegation if necessary.
   - Use structured outputs (JSON/XML) to facilitate programmatic routing between models.

3. **[[concepts/caching|Caching]] and Reuse**:
   - Implement Semantic Caching to avoid redundant calls to expensive models for similar queries.

## References

- [Strategic Fable 5 Optimization: Multi-Agent Advisor and Orchestrator Patterns](https://www.youtube.com/watch?v=OA8vEleJkq4)
