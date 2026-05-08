---
type: concept
domain: tools-platforms
tags:
  - "gitops"
  - "devops"
  - "infrastructure-as-code"
  - "containerization"
  - "declarative-state"
  - "automated-deployment"
  - "continuous-verification"
  - "state-reconciliation"
aliases:
  - "gitops"
summary: "GitOps applies DevOps principles to infrastructure and application deployment using Git as the single source of truth for code and configuration."
updated: 2026-04-15
group: developer-tooling-clis
---
# GitOps

GitOps is an operational framework that applies DevOps principles to infrastructure and [[concepts/application-deployment|application deployment]], using Git as the single source of truth for both code and configuration.

## Core Principles
- **Declarative State**: System state is defined declaratively in Git repositories.
- **Automated [[concepts/deployment|Deployment]]**: Changes to Git trigger automated deployment to target environments.
- **Continuous [[concepts/verification|Verification]]**: Systems continuously verify their state against the desired state in Git.

## How It Works
1. Developers commit code/configuration changes to a Git repository.
2. GitOps controller (e.g., Argo CD, Flux) detects changes and applies them to infrastructure.
3. Controller continuously reconciles environment state with Git repository.

## Related Concepts
- Bootable container: IBM concept extending [[concepts/containerization|containerization]] to OS management, enabling streamlined deployment of underlying operating systems mirroring application containerization (See: 2026 04 14 [[concepts/operating-system-deployment|Bootable container concept]] from IBM).
