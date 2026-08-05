---
wiki-ingested: true
title: "Karpathy Bigram Language Model: GPT Foundation for Shakespeare Text Generation"
date: 2026-06-23
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-23 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Karpathy Bigram Language Model: GPT Foundation for Shakespeare Text Generation
**Clip title:** [[concepts/karpathy|Karpathy]] Bigram explained in 10min..
**[[entities/tasia-custode|Author]] / channel:** Caleb Writes Code
**URL:** https://www.youtube.com/watch?v=Qd2bAzwH9uA

### Summary
This video provides a clear and visually intuitive explanation of how a basic "Bigram [[concepts/statistical-language-modeling|Language Model]]" operates, serving as the foundational first part of a larger series that aims to demystify the inner workings of a Generative Pre-trained Transformer (GPT) model. The primary goal presented is to train an [[concepts/ai-technologies|artificial intelligence]] model to generate text in the distinct [[concepts/style|style]] of [[entities/william-shakespeare|William Shakespeare]]. This involves acquiring a vast dataset of Shakespeare's writings, identifying a comprehensive "vocabulary" of unique characters ([[concepts/tokens|tokens]]), and then teaching the model to predict the likelihood of the next character in a sequence based solely on the immediately preceding character.

The process of training this model begins with an initial, randomized "token embedding table" which acts as the model's internal representation of character [[concepts/relationships|relationships]]. When asked to generate text from this untrained state, the output is pure gibberish, highlighting the need for [[concepts/learning|learning]]. The core task is to adjust these [[concepts/numerical-representations|numerical representations]] to better reflect the patterns found in Shakespeare's corpus. To handle the large amount of [[concepts/custom-dataset|training data]] efficiently, the text is divided into "chunks" or "batches," each containing a set number of "blocks" or [[concepts/tokens|tokens]]. The model processes these batches in parallel, [[concepts/learning|learning]] to predict the next token based on the current one within each block.

Measuring the model's performance and guiding its learning relies on a "loss function," specifically "Negative Log Likelihood." This function quantifies the discrepancy between the model's predicted probabilities for the next token and the actual next token from the Shakespearean dataset. Before calculating loss, a "Softmax" function normalizes the model's raw numerical outputs (logits) into probabilities that sum to one. The objective during training is to continuously minimize this average loss. This [[concepts/iterative-refinement|iterative process]] involves "[[concepts/backpropagation|backpropagation]]" to calculate how to adjust the model's internal [[concepts/parameters|weights]] and an "optimizer" to prudently apply these [[concepts/adjustments|adjustments]]. Striking the right balance in these [[concepts/adjustments|adjustments]] is crucial; too aggressive, and the training becomes unstable; too subtle, and learning is inefficient.

Despite running through thousands of training iterations, resulting in a significantly reduced loss, the output from the [[concepts/bigram-language-model|Bigram Language Model]] remains largely nonsensical, albeit less chaotic than its initial random state. The fundamental limitation of this architecture is its restricted [[concepts/ai-agent-context|contextual awareness]]; it only "looks back" at a single preceding token to make its predictions. It fails to grasp the broader [[concepts/relationships|relationships]] and long-range dependencies within language, which are essential for generating coherent and stylistically accurate text like Shakespeare's. The video concludes by emphasizing that to overcome this, the model needs to incorporate more complex [[concepts/causes|mechanisms]], such as the "[[concepts/self-attention|Attention Mechanism]]," which is a key component of the more advanced GPT architecture, to be explored in the subsequent video in the series.

### Video Description & Links
#### Description
Check out BlueDot's courses and learn how to help shape the future of AI: http://bluedot.org/calebwritescode

Andrej Karpathy's explaination of Bigram Language Model explained

Bigram LMs, though simple, it provides powerful insight into the inner mechanics of how tokens are processed in language models. This is a pre-amble for what's next: GPT, which is the 2nd part of the series

The Bigram model here incorporates:
Tokenization, Vocabulary, Negative Loss Function, Cross Entropy, Logits, SoftMax, Optimizer, and AdamW

These are essential ingredients to understand in order to build our knowledge on how LLMs really work as we build our case towards attention and GPT

Follow me:
X: https://x.com/calebfoundry
LinkedIn: https://www.linkedin.com/in/calebeom/
[[entities/tiktok|TikTok]]: https://www.tiktok.com/@calebwritescode

