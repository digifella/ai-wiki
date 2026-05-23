---
type: concept
domain: health-wellbeing
tags:
  - "concept"
  - "function-calling"
  - "ai-models"
  - "gemma"
  - "google"
  - "open-weight-models"
  - "llm-capabilities"
aliases:
  - "Function Call"
  - "Model Function Calling"
summary: Function calling capability in Google's Gemma 4 open-weight models released under Apache 2.0 license.
updated: 2026-05-23
group: body-systems-recovery-function
---
# Function Calling

Function calling is a capability that enables [[concepts/large-language-model-llm|large language models]] to invoke external functions or tools as part of their operation. In the context of [[concepts/google-search|Google]]'s [[concepts/23b-parameter-models|Gemma 4]] [[concepts/model-customization|open-weight models]], this feature allows the model to identify when a task requires external computation or data retrieval and to [[concepts/structure|structure]] requests to call appropriate functions, rather than attempting to generate all [[concepts/responses|responses]] internally.

## Implementation in Gemma 4

[[entities/google|Google]] released [[concepts/e4b-model|Gemma 4]] as [[concepts/open-weight-language-models|open-weight models]] under the [[concepts/apache-2-0|Apache 2.0 license]], incorporating function calling among their enhanced [[concepts/capabilities|AI capabilities]]. This [[concepts/adoption|implementation]] allows developers to define custom functions that the model can invoke during [[concepts/inference|inference]], enabling [[concepts/integration|integration]] with external APIs, databases, and computational tools. The open [[concepts/licensing|licensing]] ensures that organizations can deploy and modify these models according to their needs.

## Practical Applications

Function calling proves particularly valuable in [[concepts/health|health]]-[[concepts/wellbeing|wellbeing]] contexts where models need to access real-time data, perform calculations, or trigger specific actions. For example, a health assistant might call functions to retrieve patient records, calculate medication dosages, or schedule appointments. The capability also supports token-efficient operation of [[concepts/agentic-ai|AI agents]] by allowing structured tool use rather than having the model generate verbose workarounds.
## Source Notes
- 2026-04-07: [[concepts/gemma-4|Gemma 4 Has Landed!]]
- 2026-04-27: Claude AI · [▶ source](https://www.youtube.com/watch?v=Ph-maUAiSU8)
- 2026-04-29: Optimizing LLM Agent · [▶ source](https://www.youtube.com/watch?v=rU6IYiQ1SdQ)