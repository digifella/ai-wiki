---
wiki-ingested: true
title: "PG-Jev: Natural Language Querying and AI-Driven Decision Modeling for PostgreSQL"
date: 2026-10-10
source_type: youtube_summary
provider: "Google"
api: "Gemini 2.5 Flash"
modes: "Summary"
type: "source-summary"
domain: maths-logic-crypto
group: number-theory-prime-numbers
aliases:
  - "lab-notes/2026-10-10-PG-Jev-Natural-Language-Querying-and-AI-Driven-Decision"
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

## PG-Jev: Natural Language Querying and AI-Driven Decision Modeling for PostgreSQL
**Clip title:** PG-Jev: Query Your Database in Plain English with [[concepts/decision-model|Decision Model]]
**[[entities/tasia-custode|Author]] / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=XiGBCk5MnnY

### Summary
This video introduces `pg-jev`, a [[concepts/postgresql-extension|PostgreSQL extension]] designed to enable [[concepts/natural-language-querying|natural language querying]] directly within SQL. Distinguishing itself from merely being "yet another [[concepts/decision-model|decision model]]," `pg-jev` offers a practical, real-[[entities/earth|world]] application for filtering, ranking, and classifying database rows using plain English conditions within SQL `WHERE` clauses. The [[entities/speaker|speaker]] highlights that this approach allows the database to retain control of the data, while `jev` handles the [[concepts/semantic-understanding|semantic understanding]] that traditional SQL struggles to express, eliminating the need for complex application-level [[concepts/open-source-philosophy|logic]] or data [[concepts/exercise|movement]].

The [[concepts/installation|installation]] and [[concepts/installation|setup process]] for `pg-jev` is demonstrated on an [[concepts/ubuntu|Ubuntu]] 22.04 LTS environment. Key steps include installing PostgreSQL and its [[concepts/python|Python]] support (`postgresql-plpython3-14`), followed by installing the `pgxnclient` (PostgreSQL Extension Network client), which acts similarly to NPM for PostgreSQL extensions. Once `pgxnclient` is set up and the `jev` extension is installed and created within PostgreSQL, users can configure it with an OpenAI-compatible API key and a specific model (e.g., `typesafe/jev-1.13`) to enable its advanced functionality.

The [[entities/speaker|speaker]] then illustrates `pg-jev`'s capabilities through several compelling real-[[entities/earth|world]] examples using a customer support ticket database. First, `jev` is used to rank tickets by "anger or frustration" level, successfully identifying critical issues like "App crashing" and "Charged twice" with high [[concepts/probability|probability]] scores, while marking "Happy customer" as low priority. Second, `jev` is tasked with automatically assigning tickets to specific departments (billing, technical, shipping, [[concepts/security|security]]) based on natural language, showcasing accurate routing for issues like "Wrong item delivered" to shipping and "Suspicious activity" to [[concepts/security|security]]. Finally, a third example demonstrates scoring ticket urgency from "low" to "critical," with "Suspicious activity" correctly receiving the highest urgency score.

In conclusion, `pg-jev` empowers users to perform sophisticated data analysis, ranking, and classification directly within their PostgreSQL databases using intuitive plain English queries, effectively replacing potentially complex, custom-built routing or classification engines. The speaker emphasizes the power of these "decision models" in practical applications, noting that while `pg-jev` offers a [[concepts/hidden-engineering|seamless integration]], similar results could also be achieved by leveraging [[concepts/local-llm|local AI models]] with [[concepts/tool-calling|tool-calling]] [[concepts/causes|mechanisms]], highlighting the broader utility and [[concepts/accessibility|accessibility]] of [[concepts/language-processing|natural language processing]] for database interactions.

### Video Description & Links
#### Description
This video locally installs and tests pg-jev, which is a PostgreSQL extension powered by TypeSafe's Jev.

#pgjev #jev 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

▶ https://github.com/realZachi/pg-jev

All rights reserved © Fahd Mirza

#### URLs
- https://github.com/realZachi/pg-jev

## Related Concepts
- [[concepts/natural-language-querying|natural language querying]]
- [[concepts/ai-driven-decision-modeling|AI-driven decision modeling]]
- [[concepts/semantic-understanding|semantic understanding]]
- [[concepts/sql-where-clauses|SQL WHERE clauses]]
- [[concepts/row-filtering|row filtering]]
- [[concepts/row-ranking|row ranking]]
- [[concepts/row-classification|row classification]]
- [[concepts/postgresql-extension|PostgreSQL Extension]]
- [[concepts/thematic-analysis|Data Analysis]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_analysis)
- [[concepts/ai-decision-models|Ticket Routing]]
- [[concepts/qwen-coder|Local AI Models]]
- Database Integration — [Wikipedia](https://en.wikipedia.org/wiki/Heterogeneous_database_system)

## Related Entities
- [[entities/pg-jev|PG-Jev]]
- [[entities/fahd-mirza|Fahd Mirza]]
- PostgreSQL — [Wikipedia](https://en.wikipedia.org/wiki/PostgreSQL)
- TypeSafe — [Wikipedia](https://en.wikipedia.org/wiki/Type_safety)
- [[entities/jev|Jev]]
- [[entities/ubuntu|Ubuntu]] — [Wikipedia](https://en.wikipedia.org/wiki/Ubuntu)
- [[entities/npm|NPM]] — [Wikipedia](https://en.wikipedia.org/wiki/Npm)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- LinkedIn — [Wikipedia](https://en.wikipedia.org/wiki/LinkedIn)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)