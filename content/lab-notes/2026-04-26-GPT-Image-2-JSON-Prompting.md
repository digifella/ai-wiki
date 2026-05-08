---
wiki-ingested: true
title: URL Ingest Summary
date: 2026-04-26
source_type: url_ingest
domain: tools-platforms
group: web-publishing-quartz-websites
---
# URL Ingest Summary
Generated: 2026-04-26

## Overview
- **Total URLs processed:** 1
- **Web pages captured:** 1
- **[[concepts/pdfs|PDFs]] downloaded:** 0
- **Converted to [[concepts/markdown|Markdown]]:** 1
- **Failed:** 0

---

## GPT Image 2 — JSON Prompting Workflow and Storyboard Method | Notion
**URL:** https://www.notion.so/GPT-Image-2-JSON-Prompting-Workflow-and-Storyboard-Method-34a606421d128009acc7c617695ac68e
**Status:** web_markdown
**Note:** web_page_captured

---
preface_schema: '1.0'
title: 'GPT Image 2 — [[concepts/json-prompting-workflow|JSON Prompting Workflow]] and Storyboard Method | Notion'
source_type: 'Other'
publisher: 'www.notion.so'
publishing_date: 'Unknown'
authors: []
available_at: 'https://www.notion.so/GPT-Image-2-JSON-Prompting-Workflow-and-Storyboard-Method-34a606421d128009acc7c617695ac68e'
availability_status: 'available'
availability_http_code: '200'
availability_checked_at: '2026-04-26'
availability_note: 'Available as at 2026-04-26.'
source_integrity_flag: 'verified'
credibility_tier_value: '1'
credibility_tier_key: 'commentary'
credibility_tier_label: 'Commentary'
credibility_reason: 'commentary_default'
credibility: 'Final Commentary Report'
journal_ranking_source: 'n/a'
journal_sourceid: ''
journal_title: ''
journal_issn: ''
journal_sjr: '0.0'
journal_quartile: ''
journal_rank_global: '0'
journal_categories: ''
journal_areas: ''
journal_high_ranked: 'False'
journal_match_method: 'none'
journal_match_confidence: '0.0'
[[concepts/keywords|keywords]]: []
abstract: 'GPT Image 2 — JSON Prompting Workflow and Storyboard Method This document covers everything you need to replicate the workflow from the video, including the [[concepts/gemini|Gemini]] Gem, source [[concepts/files|files]], and the storyboard technique discovered during [[concepts/testing|testing]]. What This Is The JSON Image [[concepts/creator|Creator]] Version 3 is an updated [[entities/gemini-pro|Gemini]] Gem built for structured AI image prompting. Instead of typing a description directly into an image model, you use the Gem to generate a JSON-formatted prompt first. That JSON output gets pasted into GPT Image 2 to create the image. The reason JSON works better here is [[concepts/structure|structure]]. A plain [[concepts/text|text]] description leaves room for the model to guess. JSON defines the fields before generation starts, which tends to produce more consistent, controlled results. What You Need A paid ChatGPT account is required for the storyboard feature. As of the recording date, GPT Image 2 is available in the US but '
---
# GPT Image 2 — JSON Prompting Workflow and Storyboard Method | Notion

Source: https://www.notion.so/GPT-Image-2-JSON-Prompting-Workflow-and-Storyboard-Method-34a606421d128009acc7c617695ac68e

GPT Image 2 — JSON Prompting Workflow and Storyboard Method

This document covers everything you need to replicate the workflow from the video, including the Gemini Gem, source files, and the storyboard technique discovered during testing.

What This Is

The

JSON Image [[entities/creator|Creator]] Version 3

is an updated Gemini Gem built for structured AI image prompting. Instead of typing a description directly into an image model, you use the Gem to generate a JSON-formatted prompt first. That JSON output gets pasted into GPT Image 2 to create the image.

The reason JSON works better here is structure. A plain text description leaves room for the model to guess. JSON defines the fields before generation starts, which tends to produce more consistent, controlled results.

What You Need

A paid ChatGPT account is required for the storyboard feature. As of the recording date, GPT Image 2 is available in the US but availability may vary by region. The Gemini Gem can be used with any Gemini account.

The Gem

The

JSON Image Creator Version 3 Gem

is included in the Notion doc download. You can either use the ready-made Gem directly or use the source files to create and modify your own version.

