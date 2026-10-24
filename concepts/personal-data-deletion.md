---
type: concept
domain: tools-platforms-infrastructure
group: data-pipelines-sync-storage
tags:
  - "personal-data"
  - "data-deletion"
  - "privacy"
  - "automation"
  - "unbroker"
aliases:
  - "Right to Erasure"
  - "Data Broker Removal"
  - "PII Deletion"
summary: "Personal Data Deletion is the process of removing personally identifiable information from various platforms, increasingly facilitated by local automation tools like Unbroker."
updated: 2026-10-05
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-04T19:56:33+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Personal Data Deletion

The process of removing personally identifiable information (PII) from databases, archives, and third-party platforms. While regulations like [[concepts/gdpr]] and [[concepts/ccpa]] establish the legal right to erasure, the practical execution is often fragmented and manual.

## Key Challenges
- **Scale:** Individuals must contact hundreds of distinct entities.
- **Opacity:** Difficulty verifying if data was actually deleted or just hidden.
- **Friction:** Manual opt-out processes are deliberately complex to discourage compliance.

## Automation Solutions

### Unbroker
Recent developments in [[entities/ai]] agents have introduced tools to automate this process locally.

- **Tool:** Unbroker: Automating Personal Data Deletion from Data Brokers Locally
- **Mechanism:** An open-source skill for the [[concepts/agentic-ai|Hermes Agent]] that automates requests to data brokers.
- **Scope:** Targets over 500 data brokers.
- **Privacy:** Operates locally, avoiding the need to share personal data with the automation tool itself.
- **Cost:** Free to use.
- **Source:** [Unbroker: Automating Personal Data Deletion from Data Brokers Locally](https://www.youtube.com/watch?v=2Zk4uR4_zhA)

## Related Concepts
- Right to be Forgotten
- [[concepts/data-broker]]
- Privacy Policy
- Automated Compliance

## Source Notes
- 2026-10-04: [[lab-notes/2026-10-04-Unbroker-Automating-Personal-Data-Deletion-from-Data-Bro|Unbroker: Automating Personal Data Deletion from Data Brokers Locally]]

