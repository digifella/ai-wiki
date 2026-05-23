---
type: concept
domain: undecided
tags:
  - "astro"
  - "web-framework"
  - "ssg"
  - "ssr"
  - "islands-architecture"
  - "javascript"
  - "typescript"
  - "performance"
aliases:
  - "Astro framework"
  - "Astro SSG"
summary: A content-driven web framework that enables zero-JavaScript delivery by default through islands architecture while supporting static generation, server-side rendering, and multiple UI framework integrations.
updated: 2026-05-23
group: needs-review
---
# Astro

Content-driven web framework optimized for performance via Islands [[concepts/architecture|Architecture]], enabling zero-JS delivery by default. Supports [[concepts/static-website|Static Site]] Generation, Server-Side Rendering, and hybrid rendering modes while allowing [[concepts/integration|integration]] of multiple UI frameworks within a single project.

## Integrations & Ecosystem
* [[lab-notes/2026-05-18-Astro-Email-Sending-with-Cloudflare-Workers-and-Email-Ro|Astro Email Sending with Cloudflare Workers and Email Routing]]
* Extends backend [[concepts/capabilities|capabilities]] by deploying [[concepts/cloudflare-workers|Cloudflare Workers]] directly through Astro integrations.
* Implements transactional [[entities/email|email]] workflows using [[concepts/cloudflare-email-service|Cloudflare Email Routing]] to forward domain emails to Worker handlers for processing.
* Utilizes Cloudflare bindings to securely access secrets and configuration data within serverless functions.
* Supports granular rendering directives (`client:load`, `client:only`, etc.) to [[concepts/power|control]] hydration and optimize Core Web Vitals.
