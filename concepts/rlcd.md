---
type: concept
domain: ai-agents
tags:
  - "rlcd"
  - "calibrated-decisions"
  - "llm-training"
  - "ai-reliability"
  - "diogo-almeida"
  - "jev"
  - "typesafe-ai"
aliases:
  - "Reinforcement Learning from Calibrated Decisions"
summary: RLCD is a training paradigm that replaces human-preference optimization with decision-based calibration to improve LLM reliability and reduce hallucination.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-18T20:42:27+00:00" }
group: ai-futures-self-improvement
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# RLCD

**Reinforcement Learning from [[concepts/calibrated-decisions|Calibrated Decisions]]** (RLCD) represents a paradigm shift in [[concepts/large-language-model|large language model]] (LLM) training, moving away from traditional human-preference optimization toward decision-based calibration.

## Core Concepts
- **Shift in Objective**: Proposes replacing [[concepts/human-preferred-text|Human-Preferred-Text]] generation with Calibrated-Decisions to improve model reliability and reduce hallucination.
- **Key Proponent**: [[entities/diogo-almeida|Diogo Almeida]], co-inventor of the technique behind [[entities/chatgpt]], argues that current LLMs over-rely on text likelihood rather than decision correctness.
- **Mechanism**: Focuses on training models to make better choices in complex scenarios rather than merely mimicking human writing styles.

## Jev and TypeSafe.ai
Recent developments highlight the practical application of RLCD principles through [[entities/diogo-almeida|Diogo Almeida]]'s new venture, [[entities/typesafe-ai|TypeSafe.ai]].

- **[[concepts/system-one-model|Jev Model]]**: A new AI model explicitly designed as a "decision AI" rather than a traditional generative LLM.
- **[[concepts/zero-hallucinations|Zero Hallucinations]]**: Jev aims to eliminate hallucinations by prioritizing reliable decision-making over text generation.
- **Performance**: Described as fast and reliable, leveraging RLCD techniques to ensure accuracy in complex scenarios.
- **Documentation**: See [[lab-notes/2026-09-19-Jev-TypeSafe.ais-Fast-Reliable-Decision-AI-with-Zero-Hal|Jev: TypeSafe.ai's Fast, Reliable Decision AI with Zero Hallucinations]] for detailed analysis.

## Related Resources
- [[lab-notes/2026-09-17-Jev-RLCDs-Shift-from-Human-Preferred-Text-to-Calibrated|Jev: RLCD's Shift from Human-Preferred-Text-to-Calibrated]]
- [Jev: TypeSafe.ai's Fast, Reliable Decision AI with Zero Hallucinations](https://www.youtube.com/watch?v=2z-7pIj57f8)
