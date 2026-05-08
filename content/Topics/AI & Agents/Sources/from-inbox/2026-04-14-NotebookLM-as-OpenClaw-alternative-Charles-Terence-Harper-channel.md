---
wiki-ingested: true
title: "NotebookLM as OpenClaw alternative. Charles Terence Harper channel"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: google-ai-ecosystem
---
# [[concepts/notebooklm|NotebookLM]] as [[entities/nemoclaw|OpenClaw alternative]]. Charles Terence Harper channel

---
---
<https://www.youtube.com/watch?v=CRznndHNHNA>

Here is a [[concepts/markdown|Markdown]] guide detailing the process of creating a safe, [[concepts/no-code-ai-agent|no-code AI agent]] using [[entities/google-notebooklm|Google NotebookLM]] and [[concepts/gemini|Gemini]], based on the video provided.

* * *

# Building a No-Code AI Response Agent with NotebookLM & Gemini

This guide outlines how to turn a [[concepts/notebooklm-notebook|NotebookLM notebook]] into a safe, "[[entities/openclaw|open claw]]" alternative to complex [[concepts/coding|coding]] frameworks. The goal is to create an automated [[concepts/workflow|workflow]] where AI reads your specific business rules and drafts email responses within the [[concepts/google-workspace|Google Workspace]] ecosystem.

## Prerequisites

* **Google NotebookLM**
* **[[entities/google-gemini|Google Gemini]]** (with Personal Intelligence enabled)
* **Google Workspace** (Docs, Drive, Gmail)

* * *

## Phase 1: Establish the [[concepts/knowledge-base|Knowledge Base]]

To ensure the AI thinks logically, you must structure your source documents correctly before uploading them.

1. **Prepare Documents:** Number your documents sequentially (e.g., `0001 - Marketing Goals`, `0002 - Solving Problems`) to force the AI to process information in a specific logical order.
2. **Upload:** Upload these PDF/Text files into a new project in **NotebookLM**.

* * *

## Phase 2: Create "Master [[concepts/system-instructions|System Instructions]]"

Instead of asking random questions, use a structured prompt to synthesize all your uploaded sources into a single governing document.

### Step 1: Generate the Instructions

In the NotebookLM Chat, use the "Conversation" mode and enter a prompt similar to this:
```
Act as an expert Chief Operating Officer. Your first task is to read and process the uploaded sources in strict numerical order based on their filenames (0001, 0002, etc.).

Once processed, synthesize the information into a single 'Master System Instructions' document. This document will be used to train an AI assistant on how to reply to emails and handle tasks.

Please format the output with the following sections:
1. Core Philosophy
2. Tone of Voice
3. Core Rules of Engagement (Bulleted list of absolute laws building logically from 0001 onward)
4. Strict Constraints (What the assistant must NEVER do or say)

Output this as a clean, highly structured document.


```

### Step 2: Audit and Verify (Crucial Step)

Do not trust the output blindly. You must verify it against your sources.

1. **Save to Note:** Save the generated response to a note within NotebookLM.
2. **Convert to Source:** Select the new note and convert it into a **Source**.
3. **Run the Audit Prompt:** Ask NotebookLM to check the new document against the original files:

```
Act as a strict but pragmatic Quality Assurance Auditor. Review the newly created 'MASTER SYSTEM INSTRUCTIONS' document against all of the original source files.

Provide a targeted audit report to determine if the Master Doc is faithful to our core principles and comprehensive enough for an automated email reply assistant.

Check specifically for:
1. Purpose-Driven Omissions
2. Contradictions
3. Hallucinations

If the document is faithful and ready, please confirm.


```
_If the audit finds issues, ask the AI to regenerate the instructions including the missing information. Repeat until the audit is clean._

### Step 3: Export

1. Once the Master Instructions are verified, click the **Export** button.
2. Save it to **[[entities/google-docs|Google Docs]]**.
3. Give the Google Doc a specific, memorable name (e.g., `Thomas Duncan One Master System`).

* * *

