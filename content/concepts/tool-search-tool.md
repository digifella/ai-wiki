---
type: concept
domain: tools-platforms
tags:
  - "tool-calling"
  - "anthropic"
  - "ai-tools"
  - "programmatic-methods"
  - "developer-tools"
aliases:
  - "Anthropic Tool Search"
  - "Programmatic Tool Calling"
summary: This concept covers Anthropic's Tool Search Tool and advanced programmatic tool-calling methods.
updated: 2026-05-23
group: developer-tooling-clis
---
# Tool Search Tool

The [[concepts/context-tokens|Tool Search Tool]] is an advanced capability developed by [[entities/anthropic-institute|Anthropic]] that enhances how language [[concepts/models|models]] interact with [[concepts/external-tools|external tools]] and APIs. Rather than requiring predetermined [[concepts/tool-definitions|tool definitions]], this approach enables more flexible and dynamic tool discovery and selection during [[concepts/inference|model inference]]. The Tool Search Tool allows [[concepts/claude-ai|Claude]] to search through available tools programmatically, identify the most relevant ones for a given task, and execute them with appropriate [[concepts/parameters|parameters]].

## Programmatic Tool Calling

This concept represents an evolution beyond standard [[concepts/tool-calling|tool-calling]] methods. Where traditional approaches require explicit tool schemas to be provided upfront, [[concepts/programmatic-tool-calling|programmatic tool-calling]] enables more sophisticated [[concepts/reasoning|reasoning]] about which tools to use and how to use them. [[entities/anthropic|Anthropic]]'s [[concepts/adoption|implementation]] allows for runtime tool discovery and selection, making it possible to work with larger tool ecosystems without exhaustively pre-defining every available option to the model.

## Use Cases and Applications

The Tool Search Tool is particularly valuable in [[concepts/scenarios|scenarios]] with extensive tool libraries or APIs where predefined schemas become unwieldy. This includes multi-step workflows where [[concepts/tool-selection|tool selection]] depends on intermediate results, [[concepts/integration|integration]] with [[concepts/knowledge-bases|knowledge bases]] or documentation systems, and environments where tools are frequently added, modified, or deprecated. By enabling more flexible tool interaction, this approach reduces [[concepts/friction|friction]] in building [[concepts/agentic-frameworks|agentic systems]] that can adapt to changing tool availability.
## Source Notes
- 2026-04-14: I Looked At Amazon After They Fired 16,000 Engineers. Their AI Broke Everything.
- 2026-04-07: [[lab-notes/2026-04-07-Claude-AI-and-Canva-Integration-for-Streamlined-Graphic-Design|Claude AI and Canva Integration for Streamlined Graphic Design]] · [▶ source](https://www.youtube.com/watch?v=gBV5FT40N_M)
- 2026-04-12: [[lab-notes/2026-04-12-Heres-what-it-actually-does-how-to-build-it-yourself|Heres what it actually does how to build it yourself]]
- 2026-04-13: [[lab-notes/2026-04-13-MiniMax-M27-Open-Source-LLM-Rivaling-Opus-46-with-Agent-Capabilities|MiniMax M27 Open Source LLM Rivaling Opus 46 with Agent Capabilities]] · [▶ source](https://www.youtube.com/watch?v=qUGypBKW_sQ)
- 2026-04-18: [[lab-notes/2026-04-18-Adobe-Lightroom-April-2024-Updates-AI-Search-Workflow-Creative-Tools|Adobe Lightroom April 2024 Updates AI Search Workflow Creative Tools]] · [▶ source](https://www.youtube.com/watch?v=AMRmW7BicMk)
- 2026-04-22: Stanford
- 2026-04-25: Claude Code · [▶ source](https://www.youtube.com/watch?v=UHVFcUzAGlM)
- 2026-04-28: Integrating Claude AI · [▶ source](https://www.youtube.com/watch?v=7sInxhTDA7U)
- 2026-04-29: Google Deep Research · [▶ source](https://www.youtube.com/watch?v=FVU4qLjy2jE)