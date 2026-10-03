---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "machine-learning"
  - "evaluation-metric"
  - "classification"
  - "performance-measurement"
aliases:
  - "F1"
  - "harmonic-mean"
  - "balanced-accuracy"
summary: F1 Score is a performance metric that balances precision and recall for classification models.
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: ai-foundations-concepts
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# F1 Score

The F1 score is a performance metric used in [[concepts/machine-learning|machine learning]] to evaluate classification models by combining [[concepts/accuracy|precision]] and [[concepts/recall|recall]] into a single measure. It is calculated as the harmonic mean of these two metrics, expressed by the formula: F1 = 2 × (precision × recall) / (precision + recall). This approach ensures balanced consideration of both metrics rather than favoring one over the other. The F1 score ranges from 0 to 1, where 1 represents perfect precision and recall, and 0 indicates poor performance.

## When to Use F1 Score

The F1 score is particularly useful when working with imbalanced datasets, where traditional accuracy metrics can be misleading. In [[concepts/scenarios|scenarios]] where the cost of false positives and false negatives differs significantly, or when the class distribution is skewed, the F1 score provides a more informative assessment of [[concepts/model-performance|model performance]]. It is commonly applied in [[concepts/knowledge-bases|information retrieval]], medical diagnosis, and [[concepts/fraud|fraud]] detection tasks where identifying the minority class is critical.

## Relationship with Precision and Recall

Precision measures the proportion of true positive predictions among all positive predictions, while recall measures the proportion of true positive predictions among all actual positives. The F1 score acts as a trade-off between these two values. A high F1 score indicates that the model has both high precision and high recall, whereas a low score suggests deficiencies in one or both areas. Unlike the arithmetic mean, the harmonic mean penalizes extreme values more heavily, ensuring that a model cannot achieve a high F1 score by excelling in only one metric while failing in the other.
## Source Notes
- 2026-04-07: Next Evolution of Retrieval-Augmented Generation
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
- 2026-04-15: [[lab-notes/2026-04-15-Anthropic-Claude-Mythos-Cybersecurity-Capabilities-Benchmark-Gaming-an|Anthropic Claude Mythos Cybersecurity Capabilities Benchmark Gaming an]] · [▶ source](https://www.youtube.com/watch?v=Ersv1ogj7Jo)
- 2026-04-22: Google Gemma · [▶ source](https://www.youtube.com/watch?v=ZxQ2DuejRhU)
