---
wiki-ingested: true
title: "Baidu Unlimited-OCR: Enhancing DeepSeek-OCR for Long Document Processing"
date: 2026-07-01
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: data-pipelines-sync-storage
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

Generated: 2026-07-01 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Baidu Unlimited-OCR: Enhancing DeepSeek-OCR for Long Document Processing
**Clip title:** Baidu Just Fixed DeepSeek-OCR for Reading Long Documents
**[[entities/tasia-custode|Author]] / channel:** [[entities/philschmid|The AI Automators]]
**URL:** https://www.youtube.com/watch?v=hESwB7Xv-K8

### Summary
This video introduces Baidu's new [[concepts/open-source|open-source]] [[concepts/computer-vision|Vision]] [[concepts/statistical-language-modeling|Language Model]] (VLM) called Unlimited-OCR, which promises efficient and continuous processing of long documents without [[concepts/human-performance|performance degradation]]. The [[entities/speaker|speaker]], [[entities/daniel-miessler|Daniel]] Walsh, highlights that this model is a fine-tuned version of [[concepts/deepseek-ai|DeepSeek]] OCR and aims to solve a known problem in VLMs related to parsing extensive documents while maintaining context. He demonstrates a custom application he built to test Unlimited-OCR, showcasing its ability to rapidly extract text, layout, and structure from multi-page [[concepts/pdfs|PDFs]] in both high-[[concepts/solution|resolution]] "Gundam" and lower-[[concepts/solution|resolution]] "Base" modes, noting consistent [[concepts/speed|processing speed]] even as pages accumulate.

