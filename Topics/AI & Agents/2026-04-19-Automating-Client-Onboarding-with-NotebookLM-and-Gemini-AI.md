---
wiki-ingested: true
title: "Automating Client Onboarding with NotebookLM and Gemini AI"
created: "2026-04-19 04:47"
date: 2026-04-19
source: lab-summary
source_type: lab-summary
provider:
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
  - "enrich"
web-enrich: true
wiki-ready: true
domain: ai-agents
group: google-ai-ecosystem
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Automating Client Onboarding with NotebookLM and Gemini AI
**Clip title:** How to Turn NotebookLM Into an Automated Customer Onboarding App
**Author / channel:** Charles Terrence [[entities/harper|Harper]]
**URL:** https://www.youtube.com/watch?v=qic1Wgk1P6o

### Summary
This video provides a comprehensive guide on transforming an existing business "rulebook" stored in [[concepts/notebooklm|Google's NotebookLM]] into an automated client onboarding application. The main objective is to [[concepts/leverage-ai|leverage AI]], specifically [[entities/gemini-ai|Google's Gemini]] and NotebookLM, to extract pertinent onboarding questions, generate a customizable Google Form, and finally embed this form into a [[entities/google-sites|Google Sites]] webpage for seamless client interaction and data collection.

The process begins by establishing a comprehensive [[concepts/knowledge-base|knowledge base]] within NotebookLM, which includes the business's operating procedures, marketing strategies, and client interaction guidelines. The presenter then demonstrates how to use [[entities/google-gemini|Google Gemini]], attaching the NotebookLM as a source, to formulate an "engineered prompt." This prompt instructs Gemini to act as an expert marketing strategist and client onboarding specialist, tasking it with extracting ten critical questions necessary for a client onboarding questionnaire. The resulting questions cover essential aspects like sales tracking, unique selling propositions, funnel structures, and affiliate programs, each accompanied by a brief justification for its inclusion.

Following the question extraction, the video moves to the automation phase. The extracted questions are used to generate a Google Apps Script via [[concepts/gemini-canvas|Gemini Canvas]]. The user pastes a specific prompt into Gemini Canvas, instructing it to act as an expert Google Apps Script [[entities/developer|developer]] to create a new Google Form titled "Client Intake Portal" populated with the synthesized onboarding questions, formatted with multiple-choice and short-answer fields. This generated script is then copied and run within `script.google.com`, which automatically creates the functional Google Form, providing both an editable and a published URL.

The final step involves deploying this automated onboarding form to a live website. The newly created Google Form is linked to a Google Sheet to automatically capture client responses. The form's embed HTML code is then copied and used to embed the "Client Intake Portal" directly into a new or existing Google Sites webpage. This entire [[concepts/workflow|workflow]] allows businesses to efficiently generate a tailored client onboarding process, collect essential client data, and streamline their initial client engagement without requiring extensive manual setup or coding expertise, transforming their static knowledge base into a dynamic, interactive onboarding [[concepts/solution|solution]].

## Related Concepts
- [[concepts/client-onboarding|client onboarding]] — [Wikipedia](https://en.wikipedia.org/wiki/client_onboarding)
- [[concepts/automation|automation]] — [Wikipedia](https://en.wikipedia.org/wiki/automation)
- [[concepts/ai-powered-applications|AI-powered applications]] — [Wikipedia](https://en.wikipedia.org/wiki/AI-powered_applications)
- [[concepts/research-tools|Google NotebookLM]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_NotebookLM)
- [[concepts/gemini|Gemini AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_AI)
- [Rule-based systems](https://en.wikipedia.org/wiki/Rule-based_systems) — [Wikipedia](https://en.wikipedia.org/wiki/Rule-based_systems)
