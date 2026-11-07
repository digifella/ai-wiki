---
wiki-ingested: true
title: "The AI model doesn't work - the harness does. Channel Prompt Engineering"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: reasoning-context-prompting
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# The AI model doesn't work - the harness does. Channel [[concepts/prompt-engineering|Prompt Engineering]]

---
---
<https://www.youtube.com/watch?v=1Ohf2aeSPFA>

The video presents a shift in [[concepts/ai-development|AI development]] for 2026: moving away from model selection and prompt engineering toward **[[concepts/harness-engineering|Harness Engineering]]**.

### **1\. The Problem: The "Intelligence" Paradox**

Despite frontier models like **[[entities/gpt-52|GPT-5.2]]**, **[[entities/claude-4|Claude 4]].6**, and **[[entities/gemini-3|Gemini 3]]** scoring 90%+ on standard benchmarks, they fail at real-world professional tasks.

* **The [[concepts/apex-benchmark|APEX Benchmark]]:** A new benchmark testing agents on [[concepts/long-horizon-professional-work|long-horizon professional work]] (consultancy, law, investment analysis).
* **Results:** The best models ([[entities/claude-opus|Opus 4.6]]) achieved only a **29.8% success rate**.
* **Why they fail:** It’s not a lack of knowledge or [[concepts/reasoning|reasoning]]. Failures occur due to **execution and orchestration**. Agents get "lost" after too many steps, loop back into failed approaches, and lose track of the original goal.

### **2\. Defining the "Agent Harness"**

The video introduces "Harness" as the defining word for 2026, much like "Agent" was for 2025.

* **Analogy:** The **Model is the Engine**; the **Harness is the Car** built around it.
* The harness handles:
	* What the AI can see ([[concepts/context-management|Context Management]]).
	* What tools it can use (Tool Orchestration).
	* How it recovers from errors (Error Recovery).
	* How it tracks progress over long periods ([[concepts/memory|Memory]]).

* * *

### **3\. Case Studies in Harness Simplification**

### **Vercel: Addition by Subtraction**

Vercel built an internal text-to-SQL agent with specialized tools and heavy prompt engineering. It was fragile and only 80% accurate.

* **The Fix:** They removed **80% of the tools**.
* **The New Setup:** They gave the agent a single tool—**arbitrary bash execution** (grep, cat, ls) inside a sandbox.
* **Outcome:** Success rate jumped to **100%**, speed increased by 3.5x, and it used 40% fewer tokens. **The model was smarter than the rigid pipeline built for it.**

### **Manus: [[concepts/context-engineering|Context Engineering]]**

Manus (recently acquired by Meta) rebuilt its agent framework **5 times in 6 months**.

* **Core Insight:** Performance gain came from **removing** complex [[concepts/document-retrieval|document retrieval]] systems and fancy routing logic.
* **External Memory:** They treated the **file system ([[concepts/markdown|Markdown]] files)** as external memory instead of stuffing everything into the [[concepts/context-window|context window]]. This prevents "context rot" where noise drowns out the signal in long tasks.

### **OpenAI: Harnessing Codex**

OpenAI’s "Harness Engineering" blog post details building a million-line product with **zero human-written code**.

* **The Shift:** Engineers no longer write code; they **[[concepts/design|design]] environments and feedback loops** for agents.
* **Strategy:** If the agent struggles, they don't fix the code; they improve the harness (tools, [[concepts/ai-safety|guardrails]], or documentation).

* * *

### **4\. The "Bitter Lesson" for 2026**

Referencing Richard Sutton’s "The Bitter Lesson," the video argues that methods [[concepts/scaling|scaling]] with compute and simplicity always beat those relying on human-engineered complexity.

* **The Rule:** As models get smarter, your harness should get **simpler**, not more complex.
* **Over-engineering:** Adding custom logic, rigid pipelines, and too many specialized tools is usually why agents fail today.

### **5\. Developer Recommendations for 2026**

1. **Stop Model Agonizing:** Models change every few months; the harness is your real moat.
2. **Strip the Scaffold:** Try removing specialized tools and giving the agent basic environment access (like a Bash terminal).
3. **Use a "Progress File":** Have your agent maintain a persistent `TODO.md` or `PLAN.md` that it reads and updates at every step to prevent "goal drift."
4. **Build for Deletion:** Make your [[concepts/architecture|architecture]] modular so you can rip out custom logic as models become capable enough to handle it natively.

**The Bottom Line:** Competitive advantage in 2026 isn't about having the best prompt; it's about having the most robust, simple harness that stays out of the model's way.
