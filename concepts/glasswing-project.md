---
type: concept
domain: ai-agents
tags:
  - "ai-security"
  - "llm-vulnerabilities"
  - "ibm-technology"
  - "red-teaming"
  - "security-engineering"
  - "vulnerability-discovery"
  - "ai-models"
  - "offensive-security"
aliases:
  - "IBM Glasswing"
  - "Project Glasswing Initiative"
  - "AI Vulnerability Discovery Program"
summary: Project Glasswing is an IBM Technology initiative focused on developing methodologies to discover and mitigate security vulnerabilities in AI and Large Language Models.
updated: 2026-07-11
group: applied-ai-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Glasswing project

**[[concepts/2026-04-09-lab-notes2026-04-09-project-glasswing-mitigating-anthropic-mythos-ais|Project Glasswing]]** is an initiative by **IBM Technology** focused on developing and applying effective methodologies for discovering vulnerabilities in **AI** and **[[concepts/large-language-model-llm|Large Language Models]]** (LLMs).

## Overview & Origins
The project emerged from the need to address [[concepts/security|security]] gaps in [[concepts/generative-ai|generative AI]] systems, moving beyond traditional application security to target model-specific failure modes. Key findings and methodologies were detailed in the "[[concepts/security-intelligence|Security Intelligence]]" podcast episode *"First findings from [[concepts/ai-driven-cybersecurity|Project Glasswing]]"* (2026-05-30) featuring experts from IBM's security team.

## Key Insights & Methodology
Details from the initial findings are documented in [[lab-notes/2026-05-30-Project-Glasswing-Effective-AILLM-Vulnerability-Discover|Project Glasswing: Effective AI/LLM Vulnerability Discovery Methodology]]. Core aspects include:

- **Expert Panel Insights**: Discussion led by [[entities/matt-kosinski|Matt Kosinski]], featuring:
  - **[[entities/kimmie-farrington|Kimmie Farrington]]** (Security Detection Engineer): Focuses on detection [[entities/national-academies|engineering]] within AI pipelines.
  - **[[entities/dustin-heywood|Dustin Heywood]]** (aka [[entities/evilmog|EvilMog]], Executive Managing Hacker): Provides offensive security perspectives and [[concepts/red-teaming|red-teaming]] strategies.
  - **[[entities/curtis-pitts|Curtis Pitts]]** (Lead [[concepts/cicd-pipelines|CI/CD]] Security): Addresses integration of security checks into continuous integration/deployment flows for [[concepts/ai-models|AI models]].
- **[[concepts/vulnerability|Vulnerability]] Discovery**: Emphasizes a structured approach to identifying **prompt injection**, **[[concepts/data-leakage|data leakage]]**, and **model hijacking** vectors specific to [[concepts/llm-models|LLM architectures]].
- **[[concepts/strategic-pivot|Strategic Shift]]**: Moves from manual, ad-hoc testing to systematic, repeatable vulnerability discovery processes tailored for the AI lifecycle.

## Related Concepts
- [[concepts/ai-security]]
- [[concepts/large-language-models]]
- Penetration Testing
- [[entities/ibm-technology]]
