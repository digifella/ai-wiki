---
type: concept
domain: ai-agents
tags:
  - "model-switching"
  - "llm-routing"
  - "runtime-switching"
  - "local-models"
  - "infrastructure"
  - "memory-management"
  - "hot-swapping"
  - "inference-optimization"
aliases:
  - "dynamic model selection"
  - "LLM routing"
  - "hot-swappable models"
summary: Model Switching enables dynamic alternation between different LLMs during runtime through infrastructure-level routing and memory management.
updated: 2026-07-11
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Model Switching

**Model Switching** refers to the architectural capability to dynamically alternate between different [[concepts/large-language-model-llm|Large Language Models]] (LLMs) during runtime or within a single application [[concepts/session|session]]. This is distinct from [[concepts/fine-tuning|fine-tuning]] or [[concepts/prompting|prompting]] strategies, focusing instead on the infrastructure and API layer that manages model instantiation, loading, and request routing.

## Core Mechanisms
- **Hot-Swapping:** Replacing an active model with another without restarting the server or dropping existing connections, minimizing downtime.
- **Routing [[concepts/open-source-philosophy|Logic]]:** Directing specific prompts to specific models based on criteria such as complexity, latency requirements, or [[concepts/cost-efficient-solutions|cost efficiency]].
- **[[concepts/memory-management|Memory Management]]:** Efficiently handling GPU/CPU [[concepts/vram|VRAM]] allocation when swapping models of differing parameter sizes.

## Implementations & Tools

### llama.cpp Router Mode
A native feature introduced in `llama.cpp` that enables seamless switching between [[concepts/hardware-heavy-models|local LLMs]].
- **Source:** [[lab-notes/2026-05-22-llama.cpp-Router-Mode-Native-Hot-Swappable-Local-LLM-Swi|llama.cpp Router Mode: Native Hot-Swappable Local LLM Switching]]
- **Key Features:**
  - Simplifies management of multiple local models.
  - Allows instant switching without manual reload procedures.
  - Demonstrated by [[entities/fahd-mirza|Fahd Mirza]] (2026) as a robust [[concepts/solution|solution]] for [[concepts/local-model|local model]] experimentation.

## Related Concepts
- [[concepts/local-llm|Local LLM]] Infrastructure
- [[concepts/inference|Inference]] Server
- [[concepts/vram-optimization]]
- Multi-Model Orchestration
