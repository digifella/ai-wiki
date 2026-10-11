---
wiki-ingested: true
title: "Jev Image Decision Models for RPA: Direct Unstructured Data Decisions"
date: 2026-10-03
source_type: youtube_summary
provider: "Google"
api: "Gemini 2.5 Flash"
modes: "Summary"
type: "source-summary"
domain: tools-platforms-infrastructure
group: data-pipelines-sync-storage
aliases:
  - "lab-notes/2026-10-03-Jev-Image-Decision-Models-for-RPA-Direct-Unstructured-Da"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## Jev Image Decision Models for RPA: Direct Unstructured Data Decisions
**Clip title:** Image Decision Models for RPA: Forms, Scans and Screenshots
**[[entities/tasia-custode|Author]] / channel:** [[concepts/text-to-speech-framework|Sam Witteveen]]
**URL:** https://www.youtube.com/watch?v=L8YxigQoLaM

### Summary
This video introduces a significant advancement in process automation, focusing on the critical role of "[[concepts/decision-making|decision-making]]" within [[concepts/business-workflows|business workflows]]. Traditional [[concepts/robotic-process-automation|Robotic Process Automation]] (RPA) tools have excelled at automating repetitive "steps" (represented as rectangles in flowcharts), such as copying data or clicking [[concepts/buttons|buttons]]. However, complex "decisions" (represented as diamonds) often still require human intervention because traditional [[concepts/rule-based-bots|rule-based bots]] cannot interpret nuances in [[concepts/unstructured-data|unstructured data]] like images or complex documents. This manual bottleneck limits the scalability and efficiency of full automation.

The video highlights that current [[concepts/vanishing-gradient-problem|deep learning]] approaches for these decisions typically require custom-trained models for each specific company and business use case, demanding significant data, time, and [[concepts/computational-resources|computational resources]]. This bespoke approach has been a major hurdle, exemplified by companies like UiPath, whose initial high valuations in the RPA space suffered due to the difficulty in achieving truly full automation without robust, generalizable [[concepts/decision-making|decision-making]] capabilities. The challenge lies in the absence of a "universal classifier" that can handle the inherent [[concepts/ambiguity|ambiguity]] in [[concepts/real-world-data|real-world data]] across various [[concepts/scenarios|scenarios]].

The proposed [[concepts/solution|solution]] introduces "[[concepts/document-processing|Jev image decision models]]," which include specialized open models like ImageJev-4B and Jev-Omni. These models are designed to make "yes/no" decisions directly from images ([[concepts/pdfs|PDFs]], JPGs, scans, photos, screenshots) without an intermediate [[concepts/optical-character-recognition|Optical Character Recognition]] (OCR) step. This direct [[concepts/image-input-processing|image processing]] allows for rapid classification and decision-making on document elements, such as identifying handwritten signatures, checking if fields are filled, or classifying the type of form. The models not only provide a decision but also a [[concepts/probability|probability]] score, enabling a "[[concepts/trust|trust]] line" to be set – if the confidence is too low, the decision can be flagged for human review. Notably, ImageJev-4B was developed by one person in 15 days for a remarkably low cost, demonstrating the [[concepts/accessibility|accessibility]] and efficiency of this approach.

In conclusion, Jev image decision models represent a powerful leap forward in automating the often-manual "diamond" decisions in business processes. By directly interpreting visual information without relying on OCR or extensive custom training for every use case, these models offer a scalable, efficient, and cost-effective way to extend automation to more complex image-based workflows. This [[concepts/innovation|innovation]] has the potential to unlock new levels of automation in areas like claims processing, HR intake, and contract validation, ultimately reducing [[concepts/operational-costs|operational costs]] and improving overall business efficiency by bridging the gap that previously tethered bots to human oversight.

### Video Description & Links
#### Description
In this video, we return to looking at decision models, but this time for images, with the use case being RPA. 

🤗 HF: https://huggingface.co/mohit67890/imajev-4b
🤗 HF: https://huggingface.co/akhilaaa3/Jev-Omni

🕵️ Interested in building [[concepts/llm-based-agents|LLM Agents]]? Fill out the form below

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️[[concepts/timestamps|Time Stamps]]:
00:00 Intro
00:17 RPA Automates Steps, Not Decisions
00:39 Why Custom [[concepts/deep-learning-models|Deep Learning Models]] Fell Short
00:59 The Form Inspector & Two Open Models
01:38 Why Focus on Images
01:56 The Problem: Checking Screenshots, Photos & Forms
02:42 RPA Story
03:24 What Went Wrong With RPA
05:05 ImageBench Leaderboard
05:24 The Story Behind ImaJev
07:29 Smart If Statements & Confidence Scores
08:01 Demo: Form Decision Inspector
09:11 Running ImaJev 4B vs Jev Omni
10:53 Choice vs True/False Questions
11:57 Follow-Up Emails With Conditional [[concepts/open-source-philosophy|Logic]]
12:41 Adding New Questions
13:21 Testing a Second Form
14:35 Confidence Thresholds Per Question

#### Tags
`ImaJev`, `ImaJev 4B`, `Jev`, `Jev Omni`, `OpenJev`, `Open Jev Models`, `Jev Decision Model`, `TypeSafe Jev`, `TypeSafe AI`, `Image JevBench`, `ImageBench`, `NeoHorse`, `Decision Models`, `Image Classification`, `Vision Language Model`, `RPA`, `Robotic Process Automation`, `UiPath`, `Document AI`, `Form Processing`, `PDF Automation`, `Signature Detection`, `Business Process Automation`, `Human in the Loop`, `Confidence Score`, `Open Source AI`, `Local AI`, `LoRA Fine Tuning`, `AI Automation`

#### URLs
- https://huggingface.co/mohit67890/imajev-4b
- https://huggingface.co/akhilaaa3/Jev-Omni
- https://github.com/samwit/llm-tutorials

## Related Concepts
- [[concepts/robotic-process-automation|Robotic Process Automation]] — [Wikipedia](https://en.wikipedia.org/wiki/Robotic_process_automation)
- [[concepts/unstructured-data|Unstructured Data]] — [Wikipedia](https://en.wikipedia.org/wiki/Unstructured_data)
- [[concepts/workflow-automation|Image Decision Models]]
- [[concepts/document-processing|Document Processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Document_processing)
- [[concepts/screenshot-analysis|Screenshot Analysis]]
- [[concepts/rule-based-bots|Rule-based Bots]]
- [[concepts/workflow-automation|Workflow Automation]] — [Wikipedia](https://en.wikipedia.org/wiki/Workflow)
- [[concepts/workflow-transformation|Human-in-the-Loop]] — [Wikipedia](https://en.wikipedia.org/wiki/Human-in-the-loop)
- [[concepts/text-classification|Document Classification]] — [Wikipedia](https://en.wikipedia.org/wiki/Document_classification)
- [[concepts/weathernext-3|Deep Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Deep_learning)
- [[concepts/workflow-construction|Process Automation]] — [Wikipedia](https://en.wikipedia.org/wiki/Business_process_automation)
- [[concepts/technical-efficiency|Operational Efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/Operational_efficiency)

## Related Entities
- [[entities/sam-witteveen|Sam Witteveen]]
- [[entities/jev|Jev]]
- UiPath — [Wikipedia](https://en.wikipedia.org/wiki/UiPath)
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)