---
wiki-ingested: true
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=0k_B6XCwzy8>

### **Introduction to [[concepts/nexa-sdk|Nexa SDK]]**

Nexa SDK is a powerful, [[concepts/open-source|open-source]] developer toolkit that enables you to run any AI model locally on your computer across various backends like NPUs, GPUs, and CPUs. This ensures that all your data remains private. It is built from scratch for optimal performance and supports multiple model formats, including GGUF and [[concepts/mlx-format|MLX]].

### **Key Features of Nexa SDK**

The video highlights several key features that differentiate Nexa SDK from other tools like [[entities/llama|Ollama]], llama.cpp, and LM Studio:

	**NPU Support:** It is designed with a "NPU-first" approach, providing native support for [[concepts/neural-processing-units|Neural Processing Units]].
	
	**Broad Model Support:** It supports various model formats, including GGUF, MLX, and its own .nexa format, giving users low-level control.
	
	**Full Multimodality:** Nexa SDK supports image, audio, and text inputs.
	
	**Cross-Platform Compatibility:** It runs on desktop, mobile (Android & iOS), automotive, and IoT devices.
	
	**Ease of Use:** You can run a model with a single line of [[concepts/code|code]].
	
	**OpenAI-Compatible API:** It includes an API that is compatible with [[entities/openai|OpenAI]], along with [[concepts/tool-calling|function calling]] capabilities.
	

### **Demonstration: Running a Model with Nexa SDK**

The video demonstrates how to run a model directly from the [[concepts/cli|command line]]. By executing nexa infer NexaAI/gemma-3n-E4B-it-4bit-MLX, the specified model is automatically downloaded and loaded, allowing you to start a conversation with the AI immediately. It also showcases the [[concepts/vision-capabilities|vision capabilities]] by providing an image to the Qwen3-VL-4B model and asking it to describe the content.

### **Step-by-Step Guide to Building an AI Chatbot**

Here are the steps to install Nexa SDK and build your own [[concepts/local-ai|local AI]] chatbot:

**Step 1: Installation**

1. Download the Nexa CLI installer appropriate for your operating system (macOS, [[entities/windows|Windows]], or Linux).
	
2. Run the installer to set up the Nexa SDK on your machine.
	

**Step 2: Start the Local Server**

1. Open your terminal.
	
2. Run the command nexa serve.
	
3. This [[entities/will|will]] start a local server, typically available at <http://127.0.0.1:18181>. This server provides OpenAI-compatible API endpoints for chat completions, [[concepts/vector-representations|embeddings]], and more.
	

**Step 3: Create a Basic [[entities/python|Python]] Chatbot**

1. Install the necessary Python libraries: [[entities/pip|pip]] install openai chainlit.
	
