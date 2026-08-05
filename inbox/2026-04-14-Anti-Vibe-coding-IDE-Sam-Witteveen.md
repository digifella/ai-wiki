---
wiki-ingested: true
title: "Anti Vibe coding IDE - Sam Witteveen"
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
# [[concepts/anti-vibe-coding|Anti Vibe coding]] IDE - [[entities/sam-witteveen|Sam Witteveen]]

---
---
<https://www.youtube.com/watch?v=WHoTpk_BJys>
Here is a [[concepts/summary|summary]] and review of **[[entities/junie|Junie]]**, JetBrains' new [[concepts/smart-coding-agent|smart coding agent]], based on the provided video transcript.

# Junie: The "Anti-[[concepts/vibe-coding|Vibe Coding]]" Tool for Professionals

In a market flooded with "vibe coding" apps designed for people who don't know how to [[concepts/code|code]], **Junie** by JetBrains positions itself as a specialized tool for professional [[concepts/software|software]] engineers. It is not designed to blindly generate thousands of lines of code from scratch, but rather to act as a deeply integrated, intelligent pair programmer for existing codebases.

## The JetBrains Advantage

Unlike generic IDE wrappers, JetBrains (creators of IntelliJ, [[entities/pycharm|PyCharm]], WebStorm, etc.) builds IDEs heavily customized for specific languages and frameworks. Junie leverages this:

* **Deep [[concepts/integration|Integration]]:** It is baked into the IDE, not just a plugin.
* **Context Awareness:** It understands the specific [[concepts/architecture|architecture]] you are working on (e.g., it knows an [[entities/android|Android]] app [[concepts/structure|structure]] in IntelliJ vs. a [[entities/react|React]] app in WebStorm).
* **Model Flexibility:** It utilizes top-tier [[concepts/models|models]] like [[entities/claude|Claude]] 3.5 Sonnet, [[concepts/gemini|Gemini]] 1.5 Pro, and GPT-4o.

* * *

## Core Features & [[concepts/workflow|Workflow]]

Junie operates on a "Code + Ask" mentality, offering distinct modes for different stages of development.

### 1\. Code Ask (The [[concepts/knowledge-base|Knowledge Base]])

Before [[concepts/writing|writing]] code, you can query your codebase. This is a massive advantage for:

* **Legacy Code:** Understanding how complex, existing [[concepts/systems|systems]] interact.
* **Team Onboarding:** New developers can ask Junie to summarize project functionality, explain specific [[concepts/files|files]], or map out dependencies without needing a senior dev's immediate [[concepts/attention|attention]].

### 2\. Auto Mode & The Iterative [[concepts/loop|Loop]]

Junie doesn't just "guess and dump." It follows a structured process:

1. **Plan:** It analyzes the request and proposes a plan.
2. **Act:** It writes code and generates associated tests.
3. **Verify:** It runs the code/tests to ensure functionality.
4. **Refine:** It fixes its own errors (e.g., CSS misalignments or compilation errors) before presenting the [[concepts/solution|solution]].

### 3\. Brave Mode

For users who trust the [[entities/agent|agent]], "Brave Mode" allows Junie to execute terminal [[concepts/commands|commands]] and make file changes autonomously (though it [[entities/will|will]] still pause for confirmation on critical actions).

### 4\. Project Guidelines

Junie can generate and maintain a `guidelines.md` file. This acts as the agent's "[[concepts/memory|memory]]" for the project's specific rules, [[concepts/tech-stack|tech stack]], and coding standards, ensuring consistency across the team.

* * *

## The "Professional" Difference: Control & [[concepts/verification|Verification]]

The review [[concepts/highlights|highlights]] that Junie solves the biggest flaw of vibe coding: **Loss of Control.**

* **The Plan View:** You can see exactly what files Junie intends to touch before it starts.
* **The Diff View:** After execution, Junie presents a clean, side-by-side diff of what changed (added lines, deleted lines, modified styles).
* **Rollback:** If the agent makes a mistake, you can roll back specific changes or the entire task with one click.
* **MCP Support:** It supports the [[concepts/model-context-protocol|Model Context Protocol]], allowing users to switch underlying models (e.g., swapping to Claude 3.5 Sonnet) or connect to [[concepts/external-tools|external tools]] easily.

## The Verdict

Junie is designed for developers who **already know how to code**.

* **It is not:** A "crazy intern" trying to write 50,000 lines of unverified code in an hour.
* **It is:** A tool to help you ship usable software faster by handling boilerplate, refactoring, and framework migrations (e.g., converting a demo to Next.js) while keeping the human in the driver's seat.

> "It's not about what it changes; it's about you knowing and being in control of what it changes."