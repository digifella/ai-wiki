---
wiki-ingested: true
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=prrWESXl7wg>
Here is a [[concepts/markdown|Markdown]] summary of the video transcript regarding the release of [[entities/llama|Ollama]]'s native UI.

# [[concepts/ollama-ui|Ollama Native UI]] Release

Ollama, traditionally known for its [[concepts/cli|command-line]] interface (CLI) and API, has released a native [[concepts/user-interface|User Interface]] (UI). While currently in a "first version" state, it is described as polished and a significant step toward making local AI more accessible.

## 📥 Installation

* **Availability:** Currently available via the Releases page on the Ollama GitHub repository (look for pre-releases).
* **Rollback:** Users can easily revert to the standard installation if they encounter issues.
* **Linux Command:**curl -fsSL https://ollama.com/install.sh | OLLAMA\_VERSION=0.5.7 sh  _(Note: Version number may vary based on the latest release)._

## 🖥️ UI & User Experience

The interface is designed to be minimal and simple, contrasting with the more complex/cluttered UI of competitors like LM Studio.

* **[[concepts/design|Design]]:** Simple chat box with a model selector in the bottom right corner.
* **Model Selection:**
	* Lists all locally installed models.
	* Shows some downloadable models (though not an exhaustive list).
	* **Filtering:** Supports filtering by typing the _beginning_ of the model name (prefix matching only, no fuzzy search yet).
	* **Auto-Download:** If you select a model you don't have, it initiates a download upon the first prompt.
* **Quantization:** The UI hides quantization details. All downloads default to **Q4** ([[concepts/4bit-quantisation|4-bit quantization]]), which is considered the "sweet spot" for performance vs. quality.

## ✨ Key Features

* **[[concepts/vision-capabilities|Vision Capabilities]]:** Supports drag-and-drop for images. The vision models work seamlessly within the chat.
* **RAG (Retrieval Augmented Generation):** Users can drag and drop text [[concepts/files|files]], PDFs, etc., to ask questions about the documents.
* **[[concepts/conversation-history|Chat History]]:**
	* A sidebar lists previous chats.
	* **Shortcut:** `Cmd + N` (on Mac) opens a new chat.
	* **Limitation:** No current keyboard shortcut to toggle the sidebar.
* **Standalone App:** There is no synchronization between devices; chats are local to the machine.

## ⚙️ Settings

The settings menu has been expanded slightly from previous versions:

* **Model Location:** Set where models are stored.
* **Network:** Toggle to expose Ollama to the local network.
* **Context Length:** A global slider to set context length.
	* _Critique:_ The [[entities/speaker|speaker]] [[concepts/notes|notes]] this is a poor design choice, as different models have different maximum context limits, and setting this globally can cause errors or garbage output.
* **Sign In:** A new option to sign into an Ollama account (functionality to be announced).

## 🛑 Missing Features / Wish List

The speaker highlighted several areas for improvement:

1. **Keyboard Shortcuts:** The CLI heavily relies on shortcuts, but the UI currently requires significant mouse usage (selecting models, opening sidebar).
2. **Advanced Filtering:** Ability to filter models by [[concepts/parameters|parameters]] (e.g., searching "8b" or "vision").
3. **Model Management:** No UI option to delete models, import models, or edit `Modelfiles`.
4. **Observability:** Lack of access to metrics, logs, or a Prometheus endpoint for tools like Datadog.
5. **Visuals:** No text resizing or UI zoom options.

## 🏁 Conclusion

The new UI is a fantastic entry point for new users who want to avoid the command line. However, [[concepts/power-users|power users]] [[entities/will|will]] likely stick with third-party front-ends like **Misty** or **[[concepts/open-webui|Open WebUI]]** for now due to the lack of advanced features and shortcuts.

## Related Concepts
- [[concepts/polished-ui|Polished UI]] — [Wikipedia](https://en.wikipedia.org/wiki/Polished_UI)
- [[concepts/local-ai|Local AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_AI)
- [[concepts/cli|Command-Line]] Interface (CLI) — [Wikipedia](https://en.wikipedia.org/wiki/Command-Line_Interface_%28CLI%29)
- [[concepts/power-user-interface|User Interface (UI)]] — [Wikipedia](https://en.wikipedia.org/wiki/User_Interface_%28UI%29)
- [[concepts/integrated-model-selection|Model Selection]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Selection)
- [[concepts/model-compression|Quantization]] — [Wikipedia](https://en.wikipedia.org/wiki/Quantization)
- [[concepts/retrieval-augmented-generation-rag|RAG (Retrieval Augmented Generation)]] — [Wikipedia](https://en.wikipedia.org/wiki/RAG_%28Retrieval_Augmented_Generation%29)
- Drag-and-Drop [[concepts/vision-capabilities|Vision Capabilities]] — [Wikipedia](https://en.wikipedia.org/wiki/Drag-and-Drop_Vision_Capabilities)

## Related Entities
- [[entities/ollama|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- [[entities/lm-studio|LM Studio]] — [Wikipedia](https://en.wikipedia.org/wiki/LM_Studio)
- Misty — [Wikipedia](https://en.wikipedia.org/wiki/Misty)
- Open WebUI — [Wikipedia](https://en.wikipedia.org/wiki/Open_WebUI)
- Datadog — [Wikipedia](https://en.wikipedia.org/wiki/Datadog)