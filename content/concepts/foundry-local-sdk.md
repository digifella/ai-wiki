---
type: concept
domain: tools-platforms
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
updated: 2026-05-01
---
# Foundry Local Sdk

Foundry Local SDK is a [[concepts/coding|software development]] kit designed for building [[concepts/ai-technologies|artificial intelligence]] [[concepts/software|applications]] that execute locally on end-user devices rather than requiring cloud infrastructure. It supports [[concepts/deployment|deployment]] across multiple platforms including [[entities/windows|Windows]] PCs, macOS, and mobile devices, enabling developers to create AI-powered applications with reduced dependency on remote servers.

## Use Cases and Advantages

[[concepts/local-execution|Local execution]] of [[concepts/ai-models|AI models]] offers several practical benefits: reduced latency for user interactions, improved [[concepts/privacy|privacy]] by keeping data on-device, and lower operational costs compared to [[concepts/cloud-ai|cloud-based AI]] services. These characteristics make the SDK particularly relevant for applications requiring real-time responsiveness or handling sensitive data that users prefer not to transmit externally.

## Technical Scope

The SDK provides the tools and libraries necessary to optimize AI models for resource-constrained environments typical of consumer devices. This involves [[concepts/model-quantization|model compression]], efficient [[concepts/inference|inference]] engines, and platform-specific optimizations to ensure applications run smoothly despite the computational limitations of local [[concepts/hardware|hardware]] compared to server-grade infrastructure.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]