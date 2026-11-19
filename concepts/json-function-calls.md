---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "function-calling"
  - "on-device"
  - "efficiency"
  - "needle-3"
  - "automation"
  - "json-function-calls"
  - "on-device-automation"
  - "tool-use"
  - "local-inference"
aliases:
  - "On-Device Function Calling"
  - "Needle 3 Automation"
summary: JSON function calls enable LLMs to interact with external tools via structured output, with recent advancements like Needle 3 focusing on efficient, low-latency execution on tiny devices.
updated: 2026-10-04
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-18T20:46:35+00:00" }
group: data-pipelines-sync-storage
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# JSON function calls

JSON function calls represent a standard mechanism for [[concepts/large-language-models]] to interact with [[concepts/external-tools|external tools]], [[concepts/open-standard-protocols|APIs]], and software systems. By outputting [[concepts/json-structuring|structured data]] in [[concepts/json-format|JSON format]], LLMs can trigger specific actions, retrieve real-time data, or perform computations beyond their training scope.

## Core Concepts

- **[[concepts/structured-output|Structured Output]]**: The model generates a JSON object containing a function name and its arguments, adhering to a predefined schema.
- **[[concepts/acting|Tool Use]]**: Enables the LLM to act as an orchestrator, delegating specific tasks to external services or local scripts.
- **[[concepts/custom-schemas|Schema Definition]]**: Requires explicit definition of available functions, their parameters, and data types to ensure valid [[concepts/json-generation|JSON generation]].
- **Latency & Cost**: Traditional [[concepts/tool-calls|function calling]] relies on cloud-based LLMs, introducing network latency and API costs.

## On-Device Efficiency

Recent advancements focus on reducing dependency on large cloud models for routine [[concepts/function-calling|function calling]] tasks.

- **[[entities/needle-3|Needle 3]]**: A new [[concepts/automation-foundation-model|automation foundation model]] designed for [[concepts/tiny-devices|tiny devices]], enabling efficient [[concepts/on-device-function-calling|on-device function calling]] without [[concepts/demystifying-llms|large language models]].
- **[[concepts/efficient-operation|Resource Optimization]]**: Eliminates the need for [[concepts/token-by-token-text-generation|token-by-token generation]] overhead associated with traditional LLMs for simple routing tasks.
- **[[concepts/privacy|Privacy]] & [[concepts/speed|Speed]]**: Processing locally reduces data [[concepts/exposure|exposure]] and improves response times for time-sensitive automation.

For detailed technical analysis, see [[lab-notes/2026-09-19-Needle-3-Efficient-On-Device-Function-Calling-Without-La|Needle 3: Efficient On-Device Function Calling Without Large Language Models]].

## References

- [Needle 3: Efficient On-Device Function Calling Without Large Language Models](https://www.youtube.com/watch?v=qbN559fQn7k)
