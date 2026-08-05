---
wiki-ingested: true
domain: ai-agents
group: openai-chatgpt
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=wKbVCeWZ-ao>
The video introduces ChatGPT [[entities/agent|Agent]], a new capability by OpenAI that combines the features of Operator, [[entities/chatgpt-deep-research|Deep Research]], and ChatGPT's conversational fluency. \[0:01, 2:50, 3:06\] This agent functions like its own virtual computer, capable of handling [[concepts/complex-tasks|complex tasks]] from start to finish by interacting with websites, running [[concepts/code|code]], and conducting analysis. \[2:50, 3:09\]
A demonstration shows the ChatGPT Agent in action:

* **Booking a Hipcamp site:** The agent searches for dog-friendly Hipcamp sites with private hot tubs near San Francisco, prioritizing sites with good reviews. It browses Hipcamp and Travelmath websites, analyzes details, and even corrects its own mistakes (like selecting wrong dates). \[0:23, 1:00, 1:35, 1:49\] The process, including multiple searches and content retrieval, took 12 minutes and involved 53 sources. \[1:59, 2:03\]
* **Organizing vegetarian recipes:** The agent accesses AllRecipes.com and organizes vegetarian recipes by protein efficiency, ultimately presenting the data in a spreadsheet format. \[2:21, 2:32, 2:37\]

**Availability and Features:** ChatGPT Agent is rolling out to Pro, Plus, and Team users, with Pro users having 400 messages per month and other paid users having 40 messages monthly. \[3:27, 3:30\] Access for the European Economic Area and Switzerland is still being enabled. \[3:29\] The original Deep Research feature [[entities/will|will]] remain available for users who prefer more detailed, in-depth responses. \[3:31\]
**[[concepts/performance-benchmarks|Performance Benchmarks]]:** The video presents several benchmarks comparing ChatGPT Agent's performance to other models and human capabilities:

* **Humanity's Last Exam (Expert-Level Questions Across Subjects):** ChatGPT Agent (browser + computer + terminal) achieved an [[concepts/accuracy|accuracy]] of 41.6%, significantly outperforming OpenAI o3 (no tools - 20.3%), ChatGPT agent (no tools - 23.0%), OpenAI o3 ([[entities/python|python]] + browsing - 24.9%), and Deep Research (python + browsing - 26.6%). \[3:36, 3:41\] For context, [[entities/grok|Grok]] 4 Heavy scored 44.4% and Grok 4 scored 38.6%. \[4:07, 4:15\]
* **FrontierMath, Tier 1-3 (Expert-Level Math):** ChatGPT Agent (browser + computer + terminal) scored 27.4%, compared to OpenAI o3 (python) at 10.3% and OpenAI o4-mini (python) at 19.3%. \[5:54, 5:57\]
* **Economically Important Tasks:** This benchmark measures the model's win and tie rates versus humans. ChatGPT Agent consistently showed win/tie rates above 30% against humans across tasks estimated to take 1 to 10+ hours. \[6:05, 6:39\]
* **DSBench (Data Analysis & Data Modeling):** In data analysis, ChatGPT Agent achieved 89.9% accuracy, surpassing human performance at 64.1%. In data modeling, it achieved 85.5% relative performance gain, also surpassing humans at 65.0%. \[6:48, 6:55\]
* **SpreadsheetBench:** This benchmark evaluates the ability to create and edit spreadsheets. Humans achieved 71.3% accuracy, while ChatGPT Agent with .xlsx access achieved 45.5%. \[7:13, 7:19\] This indicates that while advanced, the agent still has room to improve to match human proficiency in spreadsheets. \[7:29\]

**Risks:** The speaker highlights that this release marks the first time users can ask ChatGPT to take actions on the web, introducing new risks. \[7:31\] Because ChatGPT Agent can work directly with user data and access information through connectors or websites via "takeover mode," there's a risk of adversarial manipulation through prompt injection, where malicious actors might try to trick the agent into unintended actions or revealing private data. \[7:38, 7:45\] Users are advised to be very careful with the information they provide to ChatGPT Agent. \[7:55\]
**Sponsor:** The video is sponsored by Vultr, an independent cloud provider offering GPU, compute, optimized cloud compute, and bare metal services across 32 locations on six continents. \[5:00, 5:06, 5:23\] Vultr also offers Kubernetes Engine and support for AI/ML engineering with pre-built GPU stacks. \[5:30, 5:34\] Viewers can get $300 in credit for their first 30 days using code BERMAN300 at getvultr.com/berman. \[5:40, 5:46\]

## Related Concepts
- [[concepts/chatgpt-agent|ChatGPT Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/ChatGPT_Agent)
- [[concepts/virtual-computer-capability|Virtual Computer]] — [Wikipedia](https://en.wikipedia.org/wiki/Virtual_Computer)
- [[concepts/visualization-generation|Deep Research]] — [Wikipedia](https://en.wikipedia.org/wiki/Deep_Research)
- [[concepts/conversational-fluency|Conversational Fluency]] — [Wikipedia](https://en.wikipedia.org/wiki/Conversational_Fluency)
- [[concepts/natural-language-analysis|Natural Language Analysis]] — [Wikipedia](https://en.wikipedia.org/wiki/Natural_Language_Analysis)

## Related Entities
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- [[entities/matthew-berman|Matthew Berman]] — [Wikipedia](https://en.wikipedia.org/wiki/Matthew_Berman)
- [[entities/chatgpt|ChatGPT]] — [Wikipedia](https://en.wikipedia.org/wiki/ChatGPT)
- [[entities/hipcamp|Hipcamp]] — [Wikipedia](https://en.wikipedia.org/wiki/Hipcamp)
- Travelmath — [Wikipedia](https://en.wikipedia.org/wiki/Travelmath)
- AllRecipes.com — [Wikipedia](https://en.wikipedia.org/wiki/AllRecipes.com)
- Groknack — [Wikipedia](https://en.wikipedia.org/wiki/Groknack)
- Grok 4 Heavy — [Wikipedia](https://en.wikipedia.org/wiki/Grok_4_Heavy)
- Grok 4 — [Wikipedia](https://en.wikipedia.org/wiki/Grok_4)
- Vultr — [Wikipedia](https://en.wikipedia.org/wiki/Vultr)
- Kubernetes Engine — [Wikipedia](https://en.wikipedia.org/wiki/Kubernetes_Engine)