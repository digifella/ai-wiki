---
type: concept
domain: ai-agents
tags:
  - "ai"
  - "machine-learning"
  - "reliability"
  - "hallucination"
  - "multi-agent-systems"
  - "generative-ai"
  - "confabulation"
  - "rag"
  - "multi-agent-verification"
aliases:
  - "AI Hallucination"
  - "Model Confabulation"
  - "Fabricated Output"
summary: Hallucination is the phenomenon where generative AI models produce plausible but factually incorrect or fabricated information due to probabilistic token prediction rather than truth verification.
updated: 2026-07-11
group: training-fine-tuning-evaluation
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Hallucination Problem

**Definition**: The phenomenon where [[concepts/generative-ai-models|generative AI models]] generate information that is plausible-sounding but factually incorrect, nonsensical, or entirely fabricated. This stems from the probabilistic nature of next-token [[concepts/user-attention-prediction|prediction]] rather than truth-[[concepts/verification|verification]].

## Core Characteristics
- **[[concepts/ai-hallucinations|Confabulation]]**: Inventing citations, [[concepts/factual-knowledge|facts]], or code that does not exist.
- **Overconfidence**: Models often present hallucinations with high certainty, lacking inherent [[concepts/causes|mechanisms]] to express uncertainty or "I don't know."
- **Contextual Drift**: Error rates increase with longer [[concepts/context-windows|context windows]] or complex [[concepts/multi-step-reasoning|multi-step reasoning]] tasks.
- **Impact**: High risk in [[concepts/health-care|Healthcare]] AI, Legal Tech, and [[concepts/ai-system|autonomous ai]] where [[concepts/factual-accuracy|factual accuracy]] is critical.

## Mitigation Strategies
- **[[concepts/answer-generation|Retrieval-Augmented Generation]] (RAG)**: Grounding outputs in external, verified data sources rather than relying solely on parametric [[concepts/memory|memory]].
- **Constitutional AI / Self-Correction**: Implementing self-critique [[concepts/loops|loops]] where the model evaluates its own output against a set of principles or constraints before final generation.
- **Multi-Agent Verification Architectures**: Deploying distinct [[concepts/agentic-ai|AI agents]] with specialized roles (e.g., generator, critic, verifier) to cross-check outputs and reduce single-point failure risks associated with confident but incorrect answers, as discussed in [[lab-notes/2026-05-29-Multi-AI-Agent-Systems-for-Enhanced-Reliability-and-Veri|Multi-AI Agent Systems for Enhanced Reliability and Verification]].
- **Deterministic Constraints**: Using strict formatting rules, JSON schemas, or [[concepts/code-execution|code execution]] environments to force factual grounding and reduce creative liberty in critical data fields.
- **Human-in-the-[[concepts/loop|Loop]] (HITL)**: Integrating human oversight for high-stakes decisions to catch nuanced hallucinations that [[concepts/automations|automated systems]] may miss.
