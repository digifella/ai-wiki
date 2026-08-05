---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "web-applications"
  - "portability"
  - "offline-capability"
  - "encapsulation"
  - "single-file-deployment"
  - "ai-coding-benchmarks"
aliases:
  - "Self-Contained Web Application"
  - "Standalone Web App"
  - "Single-File Web App"
  - "Offline-First Web App"
summary: "A self-contained web app is an independent software application that bundles all necessary logic, assets, and data to eliminate external dependencies for deployment and execution."
updated: 2026-07-18
group: web-publishing-quartz-websites
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Self-Contained Web App

A **Self-Contained [[concepts/web-application|Web App]]** is a software application designed to operate independently, often bundling all necessary resources ([[concepts/open-source-philosophy|logic]], assets, data) within a single file or minimal [[concepts/directory-structure|directory structure]], eliminating external dependencies for deployment or execution.

## Key Characteristics
- **Portability**: Can be distributed and run without complex server setups.
- **Encapsulation**: Logic, styling, and data are tightly coupled.
- **Offline Capability**: Often designed to function without persistent network connectivity.

## AI Implementation Benchmarks
Recent evaluations have tested [[concepts/demystifying-llms|Large Language Models]] on their ability to generate code for self-contained applications, specifically using the **Concrete Plant Simulator** as a complexity benchmark.

- **Performance Analysis**: A comparative study evaluated [[concepts/kimi-k3]], [[entities/claude-fable-5]], and [[entities/glm-52]] on this specific [[concepts/coding-challenge|coding challenge]].
- **Source Reference**: See [[lab-notes/2026-07-17-AI-Model-Comparison-Concrete-Plant-Simulator-Coding-Chal|AI Model Comparison: Concrete Plant Simulator Coding Challenge Performance]] for detailed metrics.
- **Video Evidence**: [AI Model Comparison: Concrete Plant Simulator Coding Challenge Performance](https://www.youtube.com/watch?v=TgvxDQoPIjk) demonstrates the practical output differences between models when tasked with building self-contained [[concepts/simulation|simulation]] logic.

## Related Concepts
- Single Page Application
- Progressive [[concepts/web-application|Web App]]
- Code Golf
