---
wiki-ingested: true
domain: tools-platforms
group: apis-integrations-mcp
---
Cloudflare Tunnel Setup for Cortex API

1. Install cloudflared (WSL2)

# Download and install

curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o /usr/local/bin/cloudflared chmod +x /usr/local/bin/cloudflared

2. Quick tunnel (temporary, for testing)

cloudflared tunnel --url http://127.0.0.1:8000
This gives you a random https://xxx-xxx-xxx.trycloudflare.com URL. It changes every restart — fine for testing, not for production.

3. Named tunnel (stable URL, recommended)

# Login to Cloudflare (opens browser)

cloudflared tunnel login

# Create a named tunnel

cloudflared tunnel create cortex-api

# Route a subdomain to it (requires DNS on your Cloudflare domain)

cloudflared tunnel route dns cortex-api cortex.longboardfella.com.au

# Run it

cloudflared tunnel run --url http://127.0.0.1:8000 cortex-api
This gives you a stable https://cortex.longboardfella.com.au URL.

4. Update worker config

Edit /home/longboardfella/cortex\_suite/worker/config.env:

# For quick tunnel (paste the URL cloudflared prints):

CORTEX\_TUNNEL\_URL=https://xxx-xxx-xxx.trycloudflare.com

# For named tunnel:

CORTEX\_TUNNEL\_URL=https://cortex.longboardfella.com.au

5. Set API token ([[concepts/secure|security]])

Pick a shared secret token:

# Generate a random token

python3 -c "import secrets; print(secrets.token\_urlsafe(32))"
Then set it in three places:
Cortex API — set environment variable before starting: export CORTEX\_API\_TOKEN="your-token-here" export CORTEX\_API\_AUTH\_REQUIRED=true uvicorn api.main:app --host 127.0.0.1 --port 8000
Worker — add to worker/config.env: CORTEX\_API\_TOKEN=your-token-here
Website chatbot — add to site/chatbot/config.php on cPanel: define('LOCAL\_CORTEX\_API\_TOKEN', 'your-token-here');

6. Run as a service (optional, keeps tunnel alive)

# Install as systemd service

sudo cloudflared service install

# Or just run in a tmux/screen session

[[entities/tmux|tmux]] new -s tunnel cloudflared tunnel run --url http://127.0.0.1:8000 cortex-api

# Ctrl+B, D to detach

7. Verify end-to-end

# Test tunnel reaches Cortex

curl https://cortex.longboardfella.com.au/health

# Test authenticated search

curl -X POST https://cortex.longboardfella.com.au/search -H "Content-Type: application/json" -H "[[concepts/authorization|Authorization]]: Bearer your-token-here" -d '{"query": "test", "max\_results": 3, "include\_synthesis": false}'

# Test worker [[entities/meta-ai|meta]] sync is reaching the website

curl "https://longboardfella.com.au/admin/queue\_worker\_api.php?action=get\_cortex\_status"
Startup order

1. Start Cortex API (uvicorn)
2. Start Cloudflare Tunnel (cloudflared)
3. Start Worker ([[entities/python|python]] worker/worker.py) — pushes meta within seconds
4. Open Nova chatbot — Cortex pills should appear in quick-actions

❯ is the cloudfared setup under [[entities/wsl|wsl]] run within the venv for cortex or at the root level outside venv?
● Outside the venv — at the root/system level. cloudflared is a standalone binary, not a [[concepts/python-package|Python package]]. It has nothing to do with the Cortex Python environment.

# Install at system level (no venv)

sudo curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o /usr/local/bin/cloudflared sudo chmod +x /usr/local/bin/cloudflared
The Cortex venv is only needed for running the FastAPI (uvicorn) and the worker. The tunnel just forwards HTTP traffic to 127.0.0.1:8000 — it doesn't care what's listening there.
❯ longboardfella@Fastfella:~$  curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o /usr/local/bin/cloudflared chmod +x /usr/local/bin/cloudflared curl: option -o: requires parameter curl: try 'curl --help' or 'curl --manual' for more information -bash: /usr/local/bin/cloudflared: No such file or directory chmod: cannot access '/usr/local/bin/cloudflared': No such file or directory
● The -o and the path got split onto two lines. Run it as one line with sudo:
sudo curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o /usr/local/bin/cloudflared && sudo chmod +x /usr/local/bin/cloudflared
❯ longboardfella@Fastfella:~$ sudo curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o curl: option -o: requires parameter curl: try 'curl --help' or 'curl --manual' for more information longboardfella@Fastfella:~$
● Your terminal is wrapping the line and breaking the command. Try downloading to your home directory first:
sudo curl -L -o /usr/local/bin/cloudflared https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64
Note the -o /path comes right after curl -L instead of at the end — this avoids the line-wrap issue.
❯ longboardfella@Fastfella:~$ sudo curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 % Total    % Received % Xferd  Average Speed  Time    Time    Time  Current Dload  Upload  Total  Spent    Left  Speed 0    0    0    0    0    0      0      0 --:--:-- --:--:-- --:--:--    0 0    0    0    0    0    0      0      0 --:--:-- --:--:-- --:--:--    0 0    0    0    0    0    0      0      0 --:--:-- --:--:-- --:--:--    0Warning: Failed to open the file Warning: https://github.com/cloudflare/cloudflared/releases/latest/download/clo Warning: udflared-linux-amd64: No such file or directory 0 37.4M    0    0    0    0      0      0 --:--:-- --:--:-- --:--:--    0 curl: (23) Failure [[concepts/writing|writing]] output to destination longboardfella@Fastfella:~$
● It's pasting the URL as the -o output path. Let me give you a two-step approach:
cd ~ curl -L -o cloudflared https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64
Then once downloaded:
sudo mv cloudflared /usr/local/bin/cloudflared sudo chmod +x /usr/local/bin/cloudflared
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── ❯  ─────────────────────────────────────────────────────────────────────

## Related Concepts
- [[concepts/tunnel|tunnel]] — [Wikipedia](https://en.wikipedia.org/wiki/tunnel)
- [[concepts/api|API]] — [Wikipedia](https://en.wikipedia.org/wiki/API)
- [[concepts/dns|DNS]] — [Wikipedia](https://en.wikipedia.org/wiki/DNS)
- [[concepts/gateway-routing|routing]] — [Wikipedia](https://en.wikipedia.org/wiki/routing)
- [[concepts/setup|setup]] — [Wikipedia](https://en.wikipedia.org/wiki/setup)

## Related Entities
- [[entities/cortex-api|Cortex API]] — [Wikipedia](https://en.wikipedia.org/wiki/Cortex_API)
- [[entities/wsl2|WSL2]] — [Wikipedia](https://en.wikipedia.org/wiki/WSL2)