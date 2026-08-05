---
type: concept
domain: ai-agents
tags:
  - "open-weights"
  - "local-deployment"
  - "ai-models"
  - "fine-tuning"
  - "privacy"
  - "consumer-hardware"
  - "multimodal"
aliases:
  - "Open weights AI"
  - "Locally runnable models"
  - "Public parameter models"
summary: Open-weights models are models with publicly available parameters that allow for local deployment, fine-tuning, and execution on consumer-grade hardware.
updated: 2026-07-17
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Open-weights models

Models in which the trained parameters ([[concepts/weights|weights]]) are made publicly available for download and [[concepts/local-deployment|local deployment]]. This distinguishes them from Closed-source models, which are typically accessed only via proprietary [[concepts/application-programming-interfaces-apis|APIs]].

## Core Characteristics
- **[[concepts/local-execution|Local Execution]]**: Allows for running [[concepts/inference|inference]] on private hardware, ensuring data [[concepts/privacy-protection|privacy]] and reducing reliance on cloud providers.
- **[[concepts/fine-tuning|Fine-tuning]]**: Enables users to adapt the model to specific domains or [[concepts/training-data|datasets]].
- **Hardware [[concepts/accessibility|Accessibility]]**: Recent advancements focus on optimizing these models for [[concepts/consumer-grade-gpus|Consumer-grade GPUs]] with [[concepts/low-vram-requirements|low VRAM requirements]].

## Recent Developments
- **[[entities/ltx-2]]**: A significant advancement in the [[concepts/open
- **Inkling**: Released by [[entities/thinking-machines-lab|Thinking Machines Lab]], Inkling is a notable [[concepts/open-source-[[concepts/parameters|weights]]|[[concepts/open-weight-models|[[concepts/open-weight|[[concepts/open-weights|open-weights]]]]]]]] [[concepts/multimodal-ai|multimodal]] model. Its [[concepts/deployment|release]] marks a shift in the landscape by providing high-capability [[concepts/multimodal-capabilities|multimodal capabilities]] in an open format, contrasting with proprietary alternatives. See [[lab-notes/2026-07-17-Inkling-Thinking-Machines-Labs-Open-Multimodal-AI-Breakt|Inkling: Thinking Machines Lab's Open Multimodal AI Breakthrough]] for details.

## References
- [Inkling: Thinking Machines Lab's Open Multimodal AI Breakthrough](https://www.youtube.com/watch?v=IB53DUrnYgI)
