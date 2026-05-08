---
domain: tools-platforms
group: apis-integrations-mcp
type: concept
tags:
  - "api"
  - "cloudflare"
  - "integration"
updated: 2026-04-14
backlinks:
  - "2026 04 14 Claude Cloudflare setup"
---
## Source Notes
- 2026-04-23: Cloudflare [[concepts/tunnel|Tunnel]] [[concepts/setup|Setup]] for [[entities/cortex-api|Cortex API]]
1. Install cloudflared ([[entities/wsl2|WSL2]])
- Download and install
```bash
curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o /usr/local/bin/cloudflared
chmod +x /usr/local/bin/cloudflared
```
2. Quick [[concepts/tunnel|tunnel]] (temporary)
- 2026-04-14: Cloudflare setup for [[entities/api]] integration
- Configuration steps for [[concepts/secure|secure]] API access
- Tunnel management for internal services
## Related Concepts
- [[entities/api]]
- Cloudflare
- [[concepts/integration]]
- Cortex
## Source Notes