---
wiki-ingested: true
title: "AI-Powered Autonomous Social Video Content Generation and Optimization System"
created: "2026-04-07 18:30"
date: 2026-04-07
source: lab-summary
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: agent-systems-skills
---
## AI-Powered Autonomous Social Video Content Generation and Optimization
System
**Clip title:** [[concepts/claude-code|Claude Code]] + Karpathy's [[concepts/autoresearch|Autoresearch]] = GOD MODE!
**Author / channel:** AI Andy
**URL:** https://www.youtube.com/watch?v=vjJwgXsMfjM

### Summary
The video details the creation of an AI-powered "[[concepts/content-machine|Content Machine]]" capable
of automatically generating, publishing, and continuously improving social
media video content. Inspired by Andrej Karpathy's "[[concepts/automated-code-modification|autoresearch]]"
repository, the [[concepts/creator|creator]] adapted this concept of autonomous experimentation
and self-optimization from [[concepts/machine-learning|machine learning]] code to the domain of [[concepts/viral-content-generation|viral content generation]]. The core idea is to create five videos daily, publish
them, gather real performance data, identify what worked and what didn't,
and then automatically rewrite the AI's prompts to generate better content
every single day.

The first step involved understanding Karpathy's original "autoresearch"
framework, which takes three inputs: a file to change, [[concepts/instructions|instructions]] on what
to optimize, and a method to measure improvement. The [[entities/creator|creator]] realized his
content pipeline possessed these elements: the script (prompt), the
[[concepts/workflow|workflow]] (execution), and social media views (measurable output). He then
used an [[concepts/ai-assistant|AI assistant]] to strategize how to integrate real social media views
as the evaluation metric. This led to a two-layer system: a "fast [[concepts/loop|loop]]" for
AI-judged criteria (like hook quality) and a "slow loop" for weekly human
analysis of actual view data. Through the Meta Graph API, he pulled
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

This formed the "Autoresearch Feedback Loop." It begins with **Data
Collection** (Meta Graph API pulls latest views), followed by **Match &
Update** (views matched to Airtable records). Then comes **Evaluation**,
which includes **Pre-scoring New [[concepts/ideas|Ideas]]** (source tweets evaluated by
Gemini, high-scoring ones enter a creation queue) and **Scoring Published
Scripts** (Gemini scores actual scripts). Next is **Intelligence**, where
the system **Correlates** scores with real views to identify winners, false
positives, handle rankings, and track approval rates. Finally, **Output**
involves **Generate & Push**, where Gemini writes improved prompts based on
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
Mate system, including the [[entities/n8n|N8N]] template and autoresearch loop, is offered
for free, demonstrating the broad applicability of this self-optimizing
framework to any process with a measurable output.

## Related Concepts
- [[concepts/autonomous-content-generation|Autonomous video content generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Autonomous_video_content_generation)
- [[concepts/social-media-video-optimization|Social media video optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Social_media_video_optimization)
- [[concepts/content-machine|Content Machine]] — [Wikipedia](https://en.wikipedia.org/wiki/Content_Machine)
- [[concepts/autonomous-experimentation|Autonomous experimentation]] — [Wikipedia](https://en.wikipedia.org/wiki/Autonomous_experimentation)
- [[concepts/automated-publishing|Automated publishing]] — [Wikipedia](https://en.wikipedia.org/wiki/Automated_publishing)
- [[concepts/machine-learning-driven-content-creation|Machine learning-driven content creation]] — [Wikipedia](https://en.wikipedia.org/wiki/Machine_learning-driven_content_creation)
- Self-optimization [[concepts/loop|loop]] — [Wikipedia](https://en.wikipedia.org/wiki/Self-optimization_loop)
- [[concepts/prompt-engineering|Prompt engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering)
- [[concepts/prompt-engineering|Prompt optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_optimization)
- [[concepts/automated-feedback-loop|Feedback loop]] — [Wikipedia](https://en.wikipedia.org/wiki/Feedback_loop)
- [Binary evaluation criteria](https://en.wikipedia.org/wiki/Binary_evaluation_criteria) — [Wikipedia](https://en.wikipedia.org/wiki/Binary_evaluation_criteria)
- [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop) — [Wikipedia](https://en.wikipedia.org/wiki/Human-in-the-loop)
- [Data-driven optimization](https://en.wikipedia.org/wiki/Data-driven_optimization) — [Wikipedia](https://en.wikipedia.org/wiki/Data-driven_optimization)
- [Two-layer optimization system](https://en.wikipedia.org/wiki/Two-layer_optimization_system) — [Wikipedia](https://en.wikipedia.org/wiki/Two-layer_optimization_system)
- [Machine-readable scoring](https://en.wikipedia.org/wiki/Machine-readable_scoring) — [Wikipedia](https://en.wikipedia.org/wiki/Machine-readable_scoring)
- [[concepts/content-automation|Content automation]] — [Wikipedia](https://en.wikipedia.org/wiki/Content_automation)
- [[concepts/digit-patterns|Pattern recognition]] — [Wikipedia](https://en.wikipedia.org/wiki/Pattern_recognition)
- [[concepts/automated-workflow|Automated workflow]] — [Wikipedia](https://en.wikipedia.org/wiki/Automated_workflow)
- [Social media analytics](https://en.wikipedia.org/wiki/Social_media_analytics) — [Wikipedia](https://en.wikipedia.org/wiki/Social_media_analytics)
- [[concepts/automated-code-modification|Autoresearch]] framework — [Wikipedia](https://en.wikipedia.org/wiki/Autoresearch_framework)