Walsh delves into the technical underpinnings, explaining three categories of Optical Character Recognition (OCR): traditional (raw text, lost structure), structure-aware (keeps layout, deterministic, no language model), and VLMs (reads whole page, can hallucinate). The core technical challenge for VLMs is the "token problem," encompassing both input and output. DeepSeek OCR addresses the input side through "optical compression," converting entire pages into a smaller number of visual [[concepts/tokens|tokens]] (e.g., 2000 text tokens compressed to 256 vision tokens), thereby significantly reducing the computational cost of the input. However, the output side traditionally suffered from a growing "KV cache" (the model's [[concepts/memory|memory]] of generated text), leading to slower processing and decreased accuracy as the document length increased.

Baidu's key [[concepts/innovation|innovation]] for Unlimited-OCR is "Reference Sliding Window [[concepts/attention-mechanisms|Attention]] (R-SWA)," which tackles the output token problem. Mimicking how a human copies a book, the model keeps the entire source document (the compressed image tokens) in full view (the "reference" part) but only retains a fixed-size sliding window (e.g., the last 128 words) of the *already generated text* in its immediate memory. This mechanism prevents the KV cache from continuously growing, ensuring that the processing speed remains flat and constant regardless of how many pages have been transcribed. While effectively extending the perceived context, this approach introduces some caveats to the "unlimited" claim.

Despite its innovative approach, Walsh concludes that "Unlimited" is a misnomer, as the model still has an input ceiling (e.g., tested up to 40+ pages, not hundreds or thousands) and resolution trade-offs for multi-page processing. He also points out that Unlimited-OCR is not currently the accuracy leader compared to other specialist document VLMs. Ultimately, he argues that for many real-[[entities/earth|world]] [[concepts/scenarios|scenarios]], parallel processing of document chunks is often a more scalable and efficient solution, implicitly circumventing the very problem Unlimited-OCR aims to solve. However, he acknowledges that Unlimited-OCR finds its niche in specialized cases where cross-page coherence is absolutely critical and chunking might degrade meaning, such as in complex tables spanning multiple pages, or for tasks like translation and [[concepts/audio-transcription|audio transcription]] where continuous context is paramount.

### Video Description & Links
#### Description
👉 Access our AI Architects course & join hundreds of serious AI builders in our community: https://www.theaiautomators.com/?utm_source=youtube&utm_medium=video&utm_campaign=tutorial&utm_content=unlimited-ocr

🔗 Unlimited-OCR
GitHub: https://github.com/baidu/Unlimited-OCR
[[concepts/open-source-machine-learning|Hugging Face]]: https://huggingface.co/baidu/Unlimited-OCR
Paper (arXiv): https://arxiv.org/abs/2606.23050

🔗 Other Resources
DeepSeek-OCR (arXiv): https://arxiv.org/abs/2510.18234
[[concepts/docling|Docling]]: https://github.com/docling-project/docling
Datalab Marker: https://github.com/datalab-to/marker

Last week Baidu open-sourced a new VLM called Unlimited-OCR, and the name is basically the whole [[entities/pitch|pitch]]: take a long document and parse the entire thing in a single pass, dozens of pages at a time, without the model ever slowing down. It's already past 12,000 [[concepts/stellar-objects|stars]] on GitHub, and it's a fine-tune of DeepSeek-OCR, the model that made a splash last year with optical compression. So I downloaded the [[concepts/open-source-weights|open weights]], got [[concepts/ai-assisted-coding|Claude Code]] to throw together a small app, and put it through its paces on a real 50-page PDF.

It does work. But there's a big difference between something working and it actually being the right tool for the job. So in this video I get under the hood: the three kinds of OCR and when you'd reach for each, DeepSeek's optical compression for shrinking the input, and the one genuinely novel idea here on the output side, R-SWA (Reference Sliding Window Attention), the flat KV cache that keeps memory and speed constant no matter how many pages you generate.

⏱️ Timestamps:
0:00 Demo
03:01 Three kinds of OCR
06:57 Input Optical compression
08:50 Output flat-cache fix
11:56 Catches & verdict

#AI #AIAgents #OCR #UnlimitedOCR #DeepSeekOCR #VLM #DocumentParsing #Baidu #Docling #KVCache #RAG #AgenticRAG #AIArchitects #AIBuilder

#### URLs
- https://www.theaiautomators.com/?utm_source=youtube&utm_medium=video&utm_campaign=tutorial&utm_content=unlimited-ocr
- https://github.com/baidu/Unlimited-OCR
- https://huggingface.co/baidu/Unlimited-OCR
- https://arxiv.org/abs/2606.23050
- https://arxiv.org/abs/2510.18234
- https://github.com/docling-project/docling
- https://github.com/datalab-to/marker

## Related Concepts
- [[concepts/vision-language-models|Vision Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Vision_Language_Models)
- [[concepts/optical-character-recognition|Optical Character Recognition]] — [Wikipedia](https://en.wikipedia.org/wiki/Optical_Character_Recognition)
- [[concepts/long-document-processing|Long Document Processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Long_Document_Processing)
- [[concepts/open-source|Open-source AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-source_AI)
- [[concepts/context-window|Context Window]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Window)
- [[concepts/document-parsing|Document Parsing]] — [Wikipedia](https://en.wikipedia.org/wiki/Document_Parsing)
- [[concepts/human-performance|Performance Degradation]] — [Wikipedia](https://en.wikipedia.org/wiki/Performance_Degradation)
- Reference Sliding Window Attention — [Wikipedia](https://en.wikipedia.org/wiki/Reference_Sliding_Window_Attention)
- [[concepts/inference-optimization|KV Cache]] — [Wikipedia](https://en.wikipedia.org/wiki/KV_Cache)
- Optical Compression — [Wikipedia](https://en.wikipedia.org/wiki/Optical_Compression)
- Visual Tokens — [Wikipedia](https://en.wikipedia.org/wiki/Visual_Tokens)
- Input Ceiling — [Wikipedia](https://en.wikipedia.org/wiki/Input_Ceiling)
- Cross-page Coherence — [Wikipedia](https://en.wikipedia.org/wiki/Cross-page_Coherence)
- [[concepts/parallel-processing|Parallel Processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Parallel_Processing)

## Related Entities
- [[entities/baidu|Baidu]] — [Wikipedia](https://en.wikipedia.org/wiki/Baidu)
- [[entities/the-ai-automators|The AI Automators]] — [Wikipedia](https://en.wikipedia.org/wiki/The_AI_Automators)
- [[entities/daniel-walsh|Daniel Walsh]] — [Wikipedia](https://en.wikipedia.org/wiki/Daniel_Walsh)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- Unlimited-OCR — [Wikipedia](https://en.wikipedia.org/wiki/Unlimited-OCR)
- DeepSeek-OCR — [Wikipedia](https://en.wikipedia.org/wiki/DeepSeek-OCR)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- arXiv — [Wikipedia](https://en.wikipedia.org/wiki/arXiv)
- Doclin — [Wikipedia](https://en.wikipedia.org/wiki/Doclin)