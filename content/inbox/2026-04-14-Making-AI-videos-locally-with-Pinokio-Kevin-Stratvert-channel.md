---
wiki-ingested: true
title: "Making AI videos locally with Pinokio - Kevin Stratvert channel"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: multimodal-generative-media
---
# Making AI videos locally with [[entities/pinokio|Pinokio]] - [[entities/kevin-stratvert|Kevin Stratvert]] channel

---
---
<https://www.youtube.com/watch?v=G2Ec3h5CfA8>
Here is a [[concepts/summary|summary]] of the guide on generating AI videos locally on your PC, based on the video [[concepts/text-transcript|transcript]].

# How to Generate Free AI Videos Locally on PC

This guide covers how to run [[concepts/open-source-ai-video-models|open-source AI video models]] (like [[entities/ltx-2|LTX-2]] and Wan) directly on your computer using a tool called Pinokio. This method ensures [[concepts/privacy|privacy]], requires no subscription, and has no [[concepts/usage-limits|usage limits]].

## 1\. System Requirements

[[concepts/running|Running]] AI [[concepts/video-generation|video generation]] locally is resource-intensive.

* **GPU:** A dedicated [[entities/nvidia|NVIDIA]] GPU is highly recommended.
* **[[concepts/vram|VRAM]]:** You need at least **6-8 GB of VRAM**. More VRAM allows for faster generation and longer clips.
* **How to check VRAM ([[entities/windows|Windows]]):**
	1. Press `Ctrl + Shift + Esc` to open Task Manager.
	2. Click the **Performance** tab.
	3. Click **GPU**.
	4. Look for "Dedicated GPU [[concepts/memory|memory]]."

## 2\. Install Pinokio

Pinokio is a "one-click installer" for [[concepts/ai-tools|AI tools]] that manages complex dependencies ([[concepts/python|Python]], [[concepts/cuda|CUDA]], etc.) automatically.

1. Go to the [Pinokio website](https://pinokio.computer).
2. Download the installer for your OS (Windows, Mac, or [[entities/linux|Linux]]).
3. Run the installer. _Note: The first install may take a few minutes as it downloads necessary base [[concepts/files|files]]._

## 3\. Install Wan2GP

Wan2GP is the specific script used to run the video models inside Pinokio.

1. Open Pinokio and click on **Discover**.
2. Search for **Wan2GP**.
3. Click **Install**.
4. Pinokio [[entities/will|will]] list required dependencies; click **Install** to confirm.
5. Once installed, click **Start** to launch the Web UI.

## 4\. Configuring the Model (LTX-2)

In the Wan2GP Web UI:

* **Select Model:** Choose **LTX-2** from the dropdown menu.
	* _Note:_ LTX-2 is highlighted because it can generate **audio and narration** along with the video.
* **Model Type:** Select **Distilled**. (Should be able to run the non-distilled on my Nvidia rtx8000
	* The distilled version is roughly half the size (~20GB) of the full model, making it more stable and practical for consumer GPUs with minimal quality loss.
* **Performance Settings:**
	1. Go to the **Configuration** tab > **Performance**.
	2. Select a **VRAM Profile** that matches your [[concepts/hardware|hardware]] (e.g., Profile 2 for ~12GB VRAM).

## 5\. Generating Video

### Option A: [[concepts/text-to-video|Text-to-Video]]

1. Select **Text Prompt Only**.
2. **Prompt:** Enter a descriptive prompt.
	* _Tip:_ You can generate [[concepts/dialogue|dialogue]] by typing syntax like: `She says, "We need the brand to feel more authentic."`
3. **Settings:**
	* **Resolution:** Start with **720p** for faster results.
	* **Aspect Ratio:** Choose **16:9** ([[entities/youtube|YouTube]]) or **9:16** (TikTok/Shorts).
	* **Duration:** Set the frame count (e.g., 240 frames @ 24fps = 10 seconds).
4. Click **Generate**.
	* _Note:_ The first generation takes longer as the model loads into memory. Subsequent runs will be faster (~30 seconds per clip on good hardware).

### Option B: [[concepts/image-to-video|Image-to-Video]]

1. Select **Start Video with Image**.
2. Drag and drop your source image into the media box.
3. Enter a prompt describing how the image should move or animate (e.g., "The person continues walking towards the castle").
4. Click **Generate**.

## 6\. Advanced Features & Outputs

* **Advanced Mode:** Toggle this on to generate multiple variations (batches) of a single prompt automatically.
* **Viewing Files:**
	* Recent videos appear at the bottom of the UI.
	* To see all files: Click the [[entities/storage|storage]] size icon in the top bar > Open **app** folder > Open **outputs** folder.

## Summary of Benefits

* **[[concepts/cost|Cost]]:** 100% Free.
* **Privacy:** Everything stays on your local machine.
* **Control:** No restrictions on content or usage frequency.
* **[[concepts/capabilities|Capabilities]]:** Generates video, sound, and speech.
