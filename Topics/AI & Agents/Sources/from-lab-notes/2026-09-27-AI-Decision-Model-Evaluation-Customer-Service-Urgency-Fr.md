---
wiki-ingested: true
title: "AI Decision Model Evaluation: Customer Service Urgency & Frustration Assessment"
date: 2026-09-27
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: training-fine-tuning-evaluation
type: "source-summary"
aliases:
  - "lab-notes/2026-09-27-AI-Decision-Model-Evaluation-Customer-Service-Urgency-Fr"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## AI Decision Model Evaluation: Customer Service Urgency & Frustration Assessment
**Clip title:** [[concepts/decision-model|Decision Model]] Showdown: CLM vs Laya vs OpenJev vs Kev vs Jev
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=UF0z3afz9V8

### Summary
This video, "[[concepts/decision-model|Decision Model]] Showdown 2026," introduces and compares five [[concepts/ai-decision-models|AI decision models]]: CLM, [[entities/laya|Laya]], [[entities/openjev|OpenJev]], Kev, and Jev. The presenter highlights these models as a new category of AI capable of making fast, calibrated, and trustworthy decisions suitable for [[concepts/production-environments|production environments]], contrasting them with generative [[concepts/weathernext-3|AI models]]. The primary objective is to evaluate their performance, confidence, and speed when tasked with a common customer service scenario: an angry customer who was double-charged and couldn't reach support. The models were asked to determine the urgency, appropriate department, and customer's frustration level.

In the initial test, all five models correctly identified the "billing" department as the appropriate contact point. However, significant differences emerged in their confidence levels, perceived urgency, [[concepts/frustration-assessment|frustration assessment]], and processing latency. Jev 1.13 and CLM-8B demonstrated the highest confidence in their departmental routing (100% and 97.9% respectively) and accurately assessed the customer as "Very Angry." CLM-8B also stood out with the fastest [[concepts/local-processing|local processing]] time at 24 milliseconds. Kev-4B showed strong calibration but only identified the customer as "Frustrated," while Laya, despite good directional accuracy, also underestimated the anger and exhibited lower confidence. OpenJev, the smallest model at 421 million parameters, had the lowest confidence in its billing assessment (54.7%), making it akin to a coin flip, and was the only one that didn't use optimized kernels.

The video then presents a "hard test" involving a social engineering scenario: an employee demanding immediate, unverified production database access due to an urgent, high-cost bug. This test aimed to assess the models' ability to detect manipulation and respond securely. In this critical test, CLM-8B and Jev 1.13 were the only models that correctly identified the situation as a social engineering attempt, flagged it as a critical risk, and recommended escalation to a security team. Conversely, Kev, Laya, and OpenJev all failed, recommending "grant access" with high confidence, demonstrating a severe security vulnerability.

The overarching conclusion is that while decision models are powerful tools for automating business processes and making rapid decisions, they are not all equally capable or trustworthy across different use cases. A model that excels in a straightforward task like customer support ticket routing might catastrophically fail in a security-sensitive context. Therefore, it is paramount to rigorously test AI decision models against specific, real-world production scenarios before relying on them, especially in environments where security and accuracy are non-negotiable.

### Video Description & Links
#### Description
Five AI decision models, one angry customer, one security trap — only two passed.

#clm #laya #openjev #kev #jev 

00:00 Intro
00:55 First Test
05:10 Showdown Table
06:35 Second Test
07:50 Verdict

▶ https://fahdmirza.substack.com

All rights reserved © Fahd Mirza

#### URLs
- https://fahdmirza.substack.com

## Related Concepts
- [[concepts/ai-decision-models|AI decision models]]
- [[concepts/customer-service-urgency|customer service urgency]]
- [[concepts/frustration-assessment|frustration assessment]]
- [[concepts/video-editing|generative AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Generative_AI)
- [[concepts/production-environments|production environments]]
- [[concepts/calibrated-decisions|calibrated decisions]]
- security vulnerability — [Wikipedia](https://en.wikipedia.org/wiki/Vulnerability_%28computer_security%29)
- generative AI [[concepts/contrast|contrast]]
- [[concepts/model-benchmarking|model benchmarking]]
- [[concepts/local-processing|local processing]]
- [[concepts/ai-interpretability|trustworthy AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Trustworthy_AI)

## Related Entities
- [[entities/fahd-mirza|Fahd Mirza]]
- [[entities/clm|CLM]]
- [[entities/laya|Laya]]
- [[entities/openjev|OpenJev]]
- [[entities/kev|Kev]]
- [[entities/jev|Jev]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- YouTube — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)
- LinkedIn — [Wikipedia](https://en.wikipedia.org/wiki/LinkedIn)