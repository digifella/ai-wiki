---
wiki-ingested: true
domain: ai-agents
group: anthropic-claude
---
<https://www.youtube.com/watch?v=pZ2N7CJFbBk> 
Here is a comprehensive [[concepts/markdown|Markdown]] [[concepts/summary|summary]] and guide based on the video:

# The Ultimate [[concepts/claude-code|Claude Code]] Desktop App [[concepts/workflow|Workflow]]

This guide details the "Master Workflow" for using the **Claude Code Desktop App**. By combining [[concepts/coding|local coding]], [[concepts/cloud-agents|cloud agents]], and a "Co-Pilot CEO" strategy within a single window, you can dramatically increase [[concepts/development-speed|development speed]] (10x) by [[concepts/running|running]] multiple work streams in parallel.

## 🚀 The Core Strategy

The workflow relies on three distinct components working simultaneously within the Claude Code Desktop App:

1. **Local [[entities/agent|Agent]]:** Builds features directly on your machine.
2. **Cloud Agent:** Builds features in the cloud via GitHub [[concepts/integration|integration]] (while you work locally).
3. **Chat (Co-Pilot CEO):** Plans strategy, marketing, and features without interrupting the coding process.

* * *

## 🛠 Step-by-Step Workflow

### 1\. Initial [[concepts/setup|Setup]] & Build

* **Download:** Get the desktop app from [Claude.ai](https://claude.ai).
* **Select Folder:** Open the Claude Code section and select a local folder to work in.
* **Model Selection:** Use **[[entities/claude-opus|Opus 4.5]]** (best coding model, same price as [[entities/claude-sonnet|Sonnet 4]].5 in this app).
* **Initial Prompt:** Define your project.
	* _Example Project:_ An infinite canvas app (like Excalidraw) using Next.js and LocalStorage.

### 2\. The "Plan Mode" Hack

_Currently, there is no native "Plan" button in the UI. Here is the workaround:_

1. Click the **CLI/Terminal icon** at the bottom of the Claude Code window.
2. Press `Shift + Tab` twice to enter **Plan Mode**.
3. Press `Tab` to enable **[[concepts/thinking-with-3-pro|Thinking Mode]]**.
4. Input a command like: _"Make me a plan for this app."_
5. Once the plan is generated, accept it to switch back to the main UI and let Claude execute the setup.

### 3\. The "Co-Pilot CEO" Strategy

_Stop context switching between [[entities/windows|windows]]. Use the_ **_Chat_** _tab inside the Desktop App._

1. Navigate to the **Chat** tab (separate from the Code tab).
2. Start a new chat with **Opus 4.5**.
3. **Prompt:** Tell Claude it is the "Co-Pilot CEO." Paste your original app prompt and ask for feature [[concepts/ideas|ideas]], marketing strategies, or roadmaps.
4. **Workflow:** Use this chat to generate ideas (e.g., "Add [[concepts/ai-image-generation|AI image generation]]") while the Code tab is busy building.

### 4\. Spinning Up Cloud Agents (The Multiplier)

_To run tasks in parallel, you need to offload work to the cloud._

1. **Push to GitHub:** In your Local Code chat, ask Claude: _"Can you commit this code to GitHub please?"_
	* It [[entities/will|will]] create a private repo and push the code.
2. **Switch to Cloud Environment:**
	* Click the dropdown menu currently set to "Local Worktree."
	* Select **Default** (This is the Cloud environment).
	* Search for and select your newly created repository.
3. **Assign a Task:** Ask the Cloud Agent to build a specific feature (e.g., _"Implement AI image generation using [[entities/nano-banana|Nano Banana]]"_).
	* _Result:_ The Cloud Agent works on [[entities/anthropic|Anthropic]]'s servers, leaving your local environment free.

### 5\. Parallel Local Development

_While the Cloud Agent is working:_

1. Switch the dropdown back to **Local Worktree**.
2. Assign a _different_ task to your Local Agent (e.g., _"Add an export to PNG button"_).
3. **Result:** You now have two developers working on two different features simultaneously.

### 6\. Merging the Work

1. Once the Cloud Agent finishes, it will generate a **Pull Request (PR)**.
2. Review the changes via the link provided or the UI.
3. Merge the PR to combine the Cloud Agent's work with your Local Agent's work.

* * *

## 💡 Key Features & Tips

* **[[entities/vs-code|VS Code]] Integration:** Click the "VS Code" button at the bottom of the app. It opens your project in VS Code with the Claude CLI automatically attached, allowing for a hybrid workflow.
* **Rename Sessions:** Rename your chat sessions (e.g., "Canvas App Local" vs "Canvas App Cloud") to keep your agents organized.
* **Thinking Mode:** Always utilize thinking mode for complex planning to get better architectural decisions.

## ⚡ Summary of the "Army of Agents"

By following this workflow, you simulate a full development team:

* **Local Agent:** Senior [[entities/developer|Developer]] (Frontend/UI).
* **Cloud Agent:** Backend/Feature Developer (Heavy lifting).
* **Chat Window:** CEO/Product Manager (Strategy & Marketing).

**End Result:** You build high-quality apps significantly faster than using a single linear chat interface.

## Related Concepts
- [[concepts/local-agent|Local Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Agent)
- [[concepts/cloud-agent|Cloud Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Cloud_Agent)
- [[concepts/co-pilot-ceo|Co-Pilot CEO]] — [Wikipedia](https://en.wikipedia.org/wiki/Co-Pilot_CEO)
- [[concepts/github-integration|GitHub integration]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub_integration)

## Related Entities
- Claude Code Desktop App — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code_Desktop_App)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)