---
title: "Transformer Attention Mechanism Explained: Contextual Embeddings and QKV System"
date: 2026-05-06
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Transformer Attention Mechanism Explained: Contextual Embeddings and QKV System
Generated: 2026-05-06 · API: Gemini 2.5 Flash · Modes: Summary

---

## Transformer Attention Mechanism Explained: Contextual Embeddings and QKV System
**Clip title:** Attention in transformers, step-by-step | Deep Learning Chapter 6
**Author / channel:** 3Blue1Brown
**URL:** https://www.youtube.com/watch?v=eMlx5fFNoYc

### Summary
The 3Blue1Brown video provides a clear and visually intuitive explanation of the attention mechanism within Transformer models, a core technology behind large language models (LLMs) and the current wave of AI. The video begins by contextualizing Transformers as tools designed to predict the next word in a sequence by processing text inputs, which are first broken down into "tokens" and then converted into high-dimensional numerical "embeddings." These embeddings initially encode the intrinsic meaning of a word, but the central purpose of the Transformer's attention mechanism is to progressively adjust these embeddings to reflect rich contextual meaning from the surrounding text.

The video illustrates the "why" behind attention using concrete examples. For instance, the word "mole" has multiple meanings (an animal, a chemical unit, a skin spot). Without context, its initial embedding would be generic. The attention mechanism allows the model to "attend" to surrounding words (like "shrew" or "carbon dioxide") to refine "mole's" embedding to its specific contextual meaning. Similarly, the generic embedding for "Tower" can be updated by "Eiffel" to point towards a more specific meaning associated with Paris, France, and structures made of steel. This capacity to dynamically integrate information from words, even those far apart in a long text, is crucial for disambiguation and understanding complex relationships.

The "how" of attention involves a three-part Query-Key-Value system. For each word in a sequence, a "Query" vector is generated (representing what information it's looking for), and "Key" vectors are generated for all other words (representing what information they offer). The dot product between Query and Key vectors determines a "relevance score" between word pairs, forming an "attention pattern." These scores are then normalized using a softmax function to create weights, ensuring they sum to one. A "masking" technique is applied during training to prevent later words from influencing earlier ones. Concurrently, "Value" vectors are generated for each word, representing the actual information to be transferred. Finally, a weighted sum of these Value vectors (weighted by the attention pattern) is computed and added to the original word embedding, producing a new, contextually enriched embedding. This entire process is termed a "single head of attention."

Transformers, such as GPT-3, employ "multi-headed attention," running numerous distinct attention heads in parallel. Each head uses its own set of Query, Key, and Value matrices, allowing it to learn and apply different types of contextual updates (e.g., grammatical, semantic, co-referential). For instance, GPT-3 features 96 attention heads per layer, across 96 layers. This architecture is massively parallelizable, meaning computations can be run simultaneously on GPUs, which is a critical factor in scaling up deep learning models. The video concludes by highlighting that while attention is highly celebrated and fundamental, it accounts for only about one-third of GPT-3's total parameters (around 58 billion), with other architectural components, like Multilayer Perceptrons, comprising the majority. The ability to scale such complex systems efficiently has been a cornerstone of recent advancements in AI.

### Video Description & Links
#### Description
Demystifying attention, the key mechanism inside transformers and LLMs.
Instead of sponsored ad reads, these lessons are funded directly by viewers: https://3b1b.co/support
Special thanks to these supporters: https://www.3blue1brown.com/lessons/attention#thanks
An equally valuable form of support is to simply share the videos.

Demystifying self-attention, multiple heads, and cross-attention.
Instead of sponsored ad reads, these lessons are funded directly by viewers: https://3b1b.co/support

The first pass for the translated subtitles here is machine-generated and, therefore, notably imperfect. To contribute edits or fixes, visit https://www.criblate.com

Звуковая дорожка на русском языке: Влад Бурмистров.

------------------

Here are a few other relevant resources

Build a GPT from scratch, by Andrej Karpathy
https://youtu.be/kCc8FmEb1nY

If you want a conceptual understanding of language models from the ground up, @vcubingx just started a short series of videos on the topic:
https://www.youtube.com/watch?v=1il-s4mgNdI

If you're interested in the herculean task of interpreting what these large networks might actually be doing, the Transformer Circuits posts by Anthropic are great. In particular, it was only after reading one of these that I started thinking of the combination of the value and output matrices as being a combined low-rank map from the embedding space to itself, which, at least in my mind, made things much clearer than other sources.
https://transformer-circuits.pub/2021/framework/index.html

Site with exercises related to ML programming and GPTs
https://www.gptandchill.ai/codingproblems

History of language models by Brit Cruise,  @ArtOfTheProblem  
https://youtu.be/OFS90-FX6pg

An early paper on how directions in embedding spaces have meaning:
https://arxiv.org/pdf/1301.3781.pdf

------------------

Timestamps:
0:00 - Recap on embeddings
1:39 - Motivating examples
4:29 - The attention pattern
11:08 - Masking
12:42 - Context size
13:10 - Values
15:44 - Counting parameters
18:21 - Cross-attention
19:19 - Multiple heads
22:16 - The output matrix
23:19 - Going deeper
24:54 - Ending

------------------

These animations are largely made using a custom Python library, manim.  See the FAQ comments here:
https://3b1b.co/faq#manim
https://github.com/3b1b/manim
https://github.com/ManimCommunity/manim/

All code for specific videos is visible here:
https://github.com/3b1b/videos/

The music is by Vincent Rubinetti.
https://www.vincentrubinetti.com
https://vincerubinetti.bandcamp.com/album/the-music-of-3blue1brown
https://open.spotify.com/album/1dVyjwS8FBqXhRunaG5W5u

------------------

3blue1brown is a channel about animating math, in all senses of the word animate. If you're reading the bottom of a video description, I'm guessing you're more interested than the average viewer in lessons here. It would mean a lot to me if you chose to stay up to date on new ones, either by subscribing here on YouTube or otherwise following on whichever platform below you check most regularly.

Mailing list: https://3blue1brown.substack.com
Twitter: https://twitter.com/3blue1brown
Instagram: https://www.instagram.com/3blue1brown
Reddit: https://www.reddit.com/r/3blue1brown
Facebook: https://www.facebook.com/3blue1brown
Patreon: https://patreon.com/3blue1brown
Website: https://www.3blue1brown.com

#### URLs
- https://3b1b.co/support
- https://www.3blue1brown.com/lessons/attention#thanks
- https://www.criblate.com
- https://youtu.be/kCc8FmEb1nY
- https://www.youtube.com/watch?v=1il-s4mgNdI
- https://transformer-circuits.pub/2021/framework/index.html
- https://www.gptandchill.ai/codingproblems
- https://youtu.be/OFS90-FX6pg
- https://arxiv.org/pdf/1301.3781.pdf
- https://3b1b.co/faq#manim
- https://github.com/3b1b/manim
- https://github.com/ManimCommunity/manim/
- https://github.com/3b1b/videos/
- https://www.vincentrubinetti.com
- https://vincerubinetti.bandcamp.com/album/the-music-of-3blue1brown
- https://open.spotify.com/album/1dVyjwS8FBqXhRunaG5W5u
- https://3blue1brown.substack.com
- https://twitter.com/3blue1brown
- https://www.instagram.com/3blue1brown
- https://www.reddit.com/r/3blue1brown
- https://www.facebook.com/3blue1brown
- https://patreon.com/3blue1brown
- https://www.3blue1brown.com
