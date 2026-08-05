---
wiki-ingested: true
title: "Langchain context engineering"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: science-physics
group: engineering-systems-robotics-autonomous-vehicles
---
# [[entities/langchain|Langchain]] [[concepts/context-engineering|context engineering]]

---
---
<https://www.youtube.com/watch?v=4GiqzUHD5AA>
This video provides a comprehensive overview of **Context Engineering for Agents**, defining the concept, explaining why it's crucial for agents, outlining common strategies, and demonstrating how [[concepts/langgraph|LangGraph]] supports these approaches.
**1\. Context Engineering Defined (0:00 - 1:26)** Context engineering is defined as "the [[concepts/art|art]] and [[concepts/science|science]] of filling the [[concepts/context-window|context window]] with just the right information at each step of an [[concepts/agents|agent's trajectory]]." This includes [[concepts/instructions|instructions]], [[concepts/external-knowledge|external knowledge]], and [[concepts/tool-feedback|tool feedback]].

* **Origin:** The term gained traction from figures like [[entities/tobi-lutke|Tobi Lutke]] ([[entities/shopify|Shopify]]) and [[entities/andrej-karpathy|Andrej Karpathy]], who preferred it over "[[concepts/prompt-engineering|prompt engineering]]" as it better describes the core [[concepts/skill|skill]].
* **Analogy:** Karpathy drew an analogy comparing LLMs to a [[concepts/cpu|CPU]], and the context window to [[concepts/ram|RAM]] or working [[concepts/memory|memory]] with limited capacity. Context engineering is akin to an operating system curating what data fits into RAM at any given time.

**2\. Types of Context & Challenges for Agents (1:27 - 3:23)** Context engineering is an umbrella discipline encompassing:

* **Instructions:** Prompts, memories, [[concepts/few-shot-examples|few-shot examples]], tool descriptions.
* **Knowledge:** Facts, memories.
* **Tools:** [[concepts/feedback|Feedback]] from tool calls (APIs, calculators, etc.).

It's particularly challenging for agents because:

* **Long-[[concepts/running|running]] tasks & accumulating feedback:** Agent interactions, especially with tool calls, lead to a rapid accumulation of [[concepts/tokens|tokens]] in the context window.
* **Increased token usage:** This can lead to various "longer context failures" as outlined by Drew Breunig: **Context Poisoning:** Hallucinations making their way into the context. **Context Distraction:** The overwhelming context confusing the LLM. **Context Confusion:** Superfluous information influencing the response. **Context Clash:** Conflicting information leading to issues. This makes context engineering a critical skill for building robust AI agents.

**3\. Common Strategies & Examples (3:24 - 14:11)** The video groups context engineering strategies into four main categories:

