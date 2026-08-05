---
wiki-ingested: true
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=0Rdf2XA9G9Y>
Real time ASR - automated speech recognition

This video provides a comprehensive guide on performing approximate real-time [[concepts/live-transcription|live transcription]] using [[entities/openai|OpenAI]]'s `whisper-large-v3-turbo` model within a free [[entities/google|Google]] Colab environment.
The speaker begins by introducing the `whisper-large-v3-turbo` model as a state-of-the-art [[concepts/solution|solution]] for Automatic Speech Recognition (ASR) and speech translation. He clarifies that this model is a fine-tuned, pruned version of the original `whisper-large-v3`, specifically optimizing for speed by reducing the number of [[concepts/decoder-layers|decoder layers]] from 32 to 4. This modification results in significantly faster [[concepts/inference|inference]] with only a "very slight minor quality degradation" that is largely ignorable. The model's robustness stems from its training on approximately 5 million hours of labeled data, enabling it to generalize effectively across diverse [[concepts/training-data|datasets]] and domains in a zero-shot setting.
The video then briefly highlights its sponsor, AgentQL, a structured query language designed for "painless [[concepts/data-extraction|data extraction]] and [[concepts/website-browsing|web automation]]." AgentQL utilizes AI to analyze page structures, providing a resilient and reusable alternative to traditional [[concepts/web-scraping|web scraping]] methods like XPath and [[concepts/dom|DOM]] selectors.
For the practical demonstration, the speaker guides viewers through setting up a Google Colab [[concepts/notebook|notebook]]:

1. **Environment Setup:** He recommends selecting a free T4 GPU in the Colab runtime settings to accelerate processing, expressing appreciation for Google's provision of this resource.
2. **Library Installation:** The necessary `transformers` and `gradio` libraries are installed directly from their [[entities/hugging-face|Hugging Face]] [[entities/github|GitHub]] repositories.
3. **Model Loading:** The `whisper-large-v3-turbo` model is loaded using the `pipeline` function, specifying the '[[concepts/speech-recognition|automatic-speech-recognition]]' task and the model checkpoint. The model, which is roughly 1.62 GB, along with its associated configuration, tokenizer, and preprocessor [[concepts/files|files]], are automatically downloaded and loaded onto the GPU.
4. **Transcription [[concepts/testing|Testing]]:** **Remote File Transcription:** The model's immediate capability is tested by providing a URL to a sample FLAC audio file. The transcription appears rapidly and accurately. **Local File Transcription:** The speaker demonstrates uploading a local WAV audio file (a segment of a JFK speech) and successfully transcribing it, confirming the model's ability to handle locally stored audio.

Finally, the core of the video demonstrates **real-time live transcription using a Gradio interface**:

* A [[entities/python|Python]] script is presented that integrates the loaded `whisper-large-v3-turbo` model with Gradio. This interface allows users to record audio directly from their microphone or upload a file.
* Upon launching the Gradio demo, a public URL is generated. When accessed, the interface provides a "Record" button, a waveform display, and an "Output" text area for the transcription.
* During a live recording, the transcribed text appears almost immediately, segment by segment. The interface also displays the latency, which initially takes about 5 seconds for the "first token" but then drops significantly to around 0.2-0.3 seconds for subsequent processing, making it feel very close to real-time. The speaker highlights this impressive performance for a free Colab environment, noting the model's [[concepts/accuracy|accuracy]] and even its ability to correctly transcribe some non-English words.

The video concludes by encouraging viewers to subscribe to the channel and share the content if they found it useful, emphasizing the [[concepts/accessibility|accessibility]] of such powerful [[concepts/ai-models|AI models]].

## Related Concepts
- [[concepts/real-time-asr|Real-time ASR]] — [Wikipedia](https://en.wikipedia.org/wiki/Real-time_ASR)
- [[concepts/automatic-speech-recognition|Automatic Speech Recognition (ASR)]] — [Wikipedia](https://en.wikipedia.org/wiki/Automatic_Speech_Recognition_%28ASR%29)
- [[concepts/openai-whisper-model|OpenAI Whisper model]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI_Whisper_model)
- [[concepts/google-colab-environment|Google Colab environment]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Colab_environment)

## Related Entities
- [[entities/fahd-mirza|Fahd Mirza]] — [Wikipedia](https://en.wikipedia.org/wiki/Fahd_Mirza)
- [[entities/google-colab|Google Colab]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Colab)
- {'name': 'Fahd Mirza'} — [Wikipedia](https://en.wikipedia.org/wiki/%7B%27name%27%3A_%27Fahd_Mirza%27%7D)
- {'name': 'Google Colab'} — [Wikipedia](https://en.wikipedia.org/wiki/%7B%27name%27%3A_%27Google_Colab%27%7D)
- {'name': 'AgentQL'} — [Wikipedia](https://en.wikipedia.org/wiki/%7B%27name%27%3A_%27AgentQL%27%7D)