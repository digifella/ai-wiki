---
type: concept
domain: ai-agents
tags:
  - "video-generation"
  - "speaker-separation"
  - "face-synthesis"
  - "audio-visual"
  - "notebooklm"
aliases:
  - "Custom Face Video Generation"
  - "Speaker-Based Video Synthesis"
summary: The concept involves generating videos with custom face and audio data, utilizing tools like SpeakerSplit for automatic speaker separation.
updated: 2026-05-23
group: multimodal-generative-media
---
# Face Synthesis

[[concepts/facial-expression-generation|Face synthesis]] refers to the AI-driven generation of videos in which a custom face and [[concepts/audio-modality|audio]] are combined to create personalized video content. This process enables users to create videos featuring their own likeness and [[concepts/tone|voice]], or customized variations thereof, without requiring traditional video production equipment or filming. The technology is particularly useful for content creators, educators, and professionals seeking to produce videos [[concepts/assistive-technology|at]] scale with consistent personal presentation.

## Speaker Separation

A key technical component of face synthesis workflows is automatic [[concepts/speaker-separation|speaker separation]], which isolates individual speakers from multi-[[entities/speaker|speaker]] audio sources. Tools like SpeakerSplit provide this functionality, allowing users to process audio containing multiple speakers and separate them into distinct tracks. This capability is essential when converting content—such as podcast discussions or multi-speaker interviews—into video format, as it enables the synthesis system to synchronize appropriate facial expressions and mouth movements with each individual speaker's audio.

## Application and Use Cases

Face synthesis technology has found practical application in converting text-based content into video. For example, tools like [[concepts/ai-integrated-notebooks|NotebookLM]] can generate discussion-based audio content that is subsequently transformed into video using face synthesis, allowing the resulting material to feature a presenter's face and voice rather than remaining as audio-only [[concepts/output|output]]. This [[concepts/workflow|workflow]] streamlines content production for educational material, explainer videos, and personalized [[concepts/media-generation|media generation]].
