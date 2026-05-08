---
wiki-ingested: true
domain: ai-agents
group: google-ai-ecosystem
---
Sam wittenvern
<https://www.youtube.com/watch?v=KxXp8oiMzSw>
Here is a [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the video review for **[[entities/gemini-3|Gemini 3]] Flash**.

# Gemini 3 Flash: Model Overview & Review

## 🚀 Executive Summary

Gemini 3 Flash is Google's newest model, positioned as a [[entities/high-performance|high-performance]] "workhorse" or daily driver for developers. While technically a "Flash" (lightweight) model, it significantly outperforms its predecessor (2.5 Flash) and often rivals or beats the [[entities/gemini-2-5-pro|Gemini 2.5 Pro]] and Gemini 3 Pro [[concepts/models|models]] in specific benchmarks, particularly in [[concepts/coding|coding]] and [[concepts/agentic-tasks|agentic tasks]].

* * *

## 📊 Performance & Benchmarks

* **Comparison:** Roughly on par with **Gemini 2.5 Pro**. In some areas, it is currently tuned better than the early version of **Gemini 3 Pro**.
* **[[concepts/swe-bench-verified|SWE-bench Verified]]:** Outperforms the entire 2.5 series and scores higher than Gemini 3 Pro.
* **[[concepts/reasoning|Reasoning]] Benchmarks:**
	* _Humanity's Last Exam:_ Slightly behind Gemini 3 Pro (33.7% vs 37.5%).
	* _Math/Multimodal (AIME 2025/MMMU Pro):_ Slightly ahead of Gemini 3 Pro.
* **Token Efficiency:** A standout feature. The model is highly efficient, requiring fewer tokens to complete tasks compared to 2.5 Pro, 2.5 Flash, and 3 Pro. It "gets to the point quickly."

## ⚙️ Key Features & Settings

### 1\. Adjustable Thinking Levels

The model supports reasoning ("thinking") tokens, but the depth is adjustable via API/AI Studio:

* **High:** For complex questions (e.g., "Meaning of Life"), it engages [[concepts/deep-reasoning|deep reasoning]] similar to 3 Pro.
* **Minimal:** Acts like a traditional Flash model (fast, immediate response) without consuming reasoning tokens.

### 2\. Media [[concepts/solution|Resolution]] Settings

A new feature allowing developers to control the resolution of images passed to the model (Low, Medium, High, Default), useful for optimizing token usage vs. detail retention.

### 3\. [[concepts/multimodal-capabilities|Multimodal Capabilities]]

Extremely strong performance in [[concepts/document-parsing|structured data extraction]] from images, video, and audio. It handles [[concepts/spatial-understanding|spatial understanding]] better than previous generations.

* * *

## 💰 Pricing

Gemini 3 Flash is slightly more expensive than 2.5 Flash but cheaper than Pro models.

* **Input:** $0.50 per 1M tokens (vs $0.30 for 2.5 Flash).
* **Output:** $3.00 per 1M tokens.
* _Note:_ Due to higher token efficiency (using fewer tokens to solve a problem), the effective cost may balance out.

* * *

## 🛠️ [[concepts/use-cases|Use Cases]] & [[concepts/code|Code]] Examples (Demos)

The video demonstrated the model's capabilities using the **Interactions API** and **Pydantic** for structured outputs.

### 1\. [[concepts/structured-data|Structured Data]] Extraction (Text)

* **Scenario:** Analyzing a meeting transcript.
* **Result:** Successfully extracted decisions made, action items, assignees, and due dates in a structured JSON format in a **single shot**.

### 2\. Multimodal Extraction (Food/Recipes)

* **Scenario:** Uploading an image of _Tom Yum Soup_ and _Spaghetti Bolognese_.
* **Result:** accurately identified the dish, estimated calories per ingredient, and generated a step-by-step recipe and ingredient list based on the visual input.

### 3\. [[concepts/document-processing|Document Analysis]] (PDF & Handwriting)

* **Resume Parsing:** Extracted years of experience, [[concepts/skills|skills]], and education from a PDF resume without prior coordination on field names.
* **Handwriting Recognition:** Accurately extracted data (names, addresses, financial figures) from a photographed, handwritten tax return form.

### 4\. Spatial Understanding (Safety & Bounding Boxes)

* **Safety Check:** Identified potential hazards for a child in a kitchen photo (e.g., "knife block reachable," "cleaning supplies under sink").
* **2D Bounding Boxes:** excellent at drawing boxes around specific items (toaster, curtains, blender).
* **3D Bounding Boxes:** Hit-or-miss; generally identifies location correctly but boxes can be oversized.
* **Multi-view Analysis:** Able to identify and label the same objects (e.g., shoes, bag, toy) across multiple different images/angles.

* * *

## 🏁 Conclusion

Gemini 3 Flash is recommended as the default **"workhorse" model** for building applications.

* It combines the speed required for production apps with intelligence that rivals previous "Pro" models.
* It is particularly strong at **agentic [[concepts/workflow|workflows]]** and **data extraction** where cost and speed are critical.
* Google is using this model internally to power the "Google Antigravity" IDE and [[concepts/gemini-cli|Gemini CLI]] tool.

## Related Concepts
- [[concepts/large-language-models|Gemini 3 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_3_Flash)
- [[concepts/performance-benchmarking|performance benchmarking]] — [Wikipedia](https://en.wikipedia.org/wiki/performance_benchmarking)
- [[concepts/lightweight-models|lightweight models]] — [Wikipedia](https://en.wikipedia.org/wiki/lightweight_models)
- [[concepts/ai-coding|coding tasks]] — [Wikipedia](https://en.wikipedia.org/wiki/coding_tasks)

## Related Entities
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- [[entities/sam-wittenvern|Sam Wittenvern]] — [Wikipedia](https://en.wikipedia.org/wiki/Sam_Wittenvern)
- {'name': 'Sam Wittenvern', 'url': 'https://www.youtube.com/watch?v=KxXp8oiMzSw%27%7D — [Wikipedia](https://en.wikipedia.org/wiki/%7B%27name%27%3A_%27Sam_Wittenvern%27%2C_%27url%27%3A_%27https%3A//www.youtube.com/watch%3Fv%3DKxXp8oiMzSw%27%7D)
- [[entities/gemini-25-pro|Gemini 2.5 Pro]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Pro)
- [[entities/gemini-3-pro|Gemini 3 Pro]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_3_Pro)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/gemini-3-flash|Gemini 3 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_3_Flash)
- SWE-bench — [Wikipedia](https://en.wikipedia.org/wiki/SWE-bench)
- Interactions API — [Wikipedia](https://en.wikipedia.org/wiki/Interactions_API)
- Pydantic — [Wikipedia](https://en.wikipedia.org/wiki/Pydantic)
- Humanity's Last Exam — [Wikipedia](https://en.wikipedia.org/wiki/Humanity%27s_Last_Exam)
- Math/Multimodal (AIME 2025/MMMU Pro) — [Wikipedia](https://en.wikipedia.org/wiki/Math/Multimodal_%28AIME_2025/MMMU_Pro%29)
- Token Efficiency — [Wikipedia](https://en.wikipedia.org/wiki/Token_Efficiency)