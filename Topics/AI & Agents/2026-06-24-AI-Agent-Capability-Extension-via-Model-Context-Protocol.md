---
wiki-ingested: true
title: AI Agent Capability Extension via Model Context Protocol Server
date: 2026-06-24
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-24 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## AI Agent Capability Extension via Model Context Protocol Server
**Clip title:** How to build an [[concepts/ai-assistant|AI Agent]] and MCP Server (step-by-step)
**[[entities/tasia-custode|Author]] / channel:** [[concepts/google-search|Google]] Cloud Tech
**URL:** https://www.youtube.com/watch?v=wBnnA8aIxUs

### Summary
This video introduces the [[concepts/mcps|Model Context Protocol]] (MCP) and demonstrates how to connect an [[concepts/ai-agent|AI agent]] to an [[concepts/mcp-server|MCP server]], thereby extending the agent's capabilities to interact with [[concepts/external-tools|external tools]] and real-[[entities/earth|world]] data. [[entities/smitha-kolan|Smitha Kolan]], a Senior [[entities/ai-engineer|AI Engineer]] at [[concepts/google-search|Google]], explains that MCP acts as a standard way for language model-powered agents to communicate with various external tools, much like a translator or a wire connecting an agent's "brain" to "hands and eyes" in the real [[entities/earth|world]].

The core mechanism of MCP involves the agent querying the MCP server for available tools, receiving a list of tool names, arguments, and return types (described in schemas). The agent then decides which tool to call, sending specific arguments. The tool executes as its own independent process, and the result is returned to the agent in [[concepts/json-format|JSON format]]. This architecture offers four key benefits: [[concepts/disconnection|isolation]], ensuring that a tool's crash doesn't bring down the entire agent; interoperability, allowing tools to be written in any programming language; discoverability, as tools self-describe their functionalities; and scalability, enabling easy addition, swapping, or [[concepts/version-numbers|versioning]] of tools without modifying the core agent code.

The practical demonstration builds upon a previously established blog-[[concepts/writing|writing]] AI agent. Originally, this agent relied solely on its internal [[concepts/statistical-language-modeling|language model]] for planning and [[concepts/writing|writing]]. By integrating an MCP server, the agent is enhanced to fetch live trending data from Google Trends. The video details the [[concepts/python|Python]] code necessary to create a minimal MCP server (`server.py`) that exposes a 'trends' tool. This involves wrapping a standard [[concepts/python|Python]] function as an ADK `FunctionTool` (which automatically generates the schema), creating an `MCP Server` object, and defining `list_tools` and `call_tool` handlers. Finally, the main agent file (`agent.py`) is updated to include this `trends_mcp` tool in its toolset.

In conclusion, connecting the AI agent to the MCP server transforms it from a chatbot relying only on its internal model into a more robust and context-aware system. The agent can now proactively query real-world information, like trending topics on Google Trends, before generating content. This pattern keeps the AI agent lightweight while significantly expanding its utility and ability to interact with the external world through specialized, isolated, and discoverable tools, making agents more powerful and adaptable.

### Video Description & Links
#### Description
Github repo → https://goo.gle/3RQR3g7 
Google [[concepts/mcp-servers|MCP servers]] → https://goo.gle/4xfafo8 

Model Context Protocol (MCP) is the open standard *"universal adapter"* that empowers [[concepts/ai-agents|AI agents]] to overcome static [[concepts/custom-dataset|training data]] by securely and uniformly connecting with the real world's live data and actionable tools. Join Smitha Kolan as she demonstrates how to connect external tools, such as Google Trends, using MCPs with AI agents. Watch along and unlock the power of Model Context Protocol (MCP) with Google's [[concepts/agent-development|Agent Development]] Kit (ADK).

Chapters: 
0:00 - Intro & What is Model Context Protocol (MCP)? 
0:49 - How MCP works under the hood 
2:41 - [Demo] Connecting Google Trends with a blog writing AI agent 
6:22 - Running the agent in ADK Web UI 
7:10 - Summary

