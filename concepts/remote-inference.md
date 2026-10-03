---
type: concept
domain: ai-agents
tags:
  - "inference"
  - "remote-execution"
  - "distributed-computing"
  - "model-serving"
  - "llm-deployment"
  - "computational-offloading"
  - "local-first"
  - "privacy"
  - "ollama"
aliases:
  - "distributed inference"
  - "server-based inference"
  - "local inference"
summary: Inference execution performed on remote servers rather than locally, commonly used with server-based LLMs. Contrasts with local-first frameworks like OpenJarvis that prioritize on-device execution for privacy and control.
updated: 2026-06-27
group: model-efficiency-compression
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-02T00:18:38+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Remote Inference

Remote [[concepts/inference|inference]] refers to the execution of inference tasks on external servers rather than on local devices or machines. In this architecture, computational requests are sent to remote systems where models process inputs and return results to the client. This approach contrasts with [[concepts/edge-deployment|local inference]], where models run directly on the user's device or edge hardware. Remote inference is particularly common in [[concepts/cloud-based-ai-services|cloud-based AI services]] and server-based deployments of [[concepts/large-language-model-llm|large language models]].

## Architecture and Workflow

In a remote inference setup, a client application sends input data to a remote server or service endpoint over a network [[concepts/connection|connection]]. The server hosts the [[concepts/machine-learning-model|machine learning model]] and performs the actual computation, then returns the output back to the client. This separation of inference computation from the client allows for scalable resource management but introduces latency and privacy considerations.

## Local-First Alternatives

While remote inference dominates cloud-based AI, there is a growing movement toward local-first architectures that prioritize privacy, control, and offline capability.

*   **OpenJarvis Framework**: A local-first, open-source [[concepts/personal-ai-framework|personal AI framework]] developed by [[entities/stanford-university|Stanford University]]'s Hazy Research and Scaling Intelligence Labs. It enables users to run powerful AI models directly on personal devices, reducing reliance on cloud services.
*   **Integration with Ollama**: OpenJarvis leverages [[concepts/ollama|Ollama]] to manage [[concepts/local-ai-hosting|local model execution]], allowing for efficient tracking of [[concepts/computational-resources|computational resources]] (e.g., wattage) and ensuring data remains on-device.
*   **Privacy and Control**: By shifting inference from remote servers to local hardware, frameworks like OpenJarvis address concerns regarding [[concepts/data-sovereignty|data sovereignty]] and network dependency.

For detailed implementation notes and context on this framework, see [[lab-notes/2026-06-27-OpenJarvis-Stanfords-Local-First-Personal-AI-Framework-w|OpenJarvis: Stanford's Local-First Personal AI Framework with Ollama]].

## References

*   [OpenJarvis: Stanford's Local-First Personal AI Framework with Ollama](https://www.youtube.com/watch?v=0fdbQvwOrgQ)
