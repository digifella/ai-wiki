---
wiki-ingested: true
title: "Elle wang - audio to text transcription"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: entertainment-games
group: music-audio-performance
---
# [[entities/elle-wang|Elle wang]] - [[concepts/audio-to-text-transcription|audio to text transcription]]

---
---
<https://www.youtube.com/watch?v=ktNeWrkPwmg>

This video demonstrates how to use [[entities/google-colab|Google Colab]] and [[entities/openai|OpenAI]]'s [[concepts/whisper-ai|Whisper AI]] to transcribe audio [[concepts/files|files]]. Here's a breakdown of the steps and key takeaways:
**1\. Introduction and Key Features:**

* The video [[concepts/highlights|highlights]] the benefits of [[entities/whisper-ai|Whisper AI]] for audio-to-text transcription: great [[concepts/accuracy|accuracy]], it's free, and requires no downloads.
* It compares Whisper AI to [[entities/youtube|YouTube]]'s automatic captions, stating that Whisper AI offers more accurate and reliable transcriptions.

**2\. Setting up [[entities/google|Google]] Colab:**

* **Install Google Colab:** The video guides the viewer to search for "Colaboratory" in the [[concepts/google-workspace|Google Workspace]] Marketplace and install it.
* **Sign In:** Users need to sign in with their Google account to use Colaboratory.

**3\. Configuring the Runtime:**

* **Change Runtime Type:** To ensure optimal performance, it's recommended to change the runtime type.
* **[[concepts/hardware|Hardware]] Accelerator:** The video suggests selecting "T4 GPU" for processing audio and video files, noting that CPUs are suitable for general [[concepts/coding|coding]] tasks. The free tier of Colab is sufficient for these transcription tasks.

**4\. Transcribing the Audio File:**

* **Upload Source File:** The user is instructed to upload their audio file (e.g., "test.wav") into the Colab environment.
* **Install Whisper AI and Dependencies:** The video shows the [[concepts/code|code]] to install Whisper AI and its dependencies, specifically [[entities/ffmpeg|ffmpeg]].
* **Execute the Transcription Command:** The core command used for transcription is !whisper "your\_audio\_file.wav" --model medium.en.
	* \--model medium.en specifies that the "medium" model should be used for English transcription.
* **Understanding Model Sizes:** The video briefly explains that Whisper AI offers different model sizes: Tiny, Base, Small, Medium, and Large. Smaller [[concepts/models|models]] are faster but less accurate, while larger models are more accurate but slower. The "medium" model is recommended for a good balance of [[concepts/speed|speed]] and accuracy.

**5\. Output and Avoiding Mistakes:**

* **Output Files:** After transcription, Whisper AI generates multiple output files in different formats, including: .txt, .srt, .vtt, .tsv, and .json.
* **Saving Files:** A crucial mistake to avoid is not downloading the generated output files from the Colab environment. The video emphasizes that Colab is not Google [[concepts/motivation|Drive]] and files can be lost if not downloaded. Users should download all generated files.

**In [[concepts/summary|summary]], the video provides a clear, step-by-step [[concepts/tutorial|tutorial]] on how to leverage Google Colab and Whisper AI to convert audio files into text, highlighting the efficiency and accuracy of this process.**