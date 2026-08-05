---
wiki-ingested: true
title: "AI Agent Skills: Bridging LLM Procedural Knowledge Gaps and Structure"
date: 2026-04-22
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-04-22 · API: [[concepts/gemini|Gemini]] 2.5 Flash · Modes: Summary

---

## AI Agent Skills: Bridging LLM Procedural Knowledge Gaps and Structure
**Clip title:** What AI [[concepts/agent-harnesses|Agent Skills]] Are and How They Work
**Author / channel:** IBM Technology
**URL:** https://www.youtube.com/watch?v=Lg-meK5IU8Q

### Summary
The video introduces the concept of [[concepts/ai-agent-skills|AI Agent Skills]], explaining why they have become an open standard adopted by major [[concepts/ai-coding|AI coding]] platforms. The core problem addressed by skills is that while Large Language Models (LLMs) are excellent reasoners and possess vast [[concepts/factual-knowledge|factual knowledge]] (like architectural details or historical facts), they lack "[[concepts/procedural-knowledge|procedural knowledge]]"—the detailed, step-by-step [[concepts/instructions|instructions]] on *how* to accomplish specific tasks. Without skills, an [[entities/agent|AI agent]] [[concepts/running|running]] an LLM would either need constant, explicit [[concepts/prompting|prompting]] for every step of a complex [[concepts/workflow|workflow]] or would have to guess, risking inaccuracy.

An [[concepts/ai-agent|AI agent]] skill is designed to bridge this gap, injecting procedural knowledge directly into the agent. Structurally, a skill is a simple [[concepts/markdown|Markdown]] file (`skill.md`) within a folder. This file contains a "front matter" section (in YAML format) that includes a `name` to identify the skill and, crucially, a `description` that tells the agent what the skill does and when it should be used, acting as a trigger condition. The main "body" of the [[concepts/markdown|Markdown]] file contains the actual [[concepts/instructions|instructions]]: step-by-step workflows, rules, and examples for input and output, providing everything the agent needs to know to perform the task. Additionally, skill folders can optionally include `scripts/` (executable JavaScript, [[concepts/python|Python]], or Bash [[concepts/files|files]]), `references/` (supplementary documentation), and `assets/` (static resources like [[concepts/templates|templates]]).

To manage efficiency and avoid overwhelming the LLM's [[concepts/context-window|context window]], skills utilize "[[concepts/progressive-disclosure|progressive disclosure]]" across three tiers. Tier one involves loading only the lightweight [[concepts/metadata|metadata]] (name and description) of all available skills at startup, serving as a table of contents. When a user request matches a skill's description, the agent then loads the complete Markdown body (Tier two) into its context, providing the detailed instructions. Finally, any optional executable scripts, references, or assets (Tier three) are loaded only when explicitly needed by the specific task, minimizing token usage. This contrasts with other [[concepts/knowledge-integration|knowledge integration]] methods like MCP (tool access) and RAG (factual knowledge retrieval), or [[concepts/fine-tuning|fine-tuning]] (baking knowledge into [[concepts/model-weights|model weights]]), which serve different purposes. Skills provide the procedural "how-to" knowledge, making them version-controllable, easily updated, and portable across platforms since `agentskills.io` is an [[concepts/apache-2.0|Apache 2.0]] licensed open standard.

However, the inclusion of executable scripts within skills introduces significant trust and security considerations. An agent [[concepts/running|running]] a skill could potentially execute [[concepts/commands|commands]] locally, access file systems, [[concepts/environment-variables|environment variables]], or [[concepts/api-keys|API keys]], making it vulnerable to prompt injection, tool poisoning, or hidden malware. Therefore, the video emphasizes that skills, like any other software dependency, must be thoroughly reviewed and understood before being installed and run on a local machine. In essence, AI [[concepts/agent-harnesses|Agent Skills]] empower [[concepts/agents|agents]] with custom, repeatable, and conditionally triggered procedural [[concepts/memory|memory]], mirroring aspects of human cognitive [[concepts/memory|memory]], but necessitate responsible implementation and vigilant security practices.

## Related Concepts
- [[concepts/ai-agent-skills|AI Agent Skills]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agent_Skills)
- [[concepts/procedural-knowledge|Procedural Knowledge Gaps]] — [Wikipedia](https://en.wikipedia.org/wiki/Procedural_Knowledge_Gaps)
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- [[concepts/ai-coding-platforms|AI Coding Platforms]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Coding_Platforms)
- [Open Standards](https://en.wikipedia.org/wiki/Open_Standards) — [Wikipedia](https://en.wikipedia.org/wiki/Open_Standards)
- [[concepts/procedural-knowledge|Procedural Knowledge]] — [Wikipedia](https://en.wikipedia.org/wiki/Procedural_Knowledge)
- [[concepts/factual-knowledge|Factual Knowledge]] — [Wikipedia](https://en.wikipedia.org/wiki/Factual_Knowledge)
- [[concepts/progressive-disclosure|Progressive Disclosure]] — [Wikipedia](https://en.wikipedia.org/wiki/Progressive_Disclosure)
- [[concepts/context-window|Context Window]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Window)
- [[concepts/rag|RAG]] — [Wikipedia](https://en.wikipedia.org/wiki/RAG)
- [[concepts/mcp|MCP]] — [Wikipedia](https://en.wikipedia.org/wiki/MCP)
- [[concepts/jailbreaking|Prompt Injection]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Injection)
- [[concepts/model-weights|Model Weights]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Weights)
- [[concepts/fine-tuning|Fine-tuning]] — [Wikipedia](https://en.wikipedia.org/wiki/Fine-tuning)
- [YAML](https://en.wikipedia.org/wiki/YAML) — [Wikipedia](https://en.wikipedia.org/wiki/YAML)
- [[concepts/markdown|Markdown]] — [Wikipedia](https://en.wikipedia.org/wiki/Markdown)
- [[concepts/knowledge-integration|Knowledge Integration]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Integration)
- [[concepts/model-output-optimization|Token Usage]] — [Wikipedia](https://en.wikipedia.org/wiki/Token_Usage)
- [[concepts/metadata|Metadata]] — [Wikipedia](https://en.wikipedia.org/wiki/Metadata)
- [Tool Access](https://en.wikipedia.org/wiki/Tool_Access) — [Wikipedia](https://en.wikipedia.org/wiki/Tool_Access)
