---
wiki-ingested: true
domain: ai-agents
group: model-efficiency-compression
---
<https://www.youtube.com/watch?v=pTaSDVz0gok>
This video provides a comprehensive guide on [[concepts/fine-tuning|fine-tuning]] [[concepts/large-language-models|Large Language Models]] (LLMs) using [[entities/python|Python]], specifically tailored for deployment with [[entities/llama|Ollama]].
**1\. What is Fine-Tuning?** Fine-tuning involves taking a pre-trained language model and adapting it to [[entities/microsoft-excel|excel]] at a more specific task.

* **Analogy:** It's akin to [[concepts/training|training]] an experienced chef on your restaurant's particular recipes rather than teaching someone to cook from [[concepts/zero|zero]].
* **How it works:** Instead of training from scratch, you start with a powerful [[concepts/pre-trained-model|pre-trained model]] (like ChatGPT or [[entities/claude-4|Claude]]) that already understands human language. You then feed it examples of your specific use case (e.g., customer service conversations, legal documents, medical records). The model adjusts its existing knowledge to perform better in that specific domain.
* **Fine-Tuning vs. Parameter Tuning:** **Parameter Tuning:** Adjusting settings like temperature or "Top\_K" to change how the model performs (like adjusting a car radio). **Fine-Tuning:** Teaching the model new, specific [[concepts/skills|skills]] (like teaching a car to [[concepts/motivation|drive]] in a completely different neighborhood).

**2\. When to Fine-Tune:** Fine-tuning is beneficial in three main scenarios:

* **Consistent Formatting or Style:** When [[concepts/prompting|prompting]] alone can't achieve the desired consistent output (e.g., specific JSON models, particular [[concepts/writing|writing]] styles).
* **[[concepts/domain-specific-data|Domain-Specific Data]]:** When you have a lot of data unique to your domain that the pre-trained model hasn't naturally encountered (e.g., advanced medical records, internal customer service logs).
* **Cost Reduction:** Using a smaller, specialized fine-tuned model can be more cost-effective than relying on a massive, general-[[concepts/purpose|purpose]] LLM for specific tasks.
* **Key Advantage:** Requires significantly less data and compute power compared to training from scratch (thousands of examples and minutes/hours of training vs. millions of examples and months).
* **Caveat:** Fine-tuning can make models worse at general tasks while improving their specialized capabilities.

**3\. Practical Steps: Fine-Tuning with [[concepts/unsloth|Unsloth]] in [[entities/google|Google]] Colaboratory**
**A. Gathering Data**

* **Importance:** High-quality data is paramount for effective fine-tuning.
* **Format:** The video uses a JSON dataset where each entry has an "input" (e.g., HTML snippet) and an "output" (e.g., structured JSON extracted product information). This format is flexible for various tasks.
* **Tool:** The video uses `Unsloth`, an [[concepts/open-source|open-source]] library known for its speed in fine-tuning LLMs.

**B. Setting up the Environment ([[entities/google-colab|Google Colab]])**

* **Why Colab:** Recommended for its free access to high-end GPUs (like T4 GPUs) for [[concepts/training-process|model training]], which is crucial as local training can be very time-consuming without powerful [[concepts/hardware|hardware]].
* **Steps:** **Connect to Runtime:** Open the provided Colab [[concepts/notebook|notebook]], connect to a T4 GPU runtime. **Upload Data:** Upload your `json_extraction_dataset_500.json` file to the Colab environment. **Install Dependencies:** Run `!pip install unsloth trl peft accelerate bitsandbytes` to install the necessary libraries. Restart the session if prompted.

**C. Fine-Tuning the Model**

