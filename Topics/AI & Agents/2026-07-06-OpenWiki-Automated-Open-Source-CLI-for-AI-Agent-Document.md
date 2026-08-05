---
wiki-ingested: true
title: "OpenWiki: Automated Open-Source CLI for AI Agent Documentation"
date: 2026-07-06
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

Generated: 2026-07-06 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## OpenWiki: Automated Open-Source CLI for AI Agent Documentation
**Clip title:** Introducing OpenWiki, an open source agent for repo documentation
**[[entities/tasia-custode|Author]] / channel:** LangChain
**URL:** https://www.youtube.com/watch?v=nIVu3zfYprI

### Summary
This video introduces OpenWiki, a new [[concepts/open-source|open-source]] [[concepts/cli-tools|command-line interface]] (CLI) agent from [[entities/langchain|LangChain]] designed to simplify the generation and maintenance of documentation for codebases, specifically tailored for [[concepts/agentic-ai|AI agents]]. The core idea is to provide agents with a comprehensive and up-to-date understanding of a project's architecture, workflows, and underlying business [[concepts/open-source-philosophy|logic]], going beyond mere code-level explanations.

Setting up OpenWiki is straightforward, involving an `npm install` followed by `openwiki init`. This initialization process guides the user through selecting a model provider (supporting both open-source like [[entities/openrouter|OpenRouter]] and closed-source options like [[entities/openai|OpenAI]] and [[entities/anthropic-institute|Anthropic]]) and an optional Langsmith API key for tracing agent actions. Upon successful setup, OpenWiki generates a structured set of [[concepts/markdown|Markdown]] documentation files within an `openwiki` directory in the repository. These files include a `quickstart.md` that acts as a central index, linking to detailed sections on [[concepts/agent-workflow|agent workflow]], architecture, CLI usage, and operational aspects. Crucially, this documentation delves into not just *how* the code works, but *why* specific design decisions were made, by analyzing Git [[concepts/commits|commits]], pull request descriptions, and comments to capture [[concepts/chaincode|business logic]] and context.

For ongoing maintenance, OpenWiki offers an `update` command. To ensure documentation remains current without manual intervention, a [[entities/github|GitHub]] Actions workflow can be integrated. This workflow automatically runs the `openwiki update` command on a scheduled basis (e.g., daily), leveraging Git history to identify recent changes and update the relevant documentation files accordingly. Additionally, OpenWiki provides an interactive [[concepts/chat-application|chat interface]], launched by simply running `openwiki`, allowing users to query the agent about the repository's structure, workflows, and documentation, or to make targeted changes.

The ultimate takeaway is OpenWiki's ability to empower [[concepts/ai-coding-agents|coding agents]] by making documentation an intrinsic part of their operational context. It automatically [[concepts/software-updates|updates]] a top-level `AGENTS.md` (or `CLAUDE.md` for specific platforms) file, instructing agents on *how, where, and when* to reference the generated OpenWiki documentation. This means developers can set up OpenWiki once, automate its [[concepts/software-updates|updates]], and subsequent [[concepts/ai-coding-agents|coding agents]] [[entities/will|will]] inherently have access to a rich, up-to-date [[concepts/knowledge-base|knowledge base]], without requiring additional [[concepts/prompting|prompting]] or explicit context. This integration aims to significantly reduce documentation overhead for human developers and enhance the effectiveness of [[concepts/application-development-automation|AI-driven development]].

### Video Description & Links
#### Description
Brace Sproul from LangChain introduces OpenWiki, a new open source agent and CLI that generates and maintains documentation for your [[concepts/code|codebase]] so coding agents have the context they need to make better changes. Built on DeepAgents with optional LangSmith tracing, OpenWiki creates a repo wiki, links it into your [[concepts/agentsmd|AGENTS.md file]], and keeps everything current with a scheduled GitHub Action. In this walkthrough, Brace installs OpenWiki, runs through setup, tours the generated [[entities/google-docs|docs]], and shows how your [[concepts/smart-coding-agent|coding agent]] picks all of it up automatically.

