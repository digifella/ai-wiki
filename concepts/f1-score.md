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
updated: 2026-07-15
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# F1 Score

The F1 score is a performance metric used in machine learning to evaluate classification models by combining precision and recall into a single measure. It is calculated as the harmonic mean of these two metrics, expressed by the formula: F1 = 2 × (precision × recall) / (precision + recall). This approach ensures balanced consideration of both metrics rather than favoring one over the other. The F1 score ranges from 0 to 1, where 1 represents perfect precision and recall, and 0 indicates poor performance.

## When to Use F1 Score

The F1 score is particularly useful when working with imbalanced datasets or when both false positives and false negatives carry similar costs. Unlike accuracy, which can be misleading on imbalanced data, the F1 score provides a more reliable assessment of model performance in these contexts. It is commonly applied in domains such as medical diagnosis, spam detection, and information retrieval, where the balance between finding all relevant cases and avoiding incorrect predictions matters equally.

## Limitations

While valuable, the F1 score has limitations. It assumes equal importance of precision and recall, which may not always reflect real-world requirements. Additionally, it does not account for true negatives, which can be significant in some applications. For cases where precision and recall should be weighted differently, the weighted F1 score or alternative metrics may be more appropriate.

## Source Notes
- 2026-04-07: Next Evolution of Retrieval-Augmented Generation
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
- 2026-04-15: [[lab-notes/2026-04-15-Anthropic-Claude-Mythos-Cybersecurity-Capabilities-Benchmark-Gaming-an|Anthropic Claude Mythos Cybersecurity Capabilities Benchmark Gaming an]] · [▶ source](https://www.youtube.com/watch?v=Ersv1ogj7Jo)
- 2026-04-22: Google Gemma · [▶ source](https://www.youtube.com/watch?v=ZxQ2DuejRhU)
