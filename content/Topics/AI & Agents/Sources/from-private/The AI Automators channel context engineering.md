---
wiki-ingested: true
domain: science-physics
group: engineering-systems-robotics-autonomous-vehicles
---
<https://www.youtube.com/watch?v=WmG-PanaaSk>
Okay, I will retry and provide a detailed [[concepts/markdown|markdown]] of the video's content.

* * *

### 00:00 - 00:04: Introduction to [[concepts/external-knowledge-integration|Context Engineering]]

**Spoken Text:** Everyone's talking about context engineering right now. And for good reason.
**Visuals:**

* A blog post on a website "PHILSCHMID" with the title "The New Skill in AI is Not [[concepts/prompting|Prompting]], It's Context Engineering".
* Text on the page: "Context Engineering is new term gaining traction in the AI world. The conversation is shifting from '[[entities/prompt-engineering|prompt engineering]]' to a broader, more powerful concept: **Context Engineering**. **Tobi Lutke** describes it as 'the art of providing all the context for the task to be plausibly solvable by the LLM.' and he is right."
* The [[entities/speaker|speaker]], Alan Walsh, is visible in a small window at the bottom right.

* * *

### 00:04 - 00:08: Why Context Engineering is Crucial for AI Agents

**Spoken Text:** Now that we're in the era of AI agents, traditional prompt engineering is no longer enough.
**Visuals:**

* A screen capture of an n8n workflow interface. The workflow is titled "[[entities/the-ai-automators|The AI Automators]] - TheAIAutomators.com - HA...".
* It shows a complex flow with a central "HAL 9001" node connected to various "Supervisor" nodes (Productivity, Communication, Lifestyle, Insights, Publishing).
* The workflow starts with "When chat message received" and leads to "[[entities/telegram|Telegram]] Response".

* * *

### 00:08 - 00:19: Understanding the Scope of Context in AI Agents

**Spoken Text:** Agents need to be fed the right information at the right time. But that context can get polluted and maxed out very quickly when agents can work independently for long periods of time where they can access the web, [[concepts/knowledge-bases|knowledge bases]], and much more.
**Visuals:**

* The screen displays a conceptual Venn diagram titled "Context Engineering".
* The outermost circle is "Context".
* Inside, overlapping circles represent: "[[concepts/instructions|Instructions]] / System Prompt," "State / History (Short-term Memory)," "User Prompt," "Long-Term Memory," "Retrieved Information (RAGs)," "Available Tools," and "[[concepts/structured-output|Structured Output]]."
* Text below the diagram partially visible: "Instructions / System Prompt: An initial set of instructions that define the..."

* * *

### 00:19 - 00:30: Video Overview: 9 Context Engineering Strategies in n8n

**Spoken Text:** In this video, I'll be showing you nine different context engineering strategies and techniques within n8n, which can make your agents far more effective, and also help mitigate against a bunch of issues we'll talk about later.
**Visuals (Rapid Cuts of [[concepts/n8n-workflows|n8n Workflows]] and Blog Posts):**

* **00:19:** An n8n workflow titled "Agent with Short Term Mem...".
* **00:21:** An n8n workflow titled "Multimodal RAG - TheAIAutomators.com".
* **00:22:** An n8n workflow titled "The AI Automators - Newsletter [[concepts/ai-work-team|AI Agent Team]]".
* **00:23:** An n8n workflow titled "Agent with Long Term Mem...".
* **00:24:** An n8n workflow titled "My workflow 28" with a section "9. Compile Learnings with [[concepts/reasoning-model|Reasoning Model]]".
* **00:25:** The "Context Engineering" Venn diagram returns.
* **00:25:** A [[entities/langchain|LangChain]] blog post titled "General categories of context engineering".
* **00:26:** The LangChain article [[concepts/highlights|highlights]] problems like "exceed the size of the [[concepts/context-window|context window]]," "balloon cost / latency," "degrade agent performance."
* **00:27:** Specific issues listed: "Context Poisoning," "Context Distraction," "Context Confusion," "Context Clash."
* **00:28:** A diagram of "Turn 1" and "Turn 2" showing "Human," "System Message," "Tool call," "LLM," "[[concepts/feedback|Feedback]]" interactions.

* * *

### 00:30 - 00:37: Accessing Community Blueprints

**Spoken Text:** I'll be going through all of these in the video, but if you want to get a head start, we'll be sharing all of the blueprints with our community.
**Visuals:**

* The "THE AI AUTOMATORS" community page is displayed.
* A prominent blue banner is overlaid on the screen with text "Link in Description" and down arrows.
* Various "System Templates" or "Automations" are visible, such as "Agentic Sheets," "Multimodal RAG," "RAG Reranking," "Fine-tuned AI Agents," "InsightsLM," and "Hybrid RAG."

* * *

### 00:37 - 00:53: Understanding Context Window and LLM as RAM

