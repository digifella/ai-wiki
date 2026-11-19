---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "ai-calibration"
  - "uncertainty-quantification"
  - "epistemic-uncertainty"
  - "aleatoric-uncertainty"
  - "temperature-scaling"
  - "platt-scaling"
  - "self-aware-ai"
  - "reliable-decision-making"
aliases:
  - "model calibration"
  - "probability alignment"
  - "confidence alignment"
summary: Confidence calibration aligns an AI model's predicted probability of correctness with its actual empirical accuracy to ensure reliable decision-making.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-27T21:04:00+00:00" }
group: data-pipelines-sync-storage
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Confidence Calibration

**Confidence calibration** refers to the alignment between an AI model's predicted [[concepts/probability|probability]] of [[concepts/accuracy|correctness]] and its actual empirical accuracy. A well-calibrated model outputs a 70% [[concepts/confidence-score|confidence score]] only when it is correct 70% of the time. This concept is foundational for developing [[concepts/self-aware-ai]] and ensuring reliable [[concepts/decision-making|decision-making]] in high-stakes environments.

## Core Principles
*   **Epistemic vs. Aleatoric Uncertainty**: Distinguishing between uncertainty due to lack of data (epistemic) and inherent noise in the data (aleatoric).
*   **Self-Doubt [[concepts/causes|Mechanisms]]**: Implementing mathematical frameworks that allow models to express "I don't know" rather than forcing a confident but incorrect [[concepts/user-attention-prediction|prediction]].
*   **Post-Hoc Calibration**: Techniques like [[concepts/temperature-parameter|Temperature Scaling]] and Platt [[concepts/computational-scaling|Scaling]] applied after training to adjust output probabilities.

## Recent Developments
*   **[[concepts/mathematical-concepts|Mathematical Foundations]] of Uncertainty**: Recent work by Zoubin Ghahramani emphasizes that [[concepts/true-intelligence|true intelligence]] requires rigorous mathematical treatment of uncertainty.
*   **Self-Aware AI**: Moving beyond simple accuracy metrics to models that understand their own limitations.
*   **[[entities/google-deepmind|DeepMind]] Research**: Insights from [[entities/google|Google]] [[concepts/2026-04-29-google-deepmind|DeepMind]] highlight the necessity of "self-doubt" for robust [[concepts/ai-models|AI systems]].

## Key Resources
*   [[lab-notes/2026-08-28-Ghahramanis-Mathematical-Uncertainty-Towards-Truly-Intel|Ghahramani's Mathematical Uncertainty: Towards Truly Intelligent, Self-Aware AI]]
*   [Ghahramani's Mathematical Uncertainty: Towards Truly Intelligent, Self-Aware AI](https://www.youtube.com/watch?v=tBjgCj_dGZM)
