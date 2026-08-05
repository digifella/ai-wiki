---
wiki-ingested: true
title: "Omnigent: Databricks' Meta-Harness for Unified AI Agent Management"
date: 2026-06-16
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

Generated: 2026-06-16 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Omnigent: Databricks' Meta-Harness for Unified AI Agent Management
**Clip title:** The [[concepts/ai-model-harness|Meta-Harness]]: Why Every [[entities/developer|AI Developer]] Needs This
**Author / channel:** [[concepts/prompt-based-modeling|Prompt Engineering]]
**URL:** https://www.youtube.com/watch?v=141biWM1mlE

### Summary
The video introduces Omnigent, an open-source "meta-harness" for [[concepts/agentic-ai|AI agents]] developed by Databricks, designed to address the current fragmentation and inefficiency in working with multiple [[concepts/ai-models|AI models]]. The presenter highlights that users often juggle several AI agents (e.g., for [[concepts/coding|coding]], review, chat, search, documentation), each with its own capabilities, memory, and [[concepts/user-interface|user interface]], operating in [[concepts/disconnection|isolation]]. This necessitates constant manual copying and pasting, leading to inefficiencies and "[[concepts/vendor-lock-in|vendor lock-in]]" where developers are forced to re-engineer their systems when better models or SDKs emerge. Omnigent proposes a unifying layer that standardizes the interface across these diverse agents, allowing them to work together seamlessly.

At its core, Omnigent consists of three main pieces: agents, a runner, and a server. Agents can be proprietary (like [[concepts/ai-assisted-coding|Claude Code]], Codex, Gemini, Pi) or custom-defined via YAML files. The "runner" component encapsulates any agent into a uniform, sandboxed session, ensuring [[concepts/software-reliability|reliability]] and [[concepts/security|security]]. This session is then exposed through the "server," which adds crucial functionalities such as persistent history, a [[concepts/catalog|catalog]], policy enforcement, artifact management, and skills. The server is PostgreSQL-backed and deployable across various environments ([[concepts/docker|Docker]], cloud sandboxes), making the unified session accessible from any interface—be it a [[concepts/cli|terminal]], web UI, [[concepts/native-app|native app]], or mobile device—allowing users to start a task on one device and continue it on another without losing context.

Omnigent unlocks three key capabilities. Firstly, **[[concepts/writing|Composition]]**, allowing users to swap or combine different AI [[concepts/agent-harnesses|agent harnesses]] without rewriting code. Agents are defined simply via YAML, making it a one-line change to switch between underlying models. It also enables [[concepts/multi-agent-workflows|multi-agent workflows]], exemplified by "Polly," a built-in orchestrator that plans tasks, delegates coding to different agents, and facilitates cross-vendor code review (e.g., Claude Code writes, Codex reviews) to mitigate [[concepts/biases|biases]]. Another agent, "Debby," serves as a [[concepts/brainstorming|brainstorming]] partner by soliciting responses from multiple LLMs (like Claude and GPT) and even prompting them to debate each other for refined answers.

Secondly, **Control** is built directly into the Omnigent layer, not merely suggested via prompts. Every action an agent attempts (like installing a package or pushing code) passes through an enforced gate (allow, deny, or ask for user approval). This policy enforcement is stateful, meaning rules can depend on the session's history and apply to critical aspects like cost budgets, risk scores, data access scopes (repo/file), and PII scanning. Furthermore, agents operate within an OS sandbox, restricted to only accessing explicitly allowed files and networks. Importantly, the agents never directly handle sensitive [[concepts/api-keys|API keys]]; Omnigent injects these secrets only through approved egress proxies, significantly enhancing security even in "YOLO mode."

Finally, **Collaboration** is a core feature. Live sessions can be shared via a link, allowing teammates to watch the agent's progress in real-time, chat with it, or even "co-drive" by having their messages run on the host's machine. Users can also fork conversations, enabling independent exploration from any point. Omnigent aims to transform AI agents from solo tools into collaborative team members, providing a robust, controlled, and flexible framework for developing and utilizing AI solutions. While still in its alpha stage, its open-source nature promises rapid evolution and community contributions.

### Video Description & Links
#### Description
Thanks to Databricks for early access and making this video possible through their sponsorship. 

You use Claude Code, Codex, and Pi separately — copying context between them because no agent can see the others. In this video I break down the meta-harness: a single layer that sits above every harness so all your agents share one session, one history, and one set of [[concepts/policies|policies]] — and even review each other's code across vendors (Claude writes, Codex reviews). I walk through OmniGent, the [[concepts/apache-2-license|Apache-2.0]] meta-harness Databricks just open-sourced, and build a real app with it live.

