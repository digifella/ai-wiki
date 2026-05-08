---
wiki-ingested: true
domain: ai-agents
group: google-ai-ecosystem
---
<https://www.youtube.com/watch?v=cwai8SjMZWM>
Ali H Salem
Here is a comprehensive guide and [[concepts/summary|summary]] of the [[concepts/gemini|Gemini]] [[concepts/tutorial|tutorial]] video, structured by feature.

# The Complete Guide to [[entities/google-gemini|Google Gemini]] (2025 Edition)

This tutorial covers the end-to-end functionality of the Gemini application, highlighting its native [[concepts/integration|integration]] into the Google ecosystem and its advanced [[concepts/reasoning|reasoning]] capabilities.

## 1\. Foundations & Interface

* **Workspace Integration:** The strongest differentiator for Gemini is its native integration with [[concepts/google-workspace|Google Workspace]]. By typing `@`, you can directly call tools like Gmail, Google Calendar, Docs, and [[concepts/motivation|Drive]].
	* _Example:_ `@Google Calendar schedule a meeting at 16:00 tomorrow for 'Deep Work'.`
* **Models:**
	* **Fast Model:** For quick, lower-complexity tasks.
	* **[[entities/gemini-3|Gemini 3]] (Reasoning):** The recommended model. It uses a "thinking level" variable to adjust effort based on prompt complexity.
* **[[concepts/context-window|Context Window]]:** Supports up to **1 million tokens**, allowing you to upload entire books, massive codebases, or multiple large reports for analysis.

## 2\. [[entities/chatgpt-deep-research|Deep Research]]

Gemini's Deep Research goes beyond standard web search by allowing you to cross-reference specific user data (Gmail, Drive, Uploaded [[concepts/files|Files]]) with the web.

* **[[concepts/gap-analysis|Gap Analysis]]:** You can upload a specific report (e.g., a PDF) and ask Gemini to perform a "Gap Analysis" against external web benchmarks.
* **Process:** It generates a research plan $\\rightarrow$ executes the research $\\rightarrow$ compiles a structured report.
* **Output Options:** Once research is complete, you can use **[[concepts/notebooklm|NotebookLM]]** features to convert the report into a podcast ([[concepts/audio-overview|Audio Overview]]), study guide, or FAQ.

## 3\. [[concepts/google-gemini-gems|Gemini Gems]]

Gems are custom, reusable "mini-experts" or personas designed for specific recurring tasks.

* **How to Build:**
	1. **Name:** e.g., "Executive Gem".
	2. **Instructions:** Define the persona and output [[concepts/style|style]] (e.g., "You are an executive communications specialist. Turn input text into concise executive briefs.").
	3. **Knowledge:** Upload reference files if needed.
* **Benefit:** Saves you from re-[[concepts/prompting|prompting]] the persona every time you need a specific type of output.

## 4\. Video & Image Generation

* **Video (Veo 3.1):** Generates high-quality video _with sound_.
	* _Capabilities:_ Handles multiple sequences and cinematic instructions well (e.g., specific camera angles, lighting).
* **Images ([[entities/nano-banana-pro|Nano Banana Pro]]):**
	* **Creation:** Generates high-fidelity images.
	* **Editing & [[concepts/continuity|Continuity]]:** The standout feature is **context continuity**. You can ask it to edit an image (e.g., "Switch the menu theme to forest green") and it [[entities/will|will]] modify the style while retaining the exact layout and text content of the previous image.

## 5\. Canvas (Built-in Workspace)

"Canvas" is a workspace mode that outputs structured, editable documents rather than a chat stream.

* **Use Case:** creating dashboards, reports, or web pages.
* **Iterative Building:** You can highlight specific sections (e.g., a chart) and ask Gemini to expand on them or move them into a separate tab/dropdown.
* **Result:** A visually rich, HTML-style dashboard that is interactive and presents data much better than a wall of text.

## 6\. Guided [[concepts/learning|Learning]]

Ideal for digesting complex corporate documents or studying new topics.

