---
wiki-ingested: true
title: "Ralph Wiggum loops - channel Gary Explains"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: undecided
group: needs-review
---
# Ralph Wiggum [[concepts/loops|loops]] - channel [[entities/gary-explains|Gary Explains]]

---
---
<https://www.youtube.com/watch?v=A6vYr0dmQAY>
Here is a [[concepts/summary|summary]] of the video **"Using the 'Ralph' [[concepts/ai-coding|AI Coding]] Technique"** by Gary Explains, formatted in [[concepts/markdown|Markdown]].

# The "Ralph" AI Coding Technique

This video explains a [[concepts/app-creation|software development]] technique named after the _Simpsons_ [[concepts/integrity|character]] Ralph Wiggum. Originally conceptualized in a blog post by [[entities/geoffrey-huntley|Geoffrey Huntley]] and implemented by [[entities/ryan-carson|Ryan Carson]], the technique treats an AI [[entities/agent|Agent]] as a "naive but good-natured" entity that requires a specific [[concepts/workflow|workflow]] to be effective.

## Core Concept: "Ralph is a Loop"

The central [[concepts/philosophy|philosophy]] is that an AI (like Ralph Wiggum) might not know exactly what it is doing, but if you run it in a loop enough times with specific instructions, it will eventually achieve the correct result.

* **The Philosophy:** The technique relies on **eventual [[concepts/logical-consistency|consistency]]**. The AI is "deterministically bad in an indeterministic world," but by running it repeatedly until requirements are met, it eventually produces working software.
* **The Problem:** LLMs ([[concepts/large-language-models|Large Language Models]]) are stateless; they do not learn or remember previous interactions once a session closes.
* **The [[concepts/solution|Solution]]:** To overcome statelessness, the "Ralph" technique uses external files to maintain context and [[concepts/memory|memory]] between iterations of the loop.

## How It Works

Ralph is an [[entities/openclaw|autonomous agent]] loop that runs AI coding tools (like [[entities/openai|OpenAI]] [[entities/codex|Codex]] or [[concepts/claude-code|Claude Code]]) repeatedly. Each iteration is a fresh instance, but it reads from persistent files to understand the current state of the project.

### Key Components

1. **The Loop:** A script (e.g., `ralph.sh`) that executes the AI prompt repeatedly.
2. `**prd.json**`**:** A **[[concepts/prd|Product Requirements Document]]** formatted in JSON. This contains the "User Stories" and their status (e.g., `"passes": false`).
3. `**progress.txt**`**:** A text file where the AI writes [[concepts/notes|notes]] to "remember" what it has achieved so far.
4. **Source Code & Git:** The actual code being generated and the version control history serve as the "ground truth."

### The Workflow Loop

1. **Read:** The agent reads the `prd.json` and `progress.txt`.
2. **Select:** It picks the highest priority User Story where `"passes": false`.
3. **Implement:** It writes the code to satisfy that specific story.
4. **Update:** It updates `prd.json` to mark the story as passed (`true`) and appends notes to `progress.txt`.
5. **Repeat:** The tool exits, and the loop starts a fresh instance for the next task.

## The Demonstration: Building an MQTT Broker

Gary demonstrates the technique by building a minimalistic **MQTT Broker in C** (without authentication or advanced features).

### Step 1: "Booting Up" (Generating the PRD)

* Gary asks the AI (Codex) to generate a text-based Product Requirements Document (PRD) for the broker.
* The AI asks [[concepts/clarifying-questions|clarifying questions]] (e.g., "What TCP port?", "Single or multiple subscribers?").
* A detailed Markdown PRD is generated containing acceptance criteria and user stories.

### Step 2: Converting to JSON

* A specific "Skill" (prompt) is used to convert the text-based PRD into the required `prd.json` format used by the Ralph loop.
* This creates a structured list of tasks (User Stories) with ID numbers and pass/fail states.

### Step 3: Running the Loop

* Gary runs the `ralph.sh` script for 50 iterations.
* **Iteration 1:** The AI sets up the basic server socket listener.
* **Subsequent Iterations:** The AI reads the updated state, sees the listener is done, and moves on to handling connections, parsing packets, and handling subscriptions.
* The AI autonomously updates the C code, the makefile, and the JSON status file.

### Step 4: [[concepts/verification|Verification]]

* Once the loop finishes, Gary compiles the code.
* He tests it using standard tools (`mosquitto_sub` and `mosquitto_pub`).
* **Result:** The broker successfully handles connections and routes messages between the publisher and subscriber, proving the "Ralph" loop successfully built working software from scratch.

## Conclusion

The Ralph technique is a method of **[[concepts/agent-collaboration|Agent Orchestration]]**. By constraining a single agent to a strict loop and forcing it to document its own progress in external files, developers can overcome the memory limitations of LLMs to build complex software iteratively.
