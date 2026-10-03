---
type: concept
domain: ai-agents
tags:
  - "custom-ai-agents"
  - "microsoft-365-copilot"
  - "knowledge-base"
  - "tutorial"
  - "ai-workflows"
aliases:
  - "Custom AI Agent Tutorial"
  - "MS Copilot Knowledge Base Bot"
summary: A tutorial demonstrating how to build a custom AI agent using Microsoft 365 Copilot.
updated: 2026-10-04
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
group: applied-ai-workflows
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Knowledge Base Bot

A [[concepts/knowledge-base|Knowledge Base]] Bot is a [[concepts/custom-ai-agent|custom AI agent]] built on [[concepts/microsoft-applications|Microsoft 365 Copilot]] that retrieves and grounds its responses in an organization's internal documents, [[concepts/policies|policies]], and information sources. Rather than relying exclusively on general [[concepts/custom-dataset|training data]], these bots are configured to query and [[concepts/purpose|reason]] from a curated collection of organizational knowledge. This approach enables the agent to provide contextually relevant answers based on proprietary or internal information that would otherwise be unavailable to a general-purpose [[concepts/ai-system|AI system]].

## Architecture and Configuration

The system operates by connecting the Copilot interface to specific [[concepts/data-connectors|data connectors]], such as SharePoint sites, OneDrive for Business, or Microsoft Teams channels. These connectors allow the agent to index and access real-time content within the user's [[concepts/permission-management|permission boundaries]]. The architecture ensures that data [[concepts/privacy|privacy]] and [[concepts/security|security]] protocols are maintained, as the bot only retrieves information the user is authorized to view.

Configuration involves defining the scope of the knowledge base and setting up the [[concepts/document-retrieval|retrieval]] [[concepts/causes|mechanisms]]. Administrators can specify which repositories are relevant to the bot's purpose, ensuring that the agent focuses on [[concepts/excellence|high-quality]], verified organizational data. This setup reduces the likelihood of hallucinations by grounding the model's outputs in factual, up-to-date internal records rather than external web data or static training sets.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Building-a-Secure-Personalized-AI-Second-Brain-using-Claude-Code|Building a Secure Personalized AI Second Brain using Claude Code]] · [▶ source](https://www.youtube.com/watch?v=1FiER-40zng)
- 2026-04-08: [[lab-notes/2026-04-08-Obsidian-and-Claude-Code-AI-for-Automated-PKM-with-GitHub-Sync|Obsidian and Claude Code AI for Automated PKM with GitHub Sync]] · [▶ source](https://www.youtube.com/watch?v=Y2rpFa43jTo)
- 2026-04-10: [[lab-notes/2026-04-10-Karpathys-LLM-Wiki-Beyond-RAG-for-Persistent-Knowledge-Bases|Karpathys LLM Wiki Beyond RAG for Persistent Knowledge Bases]] · [▶ source](https://www.youtube.com/watch?v=zVEb19AwkqM)
- 2026-04-12: [[lab-notes/2026-04-12-Heres-what-it-actually-does-how-to-build-it-yourself|Heres what it actually does how to build it yourself]]
- 2026-04-19: [[lab-notes/2026-04-19-Automating-Client-Onboarding-with-NotebookLM-and-Gemini-AI|Automating Client Onboarding with NotebookLM and Gemini AI]] · [▶ source](https://www.youtube.com/watch?v=qic1Wgk1P6o)
- 2026-04-20: [[lab-notes/2026-04-20-Knowledge-Graphs-Advancing-Karpathys-LLM-Wiki-for-Deeper-Insights|Knowledge Graphs Advancing Karpathys LLM Wiki for Deeper Insights]] · [▶ source](https://www.youtube.com/watch?v=yYSTsKo8moU)
- 2026-04-24: DeepSeek · [▶ source](https://www.youtube.com/watch?v=u3f35QQSLqE)
- 2026-04-25: Claude Code · [▶ source](https://www.youtube.com/watch?v=UHVFcUzAGlM)
