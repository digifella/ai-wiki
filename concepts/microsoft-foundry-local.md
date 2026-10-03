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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=business-strategy name=Business & Strategy

# Microsoft Foundry Local

Microsoft Foundry Local is a development utility designed to facilitate the installation and execution of Microsoft Foundry models on local hardware. By shifting the deployment model from cloud-based infrastructure to local machines, the tool allows development teams to leverage Foundry's artificial intelligence and machine learning capabilities within their own controlled environments. This local-first approach is intended to reduce network latency and support offline development workflows, providing greater flexibility for teams with specific data privacy or connectivity requirements.

The tool is deeply integrated into the Windows ecosystem, utilizing PowerShell scripts and the Windows Package Manager (winget) to automate the setup and management processes. This integration simplifies the technical overhead typically associated with configuring local AI models, enabling developers to quickly provision the necessary dependencies and runtime environments. The automation features ensure consistent deployments across different Windows machines, streamlining the onboarding process for new team members and reducing configuration drift.

By operating locally, Microsoft Foundry Local supports scenarios where data sovereignty is a primary concern, as model weights and inference data remain on-premises rather than being transmitted to external servers. This capability is particularly relevant for enterprise developers who require strict control over their computational resources and data handling practices. The tool serves as a bridge between the broader Foundry ecosystem and local development needs, ensuring that core functionalities are accessible regardless of cloud availability.
