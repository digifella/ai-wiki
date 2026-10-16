---
wiki-ingested: true
title: "Using Qwen locally for coding"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Using Qwen locally for [[concepts/coding|coding]]

---
---
<https://www.youtube.com/watch?v=-gSUnlWAga8>
This video provides a detailed walkthrough of installing and using [[concepts/qwen-code|Qwen Code]], a new [[concepts/cli|command-line]] [[concepts/ai-workflow-tool|AI workflow tool]] from [[entities/alibaba|Alibaba]]'s AI department.
**Key Features and Inspiration:**

* Qwen Code is designed to enhance [[concepts/developer-productivity|developer productivity]] by leveraging [[entities/alibaba-qwen|Qwen3-Coder]] models for [[concepts/intelligent-code-understanding|intelligent code understanding]] and [[concepts/automation|automation]].
* It enables users to query and edit large codebases, even beyond normal context limits.
* It can automate operational tasks like pull request handling and complex rebases.
* The speaker notes that Qwen Code seems inspired by [[entities/gemini-ai|Google's Gemini]] CLI, OpenAI's Codex CLI, and [[entities/anthropic|Anthropic]]'s [[concepts/claude-code|Claude Code]].

**Installation Steps:**

1. **Prerequisites:** The only major requirement is Node.js (version 20 or higher is recommended). The speaker demonstrates checking `node --version` and `npm --version`.
2. **Install npm:** If npm is not up-to-date, users can install it via `curl -qL https://www.npmjs.com/install.sh | sh`.
3. **Install Qwen Code:** Globally install Qwen Code using npm: `npm install -g @qwen-code/qwen-code`.
4. **Verify Installation:** Check the installed version with `qwen --version`. The speaker notes it's currently an "alpha.10" version.

**API Key Configuration:**

* Qwen Code, like other coding AI agents, is API-based, meaning it requires an API key to function.
* Users need to obtain a free API key from Alibaba Cloud Model Studio. For users in mainland China, the URL is `https://dashscope.aliyuncs.com/compatible-mode/v1`. For users outside mainland China, the URL is `https://dashscope-intl.aliyuncs.com/compatible-mode/v1`.
* The speaker shows how to navigate to the "API Key" section in the Alibaba Cloud Model Studio portal to generate a key. He mentions that a credit card might be required for account creation but won't be charged for the free tier.
* **Setting Environment Variables:** `export OPENAI_API_KEY="sk-<your_api_key_here>"` (replace with your actual key). `export OPENAI_BASE_URL="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"` (adjust URL based on location). `export OPENAI_MODEL="qwen3-coder-plus"` (the speaker highlights that the model name might need to be all lowercase for it to work, especially in alpha versions).

**Demonstration of Qwen Code in Action:**

1. **Launching Qwen:** Simply type `qwen` in the terminal. The first time, it prompts for theme selection (dark chosen) and authentication method (OpenAI selected).
2. **Describing a File:** The speaker creates a simple Python file `app.py` with `print("hello")`. He then asks Qwen: `describe app.py file`. Qwen successfully reads the file and describes its contents, explaining that it's a simple Python script outputting "hello".
3. **Generating an HTML Animation:** The speaker challenges Qwen to "can you create me a self-sustained html animating the text 'like the video'". Qwen plans to create a self-contained HTML file with animations (colorful gradient background, bouncing letters, pulsing text, different colors for each word). It prompts the user to confirm [[concepts/writing|writing]] the `animated_text.html` file. It then attempts to launch a simple Python HTTP server to view the generated HTML in the browser. Upon execution, the animated "like the video" text is displayed in the browser with the requested effects, demonstrating Qwen Code's ability to generate complex UI code.
4. **Post-Interaction Summary:** After the session, Qwen Code provides an "Interaction Summary" detailing tool calls, success rate, user agreement, performance metrics (wall time, agent active time, API time, tool time), and model usage (input and output tokens).

**Conclusion:** The speaker expresses strong positive feedback, finding Qwen Code to be an "amazing tool" with a "more refined and polished" experience compared to other similar CLI coding assistants, especially given its alpha stage.
**Sponsors:** The video gives a shout-out to CAMEL-AI, an [[concepts/open-source|open-source]] community focused on building [[concepts/multi-agent-systems|multi-agent systems]] for data generation, world [[concepts/simulation-technology|simulation]], and [[entities/claude-co-work|task automation]].
