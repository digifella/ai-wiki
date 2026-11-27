---
selected-topic: "Tools & Platforms"
wiki-ready: true
review-status: "approved"
lab-review-id: cb19ca866c50a5a1de56
suggested-topic: "Tools, Platforms & Infrastructure"
domain: "tools-platforms"
title: "REA vs CraftAnything: I Made Two AIs Clone the Same Software"
date: 2026-11-28
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
credibility_tier: 1
credibility_label: "Commentary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-28-a6qv4LIMRGY-REA-vs-CraftAnything-I-Made-Two-AIs-Clone-the-Same-Softw"
---
## REA vs CraftAnything: I Made Two AIs Clone the Same Software
**Clip title:** REA vs CraftAnything: I Made Two AIs Clone the Same Software
**Author / channel:** Flyke
**URL:** https://www.youtube.com/watch?v=a6qv4LIMRGY
**Credibility:** Commentary (tier 1 of 5). YouTube video from Flyke: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
The video compares two AI coding tools, REA (Reverse Engineer Anything) and Craft Anything, by asking them to reverse engineer and recreate Apple's native macOS Preview app. The speaker tests both tools using the same prompt and Fable 5.2 to evaluate performance, speed, and accuracy across features like PDF viewing, thumbnails, zoom, rotation, search, annotations, and file manipulation.

Both tools successfully installed and completed the task in under an hour, showing comparable speeds. However, both experienced initial bugs and crashes when testing features for the first time, though subsequent runs stabilized. While both tools successfully implemented most requested features, REA closely matched the visual appearance of Preview more accurately, whereas Craft Anything produced cleaner code.

Fable 5.2 evaluated both tools and concluded that REA won three rounds to one, with one tie, making REA the overall winner. The speaker prefers REA's terminal-based workflow over Craft Anything's heavier standalone application.

### Video Description & Links
#### Description
I gave REA (Reverse Engineer Anything) and Craft Anything the same job: copy the native macOS app Preview with AI. Which copy comes out better?

REA plugs into Claude to take apps apart, and Craft Anything is an app made for copying software. I install REA, set up Craft Anything, send both the same prompt and test each copy on the seven features I asked for, from PDF viewing and text search to annotations and page rearranging. Spoiler: both crashed a lot. A day later, I had Anthropic's Fable 5.2 compare the two codebases to pick a winner. 

Which one would you pick? Tell me in the comments.

00:00 Intro
00:54 Installation
03:01 The Prompt
03:57 First look at the results
5:02 PDF and image viewing
5:50 Thumbnails and navigation
6:33 Zoom and rotation
7:13 Text search
7:56 Annotation tools
8:44 Rearranging and deleting pages
9:27 Opening, editing and saving files
10:34 Fable 5.2 reviews both codebases

"Reverse engineer Apple's native macOS Preview application and recreate it as a fully functional macOS desktop app.

Inspect the original application to understand its UI, layout, toolbar, sidebar, menus, icons, typography, interactions and overall design.

- PDF and image viewing.
- PDF page thumbnails and navigation.
- Zoom and rotation controls.
- Text search within PDFs.
- Annotation tools (drawing, highlighting, text and shapes).
- PDF page rearrangement and deletion.
- Opening, editing and saving local files.

Use native macOS technologies where appropriate. All visible controls must work. Do not build a generic PDF viewer or a web application.

Prioritize visual fidelity and functional accuracy. Launch the finished application, test its features and fix any obvious issues.

The goal is to make the recreation as close to the original Apple Preview as possible."
