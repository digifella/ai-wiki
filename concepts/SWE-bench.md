---
type: concept
domain: tools-platforms-infrastructure
group: developer-tooling-clis
tags:
  - "benchmark"
  - "software-engineering"
  - "llm-evaluation"
  - "code-generation"
  - "dataset"
  - "open-source"
aliases:
  - "SWE-bench Verified"
summary: This page is a stub for information regarding SWE-bench Verified.
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
title: SWE-bench Verified
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Swe Bench

SWE-bench is a benchmark dataset designed to evaluate large language models on real-world software engineering tasks. Unlike synthetic coding challenges or isolated algorithmic problems, SWE-bench sources actual issues and pull requests from open-source repositories. This approach requires models to demonstrate practical capabilities, including understanding existing codebases, grasping project-specific contexts, and generating solutions that integrate with complex, pre-existing systems.

The dataset focuses on the full lifecycle of software maintenance, specifically targeting the resolution of GitHub issues. By using real-world data, it assesses a model's ability to navigate large codebases, comprehend nuanced requirements, and produce correct, compilable code changes. This distinguishes it from benchmarks that test only isolated function generation or theoretical knowledge.

SWE-bench Verified is a curated subset of the original dataset. It addresses potential inconsistencies in the original benchmark by providing verified ground truth solutions and ensuring that the test instances are reproducible and correctly labeled. This verification process aims to provide a more reliable metric for evaluating the practical utility of language models in automated software engineering scenarios.

## Source Notes
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
