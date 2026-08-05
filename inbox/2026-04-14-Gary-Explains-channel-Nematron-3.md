---
wiki-ingested: true
title: "Gary Explains channel. Nematron 3"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: open-systems-local-models
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[entities/gary-explains|Gary Explains]] channel. [[entities/nematron-3|Nematron 3]]

---
---
<https://www.youtube.com/watch?v=8gFAuYxJZ-A>
The provided video features a review and performance test of [[entities/nvidia|NVIDIA]]’s **Nemotron-3 [[entities/nano|Nano]]**, a 30-billion-parameter [[concepts/open-source|open-source]] AI model.

* * *

### **Overview: NVIDIA [[concepts/nemotron-3-family|Nemotron-3 Family]]**

NVIDIA recently released the Nemotron-3 family of [[concepts/reasoning-models|open-source models]], which includes three sizes:

* **Nano:** 30-billion [[concepts/parameters|parameters]] (3-billion active via [[entities/mixture-of-experts|Mixture-of-Experts]] [[concepts/architecture|architecture]]).
* **Super:** 100-billion parameters (10-billion active).
* **Ultra:** 500-billion parameters (50-billion active).

In addition to the [[concepts/models|models]], NVIDIA released [[concepts/training|training]] datasets, [[concepts/reinforcement-learning-environments|reinforcement learning environments]], and libraries to help developers build specialized AI [[concepts/agents|agents]].

* * *

### **[[concepts/performance-testing|Performance Testing]] (Nano Model)**

The reviewer tested the Nano model locally using **[[entities/llama|Ollama]]** on a PC with an **RTX graphics card**.

|     |     |     |     |
| --- | --- | --- | --- |
| Task Category | Test Description | Result | Details |
| **Simple Logic** | Alice's brothers and sisters riddle | **PASS** | Correctly identified that each brother has four sisters. |
| **Complex Logic** | Hourglass time measurement (7 and 11 min) | **FAIL** | Failed to provide a valid logical path for measuring 15 minutes. |
| **[[concepts/instruction-following|Instruction Following]]** | Find unusual word, find synonym, reverse it | **PASS** | Identified "quixotical," chose "utopian," and reversed it to "naipotu." |
| **Reading Comp.** | Multiple-choice questions on Magellan's voyage | **PASS** | Correctly answered all three specific questions based on the text. |
| **Creative [[concepts/writing|Writing]]** | Outline for a 1,500-word history essay | **PASS** | Provided a structured outline with appropriate word counts. |
| **Creative Writing** | Generate 20 blog titles from a prompt | **PASS** | Successfully generated 20 relevant and engaging titles. |
| **Creative Writing** | [[entities/star-wars|Star Wars]] review using "George [[entities/lucas|Lucas]]" acrostic | **PASS** | Each sentence began with the consecutive letters of the director's name. |
| **Simple [[concepts/coding|Coding]]** | [[concepts/python|Python]] script for [[concepts/integrity|character]] counting/hex conversion | **PASS** | The generated [[concepts/code|code]] ran successfully and produced the correct output. |
| **Complex Coding** | ML-based Tic-Tac-Toe game in Python | **FAIL** | The code was generated but failed to execute due to errors. |

* * *

### **Final Verdict**

The **[[entities/nemotron-3-nano|Nemotron-3 Nano]]** is a highly capable model for its size, particularly when [[concepts/running|running]] locally.

* **Strengths:** Excellent at reading comprehension, following complex multi-step [[concepts/instructions|instructions]], and creative writing tasks.
* **Weaknesses:** Struggles with advanced logic puzzles and complex programming tasks on the first attempt.
* **Optimization:** Performs very well on NVIDIA [[concepts/hardware|hardware]] and is a strong contender for building specialized, efficient AI agents.