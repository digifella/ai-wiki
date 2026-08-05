---
wiki-ingested: true
title: "Anthropic's Claude Fable 5 and Mythos 5 LLMs: Launch, Access, Pricing, Safety"
date: 2026-06-11
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: anthropic-claude
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-11 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Anthropic's Claude Fable 5 and Mythos 5 LLMs: Launch, Access, Pricing, Safety
**Clip title:** [[entities/mythos-5|Mythos 5]] & Fable 5 Launched
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=PkYwtQcGIsU

### Summary
[[entities/anthropic-institute|Anthropic]] has officially launched two new [[concepts/large-language-model-llm|large language models]]: [[entities/fable-5|Claude Fable 5]] and [[concepts/ai-benchmarks|Claude Mythos]] 5. While Claude Fable 5 is now generally available to a broader audience, Claude Mythos 5, which represents a higher capability level, is currently restricted to select partners involved in "[[concepts/2026-04-09-lab-notes2026-04-09-project-glasswing-mitigating-anthropic-mythos-ais|Project Glasswing]]" (cyber defenders and critical [[concepts/software|software]] infrastructure providers) and soon to specific biology researchers, with additional safeguards. These models are touted as "Mythos-class" and reportedly surpass previous models like [[concepts/qwen-36-35b-a3b|Claude Opus 4.8]] in benchmarks across diverse areas including [[concepts/software-engineering|software engineering]], [[concepts/knowledge-work|knowledge work]], [[concepts/computer-vision|vision]], and scientific research.

The [[concepts/pricing|pricing]] strategy for Fable 5 and Mythos 5 has been adjusted to be more accessible, with costs set at $10 per million input [[concepts/tokens|tokens]] and $50 per million output tokens. This represents a significant reduction, being less than half the price of the previous Claude Mythos Preview. Regarding availability for existing users, Fable 5 is temporarily included without extra cost for those on Pro, Max, Team, and seat-based Enterprise plans until June 22nd. After this date, usage credits will be required, though Anthropic aims to eventually restore Fable 5 as a standard part of subscription plans as capacity allows. The video suggests that recent infrastructure deals might be enabling Anthropic to offer these models at a more competitive price point.

A key aspect of Fable 5 is the [[concepts/adoption|implementation]] of new "safety classifiers." These AI systems are designed to detect potential misuse, including "jailbreak" attempts, and to prevent the model from responding to requests related to cybersecurity, biology, chemistry, or distillation that could pose significant risks. If a request is flagged, the model automatically switches to a less capable model, Claude Opus 4.8, to continue the conversation. The presenter demonstrates this conservative approach by attempting to ask about Ebola outbreaks and the World Cup, which immediately triggers the safety classifier, switching to Opus 4.8. While intended to prevent harm, this aggressive filtering might limit the model's utility for seemingly benign, though sensitive, inquiries.

[[concepts/benchmark-testing|Benchmarking]] data presented in the video indicates that Claude Mythos 5/Fable 5 achieves notably higher scores in areas like [[concepts/autonomous-ai-coding-agent|agentic coding]] (80.3% on [[concepts/SWE-bench|SWE-Bench]] Pro compared to Opus 4.8's 69.2%) and legal agent benchmarks (13.3% versus Opus 4.8's 10.4%). However, improvements in other categories, such as tool use and [[concepts/computer-use|computer use]], are less pronounced. Additionally, Anthropic has introduced a 30-day data retention policy for all traffic on Mythos-class models to defend against complex attacks, assuring users this data will not be used for training new models for non-safety-related purposes. Overall, while the new models exhibit superior capabilities, their practical application for general users may be significantly influenced by these stringent safety measures and the evolving subscription model.

### Video Description & Links
#### Description
This video, I cover the latest release from Anthropic, which is the new Fable 5 model, which is a [[concepts/mythos-class-model|Mythos Class model]]. We have a look at the first initial benchmarks, the pricing, and also some of the [[concepts/security|security]] restrictions on this model. 

