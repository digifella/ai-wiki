---
wiki-ingested: true
title: "Various AI tools - Jeff Su"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: tools-platforms
group: developer-tooling-clis
---
# Various [[concepts/ai-tools|AI tools]] - [[entities/jeff-su|Jeff Su]]

---
---
<https://www.youtube.com/watch?v=htZRCE2GgIs>
Here is a [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the video content, organized by category and tool.

# The Only AI Tools You Need (Part 1)

_Based on the video by Jeff Su_
Jeff breaks down the AI tools he uses for 90% of his work into specific categories. This summary covers **[[concepts/everyday-ai|Everyday AI]]** and **[[concepts/specialist-ai|Specialist AI]]**.

* * *

## 1\. Everyday AI ([[concepts/general-purpose-chatbots|General Purpose Chatbots]])

These are the [[concepts/foundational-models|foundational models]]. While they seem interchangeable, each has a distinct "Superpower."

### 🤖 [[entities/chatgpt|ChatGPT]] (OpenAI)

**The Superpower: Obedience**

* **Why use it:** It is the most compliant model. If you give it a complex checklist or a task with many moving parts, it drops the fewest balls.
* **Best for:** [[concepts/complex-workflows|Complex workflows]], following strict [[concepts/instructions|instructions]], and logic-heavy tasks where missing a step breaks the result.
* **Example:** Ask it to optimize a prompt for itself; it will generate a detailed, comprehensive prompt following every constraint.

> **Rule of Thumb:** If the task has many moving parts and getting one wrong breaks the whole thing, start with ChatGPT.

### ✨ [[concepts/gemini|Gemini]] (Google)

**The Superpower: Multimodality**

* **Why use it:** It processes mixed media (video, audio, images, text) **natively**. Unlike other models that transcribe audio to text first, Gemini actually "listens" and "watches."
* **[[concepts/context-window|Context Window]]:** Has a massive 1M - 2M token window, allowing for huge [[concepts/file-uploads|file uploads]].
* **Best for:** Analyzing video recordings, long audio files, large PDF sets, or combining multiple inputs (e.g., a video recording + a slide deck + a photo of a [[concepts/whiteboard|whiteboard]]) into a summary.

> **Rule of Thumb:** If the input is video, audio, or messy files, Gemini is the only everyday AI that processes it natively.

### 🧠 [[concepts/claude|Claude]] ([[entities/anthropic|Anthropic]])

**The Superpower: First Draft Quality**

* **Why use it:** It produces the most "human" output and the highest quality code on the first try. It requires fewer revisions.
* **Areas of Excellence:**
	1. **[[concepts/coding|Coding]]:** Better at generating functional code and visualizations (e.g., charts, mermaid diagrams) on the first attempt.
	2. **Copywriting:** Excellent at "Style Matching." If you feed it examples of your previous [[concepts/writing|writing]], it replicates your tone/voice perfectly.
* **Best for:** The "Last Mile" of work—polishing drafts, writing code, and generating publish-ready content.

> **Rule of Thumb:** If you need working code or polished copy on the first try, start with Claude.

### 🔄 The "Everyday AI" [[concepts/workflow|Workflow]]

Jeff suggests a hybrid workflow:

1. **Start** with **ChatGPT** or **Gemini** for ideation, research, and outlining.
2. **Finish** with **Claude** to turn that rough outline into a polished final deliverable.

* * *

## 2\. Specialist AI (Task-Specific Tools)

These tools are optimized for specific functions rather than general [[concepts/reasoning|reasoning]].

### 🔍 Perplexity

**The Superpower: Speed & [[concepts/accuracy|Accuracy]] (Search)**

* **What it is:** Not a foundational model, but a search engine wrapper (often using Llama or GPT) optimized for fetching info.
* **Why use it:** It acts as a "Search Scalpel." It finds specific, up-to-date facts fast without hallucinating as often as creative chatbots.
* **Best for:** Finding a specific fact (e.g., "Is this restaurant foreigner-friendly?"), checking specs, or getting up-to-date news.

> **Rule of Thumb:** Treat Perplexity as a replacement for **[[concepts/google-search|Google Search]]**, not a replacement for ChatGPT. Use it for fetching, not reasoning.

### 📓 [[concepts/notebooklm|NotebookLM]] (Google)

**The Superpower: Groundedness (The Walled Garden)**

* **What it is:** A research tool that **only** answers based on the sources you upload to it.
* **Why use it:** It has the lowest [[concepts/hallucination-rate|hallucination rate]] because it does not use outside knowledge to answer questions. It stays strictly within the provided context.
* **Best for:** deeply analyzing specific documents, study guides, and fact-checking a draft against source material (e.g., "Does my script contradict the source PDF?").

> **Rule of Thumb:** If accuracy matters more than creativity, and you have source materials to check against, use NotebookLM.

* * *

## ⚡ Honorable Mentions

Tools Jeff uses occasionally but not daily:

* **Gamma:** For creating presentations.
* **ElevenLabs:** For voice cloning/text-to-speech.
* **Zapier / n8n:** For [[concepts/automation|automation]].
* **Excalidraw / Napkin.ai:** For quick visuals and diagrams.

_(Note:_ **_Grok_** _was mentioned but dismissed as only useful for real-time Twitter/X analysis, which isn't part of Jeff's workflow.)_
