---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "hyperledger-fabric"
  - "smart-contracts"
  - "blockchain-logic"
  - "state-management"
  - "execution-isolation"
  - "healthcare-records"
  - "ai-agents"
  - "documentation-tools"
aliases:
  - "smart contracts"
  - "business logic"
  - "Fabric chaincode"
summary: Chaincode is Hyperledger Fabric's implementation of smart contracts that define transaction rules and manage ledger state through isolated execution environments. Related tooling includes AI-driven documentation agents like OpenWiki.
updated: 2026-07-11
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Chaincode

**Chaincode** is the term used in Hyperledger Fabric to refer to the business [[concepts/open-source-philosophy|logic]] or smart contracts that run on a blockchain network. It defines the rules and data structures for transactions, enabling the manipulation of ledger state.

## Architecture & Execution

- Runs in isolated execution environments (e.g., [[entities/docker]] [[concepts/containerization-technology|containers]] or WebAssembly modules).
- Invoked by Transactions via a Proposal [[concepts/flow|flow]]: clients submit proposals to endorsing peers, which simulate the chaincode to read/write sets without committing to the ledger.
- Supports multiple languages, primarily Go, [[entities/nodejs]], and Java.

## Key Characteristics

- **State Management**: Maintains a key-value store for the specific chaincode instance.
- **[[concepts/disconnection|Isolation]]**: Each chaincode instance operates in its own namespace to prevent conflicts.
- **Lifecycle**: Managed through a lifecycle proto

## Related Tooling & Documentation

- **AI-Driven Documentation**: Modern [[concepts/development-workflows|development workflows]] increasingly utilize automated agents for maintaining [[concepts/technical-documentation|technical documentation]].
	- [[lab-notes/2026-07-06-OpenWiki-Automated-Open-Source-CLI-for-AI-Agent-Document|OpenWiki: Automated Open-Source CLI for AI Agent Documentation]] is an [[concepts/open-source|open-source]] [[concepts/terminal-agent|CLI agent]] from [[entities/langchain]] designed to simplify the generation and maintenance of documentation for codebases, specifically tailored for [[concepts/agentic-ai|AI agents]].

## References

- [OpenWiki: Automated Open-Source CLI for AI Agent Documentation](https://www.youtube.com/watch?v=nIVu3zfYprI)
