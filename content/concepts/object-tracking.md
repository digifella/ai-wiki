---
type: concept
domain: history-anthropology
updated: 2026-05-23
group: everyday-objects-material-culture
---
# Object tracking

The [[concepts/computer-vision|computer vision]] task of identifying and following objects across consecutive video frames while maintaining their identity and spatial [[concepts/relationships|relationships]].

Core techniques:
- **Feature-based tracking**: Using SIFT, ORB, or deep features for frame-to-frame matching
- **Deep [[concepts/learning|learning]] trackers**: Siamese networks (e.g., SiamRPN), correlation filter-based methods
- **Multi-object tracking (MOT)**: Handling occlusions, identity switches, and scale changes (e.g., SORT, DeepSORT)

Recent advancements focus on integrating spatial-temporal understanding with language [[concepts/models|models]]:

* **[[concepts/videorefer-suite|VideoRefer Suite]]** ([[entities/alibaba|Alibaba]], [[concepts/apache-2-license|Apache 2 license]]): Enhances [[concepts/large-language-model-llm|Large Language Models]] (LLMs) with fine-grained [[concepts/spatial-temporal-object-understanding|spatial-temporal object understanding]], enabling precise object tracking and [[concepts/reasoning|reasoning]] within video sequences. [See: 2026 04 14 [[entities/fahd-mirza|Fahd Mirza]] Videorefer model [[concepts/running|running]] locally]

Related concepts: Video understanding, Multi-object tracking, Spatial-temporal modeling, [[concepts/large-language-models]]
## Source Notes
- 2026-04-08: [[lab-notes/2026-04-08-Agentic-Visual-Reasoning-Enhancing-VLMs-for-Precise-Object-Counting-an|Agentic Visual Reasoning Enhancing VLMs for Precise Object Counting an]] · [▶ source](https://www.youtube.com/watch?v=VFYnD1WREdU)