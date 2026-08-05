---
title: Configuring an LLM Agent for Looker Data Interaction Using ADK and MCP
date: 2026-06-13
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Configuring an LLM Agent for Looker Data Interaction Using ADK and MCP
Generated: 2026-06-13 · API: Gemini 2.5 Flash · Modes: Summary

---

## Configuring an LLM Agent for Looker Data Interaction Using ADK and MCP
**Clip title:** Your first agent configuration with MCP and Looker
**Author / channel:** Google Cloud Tech
**URL:** https://www.youtube.com/watch?v=yeRvxe7MRj4

### Summary
This video provides a practical guide on configuring an AI agent to interact with Looker, leveraging the Agent Development Kit (ADK) and the MCP Toolbox for Databases. The main topic revolves around extending Looker's data modeling, governance, and visualization capabilities by enabling Large Language Models (LLMs) to interact with enterprise data through well-defined agents. The speaker emphasizes that this integration moves beyond simple connectivity, focusing on designating specific functionalities to enhance the LLM's ability to provide robust, data-driven responses.

The video outlines a clear, step-by-step process for setting up this agentic system. Key steps include: securing Looker API credentials (Client ID and Client Secret) as environment variables, preparing the local Python development environment by creating a virtual environment and installing the Google ADK, and then using the ADK to create a basic agent. A crucial part of the setup involves defining the Looker tools and sources within a `tools.yaml` file, which specifies how the agent can access and interact with Looker instances and their underlying database connections.

Further implementation details involve modifying the `agent.py` file. This includes importing essential packages, configuring the MCP (Multi-Modal Command Protocol) server parameters to connect to Looker using the previously secured credentials and the `tools.yaml` file, and finally, initializing the root LLM agent (e.g., using Gemini 1.5 Flash). The agent is provided with an instruction set and linked to the defined Looker toolset, enabling it to translate natural language prompts into actionable requests that leverage Looker's functionalities.

The video concludes with a demonstration of the configured agent using the `adk web` interface. Initially, the agent confirms access to only one defined tool (`get_connections`). After quickly modifying the `tools.yaml` file to include another Looker-specific tool (`create_dashboard`) and restarting the application, the agent correctly reports access to both tools. This illustrates the dynamic nature of the setup and its potential to deliver actionable data, dashboards, and health analyses by guiding the LLM to effectively utilize Looker's extensive capabilities. The speaker encourages users to explore the various Looker MCP tools to unlock further possibilities for their agentic systems.

### Video Description & Links
#### Description
Check out the MCP docs here. → https://goo.gle/4uHIS4d

In this video, we'll dive deep into building AI-powered agents with the Agent Development Kit (ADK) and Looker and how to effectively ground them in your enterprise data. We'll review the Model Context Protocol (MCP), the MCP Toolbox for Databases, and the tools.yaml configuration, as well as the initial steps for securing Looker API credentials and setting up your Python environment. Learn how to troubleshoot your setup, define specific Looker tool capabilities, and create a functional ADK agent that translates prompts into actionable data requests through a local web interface.

#Looker #GoogleCloud

Speakers: Chrissie Goodrich
Products Mentioned: Looker

#### URLs
- https://goo.gle/4uHIS4d
