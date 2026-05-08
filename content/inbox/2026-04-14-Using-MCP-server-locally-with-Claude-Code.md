---
wiki-ingested: true
title: "Using MCP server locally with Claude Code"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
---
# Using [[concepts/mcp-server|MCP server]] locally with [[concepts/claude-code|Claude Code]]

---
---
<https://www.youtube.com/watch?v=SEcvuS4u0dk>
The video demonstrates how to integrate OpenAI's [[concepts/gpt-5-model|GPT-5 model]] into Claude Code using a local [[concepts/model-context-protocol|Model Context Protocol]] (MCP) server. The [[entities/speaker|speaker]] emphasizes that this setup allows developers to leverage GPT-5's [[concepts/capabilities|capabilities]] directly within their Claude Code environment, eliminating the need to switch to other IDEs like [[concepts/cursor|Cursor]].
Here's a step-by-step [[concepts/summary|summary]] of the process and a practical example:
**1\. Setup and Research:**

* **Initial Setup:** The speaker logs into Claude Code, showing his current working directory.
* **Fetching Claude Code MCP Docs:** He first instructs Claude Code to `fetch claude code mcp docs from anthropic` to ensure the latest documentation for creating [[concepts/mcp-servers|MCP servers]] is in context.
* **Providing Local Context:** He reads the directory path to an existing `grok-server` (a previous MCP server he built) to help Claude Code understand the preferred [[concepts/structure|structure]] for local servers. He reads `CLAUDE.md`, a local [[concepts/markdown|markdown]] file detailing the `grok-server`'s configuration and tools. He accesses the OpenAI quickstart documentation page (platform.openai.com/docs/quickstart), selects JavaScript for the code examples, copies the entire page content, and pastes it into his local `docs/gpt5.md` file. He then reads this file into Claude Code's context, ensuring GPT-5 is specified as the model. He ensures his OpenAI API key is stored in a `.env` file within his `servers` directory, which is ignored by AI features.

**2\. Initiating GPT-5 MCP Server Creation:**

* **[[concepts/prompting|Prompting]] Claude Code:** He provides a detailed prompt to Claude Code: "now let's create a MCP server that calls the GPT5 api and returns the response. Important: do NOT include temperature, max\_tokens, or top\_p [[concepts/parameters|parameters]] in the GPT-5 [[entities/api-calls|API calls]] as they are not supported. Also, use safe property access like data.output?. \[0\]?.content?. \[0\]?.text for response parsing to avoid undefined errors. Only include gpt5\_generate and gpt5\_messages tools - no web search functionality."
* **Claude Code's Plan:** Claude Code generates a comprehensive to-do list for creating the GPT-5 MCP server, including steps like creating the directory structure, `package.json`, [[concepts/typescript|TypeScript]] configuration, main server code, utility functions, and updating `CLAUDE.md`.
* **Execution:** Claude Code begins executing the bash [[concepts/commands|commands]] to set up the server directory. The speaker manually performs `npm install` and `npm run build` as suggested by Claude Code's to-do list to build the server.
* **API Key [[concepts/integration|Integration]]:** He adds his OpenAI API key to the server's configuration within Claude Code, and Claude Code confirms the "GPT-5 MCP server successfully added!"

**3\. [[concepts/testing|Testing]] the GPT-5 MCP Server:**

* **[[concepts/verification|Verification]]:** After restarting Claude Code to refresh context, he uses the `/mcp` command to confirm the `gpt5-server` is connected.
* **Simple Prompt Test:** He sends a simple request: `say hello to gpt5`. Claude Code correctly routes this to the `gpt5-server - gpt5_generate` tool, which then calls the OpenAI GPT-5 API, and the response is displayed.
* **Parameter Test:** He tests sending a custom parameter: `say hello to gpt, set reasoning to high`. The MCP server successfully includes `reasoning_effort: "high"` in the API call to GPT-5.

**4\. Advanced Use Case: Building a Tetris App with GPT-5 and Sonnet (Collaborative Development):**

* **Model Selection:** The speaker switches Claude Code's primary model from Opus to Sonnet to manage token usage (as GPT-5 is cheaper).
* **Plan Mode:** He enters "plan mode" in Claude Code (using `shift+tab` twice).
* **Complex Request:** He asks GPT-5 (via the MCP server): "ask gpt-5 to make a detailed plan for tetris app in GO, it should have a GUI, min 60FPS, keep the code as efficient as possible, im on MacOS".
* **GPT-5's Plan:** GPT-5 generates a detailed implementation plan for the Tetris game, outlining the technology stack (Go, Ebitengine), project structure, core features, implementation phases, and performance targets.
* **Execution and [[concepts/debugging|Debugging]]:** He accepts the plan, and Claude Code (using Sonnet) starts implementing it. Initially, tests fail due to an "unused variable" error. Claude Code quickly identifies and fixes this issue. Upon launching the partially built game, he notices several bugs: strange controls, a buggy UI (cyan I-piece appears floating, ghost piece positioning is off, strange filled blocks, unresponsive controls). **Visual Debugging with GPT-5:** He takes a screenshot of the buggy game, uploads it to Claude Code, and issues a command: "\[Image #1\], we have some issue, the game controls is a bit strange, the UI looks buggy, make it a clean working smooth tetris experience, consult gpt-5 with the issues and make a plan together to fix this". This demonstrates GPT-5's [[concepts/multimodal-capabilities|multimodal capabilities]]. GPT-5 analyzes the image and the issues, formulating a plan to address them, including debugging collision detection logic. Claude Code writes debug code, runs tests, identifies the precise bug in the collision detection logic, and applies a fix to the `board.go` file. After [[concepts/running|running]] further tests which now pass, Claude Code confirms the issues are resolved.
* **Successful Launch:** He rebuilds the macOS app bundle and launches the Tetris game. The game now functions much better, with working ghost pieces, hard drop, scoring, levels, and next pieces, demonstrating the successful collaboration between Sonnet and GPT-5 in solving complex [[concepts/coding|coding]] problems.

**Conclusion:** The video effectively showcases how a locally hosted GPT-5 MCP server can significantly enhance Claude Code's capabilities, allowing for direct API calls, [[concepts/complex-problem-solving|complex problem-solving]], and even multimodal debugging, ultimately improving [[entities/developer|developer]] [[concepts/workflow|workflow]] and productivity. The speaker provides the [[entities/github|GitHub]] link to his setup for others to replicate.

Note: others have said can do similar thing with Claude Code Router
GPT5 is cheap and very good at bug fixing
