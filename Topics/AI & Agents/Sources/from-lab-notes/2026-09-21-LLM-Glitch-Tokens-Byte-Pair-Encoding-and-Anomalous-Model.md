---
wiki-ingested: true
title: "LLM Glitch Tokens: Byte Pair Encoding and Anomalous Model Responses"
date: 2026-09-21
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: model-efficiency-compression
type: "source-summary"
aliases:
  - "lab-notes/2026-09-21-LLM-Glitch-Tokens-Byte-Pair-Encoding-and-Anomalous-Model"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## LLM Glitch Tokens: Byte Pair Encoding and Anomalous Model Responses
**Clip title:** Glitch Tokens - Computerphile
**Author / channel:** Computerphile
**URL:** https://www.youtube.com/watch?v=WO2X3oZEJOA

### Summary
This video explores a peculiar phenomenon in [[concepts/large-language-models|large language models]] (LLMs) known as "[[concepts/glitch-tokens|glitch tokens]]" or "[[concepts/context-length|anomalous tokens]]," where certain seemingly innocuous input strings cause the models to produce bizarre and nonsensical outputs. The presenter demonstrates that while an LLM like [[entities/gpt-3|GPT-3]]'s `davinci-instruct-beta` can easily repeat common words or even random letter sequences, it reacts strangely to specific strings such as "SolidGoldMagikarp," "PsyNetMessage," or a sequence of question marks and hyphens, often responding with unhinged phrases or a series of single letters. This behavior is distinct from simply not understanding a word; it indicates a deeper, unexpected interaction with the model's internal representation of language.

The explanation for this behavior lies in how LLMs process text, specifically through a technique called [[concepts/byte-pair-encoding|Byte Pair Encoding]] (BPE) to create "tokens." BPE works by identifying frequently occurring character sequences in a vast training dataset and merging them into single tokens, balancing between individual characters and entire words. Thus, common words typically become single tokens, while rarer words or unusual strings might be broken down into smaller, more frequent sub-word units or remain as unique, albeit rare, tokens. The glitch tokens were discovered by safety researchers using "[[concepts/ai-interpretability|mechanistic interpretability]]," a field dedicated to understanding the internal workings of AI. By applying techniques like K-means clustering to the LLM's embedding space (where tokens are represented as continuous vectors), they found peculiar clusters containing these anomalous tokens that didn't align with expected linguistic categories.

The leading hypothesis for these glitch tokens' existence and odd behavior is rooted in the LLM's [[concepts/training-data|training data]] pipeline. It is believed that these unusual strings, like "SolidGoldMagikarp" (a Reddit username) or "PsyNetMessage" (from Rocket League debug logs), were highly frequent in the initial, unfiltered internet-scale dataset used to generate the BPE token vocabulary. Their sheer repetition caused them to be assigned unique, consolidated tokens. However, these specific types of "junk" data, such as counting subreddits where users repeatedly post sequential numbers or verbose debug logs, were subsequently *filtered out* of the dataset used to train the actual language model's weights. This created a disconnect: the model possesses tokens for these inputs but has virtually no semantic understanding or contextual experience with them, causing it to "glitch" when prompted.

Ultimately, this discovery underscores the profound lack of understanding we have regarding the internal mechanisms of even the most powerful LLMs. The bizarre, unexpected reactions to glitch tokens highlight that these complex systems are not merely black boxes; they possess intricate, discoverable internal structures that can reveal surprising insights into how they learn and process information. This emphasizes the critical importance of continued [[concepts/ai-interpretability|interpretability]] research, not only for scientific advancement but also for developing robust safety measures and ensuring the reliable operation of AI systems, as truly aligning AI behavior with human intentions necessitates a deeper comprehension of their underlying "thought processes."

### Video Description & Links
#### Description
Language Models' Achilles heel: Rob Miles talks about "glitch" tokens, those mysterious words which, which result in gibberish when entered into some large language models.

The AI safety/alignment post: https://www.alignmentforum.org/posts/aPeJE8bSo6rAFoLqg/solidgoldmagikarp-plus-prompt-generation 

This video was filmed and edited by Sean Riley.

Computerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com

#### Tags
`computers`, `computerphile`, `computer`, `science`

#### URLs
- https://www.alignmentforum.org/posts/aPeJE8bSo6rAFoLqg/solidgoldmagikarp-plus-prompt-generation
- http://www.bradyharan.com

## Related Concepts
- [[concepts/glitch-tokens|glitch tokens]]
- [[concepts/byte-pair-encoding|byte pair encoding]] — [Wikipedia](https://en.wikipedia.org/wiki/Byte-pair_encoding)
- [[concepts/anomalous-model-responses|anomalous model responses]]
- [[concepts/large-language-models|large language models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
- [[concepts/context-length|tokenization]]
- [[concepts/mechanistic-interpretability|mechanistic interpretability]] — [Wikipedia](https://en.wikipedia.org/wiki/Mechanistic_interpretability)
- embedding space — [Wikipedia](https://en.wikipedia.org/wiki/Latent_space)
- K-means clustering — [Wikipedia](https://en.wikipedia.org/wiki/K-means_clustering)
- [[concepts/training-data|training data]] pipeline
- [[concepts/watermarks|AI safety]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_safety)
- model alignment — [Wikipedia](https://en.wikipedia.org/wiki/AI_alignment)

## Related Entities
- [[entities/gpt-3|GPT-3]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-3)
- [[entities/davinci-instruct-beta|davinci-instruct-beta]]
- Computerphile — [Wikipedia](https://en.wikipedia.org/wiki/Technophilia)
- [[entities/rob-miles|Rob Miles]] — [Wikipedia](https://en.wikipedia.org/wiki/Rob_Miles)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- Reddit — [Wikipedia](https://en.wikipedia.org/wiki/Reddit)
- Rocket League — [Wikipedia](https://en.wikipedia.org/wiki/Rocket_League)
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)