**Spoken Text:** At a high level, the context window is the total amount of text that your AI model can handle at any one time. And your AI agents are constrained by this. As [[entities/andrej-karpathy|Andrej Karpathy]] put it, LLMs are like a new kind of operating system. The LLM is like the CPU and its context window is like the RAM, serving as the model's working memory. Just like RAM, the LLM context window has limited capacity to handle various sources of context. And just as an operating system curates what fits into a CPU's RAM, we can think about "context engineering" playing a similar role. Karpathy summarizes this well: "\[Context engineering is the\] delicate art and [[concepts/science|science]] of filling the context window with just the right information for the next step."
**Visuals:**

* **00:37:** [[entities/anthropic|Anthropic]] Developer Guide page on "[[concepts/context-windows|Context windows]]." The text "Understanding the context window" is highlighted.
* **00:44:** LangChain blog post about "Context Engineering". The analogy to CPU and RAM is highlighted in the text: "As Andrej Karpathy puts it, LLMs are like a new kind of operating system. The LLM is like the CPU and its **context window** is like the **RAM**, serving as the model's working memory." The quote by Karpathy is also visible.

* * *

### 00:53 - 01:27: Strategy 1: Short-Term Memory

**Spoken Text:** The first context engineering strategy we're going to go through is short-term memory. And while this is easy to do within n8n, it's really important to understand exactly what's going on. So I have a simple AI agent within n8n here, and you can select simple memory if you do not have an external database set up. And this number here represents the number of past interactions that the model receives as context.
**Visuals:**

* **00:54:** n8n workflow: "Agent with Short Term Mem...".
* **00:55:** Title card: "1. Short-Term Memory".
* **00:56:** The workflow shows "When chat message received" leading to "AI Agent", which is connected to "OpenAI Chat Model" and "Postgres Chat Memory". A dashed line from "Memory Tool" on "AI Agent" points to "Postgres Chat Memory".
* **01:03:** The "Postgres Chat Memory" is initially disconnected.
* **01:05:** The speaker sends a message "I'm thinking of a number 12783712893" in the chat.
* **01:06:** The "AI Agent" node and "Simple Memory" node turn green, indicating success.
* **01:07:** The "Simple Memory" node's [[concepts/parameters|parameters]] are shown. "Context Window Length" is set to "5". "How many past interactions the model receives as context" is displayed.
* **01:14:** The message "I'm thinking of a number 12783712893" is sent. The "Simple Memory" node saves it.
* **01:18:** The AI responds: "That's quite a large number! How can I assist you with it?".
* **01:20:** The speaker asks: "what was that number?".
* **01:22:** The AI responds correctly with the number, confirming it used the simple memory.

* * *

### 01:27 - 02:08: Short-Term Memory with External Database and Token Usage

**Spoken Text:** Okay, now instead of using simple memory, we're going to use Postgres instead. So I'm going to delete this and connect that to Postgres Chat Memory. So let's go into Supabase and within this, we see we have type human and the content, and then we have the response. And so now we can see the past messages directly within this database. But remember, it's still short-term memory. This is not a RAG system. It's still only going to remember the last few messages, whatever you've defined within the context window here is all it's going to take into account. The context window of LLMs are measured in tokens. And if you go into the model, so in this case the OpenAI Chat model, on the right-hand side, I can see the token usage for that previous call to the LLM. So this is a good way for you to monitor your token usage.
**Visuals:**

* **01:27:** The "Simple Memory" node is deleted from the workflow.
* **01:31:** "Postgres Chat Memory" node is connected to the "Memory Tool" input of the "AI Agent".
* **01:33:** A Supabase Table Editor is shown, displaying chat histories. The "message" column contains JSON objects for human and AI content, including the previous interaction.
* **01:49:** The "Postgres Chat Memory" parameters are shown, also with "Context Window Length" set to "5".
* **01:58:** The "OpenAI Chat Model" node's JSON output is displayed. Under "token\_usage", "completionTokens: 28," "promptTokens: 77," and "totalTokens: 105" are visible.

* * *

### 02:08 - 03:31: Strategy 2: Long-Term Memory (with [[entities/google-docs|Google Docs]] Example)

**Spoken Text:** Next up is long-term memory. There are lots of different ways to do this within n8n, but one of the easiest ways is just to use a Google Doc. In this case, when a chat message is received, the AI agent has the choice to update its long-term memories. So it decides if that message contains information that will be useful in the future. And the AI agent can then use this information long into the future. So I'll just start with a simple message, "My name is Alan." From there it's going to get the previous memories where there's currently nothing in there. And it's going to the LLM. It's saved something to the long-term memories. And it's going to respond to us. Now if I go into the Google Doc, it's added this line, "The user's name is Alan." Now if I follow up with that to say, "I use the [[entities/n8n|n8n automation]] platform." From there, I'm also expecting that to be saved to the long-term memory as well. And you see that's been saved separately. But if I ask another message like, "What is 9 x 5?" Then I'm expecting that not to be saved to the long-term memory. And there you go. It saved it to the short-term memory, but not the long-term memory. And the document was not updated.
**Visuals:**