Blog: https://www.anthropic.com/news/claude-fable-5-mythos-5
warnings: https://support.claude.com/en/articles/15363606-why-claude-switched-models-in-your-conversation-with-fable-5

Twitter: https://x.com/Sam_Witteveen 

🕵️ Interested in building [[concepts/llm-based-agents|LLM Agents]]? Fill out the form below
Building LLM Agents Form: https://drp.li/dIMes

👨‍💻[[entities/github|Github]]:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
00:00 Mythos Rebrand Reveal
01:26 Access Tiers Explained
02:04 Pricing Reality Check
02:50 Benchmark Highlights
05:05 [[concepts/safety-limits|Safety Limits]] Preview
05:40 Data Retention Shift
07:08 Subscription Changes Ahead
08:38 Fable Demo
11:32 Biology Trigger Test
12:50 Wrap Up Next Steps

#### Tags
`mythos`, `fable`, `fable5`

#### URLs
- https://www.anthropic.com/news/claude-fable-5-mythos-5
- https://support.claude.com/en/articles/15363606-why-claude-switched-models-in-your-conversation-with-fable-5
- https://x.com/Sam_Witteveen
- https://drp.li/dIMes
- https://github.com/samwit/llm-tutorials

## Related Concepts
- [[concepts/claude-fable-5|Claude Fable 5]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Fable_5)
- [[concepts/claude-mythos-5|Claude Mythos 5]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Mythos_5)
- [[concepts/large-language-models|large language models (LLMs)]] — [Wikipedia](https://en.wikipedia.org/wiki/large_language_models_%28LLMs%29)
- [[concepts/zero-day-vulnerability-mitigation|Project Glasswing]] — [Wikipedia](https://en.wikipedia.org/wiki/Project_Glasswing)
- [[concepts/biology-researchers|biology researchers]] — [Wikipedia](https://en.wikipedia.org/wiki/biology_researchers)
- [[concepts/large-language-models|large language models]] — [Wikipedia](https://en.wikipedia.org/wiki/large_language_models)
- [[concepts/token-pricing|token pricing]] — [Wikipedia](https://en.wikipedia.org/wiki/token_pricing)
- safety classifiers — [Wikipedia](https://en.wikipedia.org/wiki/safety_classifiers)
- jailbreak detection — [Wikipedia](https://en.wikipedia.org/wiki/jailbreak_detection)
- [[concepts/model-switching|model switching]] — [Wikipedia](https://en.wikipedia.org/wiki/model_switching)
- SWE-Bench Pro — [Wikipedia](https://en.wikipedia.org/wiki/SWE-Bench_Pro)
- [[concepts/agentic-ai|agentic coding]] — [Wikipedia](https://en.wikipedia.org/wiki/agentic_coding)
- legal agent benchmarks — [Wikipedia](https://en.wikipedia.org/wiki/legal_agent_benchmarks)
- data retention policy — [Wikipedia](https://en.wikipedia.org/wiki/data_retention_policy)
- [[concepts/paid-plans|subscription plans]] — [Wikipedia](https://en.wikipedia.org/wiki/subscription_plans)
- [[concepts/infrastructure-scalability|infrastructure scaling]] — [Wikipedia](https://en.wikipedia.org/wiki/infrastructure_scaling)

## Related Entities
- [[entities/sam-witteveen|Sam Witteveen]] — [Wikipedia](https://en.wikipedia.org/wiki/Sam_Witteveen)
- [[entities/anthropic|Anthropic]] — [Wikipedia](https://en.wikipedia.org/wiki/Anthropic)
- Claude Fable 5 — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Fable_5)
- Claude Mythos 5 — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Mythos_5)
- [[entities/project-glasswing|Project Glasswing]] — [Wikipedia](https://en.wikipedia.org/wiki/Project_Glasswing)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/claude-opus-48|Claude Opus 4.8]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Opus_4.8)