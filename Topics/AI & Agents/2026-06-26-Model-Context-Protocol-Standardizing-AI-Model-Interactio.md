---
wiki-ingested: true
title: "Model Context Protocol: Standardizing AI Model Interaction with External Resources"
date: 2026-06-26
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: reasoning-context-prompting
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-26 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Model Context Protocol: Standardizing AI Model Interaction with External Resources
**Clip title:** How [[concepts/mcps|Model Context Protocol]] (MCP) actually works
**[[entities/tasia-custode|Author]] / channel:** [[entities/google-cloud|Google Cloud]] Tech
**URL:** https://www.youtube.com/watch?v=cGuyrANVi4A

### Summary
The video introduces the [[concepts/external-tools|Model Context Protocol]] (MCP), an open standard designed to solve the inherent complexities of integrating AI language models with external tools, data, and context. Traditionally, connecting an AI model to various [[concepts/open-standard-protocols|APIs]] or databases has been a messy process, requiring custom code for each integration and leading to frequent breakage when models or APIs change. The core problem lies in traditional APIs being built for deterministic [[concepts/software|programs]] written by humans, not for the probabilistic and [[concepts/reasoning|reasoning]] nature of [[concepts/ai-models|AI models]] that often need to ask questions, clarify, and explore before taking action.

At its heart, MCP acts as a shared, consistent language, providing a structured way for AI models to discover, understand, and interact with the [[entities/earth|world]] around them. It defines two main sides: the "Client," which is typically the [[concepts/statistical-language-modeling|language model]] or agent (like [[concepts/claude-ai|Claude]] or Gemini), and the "Server," which exposes various resources. Unlike traditional APIs that expect precise, predetermined requests, the [[concepts/mcp-server|MCP server]] advertises its capabilities—what tools, resources, actions, and inputs it supports—allowing the model to dynamically query and utilize them without needing prior hard-coded knowledge of specific [[concepts/implementation-details|implementation details]].

The protocol further defines four key resource types: "Tools" (actions the model can invoke, such as searching a database or sending an [[entities/email|email]]), "Resources" (pieces of data or state, like text documents or images), "Prompts" (reusable [[concepts/templates|templates]] guiding [[concepts/model-behavior|model behavior]] for specific tasks), and "Context" (external information the model can pull in for reasoning, such as [[concepts/conversation-history|chat history]] or user preferences). Each of these comes with descriptive [[concepts/metadata|metadata]] (description, input, output), enabling intelligent and adaptive interactions. This standardized schema ensures that regardless of the underlying system, the model can communicate effectively and perform complex chains of actions in a uniform, validated, and safe manner.

The practical implication of MCP is a significant simplification in [[concepts/ai-development|AI development]]. For instance, building a [[concepts/personal-assistant|personal assistant]] agent that accesses calendars, [[concepts/notes|notes]], and email would traditionally involve intricate custom integrations with each service's API. With MCP, developers can build or install standardized [[concepts/mcp-servers|MCP servers]] for these systems, each advertising its capabilities. The AI model then automatically understands these tools and can intelligently reason about which to use, in what order, and what data to exchange, without the [[concepts/developer|developer]] [[concepts/writing|writing]] fragile, custom "glue code." This shift, likened to how HTTP unified the web, positions MCP as a crucial standard for the future of AI, enabling more robust, scalable, and versatile [[concepts/ai-powered-applications|AI-powered applications]].

### Video Description & Links
#### Description
Google MCPs → https://goo.gle/3PYkjky 
Build an ADK agent with Google MCPs → https://goo.gle/4o6h8DP 
Connect an MCP server to an [[concepts/ai-agent|AI agent]] → https://goo.gle/4uk7YW2 

APIs were built for deterministic programs, but AI models reason probabilistically. So how do you get your [[concepts/agentic-ai|AI agents]] to talk to your tools and data without writing messy, custom integration code every time? Enter the Model Context Protocol (MCP). In this video, Smitha Kolan explains what MCP is, how it standardizes the way AI models discover and interact with external resources, and why it's becoming the new standard over traditional APIs for AI-powered applications

