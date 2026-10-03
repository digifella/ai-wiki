---
type: concept
domain: tools-platforms-infrastructure
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
updated: 2026-07-12
group: deployment-docker-services
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Remote Chat

Remote Chat refers to [[concepts/communication|messaging]] and communication interfaces that enable users to interact with AI assistants across network connections. Rather than requiring direct access to the machine hosting the [[concepts/ai-system|AI system]], Remote Chat allows queries and responses to be transmitted over standard network protocols, making the assistant accessible from multiple devices and locations.

In self-hosted systems like [[concepts/self-hosted-ai-assistant|Clawdbot]], Remote Chat capabilities serve a practical function: they allow users to maintain a [[concepts/personal-ai-assistant|personal AI assistant]] deployment while accessing it flexibly from smartphones, tablets, laptops, or other networked devices. This bridges the gap between centralized convenience and distributed control, since the underlying AI model and user data remain under the user's direct administration rather than residing on external servers.

## Technical Implementation

Remote Chat systems typically operate through client-server architecture, where the client application handles user input and display, while the server processes requests and manages the AI model. Communication usually occurs via standard protocols like HTTP or WebSocket, which can be secured with encryption for sensitive deployments.

## Privacy and Autonomy Considerations

By combining [[concepts/remote-access|remote access]] with self-hosted infrastructure, Remote Chat systems can preserve user [[concepts/privacy|privacy]] compared to cloud-based alternatives. Users maintain ownership of their [[concepts/conversation-history|conversation history]] and [[concepts/active-parameters|model parameters]], avoiding the data collection practices common in commercial [[concepts/ai-platforms|AI services]]. This approach appeals to users who prioritize control over their personal information while still benefiting from distributed access patterns.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Local-AI-Privacy-Risks-and-Mitigation-Strategies|Local AI Privacy Risks and Mitigation Strategies]] · [▶ source](https://www.youtube.com/watch?v=GWUnPiDzzkE)
- 2026-04-10: [[lab-notes/2026-04-10-LM-Studio-LM-Link-Remote-LLM-Access-for-Portable-Devices|LM Studio LM Link Remote LLM Access for Portable Devices]] · [▶ source](https://www.youtube.com/watch?v=PqBrnip-ZLw)
- 2026-04-30: [[lab-notes/2026-04-30-AionUI-Free-Desktop-Platform-for-Multi-Agent-AI-Manageme|AionUI: Free Desktop Platform for Multi-Agent AI Management and Automation]] · [▶ source](https://www.youtube.com/watch?v=vWxE6VO9TKo)
