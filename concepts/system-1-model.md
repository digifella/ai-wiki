---
type: concept
domain: ai-agents
tags:
  - "system-1"
  - "llm-orchestration"
  - "routing"
  - "type-safe-ai"
  - "probabiilistic-model"
  - "model-routing"
  - "low-latency"
  - "probabilistic-inference"
  - "non-generative"
aliases:
  - "System 1 Probabilistic Router"
  - "Rapid Decision Model"
  - "LLM Dispatcher"
summary: A class of non-generative AI models optimized for rapid, low-latency inference and probabilistic routing to direct queries to appropriate downstream tools.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-21T20:30:24+00:00" }
group: applied-ai-workflows
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# System 1 model

A class of [[concepts/weathernext-3|AI models]] designed for rapid, low-latency decision-making and routing, distinct from generative "System 2" [[concepts/reasoning|reasoning]] models. These models prioritize speed and probabilistic accuracy over complex text generation.

## Key Characteristics
- **Speed:** Optimized for immediate [[concepts/ai-inference|inference]] to handle real-time orchestration tasks.
- **Routing:** Functions primarily as a dispatcher, directing queries to appropriate downstream models or tools.
- **Probabilistic:** Outputs confidence scores or probabilities to guide decision paths rather than deterministic text.
- **Non-Generative:** Core function is classification/routing, not content creation.

## Implementation: Jev
**[[lab-notes/2026-09-22-Jev-TypeSafe-AIs-System-1-Probabilistic-Router-for-LLM-O|Jev: TypeSafe AI's System 1 Probabilistic Router for LLM Orchestration]]**

- **Developer:** TypeSafe AI
- **Purpose:** Intelligent router for LLM orchestration.
- **Mechanism:** Uses probabilistic methods to route requests to optimal models rather than generating text itself.
- **Context:** Discussed in the video "How to Build Things with Jev & OpenJevs" by [[entities/sam-witteveen|Sam Witteveen]].
- **Technical Details:**
    - Generated via API: [[concepts/gemini-25-flash|Gemini 2.5 Flash]]
    - Modes: Summary
    - Focus: Building scalable AI [[concepts/infrastructure|infrastructure]] with rapid decision layers.

## Related Concepts
- LLM Orchestration
- Model Routing
- [[entities/typesafe-ai]]
- [[entities/gemini-25-flash]]

## References
- [Jev: TypeSafe AI's System 1 Probabilistic Router for LLM Orchestration](https://www.youtube.com/watch?v=ZR7anrL50xs)
