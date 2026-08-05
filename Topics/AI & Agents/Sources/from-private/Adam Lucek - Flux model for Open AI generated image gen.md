---
wiki-ingested: true
domain: undecided
group: needs-review
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=undecided name=Undecided

<https://www.youtube.com/watch?v=Drw6tnvtA5I>
This detailed summary covers the key aspects of the video, including the goal, the [[concepts/ai-models|AI models]] and techniques used, the tools and setup process, and the results.

* * *

**Video Title:** Training [[entities/flux1|FLUX.1]] ([[entities/black-forest-labs|Black Forest Labs]]) LoRA Adapter on Faces | Low [[concepts/vram|VRAM]] Image Generation
**Main Goal:** To demonstrate how to train [[concepts/ai-image-generation|AI image generation]] models on faces to reliably recreate pictures of a specific person (the speaker, [[entities/adam-luceck|Adam Lucek]], in this case) in various scenarios.
**Key Technologies & Concepts:**

1. **FLUX.1 by Black Forest Labs:**
	A 12 billion parameter rectilinear flow transformer capable of generating high-quality images from text descriptions. Considered a leading [[concepts/open-source|open-source]] image generation model. Has generated significant community interest and commercial applications (e.g., Photo AI .com).
	
2. **LoRA (Low-Rank Adaptation):**
	A parameter-efficient [[concepts/fine-tuning|fine-tuning]] method. Adds additional, small weights (the LoRA adapter) on top of a pre-trained foundation model (FLUX.1). Only these small added weights are trained, making the process very efficient and requiring significantly less VRAM compared to full model fine-tuning. The trained LoRA adapter is a small file that can be plugged in or out of the main FLUX.1 model during [[concepts/inference|inference]].
	
3. **DreamBooth [[concepts/methodology|Methodology]] (Inspired):**
	A technique to personalize text-to-image diffusion models. Involves training with a limited number of input images (typically 3-5, Adam used 10) of a specific subject. A "unique token combination" or "trigger phrase" (e.g., `[trigger]`) is used during training to associate the subject's features with that specific phrase. This allows the model to "hyper-fixate" on activating specific neurons when the trigger is used, reliably recreating the subject.
	

**Tools & Resources:**