* **Scaffolded Learning:** Instead of dumping information, Gemini introduces a topic simply and asks where you want to go next.
* **[[concepts/workflow|Workflow]]:** Upload a complex PDF $\\rightarrow$ Activate "Guided Learning" tool $\\rightarrow$ Ask "Where do I start?".
* **Interaction:** Gemini provides a high-level summary and distinct paths/buttons to explore specific sub-topics deeper.

## 7\. Visual Layouts

Transforms text-heavy [[concepts/explanations|explanations]] into magazine-style layouts with interactive widgets and images.

* **How to use:** Enable "Visual Layout" in tools and ask for an explanation (e.g., "Explain how LLMs work").
* **Output:** Instead of text paragraphs, you get a graphical breakdown with steps (e.g., [[concepts/training|Training]] $\\rightarrow$ Tokenization $\\rightarrow$ Prediction) and visual aids.

## 8\. [[concepts/scheduled-actions|Scheduled Actions]]

Automates recurring prompts to run at specific times.

* **[[concepts/setup|Setup]]:** Simply ask in chat: "Create a weekly scheduled action. Every Monday at 8:00 AM, send me a summary of the latest AI updates."
* **Management:** You can toggle, edit, or delete these automations in **Settings > Scheduled actions**.

## 9\. [[concepts/prompt-engineering|Prompt Engineering]] ([[entities/gemini-3-pro|Gemini 3 Pro]])

Because Gemini 3 is a [[concepts/reasoning-model|reasoning model]], prompt engineering differs slightly from older models:

1. **Be Concise:** It performs best with direct, clear instructions rather than verbose, over-engineered prompts.
2. **Specify Output Verbosity:** By default, it is concise. If you want a chatty or elaborate response, you must explicitly ask for it.
3. **Context Placement:** Place your specific question or instruction at the **end** of the prompt, _after_ the data/context, to prevent the model from getting lost in large [[concepts/training-data|datasets]].

## 10\. Key Settings

* **Instructions for Gemini:** Set a global baseline instruction (System Prompt) that applies to _every_ chat (e.g., "Always be concise, direct, and MECE").
* **Apps:** Manage connections to [[entities/github|GitHub]], [[entities/youtube|YouTube]] Music, and Google Workspace.
* **Public Links:** Manage or delete links to chats you have previously shared publicly.

## Related Concepts
- [[concepts/workspace-features|Workspace Integration]] — [Wikipedia](https://en.wikipedia.org/wiki/Workspace_Integration)
- [[concepts/native-integration|Native Integration]] — [Wikipedia](https://en.wikipedia.org/wiki/Native_Integration)
- [[concepts/advanced-reasoning|Advanced Reasoning]] — [Wikipedia](https://en.wikipedia.org/wiki/Advanced_Reasoning)
- [[concepts/models|Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Models)
- [[concepts/automation|Task Automation]] — [Wikipedia](https://en.wikipedia.org/wiki/Task_Automation)

## Related Entities
- [[entities/ali-h-salem|Ali H Salem]] — [Wikipedia](https://en.wikipedia.org/wiki/Ali_H_Salem)
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- [[entities/gemini|Gemini]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini)
- [[entities/gmail|Gmail]] — [Wikipedia](https://en.wikipedia.org/wiki/Gmail)
- [[entities/google-calendar|Google Calendar]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Calendar)
- Docs — [Wikipedia](https://en.wikipedia.org/wiki/Docs)
- Drive — [Wikipedia](https://en.wikipedia.org/wiki/Drive)
- Fast Model — [Wikipedia](https://en.wikipedia.org/wiki/Fast_Model)
- Gemini 3 (Reasoning) — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_3_%28Reasoning%29)
- Context Window — [Wikipedia](https://en.wikipedia.org/wiki/Context_Window)
- Gap Analysis — [Wikipedia](https://en.wikipedia.org/wiki/Gap_Analysis)
- [[entities/notebooklm|NotebookLM]] — [Wikipedia](https://en.wikipedia.org/wiki/NotebookLM)