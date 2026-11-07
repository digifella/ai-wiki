---
wiki-ingested: true
domain: ai-agents
group: google-ai-ecosystem
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

\*\*"Act as an expert information architect. Based on the provided sources, generate a comprehensive mindmap using Mermaid.js syntax.
Please follow these constraints:

1. Use the `mindmap` keyword to start.
2. Organize the central node around the primary theme of my sources.
3. Use indentation to represent [[concepts/hierarchy|hierarchy]] (branches and sub-branches).
4. Use different shapes for [[concepts/nodes|nodes]] if relevant (e.g., `((circle))` for main topics, `[square]` for details).
5. Provide ONLY the [[concepts/code|code]] block. Do not include introductory or concluding remarks."\*\*

Example was to take the EscientAI project

Take the Mermaid output produced by the above prompt and then put it into [Mermaid.live](https://Mermaid.live) and set type to Mermaid. Requires small edit for syntax.

![[./_resources/NotebookLM_prompt_to_produce_mermaid.js_mindmap_output.resources/image.png]]

```
mindmap
  root((AI Strategy at Escient))
    ((Current State & Challenges))
      [Knowledge Management Bottleneck]
        (Poorly mapped SharePoint repositories)
        (Low data quality causing failed pilots)
      [Technical & Architectural Limits]
        (Azure Foundry & AI module disconnects)
        (Lack of deep-tech AI engineering skills)
      [Client Security & Governance]
        (Strict client postures e.g., AEMO)
        (IP, copyright, and data exposure risks)
      [Adoption Risks]
        (AI making confident mistakes)
        (Consultant over-reliance without validation)
      [Cost Pressures]
        (Blanket Copilot licenses are overkill)
        (Rising infrastructure costs - Ramageddon)
    ((Strategic Masterplan & DFP Review))
      [Ambition Horizons]
        (Defend: Everyday AI - 60%)
        (Extend: Transforming AI - 30%)
        (Upend: Innovative AI - 10%)
      [Agile Delivery Shift]
        (Rolling 90-day AI OS sprints)
        (Focus on speed to value)
        (Accept vendor dependency for architecture)
      [Five Core Pillars]
        (Organisation)
        (People & Culture)
        (Governance)
        (Engineering)
        (Data)
    ((Internal Operations & Efficiency))
      [Delegating Donkey Work]
        (Drafting RFP & tender responses)
        (Synthesising workshop materials)
        (Automating meeting minutes)
      [Role-Specific Tooling]
        (Salesforce Einstein for Finance)
        (Curated Prompt Libraries for BAs)
      [Human-in-the-Loop Guardrails]
        (Mandatory validation for proposals >$1M)
        (Preserving human-centred empathy)
        (AI Ethics & Usage Policy - ISMS11)
    ((Commercial AI Services - GTM))
      [Data Dialysis]
        (Safe boxes for cleaning client data)
      [AI Risk & Governance as a Service]
        (NIST and ISO 40001 alignment)
        (Continuous AI monitoring & security)
      [AI Readiness Assessments]
        (Guiding slow-adopting government clients)
      [Change Management Partnering]
        (Flexible alternative to Big 4 lock-in)


```