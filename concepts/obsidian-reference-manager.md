---
type: concept
domain: tools-platforms-infrastructure
group: platforms-runtimes-environments
tags:
  - "obsidian"
  - "reference-management"
  - "knowledge-management"
  - "note-taking"
  - "productivity-tools"
  - "personal-wiki"
  - "markdown"
  - "local-ai"
  - "hermes-agent"
  - "ollama"
aliases:
  - "Obsidian RM"
  - "Personal Wiki"
summary: A unified personal knowledge base environment integrating reference management, citation workflows, and local AI-powered note processing via Hermes Agent and Ollama.
updated: 2026-08-02
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-02T00:33:21+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Personal Wiki

The **Personal Wiki** is a consolidated [[concepts/knowledge-management|knowledge management]] environment that integrates reference management, citation workflows, and local [[concepts/automated-note-processing|AI-powered note processing]]. By unifying source organization with advanced retrieval and generation capabilities, it eliminates the need for switching between disparate applications for note-taking, bibliography management, and AI assistance.

## Core Functionality

### Reference Management Integration
The system functions as a reference manager within [[entities/obsidian]], allowing users to:
- Import citations from external sources and create dedicated reference notes.
- Store bibliographic metadata, attach PDFs or web links, and generate citations in various styles.
- Link references directly to other notes in the [[concepts/knowledge-base|knowledge base]] for contextual access.
- Maintain a unified workflow where source organization and [[concepts/content-creation|content creation]] coexist without tool fragmentation.

### Local AI-Powered Note Management
Recent integrations enhance the wiki with local, private AI capabilities through [[entities/hermes-agent]] and [[entities/ollama]]. This setup enables:
- **Hands-Free Interaction**: Voice or command-driven [[concepts/note-management|note management]] reducing manual input overhead.
- **Privacy-Centric Processing**: All AI inference occurs locally via Ollama, ensuring [[concepts/data-sovereignty|data sovereignty]].
- **Automated Organization**: [[concepts/agentic-ai|Hermes Agent]] facilitates intelligent sorting, tagging, and retrieval of notes within the [[concepts/obsidian-vault|Obsidian vault]].

See [[lab-notes/2026-08-02-Local-AI-Powered-Note-Management-Hermes-Agent-Obsidian-O|Local AI-Powered Note Management: Hermes Agent, Obsidian, Ollama Integration]] for detailed implementation workflows.

## Workflow Architecture
1. **Ingestion**: Sources are imported via reference manager plugins or direct file attachment.
2. **Linking**: References are bi-directionally linked to relevant concepts and notes.
3. **AI Enhancement**: Local models (via Ollama) process queries, summarize content, or generate insights through the Hermes Agent interface.
4. **Output**: Citations and bibliographies are generated dynamically within the markdown environment.

## References
- [Local AI-Powered Note Management: Hermes Agent, Obsidian, Ollama Integration](https://www.youtube.com/watch?v=CP64ty73yuo)
