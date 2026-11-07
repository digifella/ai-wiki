---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "functional-testing"
  - "ai-coding"
  - "evaluation"
  - "qwen"
  - "deepseek"
  - "black-box-testing"
  - "qwen-3.8"
  - "deepseek-harness"
aliases:
  - "Functional QA"
  - "Requirement-Based Testing"
summary: Functional testing verifies software behavior against specifications using a black-box approach, with recent evaluations showing the DeepSeek Harness outperforms other agents for Qwen 3.8 27B.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-30T20:30:59+00:00" }
group: developer-tooling-clis
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Functional Testing

**Functional testing** is a [[concepts/quality-assurance|quality assurance]] process that verifies that software applications function according to specified requirements. It focuses on inputs and outputs without regard to internal [[concepts/codebase-architecture|code structure]] ([[concepts/black-box-models|black-box]] testing).

## AI-Assisted Functional Testing

Recent advancements in [[concepts/large-language-models|Large Language Models]] (LLMs) and [[concepts/coding|coding]] harnesses are transforming how functional tests are generated, executed, and evaluated.

### Evaluation of Coding Harnesses for Qwen 3.8 27B

A comparative evaluation of [[concepts/ai-assisted-coding|AI coding]] harnesses using the **[[entities/qwen|Qwen]] 3.8 27B** model highlights significant performance differences in generating and executing functional test cases.

*   **Tested Harnesses:**
    *   [[entities/pi-coding-agent|Pi Coding Agent]]
    *   [[concepts/hermes-agent|Hermes Agent]]
    *   [[concepts/ai-agent|DeepSeek Harness]]
*   **Key Findings:**
    *   The **[[concepts/deepseek-harness|DeepSeek Harness]]** outperformed the other two agents in terms of [[concepts/code-generation|code generation]] accuracy and execution [[concepts/software-reliability|reliability]].
    *   Tests focused on generating functional test scripts and validating [[concepts/model-behavior|model behavior]] under specific constraints.
    *   The evaluation demonstrated that [[concepts/harness|harness]] selection critically impacts the efficacy of AI-driven testing workflows.

For detailed metrics and methodology, see: [[lab-notes/2026-08-31-Qwen-3.8-27B-AI-Coding-Harness-Evaluation-DeepSeek-Harne|Qwen 3.8 27B AI Coding Harness Evaluation: DeepSeek Harness Outperforms]]

## Core Principles

*   **Requirement-Based:** Tests are derived directly from functional specifications.
*   **Black-Box Approach:** Internal code structure is ignored; focus is on user-facing behavior.
*   **Validation:** Ensures the system does what it is supposed to do.

## Related Concepts

*   Non-Functional Testing
*   Test Automation
*   AI in [[concepts/software-engineering|Software Engineering]]

## References

*   [Qwen 3.8 27B AI Coding Harness Evaluation: DeepSeek Harness Outperforms](https://www.youtube.com/watch?v=sSySOPGNdjw)
