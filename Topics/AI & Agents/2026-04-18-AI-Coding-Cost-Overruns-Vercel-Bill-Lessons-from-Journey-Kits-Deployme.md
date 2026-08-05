---
wiki-ingested: true
title: "AI Coding Cost Overruns Vercel Bill Lessons from Journey Kits Deployment"
created: "2026-04-18 06:17"
date: 2026-04-18
source: lab-summary
source_type: lab-summary
provider:
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
  - "enrich"
web-enrich: true
wiki-ready: true
domain: ai-agents
group: coding-agents-dev-workflows
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## AI Coding Cost Overruns: Vercel Bill Lessons from Journey Kits Deployment
**Clip title:** The dark side of [[concepts/vibe-coding|vibe coding]]...
**Author / channel:** Matthew Berman
**URL:** https://www.youtube.com/watch?v=XG3ksRWsUJ8

### Summary
The video features Matthew Berman's personal account of receiving an unexpectedly high $824 Vercel bill after just two weeks of using an [[concepts/smart-coding-agent|AI coding assistant]] to deploy his project, "Journey Kits." This experience, which he describes as a "jump scare," prompted him to reflect on the current state of AI coding and the overlooked aspects of [[entities/developer|developer]] responsibility in an increasingly AI-driven environment. He admits that his rapid development pace, guided by AI, led him to neglect crucial details about his deployment settings.

Berman identifies several mistakes that contributed to his exorbitant bill. Firstly, Vercel's default settings had selected the "Turbo" build machine, the highest-cost option, rather than a more economical "Elastic" tier which would have significantly reduced costs per build minute. Secondly, he had "On-Demand Concurrent Builds" enabled, meaning that his frequent deployments (often dozens a day, sometimes duplicates due to iterative AI-assisted coding) were all being processed simultaneously, incurring multiple charges. Through community feedback on Twitter, he learned to adjust these settings, opting for the lowest tier build machine and disabling concurrent builds, ensuring deployments were queued sequentially. He also optimized his [[concepts/application-build|build process]] by using GitHub [[concepts/hooks|hooks]] for builds, further reducing build times from several minutes to just seconds.

Expanding on his experience, Berman discusses the broader implications of AI coding. He notes that the rapid advancement of [[concepts/ai-coding-agents|AI coding agents]], exemplified by releases like [[entities/claude-opus|Opus 4.5]], has revolutionized [[concepts/development-speed|development speed]] to the point where even seasoned professionals admit they no longer manually review every line of code. While this accelerates product delivery and empowers more individuals to build software, it also encourages a reliance on AI to choose development services (like Vercel, Resend, Fly.io, Railway) and configurations. Developers, including himself, are thinking less about critical factors such as service costs, scalability, [[concepts/uptime|uptime]], and platform dependency risks – a significant concern for production-grade systems.

The video highlights a shifting paradigm where development interfaces are moving away from traditional code viewing towards chat-based interactions and visual outputs. Tools like [[entities/cursor|Cursor]] now prioritize a conversational experience, with the actual code often minimized or requiring extra steps to view. Berman frames this as a new layer of [[concepts/abstraction|abstraction]], akin to moving from binary to high-level programming languages. However, he raises a crucial concern: as AI increasingly writes and optimizes code for its own understanding and efficiency, humans may eventually lose the ability to fully comprehend or debug the underlying code. This disconnect between human intuition (natural language, which is inherently fuzzy) and machine-optimized code (which is precise but potentially unintelligible to humans) could lead to unforeseen risks and [[concepts/quality-control|quality control]] challenges.

In conclusion, Berman emphasizes that despite the undeniable benefits of AI in accelerating development, a foundational understanding of coding principles, service configurations, and architectural trade-offs remains indispensable. He advocates for developers, especially those new to coding, to invest time in learning these basics. This knowledge is crucial for making informed decisions, mitigating risks, and maintaining oversight in a future where AI will write the vast majority of code, potentially in languages or structures that are not optimized for human readability, leading to a complex interplay of productivity, convenience, and an underlying [[concepts/anxiety|anxiety]] about what we truly understand and control.

## Related Concepts
- [[concepts/ai-coding-cost-overruns|AI coding cost overruns]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_coding_cost_overruns)
- [[concepts/deployment-settings|deployment settings]] — [Wikipedia](https://en.wikipedia.org/wiki/deployment_settings)
- [[concepts/developer-responsibility|developer responsibility]] — [Wikipedia](https://en.wikipedia.org/wiki/developer_responsibility)
- [[concepts/machine-learning|machine learning]] — [Wikipedia](https://en.wikipedia.org/wiki/machine_learning)
- [[concepts/project-context-preservation|project management]] — [Wikipedia](https://en.wikipedia.org/wiki/project_management)
