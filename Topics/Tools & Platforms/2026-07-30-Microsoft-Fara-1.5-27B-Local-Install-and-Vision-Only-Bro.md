---
wiki-ingested: true
title: "Microsoft Fara 1.5-27B: Local Install and Vision-Only Browser Automation Performance"
date: 2026-07-30
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: automation-scheduling-sync
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

Generated: 2026-07-30 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Microsoft Fara 1.5-27B: Local Install and Vision-Only Browser Automation Performance
**Clip title:** Microsoft Fara1.5 27B: Local Install + Real [[concepts/web-navigation|Browser Automation]] Demo
**[[entities/tasia-custode|Author]] / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=hGZjBW-yXeQ

### Summary
This video introduces [[entities/microsoft|Microsoft]]'s [[entities/fara-15-27b|Fara 1.5-27B]], a significantly improved multimodal [[concepts/computer-use|Computer Use]] Agent (CUA) designed for web browsers, building upon the initial Fara 7B model released eight months prior. Available also in 4B and 9B parameter variants, the 27B model is fine-tuned on [[concepts/qwen3-model|Qwen3]].5 and boasts a substantial 262K [[concepts/context-window|context window]]. Its core [[concepts/innovation|innovation]] lies in its vision-only approach to web interaction: it observes the browser through screenshots and directly acts on the user's behalf by emitting structured tool calls like clicking, typing, scrolling, and visiting URLs based on predicted pixel coordinates, completely bypassing traditional DOM or [[concepts/accessibility|accessibility]] trees.

The video highlights Fara 1.5's impressive performance compared to other web agents, including both [[concepts/open-source|open-source]] and proprietary models. [[concepts/benchmark-testing|Benchmarking]] on tasks like Online-Mind2Web and WebVoyager, Fara 1.5 consistently outshines competitors such as MolmoWeb, GUI-Owl 1.5, and Holo2 within its size class (around 8-9 billion parameters). Furthermore, the 27B version of Fara 1.5 achieved a 72.3% [[concepts/success|success]] rate on Online-Mind2Web, surpassing proprietary models like [[concepts/google-search|Google]]'s [[concepts/gemini-25-models|Gemini 2.5]] CU, Operator, and Navigator, demonstrating clean [[concepts/computational-scaling|scaling]] where larger models generally mean better performance. For production environments, the 27B model is highly recommended due to its superior capabilities.

Fara 1.5 operates on an "Observe-Think-Act" [[concepts/loop|loop]]. In each step, it observes the three most recent screenshots and the [[concepts/conversation-history|conversation history]], then reasons about the next action, and finally executes a single atomic action (e.g., clicking, typing, searching, or managing context by memorizing [[concepts/factual-knowledge|facts]] or asking [[concepts/clarifying-questions|clarifying questions]]). The browser [[concepts/software-updates|updates]], and the [[concepts/loop|loop]] repeats. Its training setup, leveraging supervised [[concepts/fine-tuning|fine-tuning]] (SFT) with an input and loss mask, allows it to learn long-horizon behaviors efficiently by only applying loss to the last three turns and dropping older screenshots from context.

The practical demonstrations showcased Fara 1.5's ability to perform various tasks end-to-end. This included looking up the number of pages on Wikipedia, navigating [[entities/youtube|YouTube]] to find the most popular video on a specific channel, and checking live traffic conditions and incidents on the M4 motorway in Sydney via a traffic website. Each task's execution was fully auditable, with logs and screenshots saved for review, demonstrating its [[concepts/robustness|robustness]] and the ability to embed it into custom applications via a Flask API for real-[[entities/earth|world]] [[concepts/scenarios|use cases]]. The conclusion is that Fara 1.5 is a highly capable and groundbreaking [[concepts/open-weight|open-weight]] web agent, setting a new standard for automated web interaction.

### Video Description & Links
#### Description
This video installs and tests Fara1.5-27B, a multimodal computer use agent (CUA) for web browsers, from [[concepts/2026-04-30-microsoft|Microsoft Research]] AI Frontiers.

🔥 Get 50% Discount on any A6000 or A5000 GPU rental, use following link and coupon:

https://bit.ly/fahd-mirza
Coupon code: FahdMirza

🔥 Buy Me a Coffee to support the channel: https://ko-fi.com/fahdmirza

#microsoftai #microsoftfara #fara15 #fara9b #fara4b #fara27b 

PLEASE FOLLOW ME: 
▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  
▶ Blog: https://www.fahdmirza.com

RESOURCES:

▶ https://huggingface.co/microsoft/Fara1.5-27B

All rights reserved © Fahd Mirza

#### URLs
- https://bit.ly/fahd-mirza
- https://ko-fi.com/fahdmirza
- https://www.fahdmirza.com
- https://huggingface.co/microsoft/Fara1.5-27B

## Related Concepts
- [[concepts/computer-use-agent|Computer Use Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Computer_Use_Agent)
- [[concepts/multimodal-ai|Multimodal AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Multimodal_AI)
- [[concepts/browser-automation|Browser Automation]] — [Wikipedia](https://en.wikipedia.org/wiki/Browser_Automation)
- [[concepts/vision-only-processing|Vision-Only Processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Vision-Only_Processing)
- [[concepts/context-window|Context Window]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Window)
- [[concepts/local-installation|Local Installation]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Installation)
- [[concepts/supervised-fine-tuning|Supervised Fine-Tuning]] — [Wikipedia](https://en.wikipedia.org/wiki/Supervised_Fine-Tuning)
- Tool Calls — [Wikipedia](https://en.wikipedia.org/wiki/Tool_Calls)
- Pixel Coordinates — [Wikipedia](https://en.wikipedia.org/wiki/Pixel_Coordinates)
- Observe-Think-Act Loop — [Wikipedia](https://en.wikipedia.org/wiki/Observe-Think-Act_Loop)
- Web Agents — [Wikipedia](https://en.wikipedia.org/wiki/Web_Agents)
- [[concepts/open-weight-models|Open-Weight Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-Weight_Models)
- Flask API — [Wikipedia](https://en.wikipedia.org/wiki/Flask_API)
- Online-Mind2Web — [Wikipedia](https://en.wikipedia.org/wiki/Online-Mind2Web)
- WebVoyager — [Wikipedia](https://en.wikipedia.org/wiki/WebVoyager)
- [[concepts/scaling-laws|Scaling Laws]] — [Wikipedia](https://en.wikipedia.org/wiki/Scaling_Laws)

## Related Entities
- [[entities/fara-15-27b|Fara 1.5-27B]] — [Wikipedia](https://en.wikipedia.org/wiki/Fara_1.5-27B)
- [[entities/qwen35|Qwen3.5]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen3.5)
- [[entities/fahd-mirza|Fahd Mirza]] — [Wikipedia](https://en.wikipedia.org/wiki/Fahd_Mirza)
- [[entities/microsoft|Microsoft]] — [Wikipedia](https://en.wikipedia.org/wiki/Microsoft)
- Fara 1.5 — [Wikipedia](https://en.wikipedia.org/wiki/Fara_1.5)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- Gemini 2.5 CU — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_CU)
- MolmoWeb — [Wikipedia](https://en.wikipedia.org/wiki/MolmoWeb)
- GUI-Owl 1.5 — [Wikipedia](https://en.wikipedia.org/wiki/GUI-Owl_1.5)
- Holo2 — [Wikipedia](https://en.wikipedia.org/wiki/Holo2)
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)