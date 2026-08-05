---
wiki-ingested: true
title: "GPT5 vibe coding - Creator Magic channel"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: creative-pursuits
group: video-content-systems
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# GPT5 [[concepts/vibe-coding|vibe coding]] - [[entities/creator-magic|Creator Magic]] channel

---
---
<https://www.youtube.com/watch?v=gAox5Srjkmc>
This video provides a comprehensive overview of recent advancements in AI, focusing on [[concepts/gpt-5|GPT-5]]'s coding [[concepts/capabilities|capabilities]], the evolving [[concepts/ai-automation|AI automation]] landscape, and the emerging "[[concepts/vibeops|VibeOps]]" paradigm.
Here's a detailed [[concepts/summary|summary]]:
**1\. Introduction to GPT-5 & Video Overview (0:00-0:44)**

* The video announces the arrival of GPT-5 and explores its potential, particularly in coding.
* **Key Demos/Topics Covered:** Live-coding a [[concepts/web-application|web application]] to track GPT-5 hype in real-time using the [[concepts/xai-api|XAI API]]. Building a 3D pinball game with realistic [[concepts/physics|physics]] using AI. Discussing the future of AI [[concepts/automations|automations]] and a new buzzword, "VibeOps." [[concepts/testing|Testing]] a free and [[concepts/open-source|open-source]] GPT model on a [[entities/mac-studio|Mac Studio]].

**2\. GPT-5 in [[concepts/cursor|Cursor]]: Building a Real-time Hype Radar (0:44-3:24)**

* **Context:** GPT-5 is freely available in Cursor, offering a 272k [[concepts/context-window|context window]] and powerful [[concepts/reasoning|reasoning]].
* **Prompt:** The user requests a dashboard to track real-time mentions of "ChatGPT-5" from the [[entities/xai-api|XAI API]], incorporating beautiful rainbow visuals, dopamine-inducing explosions, and real-time information.
* **GPT-5's Plan:** GPT-5 decides to scaffold a React (Vite) frontend and an Express backend, using Server-Sent Events (SSE) for real-time updates from XAI Live Search, and incorporating animation libraries (like TS-Particles or Anime.js) for visuals. It also handles environment configuration, installation, and build processes.
* **Outcome:** The AI successfully builds and runs a "GPT-5 Hype Radar" web app. The dashboard dynamically displays: Mentions over time. Sentiment blend (mostly positive). Top [[concepts/keywords|keywords]] related to GPT-5 discussions. Live items (recent discussions/announcements). The visual effects (confetti, rainbows) are dopamine-inducing, as requested.
* **Takeaway:** The entire app was built with a single, complex prompt, demonstrating GPT-5's multi-step planning and coding prowess.

**3\. GPT-5 in Cursor: Creating a 3D Pinball Game (3:25-4:44)**

* **Context:** Further testing GPT-5's coding abilities, focusing on game development with physics.
* **Prompt:** Build a 3D pinball game in 3.JS called "Pinball Planets," featuring a galactic theme, vibrant colors, and planets that the ball bounces between. The ball physics should respond to tilting and panning.
* **GPT-5's Plan:** Uses Vite (React + [[concepts/typescript|TypeScript]]), [[concepts/threejs|Three.js]], React Three Fiber, Drei, Cannon-es (for physics), Zustand (for state management), and Howler (for sound). Scaffolds components for the table, ball, flippers, and planets.
* **Refinement:** User then requests to add "live-tilt controls and dynamic gravity so tilting changes the gravity vector," and hook it into the scene.
* **Outcome:** GPT-5 successfully generates the 3D pinball game. The game runs in the browser, and rotating the camera (mouse movement) realistically affects the ball's movement due to dynamic gravity implementation.
* **Takeaway:** GPT-5 demonstrates strong capabilities in complex 3D graphics and physics programming with minimal guidance.

**4\. GPT-5 in Lovable: Visualizing & Chatting with Garmin Data (4:45-7:45)**

* **Context:** Testing GPT-5's [[concepts/integration|integration]] with Lovable, an AI vibecoding app, focusing on backend database interaction and AI chat.
* **Prompt:** Build a web app to visualize recent Garmin stats and allow users to chat with their data using AI. The implementation should leverage the [[concepts/python|Python]] Garmin Connect library (user provides [[entities/github|GitHub]] repo) and a Supabase backend for [[entities/storage|storage]] and edge functions.
* **Process:** Connects Lovable to a new Supabase project ("[[concepts/health|Health]] Stats"). GPT-5 generates Supabase migrations to create tables for `garmin_daily_summaries` and `garmin_activities`, and creates two Edge Functions: `garmin-ai-chat` and `ingest-garmin`. It also correctly identifies and links the `python-garminconnect` repo.
* **Outcome:** Lovable creates a "Garmin Chatter" app. It successfully pulls Garmin data (steps, distance, active minutes, calories) into the Supabase database and visualizes trends. The AI chat feature works, allowing the user to ask questions about their Garmin data (e.g., "Tell me my most active day over the last two weeks and suggest a workout...").
* **Observation:** While Lovable's GPT-5 integration felt slower than Cursor, it generated a substantial amount of code and configured a full backend [[concepts/solution|solution]] with database and AI-powered chat functions. The process consumed 8.5 Lovable credits.

