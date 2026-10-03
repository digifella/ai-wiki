---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "claude-code"
  - "ai-coding-assistant"
  - "customization"
  - "context-engineering"
  - "workflow-optimization"
  - "tutorials"
aliases:
  - "Claude Code Guide"
  - "AI Coding Assistant Hooks"
summary: This page contains guides and walkthroughs for using the Claude Code AI coding assistant, covering features, customization, and context engineering techniques.
updated: 2026-10-04
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: web-publishing-quartz-websites
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Hooks

Hooks serve as extension points within [[concepts/ai-assisted-coding|Claude Code]], allowing developers to customize and extend the [[concepts/spec-driven-development|AI coding assistant]]'s functionality without modifying its core source code. These [[concepts/causes|mechanisms]] provide a structured approach to injecting custom behavior at specific stages of the [[concepts/software-development-process|coding workflow]], enabling integration with [[concepts/external-tools|external tools]], services, and custom scripts. By leveraging hooks, users can tailor the assistant's operations to fit specific project requirements or organizational standards.

The primary utility of hooks lies in their ability to modify how Claude Code processes code, interprets context, and generates suggestions. Developers register handlers at predefined integration points to intercept or alter the [[concepts/flow|flow]] of information between the assistant and the [[concepts/coding-workspace|development environment]]. This capability supports advanced [[concepts/ai-performance-optimization|context engineering]] techniques, ensuring that the AI receives relevant project-specific data and adheres to defined coding practices during execution.
## Source Notes
- 2026-04-14: I Looked At Amazon After They Fired 16,000 Engineers. Their AI Broke Everything.
- 2026-04-07: [[lab-notes/2026-04-07-Anti-Gravity-AI-Agent-Data-Export-and-GitHub-Sync-for-Control|Anti Gravity AI Agent Data Export and GitHub Sync for Control]] · [▶ source](https://www.youtube.com/watch?v=x2uJdV00WgI)
- 2026-04-08: [[lab-notes/2026-04-08-From-Clasp-Locker-to-YKK-The-History-and-Engineering-of-Zippers|From Clasp Locker to YKK The History and Engineering of Zippers]] · [▶ source](https://www.youtube.com/watch?v=9szhjhO9epA)
- 2026-04-18: [[lab-notes/2026-04-18-AI-Coding-Cost-Overruns-Vercel-Bill-Lessons-from-Journey-Kits-Deployme|AI Coding Cost Overruns Vercel Bill Lessons from Journey Kits Deployme]] · [▶ source](https://www.youtube.com/watch?v=XG3ksRWsUJ8)
- 2026-04-25: Claude Code · [▶ source](https://www.youtube.com/watch?v=UHVFcUzAGlM)
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)
