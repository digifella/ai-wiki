---
type: concept
domain: health-wellbeing
tags:
  - "data-protection"
  - "privacy-regulation"
  - "eu-law"
  - "compliance-framework"
  - "personal-data"
  - "legal-requirements"
  - "data-brokers"
  - "automation"
  - "unbroker"
aliases:
  - "General Data Protection Regulation"
  - "EU Data Protection Regulation"
  - "GDPR (EU) 2016/679"
summary: GDPR is the EU legal framework governing collection, processing, and storage of personal data with enforcement penalties up to €20 million or 4% of global annual turnover.
updated: 2026-10-04
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-04T20:00:30+00:00" }
group: health-practice-patient-knowledge
---
<!-- domain-nav -->
> domain-badge slug=health-wellbeing name=Health & Wellbeing

# GDPR

**General Data [[concepts/secure|Protection]] [[concepts/regulation|Regulation]]** ((EU) 2016/679) is the primary legal framework in the [[entities/european-union]] for [[concepts/internet-security|data protection]] and [[concepts/privacy|privacy]], governing the collection, processing, and [[entities/storage|storage]] of personal data. It replaced the 1995 Data Protection Directive to harmonize data privacy laws across [[entities/europe|Europe]] and strengthen individual control over their data.

## Key Principles
- **Lawfulness, Fairness, and [[concepts/opacity|Transparency]]**: Data must be processed lawfully and transparently.
- **Purpose Limitation**: Data collected for specified, explicit, and legitimate purposes.
- **Data Minimization**: Data must be adequate, relevant, and limited to what is necessary.
- **Accuracy**: Personal data must be accurate and kept up to date.
- **Storage Limitation**: Data kept only as long as necessary for the purposes for which it is processed.
- **Integrity and Confidentiality**: Data processed securely against [[concepts/security-exposure|unauthorized access]] or loss.
- **[[concepts/accountability|Accountability]]**: The data controller is responsible for demonstrating compliance.

## Enforcement and Rights
- **Right to Erasure (Right to be Forgotten)**: Individuals can request deletion of their personal data under specific conditions.
- **Penalties**: Non-compliance can result in fines up to €20 million or 4% of global annual turnover.
- **Cross-Border Data Transfer**: Strict rules apply to transferring personal data outside the [[entities/european-union]].

## Practical Implementation: Automating Deletion
While GDPR grants the right to erasure, manually exercising this right across numerous data brokers is labor-intensive. Tools like **Unbroker** automate this process locally.

- **Unbroker** is a skill for the open-source [[concepts/agentic-ai|Hermes Agent]] designed to automate [[concepts/personal-data-deletion|personal data deletion]] from 500+ data brokers.
- It addresses the gap between legal rights and practical enforcement by handling the "deliberately complex" opt-out processes.
- See [[lab-notes/2026-10-04-Unbroker-Automating-Personal-Data-Deletion-from-Data-Bro|Unbroker: Automating Personal Data Deletion from Data Brokers Locally]] for technical details.

## References
- [Unbroker: Automating Personal Data Deletion from Data Brokers Locally](https://www.youtube.com/watch?v=2Zk4uR4_zhA)
