---
wiki-ingested: true
title: "IBM Mixture of Experts"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: model-efficiency-compression
---
# [[entities/ibm|IBM]] [[concepts/mixture-of-experts|Mixture of Experts]]

---
---
# Mixture of Experts: The "Fun-cember" of [[concepts/model-releases|Model Releases]], [[concepts/scaling-laws|Scaling Laws]], and [[concepts/agent-wars|Agent Wars]]

**Host:** [[entities/tim|Tim]] Hwang **Panelists:**

* **[[entities/gabe-goodhart|Gabe Goodhart]]:** Chief Architect, AI Open [[concepts/innovation|Innovation]]
* **[[entities/abraham-daniels|Abraham Daniels]]:** Sr. Technical Product Manager, [[entities/granite|Granite]]
* **[[entities/aaron-baughman|Aaron Baughman]]:** IBM Fellow, Master Inventor

In this episode of _Mixture of Experts_, the panel discusses the sudden influx of major model releases at the end of the year, debates whether [[concepts/ai-scaling-laws|AI scaling laws]] are still valid, and analyzes the implications of [[entities/amazon|Amazon]] blocking [[entities/chatgpt|ChatGPT]]’s shopping agent.

* * *

## 📰 AI News Headlines

* **Amazon re:Invent:** Launched three new [[concepts/agents|agents]] for [[concepts/coding|coding]], [[concepts/security|security]], and operations.
* **IBM's "Bob":** Early results show IBM’s [[concepts/ai-coding|AI coding]] assistant has improved [[concepts/developer-productivity|developer productivity]] by 45%.
* **[[entities/salesforce|Salesforce]] Data:** AI and agents influenced $14.2 billion in global sales during Black Friday.
* **Smart Kitchen:** Introduction of "Pasha," a private robot chef capable of complex multi-step cooking.

* * *

## 🚀 Topic 1: The Holiday Model Rush ([[entities/claude|Claude]] 4.5, [[entities/mistral|Mistral]], [[entities/deepseek|DeepSeek]])

The end of the year has brought a "welter" of new model launches, including [[entities/claude-opus|Claude Opus]] 4.5, [[entities/mistral-3|Mistral 3]], and DeepSeek 3.2. The panel discusses how labs are beginning to specialize rather than just competing on general capability.

* **"Fun-cember":** Gabe Goodhart [[concepts/notes|notes]] that the holiday season is the perfect time for experimental releases, giving developers downtime to tinker.
* **Lean into Strengths:**
	* **DeepSeek:** Focusing on efficiency and novel [[concepts/attention-mechanisms|attention mechanisms]] (sparse attention) to run giant models efficiently. They are targeting [[concepts/reasoning|reasoning]] and [[concepts/tool-calling|tool-calling]].
	* **Mistral:** Delivering a high-quality "plain vanilla" dense attention model, but with [[concepts/vision-capabilities|vision capabilities]] integrated natively across the stack (not just as an add-on).
	* **[[concepts/claude|Claude]]:** Doubling down on [[concepts/software-engineering|software engineering]] and maintaining a unique, collaborative "persona."
* **[[concepts/open-source|Open Source]] differentiation:** Abraham Daniels argues that Open Source labs differentiate simply by _being_ open. DeepSeek proved you don't need hundreds of thousands of GPUs to reach State of the Art (SOTA), and Mistral is returning to [[entities/apache-20|Apache 2.0]] [[concepts/licensing|licensing]] roots.
* **Ensembling is the Future:** Aaron Baughman suggests the sheer number of good models means the future lies in **routers**—[[concepts/systems|systems]] that direct a prompt to the specific model best suited for that task (e.g., DeepSeek for math, Mistral for RAG, Claude for coding).

* * *

## 📈 Topic 2: Are AI Scaling Laws Still Real?

The group reacts to a blog post by VC Tomasz Tunguz suggesting [[entities/gemini-3|Gemini 3]] proves scaling laws hold—implying that throwing more [[concepts/compute|compute]] at a problem still yields capability jumps.

* **[[entities/google|Google]]'s [[concepts/hardware|Hardware]] Advantage:** Abraham points out Google is unique because of its full-stack [[concepts/integration|integration]] with TPUs. Their results might not apply to everyone else.
* **Quality vs. Scale:** Gabe argues that "[[concepts/scaling-law|Scaling Law]]" is a misnomer. [[concepts/gemini|Gemini]] didn't drastically change [[concepts/parameter-count|parameter count]]; they likely scaled data quality and [[concepts/training|training]] [[concepts/methods|methods]].
* **Experimentation Velocity:** The real advantage of massive compute scaling isn't just a bigger model; it's the ability to run training experiments faster. Hardware speed allows researchers to iterate through algorithmic improvements more quickly.
* **Step-Function Growth:** Aaron predicts progress will look like stepwise S-curves rather than a straight line, driven by new topologies and hybrid architectures (like mixing [[concepts/transformers|Transformers]] with [[concepts/ssm|State Space Models]]).

* * *

## 🛒 Topic 3: The Agent Wars (Amazon vs. ChatGPT)

Amazon has blocked ChatGPT’s new "Shopping Research" agent from accessing product details and reviews on its site. This sparks a conversation about the open web and business incentives.

* **The New Browser Wars:** Gabe compares this to the early browser wars. Agents are becoming the new browser—the primary way people access the internet. This will likely lead to antitrust scrutiny as platforms try to lock agents out.
* **Protecting the Moat:** Aaron notes this is a "turf war." Amazon is protecting its e-commerce data, [[concepts/ad-revenue|ad revenue]], and commission [[concepts/structure|structure]]. They want users utilizing their own tools (Rufus/Alexa+) rather than a third-party agent.
* **Impact on Utility:** If agents are blocked from the biggest platforms, their utility as a "do-it-all" tool diminishes significantly.
* **Opportunity for Little Guys?** Aaron speculates this could create an opening for smaller retailers to band together and open their data to agents, creating a collective competitor to the "closed retail empires."

* * *

### 💡 Quote of the Week

> "Scaling Law is kind of a misnomer... it's a quality improvement law. When you have an [[concepts/iteration|iteration]] cycle that costs millions of dollars and takes months, it's really hard to move that ship. As a developer, I want something that takes fractions of a second." — **Gabe Goodhart**
