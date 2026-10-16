---
type: concept
domain: ai-agents
group: model-efficiency-compression
tags:
  - "open-weights-models"
  - "gpt-oss"
  - "wan-2.2"
  - "text-to-video"
  - "image-to-video"
  - "comfyui"
  - "model-compression"
  - "efficient-inference"
aliases:
  - "Open-Weights Models"
  - "GPT-OSS"
  - "Wan 2.2 Video Models"
summary: The content covers OpenAI's GPT-OSS open weights models and the local use of Wan 2.2 text-to-video and image-to-video models with ComfyUI.
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Parameter Models

Parameter models are machine learning systems whose behavior is determined by learned parameters—numerical values including weights and biases that are optimized during training. These models form the foundation of modern AI agents and generative systems, spanning architectures from large language models to specialized computer vision and video generation systems. The parameters are adjusted iteratively during training to minimize the difference between the model's predictions and the target data, effectively encoding the learned patterns and relationships within the dataset.

In the domain of large language models, OpenAI has released the GPT-OSS series as open-weight models. By making these weights publicly available, the initiative allows researchers and developers to inspect, fine-tune, and deploy the underlying parameter structures locally or on private infrastructure. This approach contrasts with closed-API models, offering greater transparency into how specific behaviors emerge from the model's internal configuration and enabling more granular control over inference and adaptation.

For generative media tasks, the Wan 2.2 models provide specialized parameter sets for text-to-video and image-to-video generation. These models are designed to be integrated into local workflows using ComfyUI, a node-based interface that facilitates the execution of complex generation pipelines. The local deployment of Wan 2.2 allows users to leverage the model's learned visual representations without relying on external cloud services, enabling customized video synthesis and iterative refinement based on specific input constraints.

## Source Notes
- 2026-04-08: [[lab-notes/2026-04-08-AI-Recursive-Self-Improvement-The-Dawn-of-Intelligence-Explosion|AI Recursive Self Improvement The Dawn of Intelligence Explosion]] · [▶ source](https://www.youtube.com/watch?v=mhoFqhLXc3g)
- 2026-04-09: [[lab-notes/2026-04-09-Project-Glasswing-Mitigating-Anthropic-Mythos-AIs-Zero-Day-Vulnerability-Capabilities|Project Glasswing: Mitigating Anthropic Mythos AI's Zero-Day Vulnerability Capabilities]]
- 2026-04-10: Bonsai 8B PrismMLs Revolutionary 1 Bit LLM First Look Test · [▶ source](https://www.youtube.com/watch?v=aNg47-U_x6A)
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
- 2026-04-19: [[lab-notes/2026-04-19-Elons-AI-Model-Factory-XAI-Anthropic-Accelerating-Self-Developing-AI|Elons AI Model Factory XAI Anthropic Accelerating Self Developing AI]] · [▶ source](https://www.youtube.com/watch?v=jLx3wNHAbnE)
- 2026-04-22: Google Gemma · [▶ source](https://www.youtube.com/watch?v=ZxQ2DuejRhU)
- 2026-04-26: DeepSeek V4: China
- 2026-04-30: Google DeepMind
- 2026-05-01: [[lab-notes/2026-05-01-Alibaba-Qwen-3.6-27B-Advanced-Local-Agentic-Coding-and-M|Alibaba Qwen 3.6 27B: Advanced Local Agentic Coding and Multimodal AI Capabilities]] · [▶ source](https://www.youtube.com/watch?v=N-0WtgxJ7ZU)
