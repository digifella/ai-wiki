---
wiki-ingested: true
domain: entertainment-games
group: music-audio-performance
---
<https://www.youtube.com/watch?v=ktNeWrkPwmg>

This video demonstrates how to use [[entities/google-colab|Google Colab]] and OpenAI's Whisper AI to transcribe audio [[concepts/files|files]]. Here's a breakdown of the steps and [[concepts/highlights|key takeaways]]:
**1\. Introduction and Key Features:**

* The video highlights the benefits of Whisper AI for [[concepts/audio-transcription|audio-to-text]] transcription: great [[concepts/accuracy|accuracy]], it's free, and requires no downloads.
* It compares Whisper AI to [[entities/youtube|YouTube]]'s automatic captions, stating that Whisper AI offers more accurate and reliable transcriptions.

**2\. Setting up Google Colab:**

* **Install Google Colab:** The video guides the viewer to search for "Colaboratory" in the [[concepts/google-workspace|Google Workspace]] Marketplace and install it.
* **Sign In:** Users need to sign in with their Google account to use Colaboratory.

**3\. Configuring the Runtime:**

* **Change Runtime Type:** To ensure optimal performance, it's recommended to change the runtime type.
* **[[concepts/hardware|Hardware]] Accelerator:** The video suggests selecting "T4 GPU" for processing audio and video files, noting that CPUs are suitable for general [[concepts/coding|coding]] tasks. The free tier of Colab is sufficient for these transcription tasks.

**4\. Transcribing the Audio File:**

* **Upload Source File:** The user is instructed to upload their audio file (e.g., "test.wav") into the Colab environment.
* **Install Whisper AI and Dependencies:** The video shows the [[concepts/code|code]] to install Whisper AI and its dependencies, specifically ffmpeg.
* **Execute the Transcription Command:** The core command used for transcription is !whisper "your\_audio\_file.wav" --model medium.en.
	* \--model medium.en specifies that the "medium" model should be used for English transcription.
* **Understanding Model Sizes:** The video briefly explains that Whisper AI offers different model sizes: Tiny, Base, Small, Medium, and Large. Smaller [[concepts/models|models]] are faster but less accurate, while larger models are more accurate but slower. The "medium" model is recommended for a good balance of speed and accuracy.

**5\. Output and Avoiding Mistakes:**

* **Output Files:** After transcription, Whisper AI generates multiple output files in different formats, including: .txt, .srt, .vtt, .tsv, and .json.
* **Saving Files:** A crucial mistake to avoid is not downloading the generated output files from the Colab environment. The video emphasizes that Colab is not [[concepts/google-drive|Google Drive]] and files can be lost if not downloaded. Users should download all generated files.

**In [[concepts/summary|summary]], the video provides a clear, step-by-step [[concepts/tutorial|tutorial]] on how to leverage Google Colab and Whisper AI to convert audio files into text, highlighting the efficiency and accuracy of this process.**

## Related Concepts
- [[concepts/whisper-ai|Google Colab]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Colab)
- [[concepts/whisper-ai|Whisper AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Whisper_AI)
- [[concepts/audio-to-text-transcription|audio-to-text transcription]] — [Wikipedia](https://en.wikipedia.org/wiki/audio-to-text_transcription)
- [[concepts/machine-learning|machine learning]] — [Wikipedia](https://en.wikipedia.org/wiki/machine_learning)

## Related Entities
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- Google Workspace Marketplace — [Wikipedia](https://en.wikipedia.org/wiki/Google_Workspace_Marketplace)