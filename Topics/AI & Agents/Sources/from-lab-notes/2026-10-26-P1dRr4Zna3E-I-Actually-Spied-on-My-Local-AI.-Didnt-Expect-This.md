---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: f21066dc96d7246ed02f
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "I Actually Spied on My \"Local AI\". Didn’t Expect This!"
date: 2026-10-26
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-26-P1dRr4Zna3E-I-Actually-Spied-on-My-Local-AI.-Didnt-Expect-This"
---
## I Actually Spied on My "Local AI". Didn’t Expect This!
**Clip title:** I Actually Spied on My "Local AI". Didn’t Expect This!
**Author / channel:** RepoChad
**URL:** https://www.youtube.com/watch?v=P1dRr4Zna3E

### Summary
Sure, here's a summary of the video content:

### Main Topic
The video explores the privacy and network activity of local AI applications running on a Mac, specifically examining whether apps like Ollama, LM Studio, Jan, and Llama C++ genuinely keep data local and private, or if they send information to external servers.

### Key Points Discussed
- **Local vs. Private vs. Offline Definitions:** The speaker clarifies that "local" means running on your hardware, but it doesn't automatically mean "offline" (no network activity) or "private" (no one else sees your data).
- **Network Traffic Analysis:** Using tools like macOS's `pktap` and network loggers, the speaker analyzes what data local AI applications transmit. While chat prompts generally stay private on the local machine for most apps, applications often communicate with external servers for update checks, model searches, and telemetry.
- **App-Specific Findings:**
  - **Ollama:** Checks in with `ollama.com` hourly for updates and cloud models. Setting `OLLAMA_HOST=0.0.0.0` exposes local models to the entire network without a password, posing a security risk.
  - **LM Studio:** Downloads extensions and conducts searches on `lmstudio.ai` by default, even when offline documentation suggests otherwise. Its local server logs chat prompts in plain text.
  - **Jan:** Performs background updates and downloads embedding models from Hugging Face.
  - **Llama C++:** Shows zero network connections or prompt logs, making it the most private option tested.
- **Security Implications:** Misconfigurations, such as improper host settings (`OLLAMA_HOST=0.0.0.0`) or insecure log storage, can expose local AI servers and sensitive data (like API keys) to attackers.

### Conclusions and Takeaways
- **Prompt Privacy Holds:** If you are simply chatting with local models, your prompts generally stay on your machine and remain private.
- **Background Activity:** AI apps frequently communicate with their home servers for updates, model downloads, and telemetry, meaning "local" doesn't mean completely disconnected from the internet.
- **Security Best Practices:** Users should verify app settings, avoid insecure configurations like setting `OLLAMA_HOST=0.0.0.0`, clear server logs, and use firewalls to monitor or restrict network traffic from AI apps.

### Video Description & Links
#### Description
Is your local AI actually private? I ran a full packet capture on my Mac mini, installed Ollama, LM Studio, Jan and llama.cpp, and fed every one of them a fake password and a fake social security number to see what leaves the machine.

The chat itself sent zero packets. Everything around the chat is another story: hourly check-ins you can't turn off, model searches routed through the app's own servers, cloud models that look exactly like local ones, prompts saved in plain-text log files, and one environment variable that let another device on my Wi-Fi use my Ollama cloud account and read my email address, with no password at all.

Local means it runs on your hardware. It doesn't mean nothing leaves.

🔍 WHAT YOU'LL LEARN
• Local vs offline vs private, and why they aren't the same thing
• How to see which app sends what on a Mac (tcpdump on the pktap interface + canary prompts)
• What Ollama, LM Studio, Jan and llama.cpp send the moment you open them
• Why LM Studio's model search and downloads go through LM Studio's servers, not Hugging Face
• Ollama cloud models: same command, same model list, but your prompt goes to ollama.com
• What OLLAMA_HOST=0.0.0.0 really exposes (models, your cloud quota, and your account email)
• Does OLLAMA_NO_CLOUD=1 actually turn the cloud off? (Mostly.)
• Where your prompts end up on disk, including a log file anyone on the Mac can read
• Why llama-server needs an API key even on localhost
• 175,000 exposed Ollama servers, LLMjacking, and the OpenCode cloud-key breach
• A 10-minute checklist to lock down your local AI

