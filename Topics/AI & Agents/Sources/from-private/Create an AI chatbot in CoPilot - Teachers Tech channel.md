---
wiki-ingested: true
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=Iz3ul6hSeTs>
Here is a [[concepts/markdown|Markdown]] summary of the video [[concepts/tutorial|tutorial]] on building an AI [[entities/agent|Agent]] in [[entities/copilot|Microsoft 365 Copilot]].

# Building a [[concepts/custom-ai-agent|Custom AI Agent]] with Microsoft 365 Copilot

In this video, [[entities/jamie|Jamie]] from [[entities/teachers-tech|Teachers Tech]] demonstrates how to build a custom AI customer service agent from scratch using Microsoft 365 Copilot. The tutorial uses a fictional business, "Pooch Haven Spa," to create an internal bot named "PoochPal" without [[concepts/writing|writing]] any [[concepts/code|code]].

## 🔑 Key Concepts

* **Target Audience:** Requires a Work or School account (not available for personal accounts).
* **Platform Distinction:**
	* **M365 Copilot (This video):** Used for internal [[concepts/knowledge-base|knowledge base]] bots within an organization.
	* **Copilot Studio (Next video):** The advanced "workshop" used for creating public-facing bots and complex automations.

## 🛠️ Step-by-Step Guide

### 1\. Getting Started

* Log in to **Microsoft 365 Copilot**.
* Select **Create Agent** from the dashboard.
* **Initial Prompt:** Use natural language to describe the agent.
	* _Example:_ "A friendly [[concepts/ai-assistant|AI assistant]] for Pooch Haven Spa customer inquiries."

### 2\. Configuration & Branding

* **Naming:** The agent was renamed from "New Agent" to **"PoochPal"**.
* **Icon:** A custom image (created via AI) was uploaded to replace the default icon.
* **Description:** Edited to include specific details, such as a support email address.

### 3\. Defining Instructions (The "Employee Handbook")

This section defines how the AI behaves. Copilot generates a draft based on the initial prompt, but custom rules should be added.

* **Tone:** Set to be "cheerful and professional."
* **The "No Hallucination" Rule:** Jamie added a critical instruction to prevent false information:
	"If you don't know the [[concepts/solution|answer]] to a question from the provided documents, do not make one up. Instead, politely direct the user to email our support team..."
	

### 4\. Building the Knowledge Base (The "Brain")

You can connect various sources for the agent to reference when answering questions:

* **Websites:** Enter a URL (e.g., the company website). The agent [[entities/will|will]] scrape this for info.
* **[[concepts/files|Files]]:** Upload documents like PDFs, Word docs, etc.
	* _Example:_ Uploaded "Frequently Asked Questions" and "Services & Pricing" documents.
	* _Note:_ If an uploaded file changes, it must be re-uploaded. Linked websites update automatically.

### 5\. Capabilities & Prompts

* **Capabilities:** Options to enable Code Interpreter (for math/data) or Image Generator. (Left off for this specific bot).
* **Suggested Prompts:** These are the clickable buttons users see to start a conversation. You can add, delete, or modify these to guide users on what to ask.

## 🧪 [[concepts/testing|Testing]] the Agent

Before publishing, the agent can be tested within the configuration window:

1. **Success Test:** Jamie asked "When are you open?" The agent correctly pulled the hours from the uploaded pricing document.
2. **Constraint Test:** Jamie asked "Who are the owners?" (Information _not_ in the documents). The agent followed instructions and provided the support email instead of making up names.

## 🚀 Publishing & Sharing

* Click **Create** to finalize the build.
* **Sharing Settings:** You can determine who has access to the agent:
	* Only you.
	* Specific users.
	* Anyone in your organization.
* Once saved, the bot appears in the **All Agents** list and is ready for interaction.

* * *

**Next Steps:** This tutorial covered the basics of an [[concepts/internal-knowledge-base-bot|internal knowledge bot]]. Part 2 will cover **[[entities/microsoft-copilot|Microsoft Copilot]] Studio**, focusing on advanced features like public access and automated tasks (e.g., sending emails).
\====

Microsoft 365 (M365) Copilot is an AI-powered productivity assistant that integrates with your daily Microsoft apps. It combines the power of [[concepts/large-language-models|Large Language Models]] (LLMs) with your own organizational data—like your emails, documents, and calendar—to help you work more efficiently.

### **What can M365 Copilot do?**

Copilot works across the entire Microsoft 365 suite, performing different roles depending on the app you are in:

* **In Word:** It can draft entire documents from a short prompt, summarize long reports, or rewrite text to change the tone (e.g., from casual to professional).
* **In Outlook:** It can summarize long email threads, draft replies based on your existing files, and help you "catch up" on your inbox by highlighting key action items.
* **In Teams:** It can summarize meetings in real-time, even if you join late. It can also identify who said what and list the next steps or action items decided during the call.
* **In [[entities/microsoft-excel|Excel]]:** It helps you analyze data, identify trends, and generate formulas or visualizations (charts) simply by asking questions in plain English.
* **In PowerPoint:** It can transform a Word document into a full presentation deck, complete with speaker [[concepts/notes|notes]] and images.

### **How is it used?**

There are two primary ways to interact with it:

1. **Within Individual Apps:** You’ll see a small Copilot icon in your toolbar. Clicking it opens a side panel where you can give it specific instructions related to the file you are working on.
2. **Copilot Chat (shown in your image):** This is a dedicated "work" version of an AI chatbot. You can use it to ask complex questions that require pulling information from multiple sources (e.g., "Summarize all the emails and documents I have regarding Project X from the last week").

### **Key Features shown in your image**

The screenshot you provided highlights some newer, advanced features of the M365 Copilot app:

* **Create Agent:** This allows you to build a custom "mini-AI assistant" (like the "PoochPal" example in the video) that is trained on a specific set of your files or websites. This is useful for creating a specialized bot that only answers questions about one specific project or company policy.
* **Work vs. Web Toggle:** You can choose between **Work** (where the AI strictly uses your private company data to answer) or **Web** (where it acts more like a search engine to find public information).
* **Enterprise Data Protection:** Unlike free [[concepts/ai-tools|AI tools]], M365 Copilot includes a "shield" ([[concepts/secure|security]]) that ensures your prompts and business data are never used to train the underlying [[concepts/ai-models|AI models]], keeping your sensitive information private.

## Related Concepts
- [[concepts/token-management|AI Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agent)
- [[concepts/summarization-levels|Microsoft 365 Copilot]] — [Wikipedia](https://en.wikipedia.org/wiki/Microsoft_365_Copilot)
- [[concepts/custom-bot|Custom Bot]] — [Wikipedia](https://en.wikipedia.org/wiki/Custom_Bot)
- [[concepts/knowledge-base-bot|Knowledge Base Bot]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Base_Bot)
- [[concepts/internal-bot|Internal Bot]] — [Wikipedia](https://en.wikipedia.org/wiki/Internal_Bot)
- [[concepts/customer-service-agent|Customer Service]] — [Wikipedia](https://en.wikipedia.org/wiki/Customer_Service)

## Related Entities
- Jamie from Teachers Tech — [Wikipedia](https://en.wikipedia.org/wiki/Jamie_from_Teachers_Tech)
- [[entities/pooch-haven-spa|Pooch Haven Spa]] — [Wikipedia](https://en.wikipedia.org/wiki/Pooch_Haven_Spa)
- [[entities/copilot-studio|Copilot Studio]] — [Wikipedia](https://en.wikipedia.org/wiki/Copilot_Studio)