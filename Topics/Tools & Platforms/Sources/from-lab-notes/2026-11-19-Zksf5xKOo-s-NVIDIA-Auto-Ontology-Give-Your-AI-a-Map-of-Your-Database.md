---
selected-topic: "Tools & Platforms"
wiki-ready: true
review-status: "approved"
lab-review-id: 4dcf07a47d20b0f76d4e
suggested-topic: "Tools, Platforms & Infrastructure"
domain: "tools-platforms"
title: "NVIDIA Auto Ontology: Give Your AI a Map of Your Database (Free)"
date: 2026-11-19
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
credibility_tier: 1
credibility_label: "Commentary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-19-Zksf5xKOo-s-NVIDIA-Auto-Ontology-Give-Your-AI-a-Map-of-Your-Database"
---
## NVIDIA Auto Ontology: Give Your AI a Map of Your Database (Free)
**Clip title:** NVIDIA Auto Ontology: Give Your AI a Map of Your Database (Free)
**Author / channel:** Syed Humair
**URL:** https://www.youtube.com/watch?v=Zksf5xKOo-s
**Credibility:** Commentary (tier 1 of 5). YouTube video from Syed Humair: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
The video discusses the limitations of using AI agents for querying databases due to a lack of shared context about business terms and relationships. It introduces NVIDIA's open-source tool, Auto Ontology, which maps database structures to business concepts to improve SQL query accuracy.

The speaker details the installation of Auto Ontology using Docker, Git, and UV, and demonstrates its application with a sample sales database from Microsoft containing 51 tables. The tool builds an ontology map, translating table schemas into business terms and relationships, and includes a curation layer where human users can review and certify terms. The presenter emphasizes the importance of context and human oversight in making AI agents reliable, noting that while the tool drafts the ontology, human validation is necessary to ensure accuracy in query generation.

In conclusion, the video highlights Auto Ontology as a valuable tool for bridging the gap between database structures and business terminology, enhancing the reliability of AI agents in data querying. However, it stresses that human curation remains essential for correct context and interpretation.

### Video Description & Links
#### Description
I install it, fix the three things that broke for me, build the map from a sample database, check its terms, ask it questions (including one it can't answer), and test 11 AI models with it. Only one got it right every time on its own.

▶ Guide, my 3 fixes, install commands and other models: https://github.com/syedair/youtube-content/tree/main/nvidia-auto-ontology
▶ Auto Ontology (Apache 2.0): https://github.com/NVIDIA/auto-ontology
▶ Sample data: https://github.com/NVIDIA/auto-ontology-eval

👇 Which AI model would you use with it? Tell me in the comments.

0:00 Can you trust the number?
1:18 What an ontology is
3:51 How Auto Ontology compares (OWL, SPARQL, Ossie)
7:15 What it does, in three steps
9:00 What you need and install
11:08 Three fixes you'll need
12:45 Use your own models
13:43 Connect the database and build the map
15:05 The map it built
15:34 Look at one term, then check it
17:30 Ask a question
19:04 Ask what it can't answer
19:53 A quick tour: charts, search, data, import/export
21:04 Eleven AI models compared
22:31 Honest notes and my reaction
24:33 Is it worth a look?

CONNECT

#NVIDIA #Ontology #AIAgents

#### Tags
`AI agents`, `Auto Ontology`, `Claude Sonnet`, `CodeUCraftAI`, `LLM comparison`, `NVIDIA`, `NVIDIA Auto Ontology`, `Postgres`, `database`, `knowledge graph`, `ontology`, `open source`, `semantic layer`, `text to SQL`

#### URLs
- https://github.com/syedair/youtube-content/tree/main/nvidia-auto-ontology
- https://github.com/NVIDIA/auto-ontology
- https://github.com/NVIDIA/auto-ontology-eval
