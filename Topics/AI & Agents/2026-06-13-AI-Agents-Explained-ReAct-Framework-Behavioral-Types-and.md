---
wiki-ingested: true
title: "AI Agents Explained: ReAct Framework, Behavioral Types, and Google ADK"
date: 2026-06-13
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-13 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## AI Agents Explained: ReAct Framework, Behavioral Types, and Google ADK
**Clip title:** [[concepts/ai-agents|AI agents]] explained: Build your first agent in 8 minutes
**Author / channel:** [[entities/google-cloud|Google Cloud]] Tech
**URL:** https://www.youtube.com/watch?v=Zqno_vux6d8

### Summary
This video provides a comprehensive explanation of [[concepts/agentic-ai|AI agents]], distinguishing them from traditional chatbots by their ability to reason, act, and adapt. It introduces the foundational concept of "[[entities/react|ReAct]]," which involves a continuous cycle where an agent reasons (internal [[concepts/human-cognition|thinking]]), acts (calling tools or APIs), observes (data results), and then adjusts or decides its next steps. This [[concepts/iterative-refinement|iterative process]] allows modern AI agents to perform [[concepts/complex-tasks|complex tasks]] by breaking them down into manageable actions, evaluating outcomes, and refining their approach, thereby exhibiting a higher degree of autonomy and intelligence.

The video further categorizes AI agents into three behavioral patterns based on their [[concepts/decision-making|decision-making]] and planning capabilities. Firstly, **Sequential Agents** follow a rigid, step-by-step process, similar to an assembly line, ideal for predictable workflows. Secondly, **Reactive Agents** make decisions in the moment, offering flexibility for dynamic situations but lacking foresight. Lastly, **Deliberative or Planning Agents** pause to formulate a multi-step plan before execution, making them suitable for complex goals with dependencies, such as booking travel arrangements. The choice of agent pattern depends on the specific problem's nature and required flexibility.

To demonstrate these concepts, the video walks through building a sophisticated blog-[[concepts/writing|writing]] [[concepts/ai-agent|AI agent]] using [[concepts/google-search|Google]]'s [[concepts/agent-development|Agent Development]] Kit (ADK). This multi-agent architecture comprises a **Conductor (Root Agent)**, which takes a user's topic and delegates tasks, along with specialized **[[concepts/loop|Loop]] Agents** for planning and [[concepts/writing|writing]]. The Planner ([[concepts/loop|Loop]] Agent) generates a structured blog outline, while the Writer (Loop Agent) drafts the full technical blog post. Each of these [[concepts/sub-agents|sub-agents]] is paired with a validation checker that assesses its output against predefined criteria, ensuring quality and triggering automatic retries if validation fails.

The blog-writing agent's design emphasizes [[concepts/robustness|robustness]] and control. The "Robust Blog Planner" and "Robust Blog Writer" are implemented as Loop Agents, allowing them to iteratively refine their outputs based on [[concepts/feedback|feedback]] from their respective validation checkers, up to three times. This built-in self-correction mechanism enhances the [[concepts/software-reliability|reliability]] of the generated outline and final blog post. Finally, a "Blogger" (Root Agent) orchestrates these planner and writer tools in a clear, controlled workflow, taking a topic, planning, writing, checking, and ultimately delivering a polished blog post with alternate titles and [[concepts/hooks|hooks]]. The video concludes by showing how to run this multi-agent system using the `adk web` command, providing a practical interface to interact with and observe the agent's [[concepts/complex-reasoning|complex reasoning]] and action steps.

### Video Description & Links
#### Description
Follow the codelab → https://goo.gle/3Q5TSt3
[[entities/github|GitHub]] repo → https://goo.gle/4fsahT8 
Google Agent Development Kit (ADK) → https://goo.gle/3Q3enqf

At the simplest level, an AI agent doesn’t just answer—it decides and takes action. In this video, Smitha goes beyond basic chatbots and demonstrates how to build a fully autonomous, self-correcting multi-agent system from scratch using Google’s Google Agent Development Kit (ADK).


