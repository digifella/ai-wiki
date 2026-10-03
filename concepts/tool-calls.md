---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "ai-agents"
  - "inference"
  - "moe"
  - "nvidia"
  - "nemotron"
  - "latency-optimization"
  - "tool-calls"
  - "function-calling"
  - "latent-moe"
  - "open-source"
  - "local-llm"
aliases:
  - "Tool Calling"
  - "Function Calling"
  - "Agent Tool Use"
summary: Tool calls are structured outputs enabling LLMs to invoke external functions, with NVIDIA Nemotron Lightning optimizing this execution layer via LatentMoE architectures.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-17T20:46:22+00:00" }
group: developer-tooling-clis
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Tool Calls

Mechanisms by which [[concepts/large-language-model|Large Language Model]] interact with external systems, APIs, or functions to retrieve information or perform actions. Critical for bridging the gap between [[concepts/reasoning|Reasoning]] and Execution in agentic workflows.

## Core Concepts
- **Definition**: Structured output format (e.g., JSON) instructing the host environment to invoke a specific function with defined arguments.
- **Purpose**: Overcomes [[concepts/context-length|Context Window]] limitations and enables real-time data access, [[concepts/computation|computation]], and state management.
- **Lifecycle**: Detection → Argument Parsing → Execution → Result Injection → Response Generation.

## Optimization & Infrastructure
- **Latency Reduction**: Minimizing time between Token Generation and function execution is critical for long-running agents.
- **[[concepts/efficient-inference|Efficient Inference]]**: Utilizing specialized models for tool execution reduces overhead.
- **Open Source Ecosystem**: The landscape is rapidly evolving with community-driven innovations. See [[lab-notes/2026-08-18-Six-Trending-Open-Source-AI-Projects-Local-LLMs-and-AI-A|Six Trending Open-Source AI Projects: Local LLMs and AI Agents]] for recent trends in local LLM management and [[concepts/ai-native-communication|AI-native communication]] tools.

## References
- [Six Trending Open-Source AI Projects: Local LLMs and AI Agents](https://www.youtube.com/watch?v=1RTq_EWv2Yo)
