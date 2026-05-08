---
wiki-ingested: true
title: "Jeredblu running LLM locally"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: model-efficiency-compression
---
# Jeredblu [[concepts/running|running]] LLM locally

---
---
<https://www.youtube.com/watch?v=Ar0Or9U0pCs>
This video by \[[[entities/speaker|Speaker]]'s Name, if identifiable, otherwise "the speaker"\] provides an in-depth look at [[entities/openai|OpenAI]]'s recently released [[concepts/open-weight|open-weight]] language model, `gpt-oss` (specifically the `gpt-oss-20b` variant).
Here's a detailed [[concepts/summary|summary]] of the video's content:
**1\. Introduction to** `**gpt-oss**` **(0:00)**

* OpenAI released `gpt-oss-120b` and `gpt-oss-20b`, which are "open-weight" language [[concepts/models|models]], meaning their [[concepts/weights|weights]] are publicly available, though not necessarily the full source [[concepts/code|code]] for [[concepts/training|training]] (the speaker acknowledges this distinction).
* The models are designed to deliver "strong real-world performance at low [[concepts/cost|cost]]" and are available under the [[entities/apache-20|Apache 2.0]] [[concepts/license|license]].
* **Key Benefit:** Users can run these models _for free, locally on their computers, without an internet connection_, and crucially, _without hitting API rate limits_.

**2\. [[concepts/motivation|Motivation]] for Local Models & [[concepts/mcp-servers|MCP Servers]] (0:28)**

* The speaker [[concepts/highlights|highlights]] his personal reliance on cloud-based LLMs like [[entities/claude|Claude]] for productivity tasks involving integrations with services like [[entities/notion|Notion]], [[entities/gmail|Gmail]], and [[concepts/bright-data|Bright Data]] (which he collectively refers to as "MCP servers").
* He sees local [[concepts/open-weight-models|open-weight models]] like `gpt-oss` as a way to offload simpler, mundane tasks, preserving cloud usage for more complex or compute-intensive operations.
* Being able to run models privately also offers significant [[concepts/privacy|privacy]] advantages, as data isn't sent to external servers unless explicitly desired.

**3\. Understanding Limitations: Performance & [[concepts/context-window|Context Window]] (0:47)**

* **Performance:** `gpt-oss` is _not_ equivalent to larger, more powerful frontier models like GPT-4o or [[entities/claude-sonnet|Claude Sonnet]]. Local machines have limited computing power compared to cloud infrastructure.
* **Context Window (Crucial Point):** This is the primary technical limitation for local models. The model's inherent context window support might be very large (e.g., `gpt-oss-20b` supports up to 131,072 [[concepts/tokens|tokens]]). However, the _computer's available memory_ dictates the _actual usable context window_. **Impact of Tools:** Every tool enabled (even just its description) consumes tokens in the context window from the beginning of a chat. When tool _calls_ are made, they consume even more tokens, rapidly filling up the available context. This is a common issue with local [[concepts/reasoning-models|open-source models]], especially when using many tools.

**4\. Running** `**gpt-oss**` **Locally on [[entities/mac|Mac]] (2:29)**

* The speaker [[concepts/notes|notes]] two primary ways to run [[concepts/open-source|open-source]] models on Mac: **[[entities/llama|Ollama]]** and **[[entities/lm-studio|LM Studio]]**. Both are applications that download and serve models locally.
* **Switch to LM Studio (2:51):** While he used [[entities/ollama|Ollama]] for two years, he switched to LM Studio specifically because it offered better dynamic control over the context window and improved [[concepts/mcp-server|MCP server]] [[concepts/integration|integration]].
* **LM Studio [[concepts/setup|Setup]] (3:15):** Download and install LM Studio from `lmstudio.ai`. Navigate to the "Discover" tab to search for and download models (e.g., `openai/gpt-oss-20b`). **Manual Model Load [[concepts/parameters|Parameters]] (3:58):** The speaker strongly recommends toggling on "Manually choose model load parameters" when loading a model. Ollama typically defaults to a 2000-token context window. LM Studio defaults to 4096 tokens. Users can manually adjust this based on their computer's unified [[concepts/memory|memory]]. His [[entities/macbook|MacBook]] Pro M4 with 36GB unified memory can comfortably run at 32768 tokens. **MCP Server Integration (4:10):** LM Studio allows users to install standard `mcp.json` compatible [[concepts/plugins|plugins]] (like `mcp/bright-data`, `mcp/basic-memory`, `mcp/context7`, `mcp/sequential-thinking`). Users can easily toggle individual tools within these plugins on or off to manage context consumption.

**5\. Demonstration and Insights (5:07)**

* **Initial Test (4096-token context):** A simple "Hey tell me about yourself" prompt fills 11% of the context window. A complex prompt asking the `bright-data` MCP to scrape a website quickly causes the context to jump to 74.8% full just from the tool descriptions and initial thoughts. The tool then fails, entering a "failure [[concepts/loop|loop]]" and blowing the context window out to `1434.8%` full. This vividly illustrates the rapid context consumption when tools are involved.
* **Adjusted Test (32768-token context):** After increasing the context length, the same complex prompt only fills 29.2% of the context, and the tool successfully scrapes the requested information. This demonstrates the importance of optimizing the context window for local [[concepts/hardware|hardware]].

**6\. Conclusion and Future Outlook (7:25)**

* **Benefits:** Running `gpt-oss` locally is free, private, and independent of internet access.
* **User Responsibility:** Users need to adjust their usage of context and [[concepts/mcps|MCPs]], and understand the memory limitations of their hardware.
* **Optimization:** The speaker expects continuous optimization of these models and platforms to improve performance and reduce memory footprint.
* **Strategic Usage:** He plans to offload simpler cloud-based MCP tasks to his local `gpt-oss` setup, saving his paid cloud API usage for more intensive tasks.
* **Safety/Guardrails (8:16):** OpenAI also launched a "[[concepts/red-teaming|red-teaming]]" challenge for `gpt-oss`. In his [[concepts/testing|testing]], the speaker found the model to be "quite prudent" and unwilling to perform certain actions (e.g., LinkedIn [[concepts/scraping|scraping]]) due to its safety protocols, even when direct tool calls were attempted. This shows that despite being open-weight, it retains some of OpenAI's safety measures.
* **Recommendation:** He recommends LM Studio as the best platform for testing these models and encourages users to experiment with their computer's specifications to find the optimal model and context window settings.