**5\. The Future of AI Automations: Builders vs. Delegators (7:46-11:38)**

* **Key Discussion:** A shift in the AI [[concepts/automation|automation]] landscape, exemplified by n8n and [[entities/zapier|Zapier]].
* **n8n (The Builder's Tool):** A powerful tool for technically-minded people. Focuses on detailed, visual workflows with nodes. Recent [[concepts/pricing|pricing]] changes introduce limits on [[concepts/workflow|workflow]] executions for [[concepts/paid-plans|paid plans]], even for self-hosted users, effectively a "success tax" or "cap on success." The [[entities/speaker|speaker]] praises n8n for empowering "tinkerers" and "builders" who enjoy crafting complex automation engines (like driving a manual transmission car).
* **Zapier (The Delegator's Tool):** Focuses on simplicity and delegating tasks to AI [[concepts/agents|agents]] and chatbots. Offers generous free plans for its AI features. Aims to abstract away the complexity of workflows, allowing users to simply state their desired outcome (like a self-driving car where you just input the destination).
* **VibeOps:** A new concept introduced by Pieter Levels. It involves using cheap cloud VPS ($5/month like Linode/Akamai, Hetzner, DigitalOcean) and [[concepts/ai-coding|AI coding]] assistants (like Cursor CLI or [[concepts/claude-code|Claude Code]]) to build and host custom applications. This approach emphasizes owning your infrastructure and having full control over your projects, avoiding platform-specific limitations or "success taxes." It brings back the idea of "basic engineering knowledge" for deploying apps.

**6\. VibeOps in Action: Cursor CLI + Linode VPS Demo (12:02-19:49)**

* **Goal:** Demonstrate "VibeOps" by installing Cursor CLI on a cloud VPS and using it to generate and run a simple web app.
* **Process:** **Launch a Linode VM:** Select region (London), OS (Debian 12), and the cheapest shared CPU plan (Nanode 1GB for $5/month). Set password and SSH keys. **SSH into VPS:** Use Termius HQ to connect to the newly provisioned Linode server. **Install Cursor CLI:** Run the provided `curl` command to install Cursor Agent on the Debian server. **Sign in to Cursor Agent:** Follow the prompts to link the CLI to the user's Cursor account. **[[concepts/secure|Secure]] the Server:** Ask Cursor Agent to secure the server by installing and configuring a firewall (UFW) and Fail2Ban. Cursor generates and runs the necessary `apt-get` [[concepts/commands|commands]]. **Install Development Environment:** Ask Cursor to install Node.js and Python. Cursor handles the installation process. **Create Express App:** Prompt Cursor to "create a simple express.js hello world app with lots of rainbow animations and explosions" in a new directory (`myapp`). Cursor generates the Express app [[concepts/structure|structure]] and code [[concepts/files|files]] (package.json, server.js, index.html, styles.css, script.js). **Dockerize & Run:** Instruct Cursor to "make a dockerfile for this app create docker-compose.yml and run the app with -d on port 3000." Cursor creates the Dockerfile and docker-compose.yml, then runs the app in a [[concepts/docker|Docker]] container.
* **Outcome:** A "Hello, World!" web app with rainbow animations and an "explode" button is successfully [[concepts/running|running]] live on the Linode VPS's public IP address.
* **Takeaway:** This demonstrates the power of combining cheap cloud infrastructure with AI coding assistants for rapid application development and [[concepts/deployment|deployment]] with full ownership. The speaker advises against publicly exposing server IPs without proper [[concepts/risk-mitigation|security measures]] like Nginx and Cloudflare in real-world [[concepts/scenarios|scenarios]].

**7\. Open-Source AI: [[entities/gpt-oss|GPT-OSS]] on Mac Studio (19:50-22:45)**

* **Context:** Testing a free and [[concepts/open-source-model|open-source model]], `gpt-oss:20b`, running locally on a Mac Studio (M1 chip) using [[entities/llama|Ollama]] Desktop.
* **Prompt:** "What is the meaning of life?"
* **Outcome:** The `gpt-oss:20b` model responds _lightning fast_ with a comprehensive answer, covering various philosophical, scientific, and religious perspectives on the meaning of life.
* **Takeaway:** The performance of a 20-billion parameter open-source model running locally on consumer [[concepts/hardware|hardware]] is highly impressive, highlighting the rapid advancement and [[concepts/accessibility|accessibility]] of [[concepts/ai-models|AI models]].

**Conclusion:** The video concludes by emphasizing that the choice in the future of AI automation lies between being a "builder" (n8n/VibeOps) who wants [[concepts/granular-control|granular control]] and [[concepts/personalization|customization]], or a "delegator" (Zapier) who prefers to simply state a goal and let the AI handle the complex "how." Regardless of the approach, it's an exciting time to be involved in the AI space due to the incredible tools and [[concepts/models|models]] becoming available.
