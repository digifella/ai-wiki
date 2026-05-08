---
wiki-ingested: true
title: "Reinforcement learning - locally"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: training-fine-tuning-evaluation
---
# Reinforcement [[concepts/learning|learning]] - locally

---
---
[[entities/matthew-berman|Matthew Berman]]
<https://www.youtube.com/watch?v=9t-BAjzBWj8>
Here is a detailed [[concepts/summary|summary]] of the video [[concepts/tutorial|tutorial]] on setting up and [[concepts/running|running]] local Reinforcement Learning (RL) using Nvidia and [[concepts/unsloth|Unsloth]].

# Tutorial: Running Reinforcement Learning Locally to Master 2048

**Presenter:** Matthew Berman (in partnership with Nvidia) **Goal:** To teach an AI model ([[entities/gpt-oss|GPT-OSS]]) to master the game **2048** using Reinforcement Learning on a home gaming PC.

* * *

## 1\. Introduction to the Concept

* **The Power of RL:** Reinforcement Learning is the technology behind AI surpassing humans in Chess, Go, League of Legends, and autonomous driving.
* **The Shift:** Previously, RL required massive, expensive [[concepts/compute|compute]] clusters. Thanks to optimizations (Unsloth) and consumer [[concepts/hardware|hardware]] ([[concepts/nvidia-rtx-gpus|Nvidia RTX GPUs]]), this can now be done locally.
* **Specific Technique:** The tutorial uses **Reinforcement Learning with Verifiable Rewards**.
	* _How it works:_ The AI is placed in an environment where it attempts tasks. It is automatically given points (rewards) for success or penalties for failure. Humans are removed from the [[concepts/training|training]] loop, allowing the AI to iterate and learn rapidly.

## 2\. Prerequisites & Hardware

* **Hardware:** An Nvidia RTX GPU.
	* _Note:_ The presenter uses an **RTX 5090**, but emphasizes that any recent Nvidia [[concepts/architecture|architecture]] will work (though speeds may vary).
* **[[concepts/software|Software]] Model:** **GPT-OSS** (OpenAI’s [[concepts/open-source-model|open-source model]]).
* **Optimization Library:** **Unsloth** (An [[concepts/open-source-library|open-source library]] that optimizes [[concepts/fine-tuning|fine-tuning]] and training speed).
* **Operating System:** [[entities/windows|Windows]], utilizing **WSL** (Windows Subsystem for Linux).

* * *

## 3\. Installation Guide (Step-by-Step)

The presenter recommends using WSL (Ubuntu) as the most straightforward installation method.

### A. Drivers and System Setup

1. **Update Drivers:** Ensure Nvidia GPU drivers are up to date via the Nvidia app or website.
2. **Install CUDA Toolkit:** Download and install the CUDA Toolkit 13.1 (Linux/WSL version) from the Nvidia website.
3. **Install WSL (PowerShell):**
	* Open PowerShell and run: `wsl.exe --install --distribution Ubuntu-24.04`
	* Load Ubuntu: `wsl.exe -d Ubuntu-24.04`
4. **Verify GPU [[concepts/connection|Connection]]:**
	* Inside the Linux terminal, run `nvidia-smi` to confirm the GPU is recognized.

### B. Python Environment Setup

1. **Update Packages:** `sudo apt update`
2. **Install Python & Pip:** Run the command to install Python 3, pip, and venv ([[concepts/virtual-environment|virtual environment]] tools).
	* _Command:_ `sudo apt install python3 python3-pip python3-venv -y`
3. **Create Virtual Environment:**
	* Create: `python3 -m venv unsloth_env_rl`
	* Activate: `source unsloth_env_rl/bin/activate`

### C. Install Libraries

1. **Install Torch:** Install PyTorch and Torchvision.
2. **Install Unsloth:** `pip install unsloth`
3. **Install Jupyter:** `pip install jupyter`
4. **Launch:** Run `jupyter notebook` to start the local server.

* * *

## 4\. The Reinforcement Learning Process (Jupyter [[concepts/notebook|Notebook]])

The presenter downloads a specific notebook from the Unsloth website titled **"GPT-OSS (20B) - Auto win [[concepts/2048-game|2048 game]]."**

### A. Loading the Model

* The notebook uses `FastLanguageModel` from Unsloth to load `gpt-oss-20b`.
* **LoRA (Low-Rank Adaptation):** This technique is used to make training efficient. It adds only 1-5% extra [[concepts/weights|weights]] to the model for fine-tuning, reducing memory usage by over 60% while retaining [[concepts/accuracy|accuracy]].

### B. The Environment (The Game)

* The notebook contains Python code for the game 2048 (noted as being written by GPT-5).
* **[[concepts/testing|Testing]]:** The presenter runs code blocks to verify the game logic works (moving tiles with W, A, S, D keys).

### C. The RL Strategy

* **The Prompt:** The model is prompted to "Create a new short 2048 strategy using only native Python code" based on the current board state.
* **The Loop:**
	1. The Model generates a Python function (a strategy).
	2. The System extracts and executes that code against the game.
	3. **Reward Functions:**
		* _Function Works:_ Did the model write valid Python?
		* _No Cheating:_ Did the model try to manipulate the board illegally?
		* _Strategy Succeeds:_ Did the strategy actually win the game or score points?

### D. Training (GRPO)

* The notebook uses **GRPO (Group Relative Policy Optimization)**.
* The model runs through iterations (approx. 1,000 steps set, though fewer are needed).
* **[[concepts/feedback|Feedback]] Loop:** If a strategy yields a high score/win, the model is rewarded. If it fails (syntax error or game over), it is penalized (e.g., Reward score: -1).

* * *

## 5\. Results

* **Before Training:** The model produces generic strategies (e.g., "Always move left") which fail immediately or time out.
* **During Training:**
	* The GPU ramps up ([[concepts/inference|inference]] running at approx. 60% load).
	* The model iterates through failures.
* **After Training (84 Iterations):**
	* The reward score jumps to **10.5**.
	* The game output shows the board achieving the **2048 tile**.
	* The model has successfully learned a Python coding strategy to solve the game based on board states.

* * *

## 6\. Conclusion & Takeaways

* **Time Commitment:** The entire setup and training took approximately **6 hours**.
* **Significance:**
	* This demonstrates that advanced model training is no longer exclusive to massive tech labs.
	* Users can "Reinforcement Learn" models for custom tasks (financial analysis, personalized assistants, complex gaming) entirely offline.
* **[[concepts/privacy|Privacy]] & Control:** Running this locally ensures data privacy and allows for high levels of [[concepts/customization|customization]].
* **Resources:** All code, links, and [[concepts/commands|commands]] are provided in the video description/documentation.
