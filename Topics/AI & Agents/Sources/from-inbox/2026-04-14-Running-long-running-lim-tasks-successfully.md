---
wiki-ingested: true
title: "Running long running lim tasks successfully"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: entertainment-games
group: individual-sports-performance
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=entertainment-games name=Entertainment & Games

---
---
<https://www.youtube.com/watch?v=TJ-vWGCosdQ>
Here is a summary of the video transcript discussing the paper **"Solving a Million-Step LLM Task with [[concepts/zero|Zero]] Errors,"** published by [[entities/cognizant-ai-lab|Cognizant AI Lab]] in November 2025.

# 📄 Revolutionary Paper: Solving a Million-Step Task with Zero Errors

**Publication Date:** November 2025 **Source:** Cognizant AI Lab **Core Achievement:** An LLM successfully executed a task requiring over **1 million [[concepts/logical-steps|logical steps]]** without a single error, effectively using **no [[concepts/context-window|context window]]**.

* * *

## 🛑 The Problem: Why Agents Fail at Long Tasks

While AI agents [[entities/microsoft-excel|excel]] at short tasks (5-minute demos), they catastrophic fail at [[concepts/long-horizon-tasks|long-horizon tasks]] like migrating databases or [[concepts/writing|writing]] novels.

* **The Culprits:** Context drift and hallucination.
* **The "Brutal Math":** Even a model with 99% [[concepts/accuracy|accuracy]] fails long tasks.
	* $0.99^{1000} \\approx 0%$ success rate.
	* Real-world engineering tasks require thousands of steps, making standard [[entities/agent|agent]] [[concepts/architecture|architecture]] mathematically doomed.
* **The Benchmark:** The **Tower of Hanoi with 20 disks**, which requires exactly **1,048,575 moves**. Standard [[entities/gpt-4|GPT-4]] fails immediately due to the weight of its own [[concepts/conversation-history|conversation history]].

* * *

## 🛠️ The [[concepts/solution|Solution]]: The MAKER Framework

**MAKER** stands for **M**assively decompos**ed** **A**gentic **P**rocesses. It proves reliability is an **engineering** problem, not a model capability problem.

### Pillar 1: Maximal Decomposition (Statelessness)

* **Concept:** Do not let the agent remember the past.
* **Method:** Instead of appending chat history (which causes drift), the agent is treated as a **stateless function**.
* **[[concepts/workflow|Workflow]]:** Input (Rules + Current State + Immediate Goal) $\\rightarrow$ Execute Move $\\rightarrow$ Update State $\\rightarrow$ **Agent Dies**.
* **Result:** The agent cannot get confused by previous steps because it has no [[concepts/memory|memory]] of them. The "State Object" is the only memory that matters.

### Pillar 2: Red-Flagging (Psychology of Errors)

* **Insight:** Logic errors are often preceded by syntax errors or "rambling."
* **Method:** Use a **Strict Parser**.
	* If the model returns a paragraph instead of JSON: **Reject**.
	* If the model uses too many tokens (thinking/rambling): **Reject**.
* **Action:** Treat syntax errors as proxy logic errors and force a retry immediately. Do not attempt to repair the output.

### Pillar 3: First-to-Ahead-by-K Voting (The Secret Sauce)

* **Concept:** Don't ask once; ask multiple times in parallel.
* **Algorithm:** Based on the "Gambler's Ruin" problem.
* **Example ($K=3$):** If Move A gets 5 votes and Move B gets 2 votes, the difference is 3. Move A wins.
* **Impact:** This mechanism can mathematically boost an 80% accurate base model to **99.9999% system accuracy**.

* * *

## 💰 The Economic Breakthrough

The researchers discovered a new [[concepts/scaling-law|scaling law]]: **Small Models + Voting < Big Models (Cost)**.

* **Decomposition Effect:** By breaking tasks down to the micro-level, the difficulty of each individual step drops. You don't need a genius model (GPT-4) to solve a simple logical step; you just need a rule-follower.
* **Cost Efficiency:** It is cheaper to run a "dumb" model (e.g., Llama-3-8B, GPT-4o-mini) 10 times for voting than to run a "smart" model once.
* **Logarithmic Scaling:** Making a task 10x harder does not cost 10x more; it only costs slightly more due to voting overhead.

* * *

## 👨‍💻 Developer Blueprint: How to Apply MAKER Today

If you are building [[concepts/software|software]] agents, stop waiting for [[concepts/gpt-5|GPT-5]] and change your architecture:

1. **Define Atomic State:** Stop relying on chat history. Define state via file systems, dataframes, or compiler logs.
2. **Micro-Level Decomposition:** Break tasks into the smallest possible units (e.g., separate "defining inputs" from "writing logic").
3. **Strict Validation:** Fail fast. If the output format isn't perfect, throw it away and retry.
4. **Voting for Critical Steps:** Implement parallel calls for high-stakes decision points. If the agents disagree, it is a signal of uncertainty.

### 🔑 Key Takeaway

**Reliability is an architectural choice.** By treating LLMs as unreliable, stochastic components that require [[concepts/verification|verification]] and redundancy, we can build reliable systems right now.