---
wiki-ingested: true
title: "TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing"
date: 2026-09-30
source_type: youtube_summary
provider: "Google"
api: "Gemini 2.5 Flash"
modes: "Summary"
type: "source-summary"
domain: tools-platforms-infrastructure
group: data-pipelines-sync-storage
aliases:
  - "lab-notes/2026-09-30-TeleOCR-Local-1.2B-Model-for-Camera-Captured-Document-Pa"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing
**Clip title:** This Local 1.2B OCR Model Beats [[entities/chatgpt-52|GPT-5.2]] (and Runs on 8GB GPU) — TeleOCR
**[[entities/tasia-custode|Author]] / channel:** [[entities/prompt-engineer|Prompt Engineer]] 48
**URL:** https://www.youtube.com/watch?v=6TnE5pMVbCQ

### Summary
The video introduces TeleOCR, a 1.2 billion-parameter document parser developed by [[entities/china|China]] Telecom's [[concepts/ai-research|AI research]] group, designed to accurately extract [[concepts/json-structuring|structured data]] from various document types, especially "camera-captured" documents. Unlike traditional parsers that struggle with distortions, [[concepts/shadows|shadows]], or angles inherent in photos, TeleOCR demonstrates impressive capabilities, converting images of receipts, handwritten [[concepts/notes|notes]], tables, formulas, and code snippets into clean, structured markdown, HTML tables, or LaTeX. A key highlight is its ability to run efficiently on a local system, specifically an [[concepts/rtx-4060|RTX 4060]] laptop with just 8GB of VRAM, making it accessible for personal or private offline use, and it is released under the [[concepts/apache-2-0|Apache 2.0 license]].

TeleOCR's exceptional performance is underscored by its top rankings across several major [[concepts/content-extraction|document parsing]] benchmarks, including OmniDocBench v1.6 and Wild-OmniDocBench (specifically for camera photos), often outperforming much larger and more complex models like [[entities/thinking-with-3-pro|Gemini 3 Pro]]. The model addresses a fundamental challenge in document parsing: distinguishing between "digital documents" (flat, straight, clean PDFs/scans) and "camera-captured documents" (bent, folded, tilted, shadowed photos). While most parsers [[entities/excel|excel]] at the former, they often fail on the latter. TeleOCR achieves this by adopting a decoupled, two-stage approach that uniquely employs polygons instead of restrictive rectangular [[concepts/bounding-boxes|bounding boxes]] for layout segmentation, allowing it to dewarp pages internally and precisely capture the curved shapes of text blocks.

The video elaborates on six core [[concepts/ideas|ideas]] behind TeleOCR's [[concepts/success|success]]. These include Multi-node Consensus [[concepts/vote|Voting]] for efficient data labeling, Geometry-aware Document Modelling that synthetically bends digital pages to create vast amounts of distorted [[concepts/custom-dataset|training data]], and Curvature-Guided Douglas-Peucker Sampling for intelligent polygon generation. Other innovations cover Image-to-Image Self-[[concepts/verification|Verification]] to validate [[concepts/output-quality|output quality]], a Progressive Four-Stage Training pipeline, and Content-Structure Decoupled [[concepts/learning|Learning]], which first predicts the structural skeleton of elements like tables (using an OTSL format) and then fills in the content. These sophisticated techniques enable TeleOCR to maintain high accuracy despite challenging real-[[entities/earth|world]] photographic conditions.

In conclusion, TeleOCR stands out as a powerful and practical document parsing [[concepts/solution|solution]]. Its ability to accurately process complex, distorted documents, extract various data types (text, tables, formulas, code, charts), and its local deployability make it highly versatile. It is particularly well-suited for applications such as building [[concepts/answer-generation|Retrieval-Augmented Generation]] (RAG) systems over scanned documents, digitizing receipts and invoices from phone photos, converting [[entities/tomasz-janowski|academic]] papers with formulas into editable Markdown, and enabling private, offline document parsing where sending sensitive files to cloud APIs is undesirable. While it has limitations like occasional character errors on heavily warped small text and current training limited to Chinese and English, its strengths offer significant utility for a wide range of tasks.

### Video Description & Links
#### Description
TeleOCR is a 1.2B-parameter [[concepts/open-source|open-source]] (Apache 2.0) document parser from China Telecom's AI team. It is #1 on OmniDocBench v1.6 (96.87 overall — above Gemini 3 Pro, GPT-5.2 and Qwen3-VL-235B on that benchmark), #1 on Wild-OmniDocBench (camera photos), and won the ICDAR 2026 Sci-ImageMiner challenge.

