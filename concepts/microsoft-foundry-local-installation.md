---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "concept"
  - "microsoft-foundry"
  - "local-installation"
  - "powershell"
  - "model-deployment"
  - "gpu-inference"
  - "phi-4"
aliases:
  - "Foundry Local Setup"
  - "Microsoft Foundry Local Models"
summary: Microsoft Foundry Local is installed via PowerShell using `winget install Microsoft.FoundryLocal` and supports local model deployment including phi-4 for chat completion tasks.
updated: 2026-07-11
group: platforms-runtimes-environments
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Microsoft Foundry Local Installation

[[concepts/microsoft-foundry-local|Microsoft Foundry Local]] is a [[concepts/coding-workspace|development environment]] that enables the deployment and testing of [[concepts/ai-models|AI models]] on local machines and on-premises infrastructure. It allows developers to run [[concepts/inference|inference]] workloads without depending on cloud-based [[concepts/open-standard-protocols|APIs]], making it particularly useful for [[concepts/scenarios|scenarios]] where [[concepts/space-based-data-centers|latency reduction]], [[concepts/cost-optimization|cost optimization]], or [[concepts/privacy|data privacy]] are important considerations.

## Installation and Setup

[[concepts/agent-factory|Microsoft Foundry]] Local is installed via PowerShell using the [[concepts/winget-package-management|Windows Package Manager]] with the command `winget install Microsoft.FoundryLocal`. This streamlined [[concepts/installation|installation]] process makes it accessible for developers working in [[entities/windows|Windows]] environments who want to quickly set up a [[concepts/cross-platform-ai-development|local AI development]] workspace.

## Model Support

The platform supports [[concepts/local-deployment|local deployment]] of various AI models, including [[entities/phi-4|phi-4]], which can be used for [[concepts/chat-completion|chat completion]] tasks and other [[concepts/language-processing|natural language processing]] applications. This capability allows developers to test and iterate on model implementations without relying on external [[entities/api-calls|API calls]] or [[concepts/cloud-based-services|cloud infrastructure]].

## Use Cases

By enabling [[concepts/local-execution|local execution]] of AI workloads, Microsoft [[concepts/gpu-accelerated-inference|Foundry Local]] addresses key enterprise requirements including reduced inference latency for time-sensitive applications, lower [[concepts/operational-costs|operational costs]] compared to [[concepts/cloud-based-solutions|cloud-based solutions]], and enhanced data privacy by keeping sensitive information on local or on-premises systems rather than transmitting it to external services.
## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
