---
wiki-ingested: true
title: "Langchain researcher with Gemini 2.5"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: google-ai-ecosystem
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[entities/langchain|Langchain]] researcher with [[concepts/gemini|Gemini]] 2.5

---
---
<https://www.youtube.com/watch?v=6Ww5uyS0tXw>
Source: Langchain

This video showcases a "[[entities/gemini|Gemini]] 2.5 [[concepts/multi-modal-researcher|Multi-modal researcher]]," a tool built using [[entities/gemini-ai|Google's Gemini]] 2.5 [[concepts/models|models]] through [[concepts/langgraph|LangGraph]]. The researcher is designed to perform [[concepts/comprehensive-investigations|comprehensive investigations]] and generate [[concepts/various-outputs|various outputs]], leveraging Gemini's [[concepts/native-capabilities|native capabilities]].
**Core Functionality & [[concepts/workflow|Workflow]]:** The researcher operates by taking two main inputs:

1. **Topic:** A user-defined research topic (e.g., "Give me an overview of the idea that LLMs are like a new kind of operating system").
2. **Video URL (Optional):** A [[entities/youtube|YouTube]] video URL, which the system can analyze in conjunction with the topic.

The workflow, demonstrated in [[entities/langgraph-studio|LangGraph Studio]], involves several distinct steps:

1. **Search Research:** Utilizes Gemini 2.5's native [[concepts/google-search|Google Search]] tool to perform web searches related to the given topic, retrieving real-time web results.
2. **Analyze Video:** If a YouTube URL is provided, Gemini 2.5's video understanding tool processes the video, extracting key concepts and insights relevant to the topic.
3. **Create Report:** Synthesizes the information gathered from both web search and video analysis into a comprehensive research report, including an executive [[concepts/summary|summary]] and cited sources.
4. **Create Podcast:** Generates an engaging, multi-[[entities/speaker|speaker]] podcast script based on the synthesized research. It then uses Gemini 2.5's text-to-speech (TTS) model with distinct voices (e.g., "Mike" and "Dr. Sarah") to produce an audio file of the podcast.

**Key Capabilities Highlighted:**

* **Native Tool Use:** Gemini 2.5's ability to natively integrate with tools like Google Search (for web results) and YouTube (for video understanding) is a core feature, allowing for dynamic and up-to-date research.
* **Multi-modal Processing:** The models can seamlessly handle and combine different data modalities, including text, images, and audio/video, providing richer insights.
* **Large [[concepts/context-window|Context Window]]:** Gemini 2.5 supports up to 1 million [[concepts/tokens|tokens]], enabling the processing of extensive amounts of information.
* **Multi-speaker Text-to-Speech:** The advanced TTS capabilities allow for the generation of natural and distinct voices for different speakers in the generated podcast, making the audio output highly realistic and engaging.

**Demonstration & [[concepts/implementation-details|Implementation Details]]:** The video shows a live demo where a topic and a YouTube URL are input, and the system progresses through the research, analysis, reporting, and podcast creation stages. The LangSmith trace is used to visualize the execution [[concepts/flow|flow]] and inspect the inputs and outputs of each internal LLM call, including the extracted video text and the full research report. The generated podcast is played, demonstrating the quality of the multi-speaker audio.
The speaker also delves into the underlying [[concepts/code|code]] (`graph.py`, `utils.py`, `configuration.py`), explaining how the [[entities/gemini-api|Gemini API]] is used for search, video analysis (passing YouTube URLs directly as `FileData` objects to the model along with a text prompt), and text-to-speech with customizable speaker voices and other [[concepts/parameters|parameters]]. LangGraph Studio's configurability allows users to easily switch between different Gemini 2.5 models (Pro, Flash, Flash-preview-tts) and adjust temperatures for different parts of the generation process.
**Overall Impression:** The speaker expresses strong positive [[concepts/feedback|feedback]] on the Gemini 2.5 models, noting their impressive performance on various benchmarks (Text, WebDev, [[concepts/computer-vision|Vision]], Search) and highlighting the groundbreaking [[entities/nature|nature]] of the multi-speaker text-to-speech feature for creating dynamic audio content. The multi-modal researcher serves as a practical and accessible example of how these new capabilities can be harnessed for automated research and content generation.

Source: https://www.youtube.com/redirect?event=video\_description&redir\_token=QUFFLUhqbkpQQVZrRmVINkJ5T28xSk8tTm5udnVGeFFGUXxBQ3Jtc0tsMXM1YkQ2UkEzWlhXaHNNb24ta3JiM3RHZlRnN2tHeTNXTlZRN0JVaEhTcGdLSHJTMGVyamNqM2JNdHVMcEJuVVIxVFlweTBXTEFwWWh1cnl0Ujh5YTBqYldNODVJX3M3QjBZd01pZ05ydkpmRHVUZw&q=https%3A%2F%2Fgithub.com%2Flangchain-ai%2Fmulti-modal-researcher&v=6Ww5uyS0tXw
https://www.youtube.com/redirect?event=video\_description&redir\_token=QUFFLUhqbWJqVGl2a1dPTkdGNmVnby1IeGx2OWRWTmViUXxBQ3Jtc0ttUEhNcGFIZGhlS3V2cUtWUzNuQ2RuYmpQYmZZWkItTXpaQV9rdWJ6eVY0dU1leXBSTmYwdVppMG9DUEg3U25HTTBka1dXcTZqazZfVms3NFQ2VHNrdHpzQ1dWa1pLdVl6RGxpcVptMVYtdjNBTlBvWQ&q=https%3A%2F%2Fmirror-feeling-d80.notion.site%2FGemini-2-5-21e808527b1780c994fdde9349f448c3%3Fsource%3Dcopy\_link&v=6Ww5uyS0tXw