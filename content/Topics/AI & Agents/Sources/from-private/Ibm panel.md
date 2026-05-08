---
wiki-ingested: true
domain: ai-agents
group: agent-systems-skills
---
<https://www.youtube.com/watch?v=_lZgapJzFho>

# [[entities/mixture-of-experts|Mixture of Experts]]: The "Fun-cember" of Model Releases, [[concepts/scale-effect|Scaling Laws]], and [[entities/agent|Agent]] Wars

**Host:** [[entities/tim|Tim]] Hwang **Panelists:**

* **Gabe Goodhart:** Chief Architect, AI Open [[concepts/innovation|Innovation]]
* **Abraham Daniels:** Sr. Technical Product Manager, [[entities/granite|Granite]]
* **[[entities/aaron-baughman|Aaron Baughman]]:** IBM Fellow, Master Inventor

In this episode of _Mixture of Experts_, the panel discusses the sudden influx of major model releases at the end of the year, debates whether AI scaling laws are still valid, and analyzes the implications of Amazon blocking ChatGPT’s shopping agent.

* * *

## 📰 AI News Headlines

* **Amazon re:Invent:** Launched three new [[concepts/agents|agents]] for [[concepts/coding|coding]], [[concepts/secure|security]], and operations.
* **IBM's "Bob":** Early results show IBM’s [[concepts/smart-coding-agent|AI coding assistant]] has improved [[concepts/developer-productivity|developer productivity]] by 45%.
* **[[entities/salesforce|Salesforce]] Data:** AI and agents influenced $14.2 billion in global sales during Black Friday.
* **Smart Kitchen:** Introduction of "Pasha," a private robot chef capable of complex multi-step cooking.

* * *

## 🚀 Topic 1: The Holiday Model Rush ([[entities/claude-4|Claude 4]].5, [[entities/mistral-ai|Mistral]], [[entities/deepseek|DeepSeek]])

The end of the year has brought a "welter" of new model launches, including [[concepts/claude-opus-45|Claude Opus 4.5]], [[entities/mistral-3-large|Mistral 3]], and DeepSeek 3.2. The panel discusses how [[entities/labs|labs]] are beginning to specialize rather than just competing on general capability.

* **"Fun-cember":** Gabe Goodhart [[concepts/notes|notes]] that the holiday season is the perfect time for experimental releases, giving developers downtime to tinker.
* **Lean into Strengths:**
	* **DeepSeek:** Focusing on efficiency and novel [[concepts/attention-mechanisms|attention mechanisms]] (sparse attention) to run giant [[concepts/models|models]] efficiently. They are targeting [[concepts/reasoning|reasoning]] and [[concepts/tool-calling|tool-calling]].
	* **Mistral:** Delivering a high-quality "plain vanilla" dense attention model, but with [[concepts/vision-capabilities|vision capabilities]] integrated natively across the stack (not just as an add-on).
	* **Claude:** Doubling down on [[concepts/software-engineering|software engineering]] and maintaining a unique, collaborative "persona."
* **[[concepts/open-source|Open Source]] differentiation:** Abraham Daniels argues that Open Source labs differentiate simply by _being_ open. DeepSeek proved you don't need hundreds of thousands of GPUs to reach State of the Art (SOTA), and Mistral is returning to [[concepts/apache-2.0|Apache 2.0]] [[concepts/licensing|licensing]] roots.
* **Ensembling is the Future:** Aaron Baughman suggests the sheer number of good models means the future lies in **routers**—systems that direct a prompt to the specific model best suited for that task (e.g., DeepSeek for math, Mistral for RAG, Claude for coding).

* * *

## 📈 Topic 2: Are AI Scaling Laws Still Real?

The group reacts to a blog post by VC Tomasz Tunguz suggesting [[entities/gemini-3|Gemini 3]] proves scaling laws hold—implying that throwing more compute at a problem still yields capability jumps.

* **[[entities/google|Google]]'s [[concepts/hardware|Hardware]] Advantage:** Abraham points out Google is unique because of its full-stack [[concepts/integration|integration]] with TPUs. Their results might not apply to everyone else.
* **Quality vs. Scale:** Gabe argues that "[[concepts/scaling-law|Scaling Law]]" is a misnomer. Gemini didn't drastically change [[concepts/parameter-count|parameter count]]; they likely scaled data quality and [[concepts/training|training]] methods.
* **Experimentation Velocity:** The real advantage of massive compute scaling isn't just a bigger model; it's the ability to run training experiments faster. Hardware speed allows researchers to iterate through algorithmic improvements more quickly.
* **Step-Function Growth:** Aaron predicts progress [[entities/will|will]] look like stepwise S-curves rather than a straight line, driven by new topologies and hybrid architectures (like mixing [[concepts/transformers|Transformers]] with State Space Models).

* * *

## 🛒 Topic 3: The Agent Wars (Amazon vs. ChatGPT)

Amazon has blocked ChatGPT’s new "Shopping Research" agent from accessing product details and reviews on its site. This sparks a conversation about the open web and business incentives.

* **The New Browser Wars:** Gabe compares this to the early browser wars. Agents are becoming the new browser—the primary way people access the internet. This will likely lead to antitrust scrutiny as platforms try to lock agents out.
* **Protecting the Moat:** Aaron notes this is a "turf war." Amazon is protecting its e-commerce data, ad revenue, and commission structure. They want users utilizing their own tools (Rufus/Alexa+) rather than a third-party agent.
* **Impact on Utility:** If agents are blocked from the biggest platforms, their utility as a "do-it-all" tool diminishes significantly.
* **Opportunity for Little Guys?** Aaron speculates this could create an opening for smaller retailers to band together and open their data to agents, creating a collective competitor to the "closed retail empires."

* * *

### 💡 Quote of the Week

> "Scaling Law is kind of a misnomer... it's a quality improvement law. When you have an iteration cycle that costs millions of dollars and takes months, it's really hard to move that ship. As a developer, I want something that takes fractions of a second." — **Gabe Goodhart**

## Related Concepts
- [[concepts/technical-overview|Mixture of Experts]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture_of_Experts)
- [[concepts/model-releases|Model Releases]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Releases)
- [[concepts/scaling-laws|Scaling Laws]] — [Wikipedia](https://en.wikipedia.org/wiki/Scaling_Laws)
- [[concepts/agent-wars|Agent Wars]] — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Wars)
- [[concepts/ai-scaling-laws|AI Scaling Laws]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Scaling_Laws)

## Related Entities
- [[entities/tim-hwang|Tim Hwang]] — [Wikipedia](https://en.wikipedia.org/wiki/Tim_Hwang)
- [[entities/gabe-goodhart|Gabe Goodhart]] — [Wikipedia](https://en.wikipedia.org/wiki/Gabe_Goodhart)
- [[entities/abraham-daniels|Abraham Daniels]] — [Wikipedia](https://en.wikipedia.org/wiki/Abraham_Daniels)
- [[entities/ibm|IBM]] — [Wikipedia](https://en.wikipedia.org/wiki/IBM)
- [[entities/amazon|Amazon]] — [Wikipedia](https://en.wikipedia.org/wiki/Amazon)
- [[entities/chatgpt|ChatGPT]] — [Wikipedia](https://en.wikipedia.org/wiki/ChatGPT)
- [[entities/bob|Bob]] — [Wikipedia](https://en.wikipedia.org/wiki/Bob)