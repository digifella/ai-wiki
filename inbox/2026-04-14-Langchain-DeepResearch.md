---
wiki-ingested: true
title: "Langchain DeepResearch"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: agent-systems-skills
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[entities/langchain|Langchain]] DeepResearch

---
---
<https://www.youtube.com/watch?v=agGiWUpxkhg>
This video provides a detailed overview and demonstration of the LangChain [[concepts/visualization-generation|Deep Research]] [[entities/agent|Agent]], an [[concepts/open-source|open-source]], highly configurable agent built on the [[concepts/langgraph-framework|LangGraph framework]].
Here's a [[concepts/summary|summary]] of the video's content:
**1\. Introduction & Initial Demonstration (0:00-0:56)**

* The [[entities/speaker|speaker]] introduces the LangChain [[concepts/deep-research-agent|Deep Research Agent]], emphasizing its configurability and open-source [[entities/nature|nature]].
* **Demo:** The user asks the agent to plan the "cheapest trip" for three people from New York to Amsterdam and Norway (departing Sept 12, returning Sept 21).
* The agent immediately asks [[concepts/clarifying-questions|clarifying questions]] (e.g., number of travelers, preferred airports, specific Norwegian cities, order of visits).
* The user provides the additional context (2 roommates, no preferred airports, Amsterdam first, then Oslo, Bergen, Flåm).
* The agent confirms the details and kicks off the deep research process.

**2\. Deep Research Agent [[concepts/architecture|Architecture]] (1:07-8:30)** The architecture is divided into three main phases: Scope, Research, and Write.

* **Phase 1: Scope (2:09-4:07)**
	**User Clarification:** The agent (using [[concepts/structured-output|structured output]] from an LLM) can ask follow-up questions to gather necessary context from the user, especially when the initial prompt is vague. This ensures the research is well-targeted. **Brief Generation:** After clarifying, the entire [[concepts/conversation-history|chat history]] (user requests and agent clarifications) is compressed into a single, cohesive "research brief" using an LLM. This helps the agent focus and iterate against a clear target, preventing [[concepts/context-window|context window]] bloat. **LangSmith Trace Example (3:02):** The video demonstrates the `clarify_with_user` step checking if clarification is needed and the `write_research_brief` step condensing the conversation into a `research_brief` string.
	
* **Phase 2: Research (4:07-8:30)**
	**Research Supervisor:** This component takes the research brief and spawns "research [[concepts/sub-agents|sub-agents]]" to research specific sub-topics in-depth and in parallel. This is a [[concepts/context-engineering|context engineering]] technique to break down complex research into manageable, isolated tasks. **Research Sub-agents:** Each sub-agent focuses on a single sub-topic within its own separate context window. They utilize a [[concepts/tool-calling|tool-calling]] [[concepts/loop|loop]], iteratively calling various tools (e.g., `tavily_search`, `Search_SearchGoogle`, `Search_SearchHotels`, `Search_OneWayFlights`, `Search_RoundtripFlights`, and custom MCP tools) to gather information. **Findings Compression:** Before returning to the supervisor, each sub-agent performs an additional compression step to synthesize its raw tool outputs and findings into a clean, comprehensive mini-report. This is crucial because raw tool outputs can be messy and contain irrelevant information, potentially overloading the supervisor's context window. The compression step emphasizes preserving _all relevant information_ verbatim rather than summarizing. **Supervisor Decision:** The supervisor continuously receives compressed findings from the sub-agents, analyzes them, and decides whether to spawn more sub-agents for further research or conclude the research if sufficient information has been gathered. This allows for maximal flexibility and dynamic research depth, mimicking human research patterns. **LangSmith Trace Example (5:10):** The trace shows the supervisor kicking off three parallel research topics (flights, intra-European transport, accommodation). It then dives into one sub-agent's tool-calling loop, showing calls to various search tools, and finally the `ResearchComplete` tool and the `compress_research` step before returning findings.
	
* **Phase 3: Write (8:30-9:30)**
	**One-Shot Report Generation:** Once the supervisor is satisfied, all condensed research findings from the various sub-agents are presented to a "writer" LLM in a single request. This "one-shot" approach for final report generation was found to produce more cohesive and less disjointed reports compared to parallel report [[concepts/writing|writing]]. **LangSmith Trace Example (8:58):** The trace for the final report shows the entire research brief and the compressed findings from all sub-agents being fed into a single LLM call to generate the final report.
	

**3\. [[concepts/running|Running]] Locally & Open Agent Platform (9:30-12:46)**

* **Local [[concepts/setup|Setup]]:** The agent is open source and built on LangGraph. The video shows how to clone the [[entities/github|GitHub]] repository (`open_deep_research`), create a [[concepts/virtual-environment|virtual environment]], install dependencies, set [[concepts/api-keys|API keys]] in a `.env` file ([[entities/openai|OpenAI]], Tavily, [[entities/google|Google]], LangSmith tracing), and run [[entities/langgraph-studio|LangGraph Studio]] locally (`uv run langgraph dev`).
* **LangGraph Studio UI:** The Studio UI provides a visual representation of the agent's graph, allowing users to interact with it, test different configurations (e.g., allow clarification, max concurrent research units, search API type, different [[concepts/llm-models|LLM models]] for [[concepts/summarization|summarization]], research, and final report), and observe traces.
* **Open Agent Platform:** For users who don't want to run the [[concepts/code|code]] locally, the agent is also available on the Open Agent Platform, providing an easy-to-use UI for configuration and interaction.
* **Final Report Display (11:24):** The video concludes by showing the fully generated trip planning report in the Open Agent Platform UI, featuring: An overview of the trip. Cheapest flights (outbound, intra-European, return) with detected itineraries, prices, and direct booking links. Intra-European transport options (trains, buses, flights) between cities. Cheapest accommodation options for each city with direct booking links. A recommended sample itinerary. Key tips for lowering costs further. A comprehensive list of official operator booking links (sources).
* The speaker encourages viewers to explore the GitHub repository and an accompanying blog post for more details on the [[concepts/design|design]] decisions.