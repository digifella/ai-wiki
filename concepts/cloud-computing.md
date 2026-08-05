---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "distributed-computing"
  - "infrastructure"
  - "virtualization"
  - "scalability"
  - "on-demand-resources"
  - "ai-tools"
  - "security"
  - "remote-access"
aliases:
  - "cloud platforms"
  - "cloud services"
summary: On-demand computing resources and services delivered over networks, referenced in contexts involving computational infrastructure and AI model deployment.
updated: 2026-07-11
group: platforms-runtimes-environments
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Cloud Computing

[[concepts/cloud-based-solutions|Cloud computing]] is the delivery of computing resources and services over networks, typically the internet, rather than through locally maintained physical infrastructure. Resources including servers, [[entities/storage|storage]], databases, and [[concepts/compute-capacity|processing power]] are hosted in remote [[concepts/techno-economics|data centers]] operated by cloud service providers. Users access these resources on-demand, paying for consumption rather than investing in and maintaining their own hardware. This model has become foundational to modern computational infrastructure, enabling organizations to scale resources dynamically according to their needs.

## Service Models

[[concepts/cloud-based-services|Cloud services]] are typically organized into three primary models. Infrastructure as a Service (IaaS) provides virtualized computing resources over the internet, allowing users to rent servers and storage. Platform as a Service (PaaS) offers development and deployment environments where applications can be built and managed without underlying infrastructure complexity.

## Security and Access Management

[[concepts/secure|Secure]] access to cloud infrastructure is critical for administration and DevOps workflows. [[concepts/SSH|Secure Shell (SSH)]] serves as an indispensable tool for secure [[concepts/remote-access|remote access]], encryption, and [[concepts/server-administration|server administration]] within cloud environments. Key aspects include:

*   **Secure Remote Access:** SSH provides encrypted communication channels for managing [[entities/linux|Linux]] servers and cloud instances, replacing insecure protocols like Telnet.
*   **Encryption:** Ensures [[concepts/data-integrity|data integrity]] and confidentiality during transmission between client and server.
*   **DevOps Integration:** Essential for automation, [[concepts/configuration-management|configuration management]], and continuous deployment pipelines in cloud infrastructure.

For a detailed technical breakdown of SSH mechanics, see [[lab-notes/2026-06-25-SSH-Fundamentals-Secure-Remote-Access-and-Encryption-Exp|SSH Fundamentals: Secure Remote Access and Encryption Explained]].

## References

*   [SSH Fundamentals: Secure Remote Access and Encryption Explained](https://www.youtube.com/watch?v=XCb4E5B-AZI)