* **02:08:** n8n workflow: "Agent with Long Term Mem...".
* **02:09:** Title card: "2. Long-Term Memory".
* **02:11:** The workflow includes "When chat message received" -> "Get Memories" (get document) -> "AI Agent" which connects to "OpenAI Chat Model," "Window Buffer Memory," and "Save Long Term Memories" (update document).
* **02:30:** Speaker types "My name is Alan" in the chat.
* **02:37:** The workflow executes. "Save Long Term Memories" node is highlighted, indicating it was used.
* **02:44:** AI responds: "Nice to meet you, Alan! How can I assist you today?".
* **02:45:** A Google Docs document is shown. It now contains "The user's name is Alan."
* **02:49:** Speaker types "I use the n8n automation platform."
* **02:56:** The Google Docs document is updated to include "The user uses the n8n automation platform."
* **02:58:** Speaker types "What is 9 x 5?".
* **03:06:** The Google Docs document is shown again, unchanged. The calculation result is not saved to long-term memory.

* * *

### 03:11 - 03:22: Long-Term Memory Options and AI Agent [[concepts/decision-making|Decision Making]]

**Spoken Text:** So instead of a Google Doc, you could also use a Google Sheet, you could use AirTable, you could use a database, you could use lots more. You could get the AI agent to categorize the type of memories, you could even dump this into a RAG system, which we'll talk about later on. But it's the same concept.
**Visuals:**

* **03:11:** The "Agent with Long Term Mem..." workflow is shown again.
* **03:17:** The speaker's overlay highlights how the AI Agent decides what to save to long-term memory.
* **03:22:** The speaker points to a new tool for "Retrieval Augmented Generation" (RAG).

* * *

### 03:22 - 04:08: Details of Long-Term Memory Implementation

**Spoken Text:** When a chat message is received, it gets the memories, so it's going to get the content of that document. This is just using a Google Doc node, we're using the get operation and I've pasted in the Doc URL. And on the right hand side, I see the content of the document. And then within the AI agent, I'm going to go into that. Within the user message, I'm passing in the chat input, but I'm also passing in the retrieved memories from that Google Doc. And if I expand out the system message, I've defined the overall behavior or operating procedure that I want this agent to follow, and how I want it to use this long-term memory. So I have this tool, Save Long Term Memories, and I'm asking it to summarize key personal info clearly and briefly. Keep it relevant and actionable. It should be one or two sentences maximum. Only factor in the current user message when storing memories. And I've provided an example.
**Visuals:**

* **03:25:** The "Get Memories" node parameters are shown. It's connected to a Google Docs account and uses a specific document ID. The "content" output is visible, showing the text from the Google Doc.
* **03:39:** The "AI Agent" node parameters are displayed. The "Prompt (User Message)" includes `{{ when chat message received.item.json.chatinput }}` and `*** Retrieved memories:\n{{ $json.content }}`.
* **03:48:** The "System Message" for the "AI Agent" is expanded, showing rules for "Memory Use," "[[concepts/privacy|Privacy]]," and a "TOOL: Save Long Term Memories" section with instructions like "Summarize key personal info clearly and briefly. Keep it relevant and actionable. It should be one or two sentences maximum. Only factor in the current user message when storing memories." An example of "Memory Saving Rule (Append-Only)" is given.

* * *

### 04:08 - 04:15: [[entities/chatgpt|ChatGPT]] and [[concepts/memory-management|Memory Management]] Analogy

**Spoken Text:** This is probably pretty similar to what ChatGPT is doing whenever you send a message where it deems to be memorable and it updates the long-term memory.
**Visuals:**

* **04:08:** A clean [[entities/chatgpt-4o|ChatGPT 4o]] interface.
* **04:11:** A black screen with "ChatGPT" and "Memory updated" in white text.

* * *

### 04:15 - 05:44: Strategy 3: Context Expansion via [[concepts/tool-calling|Tool Calling]]

**Spoken Text:** Next up, we have the idea of context expansion via tool calling. Tools really are what give AI agents their power. We can hook up lots of different tools and let the AI agent decide which ones to call depending on the message. Within this, I've added a Perplexity tool, which will give this access to the live web. I'll ask it to give me the biggest AI news items of the week. In this case, the AI agent will not have that within context, so it's going to choose to message Perplexity and that will dynamically inject that into the context. We've got a response from Perplexity and on the chat on the left-hand side, the agent has responded with a summarized version of what we got from Perplexity. But if we go into that agent, let's look at the logs on the top right. Here you can walk through exactly what the AI agent did. At the start, it got the short-term memory from Postgres, and then it sent our message to the OpenAI chat model, which is "give me the biggest AI news items of the week." There's no rendered response for this, but if you look at the JSON, the OpenAI responded with the tool that needs to be called. The response from Perplexity goes back to the agent, and then that gets sent back to OpenAI. But the entire response that we got back from Perplexity gets dumped into that message to OpenAI. That's fine in this case, but you can quickly see how the context could get very quickly polluted if you're not careful about what tools you're giving your agents access to. If you're using DeepResearch, the results could be significantly larger than this, and if you're using multiple tool calls, then again that's going to add to your token usage. We'll talk about ways you can manage this later on.
**Visuals:**

