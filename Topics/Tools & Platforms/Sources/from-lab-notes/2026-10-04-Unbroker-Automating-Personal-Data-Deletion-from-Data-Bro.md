---
wiki-ingested: true
title: "Unbroker: Automating Personal Data Deletion from Data Brokers Locally"
date: 2026-10-04
source_type: youtube_summary
provider: "Google"
api: "Gemini 2.5 Flash"
modes: "Summary"
domain: tools-platforms-infrastructure
group: data-pipelines-sync-storage
type: "source-summary"
aliases:
  - "lab-notes/2026-10-04-Unbroker-Automating-Personal-Data-Deletion-from-Data-Bro"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## Unbroker: Automating Personal Data Deletion from Data Brokers Locally
**Clip title:** Ubroker Locally: Erase Yourself From 500+ Data Brokers For Free
**[[entities/tasia-custode|Author]] / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=2Zk4uR4_zhA

### Summary
The video introduces "[[concepts/automation|Unbroker]]," a new [[concepts/skill|skill]] developed for the [[concepts/open-source|open-source]] [[concepts/agentic-ai|Hermes Agent]], aimed at tackling the pervasive issue of personal data being collected and sold by data brokers. The [[entities/speaker|speaker]] highlights that while [[concepts/privacy|privacy]] regulations like [[concepts/ccpa|CCPA]] and [[entities/gdpr|GDPR]] grant individuals the right to have their data deleted, the process is deliberately complex and fragmented across hundreds of [[concepts/data-broker|data broker]] sites, often necessitating paid services that ironically require handing over sensitive information to another third-party company. Unbroker is presented as a free, local [[concepts/solution|solution]] to automate this arduous process, empowering users to regain control over their digital footprint without further compromising their [[concepts/privacy|privacy]].

Unbroker leverages the capabilities of the [[concepts/agentic-ai|Hermes Agent]], a [[concepts/self-evolution|self-improving AI]] that runs on the user's [[concepts/personal-computer|local machine]], ensuring personal data never leaves their control. The skill works by first building a comprehensive profile of the user's identity, including current and old names, addresses, [[entities/email|email]] addresses, and aliases, to account for stale information data brokers might hold. It then scans a parallel list of data brokers to identify where the user's information is listed. Unbroker automates the filing of opt-out requests, handles common [[concepts/verification|verification]] steps like CAPTCHAs, and manages email confirmations, streamlining a process that would otherwise be extremely time-consuming and frustrating.

The demonstration in the video outlines the [[concepts/installation|installation]] of Hermes Agent and the Unbroker skill on an [[concepts/ubuntu|Ubuntu]] system, showing how it automatically configures itself into a safe "draft-only" mode. It pulls a live list of data brokers from registries like BadBoul and the CA Data Broker Registry, expanding coverage to over 50 data brokers. When run with a test subject's information, the agent details the actions it plans to take, such as a "CA drop request" that aims to delete data from all 524 registered brokers at once for California residents, followed by a parallel scan of people-search sites.

However, the speaker also acknowledges Unbroker's current limitations. It is primarily built around American data brokers, with its broker database and regulatory lane focused on the US and [[entities/canada|Canada]], making it less effective for users in other regions. Additionally, its default operation is in a "draft-only" email mode, meaning actual deletion requests are not automatically sent without further configuration (like providing [[concepts/api-keys|API keys]] or installing an email agent). It cannot defeat complex "hard" captchas, anti-[[concepts/ai-bots|bot systems]], or tasks requiring direct human interaction such as phone calls, government ID uploads, or faxes. Despite these early-stage constraints and the fact that it's not a "magic 100% bulk delete button," Unbroker is presented as a valuable, well-structured assistant for a genuinely high-[[concepts/friction|friction]] privacy chore, offering a promising open-source tool for personal data [[concepts/security|security]].

### Video Description & Links
#### Description
This video locally installs and tests Ubroker, a tool that finds where your personal info is exposed by data brokers and files the removals for you.

#unbroker #hermesagent 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

▶ https://github.com/NousResearch/hermes-agent/tree/main/optional-skills/security/unbroker

All rights reserved © Fahd Mirza

#### URLs
- https://github.com/NousResearch/hermes-agent/tree/main/optional-skills/security/unbroker

## Related Concepts
- [[concepts/data-broker|data broker]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_broker)
- [[concepts/personal-data-deletion|personal data deletion]]
- [[concepts/gdpr|privacy regulation]]
- [[concepts/automation|automation]] — [Wikipedia](https://en.wikipedia.org/wiki/Automation)
- [[concepts/open-source|open-source software]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-source_software)
- [[concepts/persistent-reasoning|agent framework]]
- [[concepts/local-execution|local execution]]
- digital footprint — [Wikipedia](https://en.wikipedia.org/wiki/Digital_footprint)
- [[concepts/ccpa|CCPA]]
- [[concepts/gdpr|GDPR]] — [Wikipedia](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation)
- [[concepts/vps-deployment|data privacy]] — [Wikipedia](https://en.wikipedia.org/wiki/Information_privacy)

## Related Entities
- [[entities/hermes-agent|Hermes Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Hermes_Agent)
- [[entities/fahd-mirza|Fahd Mirza]]
- [[entities/ccpa|CCPA]]
- [[entities/gdpr|GDPR]] — [Wikipedia](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation)
- [[entities/ubuntu|Ubuntu]] — [Wikipedia](https://en.wikipedia.org/wiki/Ubuntu)
- LinkedIn — [Wikipedia](https://en.wikipedia.org/wiki/LinkedIn)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)