2. Create a Python file (e.g., [app.py](https://app.py)).
	
3. Use the openai library to connect to your local Nexa AI server by setting the base\_url to your local server's address and providing a dummy API key.
	
4. Create a chat completion request, specifying the model you want to use (which you previously downloaded via the nexa infer command).
	
5. Define the system and user messages to send to the model.
	
6. Run the Python script (python [app.py](https://app.py)) to get a response from the model.
	

**Step 4: Enable Streaming Responses**To provide a better user experience with responses appearing token-by-token, modify your Python script:

1. Add stream=True to your chat completion request.
	
2. Iterate through the response chunks and print each part as it is received.
	

**Step 5: Build a Chatbot with a [[concepts/user-interface|User Interface]] using Chainlit**

1. Modify your Python script to use the chainlit library.
	
2. Define two main functions decorated with @cl.on\_chat\_start and @cl.on\_message.
	
3. The on\_chat\_start function initializes the chat, setting up the system message.
	
4. The on\_message function handles user input, sends it to the AI model, and streams the response back to the user interface.
	
5. Run the application using chainlit run [ui.py](https://ui.py). This will open a new browser tab with your chatbot interface.
	

### **Creating a RAG ([[concepts/traditional-rag|Retrieval-Augmented Generation]]) Chatbot**

The video also explains how to build a more advanced RAG chatbot that can [[concepts/solution|answer]] questions based on your own documents.

**The RAG Process:**

1. **Data Processing:** When a user uploads a document (e.g., a PDF), it is broken down into smaller chunks of text. These chunks are then converted into numerical representations called embeddings.
	
2. **[[entities/storage|Storage]]:** These embeddings are stored in a [[concepts/vector-database|vector database]] (like ChromaDB).
	
3. **Retrieval:** When a user asks a question, their query is also converted into an embedding. The system then searches the vector database for the most similar and relevant text chunks from the original document.
	
4. **Generation:** The retrieved text chunks are provided to the [[concepts/large-language-model|Large Language Model]] (LLM) as context, along with the user's question. The LLM then generates a more accurate and contextually relevant answer.
	

**Steps to Build the RAG Chatbot:**

1. **Install Additional Libraries:** pip install PyPDF2 chromadb sentence-[[concepts/transformers|transformers]].
	
2. **Modify Your Chainlit App:**
		In the on\_chat\_start function, add functionality to ask the user to upload a file.
		
		Once a file is uploaded, read its content (using PdfReader for PDFs), split it into chunks, create embeddings for each chunk using a sentence-transformer model, and store them in a ChromaDB collection.
		
		In the on\_message function, create an embedding for the user's question.
		
		Query the ChromaDB collection to find the most relevant document chunks.
		
		Combine the user's question with the retrieved context and send it to the LLM.
		
		Stream the final response back to the user.
		

By following these steps, you can create a fully functional, private AI chatbot running locally on your machine, capable of both general conversation and answering questions about your specific documents.

* * *

On Windows download the Nexa program which will run as a CLI.

Usage:
  nexa \[command\]

Model [[concepts/commands|Commands]]
  pull        Pull model from [[entities/hugging-face|HuggingFace]]
  remove      Remove cached model
  clean        remove all cached models
  list        List all cached models

[[concepts/inference|Inference]] Commands
  infer        Infer with a model
  functioncall Function call with a model
  serve        Run the Nexa AI Service
  run          Infer a model with server

Management Commands
  config      Manage Nexa CLI configuration
  version      show nexasdk version
  update      update nexa

Additional Commands:
  help        Help about any command
  completion  Generate the autocompletion script for the specified shell

Flags:
  -h, --help          help for nexa
      --skip-migrate  Skip checking for model migrations
      --skip-update    Skip checking for updates
      --test-mode      Enable test mode

Use "nexa \[command\] --help" for more information about a command.
PS C:\\Users\\[[entities/paul|paul]]\\AppData\\Local\\Nexa CLI>

* * *

When I did nexa serve it warned I did not have SOX installed.

that required:
winget install --id=ChrisBagwell.SoX -e

<http://127.0.0.1:18181/docs/ui>

## Related Concepts
- [[concepts/npu-support|NPU Support]] — [Wikipedia](https://en.wikipedia.org/wiki/NPU_Support)
- [[concepts/broad-model-support|Broad Model Support]] — [Wikipedia](https://en.wikipedia.org/wiki/Broad_Model_Support)
- [[concepts/native-support|Native Support]] — [Wikipedia](https://en.wikipedia.org/wiki/Native_Support)
- [[concepts/gguf-format|Model Formats]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Formats)
- [[concepts/llm-backend|Backend]] — [Wikipedia](https://en.wikipedia.org/wiki/Backend)
- [[concepts/network-request-inspection|Performance Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Performance_Optimization)

## Related Entities
- [[entities/nexa-ai|Nexa AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Nexa_AI)
- [[entities/ollama|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- [[entities/llamacpp|llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/llama.cpp)
- [[entities/lm-studio|LM Studio]] — [Wikipedia](https://en.wikipedia.org/wiki/LM_Studio)