* **04:15:** n8n workflow: "Agent With Tool Calling".
* **04:16:** Title card: "3. Context Expansion via Tool Calling".
* **04:18:** The workflow shows "When chat message received" -> "AI Agent" connected to "OpenAI Chat Model," "Postgres Chat Memory," and "Message a model in Perplexity".
* **04:22:** The "Tools" panel is opened, showing a list of various available tools like "Airtable Tool," "AMQP Sender Tool," "Calculator," etc.
* **04:30:** The "Message a model in Perplexity" node parameters are shown. Its description is "Message a model in Perplexity to get access to live information from the web."
* **04:33:** Speaker types "give me the biggest AI news items of the week" in the chat.
* **04:44:** The AI agent responds with a list of AI news items of the week.
* **04:47:** The "AI Agent" node's "Logs" tab is opened. The input and output for "OpenAI Chat Model" show the initial query and the full, unsummarized response from Perplexity, including citations and a large amount of text. The entire response from the tool is being fed back into the LLM.

* * *

### 05:44 - 07:29: Strategy 4: RAG ([[concepts/traditional-rag|Retrieval-Augmented Generation]])

**Spoken Text:** Next up we have retrieval augmented generation, which we've gone through many times on the channel. RAG allows us to make large amounts of data available to our agents. Our pipelines break the documents up into chunks. It stores that data within a [[concepts/vector-database|vector database]] that we can semantically query and retrieve later. In our recent multimodal RAG video, we loaded up the entire content of this 39-page PDF, including text and images and tables, into our RAG system. Then when we ask the agent a question, it can then query that data from the vector store and respond with the relevant information grounded in that data, and in this case, it also even includes images. In this other example here, I have a simple Google folder, and this data ingestion workflow is going to iterate through all of those files, and then save those and vectorize them to the vector store within Supabase. The content of this document is now represented within this vector store. And I've attached this vector store to the agent. So I can now ask it a question like, "What are your shipping [[concepts/policies|policies]]?" And when it does that, it should query the vector store, try and get relevant information from that [[concepts/knowledge-base|knowledge base]], and then respond based on that. In this case, we've received the top results for that query, that's been sent back to us via the agent. And if I examine that Supabase Vector Store execution, we see it's got back a bunch of [[concepts/responses|responses]], and then it will load that into the context of the AI model. RAG is an incredibly powerful concept, and Daniel on our channel created a full masterclass that takes you through the entire process of setting up your pipelines and retrieving your data, so definitely check that out. And we go through lots of other advanced concepts like hybrid RAG, [[concepts/agentic-rag|agentic RAG]], multimodal RAG, and lots more. RAG systems respond with a very dynamic context, and you genuinely need to be quite careful about how you engineer that for your use case. And again, it's important to note, when we go into the agent, we go into the logs, and we look at the OpenAI Chat model, and within this tool call, we see here that the entire response, so every single chunk of data we got back from the vector store was dumped straight into this tool message and sent to OpenAI. So again, it's not like there's more sophisticated things going on behind the scenes here. All of the result is just dumped into the context window of the AI agent, and we have the same constraints we have for every other tool.
**Visuals:**

* **05:44:** n8n workflow: "Multimodal RAG - TheAIAutomators.com".
* **05:45:** Title card: "4. RAG (Retrieval-Augmented Generation)".
* **05:48:** A diagram illustrating "RAG (Retrieval Augmented Generation)". **Step 1: Import Data:** Documents -> Chunks -> Vectors -> [[concepts/embedding-model|Embedding Model]] -> Vector DB. **Step 2: Query & Retrieve Data:** [[concepts/user-query|User query]] -> [[concepts/vector-representations|Embeddings]] -> LLM -> Vector DB -> Top K results -> Response.
* **06:00:** A PDF document (washing machine manual) is scrolled through.
* **06:09:** A chatbot interface. The speaker types "where do I put the fabric softener?". The AI responds with detailed instructions and an image from the manual.
* **06:19:** A [[concepts/google-drive|Google Drive]] folder "RAG files" is shown, containing various file types like CSV, TXT, PDF.
* **06:22:** An n8n workflow "RAG File Creation & Update" is shown, with nodes to process files from Google Drive and push them to a "Supabase Vector Store."
* **06:30:** Supabase Table Editor shows "documents" table with "content" and "embedding" data.
* **06:34:** The RAG workflow from earlier is shown again. The speaker types "what are your shipping policies?" in the chat.
* **06:48:** The RAG diagram with "Step 2: Query & Retrieve Data" highlighted.
* **06:53:** The AI responds with the shipping policies.
* **06:55:** The "Supabase Vector Store" node's parameters are shown. "Limit" is set to "20". The JSON output shows chunks of text related to shipping policies.
* **07:04:** Two YouTube thumbnail images of Daniel's RAG masterclass videos: "n8n RAG MASTERCLASS Beginner -> Pro" and "You need Hybrid RAG".
* **07:08:** A blue banner is overlaid on the screen with text "Link in Description" and down arrows.
* **07:28:** The AI Agent's "Logs" tab confirms that the entire retrieved response from the vector store was passed as a tool message.

