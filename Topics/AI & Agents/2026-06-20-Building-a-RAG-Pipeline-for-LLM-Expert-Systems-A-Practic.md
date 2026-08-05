---
wiki-ingested: true
title: "Building a RAG Pipeline for LLM Expert Systems: A Practical Guide"
date: 2026-06-20
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: model-efficiency-compression
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-20 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: Summary

---

## Building a RAG Pipeline for LLM Expert Systems: A Practical Guide
**Clip title:** Turn Any LLM Into an Expert 📚 RAG [[concepts/coding|Coding]] Crash Course
**Author / channel:** [[concepts/python|Python]] Simplified
**URL:** https://www.youtube.com/watch?v=oZYlrooPgvs

### Summary
This video provides a practical, step-by-step guide to building a [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) pipeline to create an "expert system" using a powerful [[concepts/statistical-language-modeling|language model]]. The main topic revolves around enabling a [[concepts/large-language-model-llm|large language model (LLM)]] to become an expert on a specific domain by granting it fast, efficient access to external documents, rather than retraining it. The [[concepts/tutorial|tutorial]] uses a humorous hypothetical case: investigating whether Lord Elrond from Lord of the Rings is secretly Agent Smith from The Matrix, leveraging fan fiction documents as "evidence." Key technologies demonstrated include chunking, [[concepts/dense-vectors|embeddings]], vector databases, and retrieval, using tools like [[concepts/task-specific-modeling|Ollama]], LangChain, and FAISS.

The video begins by guiding viewers through the [[concepts/installation|initial setup]], which involves downloading project files containing ten PDF documents (fictional witness reports, testimonies, and forensic evidence) from GitHub. These files are organized into a dedicated folder on a local [[entities/wsl|Windows Subsystem for Linux]] (WSL) environment. Subsequently, the essential Ollama tool is installed, allowing the [[concepts/local-execution|local execution]] of [[concepts/llm-models|large language models]]. Two specific models are pulled: `qwen2.5:1.5b` to serve as the primary chat model, and `bge-m3` for handling embeddings. A Conda environment is then created and populated with necessary Python libraries such as LangChain, FAISS (for CPU processing), and PyPDF, setting up the Jupyter Lab environment where the coding takes place.

The core of the RAG pipeline starts with loading the PDF documents, where each page is extracted and combined into a single, comprehensive list. This data then undergoes a "chunking" process, where the text is sliced into smaller, overlapping pieces. This overlap is crucial as a "safety net" to ensure contextual [[concepts/continuity|continuity]] during retrieval. Next, "embeddings" are generated for these chunks using the `bge-m3` model. This transforms the textual data into numerical vectors, which are then stored in a FAISS [[concepts/vector-database|vector database]]. This [[concepts/numerical-representations|vectorization]] allows for highly efficient and semantically relevant searching. The video highlights how a retriever is then configured to search this database, pulling the most pertinent chunks based on a user's query. A significant demonstration shows how a raw LLM (without RAG) might hallucinate or refuse to [[concepts/solution|answer]] the investigation question, while the RAG-enhanced LLM provides accurate, evidence-based responses by first [[concepts/retrieving|retrieving]] and then incorporating information from the specialized document set.

Finally, the video outlines several [[concepts/best-practices|best practices]] for building robust and efficient RAG-based expert systems. These include implementing [[concepts/conversation-history|chat history]] to maintain conversational context across multiple interactions, assigning a specific identity to the LLM with clear [[concepts/instructions|instructions]] to guide its behavior and prevent hallucinations, and loading the vector database directly from disk for faster startup times. The video also touches on optimizing for performance by utilizing GPU processing where available (by switching from `faiss-cpu` to `faiss-gpu`) and the [[concepts/value|importance]] of hyperparameter tuning (experimenting with chunk sizes, overlaps, and retrieval parameters) to achieve optimal results for specific datasets. By the end of the tutorial, the viewer gains a solid foundation for understanding and implementing RAG pipelines, with the humorous conclusion that, based on the provided "evidence," Lord Elrond is indeed guilty of being Agent Smith and other characters, demonstrating the power of contextualized AI.