OpenWiki GitHub repository: https://github.com/langchain-ai/openwiki

NPM package: https://www.npmjs.com/package/openwiki

Chapters:
0:00 What OpenWiki is and why it exists
0:15 Installing OpenWiki with one npm command
0:25 Onboarding and picking a model provider
0:56 Optional LangSmith tracing setup
1:13 Generating your first docs
1:20 Touring the generated documentation
2:59 Why docs need to stay up to date
3:07 Automating updates with a GitHub Action
4:12 Chatting directly with the OpenWiki agent
4:50 How your coding agent actually uses the docs
6:00 What's next and how to contribute

#### URLs
- https://github.com/langchain-ai/openwiki
- https://www.npmjs.com/package/openwiki

## Related Concepts
- [[concepts/markdown-guide|AI Agent Documentation]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agent_Documentation)
- [[concepts/command-line-interface|Command-Line Interface]] — [Wikipedia](https://en.wikipedia.org/wiki/Command-Line_Interface)
- [[concepts/codebase-architecture|Codebase Architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/Codebase_Architecture)
- [[concepts/chaincode|Business Logic]] — [Wikipedia](https://en.wikipedia.org/wiki/Business_Logic)
- [[concepts/ai-generated-markdown|Automated Documentation]] — [Wikipedia](https://en.wikipedia.org/wiki/Automated_Documentation)
- [[concepts/open-source|Open-Source Software]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-Source_Software)
- [[concepts/repository-analysis|Repository Analysis]] — [Wikipedia](https://en.wikipedia.org/wiki/Repository_Analysis)
- [[concepts/external-knowledge|Agent Context]] — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Context)
- [[concepts/langgraph|LangChain Ecosystem]] — [Wikipedia](https://en.wikipedia.org/wiki/LangChain_Ecosystem)
- Business Logic Extraction — [Wikipedia](https://en.wikipedia.org/wiki/Business_Logic_Extraction)
- Git History Analysis — [Wikipedia](https://en.wikipedia.org/wiki/Git_History_Analysis)
- [[concepts/markdown|Markdown]] Generation — [Wikipedia](https://en.wikipedia.org/wiki/Markdown_Generation)
- GitHub Actions Integration — [Wikipedia](https://en.wikipedia.org/wiki/GitHub_Actions_Integration)
- LangSmith Tracing — [Wikipedia](https://en.wikipedia.org/wiki/LangSmith_Tracing)
- Interactive [[concepts/chat-application|Chat Interface]] — [Wikipedia](https://en.wikipedia.org/wiki/Interactive_Chat_Interface)
- Documentation Maintenance — [Wikipedia](https://en.wikipedia.org/wiki/Documentation_Maintenance)
- Model Provider Selection — [Wikipedia](https://en.wikipedia.org/wiki/Model_Provider_Selection)
- [[concepts/smart-coding-agent|Coding Agent]] Empowerment — [Wikipedia](https://en.wikipedia.org/wiki/Coding_Agent_Empowerment)

## Related Entities
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- OpenWiki — [Wikipedia](https://en.wikipedia.org/wiki/OpenWiki)
- [[entities/langchain|LangChain]] — [Wikipedia](https://en.wikipedia.org/wiki/LangChain)
- Brace Sproul — [Wikipedia](https://en.wikipedia.org/wiki/Brace_Sproul)
- [[entities/openrouter|OpenRouter]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenRouter)
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- [[entities/anthropic|Anthropic]] — [Wikipedia](https://en.wikipedia.org/wiki/Anthropic)
- LangSmith — [Wikipedia](https://en.wikipedia.org/wiki/LangSmith)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- [[entities/npm|NPM]] — [Wikipedia](https://en.wikipedia.org/wiki/NPM)
- DeepAgents — [Wikipedia](https://en.wikipedia.org/wiki/DeepAgents)
- AGENTS.md — [Wikipedia](https://en.wikipedia.org/wiki/AGENTS.md)