* * *

### 08:08 - 10:15: Strategy 5: [[concepts/context-window-separation|Context Isolation]] (Multi-Agent Teams)

**Spoken Text:** And this is where the next strategy can really come in useful. And that is the concept of context isolation. In our community, we have an AI agent team that can handle the generation of a newsletter. This AI agent can research, it can write, it can publish, it can check analytics, it can post to social media, and it can also manage subscribers. But each of these tasks are handled within a separate sub-agent. And the main reason for this is that there are a limited number of tools that an AI agent can really handle before things just start getting too unwieldy. The current models would not really be able to follow the overall operating procedure to be able to deal with all of those tools. And most importantly, it's too much context for this agent to handle at once. So within each of these tools, if we click into one of them, we see another workflow is selected. So in this case, it's this Researcher workflow. We have this workflow input trigger, but that triggers another agent. And the same applies for all of these other [[concepts/sub-agents|sub-agents]]. And this is a multi-agent system. The key here is that each of the sub-agents manage their individual context. They all have their individual memory, and when responses are sent to the sub-agent, such as the entire markdown of an external page, or a [[concepts/google-search|Google search]], then this Researcher agent chooses how to handle that, and then responds back to the main agent without polluting the overall context of the main agent. So this idea of context isolation is one of the main reasons why multi-agent teams are so useful. And you can take this concept as far as you want. For example, on our channel, Daniel created a multi-layered multi-agent team. We have this main overall HAL 9001 agent, which has access to each of these supervisor agents. For example, when I click into this Productivity Supervisor, we can see that that has access to multiple other sub-agents. And then if I go to this Calendar Agent, this is the third level deep, and that Calendar Agent then has access to multiple tools. This is certainly not all of it's required, and MCP can also help to simplify things a little bit, but it shows the potential of this type of [[concepts/architecture|architecture]]. So if you want to call [[concepts/external-tools|external tools]] without polluting the entire context of the main agent, then using sub-agents or sub-workflows is one of the only ways to do it natively within n8n.
**Visuals:**

* **08:08:** n8n workflow: "The AI Automators - Newsletter AI Agent Team".
* **08:10:** Title card: "5. Context Isolation".
* **08:11:** The workflow shows a central "AI Agent" connected to multiple specialized "Agents" (Research, Writer, Publisher, Analytics, Social Media, Subscriber Manager).
* **08:47:** The "Research Agent" node parameters are shown. Its "Workflow" input is set to "The AI Automators - The AI Automators: Researcher Sub-Agent".
* **08:50:** The "Researcher Sub-Agent" workflow is shown. It contains a "Researcher Agent" node that has access to specific tools like "Fetch Webpage Markdown," "Google Search," and "Property Price Register."
* **08:57:** The "Writer Agent" workflow is shown, with its own specific tools.
* **08:58:** The "Social Media Agent" workflow is shown, with its own specific tools for posting to Facebook, X, and Instagram.
* **08:59:** The "Subscriber Manager Agent" workflow is shown.
* **09:31:** A highly complex, multi-layered n8n workflow ("The AI Automators") is displayed. A central "HAL 9001" agent connects to various "Supervisor" agents (Productivity, Communication, Lifestyle, Insights, Publishing).
* **09:45:** The "Productivity Supervisor" workflow is shown, connecting to further specialized "Agents" (Calendar Agent, Drive Agent, Docs Agent, Sheets Agent, ClickUp Agent, CRM Agent, Airtable Agent).
* **09:51:** The "Calendar Agent" workflow is shown, connecting to calendar-specific tools (View Calendar Events, Create Event, Check Availability, Update Event, Delete Event).

* * *

### 10:15 - 13:30: Strategy 6: Summarizing Context (Context Compression)

