---
type: concept
domain: tools-platforms
tags:
  - "foundry-local"
  - "chat-completion"
  - "model-installation"
  - "winget"
  - "powershell"
  - "microsoft"
aliases:
  - "Foundry Local Chat"
  - "LLM Chat API"
summary: Instructions for installing Microsoft Foundry Local models using the winget package manager.
updated: 2026-05-23
group: apis-integrations-mcp
---
# Chat Completion

Chat Completion refers to a class of [[concepts/ai-models|AI models]] and services that generate conversational [[concepts/responses|responses]] based on user input. These [[concepts/models|models]] process [[concepts/text|text]] prompts and produce coherent continuations or answers, forming the basis of chatbot [[concepts/software|applications]] and interactive AI systems. Chat completion models are fundamental to modern [[concepts/ai-chatbots|conversational AI]] platforms and are widely integrated into development tools and enterprise software.

## Installation via Winget

[[concepts/microsoft-foundry-local|Microsoft Foundry Local]] provides a local [[concepts/adoption|implementation]] of chat completion models that can be installed using the [[concepts/winget-package-management|Windows Package Manager]] ([[entities/winget|winget]]). To install [[concepts/gpu-accelerated-inference|Foundry Local]] through PowerShell, users can execute the command `[[concepts/winget-install|winget install]] Microsoft.FoundryLocal`. This approach allows developers to run chat completion models locally on their machines without relying on [[concepts/cloud-based-services|cloud-based services]], enabling offline operation and reducing latency for compatible workflows.

## Considerations

While local chat completion models offer advantages in terms of [[concepts/privacy|privacy]] and [[concepts/accessibility|accessibility]], alternative services such as [[concepts/automated-information-pipelines|OpenClaw]] may present [[concepts/cost|cost]] or functionality tradeoffs depending on specific [[concepts/scenarios|use cases]] and [[concepts/deployment|deployment]] requirements.
## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]