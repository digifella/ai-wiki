---
type: concept
domain: ai-agents
tags:
  - "gemma-4"
  - "llm"
  - "agent-reliability"
  - "chat-template-fix"
  - "reasoning-preservaion"
aliases:
  - "Google Gemma 4"
  - "Gemma 4 LLM"
  - "Gemma 12B QAT"
summary: Gemma 4 is a large language model by Google designed for advanced natural language processing tasks, featuring flexibility, customization capabilities, and recently resolved agent-specific stability issues via chat template fixes that preserve reasoning.
updated: 2026-07-11
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Gemma 4
## Overview
[[entities/gemma|Gemma]] 4 is a [[concepts/large-language-model|large language model]] developed by [[concepts/google-search|Google]], designed to perform complex [[concepts/natural-language-processing|natural language processing]] tasks with high accuracy and efficiency.

### Key Features
- **Advanced NLP Capabilities:** Equipped with sophisticated [[concepts/neural-networks|neural networks]] for understanding context in written or spoken language.
- **Integration Flexibility:** Can be deployed locally alongside other tools like [[concepts/claude-code|Claude Code]] to enhance [[concepts/coding|local development]] environments.
- **[[concepts/customization|Customizability]]:** Offers extensive API options for [[concepts/ai-workflow|customization]], allowing developers to tailor the model's behavior to specific [[concepts/use-cases|use cases]].

## Recent Developments & Stability Updates
- **[[concepts/agent-reliability|Agent Reliability]] Fixes:** Previous versions exhibited instability in multi-turn [[concepts/agentic-patterns|agentic workflows]]. A critical update specifically targets the 12B QAT ([[concepts/google-qat|Quantization-Aware Training]]) version. See [[lab-notes/2026-06-10-Gemma-4-Chat-Template-Fix-Preserving-Reasoning-for-Enhan|Gemma 4 Chat Template Fix: Preserving Reasoning for Enhanced Agentic Performance]] for details on the chat template correction that preserves [[concepts/reasoning-capabilities|reasoning capabilities]].
- **Multi-turn Context [[concepts/preservation|Preservation]]:** The fix addresses a bug where [[concepts/reasoning|reasoning]] traces were dropped during extended interactions, significantly enhancing performance in [[concepts/ai-agents|AI agent]] [[concepts/scenarios|scenarios]] requiring sustained logical coherence.
