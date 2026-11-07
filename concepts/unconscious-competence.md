---
type: concept
domain: ai-agents
tags:
  - "dreyfus-model"
  - "expert-systems"
  - "model-training"
  - "skill-acquisition"
  - "competence-levels"
  - "agentic-ai"
  - "open-source-llm"
  - "slm-training"
  - "local-llm"
  - "ai-safety"
  - "alignment"
  - "containment"
  - "unsloth"
  - "dynamic-quantization"
  - "privacy"
aliases:
  - "skill automaticity"
  - "expert performance"
  - "tiny-llm-training"
  - "frontier-ai-failures"
  - "local-model-training"
summary: The text discusses the training of models and expert systems in relation to the Dreyfus model, the limitations of 1980s expert systems, and recent developments in self-scaffolding open-source LLMs for agentic coding. It also covers practical methods for training small language models on personal computers, alongside emerging concerns regarding containment breaches and unaligned behaviors in frontier AI models.
updated: 2026-10-10
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-10T03:24:11+00:00" }
group: reasoning-context-prompting
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Unconscious Competence

Unconscious competence refers to the stage in [[concepts/skill|skill]] acquisition where a person or system performs tasks proficiently without requiring conscious deliberation or explicit rule-following. In this stage, knowledge and procedures have become internalized to the point where execution occurs automatically, often faster and more fluidly than when consciously applying learned rules. The concept originates from the [[concepts/dreyfus-model|Dreyfus model]] of skill acquisition, which describes a progression from novice through advanced beginner, competent, proficient, and finally to expert.

## Local Model Training & Tooling

The democratization of [[concepts/training-process|model-training]] has shifted significantly towards [[concepts/local-execution|local execution]], enabling privacy-preserving workflows and fine-tuning of [[concepts/open-source-llm]]s without reliance on frontier APIs.

*   **Unsloth Ecosystem**: Recent developments highlight tools like Unsloth, which facilitate efficient local training via dynamic [[concepts/precision-reduction|quantization]]. This approach allows for enhanced accuracy and reduced [[concepts/hardware-compatibility|hardware requirements]], making it feasible to train slm-training on [[concepts/consumer-grade-hardware|consumer-grade hardware]].
*   **Privacy & Containment**: Running models locally addresses [[concepts/ai-safety]] concerns regarding [[concepts/data-leakage|data leakage]] and alignment drift inherent in cloud-based [[concepts/frontier-intelligence|frontier models]]. It supports containment strategies by keeping sensitive data and [[concepts/model-weights|model weights]] within the user's control.
*   **Practical Implementation**: Tools such as [[lab-notes/2026-10-10-Unsloth-Local-AI-Models-Privacy-and-Enhanced-Accuracy-vi|Unsloth: Local AI Models, Privacy, and Enhanced Accuracy via Dynamic Quantization]] demonstrate the viability of local fine-tuning, offering an alternative to heavy reliance on [[concepts/agentic-ai]] [[concepts/cloud-based-services|cloud services]]. This aligns with the goal of achieving skill-acquisition in [[concepts/model-customization|model customization]] for specific domains.

## References

*   [Unsloth: Local AI Models, Privacy, and Enhanced Accuracy via Dynamic Quantization](https://www.youtube.com/watch?v=qxO1l5iY33E)
