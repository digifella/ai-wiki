---
wiki-ingested: true
title: "Context engineering by prompt engineering channel"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: reasoning-context-prompting
---
# [[concepts/context-engineering|Context engineering]] by [[concepts/prompt-engineering|prompt engineering]] channel

---
---
<https://www.youtube.com/watch?v=ioOHXt7wjhM>
This video discusses "Context Engineering" as a new [[concepts/skill|skill]] in AI, comparing it to and differentiating it from "[[entities/prompt-engineering|Prompt Engineering]]," particularly in the context of [[concepts/large-language-models|Large Language Models (LLMs)]] and AI [[concepts/agents|agents]].
**1\. What is Context Engineering?** The video begins by noting the AI community's tendency to coin new names for old [[concepts/ideas|ideas]]. "Context Engineering" is presented as the latest buzzword.

* **[[entities/tobi-lütke|Tobi Lütke]] ([[entities/shopify|Shopify]] CEO) & [[entities/andrej-karpathy|Andrej Karpathy]]:** Define it as "the art/science of providing all the context for the task to be plausibly solvable by the LLM." This involves carefully selecting and presenting the right information, including task descriptions, [[concepts/explanations|explanations]], [[concepts/few-shot-examples|few-shot examples]], RAG (Retrieval-Augmented Generation), multimodal data, tools, and [[concepts/historical-context|historical context]].
* **[[concepts/cognition|Cognition]] (Devin AI creators):** See "prompt engineering" as [[concepts/writing|writing]] tasks for chatbots, while "context engineering" is about automating this in a dynamic system.
* **[[entities/langchain|LangChain]]:** Defines context engineering as "building dynamic [[concepts/systems|systems]] to provide the right information and tools in the right format such that the LLM can plausibly accomplish the task." They emphasize that context can come from diverse sources ([[entities/developer|developer]], user, previous interactions, tool calls, [[concepts/external-data|external data]]) and that the system must be dynamic. The core needs are the "right information," "right tools," and "right format."
* **[[entities/speaker|Speaker]]'s Stance:** The presenter argues that "prompt engineering" already encompasses these dynamic and comprehensive aspects, making "context engineering" largely a re-labeling of existing practices. However, he acknowledges the increasing complexity of providing relevant information at the right time.

**2\. How Long Contexts Fail (Failure Modes):** The video [[concepts/highlights|highlights]] common ways [[concepts/context-management|context management]] can lead to failures, based on an article by Drew Breunig:

* **Overloading Context:** Simply throwing "everything into a prompt" (tools, documents, [[concepts/instructions|instructions]]) is ineffective, even with large context [[entities/windows|windows]].
* **Context Poisoning:** Occurs when a [[concepts/hallucination|hallucination]] or error makes its way into the context and is repeatedly referenced. For example, [[entities/deepmind|DeepMind]]'s [[concepts/gemini|Gemini]] [[entities/agent|agent]] playing Pokémon occasionally hallucinated goals, which then poisoned its context and led to irrelevant behavior. This happens when misinformation about the game state persists and fixates the model on achieving impossible goals.
* **Context Distraction:** Happens when a context grows so long that the model over-focuses on the context itself, neglecting what it learned during [[concepts/training|training]]. [[entities/gemini|Gemini]] 2.5 Pro, despite supporting 1M+ [[concepts/tokens|tokens]], showed a tendency to repeat past actions from its history rather than synthesizing novel plans when context grew beyond 100k tokens. Smaller [[concepts/models|models]] have a much lower "distraction ceiling" (e.g., [[entities/llama|Llama]] 3.1 8b correctness fell around 32k tokens). This means models start misbehaving long before their [[concepts/context-windows|context windows]] are full.
* **Context Confusion:** Arises when superfluous content in the context is used by the model to generate a low-quality response. This is especially true with [[concepts/tool-calling|tool-calling]]. Studies show models perform worse when provided with more than one tool, and even call tools that aren't relevant just because they're in the context. Llama 3.1 8b failed with 46 tools but succeeded with 19, demonstrating that models pay [[concepts/attention|attention]] to _everything_ in the context, relevant or not.
* **Context Clash:** A more problematic version of confusion, where new information or tools directly conflict with other information already in the context. A [[entities/microsoft|Microsoft]] and [[entities/salesforce|Salesforce]] study showed that "sharded prompts" (breaking information into multiple turns) yielded dramatically worse results (39% average drop) compared to "fully specified" prompts (all info upfront). This is because early, incomplete attempts by the model to answer a challenge (due to incomplete info) remain in the context and influence the final, incorrect answer.

**3\. How to Fix Your Context (Solutions):** To address these challenges, several strategies are proposed for effective context management:

* **RAG (Retrieval-Augmented Generation):** The classic method of selectively adding only _relevant information_ to help the LLM generate a better response. This ensures the model receives focused, pertinent data.
* **Tool Loadout:** An extension of RAG for tools. Instead of providing all available tools, apply RAG principles to tool descriptions to select _only the relevant tools_ for a given input prompt. This reduces context confusion from irrelevant [[concepts/tool-definitions|tool definitions]].
* **Context Quarantine:** Involves isolating contexts in their own dedicated threads, used separately by one or more LLMs. This is tied to [[concepts/multi-agent-systems|multi-agent systems]] where tasks are broken into smaller, isolated jobs, each with its own context. This provides [[concepts/disconnection|separation]] of concerns, distinct tools, prompts, and exploration trajectories, reducing path dependency and enabling independent investigations.
* **Context Pruning:** The act of actively removing irrelevant or otherwise unneeded information from the context. This helps to keep the context concise and focused. Reranking in RAG systems is a good example, reducing thousands of retrieved chunks to a smaller, more relevant set before passing it to the LLM. The "Provence" model is highlighted as an efficient context pruner.
* **Context [[concepts/summarization|Summarization]]:** The act of boiling down an accrued context into a condensed [[concepts/summary|summary]]. Chatbots manually do this when chat sessions near context limits, generating recaps. While beneficial for managing window size and preventing distraction, summarization is challenging because knowing _what information should be preserved_ is critical.
* **Context Offloading:** Storing information _outside_ the LLM's primary context, usually via a dedicated tool that manages and stores the data (e.g., long-term [[concepts/memory|memory]] or scratchpads). [[entities/anthropic|Anthropic]]'s "think" tool is mentioned as an example, allowing an LLM to offload thinking steps to a separate space, particularly useful for long chains of tool calls or multi-step conversations.

**Conclusion:** The video concludes by reiterating the importance of managing context effectively for successful AI agents. While the term "Context Engineering" might be a new label for existing practices, the underlying challenges and solutions for optimizing LLM performance through careful context provision remain crucial.