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
  - "aleph-alpha"
  - "sovereign-ai"
  - "moe"
  - "mistral"
  - "european-ai"
aliases:
  - "Open Weight Model"
  - "Public Weight Model"
  - "Transparent AI Model"
  - "Non-Closed Model"
summary: An open-weight model is a machine learning system where the learned parameters are publicly accessible, enabling local deployment and customization without proprietary restrictions.
updated: 2026-10-07
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-07T19:40:20+00:00" }
group: open-systems-local-models
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
- [[entities/openai|OpenAI]]'s `[[concepts/gpt-oss-20b|gpt-oss-20b]]` and `[[concepts/gpt-oss-20b|gpt-oss-20b]]`
- [[entities/mistral-ai|Mistral AI]]'s [[entities/mistral-large-4|Mistral Large 4]] ("Le Chonk"), a 1-trillion parameter, [[concepts/open-weight|open-weight]], [[concepts/open-source-model|open-source model]] developed in [[entities/europe|Europe]]. It utilizes a [[concepts/moe|Mixture of Experts (MoE)]] architecture with 49 billion [[concepts/activated-parameters|active parameters]] and supports multimodal inputs. See [[lab-notes/2026-10-07-European-AI-Sovereignty-Mistral-Large-4-Capabilities-Per|European AI Sovereignty: Mistral Large 4 Capabilities, Performance, Challenges]] for detailed analysis.

References:
- [European AI Sovereignty: Mistral Large 4 Capabilities, Performance, Challenges](https://www.youtube.com/watch?v=Hu1JOK6aXsI)
