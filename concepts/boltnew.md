---
type: concept
domain: tools-platforms-infrastructure
group: developer-tooling-clis
tags:
  - "claude-code"
  - "product-development"
  - "markdown-based"
  - "prd"
  - "subagents"
  - "task-management"
  - "ai-tooling"
aliases:
  - "Claude Product Build Method"
summary: A method for using Claude code to build products by creating a markdown-based product requirements document and a task manager for subagents.
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Boltnew

Boltnew is a structured methodology for developing software products that leverages Claude's code generation capabilities through a documentation-first strategy. The process mandates the creation of a comprehensive, markdown-based product requirements document (PRD) prior to any implementation. This initial phase establishes logical consistency and clarity, serving as a stable reference point to guide subsequent development steps and ensure alignment with the original intent.

The framework employs a task manager to coordinate multiple subagents, effectively breaking down high-level requirements into executable tasks. By delegating specific components to specialized agents, the system manages the complexity of large-scale application development. This multi-agent architecture allows for parallel processing of distinct features or modules while maintaining adherence to the central PRD.

This approach aims to reduce hallucination and context drift common in direct code generation prompts. By enforcing a strict separation between planning and execution, Boltnew seeks to improve the reliability and maintainability of AI-assisted software projects. The methodology is particularly suited for complex applications where clear architectural boundaries and detailed specifications are critical for success.
