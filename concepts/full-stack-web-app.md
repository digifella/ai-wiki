---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "full-stack"
  - "web-applications"
  - "firebase"
  - "user-authentication"
  - "realtime-database"
  - "cloud-storage"
  - "local-llm"
  - "ai-assisted-coding"
aliases:
  - "Full-Stack Web Application"
  - "full-stack-web-application"
summary: A full-stack web application integrates frontend, backend, database, and authentication systems into a cohesive user experience, increasingly augmented by local LLMs for development workflows.
updated: 2026-07-14
group: web-publishing-quartz-websites
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

- "full-stack"
  - "[[concepts/web-development|web-development]]"
  - "firebase"
  - "user-auth"
  - "firebase-integration"
  - "realtime-database"
  - "cloud-[[entities/storage|storage]]"
  - "security-rules"
  - "[[concepts/google-search|google]]-[[entities/ai-studio|ai-studio]]"
  - "[[concepts/local-llm-integration|local-llm-integration]]"

# Full-Stack Web App

A full-stack [[concepts/web-application|web application]] integrates frontend, backend, database, and [[concepts/authentication|authentication]] systems into a cohesive [[concepts/user-experience-design|user experience]]. Key components include:

- **Frontend**: [[concepts/user-interface|User interface]] built with frameworks like [[entities/react|React]] or Vue.js
- **Backend**: Server [[concepts/open-source-philosophy|logic]] handling business rules and [[concepts/open-standard-protocols|APIs]]
- **Database**: Persistent [[entities/storage|storage]] (e.g., [[concepts/firebase-firestore|Firebase Realtime Database]], Firestore)
- **Authentication**: [[concepts/secure|Secure]] user management

## AI-Assisted Development & Local LLMs

Recent developments highlight the integration of [[concepts/desktop-based-llms|local Large Language Models]] (LLMs) into the [[concepts/full-stack-development|full-stack development]] lifecycle, specifically for code generation and [[concepts/asana-integration|task automation]].

- **Local Execution**: Models such as Qwen 3.6 27B (6-bit quantized) can run entirely locally on high-memory hardware (e.g., 128GB Mac), offering privacy and reduced latency compared to cloud-based APIs.
- **[[concepts/performance-benchmarking|Performance Benchmarking]]**: Evaluations like TitleForge assess the capability of local models to replace cloud-based coding assistants (e.g., Claude Code) in real-time coding challenges.
- **Reference**: See [[lab-notes/2026-07-14-Qwen-3.6-27B-Local-LLMs-TitleForge-Performance-Replacing|Qwen 3.6 27B Local LLM's TitleForge Performance: Replacing Claude Code]] for detailed [[concepts/ai-performance-evaluation|performance metrics]] and session logs.

## References

- [Qwen 3.6 27B Local LLM's TitleForge Performance: Replacing Claude Code](https://www.youtube.com/watch?v=6NhLP_YGZVw)