**Spoken Text:** Next up, I'd like to explain summarizing context, which is a type of context compression. I've already touched on this within the previous multi-agent team, but I really wanted to explain this using a simpler example because this is a great strategy to manage your context. It's a slightly contrived example where I've just hooked up a HTTP Request as a tool, so we can then ask that to scrape an external site and it should hopefully do that and send the results back to the AI agent. Here I'll just ask it, "What is on the page: https://www.theaiautomators.com/". And then it should give us a response. It's now returned with a response, which is good. If we go into the HTTP Request for that, the response from this was the entire HTML of the page, so there's quite a lot going on here. I'll go through a nicer way of doing this in a few minutes, but this is a good example. So we have the entire HTML of the page. That gets sent back to the AI agent. And if we look at the logs, again, the entire HTML of the page was dumped into the AI model, and that ends up within this context. And that's all fine, but if we have multiple tools, and if we're [[concepts/scraping|scraping]] a lot of data, that could become quite a problem. And an alternative way to do this is to create a separate workflow. And again, we're isolating the context here of let's say we have a new workflow, and I'm going to select when executed by another workflow. The add field, I'm going to select URL. And then from there, I'm going to add in a HTTP Request. I've executed the previous node here. I'm going to drag in the URL for that. And then we should be good from there. From here instead of just responding back with the entire HTML of the page, we're going to pass this into an AI model. So I'm going to select an LLM chain. I'm going to press the delete button here for the moment. I'm going to pin some data. Then I'll just pass in this URL as a test, and I'll click execute workflow. Now it should have scraped that page. Yeah, that's looking good. Now I'm going to pass this into the LLM chain. I'm going to select a model. I'm going to select OpenAI Chat Model. And here we can just use GPT-4.1-mini again. And go into the LLM chain. Now the user prompt within this LLM chain, I've just written, "Summarize the following and provide the most important 3 key points. 1 sentence each." I'm going to click execute step. This should respond with a pretty concise few sentences, which is summarizing the content of this. We have a fairly concise [[concepts/summary|summary]] on the right-hand side now. And now we can call this workflow from within our main agent. So I'll delete this HTTP Request tool, and I'll select Call n8n Workflow Tool. And I'll select that workflow input. I'll let the model define that workflow input, which is the URL. We define that at the very start of this. From here, I'm just adding in a description, "get data from external website." Now, I'm going to restart this chat [[concepts/session|session]]. Again, I'll send the same message as previously, "What is on this page?" Now it's going to call this external n8n workflow. We've got back a response from the workflow, and then the AI agent processed the response and then sends us back a message in the chat. And when we look at the logs for the AI agent, you see that there's no data here showing any of the HTML of the page. That context has been completely isolated into that other workflow. And all we got back from the workflow tool is a summary of this page.
**Visuals:**

* **10:15:** n8n workflow: "Agent - Summarizing conte...".
* **10:16:** Title card: "6. Summarizing Context".
* **10:17:** Workflow shows "When chat message received" -> "AI Agent" connected to "OpenAI Chat Model," "Simple Memory," and "HTTP Request".
* **10:41:** Speaker types "what is on the page: https://www.theaiautomators.com/" in the chat.
* **10:49:** AI agent responds with a summary of the website.
* **10:52:** The "HTTP Request" node parameters are shown. The "Response" output displays the full HTML code of the website.
* **11:06:** The "AI Agent" node's "Logs" tab shows that the full HTML data was sent to the OpenAI Chat Model.
* **11:21:** A new, empty n8n workflow is opened.
* **11:23:** The "When Executed by Another Workflow" trigger node is added. An input field "url" (type String) is added.
* **11:32:** An "HTTP Request" node is added. The URL is set dynamically from the workflow input `{{ $json.url }}`.
* **11:46:** A "Basic LLM Chain" node is added and connected to the "HTTP Request" node.
* **11:51:** The "When Executed by Another Workflow" input data is manually set to `{"url": "https://www.theaiautomators.com/"}` for [[concepts/testing|testing]].
* **11:57:** The workflow executes, and the "HTTP Request" node successfully retrieves the HTML.
* **12:02:** The "Basic LLM Chain" node parameters are shown. The "Prompt (User Message)" is "Summarize the following and provide the most important 3 key points. 1 sentence each. {{ $json.data }}".
* **12:20:** The "Basic LLM Chain" executes, producing a concise summary as text output.
* **12:33:** Back to the original "Agent - Summarizing conte..." workflow. The "HTTP Request" node is replaced with a "Call n8n Workflow Tool" node.
* **12:37:** The "Call n8n Workflow Tool" parameters are configured to call the newly created "Agent - Summarizing context (2 of 2)" workflow. The "url" input is defined automatically by the model.
* **12:51:** The speaker restarts the chat session and types the same URL query.
* **13:01:** The AI agent responds with the concise summary.
* **13:08:** The "AI Agent" node's "Logs" tab for the current run is displayed. The input to the "OpenAI Chat Model" shows the `chatinput` and then a "Tool" output with only the "Summary" text, not the full HTML, demonstrating context isolation.

* * *

### 13:30 - 14:50: Strategy 7: Context-Aware Routing & Context Staging ([[entities/chatgpt-deep-research|Deep Research]] Example)

