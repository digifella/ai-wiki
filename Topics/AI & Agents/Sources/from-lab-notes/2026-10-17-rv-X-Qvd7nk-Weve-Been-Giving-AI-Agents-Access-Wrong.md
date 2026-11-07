---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: c75072700ff82b7bb75f
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "We’ve Been Giving AI Agents Access Wrong."
date: 2026-10-17
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-17-rv-X-Qvd7nk-Weve-Been-Giving-AI-Agents-Access-Wrong"
---
## We’ve Been Giving AI Agents Access Wrong.
**Clip title:** We’ve Been Giving AI Agents Access Wrong.
**Author / channel:** Prompt Engineering
**URL:** https://www.youtube.com/watch?v=rv-X-Qvd7nk

### Summary
Here's a summary of the video:

The video discusses the challenges of securing AI coding agents and preventing accidental database modifications. The speaker highlights incidents where coding agents accidentally deleted production data and backups. The primary issue is that agents often lack a distinct identity, relying instead on shared credentials or borrowed access.

To address this, the video introduces the "Agentic Identity Framework" from Teleport. This framework emphasizes giving each agent a unique identity, enforcing least privilege access, and continuously verifying agent actions. The framework uses a three-layer approach: identity, access, and security.

Key takeaways include:
- Agents should have unique identities to trace actions back to specific agents.
- Least privilege access should be enforced to limit what agents can do.
- Continuous verification and monitoring are crucial to detect and prevent unauthorized actions.

By implementing these principles, organizations can better secure AI coding agents and prevent catastrophic data loss.

### Video Description & Links
#### Description
AI agents can now read your tickets, query your databases and change your infrastructure on their own, and most of them do it with a shared password. In this video I look at why agents need their own identity, then run the same task twice on a test store. With one shared admin login, the agent deleted more than a million audit-log rows, and the database log could not say who did it. With every agent getting its own identity through Teleport, the same model was refused and asked a human instead.

Teleport Agentic Identity Framework: https://fandf.co/4hyPyfG
The lethal trifecta for AI agents (Simon Willison): https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/

#### Tags
`AI Agents`, `Agent Harness`, `Claude Code`, `Local LLMs`, `Multimodal RAG`, `Qwen`, `DeepSeek`, `Gemini`, `vLLM`, `AI Engineering`, `codex`, `Opus`, `Fable`, `GPT Astra`, `Gemini 4`, `Argon`

#### URLs
- https://fandf.co/4hyPyfG
- https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/
