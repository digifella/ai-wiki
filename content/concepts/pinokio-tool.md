---
type: concept
domain: tools-platforms
tags:
  - "ai-video-generation"
  - "open-source-models"
  - "local-deployment"
  - "video-synthesis"
  - "developer-tools"
aliases:
  - "Pinokio"
  - "Pinokio AI Video Tool"
summary: A tool used to run open-source AI video models like LTX-2 and Wan locally on a PC.
updated: 2026-05-23
group: developer-tooling-clis
---
# Pinokio Tool

[[entities/pinokio|Pinokio]] is a platform designed to simplify the installation and execution of [[concepts/open-source|open-source]] [[concepts/ai-models|AI models]] on personal computers. It functions as a runtime environment and [[concepts/package-manager|package manager]], abstracting away technical complexities that would otherwise require [[concepts/command-line-interface|command-line]] expertise and manual dependency management. The tool is particularly focused on making [[concepts/generative-ai-models|generative AI models]] more accessible to non-technical users.

## Video Generation

The platform is commonly used to run open-source [[concepts/ai-driven-video-production|AI video generation]] [[concepts/models|models]] locally, including projects like [[concepts/ltx-2|LTX-2]] and [[entities/wan|Wan]]. Rather than relying on [[concepts/cloud-based-services|cloud-based services]] with associated costs or [[concepts/usage-limits|usage restrictions]], Pinokio allows users to execute these models directly on their own [[concepts/hardware|hardware]]. This approach reduces latency, preserves [[concepts/privacy|privacy]], and eliminates per-generation fees, though it requires adequate local [[concepts/computational-resources|computational resources]].

## Functionality

Pinokio handles the environment [[concepts/setup|setup]], model downloading, and provides a graphical interface for interacting with installed models. Users can browse available models within the platform, install them with a single action, and then run [[concepts/inference|inference]] tasks through a straightforward UI. The tool manages the underlying technical requirements, including framework installation and [[concepts/gpu-acceleration|GPU acceleration]] where applicable.
