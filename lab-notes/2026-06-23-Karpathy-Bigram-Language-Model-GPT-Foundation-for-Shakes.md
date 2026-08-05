---
title: "Karpathy Bigram Language Model: GPT Foundation for Shakespeare Text Generation"
date: 2026-06-23
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Karpathy Bigram Language Model: GPT Foundation for Shakespeare Text Generation
Generated: 2026-06-23 · API: Gemini 2.5 Flash · Modes: Summary

---

## Karpathy Bigram Language Model: GPT Foundation for Shakespeare Text Generation
**Clip title:** Karpathy Bigram explained in 10min..
**Author / channel:** Caleb Writes Code
**URL:** https://www.youtube.com/watch?v=Qd2bAzwH9uA

### Summary
This video provides a clear and visually intuitive explanation of how a basic "Bigram Language Model" operates, serving as the foundational first part of a larger series that aims to demystify the inner workings of a Generative Pre-trained Transformer (GPT) model. The primary goal presented is to train an artificial intelligence model to generate text in the distinct style of William Shakespeare. This involves acquiring a vast dataset of Shakespeare's writings, identifying a comprehensive "vocabulary" of unique characters (tokens), and then teaching the model to predict the likelihood of the next character in a sequence based solely on the immediately preceding character.

The process of training this model begins with an initial, randomized "token embedding table" which acts as the model's internal representation of character relationships. When asked to generate text from this untrained state, the output is pure gibberish, highlighting the need for learning. The core task is to adjust these numerical representations to better reflect the patterns found in Shakespeare's corpus. To handle the large amount of training data efficiently, the text is divided into "chunks" or "batches," each containing a set number of "blocks" or tokens. The model processes these batches in parallel, learning to predict the next token based on the current one within each block.

Measuring the model's performance and guiding its learning relies on a "loss function," specifically "Negative Log Likelihood." This function quantifies the discrepancy between the model's predicted probabilities for the next token and the actual next token from the Shakespearean dataset. Before calculating loss, a "Softmax" function normalizes the model's raw numerical outputs (logits) into probabilities that sum to one. The objective during training is to continuously minimize this average loss. This iterative process involves "backpropagation" to calculate how to adjust the model's internal weights and an "optimizer" to prudently apply these adjustments. Striking the right balance in these adjustments is crucial; too aggressive, and the training becomes unstable; too subtle, and learning is inefficient.

Despite running through thousands of training iterations, resulting in a significantly reduced loss, the output from the Bigram Language Model remains largely nonsensical, albeit less chaotic than its initial random state. The fundamental limitation of this architecture is its restricted contextual awareness; it only "looks back" at a single preceding token to make its predictions. It fails to grasp the broader relationships and long-range dependencies within language, which are essential for generating coherent and stylistically accurate text like Shakespeare's. The video concludes by emphasizing that to overcome this, the model needs to incorporate more complex mechanisms, such as the "Attention Mechanism," which is a key component of the more advanced GPT architecture, to be explored in the subsequent video in the series.

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
TikTok: https://www.tiktok.com/@calebwritescode

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
