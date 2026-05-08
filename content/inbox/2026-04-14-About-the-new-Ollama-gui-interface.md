---
wiki-ingested: true
title: "About the new Ollama gui interface"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: creative-pursuits
group: design-systems-ui-infographics
---
# About the new [[entities/llama|Ollama]] [[concepts/gui-interface|gui interface]]

---
---
<https://www.youtube.com/watch?v=8amsyT4NUrM>
[[entities/leon-van-zyl|Leon Van Zyl]] channel
This video provides a detailed overview of [[entities/ollama|Ollama]]'s new [[concepts/chat-application|chat application]], demonstrating its features for [[concepts/running|running]] large language [[concepts/models|models]] locally, interacting with them, and even creating [[concepts/custom-models|custom models]].
Here's a [[concepts/summary|summary]] of the video's content:
**1\. Introduction to Ollama:** Ollama is a tool that simplifies running [[concepts/large-language-models|large language models (LLMs)]] on your local machine. This allows users to download and run free, [[concepts/reasoning-models|open-source models]] securely and locally. The new chat app aims to provide a more user-friendly interface compared to interacting with models via the command prompt or terminal.
**2\. Setting Up Ollama:** Setting up Ollama is straightforward. Users need to visit ollama.com, download the latest version for their operating system (macOS, [[entities/windows|Windows]], or Linux), and install it. After installation, the chat application can be opened, presenting a chat interface.
**3\. Downloading Models:** Previously, downloading a model required copying a command from the Ollama website (ollama.com/models) and running it in the terminal. With the new UI, this process is simplified. Users can click on the model dropdown within the chat interface, which shows currently downloaded models and recommendations. To download a new model not listed, users can search for it in the "Find model..." field and then click the download icon next to the model name. The model [[entities/will|will]] then download in the background as soon as a message is sent to it for the first time.
**4\. Conversations:** Once a model is downloaded (e.g., Llama 3.2), users can start chatting with it. [[concepts/responses|Responses]] are streamed directly into the chat. Each new conversation initiated creates a separate entry on the left-hand side, which can be renamed or deleted by right-clicking.
**5\. Adding [[concepts/files|Files]] ([[concepts/multimodal-capabilities|Multimodal Capabilities]]):** The Ollama app allows users to add files to conversations by dragging and dropping them into the chat input area. This enables multimodal interactions, where the model can process information from the provided files. For example, a Q&A document was uploaded, and the model successfully extracted restaurant details and specials from it. The [[entities/speaker|speaker]] noted a desired feature for future updates: the ability to see citations for information retrieved from uploaded documents.
**6\. Context Limit:** Users can adjust the context length of their conversations in the "Settings" menu. The context length determines how much of the conversation the LLM can remember and use to generate responses. It can be increased from 4K [[concepts/tokens|tokens]] up to 128K tokens (or higher, depending on the model's capability). The video shows that many models, including `deepseek-r1` and `llama3.2`, support a 128K [[concepts/context-window|context window]]. Increasing the context length uses more [[concepts/memory|memory]] but can significantly improve conversation quality.
**7\. [[concepts/reasoning|Reasoning]] Models:** The video demonstrates using `deepseek-r1` (an 8 billion parameter model) for a reasoning task: creating an implementation plan for a Project Budgeting App using Next.js. A notable feature is the "Thinking..." section in the UI, which visually displays the model's reasoning process as it generates its detailed response, including [[concepts/code|code]] snippets and architectural diagrams.
**8\. Multimodal Models:** Ollama also supports multimodal models, such as the [[concepts/vision-capabilities|vision capabilities]] of the `gemma3:12b` model. The speaker uploaded an image (a [[entities/youtube|YouTube]] thumbnail) and asked the model questions about it, such as "What color is the man's shirt?" and "What does the text say?". The model correctly identified the shirt color as yellow and the text as "BEGINNER [[concepts/tutorial|TUTORIAL]]". It struggled slightly with recognizing the specific `n8n` logo but provided a general description.
**9\. Custom Models:** Users can create their own custom models by defining a `Modelfile` using a text editor. This file specifies a base model and a [[concepts/system-prompt|system prompt]]. For instance, the video shows creating a "Mario" model based on `llama3.2`, with a system prompt instructing it to respond as Mario from the Super Mario video game series, including specific characteristic phrases and personality traits. To create a custom model:

* Create a text file named `Modelfile`.
* Specify the base model: `FROM llama3.2`
* Add a system prompt: `SYSTEM """Your system prompt here"""`
* Open a terminal in the directory containing the `Modelfile`.
* Run the command: `ollama create [model_name] -f ./Modelfile` (e.g., `ollama create mario -f ./Modelfile`) Once created, the custom model appears in the app's model dropdown and can be selected for conversations, demonstrating the customized persona.

**10\. Conclusion/Suggestions:** The speaker concludes that Ollama's new chat app is a very promising start for [[concepts/testing|testing]] local LLMs. He suggests a few additional features for future development, including the ability to call tools (like [[concepts/mcp-servers|MCP servers]]), display citations when referencing files within the chat, and potentially generate characters directly from the UI.