**Spoken Text:** Next up, I'd like to look at this Deep Research blueprint, which touches on context routing and staging. This is a great blueprint within the n8n template library, where it can take a form submission, which is a research topic, and that can do full deep research on that topic. Deep Research requires extremely careful management of the context because every page that you scrape can add massive amounts of data to that context. So this is quite an advanced workflow where it's executing the same sub-workflow multiple times, and it's managing how it's passing the context between different nodes. For example, here it's researching topics one by one. And from here, it's compiling those learnings. But here it's not just delegating the entire context to an agent for it to figure it all out. This workflow has defined a pretty deterministic route for how it's going to handle the context of such a large amount of data. And sometimes that's just simply required for a task. Throughout this process, the SERP queries and the learnings can take a very, very long time to process. For example, as it says here, it can take up to an hour or more on higher settings. From here, it's then using a chain of thought model to generate a report using all of those insights. So this is quite a complex example, but it's a good example of how you could use n8n to handle very long-[[concepts/running|running]] tasks with very large amounts of data. So if you want to check out the templates for that, then check the link in the description.
**Visuals:**

* **13:30:** n8n templates page. Title: "Host Your Own AI [[concepts/deep-research-agent|Deep Research Agent]] with n8n, Apify and OpenAI o3".
* **13:31:** Title card: "7. Context-Aware Routing & Context Staging".
* **13:38:** The "n8n DeepResearch" workflow is shown. It's a large, intricate workflow with multiple sections: "1. Let's Research!", "2. Ask [[concepts/clarifying-questions|Clarifying Questions]]", "3. Create Empty Report Page in Notion", "4. Trigger DeepResearch Asynchronously", "5. Set Report to In-Progress", "6. Perform DeepSearch Loop", "7. Generate Search Queries", "8. Web Search and Extracting Web Page Contents using APIfy.com", "9. Compile Learnings with Reasoning Model", "10. Generate DeepSearch Report using Learnings", "11. Reformat Report as Notion Blocks", "12. Append URL Sources List".
* **13:42:** A Notion database "n8n DeepResearch" is shown with various research topics and their statuses.
* **13:48:** The workflow focuses on the section "6. Perform DeepSearch Loop" and "8. Web Search and Extracting Web Page Contents using APIfy.com". It shows a loop where queries are generated, web pages are scraped, and results are accumulated.
* **14:09:** The "DeepResearch Learnings" node is highlighted, showing the prompt to summarize content into "maximum of 3 learnings, 1 sentence each".
* **14:15:** The "APIfy Web Browser" node is highlighted with a warning to update API credentials.

* * *

### 14:50 - 16:51: Strategy 8 & 9: Formatting and Trimming Context

**Spoken Text:** Another area that you should definitely give some consideration is the format of your context. For example, in this case, we used the HTTP Request to get the entire HTML response from that page. And then we're passing that into the AI model. There's a lot of extra information in here and it's in a HTML format. Instead of sending the entire HTML of the page into the AI model, we could convert this to markdown. So we could use this Markdown node. And then HTML to Markdown. I'll just drag and drop in the data from the previous node over here. And then from there, we can click execute step. And now we've really formatted that result into something that's a lot more manageable, and it's in a format that's far more LLM friendly. We can now pass this into our LLM chain. So now this should auto-map to the LLM chain because it's using this JSON variable here. Now I can execute this workflow using the same pinned data because it's going to call the same URL. Because we've sent far less text into OpenAI, we've used far less tokens. It's cheaper to process and far quicker. That's an example of how you can quickly change the format. If you're scraping external sites, you could alternatively use a service like [[entities/firecrawl|firecrawl]].dev, which will return back the markdown directly instead of the HTML. And you could then just add that directly as a tool to the AI agent. Another approach is context trimming, which can also be really useful. So let's take this previous workflow we have, and instead of dumping all of the markdown from the page, we can go into this Basic LLM chain, and we have this simple expression that's just going to take the first 1000 characters from the data, and we're going to send that into the AI model. This is a simple example, but it might help for your use case. It might reduce costs and also speed things up. There are lots of other ways we can reduce the amount of data going back to the agent. For example, for the short-term memory, we can just reduce the context window length. And if you're using a vector database, you could reduce the amount of chunks being returned for each query.
**Visuals:**

