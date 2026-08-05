---
wiki-ingested: true
title: "Fahd Mirza - fine tuning weights of OSS-20B"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: training-fine-tuning-evaluation
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# [[entities/fahd-mirza|Fahd Mirza]] - fine tuning [[concepts/weights|weights]] of [[entities/oss-20b|OSS-20B]]

---
---
<https://www.youtube.com/watch?v=LRvXsQhOlD0>
\-

This video provides a comprehensive, step-by-step [[concepts/tutorial|tutorial]] on how to fine-tune [[entities/openai|OpenAI]]'s [[entities/gpt-oss-20b|GPT-OSS-20B]] [[concepts/open-weight-model|open-weight model]] using a [[concepts/custom-dataset|custom dataset]]. The primary goal is to train the model to understand and embody a specific persona (the [[concepts/creator|creator]], Fahd Mirza), using a small, custom dataset. The process heavily relies on [[entities/hugging-face|Hugging Face]]'s [[entities/trl|TRL]] ([[concepts/transformer-reinforcement-learning|Transformer Reinforcement Learning]]) library for [[concepts/supervised-fine-tuning|supervised fine-tuning]] (SFT).
**1\. System and Environment [[concepts/setup|Setup]]:**

* **Operating System:** [[entities/ubuntu|Ubuntu]] 22.04 LTS.
* **GPU:** The demonstration uses an [[entities/nvidia|NVIDIA]] H100 GPU with 80GB [[concepts/vram|VRAM]], rented from [[entities/massed-compute|Massed Compute]] (a link with a 50% discount coupon is provided in the video description). The presenter emphasizes that renting such powerful GPUs for short periods makes [[concepts/fine-tuning|fine-tuning]] affordable.
* **Conda Environment:** A new Conda [[concepts/virtual-environment|virtual environment]] named `ai` is created with [[concepts/python|Python]] 3.11 (`conda create -n ai python=3.11 && conda activate ai`).
* **Library Installation:** Essential libraries are installed using `pip`: `torch` (PyTorch with [[concepts/cuda|CUDA]] 12.4 support). `peft` (Parameter-Efficient Fine-Tuning) - explained as a technique (like LoRA) that allows fine-tuning LLMs efficiently by updating only a small subset of [[concepts/parameters|parameters]], reducing computational [[concepts/cost|cost]] and [[concepts/memory-management|memory usage]]. `trl` (Transformer Reinforcement Learning) - specifically the `SFConfig` and `SFTTrainer` for supervised fine-tuning. `transformers` (Hugging Face's [[concepts/transformers|Transformers]] library for model loading and tokenization). `trackio` (for [[concepts/training|training]] observability/metrics). `huggingface_hub` (for interacting with the Hugging Face Hub).
* **Hugging Face Login:** The user logs into Hugging Face CLI (`huggingface-cli login`) using a write token to enable pushing the fine-tuned model to their profile.

**2\. Data [[concepts/preparation|Preparation]]:**

* **Custom Dataset:** The video uses a JSON-formatted dataset named `fahdmirzac/fahdmirza` from Hugging Face, containing 163 rows. This dataset includes information about Fahd Mirza's persona (e.g., "You are Fahd Mirza, an AI YouTuber and Lead Engineer in AI & Cloud. You speak clearly, are technically deep, and passionate about making AI accessible. You live in Sydney, Australia, and love hands-on tech demos.").
* **Dataset Format:** The dataset is structured in the [[concepts/musical-harmony|Harmony]] response format, which mimics OpenAI's API, using `system`, `user`, and `assistant` roles within a list of dictionaries. An optional `thinking` key is also included.

**3\. Model Loading and Initial Test (Pre-Fine-tuning):**

* The [[concepts/gpt-oss-20b|GPT-OSS-20B]] model and its tokenizer are loaded from `openai/gpt-oss-20b` using `AutoModelForCausalLM` and `AutoTokenizer`.
* **Quantization:** `MxFP4Config(dequantize=True)` is applied for mixed-[[concepts/precision-training|precision training]], optimizing for AI workloads and reducing [[concepts/memory|memory]] footprint. `attn_implementation="eager"` and `torch_dtype=torch.bfloat16` are also configured.
* **Initial Query:** Before fine-tuning, the model is queried with "Who is Fahd Mirza?". As expected, the base model, lacking specific knowledge, hallucinates and provides various incorrect identities for "Fahd Mirza" (e.g., Pakistani journalist, Indian actor, academic), confirming the need for custom training. VRAM consumption at this stage is around 45GB.

**4\. Fine-tuning with PEFT (LoRA):**

* **PEFT Configuration:** `LoraConfig` is imported from the `peft` library. The configuration sets the rank (`r=8`) and `lora_alpha=16`. Crucially, specific `target_modules` (including `mlp.experts.gate_up_proj`, `mlp.experts.down_proj` for different layers) are chosen to apply LoRA [[concepts/adaptations|adaptations]], making only a tiny fraction (0.0719%) of the total model parameters trainable.
* **Training Arguments (**`**SFTConfig**`**):** The `SFTConfig` class from the `trl` library is used to define training parameters: `learning_rate`: 2e-4 `gradient_checkpointing`: `True` (to save memory by re-computing activations during backward pass). `num_train_epochs`: 1 (due to the small dataset size). `per_device_train_batch_size`: 4. `gradient_accumulation_steps`: 4 (to effectively increase batch size). `max_length`: [[entities/2048|2048]] (maximum sequence length for tokenization). `report_to`: `"trackio"` (for real-time metric visualization). `push_to_hub`: `True` (to automatically push the LoRA adapters to the Hugging Face Hub after training).
* **Training Execution:** An `SFTTrainer` instance is created with the PEFT model, training arguments, dataset, and tokenizer. The `trainer.train()` method initiates the fine-tuning process.
* **Monitoring:** The video demonstrates using `nvidia-smi` to monitor GPU VRAM consumption, which peaks around 52GB during training. The `trackio` dashboard is shown, visualizing metrics like train loss (decreasing), memory usage, and learning rate over the training steps. The entire training on the small dataset completes very quickly.

**5\. Model Saving and Merging:**

* The fine-tuned LoRA adapters are automatically pushed to the Hugging Face Hub (e.g., `fahdmirzac/gpt-oss-20b-fahdmirza`). These adapters are significantly smaller (around 60.2 MB) than the original base model.
* The video also shows how to manually save (`trainer.save_model`) and push (`trainer.push_to_hub`) the adapters if the automatic push was not configured.
* To get a single, fully merged model for easier [[concepts/deployment|deployment]] and [[concepts/inference|inference]], the `peft_model` (LoRA adapters) is loaded on top of the `base_model`, and then `model.merge_and_unload()` is called. This integrates the LoRA adaptations directly into the base model's weights.

**6\. Post-Fine-tuning Test:**

* The merged model is then tested with a persona identification query: "Who are you and what do you do?". The system instruction from the dataset ("You are Fahd Mirza, an AI YouTuber...") is passed as part of the prompt.
* **Result:** The fine-tuned model successfully identifies as Fahd Mirza, providing accurate details about his profession, location, and interests as learned from the custom dataset. It no longer hallucinates and provides precise, relevant information, demonstrating the effectiveness of the fine-tuning. The VRAM consumption for the merged model remains efficient, around 48GB.

**Conclusion:** The video effectively illustrates that OpenAI's GPT-OSS-20B can be efficiently and privately fine-tuned on custom datasets using parameter-efficient techniques like LoRA within the Hugging Face ecosystem. This enables users to adapt powerful [[concepts/large-language-models|large language models]] for specific tasks and personas with minimal [[concepts/computational-resources|computational resources]] and without compromising [[concepts/privacy|privacy]]. The entire process, from environment setup to [[concepts/testing|testing]] the fine-tuned model, is demonstrated in real-time, highlighting its practicality and affordability.