First, Smitha breaks down the [[concepts/theory|theory]] behind modern agents: the ReAct Framework (reasoning and acting) and the 3 main agent patterns (sequential, reactive, and planning). Then, she jumps straight into [[concepts/python|Python]] to build a practical *Blog Writing Agent*. Watch along and learn how to combine *Planner* and *Writer* agents with validation checkers and loop agents to create an AI that catches its own mistakes and automatically retries until it gets it right.

Chapters:
00:00 - AI Agents Explained
01:05 - The ReAct Framework Explained 
02:15 - The 3 Types of AI Agents (Sequential, Reactive, Planning) 
03:30 - Project Overview: The Auto-Correcting Blog Writer 
04:15 - Setting Up Google ADK & UV 
04:50 - [[concepts/coding|Coding]] the Planner Agent 
05:40 - Adding Auto-Correction (Validation Checkers & Loop Agents) 
06:50 - Coding the Blog Writer & Root Agent 
08:20 - Testing the AI in the ADK Web UI 
09:40 - What's Next? (Connecting to [[concepts/mcp-servers|MCP Servers]])

More resources:
ReAct Paper → https://goo.gle/4oa1oQ9 

🔗 Connect with Smitha online:
YouTube → https://goo.gle/Smitha-on-YouTube 
Linkedin → https://goo.gle/Smitha-on-LinkedIn
X → https://goo.gle/Smitha-on-X 

#AIAgents #GoogleADK #PythonTutorial #SoftwareEngineering #MachineLearning #LLMs

Watch more Modern AI Agents: From Theory to Production → https://goo.gle/Learn-with-Smitha
🔔 Subscribe to Google Cloud Tech → https://goo.gle/GoogleCloudTech

#AIAgents #Gemini

[[entities/speaker|Speaker]]: Smitha Kolan
Products Mentioned: Agent Development Kit, Gemini

#### Tags
`AIAgents`, `GoogleADK`, `PythonTutorial`, `SoftwareEngineering`, `MachineLearning`, `LLMs`

#### URLs
- https://goo.gle/3Q5TSt3
- https://goo.gle/4fsahT8
- https://goo.gle/3Q3enqf
- https://goo.gle/4oa1oQ9
- https://goo.gle/Smitha-on-YouTube
- https://goo.gle/Smitha-on-LinkedIn
- https://goo.gle/Smitha-on-X
- https://goo.gle/Learn-with-Smitha
- https://goo.gle/GoogleCloudTech

## Related Concepts
- [[concepts/react-framework|ReAct Framework]] — [Wikipedia](https://en.wikipedia.org/wiki/ReAct_Framework)
- [[concepts/behavioral-types|Behavioral Types]] — [Wikipedia](https://en.wikipedia.org/wiki/Behavioral_Types)
- [[concepts/acting|Acting]] — [Wikipedia](https://en.wikipedia.org/wiki/Acting)
- [[concepts/agentic-ai|AI Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Agents)
- Sequential Agents — [Wikipedia](https://en.wikipedia.org/wiki/Sequential_Agents)
- Reactive Agents — [Wikipedia](https://en.wikipedia.org/wiki/Reactive_Agents)
- Deliberative Agents — [Wikipedia](https://en.wikipedia.org/wiki/Deliberative_Agents)
- Planning Agents — [Wikipedia](https://en.wikipedia.org/wiki/Planning_Agents)
- Multi-Agent Architecture — [Wikipedia](https://en.wikipedia.org/wiki/Multi-Agent_Architecture)
- Root Agent — [Wikipedia](https://en.wikipedia.org/wiki/Root_Agent)
- Loop Agents — [Wikipedia](https://en.wikipedia.org/wiki/Loop_Agents)
- Validation Checkers — [Wikipedia](https://en.wikipedia.org/wiki/Validation_Checkers)
- Self-Correction Mechanism — [Wikipedia](https://en.wikipedia.org/wiki/Self-Correction_Mechanism)
- [[concepts/acting|Google ADK]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_ADK)

## Related Entities
- [[entities/google-cloud-tech|Google Cloud Tech]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Cloud_Tech)
- [[entities/ai|AI]] — [Wikipedia](https://en.wikipedia.org/wiki/AI)
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- Smitha — [Wikipedia](https://en.wikipedia.org/wiki/Smitha)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)