---
type: entity
tags:
  - "gdpr"
  - "privacy"
  - "data-brokers"
  - "automation"
  - "unbroker"
  - "data-protection"
  - "eu-regulation"
  - "individual-rights"
aliases:
  - "General Data Protection Regulation"
  - "EU Regulation 2016/679"
summary: "GDPR is the primary EU legal framework governing data protection and privacy, establishing individual rights and organizational obligations regarding personal data processing."
updated: 2026-10-05
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-04T20:21:40+00:00" }
---
# GDPR

**[[concepts/gdpr|General Data Protection Regulation]]** (EU [[concepts/regulation|Regulation]] 2016/679) is the primary legal framework governing [[concepts/internet-security|data protection]] and [[concepts/privacy|privacy]] in the [[concepts/european-union|European Union]] and the European Economic Area. It establishes the rights of individuals regarding their personal data and imposes obligations on organizations that process such data.

## Key Principles
- **Lawfulness, fairness, and [[concepts/opacity|transparency]]**: Processing must have a legal basis and be clear to the data subject.
- **Purpose limitation**: Data collected for specified purposes cannot be used for incompatible purposes.
- **Data minimization**: Only data adequate, relevant, and limited to what is necessary should be processed.
- **Accuracy**: Personal data must be accurate and kept up to date.
- **[[entities/storage|Storage]] limitation**: Data should not be kept longer than necessary for the purposes for which it is processed.
- **[[concepts/honesty|Integrity]] and confidentiality**: [[concepts/risk-mitigation|Security measures]] must protect against unauthorized processing or accidental loss.
- **[[concepts/accountability|Accountability]]**: The controller is responsible for demonstrating [[concepts/compliance|compliance]] with the above principles.

## Individual Rights
- **Right to access**: Obtain confirmation of processing and a copy of the data.
- **Right to rectification**: Correct inaccurate or incomplete data.
- **[[concepts/personal-data-deletion|Right to erasure]] ("Right to be forgotten")**: Request deletion of personal data under specific circumstances.
- **Right to restriction of processing**: Limit how data is used while accuracy is verified or legal claims are established.
- **Right to data portability**: Receive data in a structured, machine-readable format and transfer it to another controller.
- **Right to object**: Object to processing based on legitimate interests or direct marketing.
- **Rights related to [[concepts/algorithmic-decision-making|automated decision-making]]**: Including profiling.

## Enforcement and Penalties
- Supervised by Data Protection Authorities (DPAs) in each member state.
- Fines can reach up to €20 million or 4% of global annual turnover, whichever is higher.
- Requires Data Protection Impact Assessment (DPIA) for high-risk processing activities.

## Related Tools and Automation
To [[concepts/exercise|exercise]] the right to erasure effectively, individuals often face challenges due to the sheer volume of data brokers.

- **[[concepts/automation|Unbroker]]**: An automation tool designed to streamline the process of deleting personal data from [[concepts/data-broker|data broker]] databases.
	- Developed as a [[concepts/skill|skill]] for the [[concepts/open-source|open-source]] [[entities/hermes-agent]].
	- Targets the removal of data from 500+ data brokers locally.
	- Addresses the gap between legal rights (GDPR/CCPA) and the practical difficulty of exercising them.
	- See [[lab-notes/2026-10-04-Unbroker-Automating-Personal-Data-Deletion-from-Data-Bro|Unbroker: Automating Personal Data Deletion from Data Brokers Locally]] for detailed implementation [[concepts/notes|notes]].

## References
- [Unbroker: Automating Personal Data Deletion from Data Brokers Locally](https://www.youtube.com/watch?v=2Zk4uR4_zhA)
