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
updated: 2026-10-04
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=business-strategy name=Business & Strategy

# Microsoft Foundry Local

Microsoft Foundry Local is a development utility designed to facilitate the installation and execution of Microsoft Foundry models on local hardware. By shifting the deployment model from cloud-based infrastructure to local machines, the tool allows development teams to leverage artificial intelligence and machine learning capabilities within their own controlled environments. This local-first approach is intended to reduce network latency and enhance data privacy by keeping sensitive information on-premises.

The utility operates primarily through command-line interfaces, utilizing PowerShell and the winget package manager to streamline the setup process. This method enables users to quickly provision necessary dependencies and model weights without requiring complex manual configuration. The design prioritizes ease of use for developers who need to test or integrate Foundry models into local workflows.

## Technical Implementation

The tool relies on standard Windows package management systems to handle software distribution. By leveraging winget, it ensures that compatible versions of required libraries and runtime environments are installed correctly. PowerShell scripts are used to orchestrate the installation steps and manage the execution of the models, providing a consistent experience across different development setups.

## Use Cases

Microsoft Foundry Local is primarily targeted at scenarios where data sovereignty and low-latency inference are critical. It supports development teams working with proprietary data that cannot be transmitted to external cloud services. Additionally, it serves as a resource for developers who need to prototype applications or evaluate model performance in an isolated, offline-capable environment.
