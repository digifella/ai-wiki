---
type: concept
domain: ai-agents
group: ai-foundations-concepts
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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# F1 Score

The F1 score is a performance metric used in machine learning to evaluate classification models by combining precision and recall into a single measure. It is calculated as the harmonic mean of these two metrics, expressed by the formula: F1 = 2 × (precision × recall) / (precision + recall). This approach ensures balanced consideration of both metrics rather than favoring one over the other. The F1 score ranges from 0 to 1, where 1 represents perfect precision and recall, and 0 indicates poor performance.

## Interpretation and Use Cases

The metric is particularly valuable when dealing with imbalanced datasets, where traditional accuracy can be misleading. In scenarios where the cost of false positives and false negatives differs significantly, or when the class distribution is skewed, the F1 score provides a more robust assessment of model performance than accuracy alone. It is commonly used in information retrieval, medical diagnosis, and fraud detection, where identifying positive instances accurately is critical.

## Relationship to Precision and Recall

Precision measures the proportion of true positive predictions among all positive predictions, while recall measures the proportion of true positive predictions among all actual positive instances. The F1 score reaches its maximum value when precision and recall are equal, making it a useful indicator of the trade-off between these two metrics. In practice, a high F1 score indicates that the model has both high precision and high recall, suggesting reliable performance across both dimensions.

## Source Notes
- 2026-04-07: Next Evolution of Retrieval-Augmented Generation
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
- 2026-04-15: [[lab-notes/2026-04-15-Anthropic-Claude-Mythos-Cybersecurity-Capabilities-Benchmark-Gaming-an|Anthropic Claude Mythos Cybersecurity Capabilities Benchmark Gaming an]] · [▶ source](https://www.youtube.com/watch?v=Ersv1ogj7Jo)
- 2026-04-22: Google Gemma · [▶ source](https://www.youtube.com/watch?v=ZxQ2DuejRhU)
