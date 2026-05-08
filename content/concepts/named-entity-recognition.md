---
type: concept
domain: tools-platforms
tags:
  - "NLP"
  - "MachineLearning"
  - "InformationExtraction"
  - "information-extraction"
  - "entity-recognition"
  - "language-models"
  - "sequence-labeling"
  - "text-processing"
aliases:
  - "NER"
  - "entity-extraction"
summary: "Named Entity Recognition is a subtask of natural language processing focused on identifying and categorizing key entities such as names, organizations, and locations within unstructured text."
updated: 2026-04-17
group: web-publishing-quartz-websites
---
# Named Entity Recognition

Named Entity Recognition (NER) is a core subtask of [[concepts/natural-language-processing]] (NLP) focused on identifying and categorizing key entities—such as names, organizations, locations, and dates—within [[concepts/unstructured-text|unstructured text]].

## Evolution of Extraction Techniques
* **Traditional Methods**: Historically relied on [[concepts/expert-systems|rule-based systems]] and specific NLP architectures for [[concepts/sequence-tagging|sequence labeling]].
* **Generative LLM Challenges**: Using large-scale [[concepts/large-language-models]] (LLMs) for specific, non-generative tasks like NER presents challenges in precision and [[concepts/algorithm-efficiency|computational efficiency]].
* **[[concepts/contextual-awareness|LangExtract]]**: A new Google [[concepts/open-source|open-source]] [[entities/python|Python]] library that utilizes [[entities/gemini]] models to perform structured [[concepts/document-processing|Information Extraction]] from unstructured text.
* **Hybrid Approaches**: Modern developments focus on leveraging the [[concepts/reasoning|reasoning]] capabilities of generative models while maintaining the [[concepts/structured-output|structured output]] requirements of specialized extraction tasks.

---
**Backlink**: 2026 04 14 Langextract [[entities/sam-witteveen|Sam Witteveen]]
