---
wiki-ingested: true
title: "Using Microsoft Foundry Local models"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: business-strategy
group: products-operations-business-economics
---
<!-- domain-nav -->
> domain-badge slug=business-strategy name=Business & Strategy

# Using [[concepts/microsoft-foundry-local|Microsoft Foundry Local]] [[concepts/models|models]]

---
---


To install Foundry Local using PowerShell, I'll run `winget install Microsoft.FoundryLocal`.

|     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- |
| Alias | Device | Task | File Size | [[concepts/license|License]] | Model ID |
| [[entities/phi-4|phi-4]] | GPU | [[concepts/chat-completion|chat-completion]] | 8.37 GB | [[entities/mit|MIT]] | Phi-4-cuda-gpu:1 |
| phi-4 | GPU | chat-completion | 8.37 GB | MIT | Phi-4-trtrtx-gpu:1 |
| phi-4 | GPU | chat-completion | 8.83 GB | MIT | phi-4-openvino-gpu:1 |
| phi-4 | GPU | chat-completion | 8.37 GB | MIT | Phi-4-generic-gpu:1 |
| phi-4 | [[concepts/cpu|CPU]] | chat-completion | 10.16 GB | MIT | Phi-4-generic-cpu:1 |
| [[entities/phi-35-mini|phi-3.5-mini]] | GPU | chat-completion | 2.13 GB | MIT | Phi-3.5-mini-instruct-cuda-gpu:1 |
| phi-3.5-mini | GPU | chat-completion | 1.95 GB | MIT | Phi-3.5-mini-instruct-openvino-gpu:1 |
| phi-3.5-mini | GPU | chat-completion | 2.13 GB | MIT | phi-3.5-mini-instruct-trtrtx-gpu:1 |
| phi-3.5-mini | GPU | chat-completion | 2.16 GB | MIT | Phi-3.5-mini-instruct-generic-gpu:1 |
| phi-3.5-mini | CPU | chat-completion | 2.53 GB | MIT | Phi-3.5-mini-instruct-generic-cpu:1 |
| phi-3-mini-128k | GPU | chat-completion | 2.13 GB | MIT | Phi-3-mini-128k-instruct-cuda-gpu:1 |
| phi-3-mini-128k | GPU | chat-completion | 2.13 GB | MIT | phi-3-mini-128k-instruct-trtrtx-gpu:1 |
| phi-3-mini-128k | GPU | chat-completion | 2.27 GB | MIT | Phi-3-mini-128k-instruct-openvino-gpu:1 |
| phi-3-mini-128k | GPU | chat-completion | 2.13 GB | MIT | Phi-3-mini-128k-instruct-generic-gpu:1 |
| phi-3-mini-128k | CPU | chat-completion | 2.54 GB | MIT | Phi-3-mini-128k-instruct-generic-cpu:2 |
| phi-3-mini-4k | GPU | chat-completion | 2.13 GB | MIT | Phi-3-mini-4k-instruct-cuda-gpu:1 |
| phi-3-mini-4k | GPU | chat-completion | 2.13 GB | MIT | phi-3-mini-4k-instruct-trtrtx-gpu:1 |
| phi-3-mini-4k | GPU | chat-completion | 2.01 GB | MIT | Phi-3-mini-4k-instruct-openvino-gpu:1 |
| phi-3-mini-4k | GPU | chat-completion | 2.13 GB | MIT | Phi-3-mini-4k-instruct-generic-gpu:1 |
| phi-3-mini-4k | CPU | chat-completion | 2.53 GB | MIT | Phi-3-mini-4k-instruct-generic-cpu:2 |
| mistral-7b-[[entities/v0|v0]].2 | GPU | chat-completion | 3.98 GB | [[concepts/apache-2.0|apache-2.0]] | mistralai-Mistral-7B-Instruct-v0-2-cuda-gpu:1 |
| mistral-7b-v0.2 | GPU | chat-completion | 4.27 GB | apache-2.0 | Mistral-7B-Instruct-v0-2-openvino-gpu:1 |
| mistral-7b-v0.2 | GPU | chat-completion | 3.98 GB | Apache-2.0 | mistralai-Mistral-7B-Instruct-v0-2-trtrtx-gpu:1 |
| mistral-7b-v0.2 | GPU | chat-completion | 4.07 GB | apache-2.0 | mistralai-Mistral-7B-Instruct-v0-2-generic-gpu:1 |
| mistral-7b-v0.2 | CPU | chat-completion | 4.07 GB | apache-2.0 | mistralai-Mistral-7B-Instruct-v0-2-generic-cpu:2 |
| deepseek-r1-14b | GPU | chat-completion | 9.83 GB | MIT | deepseek-r1-distill-qwen-14b-cuda-gpu:3 |
| deepseek-r1-14b | GPU | chat-completion | 9.83 GB | MIT | deepseek-r1-distill-qwen-14b-trtrtx-gpu:1 |
| deepseek-r1-14b | GPU | chat-completion | 7.87 GB | MIT | DeepSeek-R1-Distill-Qwen-14B-openvino-gpu:1 |
| deepseek-r1-14b | GPU | chat-completion | 10.27 GB | MIT | deepseek-r1-distill-qwen-14b-generic-gpu:3 |
| deepseek-r1-14b | CPU | chat-completion | 11.51 GB | MIT | deepseek-r1-distill-qwen-14b-generic-cpu:3 |
| deepseek-r1-7b | GPU | chat-completion | 5.28 GB | MIT | deepseek-r1-distill-qwen-7b-cuda-gpu:3 |
| deepseek-r1-7b | GPU | chat-completion | 4.19 GB | MIT | DeepSeek-R1-Distill-Qwen-7B-openvino-gpu:1 |
| deepseek-r1-7b | GPU | chat-completion | 5.58 GB | MIT | deepseek-r1-distill-qwen-7b-generic-gpu:3 |
| deepseek-r1-7b | CPU | chat-completion | 6.43 GB | MIT | deepseek-r1-distill-qwen-7b-generic-cpu:3 |
| deepseek-r1-7b | GPU | chat-completion | 5.28 GB | MIT | DeepSeek-R1-Distill-Qwen-7B-trtrtx-gpu:1 |
| qwen2.5-coder-0.5b | GPU | chat-completion | 0.52 GB | apache-2.0 | qwen2.5-coder-0.5b-instruct-cuda-gpu:4 |
| qwen2.5-coder-0.5b | GPU | chat-completion | 0.36 GB | apache-2.0 | qwen2.5-coder-0.5b-instruct-openvino-gpu:2 |
| qwen2.5-coder-0.5b | GPU | chat-completion | 0.52 GB | MIT | qwen2.5-coder-0.5b-instruct-trtrtx-gpu:2 |
| qwen2.5-coder-0.5b | GPU | chat-completion | 0.52 GB | apache-2.0 | qwen2.5-coder-0.5b-instruct-generic-gpu:4 |
| qwen2.5-coder-0.5b | CPU | chat-completion | 0.80 GB | apache-2.0 | qwen2.5-coder-0.5b-instruct-generic-cpu:4 |
| phi-4-mini-[[concepts/reasoning|reasoning]] | GPU | chat-completion | 3.15 GB | MIT | Phi-4-mini-reasoning-cuda-gpu:3 |
| phi-4-mini-reasoning | GPU | chat-completion | 2.47 GB | MIT | Phi-4-mini-reasoning-openvino-gpu:2 |
| phi-4-mini-reasoning | GPU | chat-completion | 3.15 GB | MIT | Phi-4-mini-reasoning-generic-gpu:3 |
| phi-4-mini-reasoning | CPU | chat-completion | 4.52 GB | MIT | Phi-4-mini-reasoning-generic-cpu:3 |
| qwen2.5-0.5b | GPU | chat-completion | 0.52 GB | apache-2.0 | qwen2.5-0.5b-instruct-cuda-gpu:4 |
| qwen2.5-0.5b | GPU | chat-completion | 0.36 GB | apache-2.0 | qwen2.5-0.5b-instruct-openvino-gpu:2 |
| qwen2.5-0.5b | GPU | chat-completion | 0.52 GB | MIT | qwen2.5-0.5b-instruct-trtrtx-gpu:2 |
| qwen2.5-0.5b | GPU | chat-completion | 0.68 GB | apache-2.0 | qwen2.5-0.5b-instruct-generic-gpu:4 |
| qwen2.5-0.5b | CPU | chat-completion | 0.80 GB | apache-2.0 | qwen2.5-0.5b-instruct-generic-cpu:4 |
| qwen2.5-1.5b | GPU | chat-completion | 1.25 GB | apache-2.0 | qwen2.5-1.5b-instruct-cuda-gpu:4 |
| qwen2.5-1.5b | GPU | chat-completion | 1.00 GB | apache-2.0 | qwen2.5-1.5b-instruct-openvino-gpu:2 |
| qwen2.5-1.5b | GPU | chat-completion | 1.25 GB | MIT | qwen2.5-1.5b-instruct-trtrtx-gpu:2 |
| qwen2.5-1.5b | GPU | chat-completion | 1.51 GB | apache-2.0 | qwen2.5-1.5b-instruct-generic-gpu:4 |
| qwen2.5-1.5b | CPU | chat-completion | 1.78 GB | apache-2.0 | qwen2.5-1.5b-instruct-generic-cpu:4 |
| qwen2.5-coder-1.5b | GPU | chat-completion | 1.25 GB | apache-2.0 | qwen2.5-coder-1.5b-instruct-cuda-gpu:4 |
| qwen2.5-coder-1.5b | GPU | chat-completion | 0.99 GB | apache-2.0 | qwen2.5-coder-1.5b-instruct-openvino-gpu:2 |
| qwen2.5-coder-1.5b | GPU | chat-completion | 1.25 GB | MIT | qwen2.5-coder-1.5b-instruct-trtrtx-gpu:2 |
| qwen2.5-coder-1.5b | GPU | chat-completion | 1.25 GB | apache-2.0 | qwen2.5-coder-1.5b-instruct-generic-gpu:4 |
| qwen2.5-coder-1.5b | CPU | chat-completion | 1.78 GB | apache-2.0 | qwen2.5-coder-1.5b-instruct-generic-cpu:4 |
| phi-4-mini | GPU | chat-completion | 3.60 GB | MIT | Phi-4-mini-instruct-cuda-gpu:5 |
| phi-4-mini | GPU | chat-completion | 2.15 GB | MIT | phi-4-mini-instruct-openvino-gpu:2 |
| phi-4-mini | GPU | chat-completion | 3.72 GB | MIT | Phi-4-mini-instruct-generic-gpu:5 |
| phi-4-mini | CPU | chat-completion | 4.80 GB | MIT | Phi-4-mini-instruct-generic-cpu:5 |
| qwen2.5-14b | GPU | chat-completion | 8.79 GB | apache-2.0 | qwen2.5-14b-instruct-cuda-gpu:4 |
| qwen2.5-14b | GPU | chat-completion | 4.79 GB | apache-2.0 | qwen2.5-14b-instruct-openvino-gpu:2 |
| qwen2.5-14b | GPU | chat-completion | 8.79 GB | MIT | qwen2.5-14b-instruct-trtrtx-gpu:2 |
| qwen2.5-14b | GPU | chat-completion | 9.30 GB | apache-2.0 | qwen2.5-14b-instruct-generic-gpu:4 |
| qwen2.5-14b | CPU | chat-completion | 11.06 GB | apache-2.0 | qwen2.5-14b-instruct-generic-cpu:4 |
| qwen2.5-coder-14b | GPU | chat-completion | 8.79 GB | apache-2.0 | qwen2.5-coder-14b-instruct-cuda-gpu:4 |
| qwen2.5-coder-14b | GPU | chat-completion | 9.08 GB | apache-2.0 | qwen2.5-coder-14b-instruct-openvino-gpu:2 |
| qwen2.5-coder-14b | GPU | chat-completion | 8.79 GB | MIT | qwen2.5-coder-14b-instruct-trtrtx-gpu:2 |
| qwen2.5-coder-14b | GPU | chat-completion | 8.79 GB | apache-2.0 | qwen2.5-coder-14b-instruct-generic-gpu:4 |
| qwen2.5-coder-14b | CPU | chat-completion | 11.06 GB | apache-2.0 | qwen2.5-coder-14b-instruct-generic-cpu:4 |
| qwen2.5-coder-7b | GPU | chat-completion | 4.73 GB | apache-2.0 | qwen2.5-coder-7b-instruct-cuda-gpu:4 |
| qwen2.5-coder-7b | GPU | chat-completion | 4.80 GB | apache-2.0 | qwen2.5-coder-7b-instruct-openvino-gpu:2 |
| qwen2.5-coder-7b | GPU | chat-completion | 4.73 GB | MIT | qwen2.5-coder-7b-instruct-trtrtx-gpu:2 |
| qwen2.5-coder-7b | GPU | chat-completion | 4.73 GB | apache-2.0 | qwen2.5-coder-7b-instruct-generic-gpu:4 |
| qwen2.5-coder-7b | CPU | chat-completion | 6.16 GB | apache-2.0 | qwen2.5-coder-7b-instruct-generic-cpu:4 |
| qwen2.5-7b | GPU | chat-completion | 4.73 GB | apache-2.0 | qwen2.5-7b-instruct-cuda-gpu:4 |
| qwen2.5-7b | GPU | chat-completion | 4.79 GB | apache-2.0 | qwen2.5-7b-instruct-openvino-gpu:2 |
| qwen2.5-7b | GPU | chat-completion | 5.49 GB | MIT | qwen2.5-7b-instruct-trtrtx-gpu:2 |
| qwen2.5-7b | GPU | chat-completion | 5.20 GB | apache-2.0 | qwen2.5-7b-instruct-generic-gpu:4 |
| qwen2.5-7b | CPU | chat-completion | 6.16 GB | apache-2.0 | qwen2.5-7b-instruct-generic-cpu:4 |
| [[concepts/gpt-oss-20b|gpt-oss-20b]] | GPU | chat-completion | 9.65 GB | apache-2.0 | gpt-oss-20b-cuda-gpu:1 |
| deepseek-r1-1.5b | GPU | chat-completion | 1.43 GB | MIT | DeepSeek-R1-Distill-Qwen-1.5B-trtrtx-gpu:1 |