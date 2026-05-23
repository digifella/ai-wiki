---
type: concept
domain: security-infrastructure
updated: 2026-05-23
group: data-pipelines-sync-storage
stub: true
---
# External data access

Enables AI systems to interact with data beyond their immediate context.

- **[[concepts/model-context-protocol|Model Context Protocol (MCP)]]**: [[concepts/universal-plug|Universal plug]] allowing [[concepts/ai-models|AI models]] (e.g., [[entities/claude]]) to connect to [[concepts/external-data|external data]] sources and tools.
  - Without MCP, [[concepts/models|models]] are limited to uploaded data; with MCP, they directly access external systems via an [[concepts/mcp-server|MCP server]].
  - Powers tools like [[concepts/claude-code|Claude Code]] to transform chatbots into [[concepts/agents|agents]] capable of real-time retrieval and tool execution.
- **[[concepts/mcp-server|MCP server]]**: Required intermediary connecting [[concepts/ai-models|AI models]] to external data sources (e.g., databases, APIs, file systems).
- **Resource**: <https://www.youtube.com/watch?v=p0pR_zq-85M> demonstrates transforming chatbots into powerful [[concepts/agents|agents]] using MCP.

2026 04 14 [[concepts/ai-assisted-coding|Claude Code]] using powerful [[concepts/agentic-ai|AI agents]]
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Local-AI-Privacy-Risks-and-Mitigation-Strategies|Local AI Privacy Risks and Mitigation Strategies]] · [▶ source](https://www.youtube.com/watch?v=GWUnPiDzzkE)
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Cowork-Desktop-AI-Co-worker-Core-Capabilities-and-Advantages|Claude Cowork Desktop AI Co worker Core Capabilities and Advantages]] · [▶ source](https://www.youtube.com/watch?v=z9rdrNrkvDY)
- 2026-04-10: [[lab-notes/2026-04-10-LM-Studio-LM-Link-Remote-LLM-Access-for-Portable-Devices|LM Studio LM Link Remote LLM Access for Portable Devices]] · [▶ source](https://www.youtube.com/watch?v=PqBrnip-ZLw)
- 2026-04-17: [[lab-notes/2026-04-17-DeepMind-Gemma-4-Open-Efficient-AI-Empowering-Local-Device-Execution|DeepMind Gemma 4 Open Efficient AI Empowering Local Device Execution]] · [▶ source](https://www.youtube.com/watch?v=Sk9tvyRSCgY)
- 2026-04-29: Hermes · [▶ source](https://www.youtube.com/watch?v=1ve4Atbqmoo)