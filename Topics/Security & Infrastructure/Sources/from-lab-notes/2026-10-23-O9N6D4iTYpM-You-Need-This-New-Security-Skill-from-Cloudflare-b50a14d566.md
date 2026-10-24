---
selected-topic: "Security & Infrastructure"
wiki-ready: true
review-status: "approved"
lab-review-id: fcad1017106787dacd22
suggested-topic: "Tools, Platforms & Infrastructure"
domain: "security-infrastructure"
title: "You Need This New Security Skill from Cloudflare"
date: 2026-10-23
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-23-O9N6D4iTYpM-You-Need-This-New-Security-Skill-from-Cloudflare"
---
## You Need This New Security Skill from Cloudflare
**Clip title:** You Need This New Security Skill from Cloudflare
**Author / channel:** Rob Shocks
**URL:** https://www.youtube.com/watch?v=O9N6D4iTYpM

### Summary
Sure, here's a summary of the video content:

**Main Topic:**
The video discusses AI security tools and testing them against an app with deliberate security holes. The speaker, Rob, tests a new open-source security skill from Cloudflare alongside other free scanners against a test app called Leakcast.

**Key Points:**
- **Leakcast App:** Rob built Leakcast, a Next.js app with six deliberate security bugs (like SQL injection and cross-company data reading) and a decoy safe code.
- **Testing Scanners:** 
  - **GitLeaks:** Successfully found a removed secret key in under a second by looking at Git history.
  - **Trivy:** Flagged old Next.js versions and dependencies, but missed the specific context of the app's vulnerability.
  - **Claude Code's Security Review:** Caught four of the six bugs, reviewing code changes (diffs), but missed the middleware bypass and Git history.
  - **Cloudflare's Security Skill:** Named all six bugs in one run, proving one bug (SQL injection), taking about 5 minutes and 38 cents. However, it requires multiple runs for thoroughness, which increases cost.
  - **Plain Prompt Control:** A simple prompt using the same model found five of six bugs in 34 seconds for under a cent, missing only the Git key and flagging the decoy as safe.

**Conclusions and Takeaways:**
- **Different Tools Catch Different Things:** Traditional scanners catch things outside code (Git history, dependencies), while AI review tools catch logic bugs in the code. You need both.
- **Three Levels of Pragmatic Security:** 
  - **Level 1 (This Week):** Run GitLeaks on your whole history with pre-commit hooks, use Dependabot or Trivy, and use a plain security prompt before shipping.
  - **Level 2 (Every PR):** Use Claude Security Review on trusted PRs, integrate GitLeaks and Trivy in CI, and do header checks.
  - **Level 3 (Before Launch):** Use Cloudflare skills in a sandbox, AI pentesting on staging, and consider hiring a professional human pentester for critical apps. 
- **Responsibility:** Security is ultimately the app owner's responsibility, not the tool's or agent's.

### Video Description & Links
#### Description
Agent Engineer Accelerator - 
https://switchdim.s.gy/yt-ai-security-scoreboard

I built a Next.js SaaS with 6 security bugs on purpose, three that classic scanners should catch and three of the kind AI coding agents actually write, then ran three rounds of tools against it: Gitleaks and Trivy, Claude Code's built-in /security-review, and Cloudflare's new open-source security-audit skill. Here's which tool caught which bug, what the Cloudflare skill cost to run, why scanners miss the bugs AI writes most, and three practical levels of security you can set up this week.

SOCIALS

WORK & COLLABS
info@switchdimension.com

RESOURCES
Cloudflare security-audit skill: https://github.com/cloudflare/security-audit-skill
Build your own vulnerability harness (Cloudflare): https://blog.cloudflare.com/build-your-own-vulnerability-harness/
Claude Code Security Review: https://github.com/anthropics/claude-code-security-review
Gitleaks: https://github.com/gitleaks/gitleaks
Trivy: https://github.com/aquasecurity/trivy
Lovable CVE-2025-48757 write-up: https://mattpalmer.io/posts/2025/05/CVE-2025-48757/
Next.js CVE-2025-29927: https://api.osv.dev/v1/vulns/GHSA-f82v-jwr5-mffw
Shannon: https://github.com/KeygraphHQ/shannon
Trail of Bits skills: https://github.com/trailofbits/skills
OWASP ZAP: https://github.com/zaproxy/zaproxy
Mozilla Observatory: https://developer.mozilla.org/en-US/observatory

CHAPTERS

0:00 Intro
0:43 Why AI-Built Apps Break Differently
1:38 Meet Leakcast: 6 Planted Bugs
3:35 Round 2: Claude Code's Built-In Review
4:30 Round 3: Cloudflare's Security Skill
6:37 The Control: One Plain Prompt
8:11 The Scoreboard
8:58 Three Levels of Pragmatic Security
10:48 Outro

#AISecurity #ClaudeCode #CursorAI #Cloudflare #NextJS #WebAppSecurity #VibeCoding #AppSec #AIDevelopment #AgentDevelopment #OWASP #CyberSecurity #Gitleaks

#### Tags
`cloudflare`, `penetration testing`, `cybersecurity`, `security`, `information security`, `cyber security`, `vulnerability assessment`

#### URLs
- https://switchdim.s.gy/yt-ai-security-scoreboard
- https://github.com/cloudflare/security-audit-skill
- https://blog.cloudflare.com/build-your-own-vulnerability-harness/
- https://github.com/anthropics/claude-code-security-review
- https://github.com/gitleaks/gitleaks
- https://github.com/aquasecurity/trivy
- https://mattpalmer.io/posts/2025/05/CVE-2025-48757/
- https://api.osv.dev/v1/vulns/GHSA-f82v-jwr5-mffw
- https://github.com/KeygraphHQ/shannon
- https://github.com/trailofbits/skills
- https://github.com/zaproxy/zaproxy
- https://developer.mozilla.org/en-US/observatory
