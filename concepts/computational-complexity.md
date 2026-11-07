---
type: concept
domain: maths-logic-crypto
tags:
  - "computational-complexity"
  - "complexity-classes"
  - "quantum-computing"
  - "bqp"
  - "reductions"
  - "lower-bounds"
  - "theoretical-cs"
  - "resource-requirements"
  - "transformers"
  - "state-space-models"
  - "recurrent-ai"
aliases:
  - "Computational Complexity Theory"
  - "Complexity Theory"
summary: Computational complexity classifies problems by resource requirements and relates classes via reductions, with quantum complexity (BQP) theoretically offering advantages over classical P but facing significant practical challenges. Recent architectural shifts explore alternatives to Transformers due to their quadratic computational costs.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T02:07:30+00:00" }
group: mathematical-reasoning-proof
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Computational Complexity

**[[concepts/complexity-classes|Computational complexity]]** is a branch of [[concepts/theoretical-computer-science|theoretical computer science]] that focuses on classifying [[concepts/computational-problems|computational problems]] according to their inherent difficulty and relating these classes to each other. It quantifies the resources (time, space, etc.) required to solve problems using [[concepts/algorithms|algorithms]].

## Core Concepts

*   **Complexity Classes**: Formal sets of problems grouped by resource requirements.
    *   P (complexity): Problems solvable in polynomial time by a deterministic [[concepts/turing-machine|Turing machine]].
    *   NP (complexity): Problems verifiable in polynomial time.
    *   BQP: Problems solvable in polynomial time by a quantum computer with bounded error.
*   **Reductions**: Methods for transforming one problem into another to prove relative difficulty (e.g., [[concepts/np-complete|NP-completeness]]).
*   **Lower Bounds**: Theoretical limits on the minimum resources required to solve a problem.

## Architectural Complexity & AI Models

The application of [[concepts/wikilinkcomputational-complexity-theory|complexity theory]] extends to modern AI model architectures, particularly regarding efficiency and scalability.

*   **Transformer Limitations**: While [[concepts/transformers]] have dominated AI since 2017 (e.g., [[entities/chatgpt|ChatGPT]], [[concepts/claude-ai|Claude]], [[concepts/gemini|Gemini]]), they suffer from inherent weaknesses, notably **quadratic computational cost** relative to [[concepts/context-length|sequence length]].
*   **Alternative Architectures**: Research is actively exploring **[[concepts/ssm|State-Space Models]]** and **Recurrent AI Model Architectures** to mitigate these resource requirements.
*   **Resource Trade-offs**: These alternatives aim to balance performance with linear or sub-quadratic complexity, addressing the scalability bottlenecks identified in [[lab-notes/2026-10-01-Beyond-Transformers-Exploring-State-Space-and-Recurrent|Beyond Transformers: Exploring State-Space and Recurrent AI Model Architectures]].

## References

*   [Beyond Transformers: Exploring State-Space and Recurrent AI Model Architectures](https://www.youtube.com/watch?v=GSAOe0JNt94)
