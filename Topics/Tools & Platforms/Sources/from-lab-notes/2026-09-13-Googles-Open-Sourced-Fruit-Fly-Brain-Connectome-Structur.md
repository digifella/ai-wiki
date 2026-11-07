---
wiki-ingested: true
title: "Google's Open-Sourced Fruit Fly Brain Connectome: Structure and Implications"
date: 2026-09-13
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: developer-tooling-clis
type: "source-summary"
aliases:
  - "lab-notes/2026-09-13-Googles-Open-Sourced-Fruit-Fly-Brain-Connectome-Structur"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## Google's Open-Sourced Fruit Fly Brain Connectome: Structure and Implications
**Clip title:** Google Open-Sourced a Fly Brain
**Author / channel:** Better Stack
**URL:** https://www.youtube.com/watch?v=KOwsVDogscY

### Summary
This video discusses the groundbreaking open-sourcing of [[concepts/malecns-v10|MaleCNS v1.0]], the complete [[concepts/connectome|connectome]] of a male fruit fly's brain and nerve cord, by [[entities/google|Google]] and [[entities/janelia|Janelia]]. This dataset represents a full "wiring diagram" of the fly's brain, mapping every one of its 166,700 neurons and 125 million [[concepts/synaptic-connections|synaptic connections]]. The immediate public reaction, particularly on the internet, has been a blend of awe and humor, leading to various simulated "fly slot" applications: a virtual fly playing Minecraft and Beat Saber, trading cryptocurrency (dubbed "Stonkfly"), engaging in a social network ("Flybook"), and even attempting to play Doom ("Doomfly").

The creation of this connectome involved an incredibly meticulous process. A single fruit fly's brain was sliced into 134,000 sections, each only 8 nanometers thick, and then individually imaged using an electron microscope. Google's team employed a "flood-filling network" algorithm to meticulously trace each neuron across these vast numbers of images, ultimately mapping out every connection and synapse. This detailed map allows for unprecedented visualization of the brain's intricate structure, highlighting regions like optic lobes, the central brain, and descending neurons.

However, a critical distinction is made: the connectome is "wired, not running." This means the dataset provides a static blueprint of connections but doesn't inherently encode how signals propagate or the strength of synaptic interactions. The impressive online demonstrations are achieved by external human-designed systems that interpret visual inputs, feed them as numerical signals into the fly's wiring diagram (with assumed synaptic strengths), and then translate the simulated neural outputs into actions. Reinforcement learning, using "dopamine" reward signals, is often employed to train these systems. Despite not being a sentient fly, the scientific utility is profound, allowing researchers to simulate the effects of altering neural pathways and observe the impact on behavior, replicating real-world experimental results as shown in a courtship behavior study.

The open-sourcing of this data, along with tools like Neuroglancer (a web viewer) and NeuPrint (a query interface with Python/R packages), democratizes access for the global scientific community. This enables extensive research into neural function, the study of brain variations between individuals of the same species, and a deeper understanding of how brain architecture correlates with behavior. While the fruit fly connectome is a massive leap, work is already underway on more complex brains like those of zebrafish and mice. The human brain, with its estimated 86 billion neurons, remains a monumental challenge, but the fruit fly connectome serves as a foundational step in the ambitious endeavor to fully map and understand biological brains.

### Video Description & Links
#### Description
Google and Janelia open-sourced MaleCNS, the complete wiring diagram of a male fruit fly's brain: 166,000 neurons and 125 million synapses. The internet immediately put it in Minecraft, Beat Saber and Doom, gave it $100 to trade Bitcoin, and launched a memecoin with it...

🔗 Relevant Links
Google Research blog: https://research.google/blog/a-connectomics-milestone-mapping-the-complete-male-fruit-fly-brain/

❤️ More about us
Radically better observability stack: https://betterstack.com/
Written tutorials: https://betterstack.com/community/
Example projects: https://github.com/BetterStackHQ

📱 Socials

📌 Chapters:
0:00 - Intro
0:31 - The Internet's Fly Demos
1:36 - Fly Slop
2:34 - What MaleCNS Actually Is
3:00 - How its Made
4:14 - The Catch
5:24 - Real Science

#### Tags
`fruit fly brain`, `connectome`, `malecns`, `google fly brain`, `fly brain minecraft`, `fly brain beat saber`, `fly brain doom`, `fruit fly connectome`, `open source brain map`, `janelia`, `google research`, `brain mapping`, `whole brain emulation`, `brain simulation`, `fly brain memecoin`, `fly slop`, `neuroglancer`, `neuprint`, `flood filling networks`, `electron microscopy`, `giant fiber neuron`, `looming detector`, `reinforcement learning`, `neural network explained`, `ai news`, `tech news`, `neuroscience`, `fly brain explained`

#### URLs
- https://research.google/blog/a-connectomics-milestone-mapping-the-complete-male-fruit-fly-brain/
- https://betterstack.com/
- https://betterstack.com/community/
- https://github.com/BetterStackHQ

## Related Concepts
- [[concepts/connectome|connectome]] — [Wikipedia](https://en.wikipedia.org/wiki/Connectome)
- [[concepts/neural-wiring-diagram|neural wiring diagram]]
- [[concepts/fruit-fly-brain|fruit fly brain]]
- [[concepts/malecns-v10|MaleCNS v1.0]]
- [[concepts/synaptic-connections|synaptic connections]]
- [[concepts/neuroscience-dataset|neuroscience dataset]]
- electron microscopy — [Wikipedia](https://en.wikipedia.org/wiki/Electron_microscope)
- reinforcement learning — [Wikipedia](https://en.wikipedia.org/wiki/Reinforcement_learning)
- computational neuroscience — [Wikipedia](https://en.wikipedia.org/wiki/Computational_neuroscience)
- open-source data — [Wikipedia](https://en.wikipedia.org/wiki/Open_data)
- neural [[concepts/pathway-platform|pathway]] mapping

## Related Entities
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- [[entities/janelia|Janelia]] — [Wikipedia](https://en.wikipedia.org/wiki/Janelia)
- [[entities/better-stack|Better Stack]]
- [[entities/malecns-v10|MaleCNS v1.0]]
- Minecraft — [Wikipedia](https://en.wikipedia.org/wiki/Minecraft)
- Beat Saber — [Wikipedia](https://en.wikipedia.org/wiki/Beat_Saber)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]