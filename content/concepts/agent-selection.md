---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "agent-selection"
  - "tool-calling"
  - "agent-systems"
  - "anthropic"
  - "llm-agents"
  - "tool-search"
aliases:
  - "Agent Choice"
  - "Tool Selection for Agents"
summary: Methods for selecting appropriate agents and tools, including advanced tool-calling techniques from Anthropic and approaches using MCP for token optimization.
updated: 2026-05-01
---
# Agent Selection

Agent selection encompasses the methods and strategies for choosing appropriate [[concepts/agents|agents]] and tools within AI systems. This involves determining which agent should handle a given task and which tools that agent should have access to. Effective agent selection is critical for system performance, as it directly impacts response quality, latency, and resource efficiency. The problem becomes particularly complex in [[concepts/expertise-based-ai-assistants|multi-agent systems]] where task routing and capability matching are essential.

## Tool-Calling Mechanisms

Modern agent frameworks employ structured tool-calling approaches that allow language models to request specific tools or functions as part of their [[concepts/reasoning-steps|reasoning process]]. These mechanisms provide a formalized interface between the agent and available capabilities, typically using JSON schemas or similar structured formats to define tool [[concepts/parameters|parameters]] and expected outputs. [[entities/anthropic-institute|Anthropic]] has developed advanced tool-calling techniques that improve [[concepts/software-reliability|reliability]] and reduce errors in tool invocation, enabling more precise agent behavior and reducing the need for extensive [[concepts/prompting|prompting]] workarounds.

## Token Optimization with MCP

The [[concepts/external-tools|Model Context Protocol]] (MCP) offers an approach to [[concepts/agentic-tool|agent tool]] selection that prioritizes token efficiency. By providing a standardized interface for tool discovery and invocation, MCP allows systems to manage tool availability dynamically without loading all [[concepts/tool-definitions|tool definitions]] into the model's [[concepts/context-window|context window]]. This approach is particularly valuable in resource-constrained environments or when working with large numbers of potential tools, as it reduces the [[concepts/contextual-information|contextual information]] needed while maintaining access to diverse capabilities.

## Selection Strategies

Agent selection strategies vary depending on system [[concepts/architecture|architecture]] and constraints. Routing-based approaches use classifiers or rule systems to direct tasks to [[concepts/specialized-sub-agents|specialized agents]], while capability-matching methods analyze task requirements against available agent competencies. Hybrid systems often combine multiple selection approaches, using initial classifiers for coarse routing followed by fine-grained [[concepts/tool-selection|tool selection]] within each agent based on the specific task context.

## Source Notes
- 2026-04-27: Google Gemma · [▶ source](https://www.youtube.com/watch?v=yJr_kTCOkFo)
- 2026-04-29: Optimizing LLM Agent · [▶ source](https://www.youtube.com/watch?v=rU6IYiQ1SdQ)