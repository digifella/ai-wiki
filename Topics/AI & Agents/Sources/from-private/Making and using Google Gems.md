---
wiki-ingested: true
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=Pwu0c5dUUOw>
<https://www.youtube.com/watch?v=Pwu0c5dUUOw>

Here is a detailed summary of the video by [[entities/tim|Tim]] Peakman regarding how to optimize [[concepts/workflow|workflow]] using **[[concepts/google-gemini-gems|Google Gemini Gems]]**.

### **The Core Problem**

Peakman argues that the majority of people use Large Language Models (LLMs) like [[entities/chatgpt|ChatGPT]], [[entities/claude-4|Claude]], and Gemini incorrectly. They waste time in a "back-and-forth" chat loop trying to refine answers, often resulting in dissatisfaction. For solopreneurs and small teams, this inefficiency is costly. The [[concepts/solution|solution]] is moving from generic chatting to **Custom Assistants**.

### **The Solution: Google Gemini Gems**

"Gems" are Google’s version of [[concepts/custom-gpts|Custom GPTs]]. They allow users to create [[concepts/specialized-ai-assistants|specialized AI assistants]] pre-loaded with specific instructions and knowledge, drastically reducing the need for repetitive [[concepts/prompting|prompting]].

### **The Framework for Creating a High-Quality Gem**

Peakman emphasizes that AI output is only as good as the input. To create a successful Gem, he recommends following Google's own four-part prompting formula found in their help section:

1. **Persona:** Define who the AI is. (e.g., "You are an expert marketing copywriter and SEO specialist. Your [[concepts/tone|tone]] is knowledgeable but informal.")
2. **Task:** Define exactly what the AI needs to do. (e.g., "Create a keyword-rich [[entities/youtube|YouTube]] description designed to [[concepts/motivation|drive]] clicks.")
3. **Context:** Provide the background information necessary to complete the task. (e.g., "I [[entities/will|will]] provide the transcript and title; you simply need to ask me for them.")
4. **Format:** Be specific about the structure of the output. (e.g., "Always start and end with the Call to Action link. Use bullet points for key learnings.")

**The "Knowledge" Feature:** Crucially, Gemini Gems allows you to upload [[concepts/files|files]] (via [[concepts/google-drive|Google Drive]]). Peakman suggests uploading **Brand Guidelines** and **Brand Messaging** documents so the AI inherently understands your business voice without needing to be reminded every time.

### **Practical Example: The "YouTube Description" Gem**

Peakman demonstrates how he built a Gem specifically to write his weekly YouTube video descriptions.
**Step 1: Configuration**

* **Name:** YouTube Description.
* **Instructions:** He pasted a prompt based on the 4-part formula above.
	* _Constraint:_ He explicitly told the AI _not_ to use salesy/hype language, make income guarantees, or mention competitors.
	* _Formatting:_ He pasted a previous "perfect" description as a model for the AI to replicate.
* **Knowledge:** He attached his specific brand documents.

**Step 2: Execution**

* He opens the Gem, which is pre-programmed to ask him for four specific things:
	1. The Main Keyword.
	2. The Video Title.
	3. The Full Video Transcript.
	4. The Call-to-Action (CTA) Link.

**Step 3: The Workflow**

* He inputs the keyword and title.
* He downloads the subtitles/transcript from YouTube Studio for the specific video and pastes the entire text into Gemini.
* He provides the CTA link.

**The Result:** The Gem analyzes the full transcript and produces a description that perfectly matches his required format (including timestamps, hashtags, and proper link placement) in seconds.

### **Key Takeaways**

* **Systemization:** This method turns repetitive tasks into a system, potentially saving 90% of the time usually spent on them.
* **Garbage In, Garbage Out:** The quality of the Gem depends on the specificity of the constraints and the quality of the "Knowledge" documents uploaded.
* **"Starter for 10":** Peakman [[concepts/notes|notes]] that the AI output should be viewed as a 90% complete draft (a "starter for 10") that you review and tweak, rather than a final product to publish blindly.

## Related Concepts
- [[concepts/custom-assistants|Custom Assistants]] — [Wikipedia](https://en.wikipedia.org/wiki/Custom_Assistants)
- [[concepts/large-language-models|Large Language Models (LLMs)]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models_%28LLMs%29)
- [[concepts/workflow-automation|Workflow Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Workflow_Optimization)

## Related Entities
- [[entities/tim-peakman|Tim Peakman]] — [Wikipedia](https://en.wikipedia.org/wiki/Tim_Peakman)
- [[entities/google-gemini|Google Gemini]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Gemini)