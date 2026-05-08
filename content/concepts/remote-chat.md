---
type: concept
domain: security-infrastructure
group: deployment-docker-services
tags:
  - "ai-assistant"
  - "self-hosted"
  - "open-source"
  - "privacy"
  - "local-llm"
  - "personal-ai"
aliases:
  - "Clawdbot"
  - "local AI assistant"
summary: Clawdbot is an open-source, self-hosted personal AI assistant.
updated: 2026-05-01
---
# Remote Chat

Remote Chat refers to messaging and communication interfaces designed to interact with AI assistants over network connections. In the context of self-hosted systems like [[concepts/local-ai-assistants|Clawdbot]], remote chat capabilities enable users to access their personal [[entities/ai-assistant|AI assistant]] from multiple devices while maintaining local control over the underlying infrastructure and data.

## Architecture and Implementation

Remote Chat systems typically operate through client-server architectures where the [[concepts/chat-application|chat interface]] communicates with a backend AI service. For self-hosted solutions, this allows users to deploy a single AI instance on a personal server or VPS while connecting to it from various endpoints—desktop [[concepts/software|applications]], web browsers, or mobile devices—without relying on external [[concepts/cloud-computing|cloud services]].

## Privacy and Control Considerations

The primary advantage of remote chat in self-hosted contexts is data autonomy. Users retain direct control over [[concepts/conversation-history|conversation history]], model [[concepts/weights|weights]], and system configuration rather than entrusting interactions to third-party platforms. This architecture supports both synchronous real-time conversations and asynchronous message handling depending on [[concepts/deployment|deployment]] requirements.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Local-AI-Privacy-Risks-and-Mitigation-Strategies|Local AI Privacy Risks and Mitigation Strategies]] · [▶ source](https://www.youtube.com/watch?v=GWUnPiDzzkE)
- 2026-04-10: [[lab-notes/2026-04-10-LM-Studio-LM-Link-Remote-LLM-Access-for-Portable-Devices|LM Studio LM Link Remote LLM Access for Portable Devices]] · [▶ source](https://www.youtube.com/watch?v=PqBrnip-ZLw)
- 2026-04-30: [[lab-notes/2026-04-30-AionUI-Free-Desktop-Platform-for-Multi-Agent-AI-Manageme|AionUI: Free Desktop Platform for Multi-Agent AI Management and Automation]] · [▶ source](https://www.youtube.com/watch?v=vWxE6VO9TKo)