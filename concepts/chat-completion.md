---
type: concept
domain: tools-platforms-infrastructure
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
updated: 2026-07-11
group: apis-integrations-mcp
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Chat Completion

Chat Completion refers to a class of [[concepts/ai-models|AI models]] and services that generate conversational responses based on user input. These models process text prompts and produce coherent continuations or answers, forming the basis of chatbot applications and interactive AI systems. Chat completion models are fundamental to modern [[concepts/ai-chatbots|conversational AI]] platforms and are widely integrated into development tools and enterprise software.

## Core Functionality

Chat completion models operate by taking a sequence of messages as input and returning a generated message as output. They are trained on [[entities/big-data|large datasets]] of conversational text and use transformer-based architectures to predict the most probable next [[concepts/tokens|tokens]] in a sequence. Unlike other [[concepts/statistical-language-modeling|language model]] tasks, chat completion specifically optimizes for natural [[concepts/communication|dialogue]], including appropriate [[concepts/tone|tone]], context [[concepts/conscious-thought|awareness]], and response coherence across multiple turns of conversation.

## Installation via Winget

[[concepts/microsoft-foundry-local-installation|Microsoft Foundry Local models]] can be installed using the [[entities/winget|winget]] [[concepts/package-manager|package manager]] on [[entities/windows|Windows]] systems. Winget provides a [[concepts/command-line-interaction|command-line interface]] for discovering, downloading, and managing applications and development tools. Users can install [[concepts/gpu-accelerated-inference|Foundry Local]] by specifying the package name in the [[concepts/winget-install|winget install]] command, which handles dependency [[concepts/solution|resolution]] and system configuration automatically. This approach simplifies [[concepts/local-deployment|local deployment]] compared to manual [[concepts/installation|installation]] methods.

## Applications

Chat completion models power a wide range of applications including customer support [[concepts/ai-bots|chatbots]], [[concepts/voice-assistants|virtual assistants]], [[concepts/coding|coding]] helpers, and content generation tools. They are integrated into platforms like [[entities/microsoft|Microsoft]] Teams, [[entities/vs-code|Visual Studio Code]], and various enterprise [[concepts/knowledge-management|knowledge management]] systems. Organizations [[concepts/deployment|deploy]] both cloud-based and locally-hosted chat completion models depending on their requirements for data [[concepts/privacy|privacy]], latency, and operational control.
## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
