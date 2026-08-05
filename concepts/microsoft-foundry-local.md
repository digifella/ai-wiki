---
type: concept
domain: business-strategy
group: products-operations-business-economics
tags:
  - "local-models"
  - "microsoft-foundry"
  - "powershell"
  - "winget"
  - "model-deployment"
  - "gpu-computing"
aliases:
  - "Foundry Local"
  - "Microsoft Foundry Local Installation"
summary: A tool for installing and running Microsoft Foundry models locally using PowerShell and winget.
updated: 2026-07-16
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=business-strategy name=Business & Strategy

# Microsoft Foundry Local

Microsoft Foundry Local is a development tool that enables developers to install and run Microsoft Foundry models on local machines rather than relying on cloud-based deployment. The tool is designed to integrate with the Windows ecosystem, using PowerShell and the Windows Package Manager (winget) to automate installation and management processes. This local-first approach allows development teams to work with Foundry's AI and machine learning capabilities within their own infrastructure, reducing latency and enabling offline development workflows.

## Installation and Deployment

Installation of Microsoft Foundry Local is facilitated through winget, which simplifies the acquisition and configuration of required dependencies. PowerShell scripts automate much of the setup process, reducing manual configuration steps and enabling reproducible deployments across multiple machines. This approach is particularly suited for organizations that prefer to maintain model infrastructure within their own environments rather than adopting cloud-hosted alternatives.

## Use Cases

Microsoft Foundry Local supports development scenarios where teams need rapid iteration, data privacy considerations, or reduced cloud costs. The local deployment model is applicable during the development and testing phases of AI projects, where models can be refined before transitioning to production environments. Organizations with existing Windows-based infrastructure can leverage existing operational practices and tooling when adopting Microsoft Foundry Local.
