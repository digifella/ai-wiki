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
updated: 2026-07-13
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Boltnew

Boltnew is a structured methodology for developing software products using Claude's code generation capabilities. The approach prioritizes creating a markdown-based product requirements document (PRD) before implementation begins. This documentation-first strategy establishes clarity and logical consistency early in the development process, providing a stable reference point that guides subsequent work and reduces ambiguity about project scope and objectives.

## Core Components

The methodology consists of two primary elements working in concert. The first is a markdown PRD that formally specifies the product's features, behavior, constraints, and technical requirements. The second is a task manager system that coordinates work across multiple subagents, breaking down the overall product specification into discrete, manageable units of work that can be executed independently or in sequence.

## Application

Boltnew is designed to bridge the gap between high-level product vision and implementation detail. By requiring explicit documentation of requirements before code generation begins, the methodology aims to reduce rework and miscommunication in Claude-assisted development workflows. The task management component enables larger projects to be decomposed into parallel or sequential work streams, with each subagent operating from the same documented specification.
