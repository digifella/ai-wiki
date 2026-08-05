---
wiki-ingested: true
title: "Private RAG system using notebookLM"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: google-ai-ecosystem
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[concepts/private-rag-system|Private RAG system]] using [[concepts/notebooklm|notebookLM]]

---
---
<https://www.youtube.com/watch?v=aj2FkaaL1co>
[[entities/the-ai-automators|The AI Automators]]

This video demonstrates how to set up and run a fully local, [[concepts/open-source|open-source]] version of Google's NotebookLM, called InsightsLM. The presenter, [[entities/daniel-walsh|Daniel Walsh]], [[concepts/highlights|highlights]] the benefits of running AI agents locally, including privacy, [[concepts/compliance|compliance]], and cost reduction by reducing reliance on cloud infrastructure.
**Key Features and [[concepts/architecture|Architecture]]:**
InsightsLM allows users to chat with AI agents grounded in their own documents. The system runs completely locally using [[concepts/docker-containers|Docker containers]] for various services:

* **InsightsLM (Frontend)**: Runs on `localhost:3010`.
* **Supabase (Backend Database & Storage)**: Provides PostgreSQL for data storage, a [[concepts/vector-store|vector store]] for embeddings, and functions for backend logic. It includes `supabase-db`, `supabase-storage`, `supabase-edge-functions`, `supabase-studio`, `supabase-kong`, `supabase-auth`, `supabase-vector`, and more.
* **n8n ([[concepts/workflow-automation|Workflow Automation]])**: Acts as the glue logic, connecting different AI services and orchestrating workflows. It runs on `localhost:5678`.
* **Ollama ([[concepts/local-llm|Local LLM]] [[concepts/inference|Inference]])**: Used for generating text [[concepts/responses|responses]] and embeddings from local [[concepts/large-language-models|large language models]] (LLMs). The demo uses `qwen3:8b-q4_K_M` and `nomic-embed-text`.
* **Whisper-ASR ([[concepts/audio-transcription|Audio Transcription]])**: Converts audio files (MP3) into text locally.
* **Coqui-TTS (Text-to-Speech)**: Generates audio from text for features like podcast generation.

**Demonstration Highlights:**

1. **Document Ingestion:**
	**PDF Upload:** A 180-page "2025 Formula 1 Technical Regulations" PDF is uploaded. **Workflow Execution (n8n):** The "Generate [[concepts/notebook|Notebook]] Details" workflow is triggered, which uses Ollama to create a title and description for the document, and assigns a random color. The "Upsert to Vector Store" workflow then splits the PDF into chunks (674 in this case) and generates embeddings using Ollama's `nomic-embed-text` model, storing them in Supabase's vector store. This process took about 56 seconds, with 39 seconds for Ollama inference and ~8 seconds for embedding. **Audio Upload:** An MP3 file is uploaded and transcribed using the local Whisper-ASR container. **Website Scraping:** Multiple Formula 1 website URLs are provided, and their content is scraped and ingested.
	
2. **Chatting with Documents (RAG):**
	Users can ask questions about the ingested documents. **Workflow Execution (n8n):** The "Chat" workflow is triggered: It fetches chat history. Uses Ollama to generate a search query. Queries the Supabase Vector Store for relevant document chunks. Injects these chunks into Ollama to generate a response, along with citations. Processes the citations to link back to specific sections of the source document in the UI. The system successfully answers questions like "What are the minimum mass requirements for Formula One cars in 2025?" and "What is the plank assembly?", providing accurate answers with clickable citations. The presenter notes that smaller local LLMs (8B [[concepts/parameters|parameters]]) require more intricate [[concepts/prompt-engineering|prompt engineering]] and may struggle with complex "overview" or "summary" questions that require access to more chunks than typically returned by a vector store due to VRAM limitations.
	
3. **Podcast Generation:**
	The "Deep Dive Conversation" feature allows generating an audio podcast from the notebook content using Coqui-TTS. The quality is noted as robotic but functional for a [[concepts/local-model|local model]]. The "Podcast Generation" workflow is shown, which truncates sources, uses Ollama to generate a [[concepts/text-transcript|transcript]], and then uses Coqui-TTS to generate the audio.
	

