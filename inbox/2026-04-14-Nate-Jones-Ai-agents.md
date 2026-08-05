---
wiki-ingested: true
title: "Nate Jones. Ai agents"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: ai-foundations-concepts
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[entities/nate-jones|Nate Jones]]. Ai [[concepts/agents|agents]]

---
---
https://www.youtube.com/watch?v=xNcEgqzlPqs

Here is a [[concepts/markdown|markdown]] [[concepts/summary|summary]] of the video content, focusing on the concept of "[[concepts/domain-memory|Domain Memory]]" and the architectural patterns for building reliable AI agents.

# The Secret to Reliable AI Agents: Domain Memory

**[[entities/speaker|Speaker]]:** Nate B. Jones **Core Insight:** [[concepts/generalized-agents|Generalized agents]] fail because they are "amnesiacs with tool belts." The key to long-[[concepts/running|running]], successful agents is shifting from generalized context to **Domain Memory**.

* * *

## 1\. The Problem with Generalized Agents

* **The "Amnesiac" Issue:** Most agents are built as generalized [[concepts/systems|systems]] with a tool belt. They lack a persistent sense of self or state.
* **Failure Modes:** When given a big goal, they tend to either:
	1. Attempt everything in one manic burst and fail.
	2. Wander around making partial progress, lose the plot, and falsely claim success.
* **The Trap:** Thinking a [[concepts/vector-database|vector database]] (RAG) alone solves memory. It doesn't.

## 2\. The [[concepts/solution|Solution]]: Domain Memory

Instead of relying on the LLM's [[concepts/context-window|context window]] or simple retrieval, you must build a **stateful representation of the work**.

* **[[concepts/slms|Definition]]:** A persistent, [[concepts/structured-representation|structured representation]] of the project's current state.
* **Components:**
	* Explicit feature lists.
	* Pass/Fail status of requirements.
	* Constraints and goals.
	* History of what was tried, what broke, and what was reverted.
* **Implementation Examples:**
	* A JSON blob defining features (initially marked as "failing").
	* A durable progress log text file.
	* Unit test results.

## 3\. The [[concepts/architecture|Architecture]]: The "Stage Manager" Pattern

[[entities/anthropic|Anthropic]] and successful builders are moving toward a **two-agent pattern** that treats the agent not as a continuous personality, but as discrete functional steps.

### Agent A: The Initializer (The Stage Manager)

* **Role:** Transforms the user prompt into a specific plan.
* **Action:** It does not do the work. It "builds the stage" for the worker.
* **Output:** Generates the artifacts (scaffolding, feature lists, JSON schemas, empty test [[concepts/files|files]]) that define the "Domain Memory."

### Agent B: The Worker (The Actor)

* **Role:** The "disciplined engineer."
* **Action:**
	1. Wakes up and reads the **Domain Memory** (progress logs, git history, feature list).
	2. Picks **one** specific, failing item to work on.
	3. Implements the fix.
	4. Runs the test (grounding the result in reality).
	5. Updates the memory artifacts (marks feature as "passing").
	6. **Dies/Exits.**
* **Key Concept:** The worker agent has no long-term memory. It is ephemeral. It relies entirely on the external state (the "setting") to know where it is and what to do next.

## 4\. Why This Works

* **Grounding:** Every [[concepts/session|session]] starts with a "boot-up ritual" where the agent orients itself based on hard data (logs/tests) rather than a fuzzy chat history.
* **[[concepts/prompting|Prompting]] as Staging:** [[concepts/prompt-engineering|Prompt engineering]] becomes the art of setting the scene so the actor knows their [[concepts/motivation|motivation]] and context immediately upon "waking up."
* **Atomic Progress:** It forces the agent to behave like a human engineer—orient, test, change, commit—rather than an infinite [[concepts/auto-complete|auto-complete]].

## 5\. Beyond [[concepts/coding|Coding]]

This pattern applies to any domain, not just [[concepts/software-engineering|software engineering]]. You simply need to define what "Domain Memory" looks like for that field:

* **Research:** Hypothesis backlog, experiment registry, evidence log, decision journal.
* **Operations:** Runbooks, incident timelines, ticket queues, SLAs.

## 6\. Strategic Implications (The "Moat")

* **[[concepts/models|Models]] are Commodities:** The model itself is just a policy engine. It is interchangeable.
* **The Real Moat:** The value lies in the **Harness** and the **Domain Memory Schema**.
	* Standardizing the "boot-up" rituals.
	* Designing the artifacts (JSONs, logs).
	* Building the [[concepts/feedback|feedback]] [[concepts/loops|loops]] ([[concepts/testing|testing]] harnesses).
* **Conclusion:** You cannot just "drop an agent" into a company. You must [[concepts/design|design]] the artifacts and processes that allow the agent to have memory.

* * *

### Key Design Principles for Builders

1. **Externalize the Goal:** Turn "Do X" into a machine-readable backlog with pass/fail criteria.
2. **Make Progress Atomic:** Force the agent to work on one item, test it, and update the shared state.
3. **Leave the Campsite Cleaner:** Ensure every run ends with a clean, documented state.
4. **Standardize the Boot-Up:** Every run must start by reading the memory/state, never guessing.
5. **Truth is in the Test:** Tie memory updates to actual test results, not the LLM's opinion of whether it succeeded.
