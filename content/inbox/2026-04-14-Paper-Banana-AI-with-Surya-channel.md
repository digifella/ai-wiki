---
wiki-ingested: true
title: "Paper Banana - AI with Surya channel"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: agent-systems-skills
---
# Paper Banana - [[entities/ai-with-surya|AI with Surya]] channel

---
---
<https://www.youtube.com/watch?v=MtA7CGOXnko>
Here is a [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the video [[concepts/text-transcript|transcript]] regarding the **PaperBanana** framework.

# PaperBanana: [[concepts/automated-academic-illustration|Automated Academic Illustration]] for AI Scientists

**PaperBanana** is a new framework developed by a team at **[[entities/google|Google]] and [[entities/peking-university|Peking University]]**. It is designed to generate [[concepts/publication-quality-diagrams|publication-quality diagrams]] and infographics directly from [[concepts/plain-text-descriptions|plain text descriptions]], overcoming the limitations of standard [[concepts/one-shot-image-generation-models|one-shot image generation models]].

* * *

## 🚫 The Problem with Current Models

Current state-of-the-art models (referred to as **[[entities/nano-banana-pro|Nano Banana Pro]]** in the video) operate on a "one-shot" basis:

* You give a prompt $\\rightarrow$ You get an image.
* **Issues:** If a label is misspelled, a [[concepts/connection|connection]] is missing, or the color scheme is off, you have to regenerate the entire image and hope for the best.

## 💡 The PaperBanana [[concepts/solution|Solution]]: Agentic [[concepts/workflow|Workflow]]

PaperBanana wraps the base image generator in a multi-[[entities/agent|agent]] pipeline. It does not just prompt; it plans, executes, and refines.

### The 5-Agent [[concepts/architecture|Architecture]]

1. **Retriever Agent:** Finds relevant reference examples to guide the system.
2. **Planner Agent:** Acts as the cognitive core, translating context into detailed layout descriptions.
3. **Stylist Agent:** Enforces aesthetic standards and [[concepts/design|design]] guidelines.
4. **Visualizer Agent:** Generates the actual image (uses Nano Banana Pro internally).
5. **Critic Agent:** Reviews the output, critiques it, and sends it back for revision.

### The Loop

The system operates on a **Generate $\\rightarrow$ Critique $\\rightarrow$ Refine** loop (typically 3 iterations). It self-corrects specific details like arrow direction, color [[concepts/coding|coding]], and text labels without needing manual user intervention.

* * *

## 🧪 Demos & [[concepts/capabilities|Capabilities]]

### 1\. Transformer Architecture (Sample Input)

The video demonstrated generating a diagram of the Transformer method.

* **Result:** High fidelity to the actual architecture.
* **Details:** Correctly separated Encoder/Decoder layers into different color palettes, used dashed lines for residual connections, and placed "Pre-LN" annotations correctly.
* **Process:** The system iterated three times, refining the "Sparse [[concepts/attention|Attention]] Context" arrow and label placement automatically.

### 2\. Google Agent Development Kit (Custom Input)

The presenter fed the system a raw text description of a hypothetical "ADK Agent" system involving orchestration, research [[concepts/agents|agents]], BigQuery, and Pandas.

* **Result:** A complex, professional system design diagram.
* **Details:** It correctly mapped [[concepts/relationships|relationships]] between the User, Orchestrator, and [[concepts/sub-agents|Sub-agents]]. It visually represented specific tools (BigQuery, Pandas) and protocols (A2A) mentioned in the text.

* * *

## 📊 Benchmarks & Performance

The paper evaluated the model on four dimensions: **Faithfulness, Conciseness, Readability, and Aesthetics.**

|     |     |     |     |
| --- | --- | --- | --- |
| Metric | Vanilla Model (One-shot) | PaperBanana (Agentic) | Human Experts |
| **Overall Score** | 43.2 | **60.2** | N/A |
| **Key Finding** | Struggled with specifics. | **Beats Humans** in Conciseness, Readability, & Aesthetics. | Wins only on **Faithfulness** (Intent). |

* * *

## 🚀 [[concepts/scenarios|Use Cases]]

While built for researchers, this technology is applicable to:

* **Solutions Architects:** System design documentation.
* **Product Managers:** Feature flowcharts.
* **Founders:** [[entities/pitch|Pitch]] deck visuals.
* **Developers:** Pipeline visualization.

## ⚠️ Important [[concepts/notes|Notes]]

* **Code Status:** The video utilized an **unofficial [[concepts/open-source|open-source]] implementation** (hosted on GitHub/Antigravity). The official code from Google/Peking University has not been released yet (expected circa Jan 30, 2026).
* **Underlying Tech:** PaperBanana is a framework/wrapper; it uses existing strong image models (like Nano Banana Pro) to do the actual pixel generation.

Link to research paper: <https://arxiv.org/abs/2601.23265>

Unofficial [[entities/github|GitHub]] to clone: <https://github.com/llmsresearch/paperbanana>
