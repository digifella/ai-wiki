---
title: "Google Gemma 4 MTP Drafters: Accelerating Inference Speed with Speculative Decoding"
date: 2026-05-06
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Google Gemma 4 MTP Drafters: Accelerating Inference Speed with Speculative Decoding
Generated: 2026-05-06 · API: Gemini 2.5 Flash · Modes: Summary

---

## Google Gemma 4 MTP Drafters: Accelerating Inference Speed with Speculative Decoding
**Clip title:** Google Releases Gemma 4 MTP Drafters - Run Locally and DFlash Comparison
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=ak4OUOoOV08

### Summary
This video discusses Google's release of Multi-Token Prediction (MTP) drafter models for the Gemma 4 large language model family, designed to address the previously slow inference speed of the original Gemma 4 models. When Gemma 4 first launched, a significant complaint from the community was its "painfully slow" token generation, as it processed one token at a time, making it less efficient compared to other models of similar size.

The MTP drafter introduces a crucial optimization: a small, lightweight companion model that runs alongside the main Gemma 4 model. Instead of the large model generating each token sequentially, the drafter quickly "guesses" several tokens ahead (e.g., four tokens at once). The main 31-billion parameter Gemma 4 model then verifies these guessed tokens in a single pass. This process, known as speculative decoding, allows for multiple tokens to be accepted and outputted for the computational cost of generating a single token, drastically improving speed without compromising output quality, as the big model always retains the final say.

The video demonstrates the performance improvement with a practical example. Running a demanding prompt for designing a hospital management system, the Gemma 4 model with the MTP drafter enabled generated 2048 tokens in approximately 74.77 seconds, achieving a speed of 27.4 tokens per second. In contrast, running the same prompt without the MTP drafter took 231.53 seconds, resulting in a significantly slower speed of 8.8 tokens per second. This clearly shows the drafter's ability to nearly triple the inference speed on the same hardware setup (an Nvidia H100 GPU).

The presenter also briefly compares Gemma 4's MTP sequential drafting approach to DFlash's block diffusion drafting. While both use a small drafter to guess and a large model to verify, MTP's sequential nature means drafting cost grows with the number of tokens, offering around a 2x speedup. DFlash, on the other hand, operates by having the small drafter see target hidden states and denoise masked blocks all at once in a single forward pass, eliminating sequential dependency. This results in higher acceptance rates and a flat drafting cost regardless of the number of proposed tokens, achieving an even greater ~3x speedup.

In conclusion, the MTP drafter models represent a significant performance leap for Google's Gemma 4. By employing a smaller, faster model to propose multiple tokens for the main model to verify in parallel, Google has successfully addressed the initial speed limitations, making Gemma 4 much more efficient for local and production environments. The performance differences observed in the video highlight that integrating such drafting mechanisms is a highly effective innovation for improving LLM inference speed.

### Video Description & Links
#### Description
Google just released the official MTP Drafter models for the Gemma 4 family today. In this video we run Gemma 4 31B locally on H100 with the new MTP drafter enabled and compare it with DFlash.

🔥 Get 50% Discount on any A6000 or A5000 GPU rental, use following link and coupon:

https://bit.ly/fahd-mirza
Coupon code: FahdMirza

🔥 Buy Me a Coffee to support the channel: https://ko-fi.com/fahdmirza

#gemma4mtp #gemmamtp #dflash #SpeculativeDecoding 

PLEASE FOLLOW ME: 
▶ LinkedIn:  https://www.linkedin.com/in/fahdmirza/
▶ YouTube: https://www.youtube.com/@fahdmirza
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
