---
type: concept
domain: ai-agents
updated: 2026-05-23
group: applied-ai-workflows
---
title: "RAG"

# RAG

**[[concepts/answer-generation|Retrieval-Augmented Generation]] (RAG)** is a framework used to optimize the [[concepts/output|output]] of a [[concepts/large-language-model|Large Language Model]] (LLM) by retrieving relevant, authoritative information from an external [[concepts/knowledge-base|knowledge base]] to augment the model's [[concepts/context-window|context window]].

### Paradigms & Evolutions
- **[[concepts/traditional-rag|Traditional RAG]]**: Relies on the retrieval of discrete, often static, document chunks to ground model [[concepts/responses|responses]] in [[concepts/external-data|external data]].
- **[[concepts/llm-wiki|LLM Wiki pattern]]**:
	- Employs an LLM to autonomously maintain and evolve a structured wiki.
	- Focuses on a self-sustaining, continuously updating knowledge [[concepts/architecture|architecture]] rather than reactive retrieval of isolated snippets.
	- Reference: [[concepts/date-2026-04-13|2026]] 04 10 Karpathys [[concepts/llm-wiki|LLM Wiki]] [[concepts/map-first-architecture|Beyond RAG]] for Persistent [[concepts/knowledge-bases|Knowledge Bases]]
	- **[[concepts/summary|Summary]]**:
		 - Introduced by andrej
- **Domain-Specific [[concepts/fine-tuning|Fine-Tuning]]**: Uses [[concepts/linear-adapters|linear adapters]] to optimize [[concepts/embedding-models|embedding models]] for specific domains without full retraining or re-embedding, enabling cost-effective performance improvements. (Reference: inbox
- **[[concepts/context-engineering|Context Engineering]]**: A new AI [[concepts/skill|skill]] differentiating from [[concepts/prompt-engineering|prompt engineering]], focusing on structured context provision for LLMs. Defined by [[entities/tobi-lütke|Tobi Lütke]] ([[entities/shopify|Shopify]] CEO) and [[entities/andrej-karpathy|Andrej Karpathy]] as "the art/science of providing all" [incomplete quote]. Emphasizes systematic context [[concepts/design|design]] over ad-hoc [[concepts/prompting|prompting]]. Reference: 2026 04 14 [[concepts/context-engineering|Context engineering]] by [[entities/prompt-engineering|prompt engineering]] channel
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Structured-AI-Context-Beyond-RAG-Limitations-with-Map-First-Architectu|Structured AI Context Beyond RAG Limitations with Map First Architectu]] · [▶ source](https://www.youtube.com/watch?v=SjqfDcGZOHg)
- 2026-04-08: [[lab-notes/2026-04-08-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)
- 2026-04-10: ## [[entities/llamaindex|LlamaIndex]]'s [[concepts/liteparse|LiteParse]]: Agentic Document Processing and the End of Frameworks **Clip title:** [[entities/liteparse|LiteParse]] - The Local Document Parser **Author / channel:** LlamaIndexs LiteParse Agentic Document Processing and the End of)
- 2026-04-14: # RAG plus [[concepts/knowledge-graphs|knowledge graphs]] using [[concepts/graphiti|GRAPHITI]] --- --- <https://www.youtube.com/watch?v=PxcOIINgiaA> This video By [[entities/cole-medin|Cole Medin]] provides a comprehensive overview of [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) and introduces [[concepts/graphiti|Graphiti]], an [[concepts/open-source|open-source]] platform designed to address RAG's limitatio (RAG plus [[concepts/knowledge-graphs|knowledge graphs]] using GRAPHITI)
- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)