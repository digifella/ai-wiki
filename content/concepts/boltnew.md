---
type: concept
domain: tools-platforms
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
updated: 2026-05-23
group: developer-tooling-clis
---
# Boltnew

[[entities/boltnew|Boltnew]] is a structured method for building [[concepts/software|software]] products using [[concepts/claude-ai|Claude]] [[concepts/code-generation|code generation]]. It prioritizes written specifications over conversational prompts, using markdown-based documentation as the foundation for product development. This approach aims to provide clarity and [[concepts/logical-consistency|consistency]] across both initial [[concepts/design|design]] and ongoing iterations.

## Documentation and Planning

The method centers on creating a [[concepts/product-requirements-document|Product Requirements Document]] ([[concepts/prd|PRD]]) in [[concepts/markdown|markdown]] format. This document captures the product [[concepts/computer-vision|vision]], feature specifications, and development requirements in a structured, written form. By establishing clear written specifications upfront, Boltnew seeks to reduce [[concepts/ambiguity|ambiguity]] in communication with AI code generation systems and maintain consistency across development phases.

## Task Management

Boltnew incorporates a task manager for coordinating work across [[concepts/subagents|subagents]]. This allows different components of development to be distributed and tracked, with each [[entities/agent|agent]] working from the same documented specification. The task management system helps ensure that [[concepts/parallel-work-streams|parallel work streams]] remain aligned with the original PRD and established requirements.
