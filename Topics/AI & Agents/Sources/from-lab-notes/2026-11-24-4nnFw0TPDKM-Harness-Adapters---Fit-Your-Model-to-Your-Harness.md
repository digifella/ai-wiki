---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 95d3d3c7cc12d9997475
suggested-topic: "Undecided"
domain: "ai-agents"
title: "Harness Adapters - Fit Your Model to Your  Harness"
date: 2026-11-24
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
credibility_tier: 1
credibility_label: "Commentary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-24-4nnFw0TPDKM-Harness-Adapters---Fit-Your-Model-to-Your-Harness"
---
## Harness Adapters - Fit Your Model to Your  Harness
**Clip title:** Harness Adapters - Fit Your Model to Your  Harness
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=4nnFw0TPDKM
**Credibility:** Commentary (tier 1 of 5). YouTube video from Sam Witteveen: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
The video discusses how frontier AI labs train and ship models alongside their corresponding harnesses (tools, prompts, and context), and explores a new project from Hugging Face that applies this approach to open-weights models. Traditionally, closed labs like Anthropic and OpenAI tightly integrate models and harnesses together, creating performance disparities when open models are used with different harnesses. Hugging Face's research demonstrates that wrapping a frozen base model with a small LoRA adapter trained via reinforcement learning specifically inside a target harness significantly improves performance—such as increasing Qwen3.8-27B's score on SWE-bench Pro tasks from 40% to 64.7%—while using fewer tokens and tool calls.

The video highlights the training methodology developed by Hugging Face, which utilizes the Harbor framework, an asynchronous GRPO trainer in TRL, and an OpenEnv sandbox to train adapters directly inside actual harnesses like Pi, Hermes Agent, and OpenCode. This process avoids the need to re-implement agent loops and captures exact token traces to reward the model for correctness and tool efficiency. Furthermore, the video covers advanced techniques like merging multiple specialized adapters into a single "super-adapter" and transferring adapters across different harnesses, showing that open-weights models can achieve performance comparable to closed-lab solutions when properly tuned to their specific environments.

### Video Description & Links
#### Description
In this video I look at a recent research project from HuggingFace to train a set of LoRA adapters for the Qwen3.8-27B to make the model better for using with open coding harnesses.

Blog post: https://huggingface.co/blog/harness-adapters-at-scale
Harness Hub: https://huggingface.co/harness-hub
Super-adapter : https://huggingface.co/harness-hub/Qwen3.8-27B-super-adapter
Pi: https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted
Hermes Agent: https://huggingface.co/harness-hub/Qwen3.8-27B-hermes-adapted
OpenCode: https://huggingface.co/harness-hub/Qwen3.8-27B-opencode-adapted

🕵️ Interested in building LLM Agents? Fill out the form below

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
00:00 Intro
01:19 Hugging Face’s harness adapters
02:44 Why fit a model to a harness?
03:58 Higher score, half the tokens
07:38 What is a harness adapter?
08:50 Training inside the real harness
11:02 Reward and compute
11:35 The super-adapter
13:39 The Pi adapter under OpenCode
14:52 Caveats
15:09 Wrap-up

#### Tags
`harness adapters`, `hugging face harness adapters`, `Qwen3.8-27B`, `qwen 3.8 27b`, `qwen3.8 27b pi adapter`, `harness adapter`, `agent harness`, `coding agent`, `pi coding agent`, `oh-my-pi`, `opencode`, `hermes agent`, `lora adapter`, `lora fine tuning`, `reinforcement learning`, `GRPO`, `TRL`, `vLLM`, `SWE-bench Pro`, `Terminal-Bench`, `open models`, `local AI`, `local coding agent`, `model harness`, `fewer tokens`

#### URLs
- https://huggingface.co/blog/harness-adapters-at-scale
- https://huggingface.co/harness-hub
- https://huggingface.co/harness-hub/Qwen3.8-27B-super-adapter
- https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted
- https://huggingface.co/harness-hub/Qwen3.8-27B-hermes-adapted
- https://huggingface.co/harness-hub/Qwen3.8-27B-opencode-adapted
- https://github.com/samwit/llm-tutorials
