---
wiki-ingested: true
domain: ai-agents
group: openai-chatgpt
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=JTbtGH3secI>
This video, titled "Why Your [[concepts/ai-models|AI Models]] Are Hallucinating & How to Fix Them," provides a comprehensive overview of the phenomenon of "hallucination" in Large Language Models (LLMs) and, more importantly, details practical strategies to mitigate or eliminate it.
Here's a detailed summary of the key points:
**I. Understanding Hallucination**

* **[[concepts/slms|Definition]]:** Hallucination in AI refers to instances where an LLM generates information that is factually incorrect, nonsensical, or completely made up, but presents it with high confidence, often indistinguishable from accurate information.
* **Why it Happens:** **Lack of Knowledge:** LLMs are trained on vast datasets but still have a finite knowledge base. If asked something outside their training data or about very recent events, they might "guess" or "confabulate." **Over-generalization:** The model tries to apply patterns learned from its training data to situations where they don't quite fit, leading to plausible but incorrect outputs. **Faulty Training Data:** If the data the model was trained on contained errors, biases, or inconsistencies, the model [[entities/will|will]] replicate and amplify those issues. **Confabulation:** The model attempting to fill in gaps or ambiguities in a query, leading it to invent details. **Probabilistic Nature:** LLMs are essentially predicting the next most probable word based on patterns. Sometimes, the most probable word isn't the factually correct one.

**II. Key Strategies to Fix/Reduce Hallucinations**
The video outlines several critical techniques, often suggesting a combination of them for best results:

1. **Retrieval Augmented Generation (RAG)**
	**Concept:** RAG is presented as one of the most effective and widely applicable solutions. Instead of solely relying on the LLM's internal knowledge, RAG involves **retrieving relevant, up-to-date, and authoritative information from an external knowledge base** (e.g., enterprise databases, internal documents, web sources) and providing it to the LLM _as context_ for its answer. **How it Works:** [[concepts/user-query|User query]] comes in. A retrieval system searches a curated knowledge base (often vectorized for semantic search) for relevant documents/chunks of text. These retrieved snippets are then included in the prompt given to the LLM. The LLM generates its response based on the provided context, significantly reducing its tendency to "hallucinate." **Benefits:** Grounds answers in facts, enables real-time information, provides transparency (can often show source), reduces need for expensive [[concepts/fine-tuning|fine-tuning]] for rapidly changing information. **Analogy:** Like giving an AI a specific textbook to consult before answering a question, rather than asking it to answer purely from [[concepts/memory|memory]].
	
2. **Fine-tuning**
	**Concept:** Adapting a pre-trained LLM for a specific task, domain, or desired behavior by training it further on a smaller, specialized dataset. **When to Use:** Ideal for instilling specific tones, styles, unique [[concepts/terminology|terminology]], or nuances of a particular domain where RAG might not fully capture the _how_ an answer should be formulated. **Difference from RAG:** RAG provides external _knowledge_; fine-tuning modifies the model's internal _understanding and generation style_. Fine-tuning _does not_ update the model's factual knowledge in a way that RAG does for real-time data. **Benefits:** Deepens domain-specific expertise, improves adherence to brand voice or specific guidelines. **Limitations:** Requires significant high-quality data and [[concepts/computational-resources|computational resources]], less effective for rapidly changing factual information, and can still hallucinate if the fine-tuning data is flawed.
	
3. **[[concepts/prompt-engineering|Prompt Engineering]]**
	**Concept:** The art and [[concepts/science|science]] of crafting clear, specific, and well-structured prompts to guide the LLM's output. Even with RAG or fine-tuning, a well-engineered prompt is crucial. **Techniques Covered:** **Zero-shot:** Direct question. **Few-shot:** Providing examples in the prompt to guide the model. **Chain-of-Thought (CoT):** Instructing the model to "think step-by-step" or show its [[concepts/reasoning|reasoning]]. This breaks down complex problems and often improves [[concepts/accuracy|accuracy]] by forcing a logical progression. **Self-[[concepts/logical-consistency|Consistency]]:** Generating multiple CoT paths and choosing the most common answer among them, acting as a form of self-correction. **Role-play Prompts:** Assigning a persona to the AI (e.g., "Act as a financial advisor..."). **Constraining Outputs:** Specifying format, length, or types of information to include/exclude. **Importance:** Often the first and most accessible line of defense against basic hallucinations and misinterpretations.
	
4. **Data Quality and Curation**
	**Fundamental Principle:** Emphasized as foundational for all other strategies. "Garbage In, Garbage Out (GIGO)" applies strongly to AI. **Application:** This applies to the data used for the initial training of the LLM, the data used for fine-tuning, and most critically, the data within the knowledge base for RAG. **[[concepts/best-practices|Best Practices]]:** Regularly cleanse, validate, update, and curate data sources to ensure accuracy, relevance, and completeness. Irrelevant or poor-quality context can lead to hallucinations even with RAG.
	
5. **Validation and [[concepts/ai-safety|Guardrails]] (Post-Generation Checks)**
	**Concept:** Implementing mechanisms to verify the factual accuracy, safety, and appropriateness of the AI's output _after_ it has been generated. **Methods:** **Human Review:** Essential for critical applications. **Automated Fact-Checking:** Using other tools or smaller models to cross-reference facts. **Sentiment Analysis/Content Moderation APIs:** To check for bias, toxicity, or unwanted content. **Comparing against trusted sources:** Programmatically checking key facts against a known truthful database. **[[concepts/red-teaming|Red Teaming]]:** Proactively [[concepts/testing|testing]] the AI with challenging, adversarial prompts to discover failure modes and potential hallucinations before deployment.
	

**III. Overarching [[concepts/philosophy|Philosophy]]**

* **Hybrid Approach:** The video strongly advocates for combining these strategies. There is no single "silver bullet" [[concepts/solution|solution]] to eliminating hallucinations entirely. RAG plus prompt engineering, supported by high-quality data and post-generation validation, offers the most robust defense.
* **Understanding is Key:** The ability to effectively fix hallucinations stems from understanding _why_ they occur in the first place.
* **Mitigation, Not Elimination:** While the goal is to significantly reduce the frequency and impact of hallucinations, especially in high-stakes applications, it acknowledges that completely eliminating them might be an ongoing challenge due to the inherent nature of LLMs.

In essence, the video provides a comprehensive roadmap for AI developers and users to build more reliable and trustworthy LLM applications by systematically addressing the challenge of AI hallucination through layered defenses and informed [[concepts/design|design]] choices.

Installation description is at 17:00mins

## Related Concepts
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- [[concepts/knowledge-base|Knowledge Base]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Base)
- [[concepts/training-data|Training Data]] — [Wikipedia](https://en.wikipedia.org/wiki/Training_Data)
- [[concepts/confidence-score|Confidence Score]] — [Wikipedia](https://en.wikipedia.org/wiki/Confidence_Score)
- [[concepts/retrieval-augmented-generation-rag|Retrieval Augmented Generation (RAG)]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval_Augmented_Generation_%28RAG%29)

## Related Entities
- [[entities/ai-hallucination|AI Hallucination]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Hallucination)
- [[entities/llms|LLMs]] — [Wikipedia](https://en.wikipedia.org/wiki/LLMs)