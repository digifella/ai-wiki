---
wiki-ingested: true
title: "Craig Does AI: JSON Prompts for Advanced ChatGPT Image 2.0 Control"
date: 2026-04-26
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: data-pipelines-sync-storage
type: "source-summary"
aliases:
  - "lab-notes/2026-04-26-Craig-Does-AI-JSON-Prompts-for-Advanced-ChatGPT-Image-2.0-Control"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## Craig Does AI: JSON Prompts for Advanced ChatGPT Image 2.0 Control
**Clip title:** I Tested ChatGPT's New Image 2.0 and Accidentally Stumbled Upon an Awesome [[concepts/workflow|Workflow]]
**Author / channel:** Craig Does AI
**URL:** https://www.youtube.com/watch?v=qXUww5tnLHs

### Summary
The video introduces a significant discovery regarding image generation with [[entities/gpt-image-2|GPT Image 2]].0, which the presenter suggests could establish it as a leading tool. Having previously developed a custom "JSON Image [[concepts/creator|Creator]] V.3" Gem for image [[concepts/prompting|prompting]], the presenter describes how, during recent [[concepts/testing|testing]] with [[entities/gpt-image-2|GPT Image 2]].0, he stumbled upon an unexpected and powerful "hack." This breakthrough provides enhanced control over image generation and enables advanced capabilities not widely known. The presenter not only demonstrates this functionality but also offers all necessary resources—including the Gem itself, its source [[concepts/files|files]], and a detailed [[entities/notion|Notion]] document—for viewers to replicate and experiment with his findings.

The core of the presenter's method lies in utilizing JSON-structured prompts rather than simple [[concepts/text|text]] [[concepts/commands|commands]]. He explains that JSON prompts offer a superior [[concepts/structure|structure]], leading to more precise and [[concepts/consistent-image-generation|consistent image generation]]. In an initial demonstration, he uses his JSON Image [[concepts/creator|Creator]] V.3 to generate a detailed prompt for "a group of [[concepts/nasa|NASA]] astronauts on the moon playing kickball, but the ball floats away due to no [[concepts/gravitational-pull|gravity]]." This JSON code, when submitted to [[entities/chatgpt|ChatGPT]] (which uses [[entities/dall-e-3|DALL-E 3]] for image generation), produces a high-quality, realistic image. Furthermore, ChatGPT's interface allows for seamless aspect ratio [[concepts/adjustments|adjustments]] (e.g., from square to 16:9 landscape or 9:16 portrait) and in-[[concepts/image-editing|image editing]], such as changing the color of the ball or adding elements like a fish to an eagle's talons, all while maintaining image [[concepts/logical-consistency|consistency]].

The most exciting revelation, however, is a trick for generating consistent, sequential [[concepts/images|images]], perfect for [storyboarding](https://en.wikipedia.org/wiki/Storyboard). This advanced feature is exclusively available to paid ChatGPT users and requires activating a "[[concepts/human-cognition|Thinking]]" mode. By leveraging the initial JSON prompt, users can instruct ChatGPT to create a series of [[concepts/images|images]] (ideally around five or six) that tell a continuous story, with each subsequent image drawing [[concepts/logical-consistency|consistency]] from the previously generated one. The presenter showcases this by creating a humorous sequence of a chimpanzee and a miniature donkey-giraffe playing football, transitioning from a yard to a street scene, with the chimp eventually diving and being consoled by the donkey-giraffe.

While this storyboarding hack offers unprecedented narrative capabilities in [[concepts/ai-image-generation|AI image generation]], the presenter notes a limitation: image quality can begin to degrade and introduce "artifacts" after about the fifth or sixth image in a sequence. He suggests a workaround of copying the most consistent image into a new chat to maintain quality for longer narratives. Beyond photographic styles, the system also supports generating illustrations, providing further creative flexibility. Overall, the discovery highlights a powerful, structured approach to AI image creation that significantly enhances control and enables complex narrative development, setting GPT Image 2.0 apart as a formidable tool for creators.

## Related Concepts
- [[concepts/json|JSON prompting]]
- [[concepts/ui-generation|image generation]]
- [[concepts/prompt-engineering|prompt engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering)
- [[concepts/ai-image-workflows|AI image workflows]]
- aspect ratio [[concepts/adjustments|adjustments]]
- [[concepts/ai-image-editing|in-image editing]]
- storyboarding — [Wikipedia](https://en.wikipedia.org/wiki/Storyboard)
- [[concepts/ai-image-generation|sequential image generation]]
- [[concepts/thinking-mode|Thinking mode]]
