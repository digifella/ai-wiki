---
wiki-ingested: true
title: "Fahd Mirza - getting Whisper working on Google Colab"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: multimodal-generative-media
---
# [[entities/fahd-mirza|Fahd Mirza]] - getting Whisper working on [[entities/google-colab|Google Colab]]

---
---
<https://www.youtube.com/watch?v=0Rdf2XA9G9Y>
[[concepts/real-time-asr|Real time ASR]] - automated speech recognition

This video provides a comprehensive guide on performing approximate real-time [[concepts/live-transcription|live transcription]] using [[entities/openai|OpenAI]]'s `whisper-large-v3-turbo` model within a free [[concepts/google-colab-environment|Google Colab environment]].
The [[entities/speaker|speaker]] begins by introducing the `whisper-large-v3-turbo` model as a state-of-the-[[concepts/art|art]] [[concepts/solution|solution]] for [[concepts/automatic-speech-recognition|Automatic Speech Recognition]] (ASR) and [[concepts/speech-translation|speech translation]]. He clarifies that this model is a fine-tuned, pruned version of the original `whisper-large-v3`, specifically optimizing for [[concepts/speed|speed]] by reducing the number of [[concepts/decoder-layers|decoder layers]] from 32 to 4. This modification results in significantly faster [[concepts/inference|inference]] with only a "very slight minor quality degradation" that is largely ignorable. The model's robustness stems from its [[concepts/training|training]] on approximately 5 million hours of labeled data, enabling it to generalize effectively across diverse datasets and domains in a zero-shot setting.
The video then briefly [[concepts/highlights|highlights]] its sponsor, AgentQL, a structured query language designed for "painless [[concepts/data-extraction|data extraction]] and web [[concepts/automation|automation]]." AgentQL utilizes AI to analyze page structures, providing a resilient and reusable alternative to traditional [[concepts/web-scraping|web scraping]] [[concepts/methods|methods]] like XPath and [[concepts/dom|DOM]] selectors.
For the practical demonstration, the speaker guides viewers through setting up a Google Colab [[concepts/notebook|notebook]]:

1. **Environment [[concepts/setup|Setup]]:** He recommends selecting a free T4 GPU in the Colab runtime settings to accelerate processing, expressing appreciation for Google's provision of this resource.
2. **Library Installation:** The necessary `transformers` and `gradio` libraries are installed directly from their [[entities/hugging-face|Hugging Face]] [[entities/github|GitHub]] repositories.
3. **Model Loading:** The `whisper-large-v3-turbo` model is loaded using the `pipeline` function, specifying the '[[concepts/speech-recognition|automatic-speech-recognition]]' task and the model checkpoint. The model, which is roughly 1.62 GB, along with its associated configuration, tokenizer, and preprocessor [[concepts/files|files]], are automatically downloaded and loaded onto the GPU.
4. **Transcription [[concepts/testing|Testing]]:** **Remote File Transcription:** The model's immediate capability is tested by providing a URL to a sample FLAC audio file. The transcription appears rapidly and accurately. **Local File Transcription:** The speaker demonstrates uploading a local WAV audio file (a segment of a JFK speech) and successfully transcribing it, confirming the model's ability to handle locally stored audio.

Finally, the core of the video demonstrates **real-time live transcription using a Gradio interface**:

* A [[concepts/python|Python]] script is presented that integrates the loaded `whisper-large-v3-turbo` model with Gradio. This interface allows users to record audio directly from their microphone or upload a file.
* Upon launching the Gradio demo, a public URL is generated. When accessed, the interface provides a "Record" button, a waveform display, and an "Output" text area for the transcription.
* During a live recording, the transcribed text appears almost immediately, segment by segment. The interface also displays the latency, which initially takes about 5 seconds for the "first token" but then drops significantly to around 0.2-0.3 seconds for subsequent processing, making it feel very close to real-time. The speaker highlights this impressive performance for a free Colab environment, noting the model's [[concepts/accuracy|accuracy]] and even its ability to correctly transcribe some non-English words.

The video concludes by encouraging viewers to subscribe to the channel and share the content if they found it useful, emphasizing the [[concepts/accessibility|accessibility]] of such powerful [[concepts/ai-models|AI models]].