* **14:50:** The "Agent - Summarizing conte..." workflow.
* **14:51:** Title card: "8. Formatting Context".
* **14:55:** The "Agent - Summarizing conte..." workflow used before. The flow is "When Executed by Another Workflow" -> "HTTP Request" -> "Basic LLM Chain".
* **14:56:** The "HTTP Request" node's JSON output (full HTML) is shown.
* **15:08:** A "Markdown" node is inserted between "HTTP Request" and "Basic LLM Chain". The "Mode" is set to "HTML to Markdown", and the HTML input is from the previous node.
* **15:23:** The "Markdown" node's output shows the HTML converted into Markdown, which is cleaner and more readable.
* **15:31:** The "Basic LLM Chain" node parameters are shown again. The prompt input is now automatically mapped to the Markdown output.
* **15:37:** The workflow executes with the Markdown conversion. It's successful and uses fewer tokens.
* **15:53:** A new website "Firecrawl" is shown, specifically their dashboard. It highlights integrations with Python, JS/TS SDK, Langchain, [[entities/llamaindex|LlamaIndex]], Make, Discord, and CrewAI.
* **16:13:** Title card: "9. Trimming Context".
* **16:14:** The workflow with the Markdown node is displayed.
* **16:22:** The "Basic LLM Chain" node parameters are shown. A custom expression is added to the "Prompt (User Message)": `{{ $json.data.length > 1000 ? $json.data.slice(0, 1000) : $json.data }}`. This expression truncates the text to the first 1000 characters if it's longer than 1000.
* **16:32:** The "Simple Memory" node's parameters are shown, highlighting "Context Window Length".
* **16:45:** The "Supabase Vector Store" node's parameters are shown, highlighting "Limit" (which controls the number of chunks retrieved).

* * *

### 16:51 - 18:16: Conclusion and Call to Action

**Spoken Text:** So all of these examples should illustrate the point that we've gone beyond just simple prompt engineering. We're now hooking in external sources and RAG systems into our agents, which makes the context a lot more dynamic. So you need to use whatever strategies required to be able to manage that as necessary. This article by LangChain hits on a lot of key points around context engineering that are really useful to know. And here they summarize some of the main issues that can be caused by long context. If you don't manage your context and it gets out of control, you could get context poisoning where a hallucination makes its way into the context. When that happens, then the LLM can stay faithful to that original incorrect fact or hallucination and then reproduce that or make incorrect assumptions based on that. Context distraction is also an issue here as well, whereby if you have way too much information in your context window, the LLM might not be able to understand what to pick out, and you might have your needle in a haystack problem. Or you may also have unnecessary or contradictory information within your context, which can then negatively affect the outcome as well. So as you're building AI agents and automations, context engineering is one of the most important skills you need to have. If you're looking to dive deeper into AI and create agents that really work, then check out the link in the description to our community, where you'll get access to all of our templates, we've got live workshops where you can chat to us directly, as well as an active discussion board and access to all of our courses. Thanks for watching.
**Visuals:**

* **16:51:** The "Context Engineering" Venn diagram is shown again.
* **17:06:** LangChain blog post about "How Long Contexts Fail". The title "Managing Your Context is the Key to Successful Agents" is visible.
* **17:12:** The list of context problems (Poisoning, Distraction, Confusion, Clash) is highlighted.
* **17:15:** The "How Long Contexts Fail" article by Drew Breunig is shown, with a picture of a person carrying a large, unbalanced load.
* **17:18:** The LangChain article with the list of context problems is shown again.
* **17:54:** The LangChain article highlights the quote: "**Context engineering** ... is effectively the #1 job of engineers building AI agents."
* **17:59:** The "THE AI AUTOMATORS" community page is displayed, with the blue "Link in Description" banner. Various templates and community sections are visible.
* **18:09:** A section for "Live Recordings" showing video thumbnails and transcripts.

## Related Concepts
- [[concepts/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- [[concepts/context-engineering|Context Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Engineering)
- [[concepts/large-language-model-llm|LLM (Large Language Model)]] — [Wikipedia](https://en.wikipedia.org/wiki/LLM_%28Large_Language_Model%29)
- [[concepts/agentic-ai|AI Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agents)
- n8n workflow — [Wikipedia](https://en.wikipedia.org/wiki/n8n_workflow)
- [[concepts/video-content-analysis|LangChain]] — [Wikipedia](https://en.wikipedia.org/wiki/LangChain)
- Turn-based interaction — [Wikipedia](https://en.wikipedia.org/wiki/Turn-based_interaction)
- Context Poisoning — [Wikipedia](https://en.wikipedia.org/wiki/Context_Poisoning)
- Context Distraction — [Wikipedia](https://en.wikipedia.org/wiki/Context_Distraction)
- Context Confusion — [Wikipedia](https://en.wikipedia.org/wiki/Context_Confusion)
- Context Clash — [Wikipedia](https://en.wikipedia.org/wiki/Context_Clash)

## Related Entities
- [[entities/alan-walsh|Alan Walsh]] — [Wikipedia](https://en.wikipedia.org/wiki/Alan_Walsh)
- [[entities/philschmid|PHILSCHMID]] — [Wikipedia](https://en.wikipedia.org/wiki/PHILSCHMID)
- [[entities/tobi-lutke|Tobi Lutke]] — [Wikipedia](https://en.wikipedia.org/wiki/Tobi_Lutke)
