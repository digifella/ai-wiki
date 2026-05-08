---
wiki-ingested: true
domain: creative-pursuits
group: video-content-systems
---
<https://www.youtube.com/watch?v=Lx7Bji_sNWM>
Here is a comprehensive [[concepts/markdown|Markdown]] guide based on the [[concepts/workflow|workflow]] detailed in the video.

* * *

# 🎥 The "Admin Privileges" [[concepts/ai-video-workflow|AI Video Workflow]]

**Goal:** Create high-retention, broadcast-quality documentary videos (motion, high-res, voice-matched) for free, avoiding the low-quality "slideshow" look.

## 🛠️ The [[concepts/tech-stack|Tech Stack]] (Free/Freemium)

* **Research & Script:** [NotebookLM](https://notebooklm.google.com/)
* **Voiceover:** [Google AI Studio](https://aistudio.google.com/)
* **Visual Strategy:** [LM Arena](https://chat.lmsys.org/) (Direct Chat)
* **Image Generation:** [Google Flow](https://flow.google.com/) ([[entities/imagefx|ImageFX]])
* **Video Animation:** [Meta AI](https://www.meta.ai/)
* **Editing:** CapCut / Premiere Pro

* * *

## 🚀 Step-by-Step Workflow

### Phase 1: Research & Strategy ([[concepts/notebooklm|NotebookLM]])

_The goal is to ground the video in facts, not hallucinations._

1. **Curate Sources:**
	* Go to [[entities/youtube|YouTube]].
	* Search your niche (e.g., "Quantum Computers and AI").
	* **Filter:** Sort by upload date -> **"This Month"** (Critical for fresh data).
	* Open 10+ high-performing videos and copy their URLs.
2. **Feed NotebookLM:**
	* Create a new [[concepts/notebook|notebook]].
	* Paste the YouTube URLs as sources.
3. **Generate Strategy (Master Prompt #1):**
	* Ask NotebookLM to analyze the transcripts.
	* **Objective:** Find [[concepts/hooks|hooks]], retention gaps, and structure a unique angle.
	* _Action:_ Click **"Save to Note"** on the output, then **"Convert to Source."** Now the AI "knows" your strategy.

### Phase 2: The Script (NotebookLM)

_Do not let the AI write a generic blog post. Force it to write for audio._

1. **Generate Script (Master Prompt #2):**
	* Prompt the AI to write a script optimized for voiceover (teleprompter format).
	* **Instructions:** No scene headers, use specific hooks found in Phase 1.
2. **Export:**
	* Copy the text to a [[entities/google|Google]] Doc.
	* **Warning:** Do _not_ use the "Generate Video" button inside NotebookLM (it creates a static slideshow).

### Phase 3: Voiceover (Google [[entities/ai-studio|AI Studio]])

_Get unlimited, human-sounding speech._

1. Go to **[[entities/google-ai|Google AI]] Studio** -> **Playground**.
2. Select **"Text to Speech"**.
3. **Model:** Choose `Gemini 2.5 Pro` (or latest robust model).
4. **Settings:**
	* Mode: Single [[entities/speaker|Speaker]].
	* Voice: Select a deep/authoritative voice (e.g., "Deep American Female").
	* [[concepts/style|Style]] Instructions: "Deep, authoritative, fast-paced."
5. **Batch Processing:**
	* **Important:** Do not paste the whole script. Copy/paste in **2-minute chunks** to prevent the AI from degrading in quality/laziness.
	* Download the audio [[concepts/files|files]].

### Phase 4: Visual Roadmap (LM Arena)

_Create a precise map so visuals match the audio perfectly._

1. Go to **LM Arena** -> **Direct Chat**.
2. **Model:** Select `Gemini 3 Pro` (needs to understand complex logic).
3. **Generate Shot List (Master Prompt #3):**
	* Input: Total audio length and clip duration (set to **5 seconds**).
	* Paste your script segment.
4. **The Output:** The AI should generate a **Table** with three columns:
	* Column 1: Script Line.
	* Column 2: **Image Prompt** (Detailed, photographic style).
	* Column 3: **Video Motion Prompt** (Camera movement instructions).

### Phase 5: Image Assets ([[entities/google-flow|Google Flow]])

1. Go to **Google Flow** (ImageFX).
2. **Model:** `Nano Banana` (or `Nano Banana Pro`).
	* _Tip:_ If you hit the limit on Pro, switch to the standard model (it is unlimited and free).
3. **Action:** Copy the **Image Prompt** from your LM Arena table.
4. **Download:** Save the high-res images.

### Phase 6: Motion Generation ([[entities/meta|Meta AI]])

_Turn static images into video clips._

1. Go to **Meta AI** -> Create -> **Video Mode**.
2. **The Magic Step:**
	* **Upload** the image you generated in Phase 5.
	* **Paste** the **Video Motion Prompt** from your LM Arena table.
3. **Result:** The AI animates the image (pans, zooms, lighting shifts) while maintaining the exact composition.
4. Download the video clip.

### Phase 7: Assembly (The Sync Trick)

1. Open your video editor.
2. **Audio First:** Drag your voiceover onto the timeline. Lock the track.
3. **Visuals Second:**
	* Do not guess placement.
	* Because you generated clips in **5-second chunks** based on the Shot List Table, simply drop the clips in order. They [[entities/will|will]] naturally sync with the script lines they were generated for.
4. **Polish:** Add background music and simple dissolve transitions.

* * *

## 📝 The "Master Prompts" Structure

_(Note: Adjust the bracketed info for your specific topic)_
**Prompt 1 (Strategy):**

> "Act as an expert YouTube Producer. Analyze the provided transcripts from top-performing videos. Identify hooks, retention gaps, and structural patterns. Synthesize this data to create a 'Category King' video strategy—one that outperforms individual sources. Create a 'Retention [[concepts/architecture|Architecture]]' outlining the Opening [[concepts/loops|Loops]], The [[concepts/setup|Setup]], and The Body."

**Prompt 2 (Script):**

> "You are a professional YouTube Scriptwriter. Write a script based on the \[Strategy Source\] we just created. **Rules:**
> 
> * VOICE OVER ONLY: Do not write scene headers or visual directions.
> * Format: Teleprompter style (continuous text).
> * [[concepts/tone|Tone]]: High-energy, Motivational, Fast-paced.
> * No Fluff: Do not use conversational filler. Start instantly with the first word of the video."

**Prompt 3 (Visual Shot List):**

> "Act as an award-winning Documentary Film Director and AI [[entities/prompt-engineer|Prompt Engineer]]. **Task:** Generate a visual Shot List table. **Configuration:**
> 
> * Total Audio Length: \[Insert Time, e.g., 2 mins\]
> * Clip Duration: **5 Seconds** (Strict)
> * Visual Style: High-End Documentary, Photorealistic, Cinematic, 16:9. **Output:** A table with 3 columns:
> 
> 1. Narrative Context (Script line)
> 2. Image Prompt (Midjourney/Dall-E 3 style description)
> 3. Video Motion Prompt (Camera movement, e.g., 'Slow push in', 'Vertical tilt')"

Prompt 1
<https://drive.google.com/file/d/1gF7Y6cYZ5DYVK4NcLquIZU-pry3QYHWO/view>

Prompt 2
<https://drive.google.com/file/d/1nhD1ZdZ-8KujUog4ZAAiRPTBAQghGo6l/view>

Prompt 3
<https://drive.google.com/file/d/1x1Yf7AuP-Ex5HdpQaUvxTSR5ex_wc-62/view>

## Related Concepts
- [[concepts/ai-workflow|AI Workflow]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Workflow)
- [[concepts/video-creation|Video Production]] — [Wikipedia](https://en.wikipedia.org/wiki/Video_Production)
- [[concepts/admin-privileges|Admin Privileges]] — [Wikipedia](https://en.wikipedia.org/wiki/Admin_Privileges)

## Related Entities
- [[entities/admin-privileges|Admin Privileges]] — [Wikipedia](https://en.wikipedia.org/wiki/Admin_Privileges)
- [[entities/google-ai-studio|Google AI Studio]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_AI_Studio)
- [[entities/lm-arena|LM Arena]] — [Wikipedia](https://en.wikipedia.org/wiki/LM_Arena)
- [[entities/meta-ai|Meta AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Meta_AI)
- [[entities/capcut|CapCut]] — [Wikipedia](https://en.wikipedia.org/wiki/CapCut)
- [[entities/premiere-pro|Premiere Pro]] — [Wikipedia](https://en.wikipedia.org/wiki/Premiere_Pro)
- {'name': 'Google AI Studio', 'description': 'A cloud-based video editing and animation platform'} — [Wikipedia](https://en.wikipedia.org/wiki/%7B%27name%27%3A_%27Google_AI_Studio%27%2C_%27description%27%3A_%27A_cloud-based_video_editing_and_animation_platform%27%7D)
- {'name': 'LM Arena', 'description': 'A direct chat interface for generating visual roadmaps'} — [Wikipedia](https://en.wikipedia.org/wiki/%7B%27name%27%3A_%27LM_Arena%27%2C_%27description%27%3A_%27A_direct_chat_interface_for_generating_visual_roadmaps%27%7D)
- {'name': 'Meta AI', 'description': 'A meta intelligence platform for motion generation'} — [Wikipedia](https://en.wikipedia.org/wiki/%7B%27name%27%3A_%27Meta_AI%27%2C_%27description%27%3A_%27A_meta_intelligence_platform_for_motion_generation%27%7D)