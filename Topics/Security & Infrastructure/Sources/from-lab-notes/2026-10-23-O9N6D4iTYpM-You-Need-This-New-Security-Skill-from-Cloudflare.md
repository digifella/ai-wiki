---
selected-topic: "Security & Infrastructure"
wiki-ready: true
review-status: "approved"
lab-review-id: 5708cde5436564e477ba
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
The video features the host, Rob, discussing the security challenges and testing methods for apps built by AI. He created a test app with deliberate security flaws to evaluate different security tools, including free scanners, Claude Code's built-in review, and Cloudflare's new security skill.

Rob tested several tools against his deliberately flawed app. Free scanners like GitLeaks and Trivy caught classic issues like git history secrets and vulnerable dependencies, but missed logic-based bugs in the code. Claude Code's security review identified four out of six bugs in 84 seconds but struggled with full codebase context. Cloudflare’s security skill, running a multi-phase audit with separate hunter and verifier agents, identified all six bugs and verified one, but missed others due to lacking sandbox isolation. A plain prompt test with a single model also caught five out of six bugs efficiently.

Rob concludes that no single tool catches every type of vulnerability; a combination of security scanners and AI review tools is necessary. He recommends a three-level pragmatic security approach: starting with basic GitLeaks history scans, adding AI security reviews for pull requests, and utilizing advanced tools like sandboxes and professional penetration testing before launch.

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