**Setup Guide:**
The video provides a step-by-step guide to setting up the local environment:

1. **Prerequisites:** Python, Git/GitHub Desktop, Docker/Docker Desktop.
2. **Clone** `**local-ai-packaged**`**:** Clone [[entities/cole-medin|Cole Medin]]'s GitHub repository.
3. **Clone** `**insights-lm-local-package**`**:** Clone Daniel Walsh's specific InsightsLM local package into the `local-ai-packaged` directory.
4. **Configure Environment Variables:** Make a copy of `.env.example` (in `local-ai-packaged`) and rename it to `.env`. Update required secret keys for n8n, Supabase, and optionally Neo4j/Langfuse. Supabase [[concepts/api-keys|API keys]] (JWT Secret, Anon, Service Role) need to be auto-generated from the local Supabase dashboard. Copy contents from `insights-lm-local-package/.env.copy` into the main `.env` file for specific InsightsLM webhook URLs and Whisper/Coqui-TTS settings.
5. **Modify Docker Compose Files:** In `local-ai-packaged/docker-compose.yml`: Add a `whisper_cache` volume. Under `services`, add definitions for `insights-lm`, `coqui-tts`, and `whisper-asr` from `insights-lm-local-package/docker-compose.copy.yml`. Ensure GPU [[concepts/capabilities|capabilities]] are set correctly for your [[concepts/hardware|hardware]] (e.g., `gpu-nvidia`). Update the Ollama model in the `ollama-pull-llama` command to `qwen3:8b-q4_K_M`. In `supabase/docker/docker-compose.yml`: Move InsightsLM functions from `insights-lm-local-package/supabase-functions` to `supabase/docker/volumes/deno/functions`. Update the `supabase-edge-functions` service in `supabase/docker/docker-compose.yml` to include specific InsightsLM environment variables (like `NOTEBOOK_CHAT_URL`, `AUDIO_GENERATION_WEBHOOK_URL`, etc.) from your main `.env` file.
6. **Start Services:** Run `python start_services.py --profile gpu-nvidia` (or relevant profile) from the `local-ai-packaged` directory. This will download Docker images and spin up all containers.
7. **Run Supabase Migrations:** Access the local Supabase Studio (`localhost:8000`), log in (default username `supabase`, password from `.env`). Go to the SQL Editor and paste/run the `supabase-migration.sql` script (from `insights-lm-local-package/supabase-migration.sql`) to create the necessary tables and [[concepts/policies|policies]] for InsightsLM.
8. **Configure n8n Credentials:** Access local n8n (`localhost:5678`). Create a new n8n API key (Settings -> n8n API). Copy its key. Create a Header Auth credential (Credentials -> Add new credential -> Header Auth). Name it `Header Auth` and paste the n8n API key as the value. Create a Supabase API credential (Credentials -> Add new credential -> Supabase API). Host is `http://kong:8000`, Service Role Secret is from `.env`. Create an Ollama credential (Credentials -> Add new credential -> Ollama). Base URL is `http://ollama:11434`.
9. **Import [[concepts/n8n-workflows|n8n Workflows]]:** In n8n, go to Personal -> Create Workflow -> Import from File. Select `Local_Import_Insights_LM_Workflows.json` (from `insights-lm-local-package/n8n`). In the "Enter User Values" node, input the IDs of your newly created Supabase, Header Auth, and Ollama credentials. Execute this workflow. It will download, modify, and import all six InsightsLM workflows (Chat, Podcast Generation, Process Additional Sources, Upsert to Vector Store, Generate Notebook Details, Extract Text) into your n8n instance.
10. **Activate Workflows:** Activate all imported InsightsLM workflows in n8n (except "Extract Text" and "Local\_Import\_Insights\_LM\_Workflows").
11. **Create User in Supabase:** Go to Supabase Studio -> [[concepts/authentication|Authentication]] -> Users -> Add User. Create a new user with an email and password.
12. **Access InsightsLM:** Go to `localhost:3010` and log in with the created user credentials.

The system is now fully set up and ready for use.
