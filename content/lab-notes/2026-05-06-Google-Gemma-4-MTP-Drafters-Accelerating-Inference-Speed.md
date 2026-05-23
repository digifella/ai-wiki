---
wiki-ingested: true
title: "Google Gemma 4 MTP Drafters: Accelerating Inference Speed with Speculative Decoding"
date: 2026-05-06
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: open-systems-local-models
---
# Google Gemma 4 MTP Drafters: Accelerating Inference Speed with Speculative Decoding
Generated: 2026-05-06 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: [[concepts/summary|Summary]]

---

## Google Gemma 4 MTP Drafters: Accelerating Inference Speed with Speculative Decoding
**[[concepts/clip-title|Clip title]]:** [[concepts/google-search|Google]] Releases [[concepts/23b-parameter-models|Gemma 4]] MTP Drafters - Run Locally and DFlash Comparison
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=ak4OUOoOV08

### Summary
This video discusses [[concepts/google-search|Google]]'s release of [[concepts/multi-token-prediction-mtp-drafter-models|Multi-Token Prediction (MTP) drafter models]] for the [[concepts/23b-parameter-models|Gemma 4]] [[concepts/llm|large language model]] family, designed to address the previously slow [[concepts/speed|inference speed]] of the original [[concepts/native-audio-processing|Gemma 4 models]]. When Gemma 4 first launched, a significant complaint from the community was its "painfully slow" token generation, as it processed one token at a time, making it less efficient compared to other models of similar size.

The MTP drafter introduces a crucial optimization: a small, lightweight companion model that runs alongside the main Gemma 4 model. Instead of the large model generating each token sequentially, the drafter quickly "guesses" several [[concepts/tokens|tokens]] ahead (e.g., four [[concepts/tokens|tokens]] at once). The main 31-billion parameter Gemma 4 model then verifies these guessed tokens in a single pass. This process, known as [[concepts/speculative-decoding|speculative decoding]], allows for multiple tokens to be accepted and outputted for the computational [[concepts/cost|cost]] of generating a single token, drastically improving [[concepts/speed|speed]] without compromising [[concepts/output|output]] quality, as the big model always retains the final say.

The video demonstrates the performance improvement with a practical example. [[concepts/running|Running]] a demanding prompt for designing a hospital management system, the Gemma 4 model with the MTP drafter enabled generated [[entities/2048|2048]] tokens in approximately 74.77 seconds, achieving a speed of 27.4 tokens per second. In [[concepts/contrast|contrast]], [[concepts/running|running]] the same prompt without the MTP drafter took 231.53 seconds, resulting in a significantly slower speed of 8.8 tokens per second. This clearly shows the drafter's ability to nearly triple the [[concepts/inference|inference]] speed on the same [[concepts/hardware|hardware]] [[concepts/setup|setup]] (an [[concepts/nvidia-h100|Nvidia H100]] GPU).

The presenter also briefly compares Gemma 4's MTP sequential drafting approach to DFlash's block diffusion drafting. While both use a small drafter to guess and a large model to verify, MTP's sequential [[entities/nature|nature]] means drafting [[concepts/cost|cost]] grows with the number of tokens, offering around a 2x speedup. DFlash, on the other hand, operates by having the small drafter see target hidden states and denoise masked blocks all at once in a single [[concepts/inference|forward pass]], eliminating sequential dependency. This results in higher acceptance rates and a flat drafting cost regardless of the number of proposed tokens, achieving an even greater ~3x speedup.

In conclusion, the MTP drafter models represent a significant performance leap for Google's Gemma 4. By employing a smaller, faster model to propose multiple tokens for the main model to verify in parallel, Google has successfully addressed the initial speed limitations, making Gemma 4 much more efficient for local and production environments. The performance differences observed in the video highlight that integrating such drafting mechanisms is a highly effective [[concepts/innovation|innovation]] for improving [[concepts/llm-inference|LLM inference]] speed.

### Video Description & Links
#### Description
Google just released the official MTP Drafter models for the Gemma 4 family today. In this video we run Gemma 4 31B locally on H100 with the new MTP drafter enabled and [[concepts/feynmans-three-step-scientific-method|compare]] it with DFlash.

🔥 Get 50% Discount on any A6000 or A5000 GPU rental, use following link and coupon:

https://bit.ly/fahd-mirza
Coupon [[concepts/code|code]]: FahdMirza

🔥 Buy Me a Coffee to support the channel: https://ko-fi.com/fahdmirza

#gemma4mtp #gemmamtp #dflash #SpeculativeDecoding 

PLEASE FOLLOW ME: 
▶ LinkedIn:  https://www.linkedin.com/in/fahdmirza/
▶ [[entities/youtube|YouTube]]: https://www.youtube.com/@fahdmirza
▶ Blog: https://www.fahdmirza.com

0:00 Intro
1:31 Installation
2:00 What is MTP and Speculative Decoding
3:40 Speed Comparison Chart
4:25 Code Walkthrough
5:05 Live Demo
7:05 Results

RESOURCES:

▶ https://huggingface.co/google/gemma-4-31B-it-assistant

All rights reserved © Fahd Mirza

#### URLs
- https://bit.ly/fahd-mirza
- https://ko-fi.com/fahdmirza
- https://www.linkedin.com/in/fahdmirza/
- https://www.youtube.com/@fahdmirza
- https://www.fahdmirza.com
- https://huggingface.co/google/gemma-4-31B-it-assistant

## Related Concepts
- [[concepts/speculative-decoding|Speculative decoding]] — [Wikipedia](https://en.wikipedia.org/wiki/Speculative_decoding)
- [[concepts/multi-token-prediction-mtp-drafter-models|Multi-Token Prediction (MTP) drafter models]] — [Wikipedia](https://en.wikipedia.org/wiki/Multi-Token_Prediction_%28MTP%29_drafter_models)
- [[concepts/inference-optimization|Inference speed]] — [Wikipedia](https://en.wikipedia.org/wiki/Inference_speed)
- [[concepts/large-language-model|Large language model family]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model_family)

## Related Entities
- [[entities/google-gemma-4|Google Gemma 4]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Gemma_4)
- [[entities/fahd-mirza|Fahd Mirza]] — [Wikipedia](https://en.wikipedia.org/wiki/Fahd_Mirza)