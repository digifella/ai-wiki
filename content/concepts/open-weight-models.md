---
type: concept
domain: ai-agents
tags:
  - "AI"
  - "LLM"
  - "Machine Learning"
  - "Open-Source"
  - "large-language-models"
  - "open-source-ai"
  - "local-execution"
  - "model-customization"
  - "privacy-security"
  - "agentic-ai"
  - "coding-models"
aliases:
  - "public weights models"
  - "modifiable ai models"
  - "locally accessible llms"
  - "gemma series models"
summary: "Open weight models are large language models with publicly released parameters, enabling local execution and customization for privacy and research purposes."
updated: 2026-04-14
group: open-systems-local-models
title: "open-weight models"
---
# open-weight models

[[concepts/llms|Definition]]: A category of [[concepts/large-language-models|Large Language Models]] where the trained [[concepts/parameters|parameters]] ([[concepts/weights|weights]]) are released to the public, allowing for [[concepts/local-execution|local execution]], inspection, and modification, as opposed to Closed-source models accessible only via API.

### Core Characteristics
- **[[concepts/ai-workflow|Customization]]:** Enables [[concepts/fine-tuning|Fine-tuning]] and Parameter-efficient [[concepts/fine-tuning|fine-tuning]] (PEFT) for domain-specific tasks.
- **[[concepts/privacy|Privacy]] & [[concepts/security|Security]]:** Facilitates [[concepts/local-llm|Local LLM]] [[concepts/deployment|deployment]], ensuring data remains within controlled environments.
- **Transparency:** Supports research into [[concepts/model-weights|Model weights]], Model [[concepts/interpretability|Interpretability]], and [[concepts/ai-safety|AI Safety]].
- **limitations:** Addressing inherent architectural constraints and resource requirements.

### Notable Examples & Developments
- **[[concepts/qwen-model|Qwen3-Coder-Flash]]:** A recent implementation optimized for [[concepts/agentic-ai|agentic coding]] and tool use within [[concepts/local-execution|local environments]] ([Reference](https://www.youtube.com/watch?v=IaqzrByS8yA)).

---
**Backlinks:** 2026 04 14 New Qwen agentic local llm

## Source Notes
- 2026-04-27: Google Gemma · [▶ source](https://www.youtube.com/watch?v=yJr_kTCOkFo)
- 2026-04-08: [[lab-notes/2026-04-08-Google-Gemma-4-Open-Weight-Models-Apache-20-and-Enhanced-AI|Google Gemma 4 Open Weight Models Apache 20 and Enhanced AI]]