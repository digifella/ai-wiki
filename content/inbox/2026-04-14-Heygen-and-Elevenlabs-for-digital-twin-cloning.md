---
wiki-ingested: true
title: "Heygen and Elevenlabs for digital twin cloning"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: creative-pursuits
group: video-content-systems
---
# [[entities/heygen|Heygen]] and Elevenlabs for [[concepts/digital-twin-cloning|digital twin cloning]]

---
---
<https://www.youtube.com/watch?v=Qy08KtUDXVk>
Here is a comprehensive guide and [[concepts/summary|summary]] based on the video [[concepts/text-transcript|transcript]], formatted in [[concepts/markdown|Markdown]].

# How to Create the Perfect [[concepts/ai-avatar|AI Avatar]]: A Step-by-Step Guide

This guide outlines the process of creating a realistic digital twin using [[concepts/ai-tools|AI tools]] like [[concepts/heygen|HeyGen]] and ElevenLabs. It covers the [[concepts/philosophy|philosophy]] behind AI avatars, the necessary equipment, [[concepts/filming-techniques|filming techniques]], and the [[concepts/software-workflow|software workflow]] required to avoid the "[[concepts/uncanny-valley|Uncanny Valley]]."

* * *

## 1\. The Use Case for AI Avatars

**The Goal:** To save time. Once a high-quality avatar is set up, you never have to film yourself for that specific format again.
**The Challenge:** The **"Uncanny Valley"**—the unsettling feeling people get when a robot or [[concepts/simulation|simulation]] looks human but isn't quite right. To avoid this, the [[concepts/setup|setup]] and input quality must be high.
**Best Applications:**

* **Short-form content:** Social media clips or business updates.
* **[[concepts/training|Training]] videos:** Creating bulk content without needing a studio for weeks.
* **Sales material:** Personalized video outreach at scale.
* **Internal Communications:** Updates from CEOs/Directors who are time-poor.
* **Correction:** Patching mistakes in traditional video shoots without reshooting the whole scene.

> **Note:** Avatars are not recommended for long-form [[entities/youtube|YouTube]] content (>5 mins) where building a deep personal [[concepts/connection|connection]] is the primary goal, as the illusion may break over time.

* * *

## 2\. Filming Setup: Lighting & Composition

The quality of your AI avatar depends entirely on the quality of the video you upload to the AI training model.

### Lighting

* **Avoid Ring Lights:** They create unnatural reflections in the eyes and flat lighting.
* **Key [[concepts/light|Light]]:** Use a round LED panel light (approx. $200-$250). Position it to the front-side of your face to create dimension (light on one cheek, slight shadow on the other).
* **Backlight (Rim Light):** Place a light behind you on the opposite side of the key light. This creates an "edge" on your face/shoulder, separating you from the background. A standard bedroom lamp can work for this.

### Composition

* **Space:** A room with depth looks best.
* **Positioning:** Sit in the middle of the frame. Align yourself with background elements (e.g., door frames or bookshelves) for symmetry.
* **Limited Space [[concepts/solution|Solution]]:** If you don't have a nice room, buy a pop-up green screen that attaches to your chair. You can later replace the background using tools like Runway AI or After Effects.

* * *

## 3\. Recording Your Training Footage

You need to record **2 minutes** of continuous footage to train HeyGen.
**Equipment:**

* **Camera:** A smartphone on a tripod is sufficient. Use the back camera for better quality (use the front camera only to frame the shot first).
* **Microphone:** Not strictly necessary for the _video_ training pass, but good practice.

**Performance Tips:**

* **Posture:** Sit up straight with shoulders back. Do not slouch.
* **Movement:** Sit relatively still. Avoid swaying.
* **Hands:** Be careful with hand gestures. If you wave them around too much, the AI [[entities/will|will]] [[concepts/loop|loop]] those movements unnaturally.
* **Appearance:** Ensure clothes are clean and ironed (dust and messy collars show up).
* **Eye [[entities/contact|Contact]]:** Look directly at the camera lens, not the screen.
* **Speech:** Speak naturally and continuously for 2 minutes. You do not need a script—you can ad-lib (e.g., talk about your day, your pets, etc.).

* * *

## 4\. Creating the Video Avatar (HeyGen)

1. **Platform:** Use [HeyGen](https://www.heygen.com/).
2. **Plan:** The "[[concepts/creator|Creator]]" plan (~$29/mo) is recommended for quality. The free version has watermarks and lower resolution.
3. **Upload:** Upload your 2-minute 4K video file.
4. **Consent:** You must record a specific video consent statement to prove the avatar is you.
5. **Processing:** The avatar usually takes a few minutes to generate.

* * *

## 5\. Creating the Voice Clone (ElevenLabs)

While HeyGen has [[concepts/voice-cloning|voice cloning]], **ElevenLabs** is recommended for the most natural, non-robotic results.

1. **Platform:** Use [ElevenLabs](https://elevenlabs.io/).
2. **Plan:** Requires the "Creator" plan (~$22/mo) for professional voice cloning.
3. **Input Data:**
	* Requires clean audio (no background noise).
	* **Microphone:** Use a high-quality USB mic (e.g., RØDE NT-USB).
	* **Duration:** At least 30 minutes of data is needed, though 2-3 hours is optimal (reading a book aloud is a good method).
	* **Editing:** Clean up the audio (remove "ums," "ahs," and stutters) using Audacity or by hiring a freelancer on Upwork.
4. **[[concepts/integration|Integration]]:** You can connect your ElevenLabs voice to HeyGen via API so it appears directly inside the HeyGen interface.

* * *

## 6\. Automating the Process (Advanced)

To maximize [[concepts/time-savings|time savings]], you can use **Make.com** to automate [[concepts/video-creation|video creation]].
**The [[concepts/workflow|Workflow]]:**

1. **Trigger:** Write a script in a **[[entities/google|Google]] Doc**.
2. **Filter:** The [[concepts/automation|automation]] watches for a specific "Approval [[concepts/code|Code]]" typed into the doc.
3. **Action 1:** Send script to **ElevenLabs** (via API/HTTP request) to generate audio.
4. **Action 2:** Send audio/script to **HeyGen** via API to generate the video.
5. **Action 3:** Save the final video file automatically to a **Google [[concepts/motivation|Drive]]** folder.

* * *

## Summary of Tools Mentioned

|     |     |     |
| --- | --- | --- |
| Category | Tool/Product | [[concepts/cost|Cost]] Estimate |
| **Video Avatar AI** | [[entities/heygen|HeyGen]] | ~$29/mo ([[concepts/creator|Creator]] Plan) |
| **Voice AI** | ElevenLabs | ~$22/mo (Creator Plan) |
| **Key [[concepts/light|Light]]** | Round LED Panel | ~$200 - $250 |
| **Microphone** | RØDE NT-USB | ~$100 |
| **[[concepts/automation|Automation]]** | Make.com | Freemium / varies |
| **Editing (Optional)** | Runway AI / After Effects | Varies |
| **Audio Editing** | Audacity | Free |