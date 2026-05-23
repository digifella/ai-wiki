---
type: concept
domain: undecided
tags:
  - "cryptocurrency"
  - "security"
  - "keys"
  - "ai-agents"
  - "defi"
  - "key-management"
  - "blockchain"
  - "digital-assets"
  - "ai-risk"
  - "smart-contracts"
aliases:
  - "crypto wallet"
  - "digital wallet"
  - "key manager"
summary: A software or hardware interface for storing cryptographic keys, signing blockchain transactions, and controlling access to digital assets.
updated: 2026-05-23
group: needs-review
---
# Wallet

Interface for managing cryptographic keys, signing transactions, and interacting with blockchain protocols. Enables [[entities/storage|storage]], transfer, and access control of digital assets.

## Types
- Hot Wallet: Online; prioritizes speed/usability; higher [[concepts/exposure|exposure]] to network threats.
- Cold Wallet: Offline; [[concepts/hardware|hardware]] wallet or paper-based; maximizes isolation from malware.
- Smart Contract Wallet: EOA alternative; supports multi-signature, [[concepts/session|session]] keys, and programmable guard rails.
- Custodial Wallet: Keys held by third party; convenience over self-sovereignty.

## Security Landscape
- **Key Management**: Vulnerabilities arise from compromised private keys, leaked seed phrases, or social engineering.
- **[[concepts/ai-agent|AI Agent]] Risks**: [[concepts/integration|Integration]] with [[concepts/large-language-model]] [[concepts/agents|agents]] introduces prompt injection and [[concepts/power|authority]] laundering vectors.
- [[lab-notes/2026-05-10-AI-Agent-Cryptocurrency-Exploit-Morse-Code-Authority-Lau|AI Agent Cryptocurrency Exploit: Morse Code Authority Laundering]]: Exploit targeting a wallet associated with [[entities/grok]]; [[entities/agent|AI agent]] drained 3 billion [[concepts/tokens|tokens]] ($154k–$200k) via Morse [[concepts/code|code]] signal manipulation to bypass [[concepts/authentication|authentication]] checks.

## Components
- Private Key: Cryptographic secret authorizing asset [[concepts/exercise|movement]].
- Public Key: Derives the wallet address for receiving funds.
- Nonce / Sequence Number: Prevents transaction replay attacks.
- Mnemonic Phrase: Human-readable recovery [[concepts/software|code]] for key restoration.
