---
type: concept
domain: ai-agents
tags:
  - "large-language-models"
  - "local-execution"
  - "privacy"
  - "open-source-ai"
  - "model-customization"
  - "fine-tuning"
  - "agentic-ai"
  - "coding-assistants"
  - "kimi-k3"
  - "inkling"
  - "moonshot-ai"
  - "thinking-machines-lab"
aliases:
  - "Open Models"
  - "Public Parameter Models"
  - "Local LLMs"
  - "Open Weights"
summary: Open weight models are large language models with publicly released parameters, enabling local execution and customization for privacy and research purposes. Recent developments include specialized open-weight models for coding tasks and large-scale releases from Moonshot AI and Thinking Machines Lab.
updated: 2026-07-19
group: open-systems-local-models
title: open-weight models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-19" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

[[concepts/llms|Definition]]: A category of [[concepts/large-language-models|Large Language Models]] where the trained parameters ([[concepts/weights|weights]]) are released to the public, allowing for [[concepts/local-execution|local execution]], inspection, and modification, as opposed to Closed-source models accessible only via API.

### Core Characteristics
- **[[concepts/ai-workflow|Customization]]:** Enables [[concepts/fine-tuning|Fine-tuning]] and Parameter-efficient [[concepts/fine-tuning|fine-tuning]] ([[concepts/parameter-efficient-adaptation|PEFT]]) for domain-specific tasks.
- **[[concepts/privacy|Privacy]] & [[concepts/security|Security]]:** Facilitates [[concepts/local-llm|Local LLM]] deployment, ensuring data remains within controlled environments.
- **[[concepts/opacity|Transparency]]:** Supports research into [[concepts/model-weights|Model weights]],

### Recent Developments & Industry Shifts
- **Scale Challenges:** The [[concepts/open-source|open-source]] ecosystem is facing a shift where models are becoming "too big to run" locally, highlighting the tension between [[concepts/open-source-weights|open weights]] and hardware constraints [[lab-notes/2026-07-19-Kimi-K3-Inkling-Open-Weight-AI-Scale-Strategies-and-Depl|Kimi K3 & Inkling: Open-Weight AI Scale, Strategies, and Deployment]].
- **Key Releases:**
    - **[[concepts/kimi-k3|Kimi K3]]:** Released by [[entities/moonshot-ai]], representing a significant open-weight contribution from [[entities/china|China]].
    - **[[entities/inkling|Inkling]]:** Released by [[entities/thinking-machines-lab]], representing a major US-based open-weight initiative.
- **Strategic Implications:** These releases underscore the global competition in [[concepts/private-execution|open-weight AI]] and the evolving strategies for deployment and scale.

### References
- [Kimi K3 & Inkling: Open-Weight AI Scale, Strategies, and Deployment](https://www.youtube.com/watch?v=qW5UDpHZBPw)
