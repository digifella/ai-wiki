---
type: concept
domain: tools-platforms
summary: A Virtual Private Server (VPS) is a virtual machine hosted on a physical server that provides dedicated resources and root access.
updated: 2026-05-23
group: platforms-runtimes-environments
---
# VPS

A **[[concepts/virtual-private-server-vps|Virtual Private Server (VPS)]]** is a virtual machine hosted on a physical server, providing dedicated resources ([[concepts/cpu|CPU]], [[concepts/ram|RAM]], [[entities/storage|storage]]) with root access and [[concepts/disconnection|isolation]] from other users. It balances [[concepts/cost|cost]] and performance for hosting [[concepts/software|applications]], websites, and personal services.

## Key Features
- **Dedicated Resources**: Fixed allocation of CPU/RAM (unlike shared hosting)
- **Root Access**: Full OS [[concepts/personalization|customization]] and package installation
- **Scalability**: Resources easily upgraded via provider dashboard
- **Persistent Infrastructure**: Maintains state between reboots

## Common Use Cases
- [[concepts/running|Running]] personal AI assistants like [[concepts/local-ai-assistants|Clawdbot]] ([[concepts/openclaw|OpenClaw]]), which connects to services ([[entities/gmail|Gmail]], [[entities/asana|Asana]], [[entities/slack|Slack]], [[entities/telegram|Telegram]]) via [[concepts/chat-application|chat interface]]
- Hosting custom applications (Nextcloud, WordPress, databases)
- Setting up [[concepts/developer-platforms|development environments]] with [[concepts/docker|Docker]]
- Deploying APIs and microservices

## Setup Considerations
- **Provider Selection**: Hostinger (video-recommended), DigitalOcean, Linode, [[entities/amazon-web-services|AWS]] EC2
- **Initial Configuration**: Install OS ([[entities/ubuntu|Ubuntu]]), configure UFW firewall, [[concepts/secure|secure]] [[concepts/ssh|SSH]]
- **Cost [[concepts/range|Range]]**: $3–$50/month depending on resources
- **[[concepts/security|Security]]**: Mandatory SSH key [[concepts/authentication|authentication]], regular updates

## Related Concepts
- [[concepts/cloud-computing]]
- Server
- [[concepts/docker|Docker]]
- [[entities/openclaw]]

2026 04 14 Clawbot [[entities/matthew-berman|Matthew Berman]] channel
