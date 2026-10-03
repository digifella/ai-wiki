---
type: concept
domain: ai-agents
tags:
  - "machine-learning"
  - "open-weight"
  - "local-deployment"
  - "ai-models"
  - "model-transparency"
  - "llm"
  - "software-licensing"
  - "upstage"
  - "agentic-ai"
aliases:
  - "Open Weight Model"
  - "Public Weight Model"
  - "Transparent AI Model"
  - "Non-Closed Model"
summary: An open-weight model is a machine learning system where the learned parameters are publicly accessible, enabling local deployment and customization without proprietary restrictions.
updated: 2026-07-30
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-30" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# open-weight model

A [[concepts/machine-learning|machine learning]] model whose [[concepts/weights|weights]] ([[concepts/model-weights|learned parameters]]) are publicly accessible, enabling [[concepts/local-deployment|local deployment]], auditing, and [[concepts/personalization|customization]] without proprietary restrictions. Differs from closed-weight models (e.g., most commercial LLMs) where [[concepts/parameters|weights]] are withheld.

Key characteristics:
- Weights available for download (e.g., via public repositories)
- May not include full training code/data (only weights)
- Enables offline use, [[concepts/customization|customization]], and [[concepts/opacity|transparency]]
- Often distributed under permissive licenses

Recent examples:
- [[entities/openai|OpenAI]]'s `[[concepts/gpt-oss-20b|gpt-oss-20b]]` and `[[concepts/gpt-4|gpt-oss]]-120b` variants (as detailed in Jeredblu running LLM locally)
- [[entities/upstage|Upstage]]'s [[concepts/coding|Solar Open 2]], an [[concepts/open-weight-llm|open-weight LLM]] highlighted for [[concepts/agentic-ai|agentic capabilities]] in [[concepts/office-productivity|office productivity]] and coding tasks [[lab-notes/2026-07-30-Solar-Open-2-LLM-Agentic-Capabilities-for-Productivity-a|Solar Open 2 LLM: Agentic Capabilities for Productivity and Coding Demonstrations]]
- Allows [[concepts/local-inference|local inference]] without API dependency

References:
- [Solar Open 2 LLM: Agentic Capabilities for Productivity and Coding Demonstrations](https://www.youtube.com/watch?v=-deLVCuiLaQ)
