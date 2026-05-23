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
updated: 2026-05-23
group: ai-foundations-concepts
---
# F1 Score

The [[entities/formula-1|F1]] score is a statistical measure used to evaluate the performance of classification [[concepts/models|models]], particularly in situations where precision and [[concepts/recall|recall]] are both important. It is calculated as the harmonic mean of precision and recall, expressed as: F1 = 2 × (precision × recall) / (precision + recall). This formulation ensures that the F1 score reflects a balance between the two metrics rather than favoring one over the other.

## Components

Precision measures the proportion of positive predictions that are actually correct, while recall measures the proportion of actual positive cases that the model successfully identified. In many real-world [[concepts/software|applications]], these metrics can pull in different directions—a model might achieve high precision by being conservative with positive predictions, but this often comes [[concepts/assistive-technology|at]] the [[concepts/cost|cost]] of lower recall. The F1 score addresses this trade-off by combining both measures into a single value between 0 and 1.

## Use Cases

The F1 score is particularly valuable in contexts where false positives and false negatives carry different costs. It is commonly used in medical diagnosis, spam detection, [[concepts/knowledge-bases|information retrieval]], and other domains where both missing positive cases and incorrectly flagging negative cases have practical consequences. The metric is especially useful when working with imbalanced datasets, where one class significantly outnumbers the other, since [[concepts/accuracy|accuracy]] alone can be misleading in such [[concepts/scenarios|scenarios]].
## Source Notes
- 2026-04-07: Next Evolution of Retrieval-Augmented Generation
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
- 2026-04-15: [[lab-notes/2026-04-15-Anthropic-Claude-Mythos-Cybersecurity-Capabilities-Benchmark-Gaming-an|Anthropic Claude Mythos Cybersecurity Capabilities Benchmark Gaming an]] · [▶ source](https://www.youtube.com/watch?v=Ersv1ogj7Jo)
- 2026-04-22: Google Gemma · [▶ source](https://www.youtube.com/watch?v=ZxQ2DuejRhU)