---
type: concept
domain: ai-agents
tags:
  - "one-shot-learning"
  - "error-correction"
  - "experience-memory-graph"
  - "agent-reliability"
  - "graph-based-learning"
aliases:
  - "One-Shot Error Correction for Agents"
  - "Experience Memory Graph Framework"
summary: "One-Shot Error Correction enables AI agents to rectify execution errors using a single feedback instance via an Experience Memory Graph, eliminating the need for iterative retraining."
updated: 2026-07-22
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# One-Shot Error Correction

**One-Shot [[concepts/bug-fixing|Error Correction]]** refers to the capability of an [[concepts/ai-system|AI system]] to identify and rectify errors during execution using only a single instance of [[concepts/feedback|feedback]] or [[concepts/experience|experience]], without requiring iterative retraining or extensive historical data accumulation. This approach is critical for real-time [[concepts/agent-reliability|agent reliability]] and [[concepts/acting|adaptive behavior]].

## Core Mechanisms

*   **[[concepts/experience-memory-graph|Experience Memory Graph]] (EMG):** A novel architecture where agents store past error-correction pairs in a graph structure, enabling rapid [[concepts/document-retrieval|retrieval]] and application of solutions to similar future errors.
*   **Graph-Based [[concepts/learning|Learning]]:** Shifts from loop-based iterative correction to graph-based navigation of error states, allowing agents to "learn" correction paths dynamically.
*   **One-Shot Adaptation:** The system applies the retrieved correction immediately upon detecting a matching error pattern, minimizing latency and computational overhead.

## Recent Developments

*   **University of Electronic [[concepts/science|Science]] and Technology of [[entities/china|China]] Research:** Introduced the "Experience [[concepts/memory|Memory]] Graph: One-Shot Error Correction for Agents" framework [[lab-notes/2026-07-22-AI-Agent-Graph-Based-Error-Correction-via-Experience-Mem|AI Agent Graph-Based Error Correction via Experience Memory Graph (EMG)]].
*   **From [[concepts/loops|LOOPS]] to GRAPHS:** Emphasizes the transition from traditional iterative [[concepts/loop|loop]] corrections to static graph-based [[concepts/memory-structures|memory structures]] for more efficient error handling.
*   **Key Insight:** Agents can generalize correction strategies across different contexts by leveraging the topological [[concepts/relationships|relationships]] within the Experience Memory Graph.

## References

*   [AI Agent Graph-Based Error Correction via Experience Memory Graph (EMG)](https://www.youtube.com/watch?v=yC9cd3gKaIc)
