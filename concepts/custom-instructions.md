---
type: concept
domain: ai-agents
group: reasoning-context-prompting
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
updated: 2026-10-04
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Custom Instructions

Custom Instructions are persistent configuration settings within ChatGPT that allow users to define how the AI should behave across all conversations. Rather than repeating context, preferences, or role information in each new chat, users specify these details once in their account settings, and ChatGPT applies them automatically to subsequent interactions. This feature reduces redundancy and helps maintain consistent behavior and response style throughout multiple conversations.

## Configuration

Users access the Custom Instructions interface through the ChatGPT settings menu, where they can populate two distinct text fields: "What would you like ChatGPT to know about you to provide better responses?" and "How would you like ChatGPT to respond?" The first field typically captures user-specific context such as profession, expertise level, or personal background. The second field defines the desired output format, tone, and structural preferences for the AI's replies.

## Functionality

When a new conversation is initiated, the system automatically injects the stored instructions into the prompt context before the user's first message. This ensures that the model adheres to the specified guidelines from the start of the interaction without requiring manual reiteration. The settings are tied to the user's account, meaning they persist across devices and sessions, providing a uniform experience regardless of the platform used to access the service.

## Scope and Limitations

While Custom Instructions provide a baseline for behavior, they do not override core safety guidelines or fundamental operational constraints of the underlying model. The instructions are applied as soft constraints rather than hard rules, meaning the AI may occasionally deviate if the user's explicit request conflicts with the predefined preferences or if the context requires a different approach. Users can update or clear these instructions at any time to adapt to changing needs or to reset the interaction style.

## Source Notes
- 2026-04-07: How to Set Up ChatGPT, [[concepts/claude|Claude & Gemini for Legal Work]]
- 2026-04-22: AI Agent Skills · [▶ source](https://www.youtube.com/watch?v=Lg-meK5IU8Q)
- 2026-04-28: ChatGPT · [▶ source](https://www.youtube.com/watch?v=QrvVkm-8Jx4)
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)