### Video Description & Links
#### Description
What if you could take any language model and turn it into an expert by giving it fast access to documents? 🤔 Big thanks to [[entities/hubspot|HubSpot]] for sponsoring this video 🙌
⭐ Check out HubSpot's FREE [[concepts/ai-agents|AI Agents]] Cheat Sheet:
https://clickhubspot.com/0acb23

In this beginner-friendly RAG ([[concepts/rag|Retrieval-Augmented Generation]]) project, we will build a local [[concepts/ai-system|AI system]] that can read custom documents, search through them intelligently, and answer questions using knowledge that was never part of the original model! 📚⚡

To make things fun, we'll use a collection of fictional investigation files inspired by The Lord Of The Rings and The Matrix — turning an ordinary LLM into a specialized AI detective capable of solving mysteries hidden throughout our documents: analyzing suspicious characters, secret reports, and hidden clues like a real pro! 🧙‍♂️🕶️

Unlike [[concepts/fine-tuning|Fine Tuning]], we won't train the model at all! Instead, we will allow a tiny and not-so-[[concepts/smart-model|smart model]] to search through documents very quickly, retrieve the most relevant information, and use it to generate intelligent answers in real time — as tough we are dealing with a giant super-smart model that requires way more resources and [[concepts/computational-resources|computing power]]. 😎

By the end of this tutorial, you'll have a complete local [[entities/anything-llm|RAG application]] running on your own computer using Python, LangChain, Ollama and FAISS — and you'll finally understand why Fine Tuning and RAG are not the same thing!

📚 What You'll Learn:

* What RAG (Retrieval-Augmented Generation) actually is
* Loading PDF documents into Python
* Document chunking and text splitting
* Creating embeddings from text
* [[concepts/storing|Storing]] embeddings with FAISS
* Retrieving relevant context from a vector database
* Building a complete RAG pipeline with LangChain
* Running [[concepts/hardware-heavy-models|local LLMs]] with Ollama
* Answering questions using custom knowledge

🛠 Tools Used:

* Python
* Ollama
* Qwen2.5:1.5B (small enough to run on CPU)
* BGE-M3
* LangChain
* FAISS
* Jupyter Lab

🚨 Are you an educator?

Feel free to use my video [[concepts/google-slides|slides]] and project idea in your classes! 🙂
I've included a [[concepts/excellence|high-quality]] PDF containing all the slides from this video, which you can download directly from [[entities/youtube|YouTube]].
The complete source code, [[concepts/notebook|notebook]], and project files are also available on GitHub. You're welcome to use them in your lectures, workshops, and classroom activities.

Happy teaching! 💚

🔎 Resources & Helpful Tutorials:

⭐ Full Code and Starter Files on GitHub: https://github.com/MariyaSha/rag_ollama
⭐ My WSL and Conda Tutorial: https://youtu.be/luM5kwH6tjQ
⭐ My Hyperparameter Tuning with Sklearn Tutorial: https://youtu.be/-IvNzmrcyUM
⭐ Classroom Slides (PDF): Download directly from YouTube 📄
⭐ Ollama and FAISS GPU links in the pinned comment 📌

💻 WSL Environment Setup:

conda create -n rag_env python=3.12
conda activate rag_env

pip install \
    langchain \
    langchain-community \
    langchain-ollama \
    langchain-text-splitters \
    faiss-cpu \
    pypdf \
    jupyter

⚙️ Module Imports:

from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_ollama import OllamaEmbeddings, ChatOllama
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
import os

