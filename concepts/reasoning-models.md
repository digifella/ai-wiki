---
type: concept
domain: ai-agents
tags:
  - "reasoning-models"
  - "open-source-ai"
  - "local-deployment"
  - "gemma"
  - "qwen"
  - "agentic-ai"
  - "edge-computing"
  - "data-engineering"
  - "microsoft"
aliases:
  - "Open-Source Reasoning Models"
  - "Local AI Reasoning"
  - "Gemma and Qwen"
  - "MAI-Thinking-1"
summary: Reasoning models are open-source AI systems with publicly available weights that enable local deployment for privacy and cost reduction, featuring recent advancements in efficiency and agentic capabilities. Recent developments include Microsoft's MAI-Thinking-1, which utilizes hill-climbing data engineering and curated data without synthetics.
updated: 2026-07-14
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

- "ai"
  - "[[concepts/machine-learning|machine-learning]]"
  - "[[concepts/reasoning|reasoning]]-models"
  - "[[entities/gemma|gemma]]"
  - "[[concepts/google-search|google]]"
  - "ai-reasoning"
  - "[[concepts/open-source|open-source]]-models"
  - "[[concepts/edge-computing|edge-deployment]]"
  - "logical-deduction"
  - "multi-step-[[concepts/problem-solving|problem-solving]]"
  - "[[entities/qwen|qwen]]"
  - "[[concepts/action-oriented-ai|agentic-ai]]"
  - "[[entities/ollama|ollama]]"
  - "[[concepts/gui-interface|gui-interface]]"
  - "[[entities/microsoft|microsoft]]"
  - "[[concepts/data-curation|data-curation]]"
group: reasoning-context-[[concepts/prompting|prompting]]

title: "[[concepts/open-source|Open-Source]] Models"

# Open-Source Models

[[concepts/voice-design|Open-Source Models]] are [[concepts/ai-models|AI models]] with publicly available source code and [[concepts/weights|weights]], enabling [[concepts/local-deployment|local deployment]], [[concepts/expenditure-reduction|cost reduction]], and enhanced [[concepts/privacy|privacy]], particularly for [[concepts/reasoning|reasoning]] tasks.

## Key Characteristics
- **[[concepts/local-execution|Local Execution]]**: Run via tools like [[entities/ollama|ollama]] on [[concepts/consumer-grade-hardware|edge devices]] to minimize latency and data [[concepts/exposure|exposure]].
- **Agentic Capabilities**: Support for [[concepts/action-oriented-ai|agentic-ai]] workflows, including multi-step [[concepts/problem-solving|problem-solving]] and logical deduction.
- **Efficiency**: Recent advancements in [[concepts/architecturetechnique|model architecture]] allow for [[entities/high-performance|high-performance]] reasoning with reduced computational overhead.

## Recent Developments: Microsoft MAI-Thinking-1
Microsoft has advanced the frontier of reasoning models with the release of **MAI-Thinking-1**, accompanied by a technical report titled "Building a Hill-Climbing Machine."

- **[[concepts/etl-extract-transform-load|Data Engineering]] Strategy**:
  - Utilizes **hill-climbing** [[concepts/algorithm-optimization|optimization techniques]] for data selection.
  - Focuses on rigorous **data curation** rather than [[concepts/synthetic-puzzle-generation|synthetic data]] generation.
  - Explicitly avoids synthetic data in the training pipeline to maintain quality and authenticity.
- **Integration**: See detailed analysis in [[lab-notes/2026-07-14-Microsofts-Frontier-LLM-Data-Engineering-Hill-Climbing-D|Microsoft's Frontier LLM Data Engineering: Hill-Climbing, Data Curation, No Synthetics]].

## References
- [Microsoft's Frontier LLM Data Engineering: Hill-Climbing, Data Curation, No Synthetics](https://www.youtube.com/watch?v=aD93kfArOik)
