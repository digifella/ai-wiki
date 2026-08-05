---
wiki-ingested: true
title: "New Ollama UI - Matt Williams channel"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: open-systems-local-models
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# New [[concepts/ollama-ui|Ollama UI]] - [[entities/matt-williams|Matt Williams]] channel

---
---
<https://www.youtube.com/watch?v=prrWESXl7wg>
Here is a [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the video [[concepts/text-transcript|transcript]] regarding the release of Ollama's native UI.

# Ollama Native UI Release

Ollama, traditionally known for its [[concepts/command-line-interface-cli|command-line interface (CLI)]] and API, has released a native [[concepts/user-interface|User Interface]] (UI). While currently in a "first version" state, it is described as polished and a significant step toward making [[concepts/local-ai|local AI]] more accessible.

## 📥 Installation

* **Availability:** Currently available via the Releases page on the Ollama [[entities/github|GitHub]] repository (look for pre-releases).
* **Rollback:** Users can easily revert to the standard installation if they encounter issues.
* **[[entities/linux|Linux]] Command:**curl -fsSL https://ollama.com/install.sh | OLLAMA\_VERSION=0.5.7 sh  _(Note: Version number may vary based on the latest release)._

## 🖥️ UI & User Experience

The interface is designed to be minimal and simple, contrasting with the more complex/cluttered UI of competitors like [[entities/lm-studio|LM Studio]].

* **[[concepts/design|Design]]:** Simple chat box with a model selector in the bottom right corner.
* **Model Selection:**
	* Lists all locally installed [[concepts/models|models]].
	* Shows some downloadable models (though not an exhaustive list).
	* **Filtering:** Supports filtering by typing the _beginning_ of the model name (prefix matching only, no fuzzy search yet).
	* **Auto-Download:** If you select a model you don't have, it initiates a download upon the first prompt.
* **Quantization:** The UI hides quantization details. All downloads default to **Q4** (4-bit quantization), which is considered the "sweet spot" for performance vs. quality.

## ✨ Key Features

* **[[concepts/vision-capabilities|Vision Capabilities]]:** Supports drag-and-drop for images. The vision models work seamlessly within the chat.
* **RAG (Retrieval Augmented Generation):** Users can drag and drop text [[concepts/files|files]], [[concepts/pdfs|PDFs]], etc., to ask questions about the documents.
* **Chat History:**
	* A [[concepts/sidebar|sidebar]] lists previous chats.
	* **Shortcut:** `Cmd + N` (on [[entities/mac|Mac]]) opens a new chat.
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