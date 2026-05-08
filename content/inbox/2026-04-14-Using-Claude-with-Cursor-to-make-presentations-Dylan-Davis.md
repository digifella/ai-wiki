---
wiki-ingested: true
title: "Using Claude with Cursor to make presentations. Dylan Davis"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
---
# Using [[entities/claude|Claude]] with [[concepts/cursor|Cursor]] to make presentations. [[entities/dylan-davis|Dylan Davis]]

---
---
results in HTML file.
<https://www.youtube.com/watch?v=TZ3yYXAz_i8>
Dylan Davis channel
At the end of making the output you can then ask Claude to export as a PDF.
<https://www.youtube.com/watch?v=TZ3yYXAz_i8>
[Console.anthropic.com](https://Console.anthropic.com)
Can be used to create high quality prompt such as the [[concepts/system-prompt|system prompt]] the author used

This is a comprehensive breakdown of the method for creating [[concepts/ai-powered-presentations|AI-powered presentations]] as shown in the video **"I Stopped Using PowerPoint Once I Learned This Claude Method."**

* * *

# 🚀 The 5-Step Method to AI Slides (2026 Guide)

Traditional slide tools like PowerPoint are often constrained by [[concepts/templates|templates]]. This method uses **[[concepts/claude-ai|Claude AI]]** and **Code ([[concepts/htmlcss|HTML/CSS]])** to create highly customized, professional, and unique presentations.

## 📋 The 5 Steps at a Glance

1. **Write Script**: Create the foundation of your content.
2. **Claude Project**: Set up a persistent environment for consistency.
3. **Opus 4.5 + Extended Thinking**: Use the high-end model for maximum quality.
4. **Quick Edits**: Refine the [[concepts/design|design]] within the Claude [[concepts/chat-application|chat interface]].
5. **Code Editor**: Use **Cursor** or **[[concepts/claude-code|Claude Code]]** for the final polish.

* * *

## 🛠 Step 1: Write Your Script

The AI needs a clear reference to build visuals.

* **Format**: Can be a word-for-word script or a structured outline with bullet points.
* **Goal**: Define exactly what you want to talk about per slide. This acts as the "logical skeleton" for the presentation.

## 📁 Step 2: Set Up a Claude Project

Creating a **Claude Project** allows the AI to "remember" your preferences, branding, and previous work.

* Go to Claude.ai and select **Projects** from the left menu.
* Create a new project (e.g., "Slides [[concepts/creator|Creator]] V2").
* **[[concepts/persistence|Persistence]]**: Once set up, you can simply drop in new scripts in the future, and Claude will generate consistent slides every time.

## 🧠 Step 3: Opus 4.5 + Extended Thinking

For high-quality design and complex layout [[concepts/reasoning|reasoning]], model selection is critical.

* **Model**: Select **[[entities/claude-opus-4|Claude Opus 4]].5**.
* **Mode**: Ensure **Extended Thinking** is turned on.
* **Why**: This model handles [[concepts/ambiguity|ambiguity]] and multi-step design tasks significantly better than Sonnet or other standard [[concepts/models|models]].

## ✍️ Step 4: Quick Edits in Claude

Once Claude gives you the first version of your HTML presentation:

* **1-2 Iterations**: Use the chat window to make broad changes (e.g., "Make the background darker," "Add a slide about [[concepts/pricing|pricing]]").
* **Constraint**: Don't stay in the chat too long. After 2 rounds of edits, the AI's "intelligence" for that specific [[concepts/session|session]] can start to degrade.

## 💻 Step 5: Local Code Editor (Final Polish)

Download the `.html` file from Claude and open it in a dedicated code editor.

* **Recommended Tool**: **Cursor** (an AI-powered code editor).
* **Pro Feature**: Use the "Select Element" tool in Cursor to point at a specific part of a slide and ask the AI to change just that section (e.g., "Replace this icon with a logo").
* **Alternative**: **Claude Code** (for more technical users via terminal).

* * *

## 📄 The "System Prompt" Template

To get the best results, add this into your Claude Project's **[[concepts/instructions|Instructions]]** section:

> **Role**: You are a professional presentation designer and front-end [[entities/developer|developer]]. **Task**: Create a single, self-contained HTML file containing a full slide presentation based on provided notes. **Design [[concepts/philosophy|Philosophy]]**:
> 
> * Minimal text per slide; focus on key numbers, statistics, or single phrases.
> * Maximum visual impact (large [[concepts/typography|typography]], high-[[concepts/contrast|contrast]] colors).
> * Modern, Apple-style minimalist aesthetic.
> * Use standard keyboard navigation (left/right arrows) for the slides. **Technical Requirements**:
> * Single HTML file with embedded CSS and JS.
> * Responsive layout with clear visual [[concepts/hierarchy|hierarchy]].

* * *

## 🌍 How to Share Your Slides

Since your presentation is a website (`.html` file), you can host it for free.

1. **GitHub**: Create a public repository and upload your `index.html` and any images.
2. **GitHub Pages**: Go to **Settings > Pages** and set the source to your `main` branch.
3. **Result**: You’ll get a unique URL (e.g., `username.github.io/project-name`) to share with anyone.

## 💡 Why Code (HTML) instead of PowerPoint?

* **Truly Unique**: You aren't limited by PowerPoint's "boxes." You can have animated visualizations, complex diagrams, and glassmorphism effects.
* **[[concepts/ai-superpower|AI Superpower]]**: Code is where LLMs like Claude are strongest. Leveraging their [[concepts/coding|coding]] ability yields higher-quality design than asking them to "arrange shapes" on a slide.
