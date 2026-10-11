---
wiki-ingested: true
title: "Hermes Agent's New /loop Feature: Automated Recurring Task Demo"
date: 2026-08-19
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: automation-scheduling-sync
type: "source-summary"
aliases:
  - "lab-notes/2026-08-19-Hermes-Agents-New-loop-Feature-Automated-Recurring-Task"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## Hermes Agent's New /loop Feature: Automated Recurring Task Demo
**Clip title:** Loops in Hermes Agent - Hands-on Demo with Qwen3.8 27B
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=ZBDBOJQ9tLc

### Summary
The video provides an insightful demonstration of [[entities/hermes-agent|Hermes Agent]], an open-source [[concepts/ai-agentic-framework|AI agentic framework]] developed by [[entities/nous-research|Nous Research]], with a particular focus on its new `/loop` feature. Hermes Agent is presented as an operating layer that grants AI models "real hands" through capabilities like [[concepts/terminal-access|terminal access]], [[concepts/file-manipulation|file manipulation]], web tools, [[concepts/memory|memory]], and the ability to execute [[concepts/multi-step-tasks|multi-step tasks]] autonomously. The introduction of the `/loop` command fundamentally changes how agents interact with time-dependent processes, moving away from continuous manual prompts to an automated, recurring observation model.

The core of the `/loop` feature is its intelligent, timer-driven execution. Users initiate the loop once, and the Hermes Agent then wakes itself up at fixed or self-paced intervals. During each "wakeup," the agent reads the current state of its environment (e.g., files, APIs, logs), performs designated work, reports its findings, and then returns to a dormant state. A key highlight is the customizable stop conditions; users can specify a fixed number of iterations, define a natural language condition (like stopping when a deployment is "live"), or allow the agent itself to determine when the task is complete by issuing a `LOOP_COMPLETE` signal. Configuration options within a `config.yaml` file allow fine-tuning of the loop's behavior, including minimum interval seconds, maximum ticks, and self-paced backoff parameters.

The presenter illustrates the `/loop` functionality with a practical demonstration using a local [[concepts/qwen-38-27b|Qwen 3.8-27B]] Ridge model. A simulated deployment script (`fake_deploy.sh`) is run in the background, which sequentially updates a status file through "queued," "building," "deploying," and "live" stages, each with a 60-second delay. Hermes Agent is then instructed via the `/loop` command to monitor this status file every 30 seconds, report the current stage, and complete the loop when the stage is "live." The agent successfully tracks the deployment's progress, reporting each change without any further user input. Impressively, the agent even demonstrates adaptive intelligence by switching from reading the entire file content to merely checking the file's modification time (using `stat`) on later wakeups, optimizing its monitoring process.

In conclusion, the `/loop` feature offers a powerful solution for automating recurring tasks that involve monitoring external, dynamic changes, eliminating the need for constant human supervision. The video differentiates `/loop` from other Hermes Agent functionalities like `/goal` (judge-driven, for specific objectives) and `cron` (for unattended, long-horizon schedules). The main takeaway emphasizes the "zero babysitting" aspect of `/loop`, making it an incredibly useful tool for scenarios like continuous integration/continuous deployment (CI/CD) pipelines or any process requiring periodic checking and intelligent response to evolving states.

### Video Description & Links
#### Description
This video installs and tests hermes agent /loop which re-runs a prompt (or a slash command) on a recurring cadence.

#hermesagent #hermesloop 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

▶ https://github.com/NousResearch/hermes-agent

All rights reserved © Fahd Mirza

#### URLs
- https://github.com/NousResearch/hermes-agent

## Related Concepts
- [[concepts/hermes-agent|Hermes Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Hermes_Agent)
- [[concepts/hermes-agent|/loop feature]]
- [[concepts/automated-recurring-tasks|automated recurring tasks]]
- [[concepts/ai-agentic-framework|AI agentic framework]]
- [[concepts/web-tools|Nous Research]]
- [[concepts/terminal-access|terminal access]]
- [[concepts/file-manipulation|file manipulation]]
- [[concepts/web-tools|web tools]]
- [[concepts/memory|memory]] — [Wikipedia](https://en.wikipedia.org/wiki/Memory)
- [[concepts/multi-step-tasks|multi-step tasks]]
- [[concepts/autonomous-execution|autonomous execution]]
- [[concepts/open-source-ai|open-source AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-source_artificial_intelligence)
- [[concepts/qwen38-27b|Qwen3.8 27B]]
- [[concepts/gemini-25-flash|Gemini 2.5 Flash]]

## Related Entities
- [[entities/fahd-mirza|Fahd Mirza]]
- [[entities/nous-research|Nous Research]]
- [[entities/hermes-agent|Hermes Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Hermes_Agent)
- [[entities/qwen38-27b|Qwen3.8 27B]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- YouTube — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)
- LinkedIn — [Wikipedia](https://en.wikipedia.org/wiki/LinkedIn)