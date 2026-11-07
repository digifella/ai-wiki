---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 754fac536c8b1da6ec5f
suggested-topic: "Tools, Platforms & Infrastructure"
domain: "ai-agents"
title: "NVIDIA Nemotron-3.5 Bolt-74B-A9B Locally: It's Not Over"
date: 2026-10-17
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-17-B4HQ-c8i3NM-NVIDIA-Nemotron-3.5-Bolt-74B-A9B-Locally-Its-Not-Over"
---
## NVIDIA Nemotron-3.5 Bolt-74B-A9B Locally: It's Not Over
**Clip title:** NVIDIA Nemotron-3.5 Bolt-74B-A9B Locally: It's Not Over
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=B4HQ-c8i3NM

### Summary
Here is a summary of the video:

**Main Topic:** 
The video tests NVIDIA's new vision-language model, Nemotron-3.5-Bolt (74B parameters with 9B active per token), running locally via llama.cpp. The speaker puts the model through various tasks—including bug fixing in a full-stack horse breeding dashboard, generating a rotating döner kebab animation in HTML, translating a Turkish news headline into dozens of languages, and solving an electronic circuit analysis problem—to evaluate its reasoning and vision capabilities.

**Key Points:**
- **Bug Fixing Test:** The model is tasked with fixing a bug in a full-stack application (Studbook Manager) where a mare's due date was incorrectly flagged as overdue. The model fails to spot the bug, instead recalculating with 330 gestation days instead of the actual average of 340, and alters other unrelated code.
- **HTML Animation Generation:** The model is asked to generate a self-contained HTML file of a rotating döner kebab using plain canvas code. The initial generation fails, so the speaker provides a screenshot of the blank canvas. Upon a second try, the model attempts to fix the code, but the output remains blank.
- **Multilingual Translation:** The model is given a screenshot of a Turkish news headline and asked to translate it into over 80 languages. While it successfully handles major languages, it begins hallucinating and repeating characters indefinitely when translating into less common languages.
- **Circuit Analysis:** The speaker presents a hand-drawn circuit diagram with intentional labeling errors and a 0V multimeter reading. The model successfully traces the actual circuit wiring rather than blindly trusting the labels and correctly answers all seven technical calculation and troubleshooting questions.

**Conclusions and Takeaways:**
According to the speaker, the Nemotron-3.5-Bolt model shows impressive reasoning and step-by-step image-reading capabilities, particularly excelling in structured tasks like circuit analysis. However, it struggles significantly with open-ended, creative coding and multi-language translation at scale. The speaker concludes that while the model has strengths in specific analytical domains, it is not yet fully reliable for autonomous production-grade coding or complex multi-lingual tasks.

### Video Description & Links
#### Description
This video locally installs and tests NVIDIA Nemotron 3.5 Bolt 74B-A9B 24GB, a VLM designed to run everyday agentic tasks locally.

#nemotron #nemotronbolt 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

0:00 StudBook Manager and the planted bug
2:03 Model Intro
3:40 Bug fix result
4:58 Döner kebab skewer test
6:08 Vision self-fix attempt
7:10 Mind game test with image
8:50 Headline translation in 80 languages
10:35 Circuit reasoning test
11:30 Final verdict

▶ https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB-GGUF

All rights reserved © Fahd Mirza

#### URLs
- https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB-GGUF
