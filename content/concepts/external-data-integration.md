---
type: concept
domain: security-infrastructure
summary: The process of connecting large language models and agentic AI to external data sources, services, and tools to extend utility beyond static training data.
updated: 2026-05-23
group: data-pipelines-sync-storage
---
# External data integration

The process of connecting [[concepts/llm]]s and [[concepts/agentic-ai]] to [[concepts/external-data|external data]] sources, services, and tools to extend their utility beyond static [[concepts/training-data|training data]].

## Integration Methods
- **API (Application Programming Interface):** The traditional mechanism used to enable LLMs to interact with external systems and services.
- **[[concepts/model-context-protocol]] (MCP):** A "[[concepts/universal-plug|universal plug]]" protocol that allows [[concepts/ai-models|AI models]] (e.g., [[concepts/claude-code|Claude Code]]) to connect to external data and tools. It transforms chatbots into powerful [[concepts/agents|agents]] by enabling direct access to external systems, bypassing the limitation of only accessing manually uploaded [[concepts/files|files]].

## Context
- [[concepts/llm]]s require external interaction with tools and services to be functionally useful in real-world [[concepts/software|applications]].

## Sources
- 2026 04 14 MCP vs API for LLM by [[entities/ibm|IBM]]
- 2026 04 14 [[concepts/ai-assisted-coding|Claude Code]] using powerful [[concepts/agentic-ai|AI agents]]
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Building-an-AI-Marketing-Team-with-Claude-Code-Agents-Skills|Building an AI Marketing Team with Claude Code Agents Skills]] · [▶ source](https://www.youtube.com/watch?v=yLXLHnD4fco)
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Cowork-Desktop-AI-Co-worker-Core-Capabilities-and-Advantages|Claude Cowork Desktop AI Co worker Core Capabilities and Advantages]] · [▶ source](https://www.youtube.com/watch?v=z9rdrNrkvDY)
- 2026-04-13: [[lab-notes/2026-04-13-Ollama-and-Zapier-MCP-Local-LLM-AI-Agent-Setup-and-Integration|Ollama and Zapier MCP Local LLM AI Agent Setup and Integration]] · [▶ source](https://www.youtube.com/watch?v=GAyNvq6Ayps)
- 2026-04-18: [[lab-notes/2026-04-18-Cloudflare-Email-Service-Beta-Integrated-Email-Sending-Routing-and-AI-|Cloudflare Email Service Beta Integrated Email Sending Routing and AI ]] · [▶ source](https://www.youtube.com/watch?v=0pil4xQXIVE)
- 2026-04-22: Stanford
- 2026-04-29: Hermes · [▶ source](https://www.youtube.com/watch?v=1ve4Atbqmoo)