* **Load Model & Tokenizer:** Choose a base model (e.g., `"unsloth/Phi-3-mini-4k-instruct-bnb-4bit"`). Load the model and its tokenizer using `FastLanguageModel.from_pretrained`.
* **Preprocess Data:** Define a `format_prompt` function to structure your input and output into a single string (e.g., `### Input: {input}\n### Output: {json_output}<|endofttext|>`). Apply this function to your dataset to create `formatted_data`, and then convert it into a `Dataset` object using `Dataset.from_dict({"text": formatted_data})`.
* **Add LoRA Adapters:** Apply LoRA (Low-Rank Adaptation) adapters to the model using `FastLanguageModel.get_peft_model()`. This allows for efficient fine-tuning by adding small, trainable layers. The video sets `r=64` (LoRA rank for capacity/memory tradeoff) and `lora_alpha=128` ([[concepts/scaling|scaling]] factor).
* **Train the Model:** Initialize the `SFTTrainer` from `trl`, passing the model, tokenizer, and training dataset. Configure `TrainingArguments` (e.g., `per_device_train_batch_size`, `gradient_accumulation_steps`, `num_train_epochs`, `learning_rate`, `output_dir`). Execute `trainer_stats = trainer.train()`. This step's duration depends on dataset size and GPU power (e.g., 10 minutes for 500 examples on a T4 GPU).

**D. [[concepts/testing|Testing]] the Fine-Tuned Model**

* **[[concepts/inference|Inference]] Mode:** Prepare the model for inference using `FastLanguageModel.for_inference(model)`.
* **Test Prompt:** Create a test prompt in the specified message format (e.g., `{"role": "user", "content": "Extract the product information: <div>...</div>"}`).
* **Generate Response:** Use the tokenizer to prepare inputs and then `model.generate()` to get the output.
* **Decode & Print:** Decode the output to see the model's response. The video demonstrates that the fine-tuned model successfully extracts the information in the desired JSON format.

**E. Deploying the Model with Ollama**

* **Save Model in [[concepts/gguf-format|GGUF Format]]:** Save the fine-tuned model in the `gguf` format, which is compatible with Ollama, using `model.save_pretrained_gguf("gguf_model", tokenizer, quantization_method="q4_k_m")`. This process can take a significant amount of time (e.g., 10-20 minutes).
* **Download Model to Local Machine:** After saving, the `.gguf` file [[entities/will|will]] be available in your Colab environment. Use `from google.colab import files` and `files.download(gguf_file)` to download it to your local computer.
* **Create a Modelfile for Ollama:** Create a new directory (e.g., `ollama-test`) on your local machine and place the downloaded `.gguf` file inside. Inside `ollama-test`, create a new file named `Modelfile` (no extension). Edit the `Modelfile` with the following structure (adjusting the `.gguf` filename and template as needed):
	`FROM ./unsloth.Q4_K_M.gguf # Your downloaded model file PARAMETER temperature 0.7 PARAMETER top_p 0.9 PARAMETER stop "<|end_of_text|>" PARAMETER stop "<|user|>" TEMPLATE """<|user|> {{ .Prompt }}<|assistant|> """ SYSTEM """You are a helpful AI assistant."""`
	
* **Add Model to Ollama:** Navigate to your `ollama-test` directory in your terminal. Run `ollama create html-model -f Modelfile` (replace `html-model` with your desired model name).
* **Run and Test Locally:** Verify the model is listed using `ollama list`. Run your fine-tuned model locally using `ollama run html-model`. Paste your test prompt. The model should respond with [[concepts/structured-output|structured output]] based on its fine-tuning.

This process enables you to create and deploy custom, specialized LLMs for your specific tasks directly on your local machine using Ollama.

## Related Concepts
- [[concepts/pre-trained-llms|Pre-trained LLMs]] — [Wikipedia](https://en.wikipedia.org/wiki/Pre-trained_LLMs)
- [[concepts/task-specific-modeling|Task-Specific Modeling]] — [Wikipedia](https://en.wikipedia.org/wiki/Task-Specific_Modeling)
- [[concepts/ollama-deployment|Ollama Deployment]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama_Deployment)

## Related Entities
- [[entities/tech-with-tim|Tech with Tim]] — [Wikipedia](https://en.wikipedia.org/wiki/Tech_with_Tim)
- [[entities/chatgpt|ChatGPT]] — [Wikipedia](https://en.wikipedia.org/wiki/ChatGPT)
- [[entities/claude|Claude]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude)