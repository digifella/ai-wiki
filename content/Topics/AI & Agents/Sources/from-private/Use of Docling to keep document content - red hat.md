---
wiki-ingested: true
domain: creative-pursuits
group: video-content-systems
---
<https://www.youtube.com/watch?v=BWxdLm1KqTU>
The video introduces Docling, an [[concepts/open-source|open-source]] toolkit developed by [[entities/ibm|IBM]] Research for efficient [[concepts/document-processing|document processing]] in AI [[concepts/workflow|workflows]].
Here's a detailed [[concepts/summary|summary]] of the video's content:

* **The Problem with Current AI/LLM Data:** The [[entities/speaker|speaker]], Cedric Clyburn, [[concepts/highlights|highlights]] that while [[concepts/large-language-models|large language models]] (LLMs) are excellent at processing text and [[concepts/markdown|Markdown]], a vast amount of valuable information is "trapped" in formats like PDFs and proprietary formats like DOCX. These formats often have complex, nested structures, no standardized layouts, and varying formatting/table structures, making them difficult for AI to work with directly. This is particularly problematic for Retrieval Augmented Generation (RAG) techniques, which rely on access to personal or organizational data.
* **Introducing Docling:** Docling is presented as an open-source project from IBM Research designed to address this challenge. It can parse popular document formats (PDF, DOCX, PPTX, XLSX, images, HTML, AsciiDoc, Markdown) and export them into machine-readable formats like Markdown and JSON. Crucially, Docling employs "context-aware techniques" to preserve the original document's [[concepts/integrity|integrity]], including layout, reading order, and table structures. It also supports [[concepts/optical-character-recognition|OCR]] for scanned PDFs. Docling offers a simple [[concepts/cli|command-line]] interface (CLI) and a [[entities/python|Python]] API, integrating seamlessly with popular LLM frameworks like LlamaIndex and LangChain.
* **Docling's Origins and [[concepts/architecture|Architecture]]:** The speaker refers to the Docling Technical Report on arXiv.org, explaining that Docling emerged from the need to unify document processing. Historically, converting complex document formats has been difficult due to format variability and weak standardization. While commercial tools exist, they often come with [[concepts/licensing|licensing]] costs or require expensive LLM [[concepts/inference|inference]]. Docling aims to provide a cost-effective, open-source [[concepts/solution|solution]]. The video illustrates Docling's pipeline:
	**PDF Pipeline:** PDFs and images undergo parsing, OCR, layout analysis, and table [[concepts/structure|structure]] recognition. This "build" phase results in a DoclingDocument representation. **Simple Pipeline:** Other markup formats (MD, HTML, AsciiDoc) and office formats (DOCX, PPTX, XLSX) are parsed and assembled into the DoclingDocument. Both pipelines lead to a unified `DoclingDocument` representation, which can then be "enriched" (e.g., with [[concepts/metadata|metadata]]) and "used" (exported to JSON, Markdown, HTML, figures, or chunked for RAG applications). Docling utilizes advanced [[concepts/ai-models|AI models]] like DocLayNet for layout analysis and TableFormer for table structure recognition.
	
* **[[concepts/performance-benchmarking|Performance Benchmarking]]:** The Docling team benchmarked Docling against other open-source projects (Marker, MinerU, Unstructured) on various system configurations, including x86 CPU/L4 GPU and M3 Max (ARM) [[entities/macbook|MacBook]] Pro. The results, presented in graphs, demonstrate Docling's superior performance in terms of conversion [[concepts/speed|speed]] (seconds per page), consistently outperforming its counterparts. For instance, Docling achieved 3.1 seconds per page on x86 [[concepts/cpu|CPU]] and 1.2 seconds per page on M3 Max, while other tools were significantly slower or unable to complete runs on certain architectures.
* **Installation and CLI Demo:** The video shows how to install Docling using `pip install docling`. It then demonstrates a CLI conversion, taking a PDF from `arxiv.org` with complex layout (headings, subheadings, text, images, and tables) and exporting it to Markdown. The resulting Markdown file accurately preserves the document's structure, including base64 encoded images and properly formatted tables.
* **Python API and RAG Pipeline [[concepts/integration|Integration]]:** Cedric further demonstrates Docling's Python API in a Jupyter [[concepts/notebook|Notebook]]. He integrates Docling with LlamaIndex for a RAG pipeline.
	Necessary packages for LlamaIndex, HuggingFace embeddings/inference API, and Milvus [[concepts/vector-database|vector store]] are installed. An [[concepts/embedding-model|embedding model]] (BAAI/bge-small-en-v1.5) and a generation model (Mistralai/Mixtral-8x7B-Instruct-v0.1) from [[entities/hugging-face|Hugging Face]] are defined. DoclingReader and MarkdownNodeParser are used to process the Docling Technical Report PDF. A Milvus vector store is configured as a temporary database to store the document's [[concepts/nodes|nodes]] (chunks/vectors). An index is created from the processed document, leveraging the node parser and embedding model. Finally, a query engine is used to ask a question: "Which are the main AI models in Docling?" The LLM provides the correct answer, "Docling is powered by state-of-the-art specialized AI models for layout analysis (DocLayNet) and table structure recognition (TableFormer)," along with the source of the information (Figure 6: Ecosystem from the paper).
	
* **Conclusion:** The speaker concludes by emphasizing Docling's potential for RAG, model [[concepts/fine-tuning|fine-tuning]], and general AI workflows due to its impressive performance and ability to correctly handle complex document structures. He encourages viewers to try Docling and share their [[concepts/feedback|feedback]].

## Related Concepts
- [[concepts/docling|Docling]] — [Wikipedia](https://en.wikipedia.org/wiki/Docling)
- [[concepts/ai-workflow|AI workflows]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_workflows)
- [[concepts/pdfs|PDFs]] — [Wikipedia](https://en.wikipedia.org/wiki/PDFs)
- [[concepts/docx|DOCX]] — [Wikipedia](https://en.wikipedia.org/wiki/DOCX)
- [[concepts/llms|LLMs]] — [Wikipedia](https://en.wikipedia.org/wiki/LLMs)
- [[concepts/rag-techniques|RAG techniques]] — [Wikipedia](https://en.wikipedia.org/wiki/RAG_techniques)
- [[concepts/proprietary-formats|proprietary formats]] — [Wikipedia](https://en.wikipedia.org/wiki/proprietary_formats)
- [[concepts/nested-structures|nested structures]] — [Wikipedia](https://en.wikipedia.org/wiki/nested_structures)
- [[concepts/standardized-layouts|standardized layouts]] — [Wikipedia](https://en.wikipedia.org/wiki/standardized_layouts)
- [[entities/ibm-research|IBM Research]] — [Wikipedia](https://en.wikipedia.org/wiki/IBM_Research)

## Related Entities
- [[entities/cedric-clyburn|Cedric Clyburn]] — [Wikipedia](https://en.wikipedia.org/wiki/Cedric_Clyburn)
- [[entities/ibm-research|IBM Research]] — [Wikipedia](https://en.wikipedia.org/wiki/IBM_Research)
- [[entities/llamaindex|LlamaIndex]] — [Wikipedia](https://en.wikipedia.org/wiki/LlamaIndex)
- [[entities/langchain|LangChain]] — [Wikipedia](https://en.wikipedia.org/wiki/LangChain)
- Marker — [Wikipedia](https://en.wikipedia.org/wiki/Marker)
- MinerU — [Wikipedia](https://en.wikipedia.org/wiki/MinerU)
- Unstructured — [Wikipedia](https://en.wikipedia.org/wiki/Unstructured)
- DocLayNet — [Wikipedia](https://en.wikipedia.org/wiki/DocLayNet)
- TableFormer — [Wikipedia](https://en.wikipedia.org/wiki/TableFormer)