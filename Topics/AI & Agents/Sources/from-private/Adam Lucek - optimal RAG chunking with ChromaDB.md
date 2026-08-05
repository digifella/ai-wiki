---
wiki-ingested: true
domain: undecided
group: needs-review
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=undecided name=Undecided

<https://www.youtube.com/watch?v=Pk2BeaGbcTE>
This video explores various text [[concepts/text-chunking|chunking strategies]] essential for optimizing Retrieval Augmented Generation (RAG) applications, presenting insights from a ChromaDB technical report titled "Evaluating Chunking Strategies for Retrieval." The speaker, [[entities/adam-luceck|Adam Luceck]], details different methods, their implementations, and the performance findings. \[0:00, 0:38\]
**Introduction to Chunking and Evaluation [[concepts/methodology|Methodology]]** Chunking is the process of splitting large text documents into manageable pieces that can be embedded into a [[concepts/vector-store|vector database]] for efficient retrieval in RAG applications. \[0:10\] ChromaDB conducted extensive research, evaluating existing and novel chunking methods. \[0:46\] They open-sourced their methodology and [[concepts/code|code]] in a [[entities/github|GitHub]] repository called "chunking\_evaluation," which provides tools for text chunking and evaluation, including implementations of various strategies. \[1:21, 1:29\] The demonstration in the video uses Jane Austen's "Pride and Prejudice" as a [[concepts/knowledge-base|knowledge base]]. \[2:04\]
**Character-Based Text Splitting** The simplest form of chunking involves splitting text based on a fixed number of characters. For example, a document can be divided into 400-[[concepts/integrity|character]] chunks with no overlap, or 800-character chunks with a 400-character overlap. \[3:56, 4:38\] Overlapping chunks are beneficial as they help preserve context across chunk boundaries, preventing [[concepts/ideas|ideas]] from being cut off mid-sentence or mid-word, which can happen with non-overlapping character splitting. \[5:34\] In a 400-character non-overlapping chunking of "Pride and Prejudice," 1871 chunks were generated. \[4:19\] With an 800-character chunk size and 400-character overlap, the same number of chunks (1871) was produced, but with context preserved across chunks. \[4:38, 5:00\]
**Token-Based Text Splitting** Recognizing that Language Models (LLMs) process text in "tokens" rather than individual characters, token-based splitting aims to align chunking with how LLMs understand language. \[6:37, 6:49\] Tokens can be full words, parts of words, or punctuation, and language models use tokenizers (like [[entities/openai|OpenAI]]'s cl100k\_base tokenizer) to convert text into numerical representations. \[7:05, 7:47\] Token-based chunking can be more efficient for LLMs. \[6:55\] A 400-token chunk size with no overlap yielded 440 chunks for "Pride and Prejudice." \[9:14, 9:26\] Overlapping 400-token chunks with a 200-token overlap resulted in 878 chunks. \[10:00\]
**Recursive Text Splitters (Character and Token)** Recursive chunking approaches prioritize natural language boundaries like paragraphs, sentences, and words. \[10:32\] They first attempt to split by paragraph breaks, then line breaks, then sentence boundaries, and finally by words or individual characters if needed, ensuring a maximum character length. \[11:04\] This method preserves natural structure better than fixed-size splitting. \[12:37\] When applied with an 800-character chunk size and no overlap, it produced 1270 chunks, with chunk lengths varying to respect natural breaks (e.g., a chunk might be 635 characters long if that's where a sentence naturally ends). \[12:57, 13:28, 13:42\] The Recursive Token Text Splitter applies the same logic but operates on tokens. \[15:17\]
**Semantic Chunkers (Kamradt & Cluster Semantic)** Semantic chunking uses [[concepts/embedding-models|embedding models]] to identify natural semantic boundaries in text, aiming for consistent chunk sizes while maintaining meaning. \[16:20\] Greg Kamradt popularized this approach in his "5 Levels of Text Splitting" notebook. \[16:29\] The core idea is to embed small fixed-size text pieces and calculate cosine distances between them. Higher distances suggest natural topic transitions. \[17:03, 17:30\] [[entities/chroma|Chroma]]'s modified version of Kamradt's Semantic Chunker uses a binary search to find an optimal similarity threshold, aiming for consistent chunk sizes and avoiding unpredictably large chunks, a common issue with the original implementation. \[18:20, 18:30\]
The **Cluster Semantic Chunker** takes this a step further by employing a global optimization approach. Instead of just local decisions, it considers [[concepts/relationships|relationships]] between all text pieces simultaneously to find the most semantically coherent groupings while maintaining size constraints. \[21:23, 21:31\] It builds a similarity matrix of all possible token pairs, then uses dynamic programming to find the optimal way to group pieces into chunks, aiming for a global optimum. \[22:01, 22:24\]
**LLM Semantic Chunker** The LLM Semantic Chunker leverages a Language Model (LLM) directly to identify semantic boundaries. \[24:47\] It splits input text into 50-token pieces, which are then analyzed by the LLM in 800-token [[entities/windows|windows]]. The LLM is prompted to identify "split points" where similar themes stay together, and these identified split points are then used to reassemble the pieces into final chunks. \[25:04, 26:04, 26:30\]
**Overall Findings and Recommendations** ChromaDB evaluated these chunking strategies based on metrics like [[concepts/recall|Recall]], Precision, and Intersection-over-Union (IoU), focusing on token-level relevance for RAG applications. \[27:57\]
**Best Overall Performance:**

* **ClusterSemanticChunker** with 400 tokens achieved the second-highest recall (91.3%) while maintaining decent efficiency. \[30:04\]
* The **LLMSemanticChunker** achieved the highest recall overall (91.9%) with average efficiency metrics. \[30:13\]
* The **ClusterSemanticChunker** with 200 tokens achieved the highest precision (8.0%), Precision@1 (34.0%), and IoU (8.0%). \[30:20\]

**Practical Recommendations:**

* For a simple, effective [[concepts/solution|solution]], use the **RecursiveCharacterTextSplitter** with 200-400 token chunks and no overlap, as it performs consistently well across all metrics. \[31:17\]
* If maximum performance is needed and additional complexity can be handled, use the **ClusterSemanticChunker** with 200-400 tokens. \[32:10\]

**Important Findings:**

* Reducing chunk overlap generally improves IoU scores by reducing redundant information. \[30:30\]
* OpenAI's default settings (800 tokens with 400 overlap) resulted in below-average recall and the lowest scores across other metrics. \[30:38\]
* Smaller chunk sizes (200-400 tokens) generally performed better than larger ones (800 tokens). \[31:01\]
* Adding overlap between chunks generally decreased efficiency metrics while only marginally improving recall. \[31:09\]

**Surprising Results:**

* The **RecursiveCharacterTextSplitter** performed competitively with more sophisticated semantic approaches. \[31:16\]
* The default settings for popular chunking strategies (like OpenAI's) were suboptimal. \[31:23\]
* The LLM-based chunker performed well despite its simplicity. \[31:29\]

The speaker concludes by expressing his appreciation for ChromaDB's insights and encourages viewers to consider these techniques in their RAG system implementations. \[32:41\]

## Related Concepts
- [[concepts/retrieval-augmented-generation-rag|RAG (Retrieval Augmented Generation)]] — [Wikipedia](https://en.wikipedia.org/wiki/RAG_%28Retrieval_Augmented_Generation%29)
- [[concepts/vector-database|Vector Database]] — [Wikipedia](https://en.wikipedia.org/wiki/Vector_Database)
- [[concepts/evaluating-strategies-for-retrieval|Evaluating Strategies for Retrieval]] — [Wikipedia](https://en.wikipedia.org/wiki/Evaluating_Strategies_for_Retrieval)
- [[concepts/rag|RAG]] — [Wikipedia](https://en.wikipedia.org/wiki/RAG)
- Optimal [[concepts/text-chunking|Chunking Strategies]] — [Wikipedia](https://en.wikipedia.org/wiki/Optimal_Chunking_Strategies)
- Character-Based Text Splitting — [Wikipedia](https://en.wikipedia.org/wiki/Character-Based_Text_Splitting)
- Token-Based Text Splitting — [Wikipedia](https://en.wikipedia.org/wiki/Token-Based_Text_Splitting)
- Recursive Text Splitters — [Wikipedia](https://en.wikipedia.org/wiki/Recursive_Text_Splitters)
- Semantic Chunkers — [Wikipedia](https://en.wikipedia.org/wiki/Semantic_Chunkers)

## Related Entities
- [[entities/adam-lucek|Adam Lucek]] — [Wikipedia](https://en.wikipedia.org/wiki/Adam_Lucek)
- ChromaDB — [Wikipedia](https://en.wikipedia.org/wiki/ChromaDB)