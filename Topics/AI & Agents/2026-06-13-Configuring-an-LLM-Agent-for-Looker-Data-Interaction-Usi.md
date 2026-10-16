---
wiki-ingested: true
title: Configuring an LLM Agent for Looker Data Interaction Using ADK and MCP
date: 2026-06-13
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
aliases:
  - "lab-notes/2026-06-13-Configuring-an-LLM-Agent-for-Looker-Data-Interaction-Usi"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Configuring an LLM Agent for Looker Data Interaction Using ADK and MCP
**Clip title:** Your first [[concepts/agent-configuration|agent configuration]] with MCP and Looker
**Author / channel:** [[entities/google-cloud|Google Cloud]] Tech
**URL:** https://www.youtube.com/watch?v=yeRvxe7MRj4

### Summary
This video provides a practical guide on configuring an [[concepts/ai-agent|AI agent]] to interact with Looker, leveraging the [[concepts/agent-development|Agent Development]] Kit (ADK) and the MCP Toolbox for Databases. The main topic revolves around extending Looker's data modeling, [[concepts/governance|governance]], and visualization capabilities by enabling [[concepts/large-language-model-llm|Large Language Models]] (LLMs) to interact with enterprise data through well-defined agents. The [[entities/speaker|speaker]] emphasizes that this integration moves beyond simple connectivity, focusing on designating specific functionalities to enhance the LLM's ability to provide robust, data-driven responses.

The video outlines a clear, step-by-step process for setting up this [[concepts/agentic-system|agentic system]]. Key steps include: securing Looker [[concepts/api-keys|API credentials]] (Client ID and Client Secret) as [[concepts/environment-variables|environment variables]], preparing the local [[concepts/python|Python]] [[concepts/coding-workspace|development environment]] by creating a [[concepts/virtual-environment|virtual environment]] and installing the [[concepts/google-search|Google]] ADK, and then using the ADK to create a basic agent. A crucial part of the setup involves defining the Looker tools and sources within a `tools.yaml` file, which specifies how the agent can access and interact with Looker instances and their underlying database connections.

Further [[concepts/implementation-details|implementation details]] involve modifying the `agent.py` file. This includes importing essential packages, configuring the MCP (Multi-Modal Command Protocol) server parameters to connect to Looker using the previously secured credentials and the `tools.yaml` file, and finally, initializing the root LLM agent (e.g., using [[concepts/gemini|Gemini]] 1.5 Flash). The agent is provided with an [[concepts/instruction-set|instruction set]] and linked to the defined Looker toolset, enabling it to translate natural [[concepts/natural-language-prompting|language prompts]] into actionable requests that leverage Looker's functionalities.

The video concludes with a demonstration of the configured agent using the `adk web` interface. Initially, the agent confirms access to only one defined tool (`get_connections`). After quickly modifying the `tools.yaml` file to include another Looker-specific tool (`create_dashboard`) and restarting the application, the agent correctly reports access to both tools. This illustrates the dynamic nature of the setup and its potential to deliver actionable data, dashboards, and [[concepts/health|health]] analyses by guiding the LLM to effectively utilize Looker's extensive capabilities. The [[entities/speaker|speaker]] encourages users to explore the various Looker MCP tools to unlock further possibilities for their [[concepts/agentic-frameworks|agentic systems]].

### Video Description & Links
#### Description
In this video, we'll dive deep into building AI-powered agents with the Agent Development Kit (ADK) and Looker and how to effectively ground them in your enterprise data. We'll review the [[concepts/external-tools|Model Context Protocol]] (MCP), the MCP Toolbox for Databases, and the tools.yaml configuration, as well as the initial steps for securing Looker API credentials and setting up your Python environment. Learn how to troubleshoot your setup, define specific Looker tool capabilities, and create a functional ADK agent that translates prompts into actionable data requests through a local web interface.

#Looker #GoogleCloud

Speakers: Chrissie Goodrich
Products Mentioned: Looker

## Related Concepts
- [[concepts/adk|ADK]]
- [[concepts/model-context-protocol|MCP]]
- [[concepts/llm|LLM]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
- Looker — [Wikipedia](https://en.wikipedia.org/wiki/Looker)
- [[concepts/adk|Agent Development Kit]]
- [[concepts/data-interaction|Data Interaction]]
- [[concepts/enterprise-data-modeling|Enterprise Data Modeling]] — [Wikipedia](https://en.wikipedia.org/wiki/Enterprise_data_modelling)
- LLM [[concepts/agent-configuration|Agent Configuration]]
- Looker [[concepts/data-interaction|Data Interaction]]
- [[concepts/adk|Agent Development Kit (ADK)]]
- [[concepts/model-context-protocol|Model Context Protocol (MCP)]]
- [[concepts/python|Python]] [[concepts/virtual-environment|Virtual Environment]]
- Agent [[concepts/prompt-based-modeling|Prompt Engineering]]
- [[concepts/agentic-system|Agentic System]] Setup

## Related Entities
- [[entities/google-cloud-tech|Google Cloud Tech]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- Looker — [Wikipedia](https://en.wikipedia.org/wiki/Looker)