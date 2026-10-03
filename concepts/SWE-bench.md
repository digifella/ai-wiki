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
updated: 2026-10-01
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
title: SWE-bench Verified
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Swe Bench

SWE-bench is a benchmark dataset designed to evaluate large language models on real-world software engineering tasks. Unlike synthetic coding challenges or isolated algorithmic problems, SWE-bench sources actual issues and pull requests from open-source repositories. This approach requires models to demonstrate practical capabilities, including understanding existing codebases, grasping project-specific contexts, and generating solutions that integrate with established codebases.

The dataset focuses on the full lifecycle of software maintenance, requiring models to not only identify bugs or feature requests but also to produce valid patches that resolve the identified issues. By utilizing real-world data, the benchmark assesses a model's ability to navigate complex dependency structures and adhere to specific coding standards within diverse projects.

SWE-bench Verified represents a curated subset of the original dataset, designed to address potential noise and ambiguity in the original issue-resolution pairs. This verified version ensures higher quality evaluation by confirming that the provided patches correctly resolve the stated issues without introducing regressions, thereby providing a more reliable metric for model performance in practical software engineering scenarios.

## Source Notes
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
