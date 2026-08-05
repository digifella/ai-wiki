---
wiki-ingested: true
title: "Obsidian and Claude Code AI for Automated PKM with GitHub Sync"
created: "2026-04-08 09:12"
date: 2026-04-08
source: lab-summary
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Obsidian and Claude Code AI for Automated PKM with GitHub Sync
**Clip title:** Obsidian + [[concepts/ai-assisted-coding|Claude Code]]: The Second Brain [[concepts/setup|Setup]] That Actually Works
**Author / channel:** Eric Tech
**URL:** https://www.youtube.com/watch?v=Y2rpFa43jTo

### Summary
The video demonstrates how to construct a "second brain" or personal knowledge management (PKM) system by integrating Claude Code, an [[concepts/ai-assistant|AI assistant]], with Obsidian, a powerful note-taking application. The core objective is to automate the processes of data ingestion, organization, [[concepts/summarization|summarization]], and retrieval, particularly for project management and general knowledge. The presenter introduces a suite of "obsidian-skills" designed to teach AI [[concepts/agents|agents]] how to leverage Obsidian's full capabilities, including Obsidian Flavored [[concepts/markdown|Markdown]], Obsidian [[concepts/number-systems|Bases]], JSON [[concepts/canvas|Canvas]], and direct interaction via the Obsidian [[concepts/command-line-interface-cli|Command Line Interface (CLI)]]. This [[concepts/integration|integration]] allows users to manage vast amounts of information more efficiently and intelligently.

A crucial initial step in setting up this system involves addressing Obsidian's free-tier limitations regarding note synchronization and version control. The presenter outlines a robust [[concepts/solution|solution]]: integrating Obsidian with GitHub. This process entails creating a private GitHub repository, [[concepts/cloning|cloning]] it to the local machine using GitHub Desktop for a user-friendly graphical interface, and then configuring Obsidian to use this local repository as its vault. To ensure continuous backup and version history, the "[[entities/git|Git]]" community plugin is installed within Obsidian, enabling automatic [[concepts/commits|commits]] and pushes to GitHub at set intervals (e.g., every minute after file edits stop) and automated pulling of changes upon application startup. This setup provides seamless version control and free cloud [[entities/storage|storage]] for all Obsidian notes.

With the foundational infrastructure in place, the video showcases the practical application of this [[concepts/ai-agent-integration|AI-powered second brain]]. A specific "onboard-project" skill is demonstrated, which allows Claude Code to ingest diverse data sources such as emails from Gmail (filtered by specific labels) and various local [[concepts/files|files]] ([[concepts/pdfs|PDFs]], documents, contracts, [[concepts/text|text]], or screenshots). The Claude Bot then processes this raw information, organizing and summarizing it into a structured Obsidian vault. This output typically includes a `projects.base` dashboard for an overarching view of all projects, alongside individual project folders containing `overview.md` (detailing project profile, scope, and key metrics), `conversation-log.md` (a chronological summary of discussions and interactions), `links.md` (referencing external resources), and `documents/` (housing static files like agreements that are kept unsummarized).

The system's intelligence is further highlighted by its ability to query the organized [[concepts/knowledge-base|knowledge base]] and generate meaningful [[concepts/responses|responses]]. The demonstration illustrates Claude Code's capacity to answer specific questions about a project's current status, extract key [[concepts/contextual-information|contextual information]] (e.g., client requests, deadlines, progress updates), identify actionable items, and even draft professional responses (such as [[entities/email|email]] replies) based on the comprehensive data in the Obsidian vault. This potent combination of Claude Code's analytical and generative AI capabilities with Obsidian's structured, interconnected note-taking environment creates an intelligent "second brain" that not only stores information but actively helps users manage, process, and leverage their knowledge for improved productivity and [[concepts/decision-making|decision-making]].

## Related Concepts
- [[concepts/obsidian-skills|Personal Knowledge Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Personal_Knowledge_Management)
- [[concepts/second-brain|Second Brain]] — [Wikipedia](https://en.wikipedia.org/wiki/Second_Brain)
- [[concepts/automated-data-ingestion|Automated Data Ingestion]] — [Wikipedia](https://en.wikipedia.org/wiki/Automated_Data_Ingestion)
- [[concepts/automated-summarization|Automated Summarization]] — [Wikipedia](https://en.wikipedia.org/wiki/Automated_Summarization)
- [[concepts/github-sync|GitHub Sync]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub_Sync)
- [[concepts/ai-driven-note-taking|AI-driven Note-taking]] — [Wikipedia](https://en.wikipedia.org/wiki/AI-driven_Note-taking)
- [[concepts/automated-information-retrieval|Automated Information Retrieval]] — [Wikipedia](https://en.wikipedia.org/wiki/Automated_Information_Retrieval)
- [[concepts/project-management-automation|Project Management Automation]] — [Wikipedia](https://en.wikipedia.org/wiki/Project_Management_Automation)
- [[concepts/knowledge-management|Personal Knowledge Management (PKM)]] — [Wikipedia](https://en.wikipedia.org/wiki/Personal_Knowledge_Management_%28PKM%29)
- [[concepts/agentic-ai|AI Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agents)
- [[concepts/version-control-for-ai-agents|Version Control]] — [Wikipedia](https://en.wikipedia.org/wiki/Version_Control)
- [[concepts/obsidian-flavored-markdown|Obsidian Flavored Markdown]] — [Wikipedia](https://en.wikipedia.org/wiki/Obsidian_Flavored_Markdown)
- JSON [[entities/canvas|Canvas]] — [Wikipedia](https://en.wikipedia.org/wiki/JSON_Canvas)
- [[concepts/command-line-interface-cli|Command Line Interface (CLI)]] — [Wikipedia](https://en.wikipedia.org/wiki/Command_Line_Interface_%28CLI%29)
- [[concepts/generative-ai|Generative AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Generative_AI)
- [[concepts/git-data-structures|Git]] — [Wikipedia](https://en.wikipedia.org/wiki/Git)
- Cloud [[entities/storage|Storage]] — [Wikipedia](https://en.wikipedia.org/wiki/Cloud_Storage)
- [[concepts/hierarchical-data-systems|Data Organization]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_Organization)
