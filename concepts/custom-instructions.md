---
type: concept
domain: ai-agents
tags:
  - "chatgpt-settings"
  - "context-persistence"
  - "prompt-engineering"
  - "ai-customization"
  - "behavioral-consistency"
  - "agent-configuration"
aliases:
  - "ChatGPT Custom Instructions"
  - "Persistent Instructions"
  - "System Instructions"
summary: Custom Instructions are persistent settings for ChatGPT that define roles, goals, and preferences to maintain consistent context and behavior without repeating context per conversation.
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
group: reasoning-context-prompting
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Custom Instructions

Custom [[concepts/instructions|Instructions]] are persistent configuration settings within [[entities/chatgpt|ChatGPT]] that allow users to define how the AI should behave across all conversations. Rather than repeating context, preferences, or role information in each new chat, users specify these details once in their account settings, and ChatGPT applies them automatically to subsequent interactions. This feature reduces redundancy and helps maintain consistent behavior and response [[concepts/style|style]] throughout multiple conversations.

## Configuration

Users access Custom Instructions through their ChatGPT account settings, typically entering two distinct pieces of information: "What would you like ChatGPT to know about you to provide better responses?" and "How would you like ChatGPT to respond?" The first field allows users to provide background context, such as their profession, [[concepts/expertise|expertise]] level, or specific constraints. The second field defines the desired [[concepts/tone|tone]], format, and style of the output, such as requesting concise answers, formal language, or specific structural elements.

## Functionality

By [[concepts/storing|storing]] these preferences in the user's profile, Custom Instructions ensure that the model maintains a consistent persona and adheres to specific guidelines without requiring manual [[concepts/prompting|prompting]] in every [[concepts/session|session]]. This mechanism is particularly useful for users who engage in long-term projects or require a uniform communication style across diverse topics. The settings are applied globally to all new chats initiated by the user, effectively [[concepts/acting|acting]] as a [[concepts/system-card|system prompt]] that is automatically injected into the [[concepts/context-length|context window]] for each interaction.
## Source Notes
- 2026-04-07: How to Set Up ChatGPT, [[concepts/claude|Claude & Gemini for Legal Work]]
- 2026-04-22: AI Agent Skills · [▶ source](https://www.youtube.com/watch?v=Lg-meK5IU8Q)
- 2026-04-28: ChatGPT · [▶ source](https://www.youtube.com/watch?v=QrvVkm-8Jx4)
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)
