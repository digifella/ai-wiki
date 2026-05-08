---
wiki-ingested: true
domain: tools-platforms
group: developer-tooling-clis
---
<https://www.youtube.com/watch?v=kKNgRCPuObI>
Here is a [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the video [[concepts/tutorial|tutorial]] on using LM Studio with the Model Context Protocol (MCP).

# Turning LM Studio into a [[concepts/local-ai|Local AI]] Command Center with MCP

This video demonstrates how to transform LM Studio from a simple text-based chat interface into a powerful, [[concepts/automated-agent|automated agent]] capable of browsing the web, checking news, and using maps—all [[concepts/running|running]] locally, privately, and for free.

## 1\. What is an MCP?

**MCP stands for Model Context Protocol.**

* **The Problem:** Standard LLMs (Large Language [[concepts/models|Models]]) can predict text but cannot take actions or access the outside world.
* **The [[concepts/solution|Solution]]:** MCP is a universal standard that allows [[concepts/ai-models|AI models]] to connect to [[concepts/external-tools|external tools]] (browsers, databases, GPS, etc.) safely and structurally.
* **How it works:** The model describes what it wants to do, the tool executes the [[concepts/code|code]], returns the data, and the model uses that data to determine the next step.
* **Key Benefit:** It is not a proprietary plugin system; it is an open protocol compatible with many [[concepts/ai-tools|AI tools]].

## 2\. Initial [[concepts/setup|Setup]]

1. **Download LM Studio:** Get the [[concepts/software|software]] from `lmstudio.ai`.
2. **Select a Model:** You must use a model capable of **"Tool Use"**.
	* _Recommendation from video:_ **[[entities/qwen|Qwen]] 2.5-VL-30B** (This model supports both [[concepts/computer-vision|vision]] and tool use).
3. **Configuration:** Ensure you maximize the [[concepts/context-window|context window]] length in settings to allow enough space for tool data.

## 3\. How to Install [[concepts/mcps|MCPs]]

LM Studio has an "Integrations" tab (represented by a plug icon) where you edit a file called `mcp.json`. You add specific configurations here to enable new tools.

### Demo A: Web Browsing (Playwright)

To give the AI access to the live internet:

* **Tool Used:** Playwright (an [[concepts/open-source|open-source]] tool for automating web browsers).
* **Installation:** Added via `npx` command in the `mcp.json` file.
* **Capabilities:**
	* Navigate to websites.
	* Read headlines and content.
	* **[[concepts/vision-capabilities|Vision Capabilities]]:** The model can be instructed to take a screenshot of a webpage and display it directly in the chat window.

### Demo B: RSS Reader

To fetch structured news feeds:

* **Tool Used:** An RSS Reader MCP.
* **Workflow:** The user asked the AI to go to `news.ycombinator.com` (Hacker News) via RSS to get the top posts.
* **Agentic Behavior (Chaining):** The video demonstrated combining tools:
	1. Used **RSS** to find the top 20 articles.
	2. User asked for content of specific article (#4).
	3. AI switched to **Playwright** to visit that specific link and scrape the content.

### Demo C: [[entities/google|Google]] Maps

To find real-world location data:

* **Tool Used:** Google Maps MCP.
* **Requirement:** Requires a Google Maps API Key (users must generate their own).
* **Capability:** The AI can perform geolocation, search for places (e.g., "coffee shops near Rittenhouse Square"), and retrieve ratings, addresses, and hours of operation without leaving the local chat.

## 4\. Where to Find More Tools

The video recommends visiting **[mcp.so](https://mcp.so)**.

* This is a directory of [[concepts/mcp-servers|MCP servers]] and clients.
* You can find tools for databases (SQLite), productivity ([[entities/slack|Slack]], [[entities/github|GitHub]]), and utilities (Time, Filesystem).
* **Installation:** Find the tool you want, copy the JSON configuration provided on the site, and paste it into your LM Studio `mcp.json` file.

## [[concepts/highlights|Key Takeaways]]

* **Local & Private:** All orchestration happens on your computer.
* **Agency:** By chaining MCPs, you can create [[concepts/complex-workflows|complex workflows]] (e.g., "Find a news story, go to the website, take a screenshot").
* **Future-[[concepts/proof|Proof]]:** Since MCP is a standard, tools built for other platforms (like [[entities/claude-cowork|Claude Desktop]]) [[entities/will|will]] generally work with LM Studio.

## Related Concepts
- [[concepts/model-context-protocol|Model Context Protocol]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol)
- [[concepts/local-ai-command-center|Local AI Command Center]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_AI_Command_Center)
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- [[concepts/universal-standard|Universal Standard]] — [Wikipedia](https://en.wikipedia.org/wiki/Universal_Standard)
- [[concepts/model-context-protocol|Model Context Protocol (MCP)]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol_%28MCP%29)
- [[concepts/large-language-models|Large Language Models (LLMs)]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models_%28LLMs%29)

## Related Entities
- [[entities/lm-studio|LM Studio]] — [Wikipedia](https://en.wikipedia.org/wiki/LM_Studio)
- [[entities/mcp|MCP]] — [Wikipedia](https://en.wikipedia.org/wiki/MCP)
- MCP (Model Context Protocol) — [Wikipedia](https://en.wikipedia.org/wiki/MCP_%28Model_Context_Protocol%29)