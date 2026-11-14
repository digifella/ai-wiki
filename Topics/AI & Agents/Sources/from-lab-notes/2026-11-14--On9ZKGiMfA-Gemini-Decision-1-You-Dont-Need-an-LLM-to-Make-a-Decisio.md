---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 5927d024cc778ffec519
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "Gemini Decision 1: You Don’t Need an LLM to Make a Decision"
date: 2026-11-14
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
credibility_tier: 1
credibility_label: "Commentary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-14--On9ZKGiMfA-Gemini-Decision-1-You-Dont-Need-an-LLM-to-Make-a-Decisio"
---
## Gemini Decision 1: You Don’t Need an LLM to Make a Decision
**Clip title:** Gemini Decision 1: You Don’t Need an LLM to Make a Decision
**Author / channel:** Prompt Engineering
**URL:** https://www.youtube.com/watch?v=-On9ZKGiMfA
**Credibility:** Commentary (tier 1 of 5). YouTube video from Prompt Engineering: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
The video introduces the **Gemini Decisions API** and explains how "decision models"—a specific class of classification models—work. Unlike traditional large language models (LLMs) that generate text token-by-token, decision models evaluate options in a single forward pass without generating text output tokens. They take inputs (text, images, audio, video, or PDFs) and answer up to 1,000 independent questions (such as yes/no, multiple-choice, or scoring) in a single API call, returning probabilities and confidence scores.

The video covers practical use cases for decision models, such as browser agents, claims auditors, and voice agents. Key benefits include speed, zero output token costs, and high cost-efficiency compared to standard LLMs. For instance, running 1,000 questions on a single input costs a fraction of a cent. The speaker contrasts decision models with LLMs, noting that decision models act like "smart if statements," making them ideal for high-frequency, structured tasks with a fixed set of answers.

The speaker highlights common mistakes when using decision models—such as failing to provide a "way out" option (like "other"), sending irrelevant contextual information, and asking overly broad questions—and outlines best practices for effective implementation. The video concludes with four core rules for using decision models: giving every choice a way out, sending only necessary information, asking narrow and specific questions, and testing with real data.

### Video Description & Links
#### Description
Gemini Decision 1 is Google's new decision model: it answers yes/no, multiple-choice and score questions about text, images, audio, PDFs and video, and returns a probability and a confidence score instead of generating text. In this video I show how the Gemini Decisions API works, how to call it in Python with every input type, where a decision model makes more sense than an LLM, and four mistakes I made while building three apps with it.

🔗 Code (quickstart, notebook and the three apps): https://github.com/PromtEngineer/gemini-decisions-codelab

Sources:
Google's announcement: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/
Decisions API docs: https://aistudio.google.com/docs/decisions-api
Gemini Decision 1 model page: https://aistudio.google.com/docs/models/gemini-decision-1

Related videos:
Needle 3: You Don't Need an LLM for Function Calling: https://youtu.be/qbN559fQn7k
Build RAG with JEV: https://youtu.be/UhGH8cNG0qs

Chapters:
00:00 What Gemini Decision 1 Does
01:43 How Decision Models Differ From LLMs
03:11 Yes/No, Choice and Score Questions
04:36 Best Use Cases for Decision Models
06:14 Cost: Decision Model vs Gemini Flash
07:23 Build With the Gemini Decisions API
09:10 Image, Audio, PDF and Video Inputs
10:59 Add an Other Option to Choice Questions
12:15 Send Only What the Question Needs
14:10 Ask Small Questions in a Browser Agent
16:02 Build a Voice Agent With Audio Input

#Gemini #DecisionModels #aiagents 

Disclosure: I work at Google. This video is based on public information, the code is a personal, unofficial project, and the views are my own.

#### Tags
`gemini decision 1`, `gemini decisions api`, `google decision model`, `decision model`, `gemini api tutorial`, `gemini api python`, `llm classification`, `text classification`, `image classification`, `ai classifier`, `structured decisions`, `ai agents`, `browser agent`, `voice agent`, `google ai studio`

#### URLs
- https://github.com/PromtEngineer/gemini-decisions-codelab
- https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/
- https://aistudio.google.com/docs/decisions-api
- https://aistudio.google.com/docs/models/gemini-decision-1
- https://youtu.be/qbN559fQn7k
- https://youtu.be/UhGH8cNG0qs
