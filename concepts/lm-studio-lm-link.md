---
type: concept
domain: ai-agents
group: open-systems-local-models
tags:
  - "concept"
  - "lm-studio"
  - "remote-llm-access"
  - "portable-devices"
  - "local-models"
  - "private-ai"
  - "mobile-inference"
aliases:
  - "LM Studio Remote Access"
  - "LM Link Feature"
summary: LM Studio's LM Link feature enables remote access to local language models from portable devices.
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Lm Studio Lm Link

LM Link is a feature within LM Studio that facilitates remote access to language models hosted on a local machine. It allows users to interact with these models from other devices connected to the same network, such as tablets, smartphones, or older computers. This architecture enables computation offloading, where the heavy processing tasks are handled by a more powerful host machine while the client device serves primarily as an interface.

By leveraging this remote access capability, LM Link addresses the limitations of resource-constrained devices that may lack the hardware specifications required to run large language models locally. The host machine retains the computational load, including memory management and inference, while the client device transmits prompts and receives generated text over the local network. This setup allows for flexible usage patterns, enabling users to utilize high-performance models on portable devices without needing to download the model weights or possess significant local processing power.

The feature supports standard networking protocols, ensuring compatibility across various operating systems and device types. Users can configure the host machine to expose the local model endpoint, which the client application then connects to for interaction. This approach maintains the privacy and offline capabilities of local AI while extending its utility to a broader range of hardware, effectively bridging the gap between powerful local inference and mobile accessibility.

## Source Notes
- 2026-04-10: Private AI on the go… a new trick
- 2026-04-07: [[lab-notes/2026-04-07-Google-Stitch-AI-Native-Design-Canvas-for-Conversational-UIUX-Creation|Google Stitch AI Native Design Canvas for Conversational UIUX Creation]] · [▶ source](https://www.youtube.com/watch?v=jV-E2nxpSjQ)
