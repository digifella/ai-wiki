---
title: "Video-Use: AI-Powered, Text-Based, Prompt-Driven Video Editor"
date: 2026-07-03
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Video-Use: AI-Powered, Text-Based, Prompt-Driven Video Editor
Generated: 2026-07-03 · API: Gemini 2.5 Flash · Modes: Summary

---

## Video-Use: AI-Powered, Text-Based, Prompt-Driven Video Editor
**URL:** https://www.youtube.com/watch?v=ADdDW9tIFJw

### Summary
This video introduces "Video-Use," an innovative, free, and 100% open-source tool that transforms Claude Code into a comprehensive, prompt-driven video editor. The core idea is to simplify video production by eliminating the traditional, time-consuming timeline-based editing process. Instead of dragging and dropping clips, users provide a folder of raw footage and a single text prompt describing their desired video. Video-Use then automatically processes the content to produce a finished MP4 file, drastically reducing the effort and expertise typically required for video editing. The tool aims to overcome the "tax on every creator" – the hours of tedious work involved in conventional editing, which often deters potential content creators.

Video-Use automates six key aspects of video production: surgical cutting of filler words and silence (never mid-word, snapping to word boundaries with intelligent padding), real color grading that reasons about the image using ASC CDL adjustments (highlights, shadows, midtones per channel), audio crafting with seamless 30ms fades at every cut to prevent pops, automatic burning of customizable subtitles (chunking, casing, and placement), generation of animated overlays using parallel sub-agents (HyperFrames, Remotion, Manim, PIL), and self-evaluation to check its own work. This comprehensive automation covers many of the laborious steps that make video editing a barrier for many.

The "clever part" of Video-Use lies in its approach to processing video: it *reads* the video as text rather than *watching* individual frames. By converting 30,000 video frames into a mere 12KB of structured text (transcriptions, timestamps, speaker labels, audio events), it sidesteps the massive computational cost of visual analysis. The system operates on two layers: Layer 1 is an "always loaded" word-level transcript, and Layer 2 provides on-demand visual composites only when complex cut decisions are genuinely hard. The entire process follows a "Look. Ask. Then edit." philosophy, where the tool inventories sources, pre-scans for problems, converses with the user to understand needs, proposes a plain-English strategy, and waits for user confirmation before executing. This ensures the user retains creative direction without being bogged down by technicalities.

Underpinning its functionality is a clean, self-correcting pipeline: transcribe, pack, reason, build an edit decision list (EDL), render, and then self-evaluate. This self-evaluation step is crucial; Video-Use grades its own renders, hunting for visual jumps, audio pops, and hidden subtitles, and re-renders up to three times until it passes, guaranteeing a high-quality output. All decisions are transparently saved in JSON and Markdown files, preventing a "black box" scenario and allowing users to understand and even modify the underlying logic. Furthermore, Video-Use is accessible from anywhere, running in the cloud, on a personal server, or even driven via Telegram, promoting continuous editing. This AI-native editing approach prioritizes audio, makes no assumptions, enforces correctness ruthlessly, and ultimately leaves the art to the user, ushering in a new era of democratized video creation.

### Video Description & Links
#### Description
Browser-use just dropped video-use — and it turns Claude Code into a full video editor. Drop raw clips in a folder, type one sentence, and get final.mp4 back. No timeline, no mouse, 100% open source.

The wild part: the AI never watches your footage. It reads it — a 12KB transcript instead of 45,000,000 tokens of frames. This is the full deep-dive: the cutting, color, audio, subtitles, animation engines, the 12 hard rules, the self-eval loop, and how to run it yourself.

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
5:59  How a session runs
6:21  Ask → confirm → execute
6:37  The pipeline
6:54  It grades its own render (self-eval)
7:14  No black box (EDL + session memory)
7:34  Setup is one paste
7:53  Just simple Python helpers
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
▸ Claude Cowork for Sales Professionals
  https://hyperautomationlabs.gumroad.com/l/claude-cowork-sales
▸ Claude Certified Architect — Foundations Complete Prep Kit
  https://hyperautomationlabs.gumroad.com/l/claude-certified-architect-prep

▶ Subscribe for more Claude Code + AI engineering
📸 Instagram · 👍 Facebook — Hyperautomation Labs

#ClaudeCode #videouse #browseruse #AIvideoediting #Anthropic #AIcoding #opensource #Claude

#### Tags
`2026 ai tools`, `agentic coding`, `ai coding`, `ai for creators`, `ai video editing`, `ai video editor`, `anthropic`, `automate video editing`, `browser-use`, `claude`, `claude code`, `claude code tutorial`, `edit video with ai`, `elevenlabs`, `ffmpeg`, `hyperautomation labs`, `open source ai`, `opus 4.8`, `remotion`, `video-use`

#### URLs
- https://github.com/browser-use/video-use
- https://hyperautomationlabs.gumroad.com/l/claude-code-guide
- https://hyperautomationlabs.gumroad.com/l/codex-guide
- https://hyperautomationlabs.gumroad.com/l/claude-cowork-sales
- https://hyperautomationlabs.gumroad.com/l/claude-certified-architect-prep
