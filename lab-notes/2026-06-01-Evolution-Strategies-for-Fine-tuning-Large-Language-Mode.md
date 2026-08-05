---
title: Evolution Strategies for Fine-tuning Large Language Models
date: 2026-06-01
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Evolution Strategies for Fine-tuning Large Language Models
Generated: 2026-06-01 · API: Gemini 2.5 Flash · Modes: Summary

---

## Evolution Strategies for Fine-tuning Large Language Models
**Clip title:** A new way to fine-tune LLMs just dropped
**Author / channel:** bycloud
**URL:** https://www.youtube.com/watch?v=lLkE9w1NJs0

### Summary
The video details the unexpected resurgence of Evolution Strategies (ES) in the field of Artificial Intelligence, particularly for fine-tuning Large Language Models (LLMs), after decades of being considered unsuitable for complex neural networks. Initially, ES, which mimics natural selection through mutation and selection, held great promise for AI development, capable of training agents for tasks like playing Flappy Bird or simulating evolutionary biology. However, with the rise of deep learning and complex architectures like Transformers, CNNs, and RNNs, ES was largely abandoned due to its perceived inability to scale efficiently with models containing millions of parameters.

The core principle of ES involves starting with a model, creating several slightly mutated copies, evaluating their performance (fitness score), and then selectively influencing the next generation of models based on the better performers. This iterative process gradually improves the model over time. ES’s initial downfall for deep learning stemmed from the sheer number of parameters (millions even a decade ago) and their intricate interconnections within neural networks. Randomly perturbing these parameters often led to destructive changes, akin to blindly tweaking millions of knobs, where useful signals were easily buried under noise. Conventional ES methods lacked the mechanisms to efficiently navigate this high-dimensional, non-linear optimization landscape.

A pivotal shift occurred with OpenAI’s 2017 paper, demonstrating that ES could be made scalable for deep neural networks by leveraging massive parallelization. By running thousands of perturbed model copies simultaneously, the random noise could effectively cancel out, revealing the underlying beneficial directions for optimization. More recently, ES has found surprising applicability in LLM fine-tuning, especially for tasks involving sparse or global reward signals, a common characteristic of Reinforcement Learning from Human Feedback (RLHF). Unlike gradient-based methods which require clean, differentiable signals for every step, ES acts as a "black box" optimizer, directly exploring the *parameter space* (making structural changes to the model's reasoning capabilities) rather than just the *action space* (sampling different outputs from an unchanging model). This allows ES to potentially discover novel reasoning behaviors within LLMs.

The "EGGROLL" (Evolution Guided General Optimisation via Low-Rank Learning) paper, published in late 2025, further addresses the computational bottlenecks of applying ES to LLMs with billions of parameters. EGGROLL structured perturbations as low-rank updates (similar to LoRA adapters), significantly reducing the computational cost of evaluating multiple perturbed models. Instead of requiring 30 full forward passes for 30 different models, EGGROLL can evaluate them much more efficiently by reusing most of the original computation. This innovation makes ES highly hardware-friendly and allows for substantially faster iterations. EGGROLL has shown competitive performance against state-of-the-art RL fine-tuning methods like GRPO on various reasoning tasks, often achieving better or comparable accuracy with drastically reduced compute resources. The key takeaway is that ES is proving to be a highly effective and efficient alternative for fine-tuning large-scale models, particularly in scenarios with long-horizon tasks and sparse reward signals, by intelligently exploring the vast parameter space without the complexities of gradient backpropagation.

### Video Description & Links
#### Description
Try Mammouth now for only €10/mo! https://mammouth.ai

Evolution strategies were once seen as too inefficient for modern deep learning, but new LLM fine-tuning research has found a way to bring it back from the museum. This video explains how scalable evolutionary strategies could be for LLMs, and its latest developments.

my latest project: Intuitive AI Academy
We just wrote a new piece on RL & RLHF!
https://intuitiveai.academy/
limited time code "EARLY" for 40% off yearly plan

My Newsletter
https://mail.bycloud.ai/

My Patreon
https://www.patreon.com/c/bycloud

Sauce
[OpenAI paper] https://arxiv.org/abs/1703.03864 
[Evolution Strategies at Scale] https://arxiv.org/abs/2509.24372
[EGGROLL] https://arxiv.org/abs/2511.16652 



Try out my new fav place to learn how to code https://scrimba.com/?via=bycloudAI

This video is supported by the kind Patrons & YouTube Members: 
🙏Spam Maj, Alex, Chris LeDoux, DX Research Group, Poof N' Inu, Deagan, Robert Zawiasa, Ryszard Warzocha, Tobe2d, Louis Muk, Akkusativ, Kevin Tai, Mark Buckler, NO U, Tony Jimenez, Ângelo Fonseca, jiye, Anushka, Asad Dhamani, Binnie Yiu, Calvin Yan, Clayton Ford, Diego Silva, Etrotta, Gonzalo Fidalgo, Handenon, Hector, Jake Disco very, Michael Brenner, Nilly K, OlegWock, Daddy Wen, Shuhong Chen, Sid_Cipher, Stefan Lorenz, Sup, tantan assawade, Thipok Tham, Thomas Di Martino, Thomas Lin, Richárd Nagyfi, Paperboy, mika, Leo, Berhane-Meskel, Kadhai Pesalam, mayssam, Bill Mangrum, nyaa, Toru Mon, Lame Plane, Matej Macak, Len Mo, saylikhapekar, ZyanSheep, THEVIERAOS, Ricardo Raphael Corona-Moreno


[Discord] https://discord.gg/NhJZGtH
[Twitter] https://twitter.com/bycloudai
[Patreon] https://www.patreon.com/bycloud
[Business Inquiries] bycloud@smoothmedia.co
[Profile & Banner Art] https://twitter.com/pygm7
[Video Editor] @aduckchicken2 
[Ko-fi] https://ko-fi.com/bycloudai
Manim Animations created with Manimate https://www.manimate.ai/

#### Tags
`bycloud`, `bycloudai`, `evolution strategies`, `llm evolution`, `llm evolutionary strategies`, `llm evolutionary algorithms`, `evolutionary elgorithms on llms`, `llms evolve`, `llm genetic algorithms`, `genetic algorithm in ai`, `evolutionary algorithm in ai`, `evolutionary algorithms in artificial intelligence`, `EGGROLL`, `evolutionary strategies at scale`, `evolutionary strategies for llm fine tuning`

#### URLs
- https://mammouth.ai
- https://intuitiveai.academy/
- https://mail.bycloud.ai/
- https://www.patreon.com/c/bycloud
- https://arxiv.org/abs/1703.03864
- https://arxiv.org/abs/2509.24372
- https://arxiv.org/abs/2511.16652
- https://scrimba.com/?via=bycloudAI
- https://discord.gg/NhJZGtH
- https://twitter.com/bycloudai
- https://www.patreon.com/bycloud
- https://twitter.com/pygm7
- https://ko-fi.com/bycloudai
- https://www.manimate.ai/