Chapters:
0:00 - Intro: The problem with APIs and AI 
0:48 - What is Model Context Protocol (MCP)?
1:26 - What exactly do MCPs connect to? 
2:43 - How MCP works (clients vs. servers) 
4:03 - MCP core components: Tools, prompts, resources & context 
5:20 - MCP vs. API: What is the difference? 
6:43 - Practical example: Building an [[concepts/ai-assistant|AI assistant]] using MCP 
7:48 - Summary

More resources:
Learn what AI agents and build an agent → https://goo.gle/AI-agents-explained
Learn how to build a MCP server → https://goo.gle/MCP-servers-explained
Read more about Google managed MCP servers → https://goo.gle/4e3Wobs 

🔗 Connect with Smitha online:
[[entities/youtube|YouTube]] → https://goo.gle/Smitha-on-YouTube 
Linkedin → https://goo.gle/Smitha-on-LinkedIn
X → https://goo.gle/Smitha-on-X

Watch more Modern AI Agents: From [[concepts/theory|Theory]] to Production → https://goo.gle/Learn-with-Smitha
🔔 Subscribe to Google Cloud Tech → https://goo.gle/GoogleCloudTech

#AIAgents #MCP #ModelContextProtocol

[[entities/speaker|Speaker]]: Smitha Kolan
Products Mentioned: [[concepts/computing-architecture|AI Infrastructure]]

#### URLs
- https://goo.gle/3PYkjky
- https://goo.gle/4o6h8DP
- https://goo.gle/4uk7YW2
- https://goo.gle/AI-agents-explained
- https://goo.gle/MCP-servers-explained
- https://goo.gle/4e3Wobs
- https://goo.gle/Smitha-on-YouTube
- https://goo.gle/Smitha-on-LinkedIn
- https://goo.gle/Smitha-on-X
- https://goo.gle/Learn-with-Smitha
- https://goo.gle/GoogleCloudTech

## Related Concepts
- [[concepts/model-context-protocol|Model Context Protocol]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol)
- [[concepts/ai-integration|AI Integration]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Integration)
- [[concepts/external-tools|External Tools]] — [Wikipedia](https://en.wikipedia.org/wiki/External_Tools)
- [[concepts/open-source|Open Standard]] — [Wikipedia](https://en.wikipedia.org/wiki/Open_Standard)
- [[concepts/xai-api|API Integration]] — [Wikipedia](https://en.wikipedia.org/wiki/API_Integration)
- [[concepts/context-management|Context Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Management)
- [[concepts/vanishing-gradient-problem|Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Language_Models)
- [[concepts/data-connectivity|Data Connectivity]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_Connectivity)
- [[concepts/custom-code|Custom Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Custom_Code)
- [[concepts/service-integration|System Interoperability]] — [Wikipedia](https://en.wikipedia.org/wiki/System_Interoperability)
- [[concepts/uncertainty-expression|Probabilistic Reasoning]] — [Wikipedia](https://en.wikipedia.org/wiki/Probabilistic_Reasoning)
- Deterministic Programs — [Wikipedia](https://en.wikipedia.org/wiki/Deterministic_Programs)
- Client-Server Architecture — [Wikipedia](https://en.wikipedia.org/wiki/Client-Server_Architecture)
- Tool Discovery — [Wikipedia](https://en.wikipedia.org/wiki/Tool_Discovery)
- [[concepts/prompt-templates|Prompt Templates]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Templates)
- Metadata Schema — [Wikipedia](https://en.wikipedia.org/wiki/Metadata_Schema)
- Glue Code Elimination — [Wikipedia](https://en.wikipedia.org/wiki/Glue_Code_Elimination)

## Related Entities
- [[entities/google-cloud-tech|Google Cloud Tech]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Cloud_Tech)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/smitha-kolan|Smitha Kolan]] — [Wikipedia](https://en.wikipedia.org/wiki/Smitha_Kolan)
- [[entities/claude|Claude]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude)
- [[entities/gemini|Gemini]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini)
- [[concepts/adk|Google ADK]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_ADK)