In this video I download it, run it on my RTX 4060 laptop (8GB VRAM, ~2.5GB used), explain every idea in the paper (consensus voting, polygon layout, CGDP sampling, self-judgement, OTSL tables), run all official examples plus my own test set (tilted receipt photo, bent table, handwriting, [[concepts/dark-code|dark code]] screenshot, Chinese+English, crumpled math page), port the two-stage pipeline to [[concepts/microsoft-windows|Windows]], and wrap it in a Gradio app. Honest failures included.

🔗 Links
Model → https://huggingface.co/XingChen-AGI/TeleOCR
Code → https://github.com/caipeng328/TeleOCR
Paper → https://arxiv.org/abs/2608.12898
GGUF (community) → https://huggingface.co/nandraj/NaviDC-OCR-GGUF

⏱ Chapters
0:00 Intro - a tilted receipt, parsed perfectly
1:10 What is TeleOCR
1:30 The problem: digital vs camera documents
2:48 Architecture (Qwen2.5-VL encoder + Qwen3-0.6B)
3:13 The 6 key ideas
6:21 Benchmarks
7:37 Install + download
7:57 Gotcha: torchvision
9:06 Official examples: text, table, formula, code, chart
10:40 Layout detection
11:22 My own tests
13:06 Honest failure: whole-photo prompt
13:25 My two-stage pipeline on Windows
13:53 Receipt photo: 100% correct
15:07 Gradio app demo
15:45 [[concepts/speed|Speed]] on an 8GB laptop
16:28 Honest limits
16:52 The good
17:19 [[concepts/scenarios|Use cases]] + wrap-up

Get GPUs Runpod: https://get.runpod.io/pe48
Get Hostinger:  https://www.hostg.xyz/SHJiu

🔗 Connect with me:
[[entities/email|Email]] → prompt.engineer48.alerts@[[entities/gmail|gmail]].com
[[entities/github|GitHub]] → https://github.com/PromptEngineer48

#### Tags
`ai`, `TeleOCR`, `OCR`, `document parsing`, `local OCR`, `OmniDocBench`, `vision language model`, `VLM`, `Qwen2.5-VL`, `Qwen3`, `PDF to markdown`, `receipt OCR`, `table extraction`, `LaTeX OCR`, `RTX 4060`, `8GB GPU`, `open source AI`, `Hugging Face`, `Gradio`, `RAG`, `MinerU`, `PaddleOCR-VL`

#### URLs
- https://huggingface.co/XingChen-AGI/TeleOCR
- https://github.com/caipeng328/TeleOCR
- https://arxiv.org/abs/2608.12898
- https://huggingface.co/nandraj/NaviDC-OCR-GGUF
- https://get.runpod.io/pe48
- https://www.hostg.xyz/SHJiu
- https://github.com/PromptEngineer48

## Related Concepts
- [[concepts/teleocr|TeleOCR]]
- [[concepts/optical-character-recognition|optical character recognition]] — [Wikipedia](https://en.wikipedia.org/wiki/Optical_character_recognition)
- [[concepts/document-parsing|document parsing]]
- [[concepts/structured-data-extraction|structured data extraction]]
- [[concepts/camera-captured-documents|camera-captured documents]]
- [[concepts/markdown|markdown]] — [Wikipedia](https://en.wikipedia.org/wiki/Markdown)
- [[concepts/html-tables|HTML tables]] — [Wikipedia](https://en.wikipedia.org/wiki/HTML_element)
- [[concepts/latex-formula-recognition|LaTeX]] — [Wikipedia](https://en.wikipedia.org/wiki/LaTeX)
- [[concepts/12b-parameter-model|1.2B parameter model]]
- [[concepts/local-ai-model|local AI model]]
- [[concepts/visual-layout-preservation|RAG systems]]

## Related Entities
- [[entities/teleocr|TeleOCR]]
- [[entities/china-telecom|China Telecom]] — [Wikipedia](https://en.wikipedia.org/wiki/China_Telecom)
- [[entities/prompt-engineer-48|Prompt Engineer 48]]
- [[entities/gemini-3-pro|Gemini 3 Pro]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Gemini)
- [[entities/gpt-52|GPT-5.2]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-5.2)
- [[entities/apache-20|Apache 2.0]] — [Wikipedia](https://en.wikipedia.org/wiki/Apache_License)
- RTX 4060 — [Wikipedia](https://en.wikipedia.org/wiki/GeForce_RTX_40_series)