* **Write Context:** Saving information outside the context window to help an agent perform a task.
	**Scratchpads:** Persist information _within_ a single agent [[concepts/session|session]] (e.g., [[entities/anthropic|Anthropic]]'s multi-agent researcher saving its plan to memory). This can be implemented by [[concepts/writing|writing]] to a file or a runtime state object. **Memories:** Persist information _across multiple_ agent sessions. Examples include Generative Agents synthesizing memories from past feedback, and features in [[entities/chatgpt|ChatGPT]], [[entities/cursor|Cursor]], and [[entities/windsurf|Windsurf]] that auto-generate memories based on user interactions. The intuition is to integrate new context with existing memories and write updated memories back.
	
* **Select Context:** Pulling relevant information _into_ the context window.
	**Scratchpads:** Agents can reference previously written information via tool calls or direct state reads. **Memories (Long-Term):** Different memory types can be selectively pulled: **Semantic Memories:** Facts (e.g., facts about a user), often managed via RAG (Retrieval-Augmented Generation) using embedding-based similarity search or [[concepts/knowledge-graphs|knowledge graphs]]. **Episodic Memories:** Experiences (e.g., few-shot examples, past agent actions). **Procedural Memories:** Instructions (e.g., [[concepts/system-prompts|system prompts]], rules [[concepts/files|files]] like `CLAUDE.md` for [[concepts/style|style]] guidelines or tool usage). **Tools:** Agents struggle with large tool collections. RAG over tool descriptions (embedding tool descriptions and using [[concepts/semantic-similarity|semantic similarity]] search) has been shown to significantly improve [[concepts/tool-selection|tool selection]]. For large codebases, embedding search needs to be combined with AST parsing for meaningful chunking, file search, and re-ranking.
	
* **Compress Context:** Retaining only the tokens required to perform a task.
	**[[concepts/summarization|Summarization]]:** Condensing long conversations or work sections. Examples include [[concepts/claude-code|Claude Code]]'s "auto compact" feature (summarizing [[concepts/conversation-history|conversation history]]) and Anthropic's multi-agent researcher summarizing "completed work sections." This is also applied when passing context between linear [[concepts/sub-agents|sub-agents]] in a hierarchical [[concepts/setup|setup]]. **Trimming:** More selective removal of irrelevant tokens, using heuristics (e.g., keeping only recent messages) or learned approaches like "Provence" for robust context pruning.
	
* **Isolate Context:** Splitting up context to manage different pieces independently.
	**Multi-Agent:** Assigning separate context [[entities/windows|windows]] and tools to different agents in a team (e.g., [[entities/openai|OpenAI]]'s Swarm, Anthropic's [[concepts/multi-agent-research-system|multi-agent research system]]). This allows parallel computation and expands the total token processing capacity of the system. **Environment (Sandbox):** [[concepts/code-execution|Executing code]] and tools in an isolated sandbox where token-heavy objects (like images or large documents) can reside. Only selected return values, standard output, or variable names are passed back to the LLM, preventing context window bloat (e.g., [[entities/hugging-face|Hugging Face]]'s DeepResearch). **State:** Using a structured state object (e.g., Pydantic [[concepts/models|models]]) with different fields. Certain fields (like message history) can always be exposed to the LLM, while other token-heavy information is stored in separate fields and only selectively "fished out" and passed to the LLM when needed.
	

**4\. Context Engineering + LangGraph (14:12 - 20:28)** LangGraph, a low-level orchestration framework for building agents, is designed to support all these context engineering techniques.

* **Prerequisites:** Effective context engineering requires tracing (e.g., LangSmith) to track token usage and evaluation to measure the impact of engineering efforts on agent behavior.
* **Write Context in LangGraph:** **Scratchpad:** LangGraph's central state object allows checkpointing agent state across a session. Any node can access and write to this state, effectively serving as a scratchpad. **Memory:** LangGraph natively supports long-term memory to persist context across many sessions, allowing agents to learn preferences over time (e.g., as shown in DeepLearning.AI's course on Agentic Memory).
* **Select Context in LangGraph:** **Scratchpad:** Retrieve from the state object in any node. **Memory:** Retrieve from long-term memory in any node. LangGraph enables [[concepts/agentic-rag|agentic RAG]] for knowledge retrieval and includes pre-built tools like `langgraph-bigtool` for effective tool selection across large collections using embedding-based similarity search.
* **Compress Context in LangGraph:** **Summarization & Trimming:** LangGraph provides utilities for summarizing and trimming message history. Its low-level [[entities/nature|nature]] offers the flexibility to define custom logic within [[concepts/nodes|nodes]], enabling post-processing steps after tool execution to compress or filter information.
* **Isolate Context in LangGraph:** **Multi-Agent:** LangGraph has implementations for supervisor and swarm multi-agent architectures, facilitating the [[concepts/disconnection|separation]] of concerns and [[concepts/parallel-processing|parallel processing]]. **Environment (Sandbox):** LangGraph integrates with sandboxed execution environments like E2B and Pyodide, allowing agents to perform code execution and manage token-heavy outputs without flooding the LLM's context. **State:** LangGraph's state object can be defined with a schema (e.g., Pydantic model) with multiple fields. This allows partitioning context within the state, exposing only relevant fields to the LLM while others remain isolated until specifically accessed.

In [[concepts/summary|summary]], context engineering is a dynamic and essential field for building advanced AI agents, and LangGraph provides a flexible framework that natively supports the key strategies of writing, selecting, compressing, and isolating context to overcome token limitations and improve agent performance.