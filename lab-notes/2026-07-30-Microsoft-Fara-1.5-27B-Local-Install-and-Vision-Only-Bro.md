---
title: "Microsoft Fara 1.5-27B: Local Install and Vision-Only Browser Automation Performance"
date: 2026-07-30
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Microsoft Fara 1.5-27B: Local Install and Vision-Only Browser Automation Performance
Generated: 2026-07-30 · API: Gemini 2.5 Flash · Modes: Summary

---

## Microsoft Fara 1.5-27B: Local Install and Vision-Only Browser Automation Performance
**Clip title:** Microsoft Fara1.5 27B: Local Install + Real Browser Automation Demo
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=hGZjBW-yXeQ

### Summary
This video introduces Microsoft's Fara 1.5-27B, a significantly improved multimodal Computer Use Agent (CUA) designed for web browsers, building upon the initial Fara 7B model released eight months prior. Available also in 4B and 9B parameter variants, the 27B model is fine-tuned on Qwen3.5 and boasts a substantial 262K context window. Its core innovation lies in its vision-only approach to web interaction: it observes the browser through screenshots and directly acts on the user's behalf by emitting structured tool calls like clicking, typing, scrolling, and visiting URLs based on predicted pixel coordinates, completely bypassing traditional DOM or accessibility trees.

The video highlights Fara 1.5's impressive performance compared to other web agents, including both open-source and proprietary models. Benchmarking on tasks like Online-Mind2Web and WebVoyager, Fara 1.5 consistently outshines competitors such as MolmoWeb, GUI-Owl 1.5, and Holo2 within its size class (around 8-9 billion parameters). Furthermore, the 27B version of Fara 1.5 achieved a 72.3% success rate on Online-Mind2Web, surpassing proprietary models like Google's Gemini 2.5 CU, Operator, and Navigator, demonstrating clean scaling where larger models generally mean better performance. For production environments, the 27B model is highly recommended due to its superior capabilities.

Fara 1.5 operates on an "Observe-Think-Act" loop. In each step, it observes the three most recent screenshots and the conversation history, then reasons about the next action, and finally executes a single atomic action (e.g., clicking, typing, searching, or managing context by memorizing facts or asking clarifying questions). The browser updates, and the loop repeats. Its training setup, leveraging supervised fine-tuning (SFT) with an input and loss mask, allows it to learn long-horizon behaviors efficiently by only applying loss to the last three turns and dropping older screenshots from context.

The practical demonstrations showcased Fara 1.5's ability to perform various tasks end-to-end. This included looking up the number of pages on Wikipedia, navigating YouTube to find the most popular video on a specific channel, and checking live traffic conditions and incidents on the M4 motorway in Sydney via a traffic website. Each task's execution was fully auditable, with logs and screenshots saved for review, demonstrating its robustness and the ability to embed it into custom applications via a Flask API for real-world use cases. The conclusion is that Fara 1.5 is a highly capable and groundbreaking open-weight web agent, setting a new standard for automated web interaction.

### Video Description & Links
#### Description
This video installs and tests Fara1.5-27B, a multimodal computer use agent (CUA) for web browsers, from Microsoft Research AI Frontiers.

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
