---
type: entity
tags:
  - "entity"
  - "llm-access"
  - "portable-devices"
  - "remote-inference"
  - "lm-studio"
  - "private-ai"
  - "local-models"
aliases:
  - "LM Studio Remote Access"
  - "Portable Device LLM Access"
summary: LM Link is a remote LLM access feature for LM Studio that enables running language models on portable devices.
updated: 2026-07-23
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-23" }
---
# LM Link

LM Link is a remote access feature within LM Studio that allows portable and lightweight devices to connect to language models running on more powerful machines. Rather than requiring substantial computational resources locally, LM Link enables devices with limited processing capability to offload model inference to a remote system while maintaining a local interface for interaction.

## Functionality

LM Link works by establishing a network connection between a client device and a server running LM Studio. The client device sends inference requests to the remote machine, which processes them using the loaded language model and returns results over the network. This architecture allows users to run sophisticated language models on resource-constrained devices such as tablets, older computers, or mobile devices by leveraging the computational power of a more capable host machine.

## Use Cases

The feature is useful for scenarios where users want to work with language models on portable devices without purchasing additional hardware. By centralizing model execution on a single powerful machine, multiple devices can share access to the same models, reducing the need for redundant installations and computational resources across different machines.

## Source Notes
- 2026-04-10: [[lab-notes/2026-04-10-LM-Studio-LM-Link-Remote-LLM-Access-for-Portable-Devices|LM Studio LM Link Remote LLM Access for Portable Devices]] · [▶ source](https://www.youtube.com/watch?v=PqBrnip-ZLw)
