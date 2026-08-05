---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "ai-development"
  - "software-tools"
  - "claude"
  - "automation"
  - "ai-agents"
  - "code-generation"
  - "security"
  - "openclaw"
aliases:
  - "AI Computer Use"
  - "Claude Computer Use"
  - "Autonomous AI Agents"
summary: AI systems interacting with computers via direct interface manipulation; includes security analysis of platforms like OpenClaw.
updated: 2026-07-11
group: platforms-runtimes-environments
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Computer Use

Computer Use refers to [[concepts/ai-models|AI systems]] designed to interact with computers through direct interface manipulation, combining [[concepts/visual-perception|visual perception]] with programmatic action. Rather than relying solely on [[concepts/open-standard-protocols|APIs]] or [[concepts/code-execution|code execution]], these systems perceive screen content, identify UI elements, and execute [[concepts/commands|commands]] to accomplish tasks across applications. This approach enables AI to function as an [[concepts/ai-agent|autonomous agent]] that operates computers similarly to how humans do, navigating graphical interfaces and taking sequential actions to achieve goals.

## Core Mechanisms

Computer Use systems typically operate by analyzing screenshots or screen feeds to understand the current state of an interface, then determining and executing appropriate actions such as mouse movements, clicks, keyboard input, or form submissions. The visual perception component allows these systems to work with any application that presents a graphical interface, regardless of whether it provides machine-readable APIs. This universality makes Computer Use valuable for automating tasks across [[concepts/vintage-computing|legacy systems]], [[concepts/web-applications|web applications]], and desktop environments.

## Security Risks and Vulnerabilities

The expansion of autonomous capabilities introduces significant [[concepts/security|security]] challenges, particularly regarding system access and [[concepts/data-integrity|data integrity]]:

- **Platform-Specific Risks:** [[entities/openclaw]] and similar platforms face critical security scrutiny; see [[lab-notes/2026-06-05-OpenClaw-Autonomous-AI-Agents-Critical-Security-Risks-an|OpenClaw Autonomous AI Agents: Critical Security Risks and Vulnerabilities]] for detailed analysis of six primary dangers identified by [[entities/ibm-technology|IBM Technology]].
- **Interface Manipulation:** Direct control over mouse and keyboard inputs creates vectors for unauthorized actions if agent behavior is not strictly constrained.
- **Visual Perception Bypass:** Reliance on screenshots rather than APIs may allow agents to be misled by visual spoofing or misinterpretation of UI states, leading to unintended execution paths.
