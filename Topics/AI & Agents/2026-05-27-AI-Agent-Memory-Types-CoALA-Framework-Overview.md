---
wiki-ingested: true
title: "AI Agent Memory Types: CoALA Framework Overview"
date: 2026-05-27
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-05-27 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## AI Agent Memory Types: CoALA Framework Overview
**Clip title:** The Four Types of [[concepts/memory|Memory]] Every [[concepts/ai-agent|AI Agent]] Needs
**Author / channel:** IBM Technology
**URL:** https://www.youtube.com/watch?v=BacJ6sEhqMo

### Summary
This video provides a clear overview of the four main types of [[concepts/memory|memory]] crucial for [[concepts/agentic-ai|AI agents]], drawing a helpful analogy to human memory. The [[entities/speaker|speaker]], [[entities/martin-keen|Martin Keen]] from [[entities/ibm|IBM]], explains that just as humans rely on [[concepts/short-term-memory|short-term memory]], [[concepts/factual-knowledge|factual knowledge]], learned [[concepts/skills|skills]], and [[concepts/personal-experience|personal experience]], well-designed [[concepts/agentic-ai|AI agents]] require similar capabilities. He introduces the [[concepts/coala-framework|CoALA framework]] ([[concepts/cognitive-architectures|Cognitive Architectures]] for Language Agents) from a Princeton research team, which maps out these distinct memory types for AI systems, ranging from foundational to more complex, emerging areas.

The first two types discussed are **Working Memory** and **Semantic Memory**. Working memory is akin to a computer's [[concepts/ram|RAM]] or an AI's "[[concepts/context-window|context window]]," holding active, immediate information like the current conversation or [[concepts/custom-instructions|system instructions]]. It's fast and accessible but volatile and has limited size, much like short-term human memory. Semantic memory, on the other hand, functions as the [[entities/agent|agent]]'s persistent [[concepts/knowledge-base|knowledge base]], storing facts, rules, conventions, and documentation. Often implemented using [[concepts/markdown|markdown]] [[concepts/files|files]] or [[concepts/vector-databases|vector databases]], this memory ensures the agent doesn't repeat mistakes by providing foundational, persistent knowledge.

The video then delves into **Procedural Memory** and **Episodic Memory**. Procedural memory represents the agent's [[concepts/learned-skills|learned skills]] – how to perform tasks, described in structured formats like `skill.md` files. This utilizes "[[concepts/progressive-disclosure|progressive disclosure]]," where the agent only loads detailed instructions for a [[concepts/skill|skill]] when it's actively needed, conserving working memory. Lastly, episodic memory is the agent's record of past interactions, decisions, and lessons learned. Instead of saving every detail, this memory distills or compresses experiences, remembering what was useful for future conversations and acting as a form of genuine [[concepts/learning|learning]]. The challenge here lies in deciding what information is valuable enough to retain and when to forget obsolete data.

Ultimately, the video concludes by illustrating how different AI agents leverage these memory types to varying degrees. A simple "reflex agent" like a thermostat might only need working memory. A customer support agent capable of resetting passwords would require working and procedural memory. A complex "[[concepts/coding|coding]] agent" aiming for [[concepts/complex-tasks|advanced tasks]] would benefit from all four types: working memory for immediate context, semantic memory for general knowledge, procedural memory for executing tasks, and episodic memory to learn from past experiences. This comprehensive memory [[concepts/architecture|architecture]] is what truly differentiates a responsive chatbot from a capable, evolving AI agent.

### Video Description & Links
#### Description
Learn more about AI Agents here → https://ibm.biz/~OSlmklt3a

AI agents remember in more than one way. Martin Keen explains the four types of memory AI agents use, from [[concepts/context-windows|context windows]] to learned experience. See how working, semantic, procedural, and episodic memory power real [[concepts/agentic-frameworks|agentic systems]].

AI news moves fast. Sign up for a monthly newsletter for AI updates from IBM → https://ibm.biz/~RcPTLwx76

#aiagents #aimemory #contextwindow #aiarchitecture

#### Tags
`IBM`, `IBM Cloud`

#### URLs
- https://ibm.biz/~OSlmklt3a
- https://ibm.biz/~RcPTLwx76

## Related Concepts
- [[concepts/coala-framework|CoALA Framework]] — [Wikipedia](https://en.wikipedia.org/wiki/CoALA_Framework)
- [[concepts/cognitive-architectures|Cognitive Architectures]] — [Wikipedia](https://en.wikipedia.org/wiki/Cognitive_Architectures)
- [[concepts/short-term-memory|Short-Term Memory]] — [Wikipedia](https://en.wikipedia.org/wiki/Short-Term_Memory)
- [[concepts/factual-knowledge|Factual Knowledge]] — [Wikipedia](https://en.wikipedia.org/wiki/Factual_Knowledge)
- [[concepts/learned-skills|Learned Skills]] — [Wikipedia](https://en.wikipedia.org/wiki/Learned_Skills)
- [[concepts/personal-experience|Personal Experience]] — [Wikipedia](https://en.wikipedia.org/wiki/Personal_Experience)
- [[concepts/ai-agent-memory|AI Agent Memory]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agent_Memory)
- Working Memory — [Wikipedia](https://en.wikipedia.org/wiki/Working_Memory)
- [[concepts/context-window|Context Window]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Window)
- Semantic Memory — [Wikipedia](https://en.wikipedia.org/wiki/Semantic_Memory)
- Procedural Memory — [Wikipedia](https://en.wikipedia.org/wiki/Procedural_Memory)
- Episodic Memory — [Wikipedia](https://en.wikipedia.org/wiki/Episodic_Memory)
- [[concepts/progressive-disclosure|Progressive Disclosure]] — [Wikipedia](https://en.wikipedia.org/wiki/Progressive_Disclosure)
- [[concepts/vector-databases|Vector Databases]] — [Wikipedia](https://en.wikipedia.org/wiki/Vector_Databases)
- Reflex Agent — [Wikipedia](https://en.wikipedia.org/wiki/Reflex_Agent)
- [[concepts/smart-coding-agent|Coding Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Coding_Agent)

## Related Entities
- [[entities/ibm|IBM]] — [Wikipedia](https://en.wikipedia.org/wiki/IBM)
- [[entities/martin-keen|Martin Keen]] — [Wikipedia](https://en.wikipedia.org/wiki/Martin_Keen)
- Princeton research team — [Wikipedia](https://en.wikipedia.org/wiki/Princeton_research_team)
- Princeton University — [Wikipedia](https://en.wikipedia.org/wiki/Princeton_University)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/ibm-technology|IBM Technology]] — [Wikipedia](https://en.wikipedia.org/wiki/IBM_Technology)
- IBM Cloud — [Wikipedia](https://en.wikipedia.org/wiki/IBM_Cloud)