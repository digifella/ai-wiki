---
wiki-ingested: true
title: "ResNets: Solving Deep CNN Degradation and Shattered Gradients with Skip Connections"
date: 2026-09-03
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
aliases:
  - "lab-notes/2026-09-03-ResNets-Solving-Deep-CNN-Degradation-and-Shattered-Gradi"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## ResNets: Solving Deep CNN Degradation and Shattered Gradients with Skip Connections
**Clip title:** The most cited paper of the century is a brilliant hack
**Author / channel:** Welch Labs
**URL:** https://www.youtube.com/watch?v=QgH9sr7G13Q

### Summary
The video details a pivotal moment in the history of deep learning: the "degradation problem" encountered in early 2015. Researchers found that increasing the depth of convolutional [[concepts/neural-networks|neural networks]] (CNNs) beyond 20-30 layers led to performance stagnation or even a decrease in accuracy, with a 74-layer model performing worse than an 8-layer counterpart. This was counter-intuitive, as a deeper model should theoretically be capable of learning at least as well as a shallower one by simply passing through the extra layers. However, standard optimization algorithms struggled to find these trivial "identity mappings."

The underlying cause of this issue was identified as the "shattered gradients problem." As [[concepts/neural-networks|neural networks]] became deeper, the mathematical landscape of their millions of parameters became increasingly complex and chaotic, with many local minima. This complexity made the "gradient" – the signal that guides the model's learning process – unreliable and akin to "white noise" in the early layers, preventing effective training. Visualizations of the "loss landscape" showed a smooth, convex surface for shallower networks, but a highly chaotic and non-convex surface for deeper ones, especially in their initial layers.

The groundbreaking solution, introduced in a highly influential 2015 paper by Kaiming He and his team, was surprisingly simple: "skip connections," leading to the creation of Residual Networks (ResNets). These connections involve adding the input of a pair of layers directly to their output, allowing information and gradients to flow more easily across the network by effectively creating a "pass-through" path around complex computational blocks. This architecture dramatically smoothed the loss landscape in early layers, resolving the shattered gradients problem and enabling the training of networks with hundreds or even thousands of layers, which subsequently swept numerous computer vision benchmarks.

The advent of ResNets led to a profound shift in understanding how deep neural networks operate. Subsequent research revealed that ResNet layers could often be deleted or reordered with minimal impact on performance, challenging the traditional view of deep networks as purely hierarchical feature extractors. This introduced the concept of the "residual stream" – a continuous flow of information that layers iteratively refine rather than strictly build upon. More recently, this concept has been extended to modern Transformer architectures, where the residual stream acts as a "working [[concepts/memory|memory]]." Models either implicitly repurpose unimportant image patches or explicitly use "register tokens" to store and manipulate global image information, fundamentally altering how these powerful systems process and retain context.

In conclusion, the simple yet ingenious idea of skip connections in ResNets not only solved a major hurdle in deep learning but also forced a complete reconceptualization of neural network operation, laying the groundwork for the development of virtually all modern AI systems, including [[concepts/large-language-models|large language models]] and diffusion models. This fundamental architectural change, akin to pivotal discoveries in physics, unlocked unprecedented levels of performance and continues to drive the rapid advancements in [[concepts/artificial-intelligence|artificial intelligence]] today.

### Video Description & Links
#### Description
Welch Labs Book: https://www.welchlabs.com/resources/ai-book-ezrzm-msrmc

SECTIONS
0:00 - Intro
1:04 - When Deep Learning Stopped Working
3:17 - Tracing Data Forward
8:18 - The Degradation Problem
9:11 - Probing the Model
13:20 - Loss Landscapes
15:49 - Shattered Gradients
16:39 - Residual Networks
21:22 - Jane Street is a Fascinating Place to Work
23:45 - ResNets Force a New Understanding
25:16 - The Residual Stream
27:52 - Vision Transformers Need Registers
32:18 - AI & Scientific Progress

NOTES
Kaiming He declined to be interviewed for this video, Xiangyu Zhang, and Shaoqing Ren did not respond to our interview requests, and Jian Sun unfortunately passed away in 2022. Our reporting of the development of ResNet is based on close reading of the team’s papers and recorded talks.  

The original ResNet paper used slightly different skip connections (Pre ReLU) than presented here, the ResNet updated their approach in 2016, see “Identity mappings in deep residual networks.”
The loss landscape approach taken here is from Li, Hao, et al. "Visualizing the loss landscape of neural nets."

REFERENCES
Hutson, Matthew, and Richard Van Noorden. "The most-cited papers of the twenty-first century." *Nature* 640 (2025): 589.
Veit, Andreas, Michael J. Wilber, and Serge Belongie. "Residual networks behave like ensembles of relatively shallow networks." *Advances in neural information processing systems* 29 (2016).
He, Kaiming, et al. "Delving deep into rectifiers: Surpassing human-level performance on imagenet classification." *Proceedings of the IEEE international conference on computer vision*. 2015.
He, Kaiming, et al. "Deep residual learning for image recognition." *Proceedings of the IEEE conference on computer vision and pattern recognition*. 2016. (One more citation lol)
He, Kaiming, et al. "Identity mappings in deep residual networks." *European conference on computer vision*. Cham: Springer International Publishing, 2016.
Balduzzi, David, et al. "The shattered gradients problem: If resnets are the answer, then what is the question?." *International conference on machine learning*. PMLR, 2017.
Li, Hao, et al. "Visualizing the loss landscape of neural nets." *Advances in neural information processing systems* 31 (2018).
Darcet, Timothée, et al. "Vision transformers need registers." *International conference on learning representations*. Vol. 2024. 2024.
https://www.youtube.com/watch?v=C6tLw-rPQ2o

