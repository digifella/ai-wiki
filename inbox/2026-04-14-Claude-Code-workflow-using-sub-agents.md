---
wiki-ingested: true
title: "Claude Code workflow using sub-agents"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: anthropic-claude
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[concepts/claude-code|Claude Code]] [[concepts/workflow|workflow]] using [[concepts/sub-agents|sub-agents]]

---
---
<https://www.youtube.com/watch?v=7Sx0o-41r2k>
[[entities/ai-labs|AI Labs]] channel

The video [[concepts/highlights|highlights]] that [[entities/claude-code|Claude Code]] is more than just an [[concepts/ai-coding|AI coding]] [[entities/agent|agent]], emphasizing its powerful [[concepts/capabilities|capabilities]] through a structured approach using "[[concepts/subagents|subagents]]." \[0:00, 0:03, 0:10\]
**Claude Code Subagents and Their Advantages:** Subagents are [[concepts/specialized-ai-assistants|specialized AI assistants]] within Claude Code designed for [[concepts/task-specific-workflows|task-specific workflows]] and improved [[concepts/context-management|context management]]. \[0:17, 0:57, 1:39\] Each subagent has a specific [[concepts/purpose|purpose]], expertise, and operates within its own dedicated 200,000-token [[concepts/context-window|context window]], separate from the main conversation. \[0:58, 1:31, 1:40\] This distinct context window allows agents to retain complete project knowledge, leading to better applications with fewer errors. \[1:44\] A key advantage of subagents over traditional slash [[concepts/commands|commands]] is the ability to chain multiple subagents together for [[concepts/complex-workflows|complex workflows]], enabling sequential collaboration (e.g., a code analyzer finding issues followed by an optimizer fixing them). \[1:06, 1:12, 1:21\] Additionally, Claude Code can run multiple subagents in parallel, significantly speeding up development processes. \[2:00, 2:09\]
**App Development Workflow Demonstration:** The video demonstrates a comprehensive app development workflow for a [[entities/youtube|YouTube]] Production Manager [[concepts/web-application|web application]] using Next.js and Shadcn UI components. \[3:27, 3:43\] The process involves several specialized subagents working collaboratively:

1. **Project [[concepts/setup|Setup]]:** The system first creates the detailed project directory [[concepts/structure|structure]] and initializes the Next.js application, including Shadcn UI setup. \[2:45, 3:35\]
2. **UX Research:** A `ux-researcher` agent conducts user research, defining user experience, navigation, and overall user [[concepts/flow|flow]] for the app (not the visual [[concepts/design|design]]). This phase took approximately 7 minutes and 53,000 [[concepts/tokens|tokens]]. \[3:45, 3:52, 4:00\]
3. **Sprint Prioritization:** The `sprint-prioritizer` agent then breaks down the implementation into smaller, manageable sprints for future execution. \[4:03, 4:09\]
4. **UI Design:** The `ui-designer` agent, leveraging the UX research output, designs the project's UI components, producing detailed specifications without actual implementation. \[4:18, 4:24, 4:34\]
5. **Whimsy Injection:** The `whimsy-injector` agent enhances the user experience by adding intricate UI details, micro-interactions, and animations that would typically require significant manual effort. \[4:40, 4:51\]
6. **[[concepts/rapid-prototyping|Rapid Prototyping]]:** The `rapid-prototyper` agent establishes the app's foundation, creating the basic structure and development environment. \[5:10, 5:17\]
7. **[[concepts/frontend-development|Frontend Development]]:** The `frontend-developer` agent implements the [[concepts/front-end-components|front-end components]] and pages, integrating state management and animations. This phase used 130,700 tokens and took over 18 minutes. \[6:20, 9:43, 9:46\]

**Workflow Management and Troubleshooting:** [[concepts/loops|Claude Code features]] a checkpointing system that automatically saves the conversation at each prompt, allowing users to revert to previous states if needed. \[5:55, 6:02, 6:11\] An initial problem encountered was that the prototype looked "off" due to insufficient planning within the agents and a lack of proper review. \[8:24, 8:32, 8:40\] The [[concepts/solution|solution]] involved refining the main prompt to explicitly instruct the `ux-researcher` to focus solely on user experience and not decide app features, and to ensure that agents save and pass information in a structured, readable format (like [[concepts/markdown|Markdown]] [[concepts/files|files]]). \[8:45, 8:51, 9:06, 9:11, 7:24\] The video demonstrates using GitIngest.com to convert entire [[entities/github|GitHub]] repositories into LLM-readable text, which can then be used to create detailed [[concepts/coding|coding]] workflows in Claude Code. \[6:47, 6:51\]
**Results and [[concepts/cost|Cost]] Considerations:** The final app produced is described as "genuinely polished" with impressive animations and smooth transitions, demonstrating the high quality achievable with this agent-based workflow. \[9:52, 10:00, 10:25\] While effective, these advanced workflows require significant [[concepts/computational-resources|computational resources]]. The [[entities/speaker|speaker]] started with a $20/month pro plan but quickly upgraded to the $100/month "Max" plan with [[entities/claude-opus|Claude Opus]] for increased usage and higher output limits, highly recommending it for serious use. \[1:09, 1:11\]
The video concludes by inviting viewers to the AI [[entities/labs|Labs]] Community Hackathon, which has been extended until August 11th, and offers a $500 grand prize for the most outstanding project. \[5:20, 5:26, 5:31\]