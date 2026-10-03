---
type: concept
domain: creative-pursuits
tags:
  - "open-source"
  - "generative-video"
  - "local-deployment"
  - "pinokio"
  - "ai-models"
  - "nvidia"
aliases:
  - "Local AI Video"
  - "Open Video Models"
  - "Pinokio Video Generation"
summary: Open-source generative video models such as LTX-2 and Wan can be deployed on local hardware using Pinokio to ensure privacy and avoid subscription fees. NVIDIA's entry into open-source models with Nemotron 3 Ultra marks a strategic shift toward model development.
updated: 2026-07-12
group: video-content-systems
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Open-source AI video models

[[concepts/reasoning-models|Open-source models]] designed for [[concepts/ai-generated-videos|Generative Video]] that can be deployed on private hardware, offering an alternative to proprietary, cloud-based platforms.

## Key Models
- [[entities/ltx-2|LTX-2]]
- Wan
- [[entities/nvidia|NVIDIA]]: Released **[[entities/nemotron-3-ultra|Nemotron 3 Ultra]]**, marking a significant [[concepts/strategic-pivot|strategic shift]] from pure hardware manufacturing to becoming a major player in [[concepts/open-source|open-source]] AI models [[lab-notes/2026-06-06-NVIDIAs-Nemotron-3-Ultra-Open-Source-AI-Model-Strategy|NVIDIA's Nemotron 3 Ultra: Open-Source AI Model Strategy]].

## Local Deployment via Pinokio
[[concepts/pinokio-tool|Pinokio]] is a tool used to install and run [[concepts/ai-models|AI models]] locally on a PC.
- **Advantages**:
    - **[[concepts/privacy|Privacy]]**: Processes data locally without cloud [[concepts/exposure|exposure]].
    - **[[concepts/cost-efficient-solutions|Cost-efficiency]]**: No subscription fees.
    - **Unrestricted use**: No [[concepts/rate-limits|usage limits]] or rate-limiting.
- **[[concepts/hardware-requirements|Hardware Requirements]]**:
    - Requires a dedicated GPU due to high computational intensity.

## Related Concepts
- [[concepts/local-ai-processing|Local AI execution]]
- [[concepts/generative-ai]]
- [[concepts/general-purpose-computing|GPU Computing]]

## Sources
- 2026 04 14 Making AI videos locally with [[entities/pinokio|Pinokio]] [[entities/kevin-stratvert|Kevin Stratvert]] channel
- 2026 06 06 [[lab-notes/2026-06-06-NVIDIAs-Nemotron-3-Ultra-Open-Source-AI-Model-Strategy|NVIDIA's Nemotron 3 Ultra: Open-Source AI Model Strategy]] [[entities/prompt-engineering|Prompt Engineering]] channel