When you paste a plain-language image prompt into the Gem, it returns a JSON-structured version of that prompt, complete with camera type, aspect settings, and meta [[concepts/tokens|tokens]] baked in. Meta tokens are specific descriptors that push the image toward more cinematic and detailed results without you having to write them manually.

One thing to know: if you use the same Gem chat [[concepts/session|session]] across multiple prompts, the Gem will occasionally generate an image instead of returning the JSON. If that happens, go back and edit the message to include the phrase "a prompt for" before your description rather than reprompting fresh. Reprompting wastes tokens. Alternatively, start a new chat in the Gem.

Aspect Ratio Tool

GPT Image 2 has a built-in aspect ratio button on every generated image. You can switch from the default square to 16:9 landscape for YouTube-[[concepts/style|style]] [[concepts/images|images]], 9:16 for TikTok and short form, or a [[concepts/range|range]] of other formats. The model re-renders the image in the selected ratio while preserving the content. This is fast and works well.

The Storyboard Method

This is the part worth paying [[concepts/attention|attention]] to.

After generating an initial image, you can ask GPT Image 2 to use that image as the starting point of a story and create a sequence of images that follow it. The model will generate the sequence as a storyboard, assign its own narrative logic to the order, and maintain visual [[concepts/logical-consistency|consistency]] across the images.

To trigger this, [[entities/make|make]] sure ChatGPT is in [[concepts/thinking-mode|thinking mode]]. Then after your initial image is generated, prompt something like: "I want you to create a total of five images, using this prompt as the starting point of a story. Create them like a storyboard that tells the story of what these characters are doing."

A few practical notes from testing. Up to eight images are technically possible, but images seven and eight tend to drift in consistency. Stopping at five or six is the better call. The model may also reorder the original image within the sequence rather than treating it as image one, because it is [[concepts/human-cognition|thinking]] about narrative placement, not just appending new images. That is a feature, not a bug.

The practical [[concepts/scenarios|use cases]] here are wider than they first appear. You can download the sequence and bring it into

Higgsfield Seedance 2.0

to create a short cinematic video. You can use the images across an article or long-form piece to illustrate a story progression. You can use them for illustrated books or sequential [[concepts/storytelling|storytelling]]. The workflow works for photorealistic images and illustration style equally.

Editing Images in the Same Chat

One thing to be aware of when editing generated images: the more edits you make within the same chat session, the more quality can degrade. Each edit asks the model to recreate the image while incorporating changes, and small artifacts accumulate over time. If you notice quality dropping, copy the image and start a new chat rather than continuing to edit in the original session.

WisprFlow

The dictation tool used throughout the video is called

WisprFlow

. It is not a sponsor, just a tool that saves a significant amount of time when prompting.

Files Included

The Gemini Gem [[concepts/instructions|instructions]]

The Source files for creating your own version of the Gem

The JSON Image Creator V.3 Gem

## Related Concepts
- [[concepts/json|JSON Prompting]] — [Wikipedia](https://en.wikipedia.org/wiki/JSON_Prompting)
- [[concepts/storyboard-method|Storyboard Method]] — [Wikipedia](https://en.wikipedia.org/wiki/Storyboard_Method)
- [[concepts/ai-image-generation|Image Generation Workflow]] — [Wikipedia](https://en.wikipedia.org/wiki/Image_Generation_Workflow)
- Structured AI [[concepts/prompting|Prompting]] — [Wikipedia](https://en.wikipedia.org/wiki/Structured_AI_Prompting)
- [[concepts/json-prompt-engineering|JSON Formatting]] — [Wikipedia](https://en.wikipedia.org/wiki/JSON_Formatting)
- [[concepts/meeting-prep-strategist|Gemini Gems]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_Gems)
- [[concepts/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- [[concepts/ai-image-generation|AI Image Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Image_Generation)
- Prompt [[concepts/logical-consistency|Consistency]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Consistency)
- [[concepts/json|JSON Structure]] — [Wikipedia](https://en.wikipedia.org/wiki/JSON_Structure)
- [[concepts/website-building|Automated Workflows]] — [Wikipedia](https://en.wikipedia.org/wiki/Automated_Workflows)
- [Prompt Development](https://en.wikipedia.org/wiki/Prompt_Development) — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Development)
