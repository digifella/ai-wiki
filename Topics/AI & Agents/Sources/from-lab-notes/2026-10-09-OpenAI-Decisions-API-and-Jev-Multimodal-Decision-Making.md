---
wiki-ingested: true
title: "OpenAI Decisions API and Jev: Multimodal Decision-Making and Cost Comparison"
date: 2026-10-09
source_type: youtube_summary
provider: "Google"
api: "Gemini 2.5 Flash"
modes: "Summary"
type: "source-summary"
domain: ai-agents
group: openai-chatgpt
aliases:
  - "lab-notes/2026-10-09-OpenAI-Decisions-API-and-Jev-Multimodal-Decision-Making"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## OpenAI Decisions API and Jev: Multimodal Decision-Making and Cost Comparison
**Clip title:** [[concepts/whisper-transcription|OpenAI]]'s Decisions API just dropped. Here's how it compares to Jev.
**[[entities/tasia-custode|Author]] / channel:** Mark Kashef
**URL:** https://www.youtube.com/watch?v=uTU5Ihgl_7Q

### Summary
This video introduces [[concepts/whisper-transcription|OpenAI]]'s new [[concepts/decisions-api|Decisions API]], a service designed to evaluate text and images to generate structured decisions for applications. The presenter, [[entities/mark-kashef|Mark Kashef]], details how the Decisions API works and then conducts a [[concepts/head-to-head-comparison|head-to-head comparison]] with Jev, a prominent [[concepts/open-source|open-source]] alternative, evaluating them on criteria such as cost, [[concepts/speed|speed]], and performance across various practical [[concepts/scenarios|scenarios]].

The Decisions API functions by taking either text or an image, allowing users to pose a question about the provided "evidence." It then returns an [[concepts/solution|answer]] that an application can readily use. The API supports three main types of questions: true/false (which OpenAI calls a "predicate," similar to Jev's "Noul"), multiple-choice, and "how much" questions where it selects an appropriate level based on a rubric. Crucially, the Decisions API, powered by models like [[entities/gpt-6|GPT-6]] [[entities/luna|Luna]], provides a [[concepts/confidence-score|confidence score]] ([[concepts/probability|probability]]) for each [[concepts/solution|answer]], indicating the likelihood of its [[concepts/accuracy|correctness]].

In a direct comparison, several key differences and similarities between the Decisions API and Jev emerge. The most significant differentiator is that OpenAI's Decisions API is multimodal, capable of processing both text and images as evidence, whereas Jev is currently limited to text. Both services offer similar answer types (yes/no, choice, score) and can handle multiple questions per request. However, a major divergence lies in cost: Jev is significantly cheaper at $0.042 per million input [[concepts/tokens|tokens]] compared to the Decisions API's $0.10, making Jev approximately 58% more cost-effective. Another notable difference is that the Decisions API can refuse to answer certain questions, particularly in [[concepts/llm-vision-capabilities|image understanding]] tasks, to avoid potential abuse, while Jev consistently provides an answer within the predefined choices.

Practical demonstrations revealed nuanced performance characteristics. For image inspection tasks, the Decisions API efficiently identified visible damage, no damage, or indicated an inability to assess the image, demonstrating its unique multimodal capability. In text-based [[concepts/scenarios|scenarios]] like website outage investigations and business report [[concepts/verification|verification]], both services achieved 100% accuracy in the tested claims. The Decisions API generally showed slightly faster average [[concepts/api-call|API call]] times (e.g., 146ms vs 155ms for report [[concepts/verification|verification]]), but Jev often had faster median investigation times and was consistently cheaper.

In conclusion, the choice between OpenAI's Decisions API and Jev depends on specific application needs. If [[concepts/multimodal-input|multimodal input]], particularly [[concepts/image-analysis|image analysis]], is a requirement, or if slightly faster average response times for individual calls are paramount, the Decisions API is the clear winner. However, for applications that primarily deal with text-based evidence and prioritize [[concepts/cost-efficient-solutions|cost-efficiency]], especially at scale, Jev presents a compelling and significantly cheaper alternative with comparable accuracy and competitive performance. The [[concepts/ai-landscape|AI landscape]] for [[concepts/decision-making|decision-making]] continues to evolve rapidly, and these services offer robust tools for developers looking to integrate intelligent classification into their products.

### Video Description & Links
#### Description
Work With Us: https://www.promptadvisers.com/

OpenAI just released the Decisions API, their take on what Jev does. You give it some text or an image, ask it a question, and it sends back an answer your app can use. I walk through how it works, what goes into a request, and how it compares to Jev on capability, cost and speed.

Then I put both through three hands-on demos. First, an image inspection that only the Decisions API can run, since Jev takes text only. Then a website outage investigation and a business report check, where both get the same question, the same evidence and the same choices. You'll see the response times, the actual request costs and where each one comes out ahead.

The short version. If you want cheaper, Jev. If you want multimodal and faster, the Decisions API.

CHAPTERS
00:00 OpenAI's Decisions API vs Jev
00:31 What the Decisions API does
00:43 Three ways to ask a question
01:04 The fastest way to try it
01:19 Probabilities, predicates and Noul
01:35 How a request flows
02:03 A product return example
02:55 Decisions API vs Jev side by side
03:44 Cost per million input tokens
04:03 Refusals
04:22 Demo 1, image inspection
05:21 Demo 2, website outage investigation
07:19 Demo 3, report verification
08:10 Results on speed and cost
08:59 Which one should you choose
09:12 Final thoughts

A practical comparison of OpenAI's Decisions API and Jev by TypeSafe, covering predicate, choice and score questions, GPT-6 Luna, [[concepts/pricing|pricing]] per million input tokens, response times, image input and when to use each AI decision API.

#OpenAI #DecisionsAPI #Jev

#### Tags
`openai decisions api`, `decisions api`, `jev`, `typesafe ai`, `typesafe jev`, `jev vs openai`, `openai decisions api vs jev`, `gpt-6 luna`, `openai api tutorial`, `ai decision api`, `ai classifier api`, `structured outputs`, `typed ai answers`, `predicate choice score`, `noul`, `jev alternatives`, `jevbench`, `decision index`, `ai api pricing`, `cost per million tokens`, `api latency comparison`, `multimodal classifier`, `image classification api`, `ai for developers`, `openai new api`, `ai automation`, `decision models`

#### URLs
- https://www.promptadvisers.com/

## Related Concepts
- [[concepts/decisions-api|Decisions API]]
- [[concepts/multimodal-decision-making|multimodal decision-making]]
- [[concepts/structured-output|structured output]]
- [[concepts/structured-output|cost comparison]]
- [[concepts/performance-evaluation|performance evaluation]] — [Wikipedia](https://en.wikipedia.org/wiki/Performance_appraisal)
- [[concepts/confidence-score|confidence score]]
- [[concepts/cost-efficiency|cost-efficiency]]
- [[entities/gpt-6|GPT-6]] [[entities/luna|Luna]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-6)
- abuse [[concepts/preventive-care|prevention]] — [Wikipedia](https://en.wikipedia.org/wiki/Abuse_prevention_program)

## Related Entities
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- [[entities/jev|Jev]]
- [[entities/mark-kashef|Mark Kashef]]
- GPT-6 Luna — [Wikipedia](https://en.wikipedia.org/wiki/GPT-6)
- Noul — [Wikipedia](https://en.wikipedia.org/wiki/List_of_storms_named_Noul)