⏱️ CHAPTERS
0:00 I spied on my local AI
1:12 Local vs offline vs private
1:58 How I captured every packet
2:53 Does your chat leave your Mac?
3:26 What the apps do when you open them
5:00 Model search and downloads
5:52 Ollama cloud models that look local
6:45 OLLAMA_HOST=0.0.0.0: the scariest result
8:31 Does OLLAMA_NO_CLOUD work?
9:07 Where your prompts end up on disk
10:04 llama.cpp's catch
10:42 175,000 exposed Ollama servers
12:01 What this test can't tell you
13:01 Verdict: how to lock it down

✅ THE FIX LIST
• Just chatting with local models? You're in good shape. Your prompts stay put.
• Ollama desktop app: it checks in every hour and you can't turn that off. Use the plain server if that bothers you.
• Signed in to Ollama? Check `ollama list` and your integrations (coding agents included) for anything with "cloud" in the name.
• Ever set OLLAMA_HOST=0.0.0.0? Undo it. Use Tailscale or a reverse proxy with a password to reach Ollama from your phone.
• Docker: publish the port as 127.0.0.1:11434:11434, because Docker's published ports bypass UFW.
• LM Studio API users: clear out its server logs folder.
• llama-server: add --api-key.

🔗 LINKS & SOURCES
Ollama source (updater, recommendations, auth): https://github.com/ollama/ollama/tree/v0.40.11
Ollama issue: no way to disable the update check: https://github.com/ollama/ollama/issues/4498
Ollama FAQ (network binding, disabling cloud): https://docs.ollama.com/faq
LM Studio offline docs: https://lmstudio.ai/docs/app/offline
llama.cpp server README (--api-key): https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md
SentinelLABS: 175,108 exposed Ollama hosts: https://www.sentinelone.com/labs/silent-brothers-ollama-hosts-form-anonymous-ai-network-beyond-platform-guardrails/
Intruder: exposed AI infrastructure: https://www.intruder.io/research/from-enterprise-chatbots-to-gooner-caves-exposed-ai-infrastructure-is-rampant
Kaspersky LLMjacking honeypot: https://kaspersky.com/blog/llmjacking-2026-private-ai-server-security/55768
NemoClaw template attack (The Hacker News): https://thehackernews.com/2026/08/a-malicious-webpage-could-poison-your.html
Ollama DNS rebinding (NCC Group): https://www.nccgroup.com/research/technical-advisory-ollama-dns-rebinding-attack-cve-2024-28224/
OpenCode breach (TechCrunch): https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/

📺 WATCH NEXT
[link]

💬 Have you ever set OLLAMA_HOST to 0.0.0.0? Be honest. Nobody's capturing your packets. I read the comments.

#LocalAI #Ollama #Privacy #LMStudio #LocalLLM #llamacpp #Cybersecurity

#### Tags
`local ai privacy`, `is local ai private`, `local ai private`, `local llm privacy`, `ollama privacy`, `ollama security`, `lm studio privacy`, `jan ai`, `llama.cpp`, `llama server`, `ollama cloud`, `ollama cloud models`, `ollama_host 0.0.0.0`, `ollama exposed`, `ollama no cloud`, `ollama telemetry`, `lm studio telemetry`, `local ai security`, `packet capture`, `tcpdump`, `wireshark mac`, `does ollama send data`, `offline ai`, `private ai`, `self hosted ai`, `lulu firewall`, `repochad`

#### URLs
- https://github.com/ollama/ollama/tree/v0.40.11
- https://github.com/ollama/ollama/issues/4498
- https://docs.ollama.com/faq
- https://lmstudio.ai/docs/app/offline
- https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md
- https://www.sentinelone.com/labs/silent-brothers-ollama-hosts-form-anonymous-ai-network-beyond-platform-guardrails/
- https://www.intruder.io/research/from-enterprise-chatbots-to-gooner-caves-exposed-ai-infrastructure-is-rampant
- https://kaspersky.com/blog/llmjacking-2026-private-ai-server-security/55768
- https://thehackernews.com/2026/08/a-malicious-webpage-could-poison-your.html
- https://www.nccgroup.com/research/technical-advisory-ollama-dns-rebinding-attack-cve-2024-28224/
- https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/
