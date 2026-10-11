---
wiki-ingested: true
title: "PDP Gary AI Integration, Retro Computing Projects, and AI-Driven Code Optimization"
date: 2026-10-03
source_type: youtube_summary
provider: "Google"
api: "Gemini 2.5 Flash"
modes: "Summary"
type: "source-summary"
domain: tools-platforms-infrastructure
group: apis-integrations-mcp
aliases:
  - "lab-notes/2026-10-03-PDP-Gary-AI-Integration-Retro-Computing-Projects-and-AI"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## PDP Gary AI Integration, Retro Computing Projects, and AI-Driven Code Optimization
**Clip title:** Meet PDP Gary: AI Meets Old-School [[concepts/computation|Computing]] | Shop Talk #98
**[[entities/tasia-custode|Author]] / channel:** [[entities/dave-plummer|Dave]]'s Attic
**URL:** https://www.youtube.com/watch?v=PsmdflXfY2U

### Summary
This video, "Shop Talk," features [[entities/dave-plummer|Dave]] answering questions and discussing recent projects and insights related to [[concepts/computation|computing]], AI, and his custom [[concepts/task-manager|task manager]], [[concepts/tmog-pro|TMOG]]. The main topics span from the development and capabilities of his [[concepts/ai-assistant|AI assistant]] and porting efforts on retro systems, to deeper discussions on [[concepts/ai-limitations|AI limitations]] and the practicalities of [[concepts/monitoring-and-alerting|system monitoring]] tools.

Dave elaborates on "[[entities/gary|Gary]]," his [[concepts/companion|AI companion]] integrated into a [[concepts/vt220|VT220]] [[concepts/cli|terminal]] setup. Gary's personality is shaped by an extensive text file, outlining specific preferences and attitudes, such as a fondness for the PDP-11/70 and a bias towards 1980s solutions. While Gary leverages Quinn 3.8 flash on the backend, the [[concepts/user-interface|user interface]] and interaction are managed by a physical [[concepts/pdp-11-architecture|PDP-11]], which dispatches requests to GPUs over Ethernet and processes the AI's responses. Furthermore, Dave discusses his ongoing work on a PDP-11/70, specifically building a BSD kernel for a new machine without a floating-point [[concepts/cpu|processor]] and overcoming challenges with [[concepts/ambition|drive]] controller [[concepts/memory|memory]] addresses. He also successfully ported KSH (KornShell) to 2.11BSD, improving upon the older TCSH and finding Bash too resource-intensive for the retro system.

A significant portion of the discussion revolves around using AI for [[concepts/coding|coding]] and troubleshooting. Dave describes how he challenged AI to write the "top" command for BSD Unix. After initial [[concepts/feedback|feedback]] to remove debug symbols and further [[concepts/instructions|instructions]] to optimize for "[[concepts/lean|lean]] and fast" execution, the [[concepts/ai-generated-code|AI-generated code]] surpassed the original hand-coded version in efficiency and startup time. He also recounts using [[entities/chatgpt|ChatGPT]] to diagnose a subtle error in a 7-[[entities/digit|digit]] octal [[concepts/memory|memory]] address for a peripheral controller on his PDP-11/70, which saved considerable physical troubleshooting effort. Beyond [[concepts/coding|coding]], the conversation delves into AI's broader implications, emphasizing the necessity of strict "[[concepts/ai-safety|guardrails]]" to prevent [[concepts/agentic-systems|autonomous agents]] from engaging in undesirable or harmful actions. He stresses the need for clear definitions of "alignment" in [[concepts/ai-development|AI development]] to ensure ethical behavior and highlights that while AI can generate complex plans (like house blueprints), human oversight and rigorous testing remain critical for validating accuracy and safety. He also clarifies that [[concepts/consistent-ai-responses|consistent AI responses]] to identical prompts can be achieved by controlling the model's "temperature" (randomness) and using a fixed seed, though public models often introduce variability.

Finally, Dave details his custom [[concepts/task-manager|task manager]], TMOG (Task Manager OG), contrasting it with traditional tools. TMOG aims to unify various system [[concepts/ai-performance-evaluation|performance metrics]]—such as CPU, memory, thermal, and network data—into a single, consolidated view, making it easier to diagnose system slowdowns. The development of TMOG involved a detailed specification and AI assistance for generating boilerplate code, with human developers focusing on refining its functionality and ensuring minimal system overhead (consuming only 1-3% CPU). TMOG includes a "Flight Recorder" feature to log system data over extended periods for post-mortem analysis of issues like crashes. It also offers a thermal process page to identify applications consuming significant power. TMOG supports cross-platform use ([[concepts/microsoft-windows|Windows]], [[entities/macos|macOS]], [[entities/linux|Linux]]) and can replace the default task manager in Windows. Dave continues to enhance TMOG based on [[concepts/user-feedback|user feedback]] and personal interest, viewing it as an ongoing [[entities/pursuitunimelbeduau|pursuit]] rather than a finished product.