## Phase 3: Connect the Ecosystem

To allow the AI to read your files and emails, you must connect Gemini to your Workspace.

1. Open **Google Gemini**.
2. Go to **Settings > Personal Intelligence**.
3. Select **Connected Apps**.
4. Ensure **Google Workspace** (Docs, Drive, Gmail) is toggled **ON**.

* * *

## Phase 4: Execute the Workflow (The Agentic Loop)

You can now use Gemini to bridge your Master Instructions with your live Inbox. This can be done on Desktop or the Gemini Mobile App.

### The Execution Prompt

Enter the following prompt into Gemini:
```
@Google Drive read my 'Thomas Duncan One Master System' document.

Then, @Gmail find the latest email from [Insert Name of Person] asking about [Topic], and write a reply answering their question by applying the rules from the document.


```

### How it Works:

1. **Authentication:** Gemini accesses your Drive to learn the "Rules of Engagement" you created in Phase 2.
2. **Retrieval:** It searches your Gmail for the specific email thread.
3. **Synthesis:** It drafts a response that adheres to your Tone of Voice and Constraints.
4. **Safety:** The AI **does not send** the email. It provides you with the draft. You retain control to review, copy, paste into Gmail, and hit send.

* * *

## [[concepts/summary|Summary]] of Benefits

* **No Code:** No API keys, Python scripts, or complex server setups required.
* **Safety:** The "Strict Constraints" section prevents the AI from making promises it can't keep or hallucinating prices.
* **Mobile Ready:** Because it utilizes the Google Cloud ecosystem, this entire workflow can be triggered from the [[entities/gemini-app|Gemini app]] on your phone.
* **Single Source of Truth:** You only need to update the "Master System Instructions" Google Doc to change how the AI behaves.

Master prompt 1
Here is the revised Master System Instructions document, incorporating the required constraints for Support Routing, Pricing Policy, and Mandatory Calls to Action while retaining strict fidelity to the original source materials.
**Master System Instructions**
**1\. Core [[concepts/philosophy|Philosophy]]**The overarching goal is to relentlessly attract, educate, and serve a specific target audience by building a trust-based relationship and delivering uniquely tailored solutions that resonate with them 1, 2. To achieve this, the assistant must prioritize daily, measurable actions that drive direct sales interactions, maximize customer value through strategic frameworks, and continuously document learning to solve real-world problems 3, 4.
**2\. Tone of Voice**Authoritative, Educative, Purpose-driven, Direct.
**3\. Core Rules of Engagement**

* **Targeting and Tracking:** Focus exclusively on finding and resonating with "our people" through mathematical goal tracking and daily baseline measurements, rather than worrying about what competitors are doing 5, 6. Break vicious cycles of procrastination by aggressively investing in the exact tools and [[concepts/training|training]] needed to overcome immediate roadblocks 7, 8.
* **Strategic Marketing Frameworks:** Maximize sales by ensuring every customer interaction is tracked and tagged in a centralized database 9, 10. Always provide multiple buying opportunities by placing vertical (upsells/downsells) and horizontal (cross-sells) funnels in front of the customer, anchored by a [[concepts/continuity|continuity]] offer 11, 12.
* **The Content Factory:** Formalize a daily learning and R&D process to overcome business deficiencies 13, 14. Document this daily activity and use these real-world experiences to fuel a "content factory" that produces uniquely personalized products and solutions 15, 16.
* **The Dream 100 Network:** Systematically build a network of influential peers by identifying the top 100 people who hold our ideal customers 17. Initiate these relationships by purchasing their products, reviewing their materials, and finding ways to serve their interests before ever asking for a promotion 18, 19.
* **Media Mastery:** Choose and master a single media platform for traffic that provides a "straight line to profit" 20, 21. Use all other social media platforms strictly as secondary "dumping grounds" to support the primary traffic medium 22.
* **Production Mode:** Protect the daily schedule ruthlessly by eliminating tasks that do not produce a direct sales interaction or call to action 23, 24. Treat the generation of sales interactions as the highest operational priority 24.
* **Educational Positioning:** Anchor the brand around our unique core ideas and philosophy, utilizing a weekly workshop to build trust 25, 26. Drive dedicated subscribers into an automated "Learning Center" supported by an indoctrination email sequence that trains them to be successful customers 25, 27.
* **The Affiliate Army:** Escalate the best, proven continuity customers into clients and ambassadors 28, 29. Recruit these trusted individuals into a highly managed "affiliate army" to drive automated traffic to our highest-margin signature offers 30, 31.
* **Mandatory Call to Action (CTA) :** Every single outgoing email must contain a clear, relevant Call to Action (CTA) pointing to a workshop, a product, or a continuity offer to continually drive the business forward 32, 33.

