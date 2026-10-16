---
type: concept
domain: tools-platforms-infrastructure
group: apis-integrations-mcp
tags:
  - "concept"
  - "local-ai"
  - "sdk"
  - "foundry"
  - "cross-platform"
  - "bare-metal-performance"
aliases:
  - "Foundry SDK"
  - "Local Foundry"
summary: SDK for building AI applications optimized to run locally across PC, macOS, and mobile platforms.
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Foundry Local Sdk

The Foundry Local SDK is a software development kit designed to facilitate the creation and deployment of artificial intelligence applications that operate directly on end-user devices. By enabling models to run locally on personal computers, macOS systems, and mobile platforms, the SDK allows applications to function without requiring constant internet connectivity. This architecture significantly reduces latency associated with remote computation and enhances data privacy by keeping sensitive information on the client side.

The toolkit provides optimized libraries and inference engines tailored for diverse hardware configurations, ensuring efficient performance across varying computational capabilities. It supports the integration of various model formats, allowing developers to deploy pre-trained or fine-tuned models directly within their applications. This approach eliminates the need for external API calls for core inference tasks, thereby improving reliability in offline or low-bandwidth environments.

Development within the Foundry Local SDK focuses on cross-platform compatibility, abstracting the underlying hardware differences between Windows, macOS, and mobile operating systems. This abstraction layer simplifies the deployment process for developers, who can target multiple device types with a single codebase. The SDK includes utilities for model quantization and optimization, which help reduce memory footprint and processing time, making complex AI models viable for resource-constrained devices.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