LINKS:
Blogpost: https://omnigent.ai/
Github: https://github.com/omnigent-ai/omnigent


My voice to text App: whryte.com
Website: https://engineerprompt.ai/
RAG Beyond Basics Course:
https://prompt-s-site.thinkific.com/courses/rag
Signup for Newsletter, localgpt:
https://tally.so/r/3y9bb0

Let's Connect: 
🦾 Discord: https://discord.com/invite/t4eYQRUcXB
☕ Buy me a Coffee: https://ko-fi.com/promptengineering
|🔴 Patreon: https://www.patreon.com/PromptEngineering
💼[[concepts/consulting|Consulting]]: https://calendly.com/engineerprompt/consulting-call
📧 Business [[entities/contact|Contact]]: engineerprompt@gmail.com
Become Member: http://tinyurl.com/y5h28s6h

💻 Pre-configured localGPT VM: https://bit.ly/localGPT (use Code: PromptEngineering for 50% off).  

Signup for Newsletter, localgpt:
https://tally.so/r/3y9bb0

00:00 - The Problem: The "Agent Box" Trap 
01:40 - What is a Meta-Harness?
02:22 - The Architecture: Runner, Server, and Sandbox
03:50 - Multi-Agent Composition 
04:15 - Meet 'Poly': Cross-Vendor Code Reviews 
05:03 - Meet 'Debbie': The AI Debate Partner 
05:45 - [[concepts/governance|Governance]] & Safety: No more "YOLO" runs
07:08 - Real-Time Collaboration Features 
07:32 - Step-by-Step Setup & [[concepts/installation|Installation]] 
09:12 - Live Demo: Building a [[entities/google-gemini|Gemini Web App]] 
11:40 - Monitoring Costs & Token Usage 
13:10 - Final Results & The Future of Orchestration

#### Tags
`prompt engineering`, `Prompt Engineer`, `LLMs`, `AI`, `artificial Intelligence`, `Llama`, `GPT-4`, `fine-tuning LLMs`

#### URLs
- https://omnigent.ai/
- https://github.com/omnigent-ai/omnigent
- https://engineerprompt.ai/
- https://prompt-s-site.thinkific.com/courses/rag
- https://tally.so/r/3y9bb0
- https://discord.com/invite/t4eYQRUcXB
- https://ko-fi.com/promptengineering
- https://www.patreon.com/PromptEngineering
- https://calendly.com/engineerprompt/consulting-call
- http://tinyurl.com/y5h28s6h
- https://bit.ly/localGPT

## Related Concepts
- [[concepts/multi-agent-ai-management|AI Agent Management]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agent_Management)
- [[concepts/open-source|Open-Source Software]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-Source_Software)
- [[concepts/unified-agent-management|Unified Agent Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Unified_Agent_Management)
- [[concepts/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- Meta-Harness Architecture — [Wikipedia](https://en.wikipedia.org/wiki/Meta-Harness_Architecture)
- [[concepts/multi-agent-orchestration|Multi-Agent Orchestration]] — [Wikipedia](https://en.wikipedia.org/wiki/Multi-Agent_Orchestration)
- Vendor Agnosticism — [Wikipedia](https://en.wikipedia.org/wiki/Vendor_Agnosticism)
- [[concepts/e2b|Sandboxed Execution]] — [Wikipedia](https://en.wikipedia.org/wiki/Sandboxed_Execution)
- Policy Enforcement — [Wikipedia](https://en.wikipedia.org/wiki/Policy_Enforcement)
- [[concepts/session|Persistent Session]] State — [Wikipedia](https://en.wikipedia.org/wiki/Persistent_Session_State)
- Cross-Device [[concepts/continuity|Continuity]] — [Wikipedia](https://en.wikipedia.org/wiki/Cross-Device_Continuity)
- [[concepts/yaml-based-configuration|YAML-Based Configuration]] — [Wikipedia](https://en.wikipedia.org/wiki/YAML-Based_Configuration)
- [[concepts/ai-research-transformation|Collaborative AI Workflows]] — [Wikipedia](https://en.wikipedia.org/wiki/Collaborative_AI_Workflows)
- Security Gateways — [Wikipedia](https://en.wikipedia.org/wiki/Security_Gateways)

## Related Entities
- [[entities/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- Databricks — [Wikipedia](https://en.wikipedia.org/wiki/Databricks)
- Omnigent — [Wikipedia](https://en.wikipedia.org/wiki/Omnigent)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- [[entities/codex|Codex]] — [Wikipedia](https://en.wikipedia.org/wiki/Codex)
- PostgreSQL — [Wikipedia](https://en.wikipedia.org/wiki/PostgreSQL)
- [[entities/docker|Docker]] — [Wikipedia](https://en.wikipedia.org/wiki/Docker)