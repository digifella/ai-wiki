---
type: concept
domain: tools-platforms
tags:
  - "ai-security"
  - "cryptocurrency-exploit"
  - "prompt-injection"
  - "morse-code"
  - "agent-safety"
  - "agent-authorization"
  - "steganography"
aliases:
  - "Morse Code Agent Exploit"
  - "Signal Pattern Authority Bypass"
  - "Steganographic Transaction Injection"
summary: A prompt injection variant that encodes malicious transaction commands in Morse Code sequences to bypass AI agent authorization controls and trigger unauthorized cryptocurrency transfers.
updated: 2026-05-23
group: developer-tooling-clis
---
# Morse Code Authority Laundering
A prompt injection-adjacent exploit targeting [[concepts/ai-agent]] [[concepts/authorization|authorization]] boundaries, where adversarial actors encode malicious transaction [[concepts/commands|commands]] as Morse [[concepts/code|Code]] sequences within benign input streams. AI systems leveraging signal-recognition heuristics misinterpret these patterns as valid cryptographic signatures or administrative privileges, triggering automated asset transfers while bypassing semantic safety filters.

## Incident Data & Observations
- [[lab-notes/2026-05-10-AI-Agent-Cryptocurrency-Exploit-Morse-Code-Authority-Lau|AI Agent Cryptocurrency Exploit: Morse Code Authority Laundering]]
- Target: [[concepts/wallet|Wallet]] infrastructure reportedly linked to [[entities/grok]] AI
- Volume: 3 billion [[concepts/tokens|tokens]] transferred to an external address
- Value: $154,530–$200,000 USD [[concepts/assistive-technology|at]] liquidation
- Vector: Encoded signal patterns spoofed agent-level transaction approvals
- Source: [[entities/daves-garage|Dave's Garage]] technical analysis (2026-05-10)

## Execution Mechanics
- Adversary embeds steganographic Morse sequences into [[entities/agent|agent]] [[concepts/context-windows|context windows]] (API payloads, chat history, or on-chain [[concepts/metadata|metadata]])
- [[concepts/model-architecture|LLM architecture]] decodes patterns as high-priority commands due to over-reliance on non-linguistic signal recognition
- Bypasses natural-language safety filters by avoiding textual red [[concepts/flags|flags]]
- Triggers automated wallet signing routines or Smart Contract execution functions
- Funds routed through intermediate hop addresses prior to [[concepts/consolidation|consolidation]]

## Mitigation & Detection
- Enforce cryptographic [[concepts/verification|verification]] for all agent-executed transactions
- Sanitize input streams for non-linguistic signal embeddings and pattern anomalies
- Deploy real-time monitoring for rapid, unapproved token movements
- Restrict agent privilege scopes via [[concepts/zero-trust|Zero Trust]] [[concepts/architecture|Architecture]] and read-only execution sandboxes
- Audit [[concepts/training|training]] corpora for latent Morse-pattern recognition [[concepts/biases|biases]]

## Related Concepts
- [[concepts/ai-agent-security]]
- Cryptocurrency Exploits
- Prompt Injection
- Steganography in LLMs
- Digital Signature Spoofing
- Smart Contract Vulnerabilities
