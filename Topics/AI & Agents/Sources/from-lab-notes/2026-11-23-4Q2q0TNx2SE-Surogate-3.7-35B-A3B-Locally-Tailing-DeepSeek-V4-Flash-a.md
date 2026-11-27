---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 5a349debfdc04a61a869
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "Surogate 3.7 35B-A3B Locally: Tailing DeepSeek V4 Flash and GLM 5.2"
date: 2026-11-23
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
credibility_tier: 1
credibility_label: "Commentary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-23-4Q2q0TNx2SE-Surogate-3.7-35B-A3B-Locally-Tailing-DeepSeek-V4-Flash-a"
---
## Surogate 3.7 35B-A3B Locally: Tailing DeepSeek V4 Flash and GLM 5.2
**Clip title:** Surogate 3.7 35B-A3B Locally: Tailing DeepSeek V4 Flash and GLM 5.2
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=4Q2q0TNx2SE
**Credibility:** Commentary (tier 1 of 5). YouTube video from Fahd Mirza: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
The video covers the following main topics:

- **Surogate3.7-35B-A3B:** An open model built on Qwen 3.5, designed for agentic work (reading files, running commands, looking at results, etc.). It features a 1M token context window, Apache 2.0 license, and is tested with the Hermes agent.
- **Armguard:** A pitch-count app for kids' baseball tournaments, used to test the model's ability to identify and fix a bug in a full-stack web application.
- **Lunar Lander:** A multi-agent task where the model must build a small moon-landing game with a physics engine, dashboard, and autopilot, splitting the work among helper agents and verifying results.
- **Surogate Engine:** The toolkit behind the model, written in C++ and CUDA, supporting fine-tuning, preference training, and reinforcement learning, with benchmarks comparing it against other models.

Key points discussed in the video include:
- The video demonstrates setting up Surogate3.7 with vLLM and testing it on Armguard, where the model successfully identifies a bug in the app's pitch count calculations and rules, making the necessary code changes and verifying the results.
- In the Lunar Lander task, the model is tested on its ability to plan, decompose tasks, spawn helper agents in parallel, and verify their work, resulting in a functioning lunar lander game.
- Benchmarks show Surogate3.7 performing competitively in agentic tasks, particularly in tool use and coding, and coming close to models like DeepSeek.

Conclusions and takeaways:
- Surogate3.7-35B-A3B proves effective in handling complex, multi-step agentic tasks, combining problem-solving with coding and debugging skills.
- The Surrogate Engine's capability to run close to hardware and support efficient training and inference makes it a strong option for running models with low precision and high throughput.

### Video Description & Links
#### Description
This video installs & tests Surogate 3.7, a model built for enterprise agentic applications.

#surogateengine #surogate37 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

0:00 Intro to Surogate 3.7
0:27 vLLM server setup
1:03 The ArmGuard bug
5:12 Bebek satay canvas test
6:03 Benchmarks
7:05 Multi-agent Lunar Lander test
8:38 Surogate Engine
10:45 Final thoughts

▶ https://huggingface.co/surogate/Surogate3.7-35B-A3B

All rights reserved © Fahd Mirza

#### URLs
- https://huggingface.co/surogate/Surogate3.7-35B-A3B
