---
wiki-ingested: true
domain: undecided
group: needs-review
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=undecided name=Undecided

<https://www.youtube.com/watch?v=_TkcK2g36-E>
This video demonstrates a crucial, often overlooked, fix for improving the effectiveness of Retrieval Augmented Generation (RAG) agents within [[entities/n8n|n8n]], particularly concerning how documents are chunked and stored in [[concepts/vector-databases|vector databases]].
Here's a detailed summary of the key points:

1. **The Core Problem: Inefficient Chunking:**
	RAG systems rely on breaking down large documents or web pages into smaller "chunks" that are then converted into vectors and stored in a [[concepts/vector-store|vector database]]. By default, n8n's `Default Data Loader` (which internally uses a `Recursive Character Text Splitter`) attempts to chunk content up to 1000 characters, looking for natural [[concepts/disconnection|separation]] points like newlines or paragraphs. This default method can lead to a "sliding window problem," where chunks might be out of context, losing important information or breaking logical sections of the text. An example is shown where text is split mid-sentence or mid-paragraph, without regard for document structure.
	
2. **The [[concepts/solution|Solution]]: Markdown-Based Chunking:**
	A more effective approach is to split documents based on their [[concepts/markdown|Markdown]] structure, prioritizing headings. This method works well across various document types because it respects the logical flow and [[concepts/hierarchy|hierarchy]] of the content. This ensures that when an AI [[entities/agent|agent]] retrieves a chunk, it receives a more complete and contextually relevant piece of information, often starting with a clear heading.
	
3. **The "Tiny Fix" in n8n:**
	**The Overlooked Setting:** While the UI for the `Recursive Character Text Splitter` _suggests_ "markdown" is the default "Split [[concepts/code|Code]]" option (it appears pre-selected when you click "Add Option"), it is **not actively applied unless explicitly set.** If no option is selected, it defaults to a more basic split based on paragraphs, newlines, and spaces. **How to Apply:** To fix this, you need to go into the `Recursive Character Text Splitter` node (typically nested within the `Default Data Loader`), click "Add Option," and then **explicitly select "markdown"** from the "Split Code" dropdown. **Demonstrated Impact:** After applying this fix to a web page converted to Markdown, the number of chunks increased (e.g., from 20 to 24 items), and the resulting chunks correctly began with headings, indicating a much better structural split.
	
4. **Preparing Data for Optimal Markdown Chunking:**
	For RAG pipelines, it's essential to convert all [[concepts/unstructured-data|unstructured data]] into a proper Markdown format _before_ it reaches the data loader and text splitter. **[[entities/google-docs|Google Docs]]:** Use the `Get a document` node for Google Docs. Crucially, set the "Simplify Output" parameter to `false` to retain the document's [[concepts/structured-data|structured data]] (headings, paragraphs, tables). Then, use a "Code" node (JavaScript example provided) to convert this [[concepts/structured-output|structured output]] into clean Markdown, including handling bold/italic text, headings (H1-H6), bullet points, and tables. **PDFs:** n8n's built-in `Extract from File` node for PDFs only extracts plain text, not Markdown. **Recommended Method:** Use external [[concepts/optical-character-recognition|OCR]] APIs like the [[entities/mistral-ocr|Mistral OCR]] API (or services like [[entities/firecrawl|Firecrawl]].dev, which excels at converting websites to clean Markdown). These services can output PDFs as structured Markdown. **HTML (Web Pages):** Use n8n's dedicated `Markdown` node (set to "HTML to Markdown" mode) to convert HTML content into Markdown. **Caution:** Be careful with multiple Markdown conversion steps or other processing that might "escape" or corrupt the Markdown format, as this [[entities/will|will]] prevent the text splitter from recognizing the structure.
	
5. **Improved AI Agent Performance:**
	When the RAG agent queries a vector database populated with properly chunked Markdown data, it can retrieve highly relevant and contextually rich chunks. The demonstration shows an AI agent successfully retrieving a chunk starting with the "Long-Term [[concepts/memory|Memory]]" heading in response to a query about "how long term memory works in n8n," confirming the effectiveness of the markdown-based chunking.
	
6. **Further Improvements and Resources:**
	The video also briefly mentions other advanced RAG techniques like re-ranking and contextual retrieval. The speaker promotes "The AI Automators" community, offering blueprints, discussions, live workshops, and courses for building effective AI agents.

## Related Concepts
- [[concepts/retrieval-augmented-generation-rag|Retrieval Augmented Generation (RAG)]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval_Augmented_Generation_%28RAG%29)
- [[concepts/vector-database|Vector Database]] — [Wikipedia](https://en.wikipedia.org/wiki/Vector_Database)
- [[concepts/sliding-window-problem|Sliding Window Problem]] — [Wikipedia](https://en.wikipedia.org/wiki/Sliding_Window_Problem)
- [[concepts/xai-api|n8n]] — [Wikipedia](https://en.wikipedia.org/wiki/n8n)