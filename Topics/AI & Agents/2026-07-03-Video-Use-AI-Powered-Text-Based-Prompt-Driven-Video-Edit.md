---
wiki-ingested: true
title: "Video-Use: AI-Powered, Text-Based, Prompt-Driven Video Editor"
date: 2026-07-03
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: reasoning-context-prompting
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-07-03 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Video-Use: AI-Powered, Text-Based, Prompt-Driven Video Editor
**URL:** https://www.youtube.com/watch?v=ADdDW9tIFJw

### Summary
This video introduces "Video-Use," an innovative, free, and 100% open-source tool that transforms [[concepts/ai-assisted-coding|Claude Code]] into a comprehensive, prompt-driven video editor. The core idea is to simplify video production by eliminating the traditional, time-consuming [[concepts/non-linear-editing-workflow|timeline-based editing]] process. Instead of dragging and dropping clips, users provide a folder of raw footage and a single text prompt describing their desired video. Video-Use then automatically processes the content to produce a finished MP4 file, drastically reducing the effort and [[concepts/expertise|expertise]] typically required for [[concepts/video-editing|video editing]]. The tool aims to overcome the "tax on every [[concepts/creator|creator]]" – the hours of tedious work involved in conventional editing, which often deters potential content creators.

Video-Use automates six key aspects of video production: surgical cutting of filler words and silence (never mid-word, snapping to word boundaries with intelligent padding), real [[concepts/photo-tonal-adjustments|color grading]] that reasons about the image using ASC CDL adjustments (highlights, [[concepts/shadows|shadows]], midtones per channel), audio crafting with seamless 30ms fades at every cut to prevent pops, automatic [[concepts/burning|burning]] of customizable subtitles (chunking, casing, and placement), generation of animated overlays using parallel [[concepts/sub-agents|sub-agents]] (HyperFrames, Remotion, Manim, PIL), and self-evaluation to check its own work. This comprehensive automation covers many of the laborious steps that make video editing a barrier for many.

The "clever part" of Video-Use lies in its approach to processing video: it *reads* the video as text rather than *watching* individual frames. By converting 30,000 video frames into a mere 12KB of structured text (transcriptions, timestamps, [[entities/speaker|speaker]] labels, audio events), it sidesteps the massive computational cost of visual analysis. The system operates on two layers: Layer 1 is an "always loaded" word-level [[concepts/text-transcript|transcript]], and Layer 2 provides on-demand visual composites only when complex cut decisions are genuinely hard. The entire process follows a "Look. Ask. Then edit." [[concepts/philosophy|philosophy]], where the tool inventories sources, pre-scans for problems, converses with the user to understand needs, proposes a plain-English strategy, and waits for user confirmation before executing. This ensures the user retains creative direction without being bogged down by technicalities.

Underpinning its functionality is a clean, self-correcting pipeline: transcribe, pack, [[concepts/purpose|reason]], build an edit decision list (EDL), render, and then self-evaluate. This self-evaluation step is crucial; Video-Use grades its own renders, hunting for visual jumps, audio pops, and hidden subtitles, and re-renders up to three times until it passes, guaranteeing a [[concepts/excellence|high-quality]] output. All decisions are transparently saved in JSON and [[concepts/markdown|Markdown]] files, preventing a "black box" scenario and allowing users to understand and even modify the underlying logic. Furthermore, Video-Use is accessible from anywhere, running in the cloud, on a personal server, or even driven via Telegram, promoting continuous editing. This AI-native editing approach prioritizes audio, makes no assumptions, enforces [[concepts/accuracy|correctness]] ruthlessly, and ultimately leaves the art to the user, ushering in a new era of democratized [[concepts/video-creation|video creation]].

### Video Description & Links
#### Description
Browser-use just dropped video-use — and it turns Claude Code into a full video editor. Drop raw clips in a folder, type one sentence, and get final.mp4 back. No timeline, no mouse, 100% open source.

The wild part: the AI never watches your footage. It reads it — a 12KB transcript instead of 45,000,000 [[concepts/tokens|tokens]] of frames. This is the full deep-dive: the cutting, color, audio, subtitles, animation engines, the 12 hard rules, the self-eval loop, and how to run it yourself.

⏱️ CHAPTERS
0:00  What if editing was one sentence
0:26  What video-use is
0:48  It works for any video
1:03  Editing is the creator tax
1:28  Everything it does automatically
1:51  Surgical cutting (silence + word boundaries)
2:16  Real color grading (ASC CDL)
2:44  30ms audio fades — no pops
3:01  Subtitles done right
3:23  Parallel animation agents (HyperFrames/Remotion/Manim/PIL)
3:50  It never watches a frame
4:04  45,000,000 tokens vs 12 KB
4:27  The two layers (transcript + timeline_view)
4:59  A cut decision, visualized
5:17  The 12 hard production rules
5:43  90% of you haven't subscribed 🙂
5:59  How a [[concepts/session|session]] runs
6:21  Ask → confirm → execute
6:37  The pipeline
6:54  It grades its own render (self-eval)
7:14  No black box (EDL + [[concepts/conversation-history|session memory]])
7:34  Setup is one paste
7:53  Just simple [[concepts/python|Python]] helpers
8:11  Edit from anywhere (Cloud / Box / Telegram)
8:25  Same idea as browser-use, new medium
8:47  The philosophy
9:03  Get my Claude Code guides

