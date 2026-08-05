---
title: AI Agent Capability Extension via Model Context Protocol Server
date: 2026-06-24
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# AI Agent Capability Extension via Model Context Protocol Server
Generated: 2026-06-24 · API: Gemini 2.5 Flash · Modes: Summary

---

## AI Agent Capability Extension via Model Context Protocol Server
**Clip title:** How to build an AI Agent and MCP Server (step-by-step)
**Author / channel:** Google Cloud Tech
**URL:** https://www.youtube.com/watch?v=wBnnA8aIxUs

### Summary
This video introduces the Model Context Protocol (MCP) and demonstrates how to connect an AI agent to an MCP server, thereby extending the agent's capabilities to interact with external tools and real-world data. Smitha Kolan, a Senior AI Engineer at Google, explains that MCP acts as a standard way for language model-powered agents to communicate with various external tools, much like a translator or a wire connecting an agent's "brain" to "hands and eyes" in the real world.

The core mechanism of MCP involves the agent querying the MCP server for available tools, receiving a list of tool names, arguments, and return types (described in schemas). The agent then decides which tool to call, sending specific arguments. The tool executes as its own independent process, and the result is returned to the agent in JSON format. This architecture offers four key benefits: isolation, ensuring that a tool's crash doesn't bring down the entire agent; interoperability, allowing tools to be written in any programming language; discoverability, as tools self-describe their functionalities; and scalability, enabling easy addition, swapping, or versioning of tools without modifying the core agent code.

The practical demonstration builds upon a previously established blog-writing AI agent. Originally, this agent relied solely on its internal language model for planning and writing. By integrating an MCP server, the agent is enhanced to fetch live trending data from Google Trends. The video details the Python code necessary to create a minimal MCP server (`server.py`) that exposes a 'trends' tool. This involves wrapping a standard Python function as an ADK `FunctionTool` (which automatically generates the schema), creating an `MCP Server` object, and defining `list_tools` and `call_tool` handlers. Finally, the main agent file (`agent.py`) is updated to include this `trends_mcp` tool in its toolset.

In conclusion, connecting the AI agent to the MCP server transforms it from a chatbot relying only on its internal model into a more robust and context-aware system. The agent can now proactively query real-world information, like trending topics on Google Trends, before generating content. This pattern keeps the AI agent lightweight while significantly expanding its utility and ability to interact with the external world through specialized, isolated, and discoverable tools, making agents more powerful and adaptable.

### Video Description & Links
#### Description
Github repo → https://goo.gle/3RQR3g7 
Google MCP servers → https://goo.gle/4xfafo8 

Model Context Protocol (MCP) is the open standard *"universal adapter"* that empowers AI agents to overcome static training data by securely and uniformly connecting with the real world's live data and actionable tools. Join Smitha Kolan as she demonstrates how to connect external tools, such as Google Trends, using MCPs with AI agents. Watch along and unlock the power of Model Context Protocol (MCP) with Google's Agent Development Kit (ADK).

Chapters: 
0:00 - Intro & What is Model Context Protocol (MCP)? 
0:49 - How MCP works under the hood 
2:41 - [Demo] Connecting Google Trends with a blog writing AI agent 
6:22 - Running the agent in ADK Web UI 
7:10 - Summary

More resources:
Google Cloud MCP servers docs → https://goo.gle/4oeVaPk 
Manage MCP servers docs → https://goo.gle/3PLKtqG 
Configure MCP in an AI application → https://goo.gle/4oab6lP 

🔗 Connect with Smitha online:
YouTube → https://goo.gle/Smitha-on-YouTube 
Linkedin → https://goo.gle/Smitha-on-LinkedIn
X → https://goo.gle/Smitha-on-X 

Watch more Modern AI Agents: From Theory to Production → https://goo.gle/Learn-with-Smitha
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
