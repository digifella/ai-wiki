---
wiki-ingested: true
title: "DeepSeek-OCR: Artificial Forgetting for Efficient AI Long Text Compression"
date: 2026-10-12
source_type: youtube_summary
provider: "Google"
api: "Gemini 2.5 Flash"
modes: "Summary"
type: "source-summary"
domain: ai-agents
group: open-systems-local-models
aliases:
  - "lab-notes/2026-10-12-DeepSeek-OCR-Artificial-Forgetting-for-Efficient-AI-Long"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## DeepSeek-OCR: Artificial Forgetting for Efficient AI Long Text Compression
**Clip title:** Why [[concepts/deepseek-ai|DeepSeek]] Wants AI To Forget
**[[entities/tasia-custode|Author]] / channel:** Two Minute Papers
**URL:** https://www.youtube.com/watch?v=4fLVq6HJsKc

### Summary
This video introduces [[concepts/memory-efficiency|DeepSeek-OCR]], a novel approach to compressing long text documents for [[concepts/ai-technologies|Artificial Intelligence]] (AI) models. The core problem addressed is that traditional [[concepts/ai-models|AI models]] process text as "[[concepts/tokens|tokens]]," and every word read incurs a cost, making extensive reading or long conversational contexts prohibitively expensive. Analogizing human [[concepts/memory|memory]], which tends to forget perfect details over time but retains essential information, DeepSeek-OCR proposes "[[concepts/artificial-forgetting|artificial forgetting]]" for AI to reduce this burden.

DeepSeek-OCR achieves this by converting text documents into images, then employing a [[concepts/computer-vision|vision]] encoder to compress these images into a significantly smaller number of "[[concepts/computer-vision|vision]] [[concepts/tokens|tokens]]." This process is likened to JPEG compression for images, but it's a learned, token-based compression specifically optimized for text content. Remarkably, the system can achieve a 10x compression ratio while retaining over 96% of the original text's [[concepts/accuracy|precision]]. Even at nearly 20x compression, it maintains approximately 60% accuracy, demonstrating an impressive ability to discard redundant information without losing critical context.

The technical ingenuity lies in its tokenizer, which is designed to handle very high-[[concepts/solution|resolution]] documents efficiently. It utilizes a combination of local window [[concepts/attention-mechanism|attention]], a 16x convolutional compressor, and global visual processing, allowing it to process vast amounts of data without an explosion in computational cost. This isn't merely about efficiently [[concepts/storing|storing]] information; the true power of DeepSeek-OCR lies in its capacity to generate massive amounts of [[concepts/custom-dataset|training data]] for [[concepts/demystifying-llms|Large Language Models]] (LLMs) and Visual Language Models (VLMs). It can produce over 200,000 pages of [[concepts/custom-dataset|training data]] per day on a single A100 GPU, significantly accelerating the development and training of new [[concepts/ai-models|AI models]].

However, the video also highlights an important limitation: OCR alone is insufficient to fully validate true context optical compression. When visual tokens are severely limited, the model may start to "fill in the gaps" by guessing missing or ambiguous text based on linguistic context and learned priors, rather than solely relying on visual evidence. This means that at extreme compression levels, the AI might act more like an advanced [[concepts/auto-complete|auto-complete]] system, inferring information rather than perfectly recalling it from the compressed visual data.

Despite these nuances, DeepSeek-OCR is presented as a groundbreaking, [[concepts/open-source-system|open-source system]] that promises to democratize [[concepts/ai-development|AI development]]. By drastically reducing the computational and [[concepts/memory|memory]] requirements for processing documents, it enables AI models to handle larger contexts more affordably and facilitates the creation of vast training datasets, fostering the development of new and improved [[concepts/open-models|open models]] across various domains like fluid [[concepts/simulation|simulation]], neural [[concepts/fat-rendering|rendering]], and robot [[concepts/learning|learning]].

### Video Description & Links
#### Description
📝 The DeepSeek OCR paper is available here:
https://github.com/deepseek-ai/DeepSeek-OCR

Adam Bridges, B Shang, Carlos Galarza, Christian Ahlin, Eric Tyson, Juan Benet, Lukas Biewald, [[entities/michael|Michael]] Tedder, Owen Skarpness, [[entities/cyber-ryan|Ryan]] Stankye, Shawn Becker, Steef, Taras Bobrovytsky, Tazaur Sagenclaw, Tybie Fitzhugh, Ueli Gallizzi

#### Tags
`ai`, `deepseek`, `deepseek ai`

#### URLs
- https://github.com/deepseek-ai/DeepSeek-OCR

## Related Concepts
- [[concepts/artificial-forgetting|Artificial Forgetting]]
- [[concepts/long-text-compression|Long Text Compression]]
- [[concepts/memory-efficiency|Memory Efficiency]]
- [[concepts/siglip-image-encoder|Vision Encoder]]
- [[concepts/open-source-ai|Open-Source AI]]
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)

## Related Entities
- [[entities/two-minute-papers|Two Minute Papers]]
- [[entities/deepseek|DeepSeek]] — [Wikipedia](https://en.wikipedia.org/wiki/DeepSeek)
- Juan Benet — [Wikipedia](https://en.wikipedia.org/wiki/Juan_Benet)
- Lukas Biewald — [Wikipedia](https://en.wikipedia.org/wiki/Lukas_Biewald)
- A100 GPU — [Wikipedia](https://en.wikipedia.org/wiki/Ampere_%28microarchitecture%29)