---
type: concept
domain: ai-agents
updated: 2026-07-15
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Empirical Optimization

**Empirical Optimization** refers to the [[concepts/iterative-refinement|iterative process]] of refining models, [[concepts/algorithms|algorithms]], or systems based on observed [[concepts/ai-performance-evaluation|performance metrics]] rather than purely theoretical derivations. In the context of [[concepts/large-language-models]] (LLMs) and [[concepts/machine-learning]], it involves adjusting hyperparameters, [[concepts/data-curation|data curation]] strategies, and training objectives to maximize specific empirical benchmarks.

## Core Principles

- **[[concepts/iterative-learning|Iterative Refinement]]**: Continuous cycles of training, evaluation, and adjustment.
- **Data-Centricity**: Prioritizing the quality and [[concepts/writing|composition]] of [[concepts/custom-dataset|training data]] over architectural complexity.
- **Metric-Driven Decisions**: Using quantitative [[concepts/model-performance-metrics|performance indicators]] to guide optimization steps.

## Applications in LLM Training

Recent advancements highlight a shift toward data-centric empirical [[concepts/optimization-guide|optimization strategies]]:

- **Hill-Climbing Approaches**: [[entities/microsoft|Microsoft]]'s recent work on [[concepts/frontier-intelligence|frontier models]] utilizes a "hill-climbing" methodology for [[concepts/etl-extract-transform-load|data engineering]], iteratively selecting data subsets that yield the highest [[concepts/performance-gains|performance gains]] [[lab-notes/2026-07-14-Microsofts-Frontier-LLM-Data-Engineering-Hill-Climbing-D|Microsoft's Frontier LLM Data Engineering: Hill-Climbing, Data Curation, No Synthetics]].
- **Data Curation over Synthesis**: Contrary to trends favoring [[concepts/synthetic-puzzle-generation|synthetic data]] generation, recent empirical studies suggest that rigorous curation of [[concepts/excellence|high-quality]] natural data often outperforms synthetic alternatives in [[concepts/reasoning|reasoning]] tasks.
- **Reasoning [[concepts/llm-optimization-techniques|Model Optimization]]**: Specific focus on optimizing for [[concepts/multi-step-reasoning|chain-of-thought]] capabilities through targeted data selection rather than broad-scale pre-training expansion.

## References

- [Microsoft's Frontier LLM Data Engineering: Hill-Climbing, Data Curation, No Synthetics](https://www.youtube.com/watch?v=aD93kfArOik)