PATRONS
Juan Benet, Yan Babitski, AJ Englehardt, Alvin Khaled, Eduardo Barraza, Hitoshi Yamauchi, Jaewon Jung, Mrgoodlight, Shinichi Hayashi, Sid Sarasvati, Dominic Beaumont, Shannon Prater, Ubiquity Ventures, Matias Forti, Brian Henry, Tim Palade, Petar Vecutin, Nicolas baumann, Jason Singh, Robert Riley, vornska, Barry Silverman, Jake Ehrlich, Mitch Jacobs, Lauren Steely, Jeff Eastman, Rodolfo Ibarra, Clark Barrus, Rob Napier, Andrew White, Richard B Johnston, abhiteja mandava, Burt Humburg, Kevin Mitchell, Daniel Sanchez, Ferdie Wang, Tripp Hill, Richard Harbaugh Jr, Prasad Raje, Kalle Aaltonen, Midori Switch Hound, Zach Wilson, Chris Seltzer, Ven Popov, Hunter Nelson, Amit Bueno, Scott Olsen, Johan Rimez, Shehryar Saroya, Tyler Christensen, Beckett Madden-Woods, Darrell Thomas, Javier Soto, U007D, Caleb Begly, Rick Rubenstein, Brent Hunsaker, Dan Patterson, Tchsurvives, Alex Adai, Walter Reade, Zyansheep, Walter Reade, Duncan Stannett, Reginald Carey, Jean-Manuel Izaret, dh71633, Adrian Rodriguez, Dimitar Stojanovski, Michael Harder, Peter Maldonado, Emily Pesce, David Johnston, Insang Song, FaeTheWolf, Stephen Taylor, KittenKaboodle, EMatter, PATRICKMCCORMACK, John Beahan, Cameron, Cole Jones, Garrett Thornburg, Jeroen W, Rohit Sharma, GlennB, Emmanuel Cortes, Katie Quinn, Karina C, Cakra WW, Mike Ton, Eric Gometz, MacCallister Higgins, Niko Drossos, David Eraso, Tom Zehle, Steve, Brian Lineburg, rjbl, Michael Loh, Perry Vais, Bengal0, Farhad Manjoo, Sara Chipps, Ellis Driscoll, William Taysom, Will Harmon, CK, Abdullah, Peter Cho, Leo Nikora, Griffin Smith, Ash Katnoria, Alex, Markus Hays Nielsen, Catherine H., Vi, David Dobáš, Peter Wang, Sina Sohangir, Danny Thomas, Julian Francis, Hans Adler, Jiayu Peng, Weston M, Youssouf da Silva, John Thomas, Samuel Costello, Sam Adams, Bryan Liles, Malaya Zemlya, Karl, Vahe Andonians, Mike Doughty, Larry Novelo, Jonas Acres, Ludicrum Rex, Robert Blumofe, Anthony Z, Alex Zhao, Dan Babitch, Nikko Patten, Sam Adams, Rahul Ravu, Marco Salvi, Ralph Dratman, Brendan Ardagh, Mindaugas Kazlauskas, Ui, John Posada, MingLLM | Yiming Beckmann, Eric Younge, Puyu He, KirkDCO, Hayk Tarkhanyan, Vincent Cosomano, Jazon Jiao

Created by: Sam Baskin, Pranav Gundu, Matthew Cohen, and Stephen Welch
Content ID: CFAQJOTYQHT7JYIT

#### URLs
- https://www.welchlabs.com/resources/ai-book-ezrzm-msrmc
- https://www.youtube.com/watch?v=C6tLw-rPQ2o

## Related Concepts
- [[concepts/resnets|ResNets]] — [Wikipedia](https://en.wikipedia.org/wiki/Residual_neural_network)
- [[concepts/deep-cnn-degradation|deep CNN degradation]]
- [[concepts/shattered-gradients|shattered gradients]]
- [[concepts/resnets|skip connections]] — [Wikipedia](https://en.wikipedia.org/wiki/Residual_neural_network)
- [[concepts/convolutional-neural-networks|convolutional neural networks]] — [Wikipedia](https://en.wikipedia.org/wiki/Convolutional_neural_network)
- [[concepts/shattered-gradients|gradient flow]] — [Wikipedia](https://en.wikipedia.org/wiki/Vector_field)
- local minima — [Wikipedia](https://en.wikipedia.org/wiki/Maximum_and_minimum)
- working [[concepts/memory|memory]] — [Wikipedia](https://en.wikipedia.org/wiki/Working_memory)
- [[concepts/face-recognition|feature extraction]] — [Wikipedia](https://en.wikipedia.org/wiki/Feature_engineering)
- optimization algorithms — [Wikipedia](https://en.wikipedia.org/wiki/Algorithm)

## Related Entities
- [[entities/welch-labs|Welch Labs]]
- Kaiming He — [Wikipedia](https://en.wikipedia.org/wiki/Kaiming_He)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]