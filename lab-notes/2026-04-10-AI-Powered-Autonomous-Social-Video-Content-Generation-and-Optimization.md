---
wiki-ingested: true
title: "AI-Powered Autonomous Social Video Content Generation and Optimization"
created: "2026-04-10 14:06"
date: 2026-04-10
source: lab-summary
provider:
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: agent-systems-skills
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## AI-Powered Autonomous Social Video Content Generation and Optimization
System
**Clip title:** [[concepts/claude-code|Claude Code]] + Karpathy's [[concepts/autoresearch|Autoresearch]] = GOD MODE!
**Author / channel:** [[entities/ai-andy|AI Andy]]
**URL:** https://www.youtube.com/watch?v=vjJwgXsMfjM

### Summary
The video details the creation of an AI-powered "[[concepts/content-machine|Content Machine]]" capable
of automatically generating, publishing, and continuously improving social
media video content. Inspired by [[entities/andrej-karpathy|Andrej Karpathy]]'s "[[concepts/autoresearch|autoresearch]]"
repository, the [[concepts/creator|creator]] adapted this concept of autonomous experimentation
and [[concepts/self-optimization|self-optimization]] from [[concepts/machine-learning|machine learning]] code to the domain of viral
[[concepts/content-generation|content generation]]. The core idea is to create five videos daily, publish
them, gather real performance data, identify what worked and what didn't,
and then automatically rewrite the AI's prompts to generate better content
every single day.

The first step involved understanding Karpathy's original "[[entities/autoresearch|autoresearch]]"
framework, which takes three inputs: a file to change, [[concepts/instructions|instructions]] on what
to optimize, and a method to measure improvement. The [[entities/creator|creator]] realized his
content pipeline possessed these elements: the script (prompt), the
[[concepts/workflow|workflow]] (execution), and social media views (measurable output). He then
used an [[concepts/ai-assistant|AI assistant]] to strategize how to integrate real social media views
as the evaluation metric. This led to a two-layer system: a "fast [[concepts/loop|loop]]" for
AI-judged criteria (like hook quality) and a "slow loop" for weekly human
analysis of actual view data. Through the [Meta Graph API](https://en.wikipedia.org/wiki/Meta_Graph_API), he pulled
extensive Instagram and Facebook data, revealing clear patterns: "wow
factor" visual demos crushed it, while productivity-focused content
underperformed.

A critical component was building robust, objective evaluation criteria.
Instead of subjective assessments like "Is this engaging?", the creator
developed 10 binary (yes/no) questions for [[concepts/gemini|Gemini]], focusing on aspects like
hook quality (e.g., "Does the hook describe a RESULT or TRANSFORMATION?"),
content framing, emotional/visual impact, and differentiation. These clear,
machine-readable questions provided a measurable score out of ten for each
script, eliminating [[concepts/ambiguity|ambiguity]] and enabling precise feedback for the AI.

This formed the "[[entities/autoresearch|Autoresearch]] Feedback Loop." It begins with **Data
Collection** (Meta Graph API pulls latest views), followed by **Match &
Update** (views matched to Airtable records). Then comes **Evaluation**,
which includes **Pre-scoring New [[concepts/ideas|Ideas]]** (source tweets evaluated by
[[concepts/gemini|Gemini]], high-scoring ones enter a creation queue) and **Scoring Published
Scripts** ([[entities/gemini|Gemini]] scores actual scripts). Next is **Intelligence**, where
the system **Correlates** scores with real views to identify winners, false
positives, handle rankings, and track approval rates. Finally, **Output**
involves **Generate & Push**, where [[entities/gemini|Gemini]] writes improved prompts based on
the correlation data and pushes them to the workflow. This self-improving
loop runs every 24 hours.

Over two days, the prompt underwent five meaningful revisions, evolving
from a simple announcement to one designed to trigger curiosity, hint at
dramatic shifts, deepen [[concepts/personalization|personalization]], and create emotional impact. This
continuous evolution is logged, providing a historical record of prompt
changes and their effects. The system runs automatically daily, pulling
views, updating scores, and generating reports. A human team member
provides crucial feedback by reviewing generated videos and marking them as
"schedule" or "no," allowing the AI to learn from human quality inspection.
The creator highlights that this system continuously improves, logging
every change and its associated [[concepts/cost|cost]], thereby creating a valuable "research
log" that can be handed to future, smarter [[concepts/ai-models|AI models]]. The entire Content
Mate system, including the [[entities/n8n|N8N]] template and [[concepts/automated-code-modification|autoresearch]] loop, is offered
for free, demonstrating the broad applicability of this self-optimizing
framework to any process with a measurable output.

## Related Concepts
- [[concepts/autonomous-content-generation|Autonomous Content Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Autonomous_Content_Generation)
- [[concepts/social-media-video-automation|Content Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Content_Optimization)
- [[concepts/content-machine|Content Machine]] — [Wikipedia](https://en.wikipedia.org/wiki/Content_Machine)
- [[concepts/autonomous-experimentation|Autonomous Experimentation]] — [Wikipedia](https://en.wikipedia.org/wiki/Autonomous_Experimentation)
- [[concepts/social-media-video-automation|Social Media Video Automation]] — [Wikipedia](https://en.wikipedia.org/wiki/Social_Media_Video_Automation)
- [[concepts/self-improvement|Self-optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Self-optimization)
- [[concepts/machine-learning|Machine Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Machine_Learning)
- [[concepts/automated-code-modification|Autoresearch]] Framework — [Wikipedia](https://en.wikipedia.org/wiki/Autoresearch_Framework)
- [[concepts/automated-feedback-loop|Feedback Loop]] — [Wikipedia](https://en.wikipedia.org/wiki/Feedback_Loop)
- [Data Collection](https://en.wikipedia.org/wiki/Data_Collection) — [Wikipedia](https://en.wikipedia.org/wiki/Data_Collection)
- [[concepts/defined-metrics|Evaluation Criteria]] — [Wikipedia](https://en.wikipedia.org/wiki/Evaluation_Criteria)
- [[concepts/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- [Dual-loop System](https://en.wikipedia.org/wiki/Dual-loop_System) — [Wikipedia](https://en.wikipedia.org/wiki/Dual-loop_System)
- [[concepts/automated-workflow|Automated Workflow]] — [Wikipedia](https://en.wikipedia.org/wiki/Automated_Workflow)
- [Binary Scoring](https://en.wikipedia.org/wiki/Binary_Scoring) — [Wikipedia](https://en.wikipedia.org/wiki/Binary_Scoring)
- Meta Graph API — [Wikipedia](https://en.wikipedia.org/wiki/Meta_Graph_API)