Chapters
00:00 Intro
00:41 Tokenization
01:45 Embedding
02:47 Training
03:10 Sponsor: BlueDot
04:15 Batch, Block, Channel
05:35 Update
06:22 Loss
08:40 Backprop, Optimizer
09:03 Result
09:52 Conclusion

#karpathy #deeplearning #llm

#### Tags
`Andrej Karpathy`, `Karpathy Bigram LM`, `Karpathy Explained`, `Karpathy YouTube Channel`, `Bigram Model`, `Bigram Language Model explained`, `What does Bigralm LM mean`, `How does LLM Work?`, `Explaining what Bigram is`, `Andrej Karpathy videos`

#### URLs
- http://bluedot.org/calebwritescode
- https://x.com/calebfoundry
- https://www.linkedin.com/in/calebeom/
- https://www.tiktok.com/@calebwritescode

## Related Concepts
- [[concepts/bigram-language-model|Bigram Language Model]] — [Wikipedia](https://en.wikipedia.org/wiki/Bigram_Language_Model)
- [[concepts/model-licensing|GPT]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT)
- [[concepts/text-generation|Text Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Text_Generation)
- [[concepts/neural-networks|Neural Networks]] — [Wikipedia](https://en.wikipedia.org/wiki/Neural_Networks)
- [[concepts/maximum-entropy-modeling|Probability Distribution]] — [Wikipedia](https://en.wikipedia.org/wiki/Probability_Distribution)
- [[concepts/transformer-models|Sequence Modeling]] — [Wikipedia](https://en.wikipedia.org/wiki/Sequence_Modeling)
- [[concepts/vanishing-gradient-problem|Deep Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Deep_Learning)
- [[concepts/natural-language-processing|Natural Language Processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Natural_Language_Processing)
- [[concepts/training-data|Training Data]] — [Wikipedia](https://en.wikipedia.org/wiki/Training_Data)
- [[concepts/predictive-modeling|Predictive Modeling]] — [Wikipedia](https://en.wikipedia.org/wiki/Predictive_Modeling)
- [[concepts/character-level-modeling|Character-Level Modeling]] — [Wikipedia](https://en.wikipedia.org/wiki/Character-Level_Modeling)
- [[concepts/autoregressive-generation|Autoregressive Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Autoregressive_Generation)
- GPT Architecture — [Wikipedia](https://en.wikipedia.org/wiki/GPT_Architecture)
- [[concepts/token-generation-speed|Tokenization]] — [Wikipedia](https://en.wikipedia.org/wiki/Tokenization)
- Vocabulary — [Wikipedia](https://en.wikipedia.org/wiki/Vocabulary)
- Token Embedding — [Wikipedia](https://en.wikipedia.org/wiki/Token_Embedding)
- Softmax Function — [Wikipedia](https://en.wikipedia.org/wiki/Softmax_Function)
- Logits — [Wikipedia](https://en.wikipedia.org/wiki/Logits)
- Negative Log Likelihood — [Wikipedia](https://en.wikipedia.org/wiki/Negative_Log_Likelihood)
- Cross Entropy Loss — [Wikipedia](https://en.wikipedia.org/wiki/Cross_Entropy_Loss)
- [[concepts/backpropagation|Backpropagation]] — [Wikipedia](https://en.wikipedia.org/wiki/Backpropagation)
- Optimizer — [Wikipedia](https://en.wikipedia.org/wiki/Optimizer)
- [[concepts/batch-processing|Batch Processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Batch_Processing)
- [[concepts/transformers|Attention Mechanism]] — [Wikipedia](https://en.wikipedia.org/wiki/Attention_Mechanism)

## Related Entities
- [[entities/caleb-writes-code|Caleb Writes Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Caleb_Writes_Code)
- [[entities/william-shakespeare|William Shakespeare]] — [Wikipedia](https://en.wikipedia.org/wiki/William_Shakespeare)
- [[entities/andrej-karpathy|Andrej Karpathy]] — [Wikipedia](https://en.wikipedia.org/wiki/Andrej_Karpathy)
- BlueDot — [Wikipedia](https://en.wikipedia.org/wiki/BlueDot)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- GPT — [Wikipedia](https://en.wikipedia.org/wiki/GPT)