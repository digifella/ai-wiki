---
type: concept
domain: maths-cryptography
updated: 2026-04-14
group: number-theory-prime-numbers
summary: "A security model requiring continuous verification for every request and assuming no implicit trust, even within agentic AI ecosystems."
---
- "zero-trust"
  - "ai"
  - "security"
  - "[[concepts/ai-security|ai-security]]"
  - "agentic-ai"
  - "least-privilege"
  - "[[concepts/cybersecurity|cybersecurity]]"
  - "attack-surface"
aliases:
  - "zero-trust-[[concepts/architecture|architecture]]"
group: number-[[concepts/theory|theory]]-[[concepts/prime-numbers|prime-numbers]]

# Zero Trust

A [[concepts/security|security]] model requiring continuous [[concepts/verification|verification]] for every request, assuming no implicit trust regardless of origin. Core principles include **least privilege access**, **micro-segmentation**, and **never trust, always verify**.

## Key Principles
- Verify explicitly before granting access
- Enforce least privilege for all entities
- Assume breach in all environments
- [[concepts/secure|Secure]] all data in transit and at rest

## Zero Trust for AI Agents (IBM, Jeff Crume)
- **[[concepts/action-oriented-ai|Agentic AI]]** (systems that act, not just think) expands [[concepts/attack-surface|attack surface]] through API interactions, tool calls, data [[concepts/exercise|movement]], and sub-[[entities/agent|agent]] creation
- Requires Zero Trust applied to:
  - Agent-to-agent communication
  - Agent-to-API call validation
  - Data [[concepts/flow|flow]] [[concepts/secure|security]]
  - Sub-agent [[concepts/authorization|authorization]]
- Traditional security models insufficient for [[entities/openclaw|autonomous agent]] ecosystems
- **Video Summary (IBM Channel, 2026-04-14):** 2026 04 14 Ai zero trust setup IBM channel
  - [[entities/speaker|Speaker]]: [[entities/jeff-crume|Jeff Crume]], [[concepts/ibm-distinguished-engineer|IBM Distinguished Engineer]]
  - Context: Age of [[concepts/agentic-ai|Agentic AI]]—systems that act (API interactions, tool calls, transactions, data movement)
  - Key points:
    - Zero Trust principles applied to AI agents
    - Continuous verification for agent actions
    - Secure data flow and sub-agent authorization

## Related Concepts
- ag

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-NVIDIA-NemoClaw-Secure-Enterprise-AI-Agent-Platform-Solving-OpenClaw|NVIDIA NemoClaw Secure Enterprise AI Agent Platform Solving OpenClaw]] · [▶ source](https://www.youtube.com/watch?v=EiEH4YziyU8)
- 2026-04-21: Claude Mythos · [▶ source](https://www.youtube.com/watch?v=x_fBn7lto4Q)