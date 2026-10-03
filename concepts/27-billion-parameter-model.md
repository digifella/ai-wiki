---
type: concept
domain: ai-agents
tags:
  - "27b-models"
  - "model-efficiency"
  - "structured-output"
  - "decision-models"
  - "parameter-count"
aliases:
  - "27 billion parameter model"
  - "27B model"
summary: A class of artificial intelligence models with approximately 27 billion trainable parameters that balance computational efficiency with high-capacity reasoning for specialized tasks.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-02T21:50:20+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# 27 billion-parameter model

A class of [[concepts/ai-models|artificial intelligence models]] characterized by approximately 27 billion [[concepts/total-parameters|trainable parameters]]. These models balance [[concepts/algorithm-efficiency|computational efficiency]] with high-capacity [[concepts/reasoning|reasoning]], often deployed for specialized tasks requiring structured output rather than open-ended generation.

## Key Implementations

### Clef 27B

**[[lab-notes/2026-10-03-Clef-27B-Multimodal-AI-Decision-Model-for-Structured-Inp|Clef 27B: Multimodal AI Decision Model for Structured Input Analysis]]**

Developed by Cloudflare, [[concepts/vector-space-model|Clef 27B]] is a multimodal [[concepts/decision-model|decision model]] designed for rapid, structured [[concepts/decision-making|decision-making]]. It diverges from traditional [[concepts/demystifying-llms|Large Language Models]] (LLMs) that generate text by instead returning calibrated probabilities for specific queries.

*   **Architecture:** 27 billion parameters.
*   **[[concepts/pointing-mechanisms|Input Modalities]]:** Text, images, video, and JSON data.
*   **Output Format:** Structured probabilities rather than natural language text.
*   **Primary Use Case:** Decision-making tasks requiring [[concepts/high-speed-inference|high-speed inference]] and precise [[concepts/confidence-calibration|confidence calibration]].
*   **Analysis Source:** [Clef 27B: Multimodal AI Decision Model for Structured Input Analysis](https://www.youtube.com/watch?v=LJIm1EL4X6Y) by [[entities/fahd-mirza|Fahd Mirza]].

## Related Concepts

*   [[concepts/parameter-count]]
*   [[concepts/multimodal-ai]]
*   [[concepts/structured-output]]
*   [[concepts/calibrated-probabilities]]