📦 REPO (100% open source)
https://github.com/browser-use/video-use

📚 MY GUIDES (all linked below)
▸ The Complete Guide to Claude Code — Beginner to Productive in One Day
  https://hyperautomationlabs.gumroad.com/l/claude-code-guide
▸ The Complete Guide to Codex CLI — Beginner to Productive in One Day
  https://hyperautomationlabs.gumroad.com/l/codex-guide
▸ [[concepts/ad-generation|Claude Cowork]] for Sales Professionals
  https://hyperautomationlabs.gumroad.com/l/claude-cowork-sales
▸ Claude Certified Architect — Foundations Complete Prep Kit
  https://hyperautomationlabs.gumroad.com/l/claude-certified-architect-prep

▶ Subscribe for more Claude Code + [[concepts/ai-engineering|AI engineering]]
📸 Instagram · 👍 Facebook — [[entities/hyperautomation-labs|Hyperautomation Labs]]

#ClaudeCode #videouse #browseruse #AIvideoediting #Anthropic #AIcoding #opensource #Claude

#### Tags
`2026 ai tools`, `agentic coding`, `ai coding`, `ai for creators`, `ai video editing`, `ai video editor`, `anthropic`, `automate video editing`, `browser-use`, `claude`, `claude code`, `claude code tutorial`, `edit video with ai`, `elevenlabs`, `ffmpeg`, `hyperautomation labs`, `open source ai`, `opus 4.8`, `remotion`, `video-use`

#### URLs
- https://github.com/browser-use/video-use
- https://hyperautomationlabs.gumroad.com/l/claude-code-guide
- https://hyperautomationlabs.gumroad.com/l/codex-guide
- https://hyperautomationlabs.gumroad.com/l/claude-cowork-sales
- https://hyperautomationlabs.gumroad.com/l/claude-certified-architect-prep

## Related Concepts
- [[concepts/ai-powered-video-editing|AI-Powered Video Editing]] — [Wikipedia](https://en.wikipedia.org/wiki/AI-Powered_Video_Editing)
- [[concepts/prompt-driven-editing|Prompt-Driven Editing]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt-Driven_Editing)
- [[concepts/open-source|Open-Source Software]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-Source_Software)
- [[concepts/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- [[concepts/non-linear-video-editor|Timeline-Based Editing]] — [Wikipedia](https://en.wikipedia.org/wiki/Timeline-Based_Editing)
- [[concepts/raw-footage-processing|Raw Footage Processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Raw_Footage_Processing)
- [[concepts/mp4-output|MP4 Output]] — [Wikipedia](https://en.wikipedia.org/wiki/MP4_Output)
- [[concepts/text-based-interface|Text-Based Interface]] — [Wikipedia](https://en.wikipedia.org/wiki/Text-Based_Interface)
- [[concepts/automated-video-production|Automated Video Production]] — [Wikipedia](https://en.wikipedia.org/wiki/Automated_Video_Production)
- [[concepts/natural-language-processing|Natural Language Processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Natural_Language_Processing)
- Self-Correcting Pipeline — [Wikipedia](https://en.wikipedia.org/wiki/Self-Correcting_Pipeline)
- Edit Decision List (EDL) — [Wikipedia](https://en.wikipedia.org/wiki/Edit_Decision_List_%28EDL%29)
- ASC CDL Color Grading — [Wikipedia](https://en.wikipedia.org/wiki/ASC_CDL_Color_Grading)
- Audio Fade Processing — [Wikipedia](https://en.wikipedia.org/wiki/Audio_Fade_Processing)
- Automated Subtitling — [Wikipedia](https://en.wikipedia.org/wiki/Automated_Subtitling)
- Self-Evaluation Loop — [Wikipedia](https://en.wikipedia.org/wiki/Self-Evaluation_Loop)
- Transcript-Based Analysis — [Wikipedia](https://en.wikipedia.org/wiki/Transcript-Based_Analysis)
- Cloud-Based Editing — [Wikipedia](https://en.wikipedia.org/wiki/Cloud-Based_Editing)
- AI-Native Workflow — [Wikipedia](https://en.wikipedia.org/wiki/AI-Native_Workflow)
- Transparent Logic Logging — [Wikipedia](https://en.wikipedia.org/wiki/Transparent_Logic_Logging)

## Related Entities
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- Video-Use — [Wikipedia](https://en.wikipedia.org/wiki/Video-Use)
- Browser-use — [Wikipedia](https://en.wikipedia.org/wiki/Browser-use)
- HyperFrames — [Wikipedia](https://en.wikipedia.org/wiki/HyperFrames)
- [[entities/remotion|Remotion]] — [Wikipedia](https://en.wikipedia.org/wiki/Remotion)
- Manim — [Wikipedia](https://en.wikipedia.org/wiki/Manim)
- PIL — [Wikipedia](https://en.wikipedia.org/wiki/PIL)
- [[entities/telegram|Telegram]] — [Wikipedia](https://en.wikipedia.org/wiki/Telegram)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)