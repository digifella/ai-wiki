---
type: concept
domain: ai-agents
tags:
  - "machine-learning"
  - "deep-learning"
  - "training-hyperparameters"
  - "model-convergence"
  - "early-stopping"
  - "skillopt"
  - "text-based-evolution"
aliases:
  - "Training Epochs"
  - "Dataset Passes"
  - "Epoch Count"
  - "Training Iterations"
summary: Epochs define the number of complete passes through a training dataset during model optimization, serving as a key hyperparameter for balancing convergence and overfitting in machine learning.
updated: 2026-07-11
group: training-fine-tuning-evaluation
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Epochs

**Epochs** refer to a complete pass of the entire [[concepts/training-data|training dataset]] through a [[concepts/learning|learning]] [[concepts/algorithm|algorithm]]. In the context of [[concepts/machine-learning]] and [[concepts/vanishing-gradient-problem|Deep Learning]], the number of epochs is a hyperparameter that defines how many times the model iterates over the [[concepts/custom-dataset|training data]] to minimize the loss function.

## Core Concepts

- **Training [[concepts/iteration|Iteration]]**: One epoch consists of multiple batches; the model [[concepts/software-updates|updates]] its [[concepts/parameters|weights]] after each batch or epoch depending on the optimization strategy.
- **Convergence**: The goal is to reach a state where additional epochs yield [[concepts/diminishing-returns|diminishing returns]] in performance improvement, avoiding Overfitting.
- **Early Stopping**: A regularization technique where training is halted when validation performance ceases to improve, preventing the model from memorizing noise.

## Recent Developments: Text-Based Evolution

Traditional epoch-based training relies on numerical gradient descent. Recent research explores alternative evolutionary strategies for [[concepts/agentic-ai|AI agents]]:

- **[[concepts/self-evolving-ai-agent-skills-optimization|SkillOpt]]**: A novel executive strategy from [[concepts/2026-04-30-microsoft|Microsoft Research]] that shifts from numerical weight updates to text-based evolution.
	- **Mechanism**: Trains a "[[concepts/skill-document|skill document]]" (human-readable [[concepts/markdown|Markdown]]) rather than just [[concepts/model-weights|model weights]].
	- **[[concepts/self-evolution|Self-Evolution]]**: Allows [[concepts/ai-agents|AI agents]] to evolve [[concepts/skills|skills]] through textual refinement and iteration, potentially offering greater [[concepts/interpretability|interpretability]].
	- **[[concepts/local-execution|Local Execution]]**: Designed to run locally, reducing dependency on cloud-based [[concepts/model-training-infrastructure|training infrastructure]] for [[concepts/skill|skill]] refinement.
	- See detailed analysis: [[lab-notes/2026-06-24-SkillOpt-Microsofts-Text-Based-Evolution-of-AI-Agent-Ski|SkillOpt: Microsoft's Text-Based Evolution of AI Agent Skills]]

## Related Concepts

- Gradient Descent
- Hyperparameter Tuning
- [[concepts/neural-networks]]
- [[concepts/machine-learning]]

## References

- [SkillOpt: Microsoft's Text-Based Evolution of AI Agent Skills](https://www.youtube.com/watch?v=yj17Fvyr09s)
