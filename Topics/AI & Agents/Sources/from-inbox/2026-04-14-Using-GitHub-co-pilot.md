---
wiki-ingested: true
title: "Using GitHub co-pilot"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: reasoning-context-prompting
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Using [[entities/github|GitHub]] co-pilot

---
---
<https://www.youtube.com/watch?v=jXp5D5ZnxGM>
This video provides a concise overview of how to effectively use [[entities/github-copilot-agent|GitHub Copilot]] to enhance [[concepts/coding|coding]] productivity and [[concepts/problem-solving|problem-solving]].
Here's a detailed summary:
**1\. Getting Started with GitHub Copilot:**

* **The Secret:** There's no complex learning curve. The primary way to use Copilot is simply to _code_.
* **Automatic Activation:** Copilot's "Ghost Text" feature (auto-completion suggestions) is turned on automatically when you install the extension and log in.
* **Verifying & Managing:** Check for the GitHub Copilot icon (a small robot head) in your [[entities/vs-code|VS Code]] status bar to confirm it's active. Clicking the icon allows you to disable completions for a specific file or language if needed.

**2\. Core Functionality: Ghost Text**

* **How it Works:** As you type, Copilot anticipates your next move and provides code suggestions in a subtle, ghosted text.
* **Interaction:** **Accept:** Press `Tab` (Windows/Mac) to accept the entire ghost text suggestion. **Partial Accept:** Hold `Ctrl` ([[entities/windows|Windows]]) or `Cmd` (Mac) and press `Right Arrow` to accept word by word or phrase by phrase. **Dismiss:** Press `Esc` (Windows/Mac) to dismiss the ghost text.
* **Benefits:** Copilot is "remarkably good at anticipating your next move" and can do "a lot of the work for you," dramatically increasing speed and productivity. **Example 1 (Function [[concepts/slms|Definition]]):** Typing `function findDuplicateCharacters` prompts Copilot to suggest the full function body, including logic for finding duplicate characters in a string. **Example 2 (Variable Initialization & Function Call):** Typing `const nums` leads to a suggested array of numbers. Later, after defining a `removeNumber` function, typing a comment `// remove 3 from the array` followed by `Enter` prompts Copilot to suggest `removeNumber(nums, 3)`.

**3\. Advanced Functionality: Inline Chat**

* **How it Works:** You can chat directly with Copilot within your code editor to generate or modify code.
* **Trigger:** Press `Ctrl + I` (Windows) or `Cmd + I` (Mac).
* **Interaction:** Type your request (e.g., "a simple express server"). Copilot provides the code as a "diff view" (highlighting additions/changes), which doesn't become part of your file until you explicitly "Accept." You can "Discard" (Esc) if the suggestion isn't what you need.
* **Benefits:** "Great for iterating on your code right in line." Useful for making specific modifications to existing code blocks. **Example:** Highlighting an `app.get('/')` route and [[concepts/prompting|prompting]] Copilot to "return the static public/index.html file instead" results in the appropriate `res.sendFile` code.

**4\. Broader [[concepts/integration|Integration]]: Chat Sidebar, Quick Fix, and Terminal**

* **Chat Sidebar:** **Access:** Click the chat icon in the VS Code sidebar. **Experience:** Offers a more traditional chat interface, similar to other AI chatbots, making it familiar to users. **[[concepts/use-cases|Use Cases]]:** "Terrific for brainstorming," "figuring out [[concepts/implementation-details|implementation details]]," "solving problems and making decisions quicker." **[[concepts/customization|Customization]]:** You can drag the chat window into the secondary sidebar for a split view alongside your files. **History:** All your chat sessions are saved and accessible via the history icon at the top of the chat panel.
* **Quick Fix/Lightbulb (Error Assistance):** **Access:** When a problem or error is detected in your code, click on the lightbulb icon (Quick Fix) next to the error. **Options:** You'll find "Fix using Copilot" and "Explain using Copilot" options. **Benefits:** "Extremely good at fixing silly mistakes" and "explaining compiler errors that otherwise make no sense."
* **Terminal Integration:** **Access:** Look for the "sparkle icon" in the VS Code terminal. **Benefits:** Copilot can help explain terminal output or errors.

**Conclusion:** The video emphasizes that mastering GitHub Copilot's essentials is straightforward: simply keep your eye out for the sparkle icon and use the provided keyboard shortcuts (`Tab`, `Ctrl/Cmd + R Arrow`, `Esc`, `Ctrl/Cmd + I`) and chat interfaces. Copilot is a powerful tool designed to make developers significantly more efficient.