### Video Description & Links
#### Description
PDP Gary has a personality—but how did Dave define it? This week on Shop Talk, Dave and Glen start with Gary, then explore Dave’s recent work using AI on BSD, the PDP kernel, and its peripherals.

From there, we turn to viewer questions about AI control, [[concepts/trust|trust]], and why the same question can produce different answers.

We also dig into Task Manager OG: what it adds beyond Windows Task Manager, tracking down resource spikes, memory usage versus memory [[concepts/pressure|pressure]], and using Flight Recorder to investigate crashes. Plus, cross-platform C++, [[concepts/development-speed|AI-assisted development]], and questions about [[concepts/licensing|licensing]] and TMOG’s future.

What would you ask PDP Gary? Leave your question in the comments.

00:00 - Hey I'm Dave...
00:33 - Defining PDP Gary’s Personality
02:10 - AI, BSD and PDP Kernel Work
08:10 - Stopping an Unstoppable [[concepts/ai-agent|AI Agent]]
09:23 - Proving Claims About AI Actions
11:17 - Would You Trust AI to Design Your House?
13:35 - Same AI Question, Different Answers
16:04 - TMOG vs. Task Manager
16:55 - Why Did It Take 40 Years?
17:39 - TMOG vs. Process Explorer
19:13 - Does TMOG Replace Task Manager?
19:57 - Which Process Caused the Spike?
21:35 - Memory Usage vs. Memory Pressure
22:28 - Does Monitoring Add Bloat?
23:08 - CPU Work vs. Overhead
24:16 - Tracking a Maxed-Out CPU Core
24:54 - [[concepts/audio-modality|Audio]] Glitches, Frame Drops and Core Scheduling
27:33 - What Caused the Throttling and Fan Activity?
28:26 - Diagnosing Crashes with Flight Recorder
29:40 - Threshold-Triggered Flight Recording
31:01 - One C++ Core Across Three Operating Systems
31:31 - How Much of TMOG Was AI-Coded?
33:20 - TMOG’s Windows UI and Phosphor Look
34:40 - TMOG Source Code and [[entities/microsoft|Microsoft]] Ownership
35:06 - Why Does TMOG Connect to the Internet?
35:47 - Licence Checks and Lifetime [[concepts/software-updates|Updates]]
36:17 - Code Signing and Task Manager Shortcuts
38:42 - Portable Flight Recorder for Remote Diagnostics
39:34 - TMOG Business Licensing
40:31 - Would Dave Sell TMOG to Microsoft?
42:08 - TMOG for Servers and Data Centres
42:33 - [[concepts/remote-monitoring|Remote Monitoring]] on Headless Linux
43:03 - More System Tools After TMOG?
44:36 - Getting Lost in Winamp Skins
45:37 - Dave’s Norm Macdonald Resemblance
46:25 - Why Does Bobcat Goldthwait Owe Dave Money?
48:52 - Shenanigans and outtakes

## Related Concepts
- [[concepts/pdp-11|PDP-11]] — [Wikipedia](https://en.wikipedia.org/wiki/PDP-11)
- [[concepts/vt220|VT220]] — [Wikipedia](https://en.wikipedia.org/wiki/VT220)
- [[concepts/ai-integration|AI integration]]
- [[concepts/retro-computing|retro computing]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrocomputing)
- [[concepts/code-optimization|code optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Program_optimization)
- [[concepts/the-one-minute-rule-suggests-addressing-small-tasks-immediately-to-prevent|task management]] — [Wikipedia](https://en.wikipedia.org/wiki/Task_management)
- [[concepts/system-monitoring|system monitoring]] — [Wikipedia](https://en.wikipedia.org/wiki/System_monitor)
- [[concepts/ai-limitations|AI limitations]]
- PDP-11/70 — [Wikipedia](https://en.wikipedia.org/wiki/PDP-11)
- [[concepts/ai-guardrails|AI guardrails]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_safety)
- [[concepts/singularity|AI alignment]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_alignment)
- [[concepts/thermal-regulation|temperature control]] — [Wikipedia](https://en.wikipedia.org/wiki/Temperature_control)
- [[concepts/structured-naming|cross-platform compatibility]]

## Related Entities
- [[entities/daves-attic|Dave's Attic]]
- [[entities/gary|Gary]]
- [[entities/tmog|TMOG]] — [Wikipedia](https://en.wikipedia.org/wiki/Trademark_Official_Gazette)
- [[entities/vt220|VT220]] — [Wikipedia](https://en.wikipedia.org/wiki/VT220)
- [[entities/dave|Dave]]
- Shop Talk — [Wikipedia](https://en.wikipedia.org/wiki/Shop_Talk)
- PDP-11 — [Wikipedia](https://en.wikipedia.org/wiki/PDP-11)
- BSD — [Wikipedia](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution)
- KornShell — [Wikipedia](https://en.wikipedia.org/wiki/KornShell)
- TCSH — [Wikipedia](https://en.wikipedia.org/wiki/Tcsh)