---
type: concept
domain: tools-platforms
tags:
  - "concept"
  - "scraping"
  - "agent-skills"
  - "llm-efficiency"
  - "markdown"
  - "code-based-tools"
  - "web-scraping"
aliases:
  - "Code vs Markdown Scraping"
  - "Agent Skills for Scraping"
summary: Exploration of why code-based approaches are more efficient than markdown for web scraping in LLM agent workflows.
updated: 2026-05-23
group: apis-integrations-mcp
---
# Markdown Based Scraping

[[concepts/markdown|Markdown]]-based [[concepts/scraping|scraping]] refers to approaches where [[concepts/llm-based-agents|large language model agents]] use markdown formatting to [[concepts/structure|structure]] and extract web content. While markdown provides a human-readable format for representing scraped data, it presents efficiency challenges when used as the primary mechanism for [[concepts/web-crawling|web scraping]] workflows in LLM [[concepts/agentic-systems|agent systems]].

## Code-Based Approaches

Direct [[concepts/code-based-scraping|code-based scraping]] methods, such as [[entities/python|Python]] libraries or structured APIs, prove more efficient than markdown intermediaries for several reasons. [[concepts/code|Code]] allows [[concepts/agents|agents]] to execute precise extraction logic, handle dynamic content, and process data transformations without the overhead of converting between markdown representations. This directness reduces latency and [[concepts/token-consumption|token consumption]] in [[concepts/multi-agent-workflows|agent workflows]], where every computational step affects overall performance and [[concepts/cost|cost]].

## Practical Implications

For LLM agents performing [[concepts/web-scraping|web scraping]] tasks, code-based approaches enable clearer error handling, more reliable data validation, and easier [[concepts/integration|integration]] with downstream processing steps. Markdown representations are better suited as [[concepts/output|output]] formats for human consumption or documentation rather than as the primary mechanism for agent-driven [[concepts/information-extraction|data extraction]]. The distinction reflects a broader principle in [[entities/agent|agent]] [[concepts/design|design]]: intermediate representations should match the task requirements rather than optimizing for human readability [[concepts/assistive-technology|at]] the expense of [[concepts/computational-efficiency|computational efficiency]].
## Source Notes
- 2026-04-07: Agent Skills: Code Beats Markdown (Here's Why)