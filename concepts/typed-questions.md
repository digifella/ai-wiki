---
type: concept
domain: ai-agents
tags:
  - "ai"
  - "llm-orchestration"
  - "routing"
  - "system-1"
  - "typesafe-ai"
  - "jest"
  - "typed-questions"
  - "deterministic-routing"
  - "structured-input"
aliases:
  - "Typed Questions Paradigm"
summary: Typed questions are a structured input paradigm in LLM orchestration that uses schema-awareness for deterministic routing and validation to improve reliability and reduce hallucination.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-21T20:31:07+00:00" }
group: applied-ai-workflows
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Typed Questions

**Typed questions** refer to a paradigm in LLM Orchestration where inputs are strictly categorized or structured to enable deterministic routing, validation, and processing. This approach contrasts with free-form prompting by leveraging schema-awareness to improve reliability and reduce hallucination in complex workflows.

## Core Concepts

- **Structured Input**: Questions are not just text but carry metadata or type information, allowing downstream systems to interpret intent more accurately.
- **Deterministic Routing**: By typing questions, orchestrators can route queries to specialized models or handlers without relying solely on semantic similarity.
- **Validation**: Type information enables pre-processing validation, ensuring inputs meet expected formats before expensive [[concepts/model-inference|model inference]].

## Integration: Jev as a System 1 Router

The concept of typed questions is operationalized in modern orchestration layers through probabilistic routers that act as "System 1" fast-thinking mechanisms.

- **Jev** is a "[[concepts/system-1-model|System 1 model]]" developed by [[entities/typesafe-ai]] designed to act as an intelligent router for LLM Orchestration.
- Unlike generative models, Jev's core function is to make rapid, probabilistic decisions about how to route queries rather than generating text.
- It serves as a high-speed filter or dispatcher, optimizing the path for subsequent "System 2" [[concepts/reasoning|reasoning]] models.
- For detailed technical breakdown, see [[lab-notes/2026-09-22-Jev-TypeSafe-AIs-System-1-Probabilistic-Router-for-LLM-O|Jev: TypeSafe AI's System 1 Probabilistic Router for LLM Orchestration]].

## References

- Witteveen, S. (2026). *How to Build Things with Jev & OpenJevs*. [Jev: TypeSafe AI's System 1 Probabilistic Router for LLM Orchestration](https://www.youtube.com/watch?v=ZR7anrL50xs).
