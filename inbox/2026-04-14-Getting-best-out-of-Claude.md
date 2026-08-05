---
wiki-ingested: true
title: "Getting best out of Claude"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Getting best out of [[entities/claude|Claude]]

---
---
https://www.youtube.com/watch?v=Xob-2a1OnvA

[[entities/greg-rosenberg|Greg Rosenberg]] channel
Here is a [[concepts/markdown|Markdown]] [[concepts/summary|summary]] of the 10 techniques for [[concepts/prompting|prompting]] [[concepts/claude-code|Claude Code]] and [[entities/claude-opus|Claude Opus]] 4.5, based on the [[concepts/text-transcript|transcript]] provided.

* * *

# 10 Techniques to Master [[entities/claude-code|Claude Code]] & [[entities/opus|Opus]] 4.5

_Based on [[entities/anthropic|Anthropic]] [[concepts/best-practices|best practices]] and documentation._

## 1\. The [[concepts/tone-of-collaboration|Tone of Collaboration]]

**Golden Rule:** Use a friendly, clear, and firm tone. Treat the AI like a teammate. Politeness combined with directness yields better results than aggression or vagueness. Aggressive tones can lead to overly cautious, pre-canned [[concepts/responses|responses]].

* **Vague/Aggressive:** "Fix the [[concepts/grammar|grammar]] in this. NOW."
* **Architected Brief:**
	"**Please review** the following text for grammatical errors and suggest corrections. **My goal is** to make it sound more professional and confident."
	

## 2\. The Principle of Explicitness

**Golden Rule:** State your request as a clear, action-oriented command with all necessary details (Action verb + Quantity + Target Audience).

* **Vague:** "I need some blog post [[concepts/ideas|ideas]]."
* **Architected Brief:**
	"**Generate 10** blog post titles about the impact of remote work on urban planning. The titles should be **engaging for an audience of city officials** and real estate developers."
	

## 3\. Defining the Boundaries

**Golden Rule:** A well-defined box produces a more creative result than an empty field. Use constraints on length, [[concepts/style|style]], [[concepts/integrity|character]], and settings.

* **Vague:** "Write a short story about a detective in the future."
* **Architected Brief:**
	"Write a short story, **no more than 500 words**, in the **style of Raymond Chandler**. The story must feature a **robot detective** investigating a data theft on Mars. **Do not use the word 'cyber'.**"
	

## 4\. The Exploratory Draft

**Golden Rule:** Draft, plan, then act. Don't try to get a perfect final product in one specific prompt ("one-shotting").

* **[[concepts/workflow|Workflow]]:**
	1. **Ask for a Plan:** "First, propose an outline for this report."
	2. **Refine the Plan:** "That's a good start. In section 2, please add a sub-point about employee retention."
	3. **Execute:** "Excellent. Now, write the full report based on this revised outline."

## 5\. Specifying the Details of the Output

**Golden Rule:** Demand [[concepts/structured-output|structured output]]. The AI is fluent in formats beyond prose (Markdown, JSON, Tables, etc.).

* **Vague:** "List the last three Apollo missions and facts about them."
* **Architected Brief:**
	"Provide a list of the last three Apollo missions (15, 16, 17). For each mission, include the launch date, crew members, and a key scientific achievement. **Present this information in a Markdown-formatted table.**"
	

## 6\. Explaining the "Why"

**Golden Rule:** Explaining the context and intent behind an instruction helps the AI understand your true goal.

* **Vague:** "Give me five marketing slogans for a new brand of coffee."
* **Architected Brief:**
	"Give me five marketing slogans for a new brand of coffee. **The key is that** our beans are ethically sourced from small independent farms and **our target audience** is environmentally conscious millennials. The slogans should reflect quality and sustainability."
	

## 7\. The [[concepts/art|Art]] of Brevity (and Verbosity)

**Golden Rule:** Explicitly command the AI to be more or less verbose to match your needs. You are in control of the output length.

* **The Expert:** "Explain photosynthesis in detail for a college biology student. Think step-by-step to ensure [[concepts/accuracy|accuracy]]."
* **The Brief:** "Explain photosynthesis. Be concise and use bullet points."
* **The Simplifier:** "Explain photosynthesis like I'm five years old."

## 8\. Providing a Scaffold

**Golden Rule:** Give the [[concepts/ai-a|AI a]] template or example to guide its [[concepts/structure|structure]] and style. This is one of the most effective ways to control the final result.

* **Vague:** "Summarize this article."
* **Architected Brief:**
	"Summarize the following article **using this format**:
	**Main Thesis (1 sentence):** \[AI fills this in\] **Key Supporting Points (3 bullet points):** \[AI fills this in\] **Concluding Insight (1 sentence):** \[AI fills this in\]"
	

## 9\. Speaking the Language (Power Phrases)

**Golden Rule:** Using advanced prompting terms can trigger more sophisticated modes of operation. These terms activate specific behaviors in the model.

* **"Think step-by-step"**: Forces the model to lay out its [[concepts/reasoning|reasoning]] process (Chain of Thought), reducing errors on complex logic.
* **"Critique your own response"**: Asks the model to perform self-correction and find flaws in its initial draft.
* **"Adopt the persona of an expert in \[field\]"**: Primes the model to respond with deeper, domain-specific vocabulary and frameworks.

## 10\. The "Divide & Conquer" Strategy

**Golden Rule:** For a complex task, act as a conductor. Prompt for each part _separately_, then prompt for the synthesis.

* **Example (Creating a [[concepts/business-plan|Business Plan]]):**
	1. **The Blueprint:** "Create a detailed table of contents for a business plan for a specialty coffee shop."
	2. **Section by Section:** "Write the 'Executive Summary' based on our plan." -> "Now write the 'Market Analysis' section."
	3. **The Synthesis:** "Review the complete business plan. Ensure a consistent tone and check for any contradictions."

* * *

### Synthesis Example

_Combining the rules for a [[concepts/philosophy|Philosophy]] Lecture:_

> "**Act as a university professor of philosophy** _(Rule 9: Persona)_. I am preparing a 1-hour introductory lecture for students with **no prior knowledge** _(Rule 6: The Why)_.
> **First, create a lecture outline with three main sections.** The outline should have a clear introduction, body, and conclusion _(Rule 4: Exploratory Draft / Rule 10: Divide & Conquer)_.
> **Please format this as a nested bulleted list** _(Rule 5: Structure)_. For each major point, include a key Stoic figure (e.g., Seneca) and one of their core ideas.
> **Your tone should be accessible and engaging** _(Rule 1: Tone)_."