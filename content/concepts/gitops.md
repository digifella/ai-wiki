---
type: concept
domain: tools-platforms
summary: GitOps applies DevOps principles to infrastructure and application deployment using Git as the single source of truth for code and configuration.
updated: 2026-05-23
group: developer-tooling-clis
---
# GitOps

GitOps is an operational framework that applies DevOps principles to infrastructure and [[concepts/application-deployment|application deployment]], using [[entities/git|Git]] as the single source of truth for both [[concepts/code|code]] and configuration.

## Core Principles
- **Declarative State**: System state is defined declaratively in Git repositories.
- **Automated [[concepts/deployment|Deployment]]**: Changes to Git trigger automated deployment to target environments.
- **Continuous [[concepts/verification|Verification]]**: Systems continuously verify their state against the desired state in Git.

## How It Works
1. Developers commit code/configuration changes to a Git repository.
2. GitOps controller (e.g., Argo CD, Flux) detects changes and applies them to infrastructure.
3. Controller continuously reconciles environment state with Git repository.

## Related Concepts
- Bootable container: [[entities/ibm|IBM]] concept extending [[concepts/containerization|containerization]] to OS management, enabling streamlined [[concepts/deployment|deployment]] of underlying operating systems mirroring application [[concepts/containerization|containerization]] (See: 2026 04 14 [[concepts/operating-system-deployment|Bootable container concept]] from [[entities/ibm|IBM]]).