⏰ Timestamps ⏰
00:00 Build a [[concepts/local-rag|Local RAG]] Pipeline with Ollama
01:16 Environment Setup (Ollama, LangChain & FAISS)
04:29 Load PDF Documents for RAG
07:24 HubSpot AI Agents Cheat Sheet
09:05 [[concepts/chunking-documents|Chunking Documents]] for RAG
11:18 Create Embeddings & Build a FAISS Vector Database
13:32 Retrieve Relevant Documents with FAISS
15:26 Connect the Chat Model to Your RAG Pipeline
20:09 RAG Best Practices 
     20:16 Add Chat History to a RAG Chatbot
     20:54 Give Your LLM Model Identity (a [[concepts/system-card|System Prompt]])
     21:27 Run RAG on a GPU with Ollama & FAISS
     21:49 Load a Saved FAISS Vector Database
     22:07 Hyperparameter Tuning for RAG
22:14 Final Thoughts - Is Elrond Guilty?

#python #pythonprogramming #LLM #AI #RAG #LangChain #Ollama #FAISS #MachineLearning #ArtificialIntelligence #PythonTutorial

#### URLs
- https://clickhubspot.com/0acb23
- https://github.com/MariyaSha/rag_ollama
- https://youtu.be/luM5kwH6tjQ
- https://youtu.be/-IvNzmrcyUM

## Related Concepts
- [[concepts/table-to-text-extraction|RAG Pipeline]] — [Wikipedia](https://en.wikipedia.org/wiki/RAG_Pipeline)
- [[concepts/table-to-text-extraction|LLM Expert Systems]] — [Wikipedia](https://en.wikipedia.org/wiki/LLM_Expert_Systems)
- [[concepts/visual-rag|Retrieval Augmented Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval_Augmented_Generation)
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- [[concepts/expertise|Domain Knowledge]] — [Wikipedia](https://en.wikipedia.org/wiki/Domain_Knowledge)
- [[concepts/expert-systems|Expert Systems]] — [Wikipedia](https://en.wikipedia.org/wiki/Expert_Systems)
- [[concepts/document-chunking|Document Chunking]] — [Wikipedia](https://en.wikipedia.org/wiki/Document_Chunking)
- [[concepts/text-embeddings|Text Embeddings]] — [Wikipedia](https://en.wikipedia.org/wiki/Text_Embeddings)
- [[concepts/vector-databases|Vector Databases]] — [Wikipedia](https://en.wikipedia.org/wiki/Vector_Databases)
- [[concepts/vector-store|Semantic Search]] — [Wikipedia](https://en.wikipedia.org/wiki/Semantic_Search)
- [[concepts/hallucination-mitigation|Hallucination Mitigation]] — [Wikipedia](https://en.wikipedia.org/wiki/Hallucination_Mitigation)
- Hyperparameter Tuning — [Wikipedia](https://en.wikipedia.org/wiki/Hyperparameter_Tuning)
- [[concepts/local-llm-execution|Local LLM Execution]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_LLM_Execution)
- Contextual Continuity — [Wikipedia](https://en.wikipedia.org/wiki/Contextual_Continuity)
- [[concepts/gpu-acceleration|GPU Acceleration]] — [Wikipedia](https://en.wikipedia.org/wiki/GPU_Acceleration)
- Conda Environments — [Wikipedia](https://en.wikipedia.org/wiki/Conda_Environments)

## Related Entities
- [[entities/python-simplified|Python Simplified]] — [Wikipedia](https://en.wikipedia.org/wiki/Python_Simplified)
- [[entities/gemini|Gemini]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini)
- [[entities/ollama|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- [[entities/langchain|LangChain]] — [Wikipedia](https://en.wikipedia.org/wiki/LangChain)
- FAISS — [Wikipedia](https://en.wikipedia.org/wiki/FAISS)
- PyPDF — [Wikipedia](https://en.wikipedia.org/wiki/PyPDF)
- Jupyter Lab — [Wikipedia](https://en.wikipedia.org/wiki/Jupyter_Lab)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- Windows Subsystem for Linux — [Wikipedia](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux)
- Lord Elrond — [Wikipedia](https://en.wikipedia.org/wiki/Lord_Elrond)
- Agent Smith — [Wikipedia](https://en.wikipedia.org/wiki/Agent_Smith)
- Conda — [Wikipedia](https://en.wikipedia.org/wiki/Conda)