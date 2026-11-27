---
type: concept
domain: ai-agents
tags:
  - "gradient-boosted-trees"
  - "ensemble-learning"
  - "machine-learning"
  - "tabular-data"
  - "foundation-models"
  - "tabfm"
  - "regularization"
  - "gradient-descent"
aliases:
  - "GBT"
  - "Gradient Boosting"
summary: "Gradient-Boosted Trees are an ensemble machine learning technique that sequentially trains weak learners to minimize differentiable loss functions, traditionally dominating structured data before the emergence of tabular"
updated: 2026-10-12
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-11T22:47:16+00:00" }
group: ai-foundations-concepts
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Gradient-Boosted Trees

**Gradient-Boosted Trees** (GBT) are an ensemble [[concepts/machine-learning|machine learning]] technique that builds predictive models in a stage-wise fashion. It generalizes boosting by allowing the optimization of any differentiable loss function.

## Core Mechanism
- **Ensemble [[concepts/learning|Learning]]:** Combines multiple weak learners (typically decision trees) to form a strong learner.
- **Sequential Training:** Each new tree is trained to correct the residual errors of the previous ensemble.
- **Gradient Descent:** Uses gradient descent to minimize the loss function, hence the name "gradient-boosted."
- **Regularization:** Often includes shrinkage (learning rate) and subsampling to prevent overfitting.

## Comparison with Foundation Models
While gradient-boosted trees have long been the state-of-the-art for structured/tabular data, the landscape is shifting with the advent of tabular [[concepts/foundation-model|foundation models]].

- **Traditional Approach:** GBTs require [[concepts/neural-network-fine-tuning|task-specific training]] and feature [[entities/national-academies|engineering]].
- **Emerging Paradigm:** New models aim to apply the "one model for everything" approach of [[concepts/large-language-models]] to [[concepts/data-tables|tabular data]].
- **[[concepts/segment-anything-model|Google TabFM]]:** A notable development in this space is [[concepts/google-search|Google]] [[concepts/tabfm|TabFM]]: Zero-Shot [[concepts/pre-trained-model|Foundation Model]] for Tabular Data, which proposes a zero-shot foundation model for databases and spreadsheets.
  - See [[lab-notes/2026-10-12-Google-TabFM-Zero-Shot-Foundation-Model-for-Tabular-Data|Google TabFM: Zero-Shot Foundation Model for Tabular Data]] for detailed analysis.
  - Unlike GBTs, TabFM aims to reduce the need for per-task training.

## Key Algorithms
- XGBoost
- LightGBM
- CatBoost

## References
- [[concepts/segment-anything-model|Google TabFM]]: Zero-Shot [[concepts/foundation-model|Foundation Model]] for [[concepts/data-tables|Tabular Data]]: https://www.youtube.com/watch?v=5YJGDElbCDY
