---
type: concept
domain: tools-platforms
summary: Tool calling is the capability of large language models to interface with external software, APIs, or datasets to execute actions or retrieve real-time information.
updated: 2026-05-23
group: developer-tooling-clis
---
# Tool Calling

The capability of a [[concepts/large-language-model]] (LLM) to interface with external [[concepts/software|software]], [[concepts/api|APIs]], or [[concepts/training-data|datasets]] to execute actions or retrieve real-time information. Often implemented via [[concepts/function-calling|Function Calling]], where the model generates structured arguments to trigger specific [[concepts/code|code]] execution.

## Core Concepts
- **Function Calling**: The mechanism by which an LLM identifies the need for an external tool and produces the necessary [[concepts/parameters|parameters]] (e.g., JSON) for execution.
- **[[concepts/agentic-ai]]**: Higher-level autonomous systems that utilize tool calling to navigate complex, multi-step workflows and environmental interactions.
- **Extensibility**: The ability to augment model [[concepts/reasoning|reasoning]] with live, ecosystem-specific data.

## Implementation & Examples
- **[[entities/gemini]]**: Demonstrates [[concepts/programmatic-tool-calling|advanced tool calling]] through native [[entities/google-workspace]] [[concepts/integration|integration]].
    - **Workspace Integration**: Leverages the `@` symbol syntax to bridge [[concepts/llm-reasoning|LLM reasoning]] with live data from [[entities/gmail|Gmail]], Docs, and [[concepts/motivation|Drive]].
    - **Ecosystem Synergy**: Uses [[concepts/native-integration|native integration]] to act as an interface for the broader [[concepts/google-search|Google]] ecosystem.

---
**Source**: 2026 04 14 New [[concepts/gemini|Gemini]] [[concepts/tutorial|Tutorial]]
## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-07: [[lab-notes/2026-04-07-OWASP-Top-10-Security-Risks-for-AI-Agentic-Applications-Report|OWASP Top 10 Security Risks for AI Agentic Applications Report]] · [▶ source](https://www.youtube.com/watch?v=soFWS8NBcSU)
- 2026-04-13: [[lab-notes/2026-04-13-Ollama-and-Zapier-MCP-Local-LLM-AI-Agent-Setup-and-Integration|Ollama and Zapier MCP Local LLM AI Agent Setup and Integration]] · [▶ source](https://www.youtube.com/watch?v=GAyNvq6Ayps)
- 2026-04-27: Claude AI · [▶ source](https://www.youtube.com/watch?v=Ph-maUAiSU8)
- 2026-04-29: OpenClaw · [▶ source](https://www.youtube.com/watch?v=L7FF8Zgab3M)
- 2026-05-01: [[lab-notes/2026-05-01-Claude-AI-Productivity-Seven-Secret-Prompts-Summary-Repo|Claude AI Productivity: Seven Secret Prompts Summary Report]] · [▶ source](https://www.youtube.com/watch?v=rabGqnyd_Zw)