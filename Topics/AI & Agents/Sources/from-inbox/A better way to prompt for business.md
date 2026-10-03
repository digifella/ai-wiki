---
wiki-ingested: true
domain: ai-agents
group: reasoning-context-prompting
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=7GRHAqJYjOI&ab_channel=StudioBuilder>

The speaker, [[entities/kevin-patrick-robbins|Kevin Patrick Robbins]], an advertising, editorial, and commercial photographer, explains that most users only achieve [[concepts/superficial-results|superficial results]] from LLMs because they use overly simplistic prompts. He outlines three levels of [[concepts/prompting|prompting]] to help users, especially solo entrepreneurs, leverage AI more effectively for their business. The techniques discussed are generally applicable to free versions of LLMs like [[entities/chatgpt|ChatGPT]], [[entities/google-gemini|Google Gemini]], and Perplexity, as well as their paid counterparts and [[entities/anthropic-claude|Anthropic Claude]].

1. **Level 1: [[concepts/basic-prompting|Basic Prompting]]** (01:04)
		This is the entry-level approach where users input simple, one-line requests.
		
		**Example:** "Write a [[concepts/marketing-plan|marketing plan]] for a [[concepts/photography-business|photography business]]."
		
		**Problem:** Such vague prompts yield generic, surface-level, and often unhelpful advice because the AI lacks sufficient context to fill in the details meaningfully.
		
		**Improvement:** Even slight increases in specificity provide significantly better results. For instance, modifying the prompt to "Write a marketing plan for a luxury wedding photographer targeting high-net-worth clients in Austin, Texas" (01:49) provides the AI with crucial context about the niche, target audience, and location, leading to more actionable advice. The core principle here is: **More Detail = Better Results**.
		
2. **Level 2: Structured Prompting** (02:40)
		This level involves moving from simple questions to providing detailed instructions using a more rigid prompt structure.
		
		The recommended structure includes four key components:
		1. **Goal:** Clearly define what you want the AI to achieve (e.g., "Create a 90-day marketing strategy for a wedding photography studio").
			
		2. **Return Format:** Specify how the information should be organised (e.g., "Bullet-point action plan divided into three months").
			
		3. **Warnings:** Set boundaries to avoid undesirable outputs, such as generic advice or outdated strategies (e.g., "No generic advice like 'just post on Instagram,' suggest specific tactics like partnerships with local businesses, SEO blog topics and setting up an email list").
			
		4. **Context:** Provide detailed information about your business, target audience, brand style, and specific circumstances (e.g., "I own a modern luxury wedding photography studio in Austin, Texas targeting high-net-worth couples and luxury wedding event planners").
			
		**Benefit:** This structured approach results in advice that is custom-tailored to the user's specific business needs. An SEO content calendar example (04:53) further illustrates this.
		
3. **Level 3: Knowledge-Based Prompting** (06:19)
		This advanced level involves treating the AI like a research assistant or junior strategist by first training it with your own custom [[concepts/knowledge-base|knowledge base]].
		
		**Process:**
			Create "[[entities/chatgpt-deep-research|Deep Research]] Guides": These are comprehensive, professional-grade documents (e.g., brand development blueprints, content strategy guides, SEO [[concepts/best-practices|best practices]] for your niche) that define your business's standards, strategies, and principles. The speaker suggests using the LLM's own "deep research" capabilities to help generate these initial foundational documents. Examples include "Building an Ultra-Luxury Wedding Photography Brand" (07:25) and "Content That Converts: A Strategic Guide for Luxury Wedding Photographers" (08:51).
			
			Save these guides (e.g., as PDFs).
			
			Utilise these saved documents as a knowledge base by uploading them when prompting the AI for subsequent, more specific tasks.
			
		**Benefit:** The AI's responses are then based on this deep, customised research, moving beyond generic outputs to provide expert-level, highly relevant results. The AI isn't just guessing; it's referencing the specific knowledge you've provided.
		
		**Advanced Tip:** If you're unsure what should be in these deep research guides, you can ask the AI to outline a standard report for a specific topic and then ask it to generate a prompt that would help _you_ create such a report.
		

The overarching message is that by progressing through these levels—especially by creating and utilising a custom knowledge base—users can transform LLMs from simple query-[[concepts/solution|answer]] tools into strategic partners capable of producing highly specific and valuable outputs for their businesses.

**References:**

1. The video mentions the "Deep Research" functionality of ChatGPT (implicitly referring to features available in paid versions like file uploads and advanced data analysis that allow for context augmentation).
	
2. The general principles of [[concepts/prompt-engineering|prompt engineering]], such as providing context, defining roles, and specifying output formats, are widely discussed in AI best practice guides. For example, see [[entities/openai|OpenAI]]'s own best practices for prompt engineering. (OpenAI. (n.d.). _Best practices for prompt engineering with OpenAI API_. Retrieved 19/05/2024, from [https://platform.openai.com/docs/guides/prompt-engineering/best-practices](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplatform.openai.com%2Fdocs%2Fguides%2Fprompt-engineering%2Fbest-practices))
	

* * *

**Review and Suggestions for Human Interaction:**

	**Overall Impression:** The summary captures the essence of the video well, following the speaker's structured approach.
	
	**Additions/Corrections:**
		It might be beneficial to explicitly state that Level 3 "Knowledge-Based Prompting" often relies on features like file uploading, which are typically available in paid versions of LLMs like ChatGPT Plus, or through API integrations for developers. While the speaker mentions free versions can be used for earlier levels, this distinction for Level 3 is important.
		
		The speaker also [[concepts/notes|notes]] (11:40) that he has a specific SEO guide for photographers available. While not a core prompting technique, it's a resource mentioned.
		
	**Related Topics for Further Discussion:**
		The practical limitations of [[concepts/context-window|context window]] sizes in different LLMs when uploading extensive knowledge base documents.
		
		Techniques for iteratively refining the "Deep Research Guides" themselves using AI feedback.
		
		The concept of "[[concepts/custom-gpts|Custom GPTs]]" (in ChatGPT) or similar persona/instruction-saving features in other LLMs as a way to persistently apply Level 3 knowledge without re-uploading for every session.
		
		[[concepts/ethical-considerations|Ethical considerations]] when using AI to generate highly specialised content, particularly regarding originality and fact-checking.
		

Comment:

Level 4: create a prompt to create perfect prompts
Level 5: Create a custom GPT by giving it DeepResearch PDF documents and instruction on what to do and how to act.