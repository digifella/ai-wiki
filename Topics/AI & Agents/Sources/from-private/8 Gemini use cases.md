---
wiki-ingested: true
domain: ai-agents
group: google-ai-ecosystem
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=65C5VSSqWZk>
Here is a summary of the 8 insane [[concepts/use-cases|use cases]] for [[entities/gemini-ai|Google's Gemini]] 3 model, structured in [[concepts/markdown|Markdown]].

# 8 Insane Use Cases for Google’s [[entities/gemini-3|Gemini 3]]

**Context:** Google’s Gemini 3 is their most intelligent model yet. It can execute 10-15 steps of [[concepts/coherent-reasoning|coherent reasoning]], process video/images/code simultaneously, and integrate directly with [[concepts/google-workspace|Google Workspace]] tools.
**Essential Setting:** For most of these use cases, ensure you select **"[[concepts/thinking-with-3-pro|Thinking with 3 Pro]]"** and enable **"Canvas"** under the Tools menu.

* * *

## 1\. [[concepts/ai-generated-markdown-presentations|Automated Presentation Creation]]

Gemini 3 can analyze data and generate full [[concepts/google-slides|Google Slides]] presentations, including [[concepts/design|design]] and structure.

* **The [[concepts/workflow|Workflow]]:**
	* Upload raw data files (e.g., CSVs of marketing performance).
	* **Prompt:** Ask it to create a 10-slide presentation telling the story of the quarter. Include a "Visual Style Guide" in the prompt (defining hex codes, fonts, and shapes) to ensure branding [[concepts/logical-consistency|consistency]].
	* **The Result:** A full slide deck with charts, executive summaries, and specific data visualizations.
	* **Killer Feature:** The **"Export to Slides"** button instantly converts the AI generation into an editable Google Slides file.

Based on the video, here is the exact prompt used to create the presentation in **Use Case #1**.
**Important Pre-requisites:**

1. **Upload Files:** You must upload your data files (in the video, he uploaded two CSVs: `q4-2025-channel-performance.csv` and `q4-2025-monthly-mrr.csv`).
2. **Enable Canvas:** You must select **"Canvas"** from the Tools menu for this to work.

### The Prompt

```
Create a Google Slides presentation (10 slides) that tells the story of our quarter — what worked, what didn't, and where we should double down in Q1 2026.

I've attached our Q4 2025 marketing performance data.

Include:
- Executive summary with key wins
- Channel-by-channel performance breakdown
- Month-over-month growth trajectory
- Top 3 underperforming areas with recommendations
- Q1 2026 budget reallocation proposal based on ROAS

Apply the following style guide to the presentation:

## Visual Style Guide

| Element | Specification | Usage |
| :--- | :--- | :--- |
| **Font** | Inter | All text elements |
| **Primary Color** | #FF6D33 | Headers, accent elements |
| **Secondary Color** | #FFCA51 | Highlights, charts |
| **Text Color** | #0F1E35 | Body text |
| **Background** | #FCF8F4 | Light backgrounds |
| **Shapes** | Rounded rectangles, 8px radius | Section dividers, buttons |
| **Images** | Create using Nano Banana | Custom illustrations for each section |
| **Charts** | Minimal design, no 3D effects | Clean, professional |

Make the presentation visually compelling and executive-ready. Use the data provided — do not make up any numbers.


```

## 2\. Personal Travel Companion

Create interactive, data-rich travel itineraries that sync with Google Maps.

* **The Workflow:**
	* **Prompt:** Act as a photographer visiting Tokyo. Ask for a 2-day itinerary with the best photo spots, lighting times, and access tips.
	* **The Result:** An itinerary broken down by time and location.
	* **Killer Feature:** Gemini generates **Interactive Google Maps** previews directly in the chat. You can ask it to generate "Shareable Links" to import the specific route directly into your Google Maps app.

## 3\. Rapid App Prototyping

You can "vibe [[concepts/code|code]]" full-stack web applications in minutes without [[concepts/writing|writing]] code yourself.

* **The Workflow:**
	* **Prompt:** Use a detailed briefing template describing the user, core features, and data requirements (e.g., "Build an Admin Portal for an online [[concepts/learning|learning]] platform").
	* **The Result:** A fully functional, clickable [[entities/react|React]] application (Single Page App) running inside the [[concepts/gemini-canvas|Gemini Canvas]].
	* **Killer Feature:** You can highlight specific elements of the UI (like a button or chart) and use **"Select and Ask"** to request specific changes without restating the whole prompt.

## 4\. Interactive Data Visualization

Move beyond static charts to fully interactive dashboards for analyzing complex data.

* **The Workflow:**
	* Upload CSV files.
	* **Prompt:** "Create an interactive dashboard where I can play with the marketing performance data to prepare for a quarterly review."
	* **The Result:** A React-based dashboard with toggle switches, "What-If" scenario planners (e.g., "What happens if we increase ad spend by 10%?"), and combined metrics like ROAS vs. CAC efficiency matrices.
	* **Insight:** Gemini infers business logic (like separating Paid vs. Owned media) without being explicitly told.

## 5\. Interactive Lead Magnets (via [[entities/google-ai-studio|Google AI Studio]])

_Note: This uses [Google AI Studio](https://aistudio.google.com/), not the standard chat interface._
Create embeddable widgets for websites to capture leads.

* **The Workflow:**
	* Go to the "Build" section in AI Studio.
	* **Prompt:** "Create a standalone embeddable investment growth calculator widget." Include requirements for sliders, dropdowns, and a lead capture form at the end.
	* **The Result:** A polished, fully coded calculator (e.g., Investment Growth or Cleaning Service Quote generator) with smooth animations and logic.
	* **Killer Feature:** The code can be exported to [[entities/github|GitHub]] or deployed directly to Google Cloud.

## 6\. AI Sales Coach App

_Note: This uses Google AI Studio._
Build internal tools to analyze audio and performance.

* **The Workflow:**
	* **Prompt:** "Build a sales coaching intelligence platform where users upload an audio file." Ask for speaker diarization, sentiment tracking, and coaching tips.
	* **The Result:** An app where you upload a real .WAV or .MP3 sales call. Gemini listens to the audio (multimodal capability), transcribes it, graphs the sentiment over time, and lists "What Went Well" vs. "Missed Opportunities."

## 7\. [[entities/youtube|YouTube]] to Blog Writer

Turn video content into high-quality, non-generic blog posts.

* **The Workflow:**
	* Upload a **Style Guide** (markdown file) so it copies your specific writing voice.
	* **Prompt:** "Create a document for \[YouTube URL\]."
	* **The Result:** Because Gemini is integrated with YouTube, it watches the video (visuals and audio) and writes a comprehensive article. It avoids generic AI titles and formats the content based on the actual visuals shown in the video.
	* **Killer Feature:** **"Export to Docs"** puts the finished article directly into your [[entities/google-drive|Google Drive]].

## 8\. YouTube Channel Analyst

Perform high-level strategy audits on any YouTube channel.

* **The Workflow:**
	* **Prompt:** Provide a "Channel Audit Framework" asking for performance snapshots, content breakdowns, and strategic recommendations. Simply paste the Channel Handle (e.g., `@go9x`).
	* **The Result:** A deep-dive report analyzing view volatility, subscriber growth, successful video formats (e.g., "The Viral Engine" vs. "Deep Dives"), and specific actionable advice for growth.
	* **Insight:** It uses internal YouTube tools to pull accurate historical data and engagement metrics.

## Related Concepts
- [[concepts/slide-deck-generation|automated presentation creation]] — [Wikipedia](https://en.wikipedia.org/wiki/automated_presentation_creation)
- [[concepts/research-tools|data analysis]] — [Wikipedia](https://en.wikipedia.org/wiki/data_analysis)
- [[concepts/videoimagecode-processing|video/image/code processing]] — [Wikipedia](https://en.wikipedia.org/wiki/video/image/code_processing)
- [[concepts/google-workspace-tools|Google Workspace tools]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Workspace_tools)
- max 16 concise technical concepts/topics — [Wikipedia](https://en.wikipedia.org/wiki/max_16_concise_technical_concepts/topics)

## Related Entities
- max 12 named people, organisations, products, channels — [Wikipedia](https://en.wikipedia.org/wiki/max_12_named_people%2C_organisations%2C_products%2C_channels)