More resources:
Google Cloud MCP servers [[entities/google-docs|docs]] → https://goo.gle/4oeVaPk 
Manage MCP servers docs → https://goo.gle/3PLKtqG 
Configure MCP in an [[concepts/ai-application|AI application]] → https://goo.gle/4oab6lP 

🔗 Connect with Smitha online:
YouTube → https://goo.gle/Smitha-on-YouTube 
Linkedin → https://goo.gle/Smitha-on-LinkedIn
X → https://goo.gle/Smitha-on-X 

Watch more Modern AI Agents: From [[concepts/theory|Theory]] to Production → https://goo.gle/Learn-with-Smitha
🔔 Subscribe to Google Cloud Tech → https://goo.gle/GoogleCloudTech

#AIAgents #GoogleTrends

Speakers: Smitha Kolan
Products Mentioned: Agent Development Kit

#### URLs
- https://goo.gle/3RQR3g7
- https://goo.gle/4xfafo8
- https://goo.gle/4oeVaPk
- https://goo.gle/3PLKtqG
- https://goo.gle/4oab6lP
- https://goo.gle/Smitha-on-YouTube
- https://goo.gle/Smitha-on-LinkedIn
- https://goo.gle/Smitha-on-X
- https://goo.gle/Learn-with-Smitha
- https://goo.gle/GoogleCloudTech

## Related Concepts
- [[concepts/model-context-protocol|Model Context Protocol]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol)
- [[concepts/ai-agent|AI Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agent)
- [[concepts/mcp-server|MCP Server]] — [Wikipedia](https://en.wikipedia.org/wiki/MCP_Server)
- [[concepts/external-tools|External Tools]] — [Wikipedia](https://en.wikipedia.org/wiki/External_Tools)
- [[concepts/statistical-language-modeling|Language Model]] — [Wikipedia](https://en.wikipedia.org/wiki/Language_Model)
- [[concepts/planning-errors|Tool Integration]] — [Wikipedia](https://en.wikipedia.org/wiki/Tool_Integration)
- [[concepts/real-world-data|Real-world Data]] — [Wikipedia](https://en.wikipedia.org/wiki/Real-world_Data)
- [[concepts/standardized-communication|Standardized Communication]] — [Wikipedia](https://en.wikipedia.org/wiki/Standardized_Communication)
- [[concepts/planning-errors|Capability Extension]] — [Wikipedia](https://en.wikipedia.org/wiki/Capability_Extension)
- [[concepts/unsupervised-learning|Google Cloud]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Cloud)
- [[concepts/out-of-process-enforcement|Process Isolation]] — [Wikipedia](https://en.wikipedia.org/wiki/Process_Isolation)
- [[concepts/wallet|Interoperability]] — [Wikipedia](https://en.wikipedia.org/wiki/Interoperability)
- Tool Discoverability — [Wikipedia](https://en.wikipedia.org/wiki/Tool_Discoverability)
- [[concepts/structured-data-conversion|Schema Definition]] — [Wikipedia](https://en.wikipedia.org/wiki/Schema_Definition)
- JSON Response — [Wikipedia](https://en.wikipedia.org/wiki/JSON_Response)
- [[concepts/adk|Agent Development Kit]] — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Development_Kit)
- Google Trends — [Wikipedia](https://en.wikipedia.org/wiki/Google_Trends)

## Related Entities
- [[entities/google-cloud-tech|Google Cloud Tech]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Cloud_Tech)
- [[entities/smitha-kolan|Smitha Kolan]] — [Wikipedia](https://en.wikipedia.org/wiki/Smitha_Kolan)
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- [[entities/google-cloud|Google Cloud]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Cloud)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- Google Trends — [Wikipedia](https://en.wikipedia.org/wiki/Google_Trends)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)
- LinkedIn — [Wikipedia](https://en.wikipedia.org/wiki/LinkedIn)
- [[entities/x|X]] — [Wikipedia](https://en.wikipedia.org/wiki/X)
- [[entities/github|Github]] — [Wikipedia](https://en.wikipedia.org/wiki/Github)
- [[entities/python|Python]] — [Wikipedia](https://en.wikipedia.org/wiki/Python)
- ADK — [Wikipedia](https://en.wikipedia.org/wiki/ADK)