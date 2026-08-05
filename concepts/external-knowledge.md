---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "context-engineering"
  - "langchain"
  - "agents"
  - "prompt-engineering"
  - "ai-concepts"
aliases:
  - "context engineering"
  - "agent context"
summary: Knowledge sourced from external materials, including Langchain's context engineering for agents video overview and OpenWiki documentation tools.
updated: 2026-07-11
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# External Knowledge

External knowledge refers to information and context sourced from materials outside of an [[concepts/ai-system|AI system]]'s [[concepts/language-data|training data]]. This encompasses documents, databases, [[concepts/open-standard-protocols|APIs]], and other external sources that augment an [[concepts/ai-agent|AI agent]]'s capabilities at runtime. By incorporating external knowledge, [[concepts/agentic-ai|AI agents]] can access up-to-date information, [[concepts/custom-dataset|domain-specific data]], and proprietary materials that would otherwise be unavailable or outdated within static training datasets.

## Implementation in AI Agents

[[concepts/ai-agents|AI agents]] access external knowledge through various [[concepts/causes|mechanisms]], commonly including [[concepts/answer-generation|retrieval-augmented generation]] (RAG), [[concepts/vector-databases|vector databases]], and API integrations. Frameworks like [[entities/langchain|LangChain]] provide structured approaches to [[concepts/ai-performance-optimization|context engineering]], allowing developers to retrieve and format external information for use in agent [[concepts/decision-making|decision-making]].

### Documentation as Context
Effective [[concepts/context-engineering|context engineering]] often requires structured documentation of the [[concepts/code|codebase]] or environment the agent operates within. Tools like [[lab-notes/2026-07-06-OpenWiki-Automated-Open-Source-CLI-for-AI-Agent-Document|OpenWiki: Automated Open-Source CLI for AI Agent Documentation]] facilitate this by:
*   Automating the generation and maintenance of documentation for codebases via an [[concepts/open-source|open-source]] CLI.
*   Tailoring output specifically for [[concepts/ai-bots|AI agents]] to improve their understanding of repository structure and [[concepts/open-source-philosophy|logic]].
*   Reducing manual overhead in keeping [[concepts/ai-agent-context|agent context]] sources up-to-date with code changes.

## References
*   [OpenWiki: Automated Open-Source CLI for AI Agent Documentation](https://www.youtube.com/watch?v=nIVu3zfYprI)
