---
type: concept
domain: tools-platforms
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
  - "Bolt.New"
  - "Claude Product Build Method"
summary: A method for using Claude code to build products by creating a markdown-based product requirements document and a task manager for subagents.
updated: 2026-05-01
---
# Boltnew

Boltnew is a method for building [[concepts/software|software]] products using [[concepts/ai-assisted-coding|Claude code]] generation. The approach is structured around [[concepts/markdown|markdown]]-based documentation that serves as the foundation for product development. Rather than relying solely on conversational prompts, Boltnew establishes written specifications that guide both the initial design and ongoing development work.

## Core Components

The method begins with creating a [[concepts/product-requirements-document|Product Requirements Document]] (PRD) in markdown format. This document specifies the product's functionality, features, and requirements in structured text. Once the PRD is established, a task manager file (typically named [[concepts/taskmanagermd|Taskmanager]].md) is generated to break down the overall product development into discrete, manageable tasks. This task manager acts as a coordination tool that [[concepts/claude-ai|Claude]] references when working on specific components or features, helping to maintain [[concepts/logical-consistency|consistency]] and clarity across the development process.

## Workflow

The markdown-based approach allows Claude to reference both high-level product specifications and task-specific [[concepts/instructions|instructions]] throughout the development cycle. The task manager enables Claude to understand dependencies between components, track progress through different work items, and organize subagent responsibilities for larger projects. This structured method aims to improve coherence and maintainability compared to conversation-driven development alone.
