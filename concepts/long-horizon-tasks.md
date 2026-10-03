---
type: concept
domain: business-strategy
group: products-operations-business-economics
tags:
  - "long-horizon-tasks"
  - "llm-execution"
  - "error-reduction"
  - "cognizant-ai-lab"
  - "million-step-tasks"
  - "experience-memory-graph"
  - "graph-based-correction"
aliases:
  - "Million-Step LLM Tasks"
  - "Zero-Error Task Execution"
  - "EMG Error Correction"
summary: A discussion of the Cognizant AI Lab paper regarding the execution of million-step LLM tasks with zero errors, integrated with graph-based error correction mechanisms via Experience Memory Graphs.
updated: 2026-07-22
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
<!-- domain-nav -->
> domain-badge slug=business-strategy name=Business & Strategy

# Long Horizon Tasks

Long horizon tasks are complex operations that require language models to execute millions of sequential steps while maintaining accuracy and [[concepts/logical-consistency|logical consistency]]. These tasks represent a significant challenge in [[concepts/ai-system-architecture|AI system architecture]] because errors in early steps can propagate and compound throughout subsequent operations, making [[concepts/error-free-execution|error-free execution]] increasingly difficult as task length grows. The cumulative [[concepts/probability|probability]] of failure rises substantially with each additional step, creating a fundamental [[concepts/software-reliability|reliability]] problem for extended AI workflows.

## The Error Propagation Problem

The core difficulty with long horizon tasks stems from error propagation. In sequential processes, a single mistake early in the execution can alter the context or constraints for all downstream steps, leading to cascading failures. Unlike short-duration tasks where occasional errors may be tolerable or recoverable, long horizon tasks demand near-perfect consistency across millions of operations. This requirement becomes exponentially harder to achieve as task length increases, necessitating robust correction [[concepts/causes|mechanisms]] beyond standard sequential processing.

## Graph-Based Error Correction via EMG

Recent research introduces the **[[concepts/experience-memory-graph|Experience Memory Graph]] (EMG)** as a [[concepts/solution|solution]] to the limitations of loop-based execution in long-horizon [[concepts/scenarios|scenarios]]. This approach shifts from linear processing to [[concepts/graph-based-error-correction|graph-based error correction]], enabling agents to learn from past mistakes and apply one-shot corrections.

*   **Mechanism**: Utilizes a graph structure to store and retrieve error experiences, allowing agents to identify and correct deviations without re-executing entire sequences.
*   **Key Benefit**: Enables "one-shot" error correction, significantly reducing the computational overhead and latency associated with traditional retry loops.
*   **Research Source**: Developed by the University of Electronic [[concepts/science|Science]] and Technology of China, as detailed in the paper "Experience Memory Graph: [[concepts/one-shot-error-correction|One-Shot Error Correction]] for Agents."
*   **Integration**: See [[lab-notes/2026-07-22-AI-Agent-Graph-Based-Error-Correction-via-Experience-Mem|AI Agent Graph-Based Error Correction via Experience Memory Graph (EMG)]] for technical [[concepts/implementation-details|implementation details]].

## References

*   [From LOOPS to GRAPHS: AI Agents Learn Graph-Based Error Corrections](https://www.youtube.com/watch?v=yC9cd3gKaIc) (Discover AI)
