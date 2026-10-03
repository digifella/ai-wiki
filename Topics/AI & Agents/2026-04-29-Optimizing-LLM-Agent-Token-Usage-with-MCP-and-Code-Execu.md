---
wiki-ingested: true
title: Optimizing LLM Agent Token Usage with MCP and Code Execution
date: 2026-04-29
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
aliases:
  - "lab-notes/2026-04-29-Optimizing-LLM-Agent-Token-Usage-with-MCP-and-Code-Execu"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Optimizing LLM Agent Token Usage with MCP and Code Execution
**Clip title:** Save 98% on [[concepts/ai-agent|AI Agent]] [[concepts/tokens|Tokens]] With This One Trick
**Author / channel:** [[concepts/prompt-engineering|Prompt Engineering]]
**URL:** https://www.youtube.com/watch?v=rU6IYiQ1SdQ

### Summary
The video addresses the significant challenge of excessive token usage in [[concepts/large-language-model|Large Language Model]] (LLM) agents, particularly those interacting with tools via the [[concepts/multi-connector-protocol-mcp|Multi-Connector Protocol (MCP)]]. The core problem is that a substantial portion of an [[entities/agent|agent]]'s [[concepts/context-window|context window]] can be filled by [[concepts/tool-definitions|tool definitions]] before any meaningful interaction even begins, leading to higher costs, slower performance, and reduced [[concepts/accuracy|accuracy]]. To combat this, the video presents 10 techniques, ranging from simple configuration [[concepts/adjustments|adjustments]] to advanced architectural patterns, aiming to achieve token reductions of up to 98%.

Among the most impactful advanced techniques discussed is **[[concepts/code-execution|Code Execution]] with MCP**, championed by [[entities/anthropic|Anthropic]] and Cloudflare (as "[[concepts/code-mode|Code Mode]]"). This approach treats the [[concepts/mcp-server|MCP server]] as a file system, allowing the agent to read and load only the specific tools it needs for a given task within a sandbox environment. This [[concepts/progressive-disclosure|progressive disclosure]] mechanism can dramatically reduce token usage—for instance, an example showed a 98% reduction from 150,000 to 2,000 [[concepts/tokens|tokens]] for a document transfer task. It also offers secondary benefits like filtering large datasets in code, executing [[concepts/loops|loops]] and conditionals without [[concepts/rounding|round]] trips to the model, and enhancing data [[concepts/privacy|privacy]] by keeping sensitive intermediate results out of the [[concepts/context-window|context window]]. Closely related is **Programmatic [[concepts/tool-calling|Tool Calling]]**, where the LLM writes code to call tools as [[concepts/python|Python]] functions, further ensuring only final outputs enter the context, thereby unlocking significant [[concepts/performance-gains|performance gains]] in complex [[concepts/agentic-search|agentic search]] benchmarks.

Other effective strategies focus on optimizing tool discovery and managing tool sets. The **[[concepts/tool-search-tool|Tool Search Tool]]** allows agents to dynamically search a [[concepts/catalog|catalog]] of thousands of tools, loading only relevant definitions on demand. This can reduce tool definitions in the prompt from tens of thousands to just a handful, yielding over 85% token savings and improving [[concepts/tool-selection|tool selection]] [[concepts/accuracy|accuracy]]. For simpler configurations, **Tool Groups** enable developers to categorize tools by function (e.g., e-commerce, finance) and load only the necessary group for a [[concepts/session|session]], directly controlling token cost. An even more granular approach, **Surgical Selection**, lets developers specify exact tool names to load, ideal for highly specialized production agents. Furthermore, **Dynamic Context Loading** introduces a tiered disclosure system, providing the agent with progressively more detailed tool information (server descriptions, tool summaries, full schema) only when it [[concepts/commits|commits]] to needing it, thus keeping the context window [[concepts/lean|lean]] and relevant.

Finally, the video explores output optimization and architectural [[concepts/design|design]] patterns. Techniques like **Output Stripping** (e.g., removing [[concepts/markdown|Markdown]], ads, or related searches from web results) ensure that only plain, essential [[concepts/text|text]] is passed back to the LLM, preventing the model from processing unnecessary formatting. **TOON (Token-Oriented Object Notation)** is presented as a specialized format to minimize token count in [[concepts/structured-data|structured data]] by declaring field names once and streaming data values, achieving 40-60% reductions over standard JSON for flat tabular data. For very large-scale, multi-team environments, a **Layered MCP [[concepts/design|Design]]** separates the orchestrator LLM from underlying tools via [[concepts/sub-agents|sub-agents]] for discovery, planning, and execution, allowing the top-level agent's context to remain pristine. The overarching takeaway is to **stack** these techniques, combining multiple approaches to compound savings and unlock the full potential of efficient, accurate, and cost-effective [[concepts/llm-based-agents|LLM agents]]. Many of the discussed tools, including [[concepts/bright-data|Bright Data]]'s Web [[concepts/mcp-server|MCP server]], are [[concepts/open-source|open-source]] and MIT-licensed, encouraging broader [[concepts/adoption|adoption]] and experimentation.

## Related Concepts
- [[concepts/llm-agent-token-usage|LLM Agent token usage]]
- [[concepts/model-context-protocol|Model Context Protocol (MCP)]]
- [[concepts/code-execution|Code execution]]
- [[concepts/token-optimization|Token optimization]]
- [[concepts/ai-agent|AI Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_agent)
- [[concepts/context-management|Context Window Management]]
- [[concepts/tool-definitions|Tool Definitions]]
- [[concepts/progressive-disclosure|Progressive Disclosure]] — [Wikipedia](https://en.wikipedia.org/wiki/Progressive_disclosure)
- [[concepts/programmatic-tool-calling|Programmatic Tool Calling]]
- [[concepts/agent-selection|Tool Search]]
- [[concepts/agentic-search|Agentic Search]]
- [[concepts/ai-security|Data Privacy]] — [Wikipedia](https://en.wikipedia.org/wiki/Information_privacy)
- [[concepts/tool-selection|Tool Selection Accuracy]]
