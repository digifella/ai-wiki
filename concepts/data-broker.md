---
type: concept
domain: tools-platforms-infrastructure
group: data-pipelines-sync-storage
tags:
  - "data-broker"
  - "privacy"
  - "surveillance"
  - "data-aggregation"
  - "gdpr"
aliases:
  - "Data Aggregator"
  - "Consumer Data Broker"
summary: "A data broker is an entity that collects and sells personal consumer information to third parties, often without direct consent, for purposes such as targeted advertising and credit scoring."
updated: 2026-10-05
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-04T19:53:05+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Data Broker

A **data broker** is a company or individual that collects, aggregates, and sells personal information about consumers to third parties, often without the direct knowledge or explicit consent of the individuals involved. These [[concepts/nodes|entities]] operate in the background of the digital [[concepts/economic-system|economy]], creating detailed profiles used for targeted advertising, credit scoring, insurance underwriting, and other commercial purposes.

## Key Characteristics
- **Aggregation:** Compiles data from diverse sources including public records, social media, purchase histories, and data [[concepts/scraping|scraping]].
- **Anonymity:** Often operates without direct consumer interaction, making it difficult for individuals to know what data is held about them.
- **Monetization:** Sells access to these datasets or provides insights derived from them to clients.

## Privacy Implications
Data brokers pose significant risks to individual [[concepts/privacy|privacy]] and [[concepts/security|security]], including:
- **Identity Theft:** Aggregated data can facilitate sophisticated social [[entities/national-academies|engineering]] or identity [[concepts/fraud|fraud]].
- **Surveillance:** Enables persistent tracking of individual behavior across platforms.
- **Discrimination:** Profiles may be used to exclude individuals from opportunities based on inferred characteristics.

## Mitigation and Tools
While regulations like [[concepts/gdpr]] and [[concepts/ccpa]] provide legal frameworks for data deletion, the manual process is often tedious and incomplete. Recent developments focus on automating this process.

### Unbroker Initiative
A notable tool addressing this issue is **Unbroker**, an automation [[concepts/skill|skill]] for the [[concepts/open-source|open-source]] [[entities/hermes-agent]]. It aims to simplify the opt-out process from hundreds of data brokers.

- **Functionality:** Automates the deletion of personal data from over 500 data broker sites locally.
- **Goal:** Empowers users to [[concepts/exercise|exercise]] their right to be forgotten without manual effort.
- **Resource:** See [[lab-notes/2026-10-04-Unbroker-Automating-Personal-Data-Deletion-from-Data-Bro|Unbroker: Automating Personal Data Deletion from Data Brokers Locally]] for detailed implementation [[concepts/notes|notes]].
- **Source:** [Unbroker: Automating Personal Data Deletion from Data Brokers Locally](https://www.youtube.com/watch?v=2Zk4uR4_zhA)

## Related Concepts
- Data [[concepts/privacy|Privacy]]
- Right to be Forgotten
- Surveillance Capitalism
- Opt-out
