---
type: concept
domain: ai-agents
tags:
  - "openai-api"
  - "large-language-models"
  - "generative-ai"
  - "api-integration"
  - "chat-completions"
aliases:
  - "OpenAI API Access"
  - "GPT API"
  - "OpenAI Developer Interface"
  - "LLM API Integration"
summary: The OpenAI API provides programmatic access to large language models and AI capabilities for text generation, embeddings, audio processing, and image creation.
updated: 2026-07-12
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# OpenAI API

The **[[concepts/openai-api|OpenAI API]]** provides programmatic access to [[concepts/large-language-model-llm|large language models]] and other AI capabilities developed by [[entities/openai|OpenAI]], enabling developers to integrate [[concepts/generative-ai|generative AI]] into applications for [[concepts/text-generation|text generation]], [[concepts/dense-vectors|embeddings]], image creation, and [[concepts/speech-recognition|speech recognition]].

## Core Services
- **Chat Completions**: Primary endpoint for interacting with conversational models (e.g., [[concepts/gpt-4|GPT-4]], [[entities/chatgpt-4o|GPT-4o]]). Supports structured outputs, [[concepts/function-calling|function calling]], and [[concepts/acting|tool use]].
- **Embeddings**: Converts text into high-dimensional [[concepts/vector-representations|vector representations]] for [[concepts/natural-language-search|semantic search]] and clustering.
- **[[concepts/audio-modality|Audio]]**: Transcribes [[concepts/audio-transcription|speech to text]] ([[entities/whisper-ai|Whisper]]) and generates human-like speech (TTS).
- **Images**: Generates images from text descriptions (DALL-E).

## Key Concepts
- **[[concepts/tokens|Tokens]]**: The basic units of text processed by models. Input and output costs are calculated based on token count.
- **Temperature**: Parameter controlling randomness; lower values yield more deterministic outputs.
- **[[concepts/system-prompt|System Prompt]]**: Defines the assistant's behavior and constraints before user interaction.
- **[[concepts/rate-limits|Rate Limits]]**: [[concepts/usage-limits|Usage restrictions]] based on tokens per minute (TPM) and requests per minute (RPM) depending on the tier.

## Ecosystem Context
While the [[concepts/whisper-transcription|OpenAI]] API dominates cloud-based [[concepts/inference|inference]], the landscape includes local [[concepts/inference-engines|inference engines]] for [[concepts/privacy|privacy]] and [[concepts/cost-optimization|cost control]]. Recent developments include specialized runners like [[lab-notes/2026-05-28-DwarfStar-Native-DeepSeek-V4-Flash-Local-Inference-with|DwarfStar: Native DeepSeek V4 Flash Local Inference with Persistent KV Cache]], which offers native inference for [[entities/deepseek-v4|DeepSeek V4]] with persistent KV [[concepts/caching|caching]], contrasting with generic [[concepts/gguf|GGUF]] runners.