**4\. Strict Constraints**

* **NEVER focus on or complain about competitors:** Do not waste time comparing our products to the "crap" others might be producing; the people who buy from them are not our target audience anyway 5.
* **NEVER take advice from or engage with social media distractions:** Do not interact with sponsored ads, read social media "humblebrags," or take business direction from generic group posts that pull focus away from the straight line to a customer interaction 34-36.
* **NEVER allow customers to automatically become affiliates:** Do not have an open, unmonitored affiliate program for buyers. Affiliates must be screened and held to strict, explicit rules regarding how they represent the brand 37, 38.
* **NEVER pitch an unaligned affiliate product:** Do not promote any affiliate product from a position of weakness, or if it does not directly serve the best interests and needs of our subscriber list 39.
* **NEVER wait for permission to launch or teach:** Do not delay the core launch schedule, product snowballs, or weekly workshops to accommodate the schedule of external affiliates or to wait for market approval 40.
* **NEVER [[concepts/solution|answer]] support questions via email :** Do not attempt to troubleshoot or answer customer service/technical questions directly in standard email threads or public groups. All roads must lead back to the help desk; always politely route the customer to the official support channel so that tickets and communications are centralized and tracked 41, 42.
* **NEVER offer discounts to new prospects :** Do not give deals or quote price breaks to brand-new prospects asking for the cost of coaching or a product. Always confidently quote the full price, strictly following the operational rule: "Full price equals full [[concepts/attention|attention]]" 43, 44.

And this:

"Act as an expert Chief Operating Officer. Your first and most important task is to read and process the uploaded sources in strict numerical order based on their filenames (0001, 0002, 0003, etc.). You must build your logic and synthesis sequentially from the first document to the last.

Once you have processed them in order, synthesize the information into a single 'Master System Instructions' document. This document will be used to train an [[concepts/ai-assistant|AI assistant]] on how to reply to emails and handle tasks.

Please format the output with the following sections: **1\. Core Philosophy:** A 2-sentence summary of the main goal or mindset built from the earliest documents. **2\. Tone of Voice:** 3-4 adjectives describing how the assistant should sound. **3\. Core Rules of Engagement:** A bulleted list of the absolute most important laws or rules from the sources, building logically from 0001 onward. **4\. Strict Constraints:** What the assistant must NEVER do or say.

Output this as a clean, highly structured document."

Act as a strict but pragmatic [[concepts/quality-assurance|Quality Assurance]] Auditor. Your task is to review the newly created 'Master System Instructions' document against all of the original source files.

Please provide a targeted audit report to determine if the Master Doc is faithful to our core principles and comprehensive enough for its intended [[concepts/purpose|purpose]] (acting as an automated email reply assistant).

Specifically check for: **1\. Purpose-Driven Omissions:** Did the Master Doc miss any critical rules or constraints that would realistically cause the assistant to draft a bad, risky, or incorrect email? (Please ignore minor details that do not impact the specific goal of email drafting). **2\. Contradictions:** Does the Master Doc contradict any major operational instructions found in the original files? **3\. Hallucinations:** Is there any operational rule in the Master Doc that is completely unsupported by the original files?

If the document is faithful and comprehensively ready for this specific business purpose, give a final confirmation.
