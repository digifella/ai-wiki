---
type: entity
tags:
  - "privacy"
  - "data-brokers"
  - "automation"
  - "ccpa"
  - "gdpr"
  - "unbroker"
  - "consumer-rights"
  - "california"
aliases:
  - "California Consumer Privacy Act"
summary: "The California Consumer Privacy Act is a state statute granting residents rights to know, delete, and opt-out of the sale of their personal information."
updated: 2026-10-05
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-04T20:18:33+00:00" }
---
# CCPA

The **California Consumer [[concepts/privacy|Privacy]] Act (CCPA)** is a state statute intended to enhance privacy rights and consumer [[concepts/secure|protection]] for residents of California, [[entities/united-states|United States]]. It grants individuals specific rights regarding their personal information, including the right to know what data is collected, the right to delete such data, and the right to opt-out of its sale.

## Key Provisions
- **Right to Know:** Consumers can request disclosure of the categories and specific pieces of personal information collected.
- **Right to Delete:** Consumers can request that businesses delete personal information collected from them.
- **Right to Opt-Out:** Consumers can direct businesses not to sell their personal information.
- **Non-Discrimination:** Businesses cannot discriminate against consumers who [[concepts/exercise|exercise]] their CCPA rights.

## Relation to Data Brokerage
Data brokers aggregate and sell personal data, often bypassing direct consent. While [[concepts/ccpa]] provides the legal framework for deletion requests, the manual process is burdensome.

### Automation Tools
To address the [[concepts/friction|friction]] of manual [[concepts/compliance|compliance]], tools have emerged to automate the deletion process:
- **[[concepts/automation|Unbroker]]:** An [[concepts/open-source|open-source]] [[concepts/skill|skill]] for the [[concepts/agentic-ai|Hermes Agent]] that automates [[concepts/personal-data-deletion|personal data deletion]] from 500+ data brokers locally.
- **Scope:** Targets the gap between legal rights (CCPA/GDPR) and practical execution.
- **Mechanism:** Uses local automation to submit deletion requests without relying on third-party [[concepts/cloud-based-services|cloud services]], enhancing privacy during the process.

For detailed implementation [[concepts/notes|notes]], see [[lab-notes/2026-10-04-Unbroker-Automating-Personal-Data-Deletion-from-Data-Bro|Unbroker: Automating Personal Data Deletion from Data Brokers Locally]].

## Related Regulations
- [[concepts/gdpr]]: General [[concepts/internet-security|Data Protection]] [[concepts/regulation|Regulation]] (EU equivalent with similar deletion rights).
- CPRA: California Privacy Rights Act (expands CCPA provisions).

## References
- [Unbroker: Automating Personal Data Deletion from Data Brokers Locally](https://www.youtube.com/watch?v=2Zk4uR4_zhA)
