---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "machine-learning"
  - "open-source"
  - "ai-models"
  - "software-licensing"
  - "nvidia-nemotron"
  - "glm-5.2"
  - "alibaba"
  - "document-parsing"
  - "ocr"
aliases:
  - "Open Source AI Model"
  - "Public Model"
  - "Transparent ML Model"
  - "Nemotron-3 Model"
  - "GLM-5.2"
  - "OvisOCR2"
summary: An open-source model is a machine learning system with publicly available source code, training data, and weights for inspection and modification, exemplified by the NVIDIA Nemotron-3 family, GLM-5.2, and Alibaba's OvisOCR2.
updated: 2026-07-30
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-30" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Open-Source Model

A [[concepts/machine-learning|machine learning]] model whose source code, [[concepts/training-data|training data]], and [[concepts/weights|weights]] are publicly available for inspection, modification, and redistribution.

## Example: NVIDIA Nemotron-3 Family

[[entities/nvidia|NVIDIA]] recently released the [[concepts/nemotron-3-family|Nemotron-3 family]] of [[concepts/reasoning-models|open-source models]], featuring three sizes:

* **[[entities/nano|Nano]]:** 30-billion parameters (3-billion active via [[concepts/mixture-of-experts|Mixture-of-Experts]] architecture).
* **Super:** 100-billion parameters (10-billion active).
* **Ultra:** 500-billion parameters (50-billion active).

The [[entities/gary-explains]] channel reviewed the **[[concepts/nemotron-3-nano-model|Nemotron-3 Nano]]** in their video [Nematron 3](https://www.youtube.com/watch?v=8gFAuYxJZ-A).

## Example: Alibaba OvisOCR2

[[entities/alibaba|Alibaba]] has open-sourced **[[concepts/local-inference|OvisOCR2]]**, a compact local [[concepts/document-parsing|document parsing]] model designed to surpass traditional pipeline-based methods.

* **Capabilities:** Demonstrates remarkable power for document parsing despite its compact size.
* **Analysis:** Detailed breakdown available in [[lab-notes/2026-07-30-Alibaba-OvisOCR2-Compact-Local-Document-Parsing-Model-Su|Alibaba OvisOCR2: Compact Local Document Parsing Model Surpassing Pipelines]].
* **Source:** [Alibaba OvisOCR2: Compact Local Document Parsing Model Surpassing Pipelines](https://www.youtube.com/watch?v=RsR6cbovMfI)
