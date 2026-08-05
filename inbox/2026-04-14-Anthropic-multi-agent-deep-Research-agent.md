---
wiki-ingested: true
title: "Anthropic multi agent deep Research agent"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[entities/anthropic|Anthropic]] multi [[entities/agent|agent]] [[concepts/deep-research-agent|deep Research agent]]

---
---
<https://www.youtube.com/watch?v=GPsKnsYJPiI>
[[entities/leon-van-zyl|Leon van Zyl]]
This video provides a detailed guide on building an advanced "[[concepts/deep-research-agent-flow|deep research agent flow]]" using [[entities/flowise|Flowise]], <https://cloud.flowiseai.com/register?via=leonvanzyl>. <https://github.com/leonvanzyl/flowise-masterclass-2025/tree/master/Deep%20Research%20Agentflow>  designed to overcome the limitations of single LLM queries, such as [[concepts/hallucination|hallucination]] and insufficient depth. The core concept is inspired by Anthropic's [[concepts/multi-agent-research-system|multi-agent research system]], which emulates a human's iterative approach to complex research.
Here's a breakdown of the system and its components:

1. **Initial Query & [[concepts/flow|Flow]] State:**
	The process starts with a user providing a research query via a `Form Input` interface in [[concepts/flowise|Flowise]]. Two crucial `Flow State` variables are initialized: `subagents` (to store a list of tasks for specialized [[concepts/agents|agents]]) and `findings` (to accumulate research results throughout the process). These variables persist data across different [[concepts/nodes|nodes]] and iterations of the flow.
	
2. **Planner Agent (Orchestrator):**
	An LLM agent named "Planner" acts as the central orchestrator. Its primary role is to analyze the initial [[concepts/user-query|user query]] and devise a comprehensive research strategy (e.g., a "breadth-first" or "depth-first" approach, as detailed in the Anthropic article). The Planner's output is a structured **JSON Array** of specific, well-defined research "tasks" for various [[concepts/subagents|subagents]]. This [[concepts/structured-output|structured output]] is vital for subsequent [[concepts/automation|automation]]. This JSON array of subagent tasks is then saved to the `flow.state.subagents` variable.
	
3. **Spawn SubAgents ([[concepts/iteration|Iteration]] Node):**
	The `Iteration` node is a powerful Flowise feature that enables [[concepts/parallel-processing|parallel processing]]. It takes the `flow.state.subagents` array from the Planner as input. For _each_ individual task object within this array, the `Iteration` node dynamically triggers and runs a "Subagent" [[concepts/workflow|workflow]]. This allows multiple research tasks to be executed concurrently.
	
4. **Subagent (Specialized Researcher):**
	Each triggered "Subagent" is an LLM agent configured with a specific [[concepts/system-prompt|system prompt]] to act as a dedicated researcher for its assigned task. These Subagents are equipped with various tools to gather information: **Arxiv:** For accessing academic research papers. **Tavily API:** A search engine specifically designed for LLMs and AI agents, providing real-time, accurate search results and avoiding hallucinations. **Web Scraper Tool:** To extract detailed content from specific URLs identified through web searches. Each Subagent executes its task, performs the necessary searches and [[concepts/scraping|scraping]], and returns its findings along with relevant citations. The `Iteration` node then consolidates all outputs from these parallel subagents.
	
5. **Writer Agent (Synthesizer):**
	The consolidated output from the `Iteration` node (containing all the raw findings from the subagents) is passed to the "Writer" agent. The Writer is an LLM agent specifically instructed to act as an "expert research writer." Its task is to transform the raw findings into a clear, structured, long-form [[concepts/markdown|Markdown]] report, including an abstract, introduction, thematic sections, analysis, and a strong conclusion, along with proper citations. Crucially, [[concepts/memory|memory]] is **disabled** for the Writer agent to prevent it from being overwhelmed by the potentially massive context length of all the raw research findings. The Writer's final report is then stored in the `flow.state.findings` variable.
	
6. **[[concepts/iterative-refinement|Iterative Refinement]] & Conclusion (Condition Agent & [[concepts/loop|Loop]]):**
	A "More SubAgents?" (`Condition Agent`) node takes the generated report (and the current research topic, previous subagents, and findings) as input. Its instruction is to determine if the report fully addresses the user's initial query and if more research (i.e., more subagents) is needed. It defines two [[concepts/scenarios|scenarios]]: "More subagents are needed": If the report is insufficient, the flow is directed back to the "Planner" agent via a "Back to Planner" (`Loop`) node. The Planner then uses the updated `flow.state.findings` to generate a new, refined set of subagent tasks, restarting the research cycle. "Findings are sufficient": If the report is complete, the flow proceeds to the final step.
	
7. **Generate Report (Direct Reply):**
	If the findings are deemed sufficient, the "Generate Report" node sends the final, polished research report (from `flow.state.findings`) directly back to the user in the [[concepts/chat-application|chat interface]].
	

**Overall Benefits:** This multi-agent, iterative approach provides a significant improvement over traditional single-query LLM research by:

* **Minimizing Hallucinations:** By breaking down tasks and using [[concepts/specialized-tools|specialized tools]] for factual retrieval.
* **Ensuring [[concepts/accuracy|Accuracy]] & Thoroughness:** Through iterative refinement and the ability to conduct deeper, more targeted searches.
* **Scalability:** Parallel execution of subagents allows for efficient processing of complex queries.
* **Structured Output:** Delivering well-organized, comprehensive reports with proper citations.
* **Human-like Research Process:** Mimicking how a human expert would approach and refine a research project.