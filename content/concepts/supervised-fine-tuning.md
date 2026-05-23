---
type: concept
domain: ai-agents
summary: A technique for adapting pre-trained language models to specific tasks or domains by updating model weights using labeled input-output pairs.
updated: 2026-05-23
group: training-fine-tuning-evaluation
---
# Supervised Fine-Tuning

A technique for adapting pre-trained language [[concepts/models|models]] to specific tasks or domains by updating [[concepts/model-weights|model weights]] using labeled input-[[concepts/output|output]] pairs. Involves [[concepts/training|training]] on a curated dataset to align [[concepts/model-behavior|model behavior]] with desired outputs while preserving base [[concepts/capabilities|capabilities]].

## Key Implementation Details
- Uses [[entities/hugging-face]]'s [[entities/trl|TRL]] library for efficient supervised [[concepts/fine-tuning|fine-tuning]] (SFT) pipelines
- Requires labeled dataset matching target task (e.g., persona embodiment, domain-specific language)
- Typically involves incremental weight updates rather than full retraining

## Example: Fine-Tuning OSS-20B
- Demonstrated in [[entities/fahd-mirza]]'s [[concepts/tutorial|tutorial]] for training [[entities/oss-20b|OSS-20B]] to embody a specific persona using a small [[concepts/custom-dataset|custom dataset]]
- System: [[entities/ubuntu|Ubuntu]] 22.04 LTS
- Process: [[concepts/custom-dataset|Custom dataset]] → [[entities/hugging-face]] SFT pipeline → Persona-aligned [[concepts/weights|weights]]

2026 04 14 [[entities/fahd-mirza|Fahd Mirza]] fine tuning weights of [[concepts/gpt-oss-20b|OSS 20B]]
## Source Notes

- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-14: Fahd Mirza - fine tuning weights of OSS-20B