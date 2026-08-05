---
wiki-ingested: true
title: "Open Clawd - channel prompt engineering"
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
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[entities/open-clawd|Open Clawd]] - channel [[concepts/prompt-engineering|prompt engineering]]

---
---
<https://www.youtube.com/watch?v=VNT5C_rLWiE>
Here is a [[concepts/summary|summary]] of the [[concepts/openclaw-architecture|OpenClaw architecture]] and [[concepts/workflow|workflow]] based on the video, formatted in [[concepts/markdown|Markdown]].

* * *

# OpenClaw: Architecture Overview

OpenClaw is described not as a hype-driven AI tool, but as a piece of "pure and elegant engineering." It operates as an [[concepts/event-driven-system|event-driven system]] where the logic resides in **[[concepts/agents|Agents]]** and traffic control resides in the **[[concepts/gateway|Gateway]]**.

## 1\. The Core Architecture

At the heart of the system is the **Gateway**.

* **Role:** Acts as a [[concepts/traffic-router|traffic router]].
* **Status:** Always on.
* **Function:** It is the "dumbest" part of the system. Its only job is to receive inputs, tag them, and shove them into a queue for the Agents.
* **The Agents:** The "smart" part. They wake up only when there is a task in the queue.

## 2\. Trigger Types (Inputs)

The system feels "alive" because it responds to five distinct types of inputs. Not all are human-initiated.

1. **Messages:** Human-initiated (WhatsApp, [[entities/telegram|Telegram]], [[entities/slack|Slack]]).
2. **Heartbeats:** System-initiated timers (e.g., triggers every 30 minutes).
3. **Crons:** User-defined schedules (e.g., "Run at 8:00 AM").
4. **Webhooks:** External API endpoints triggering actions.
5. **Internal [[concepts/hooks|Hooks]]:** Triggered by internal state changes.

## 3\. The Runtime [[concepts/loop|Loop]]

The workflow follows a specific path: `Time/Event -> Gateway -> Queue -> Agent -> State Update`

### Real-World Example: The 3 AM Server Crash

1. **System Clock (Cron):** Fires at 3:00 AM.
2. **Gateway:** Receives the cron event and pushes a "Check Urgent" task to the Queue.
3. **[[entities/agent|Agent]]:** Wakes up and pulls the task.
4. **Instruction Read:** Agent reads `instructions.md` which states: _"If server crash, call owner."_
5. **Tool Use:** Agent checks server logs, finds a crash.
6. **Action:** Agent uses the Twilio API to make a physical phone call.
7. **Sleep:** Agent returns to sleep.

## 4\. Concurrency & Queueing

* If multiple events happen simultaneously (e.g., a webhook hits at the same time as a heartbeat), the Gateway puts **everything** into the Queue.
* A single agent processes tasks serially (one at a time).
* Multiple agents can process tasks from the queue in parallel.

## 5\. Multi-Agent Communication

OpenClaw supports [[concepts/multi-agent-systems|multi-agent systems]] (e.g., a **Researcher Agent** and a **Writer Agent**), but they do not communicate telepathically.

* **The Handoff:** If the Researcher finishes a task, it sends a message back to the **Gateway**.
* **Routing:** The Gateway treats this internal message exactly like a user message and routes it to the Writer Agent's queue.
* **Benefit:** This keeps every agent isolated in its own workspace.

## 6\. [[concepts/memory|Memory]] & State (The "Low Tech" Approach)

OpenClaw does **not** rely on expensive, complex [[concepts/vector-databases|vector databases]] for memory.

* **[[entities/storage|Storage]]:** It uses simple **Markdown [[concepts/files|files]]**.
* **Process:** When an agent wakes up, it reads a markdown file containing the history/context (its "diary") before taking action.
* **Advantages:** Persistent, human-readable, and fast to load.

## 7\. Tools & [[concepts/skills|Skills]]

* **Built-in:** File system access, Bash command execution, Terminal usage.
* **External:** APIs connected via "Skills."
* **ClawHub:** A repository for skills.

## 8\. [[concepts/security|Security]] Note

Because the system passes data through queues and reads context from markdown files, it is susceptible to **Prompt Injection**.

* _Warning:_ Malicious [[concepts/code|code]] or "skills" from ClawHub could potentially inject [[concepts/instructions|instructions]].
* _Recommendation:_ Always run OpenClaw in a **sandboxed environment**.