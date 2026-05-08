---
type: concept
domain: security-infrastructure
tags:
  - "security"
  - "encryption"
  - "web"
  - "networking"
  - "ssl-certificates"
  - "tls-protocol"
  - "digital-certificates"
  - "web-security"
  - "certificate-authorities"
aliases:
  - "SSL/TLS certificates"
  - "Digital certificates"
summary: "A digital certificate that authenticates a website's identity and enables encrypted communication using the SSL/TLS protocol."
updated: 2026-04-28
group: privacy-security-guardrails
---
# SSL Certificates

A SSL certificate is a digital certificate that authenticates the identity of a website and enables an encrypted [[concepts/connection|connection]] using the TLS protocol.

## Key Concepts

- **[[concepts/purpose|Purpose]]**: Ensures [[concepts/secure|secure]] communication between a client and a server by encrypting data.
- **Types**:
  - Domain Validated (DV) certificates
  - [[concepts/organization|Organization]] Validated (OV) certificates
  - Extended Validation (EV) certificates
- **Issuers**: Certificate Authorities (CAs) like Let's Encrypt, DigiCert, and GlobalSign.
- **Expiration**: Certificates have a validity period, typically 1-2 years.

## Implementation

- **Generation**: Using tools like OpenSSL or automated services like Let's Encrypt.
- **[[concepts/deployment|Deployment]]**: Installed on web servers (e.g., Apache, Nginx) or Cloudflare.
- **Renewal**: Automated renewal is recommended to avoid expiration.

## Related Concepts

- Public Key Infrastructure (PKI)
- HTTPS
- TLS Handshake

## Recent Updates

- 2026-04-14: Cloudflare [[concepts/setup|setup]] for SSL certificates. (2026 04 14 [[concepts/claude-ai|Claude]] Cloudflare setup)

## Backlinks

- 2026 04 14 Claude Cloudflare setup

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-CLI-Tools-for-Enhancing-Claude-Code-AI-Capabilities-and-Workflow|CLI Tools for Enhancing Claude Code AI Capabilities and Workflow]] · [▶ source](https://www.youtube.com/watch?v=uULvhQrKB_c)