1. `**ai-toolkit**` **[[entities/github|GitHub]] Repository:**
	**Primary Training Tool:** `github.com/osiris-ai-toolkit/ai-toolkit` **Advantages:** Designed for efficient training, particularly with low VRAM environments. Unlike other tools (e.g., Diffusers' DreamBooth example), which might require >40GB VRAM (Adam experienced 72GB on an H100 for basic FLUX training), `ai-toolkit` can perform LoRA training on FLUX.1 using only **24GB of VRAM** (e.g., on an RTX 4090), thanks to advanced quantization methods. **Setup:** Clone the repository: `git clone https://github.com/osiris-ai-toolkit/ai-toolkit.git` Navigate: `cd ai-toolkit` Update submodules: `git submodule update --init --recursive` Create/Activate [[concepts/virtual-environment|virtual environment]]: `python3 -m venv venv`, `source venv/bin/activate` Install PyTorch: `pip3 install torch torchvision --index-url https://download.pytorch.org/whl/cu121` Install requirements: `pip3 install -r requirements.txt`
	
2. **[[entities/comfyui|ComfyUI]]:**
	**Primary Inference Tool:** A powerful and modular diffusion model GUI ([[concepts/gui-interface|Graphical User Interface]]). Uses a node-based [[concepts/workflow|workflow]] for advanced stable diffusion pipelines. Supports FLUX models. **Setup:** Can be downloaded as a standalone build ([[entities/windows|Windows]]) or installed manually (Linux/Windows). Adam provides a JSON workflow file (`workflow_adamlora.json`) on his [[entities/hugging-face|Hugging Face]] model page to easily recreate his inference setup.
	

**[[concepts/training-process|Training Process]] (Step-by-Step):**

1. **Data Preparation:**
	Gather 10 PNG images of the subject (Adam used selfies with varied angles and settings). For each image, create a corresponding `.txt` file with the exact same name (e.g., `image_1.png` and `image_1.txt`). Inside each `.txt` file, write a simple descriptive prompt for the image, including the placeholder `[trigger]` where the personalized token [[entities/will|will]] be inserted (e.g., `[trigger] in blue graduation clothes`). Place all images and text files into a dedicated folder (e.g., `lora_me`) within the `ai-toolkit` directory.
	
2. **Configuration File Setup (YAML):**
	Copy the example FLUX LoRA training config file: `ai-toolkit/config/examples/train_lora_flux_24gb.yaml`. Rename it and move it to the root `ai-toolkit` directory (e.g., `train_lora_flux_face.yaml`). Edit the YAML file: `name`: Your desired model name (e.g., "flux\_lora\_face"). `training_folder`: Where output (checkpoints, samples) will be saved (e.g., "output/flux\_lora\_face"). `performance_log_every`: 200 (to view training stats every 200 steps). `device`: "[[concepts/cuda|cuda]]:0" (for the primary GPU). `trigger_word`: Your unique trigger phrase (e.g., "4d4m luc3k" - Adam's leetspeak name). This will replace `[trigger]` in your image prompts. `network type`: "lora". `linear`: 32 (LoRA rank; higher for more complexity like faces, but increases resource usage). `save_every`: 200 (save a checkpoint every 200 steps). `max_step_saves_to_keep`: 4 (keep only the last 4 checkpoints to save disk space). `push_to_hub`: `false` (Adam recommends manual upload). `folder_path`: Path to your image/text data folder (e.g., "./lora\_me"). `caption_ext`: "txt". `shuffle_tokens`: `true` (to diversify training with limited data). `resolution`: 512, 768, 1024 (FLUX handles multiple resolutions). `steps`: 2000 (total number of training steps). `lr`: 4e-4 ([[concepts/learning|learning]] rate, Adam adjusted from default). `skip_first_sample`: `true` (prevents generating very poor initial samples). `quantize`: `true` (enables 8-bit mixed precision for lower VRAM). `model_name_or_path`: "black-forest-labs/FLUX.1-dev" (specifies the base model). Sample Prompts: Modify these to include your `trigger_word` to generate validation images during training, allowing you to monitor progress.
	
3. **Running the Training Script:**
	Ensure you have been granted access to the FLUX.1 model on Hugging Face and have logged in via the `huggingface-cli` tool. Execute the training command: `python run.py train_lora_flux_face.yaml` (using your YAML filename). The script will download necessary components, preprocess images, and begin training. Training 2000 steps on an A100 (40GB VRAM) takes approximately 1 hour and 5 minutes, using ~22GB VRAM.
	

**Results & Observations:**

* The `ai-toolkit` training process saves validation images at specified intervals, allowing visual monitoring of training progress.
* Initial generations may be poor, but quality improves over steps.
* **Over-training can occur:** Beyond a certain point, the general image quality can degrade (e.g., blurry faces), even if the specific facial features become more accurate. This is because the LoRA adapter might start to "over-specialize" and lose the base model's generalization capabilities. This is why reducing the LoRA adapter strength during inference can be beneficial.
* The final trained LoRA adapter is a `.safetensors` file (e.g., `flux_lora_adam.safetensors`), which is relatively small (Adam's was 343.8 MB).

**Inference with ComfyUI:**

1. **Load Workflow:** Open ComfyUI and load the provided JSON workflow file (`workflow_adamlora.json`).
2. **Load Models:** The workflow loads the base FLUX.1 model (e.g., `flux-1-dev.safetensors`). It then loads the trained LoRA adapter (e.g., `flux_lora_adam.safetensors`).
3. **Adjust LoRA Strength:** The `Load LoRA` node includes `strength_model` and `strength_clip` [[concepts/parameters|parameters]]. **Crucial for quality:** If the trained model produces degraded results, reducing these strengths (e.g., 0.70 for model, 1.00 for clip) allows the base FLUX.1 model to contribute more to the overall image quality while still retaining the personalized features from the LoRA adapter. This combats over-training.
4. **Input Prompt:** Enter your desired prompt, including the specific `trigger_word` you trained with (e.g., `4d4m luc3k as a fancy chef in a fancy restaurant...`).
5. **Generate:** Click "Queue Prompt" to generate the image.
6. **Results:** ComfyUI generates the personalized image. Adam shows examples where initial attempts had issues (e.g., hands, background), but after adjusting LoRA strength (e.g., to 70% for the model and 100% for the clip), the output is significantly improved and photo-realistic.

**Overall Conclusion:**
Training personalized AI image generation models with FLUX.1 and LoRA adapters using tools like `ai-toolkit` is efficient and yields impressive results even with limited [[concepts/hardware|hardware]] and [[concepts/training-data|training data]]. The ability to fine-tune LoRA adapter strength during inference in platforms like ComfyUI is key to optimizing output quality and preventing over-[[concepts/specialization|specialization]] artifacts.

* * *

_(Self-correction during the process: Initially, I might just list the tools. But realizing the "detailed" request, I'd go back and add why each tool is important or what its specific advantage is. For instance,_ `_ai-toolkit_`_'s low VRAM usage is a critical detail. Similarly, simply stating "data preparation" isn't enough; explaining the image count, text file naming, and_ `_[trigger]_` _placeholder is crucial for someone trying to follow along.)_ \*(Also, ensure to explicitly mention the overtraining issue and the [[concepts/solution|solution]] of reducing LoRA strength during inference, as this is a key takeaway from the video's [[concepts/problem-solving|problem-solving]] aspect.)\*The video provides a comprehensive guide on training personalized AI image generation models using the FLUX.1 foundation model and LoRA adaptation, emphasizing efficiency for consumer hardware.
**Key Concepts and Technologies:**

1. **FLUX.1 (Black Forest Labs):** A 12-billion-parameter rectilinear flow transformer renowned for high-quality text-to-image generation. It serves as the powerful base model for fine-tuning.
2. **LoRA (Low-Rank Adaptation):** A parameter-efficient fine-tuning method. Instead of training the entire large model, LoRA adds small, trainable weight matrices (the LoRA adapter) that sit on top of the base model. Only these small matrices are updated during training, making the process much faster and less VRAM-intensive.
3. **DreamBooth Methodology:** The approach used for training, inspired by DreamBooth, involves providing a limited set of images of a subject along with a unique "trigger phrase" to personalize the model's output for that specific subject.

**Tools Used:**

1. `**ai-toolkit**` **GitHub Repository:**
	**Primary Training Tool:** Praised for its ability to train FLUX.1 LoRA adapters with significantly lower VRAM requirements (as low as 24GB VRAM on an RTX 4090) compared to other packages like Hugging Face's Diffusers (which might require >40GB for FLUX.1 training). This efficiency is achieved through "fancy fun quantization methods" in the backend. Provides scripts and configurations specifically tailored for FLUX models.
	
2. **ComfyUI:**
	**Primary Inference Tool:** A powerful, node-based GUI for designing and executing advanced stable diffusion pipelines. It supports FLUX models and is used to load and run the trained LoRA adapters.
	

**Detailed Training Process:**

1. **Data Preparation (DreamBooth Inspired):**
	**Images:** Gather a small dataset of images (Adam used 10) of the subject. These images should showcase the subject clearly in various angles, lighting, and poses. **Text Files:** For each image (`image_1.png`, `image_2.png`, etc.), create a corresponding text file with the exact same name (`image_1.txt`, `image_2.txt`, etc.). **Prompts:** Inside each text file, write a simple description of the image, including a placeholder `[trigger]` where the unique trigger word will be dynamically inserted during training. Example: `[trigger] in blue graduation clothes`. Store all image and text file pairs in a dedicated folder (e.g., `lora_me`) within your `ai-toolkit` directory.
	
2. `**ai-toolkit**` **Setup & Configuration:**
	**Environment:** Adam demonstrates the setup on a Linux cloud instance (JupyterLab with an [[entities/nvidia|NVIDIA]] A100 GPU). **Clone & Install:** Follow the installation steps provided in the `ai-toolkit` README ([[concepts/cloning|cloning]], submodules, creating a virtual environment, installing PyTorch, and requirements). **YAML Configuration:** Copy the `train_lora_flux_24gb.yaml` example from `ai-toolkit/config/examples` to the root `ai-toolkit` folder and rename it (e.g., `train_lora_flux_face.yaml`). `**name**`**:** Set a descriptive name for your model (e.g., `flux_lora_face`). `**training_folder**`**:** Specify the output directory for checkpoints and samples (e.g., `output/flux_lora_face`). `**performance_log_every**`**:** Set to 200 steps to monitor progress. `**device**`**:** `cuda:0` (assuming a single GPU). `**trigger_word**`**:** Define your unique word/phrase (e.g., `4d4m luc3k`). This is crucial for [[concepts/personalization|personalization]]. `**network type**`**:** `lora`. `**linear**`**:** 32 (LoRA rank). Higher values (8, 16, 32) capture more complex features like faces accurately. `**save_every**`**:** 200 (save a checkpoint every 200 steps). `**max_step_saves_to_keep**`**:** 4 (keep only the last 4 checkpoints to save space). `**push_to_hub**`**:** `false` (Adam recommends manual upload to Hugging Face). `**folder_path**`**:** Point to your prepared data folder (e.g., `./lora_me`). `**caption_ext**`**:** `txt`. `**shuffle_tokens**`**:** `true` (helps diversify training with small datasets by reordering prompt tokens). `**resolution**`**:** 512, 768, 1024 (FLUX supports multiple resolutions for better generalization). `**steps**`**:** 2000 (total training steps). `**lr**`**:** 4e-4 (Adam adjusted from default for better results with fewer steps). `**skip_first_sample**`**:** `true` (avoids generating low-quality initial samples). `**quantize**`**:** `true` (enables 8-bit mixed precision for VRAM optimization). `**model_name_or_path**`**:** "black-forest-labs/FLUX.1-dev" (the base model). **Sample Prompts:** Customize the predefined sample prompts to include your `trigger_word` to generate specific validation images during training, allowing you to visually assess model progress.
	
3. **Executing Training:**
	Log into Hugging Face via CLI: `huggingface-cli login` (paste your access token). Run the training script: `python run.py train_lora_flux_face.yaml` (using your config filename). The process involves loading components, quantization, and then training. For 2000 steps on an A100, it takes about 1 hour and 5 minutes. Outputs include generated validation images at each `save_every` interval and the `.safetensors` LoRA adapter file (e.g., `flux_lora_adam.safetensors`).
	

**Results and Optimization (Post-Training):**

* **Validation Photos:** The generated images at each checkpoint allow you to observe how the model learns. Early checkpoints might show poor quality, but gradually improve in capturing facial likeness.
* **Overtraining:** The video [[concepts/notes|notes]] that continued training can sometimes lead to a "degeneration" of general image quality (e.g., blurrier features) even as the facial resemblance improves. This means the LoRA adapter becomes too specialized and loses the base model's broader capabilities.
* **Combating Overtraining (LoRA Strength):** During inference, you can combat overtraining by reducing the strength of the LoRA adapter. Adam suggests values like 70% (`strength_model`) to allow the base model's quality to shine through while retaining the learned facial features.
* The final `.safetensors` file is relatively small (Adam's was 343.8 MB), making it easy to share and load.

**Inference using ComfyUI (Node-Based Workflow):**

1. **Load Workflow:** Adam provides a pre-configured ComfyUI workflow JSON file (`workflow_adamlora.json`) on his Hugging Face model page. Load this file into your ComfyUI interface.
2. **Model Loading:** The workflow includes [[concepts/nodes|nodes]] to: Load the base FLUX.1 Diffusion Model. Load the DualCLIPLoader (for the text encoders). Load the VAE (Variational AutoEncoder). **Load LoRA Adapter:** This crucial node points to your saved `.safetensors` file.
3. **Adjust LoRA Strength:** The "Load LoRA" node has adjustable `strength_model` and `strength_clip` parameters. Experimenting with these (e.g., 0.70 for model, 1.00 for clip) allows you to balance facial likeness with overall image quality.
4. **[[concepts/prompting|Prompting]]:** Input your desired text prompt into the CLIP Text Encode (Positive Prompt) node, ensuring you use the same `trigger_word` you trained with.
5. **Generate:** Click "Queue Prompt" to start the image generation.

**Conclusion:**
The video successfully demonstrates a streamlined and VRAM-efficient process for training personalized image generation models. By leveraging LoRA with FLUX.1 and user-friendly tools like `ai-toolkit` and ComfyUI, individuals can create high-quality, custom images without requiring extremely expensive, cutting-edge hardware. The emphasis on careful data preparation and post-training adjustments of LoRA strength highlights [[concepts/best-practices|best practices]] for achieving optimal results.

## Related Concepts
- [[concepts/rectilinear-flow-transformer|rectilinear flow transformer]] — [Wikipedia](https://en.wikipedia.org/wiki/rectilinear_flow_transformer)
- [[concepts/lora-adapter|LoRA adapter]] — [Wikipedia](https://en.wikipedia.org/wiki/LoRA_adapter)
- [[concepts/image-generation-model|image generation model]] — [Wikipedia](https://en.wikipedia.org/wiki/image_generation_model)
- [[concepts/community-interest|community interest]] — [Wikipedia](https://en.wikipedia.org/wiki/community_interest)
- [[concepts/parameter-scaling|parameter scaling]] — [Wikipedia](https://en.wikipedia.org/wiki/parameter_scaling)

## Related Entities
- [[entities/adam-lucek|Adam Lucek]] — [Wikipedia](https://en.wikipedia.org/wiki/Adam_Lucek)
- FLUX.1 by Black Forest Labs — [Wikipedia](https://en.wikipedia.org/wiki/FLUX.1_by_Black_Forest_Labs)