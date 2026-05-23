---
type: concept
domain: security-infrastructure
summary: A guide on how to fine-tune Google's Gemma-4-E2B large language model locally using the unsloth library for enhanced efficiency.
updated: 2026-05-23
group: data-pipelines-sync-storage
---
group: document-parsing-json-[[concepts/json-structuring|structured-data]]
title: "Custom Dataset"

# Custom Dataset

This page discusses the process and considerations for [[concepts/fine-tuning|fine-tuning]] [[concepts/large-language-models|large language models (LLMs)]] on [[concepts/custom-dataset|custom datasets]]. The content covers techniques to enhance model performance in specific domains or tasks by leveraging user-generated data.

## Integrating Gemma-4 E2B Model with Custom Data

- **[[concepts/tutorial|Tutorial]]:** Fine-Tune [[concepts/gemma-4|Gemma-4]] on Your Own Dataset Locally: Step-by-Step [[concepts/tutorial|Tutorial]]
  - Author/Channel: [[entities/fahd-mirza|Fahd Mirza]]
  - URL: Fine-Tune [[concepts/23b-parameter-models|Gemma-4]] on Your Own Dataset Locally: Step-by-Step Tutorial
  - **[[concepts/summary|Summary]]:** Provides a practical guide to fine-tuning [[concepts/google-search|Google]]'s [[concepts/gemma-4-e2b|Gemma-4-E2B]] LLM locally using the `unsloth` library, transforming it

## Integrating OSS-20B Model with Custom Data

- **[[concepts/tutorial|Tutorial]]:** Fine-Tune [[entities/oss-20b|OSS-20B]] for Persona: [[entities/fahd-mirza|Fahd Mirza]]
  - Author/Channel: [[entities/fahd-mirza|Fahd Mirza]]
  - URL: Fine-Tune [[entities/oss-20b|OSS-20B]] for Persona: Fahd Mirza
  - **Summary:** Comprehensive guide to fine-tuning [[entities/openai|OpenAI]]'s [[entities/gpt-oss-20b|GPT-OSS-20B]] [[concepts/open-weight-model|open-weight model]] using custom data to embody a specific persona (Fahd Mirza), leveraging [[entities/hugging-face|Hugging Face]]'s [[concepts/trl-library|TRL library]] for [[concepts/supervised-fine-tuning|supervised fine-tuning]] (SFT). Includes [[entities/ubuntu|Ubuntu]] 22.04 LTS system [[concepts/setup|setup]] and step-by-step [[concepts/adoption|implementation]].

Backlink: 2026 04 14 Fahd Mirza fine tuning [[concepts/weights|weights]] of [[concepts/gpt-oss-20b|OSS 20B]]
## Source Notes
- 2026-04-14: Fahd Mirza - fine tuning weights of OSS-20B
- 2026-04-07: Fine-Tune [[concepts/gemma-4|Gemma-4 on Your Own Dataset Locally: Step-by-Step]]
- 2026-04-23: Excel