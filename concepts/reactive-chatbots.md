---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "chatbots"
  - "reactive-systems"
  - "statelessness"
  - "request-response"
  - "ai-integration"
aliases:
  - "Reactive AI"
  - "Request-Response Chatbots"
  - "Passive AI Interfaces"
  - "Trigger-Based Agents"
summary: Reactive chatbots are AI-driven interfaces that operate on a request-response model, initiating actions only when explicitly prompted by a user rather than autonomously monitoring context.
updated: 2026-07-12
group: google-ai-ecosystem
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Reactive Chatbots

**Reactive [[concepts/ai-bots|chatbots]]** are AI-driven interfaces that operate on a request-response model, initiating actions only when explicitly prompted by a user. Unlike [[concepts/ai-workflow]] systems, they do not autonomously monitor context or trigger workflows without direct input.

## Core Characteristics
- **Trigger-based interaction**: Activation requires explicit user input (text, [[concepts/tone|voice]], or button press).
- **[[concepts/amnesia|Statelessness]]**: Typically lack [[concepts/persistent-memory|persistent memory]] of context beyond the immediate [[concepts/session|session]] unless specifically designed with Long-term [[concepts/memory|Memory]] capabilities.
- **[[concepts/passive-monitoring|Passive monitoring]]**: Do not scan for opportunities to assist; wait for queries.

## Evolution and Contrast with Proactive Systems
The distinction between reactive and proactive agents is becoming central to modern [[concepts/ai-integration|AI integration]], particularly in enterprise environments.

- **Reactive Limitations**: Traditional models like standard [[entities/gemini-chat|Gemini Chat]] or early [[concepts/llm]] interfaces require users to formulate precise prompts, creating [[concepts/friction|friction]] in [[concepts/ai-driven-workflow-automation|workflow automation]].
- **Proactive Shift**: Newer architectures, such as those described in [[lab-notes/2026-07-08-Google-Gemini-Spark-Proactive-AI-for-Google-Workspace-Au|Google Gemini Spark: Proactive AI for Google Workspace Automation]], demonstrate a shift toward agents that can anticipate needs and execute tasks within [[entities/google-workspace]] without constant [[concepts/prompting|prompting]].
- **Hybrid Models**: Emerging systems often blend reactive interfaces for control with proactive [[concepts/background-agents|background processes]] for efficiency.

## Key Examples
- **Standard [[concepts/gemini|Gemini]] Chat**: Operates primarily reactively, answering queries when asked.
- **[[concepts/autonomous-ai-agents|Gemini Spark]]**: A beginner-friendly [[concepts/ai-agent|AI agent]] that differentiates itself by offering proactive automation capabilities within [[concepts/google-workspace|Google Workspace]], contrasting with the purely reactive nature of its predecessor.

## References
- [Google Gemini Spark: Proactive AI for Google Workspace Automation](https://www.youtube.com/watch?v=7GkIWPPC9i0)
