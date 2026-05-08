---
wiki-ingested: true
title: "Agent Skills: Why Code Enhances LLM Efficiency Over Markdown for Scraping"
created: "2026-04-08 09:11"
date: 2026-04-08
source: lab-summary
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: agent-systems-skills
---
## Agent Skills: Why Code Enhances LLM Efficiency Over Markdown for Scraping
**Clip title:** [[concepts/automated-skill-invocation|Agent Skills]]: Code Beats Markdown (Here's Why)
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=IjiaCOt7bP8

### Summary
This video provides an in-depth look at Agent Skills (formerly [[concepts/claude|Claude]]
Skills) and [[concepts/best-practices|best practices]] for developing efficient scraping skills for
[[concepts/large-language-models|large language models]] (LLMs). The presenter highlights that Agent Skills
have become a "killer tool" for helping both models and agent harnesses
achieve tasks effectively. These skills have evolved into an open standard,
adopted by major AI companies like [[entities/anthropic-institute|Anthropic]] ([[concepts/claude-code|Claude Code]]), OpenAI ([[concepts/codex|Codex]]),
and Google [[entities/deepmind|DeepMind]] (Antigravity, [[concepts/gemini-cli|Gemini CLI]]), leading to a proliferation
of available AI capabilities and marketplaces like skills.sh and
skillsmp.com. The core mechanism behind Agent Skills' effectiveness is
"progressive disclosure" or "[[concepts/external-knowledge|context engineering]]," where a small "Skill
Index" is always loaded, and more detailed [[concepts/instructions|instructions]] or scripts are only
loaded into the model's [[concepts/context-window|context window]] when triggered, optimizing token
usage.

The [[concepts/structure|structure]] of an Agent Skill typically includes a required `SKILL.md`
file for instructions and [[concepts/metadata|metadata]], along with optional folders for scripts
(executable code), references (documentation/examples), and assets
(templates/resources). The video emphasizes the power of incorporating
scripts, which allow models to execute code in sandboxed environments,
rewrite scripts, retrieve more context, and interact with APIs, making them
significantly more efficient than solely relying on markdown instructions.

A significant portion of the video is dedicated to common mistakes and best
practices when building scraping skills for LLMs, focusing on optimizing
[[concepts/token-consumption|token consumption]] and ensuring [[concepts/software-reliability|reliability]]. Key recommendations include:
1.  **Stripping HTML:** Instead of fetching and processing entire raw HTML
pages, which can waste thousands of [[concepts/tokens|tokens]], developers should pre-process
and strip unnecessary elements (like scripts, styles, navigation, footers,
ads) to retain only meaningful content.
2.  **Prefilling Known Structures:** Rather than making the LLM figure out
a page's structure in every run, hardcode known structures (e.g., CSS
selectors for article titles, users, scores on a news site) into the
script. The LLM can extract this information once, and the script can then
apply these patterns for precise [[concepts/data-extraction|data extraction]].
3.  **Using Scripts for Heavy Lifting:** Delegate complex parsing and data
conversion (e.g., to JSON) to the scripts, returning clean, [[concepts/structured-data|structured data]]
to the LLM. This reduces the LLM's cognitive load and token usage.
4.  **Defining [Output Schemas](https://en.wikipedia.org/wiki/Output_Schemas):** Establish a strict output schema for
scraped data, ideally defined within the script (e.g., a [[concepts/json-format|JSON format]] for
title, URL, date, summary, source). This ensures consistent output,
simplifies downstream processing, and allows for easier comparison and
validation.
5.  **Batch Searches for Efficiency:** For tasks involving multiple
searches or fetches, execute them in parallel within the script to reduce
round-trips and save time and [[concepts/cost|cost]], rather than performing sequential
fetches.
6.  **Setting Hard Limits and Stop Conditions:** Implement maximum call
limits (e.g., max pages to fetch, max searches) and detect infinite [[concepts/loop|loop]]
conditions in the `SKILL.md` to prevent excessive token consumption and
resource usage, particularly when dealing with pagination. The sponsor,
DataImpulse, is introduced here as a [[concepts/solution|solution]] for reliable proxies, which
are crucial for preventing IP blocking during large-scale scraping
operations.
7.  **Designing for Incremental Runs:** Incorporate logic to check for
previous reports, skip already processed URLs, and only fetch genuinely new
content. This minimizes redundant work and further optimizes token usage
over time.
8.  **Hardcoding Knowns:** Store unchanging configuration details like base
URLs, timeouts, categories, and selectors as hardcoded values or
[[concepts/environment-variables|environment variables]], preventing the LLM from repeatedly processing or
deducing them.

In conclusion, while Agent Skills offer powerful new capabilities for [[concepts/ai-models|AI models]], the video strongly emphasizes that effective development hinges on
adhering to best practices focused on efficiency and [[concepts/token-management|token management]]. By
being intentional about what goes into and comes out of the model's context
window, developers can create more cost-effective, reliable, and performant
[[concepts/ai-powered-applications|AI applications]] and [[concepts/agents|agents]].

## Related Concepts
- [[concepts/agent-skills|Agent Skills]] — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Skills)
- [[concepts/web-scraping|Web Scraping]] — [Wikipedia](https://en.wikipedia.org/wiki/Web_Scraping)
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- [[concepts/code-based-scraping|Code-based scraping]] — [Wikipedia](https://en.wikipedia.org/wiki/Code-based_scraping)
- [[concepts/markdown-based-scraping|Markdown-based scraping]] — [Wikipedia](https://en.wikipedia.org/wiki/Markdown-based_scraping)
- [[concepts/agent-harnesses|Agent Harnesses]] — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Harnesses)
- [[concepts/llm-optimization|LLM efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/LLM_efficiency)
- [[concepts/context-engineering|Context Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Engineering)
- [[concepts/progressive-disclosure|Progressive Disclosure]] — [Wikipedia](https://en.wikipedia.org/wiki/Progressive_Disclosure)
- [[concepts/token-optimization|Token Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Token_Optimization)
- [[concepts/context-management|Context Window Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Window_Management)
- HTML [[concepts/data-preprocessing|Preprocessing]] — [Wikipedia](https://en.wikipedia.org/wiki/HTML_Preprocessing)
- [[concepts/structured-data-extraction|Structured Data Extraction]] — [Wikipedia](https://en.wikipedia.org/wiki/Structured_Data_Extraction)
- Output Schemas — [Wikipedia](https://en.wikipedia.org/wiki/Output_Schemas)
- Sandboxed [[concepts/code-execution|Code Execution]] — [Wikipedia](https://en.wikipedia.org/wiki/Sandboxed_Code_Execution)
- [CSS Selectors](https://en.wikipedia.org/wiki/CSS_Selectors) — [Wikipedia](https://en.wikipedia.org/wiki/CSS_Selectors)
- [[concepts/parallel-processing|Parallel Processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Parallel_Processing)
- [Data Parsing](https://en.wikipedia.org/wiki/Data_Parsing) — [Wikipedia](https://en.wikipedia.org/wiki/Data_Parsing)
- [[concepts/token-consumption|Token Consumption]] — [Wikipedia](https://en.wikipedia.org/wiki/Token_Consumption)
