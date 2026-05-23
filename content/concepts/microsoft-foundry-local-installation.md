---
type: concept
domain: tools-platforms
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
updated: 2026-05-23
group: platforms-runtimes-environments
---
# Microsoft Foundry Local Installation

[[concepts/microsoft-foundry-local|Microsoft Foundry Local]] is a [[concepts/coding|local development]] environment that enables [[concepts/deployment|deployment]] and [[concepts/testing|testing]] of [[concepts/ai-models|AI models]] on personal machines or on-premises infrastructure. It provides developers with tools to run [[concepts/inference|inference]] workloads without relying on cloud-based APIs, addressing [[concepts/scenarios|scenarios]] where latency, [[concepts/cost|cost]], or data [[concepts/privacy|privacy]] requirements necessitate [[concepts/local-execution|local execution]].

## Installation

[[concepts/agent-factory|Microsoft Foundry]] Local is installed via the [[concepts/winget-package-management|Windows Package Manager]] using the command `[[concepts/winget-install|winget install]] Microsoft.FoundryLocal`. This streamlined installation process makes the tool accessible to [[entities/windows|Windows]] developers without requiring manual configuration or complex [[concepts/setup|setup]] procedures.

## Supported Models and Capabilities

The platform supports [[concepts/local-deployment|local deployment]] of various [[concepts/models|models]], including the [[entities/phi-4|Phi-4]] family of models for [[concepts/chat-completion|chat completion]] and other language tasks. By [[concepts/running|running]] models locally, developers can evaluate model performance, test [[concepts/integration|integration]] with [[concepts/software|applications]], and iterate on prompts or [[concepts/fine-tuning|fine-tuning]] strategies without incurring API costs or introducing external dependencies.
## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]