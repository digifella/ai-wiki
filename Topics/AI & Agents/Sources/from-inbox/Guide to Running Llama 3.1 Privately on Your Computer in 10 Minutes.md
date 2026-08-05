---
wiki-ingested: true
domain: entertainment-games
group: individual-sports-performance
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=entertainment-games name=Entertainment & Games

Guide to Running [[entities/llama3-1|Llama 3.1]] Privately on Your Computer in 10 Minutes  
**Clip title:** Run New Llama 3.1 on Your Computer Privately in 10 minutes  
**Author / channel:** [[entities/skill-leap-ai|Skill Leap AI]]  
**URL:** [https://youtu.be/1xdneyn6zjw](https://youtu.be/1xdneyn6zjw)

**Overview**  
This video is a step-by-step [[concepts/tutorial|tutorial]] on how to install and run [[entities/meta-ai|Meta]]’s LLaMA 3.1 models locally on your own computer. By running the AI locally, users can ensure complete [[concepts/privacy|privacy]] and operate offline without needing a Wi-Fi connection. The creator walks through a 5-step process to set up the models and attach them to a user-friendly, [[concepts/chatgpt-style-interface|ChatGPT-style interface]] called [[concepts/open-webui|Open WebUI]].

**Step 1: Install [[entities/llama|Ollama]]**  
The first step is to download the [[concepts/software|software]] that runs the models. The creator navigates to **ollama.com**, downloads the application (available for Mac, [[entities/windows|Windows]], and Linux), and installs it like a standard program.

**Step 2: Install LLaMA via Terminal**  
Once Ollama is installed, the user must open their computer's Terminal (or Command Prompt on Windows). The user pastes a simple command provided by the Ollama website (e.g., ollama run llama3) and hits enter. This initiates the download and installation of the base model directly to the computer.

**Step 3: Install Additional Models & [[concepts/hardware-requirements|Hardware Requirements]]**  
The creator explains that LLaMA 3.1 comes in three sizes: **8B, 70B, and 405B** (B = billion [[concepts/parameters|parameters]]).

- **8B Model:** Takes up about 4.7 GB of space and requires a modern [[concepts/multi-core|multi-core]] processor and at least 32 GB of [[concepts/ram|RAM]]. It runs quickly and smoothly on most modern laptops.
    
- **70B Model:** Takes up about 40 GB of space and requires significant computing power (ideally 128 GB of RAM and a powerful GPU). The creator tests this on an M3 Mac and [[concepts/notes|notes]] that it struggles and runs very slowly.
    
- **405B Model:** At 231 GB, this massive model is impossible to run on a standard personal computer and requires enterprise-level server hardware.  
    To install specific sizes, you simply copy the run command for that specific model from Ollama's library and paste it into the Terminal.
    

**Step 4: Install [[concepts/docker|Docker]]**  
To get a nice visual interface (rather than just typing in the Terminal), the creator installs **Docker**. By navigating to docker.com, he downloads and installs the application, which is required to run the web interface in the next step.

**Step 5: Install Open WebUI**  
The final step is installing the [[concepts/user-interface|user interface]]. The creator goes to the **Open WebUI** [[entities/github|GitHub]] page, copies the provided installation [[concepts/code|code]], and pastes it into a fresh Terminal window. Once Docker processes the installation, a local network link (localhost:3000) is generated. Clicking this link opens a private, browser-based chat interface.

**Key Features Demonstrated in Open WebUI**

- **ChatGPT-like Experience:** The UI looks and functions similarly to popular AI chatbots, but runs entirely offline.
    
- **Model Switching:** Users can easily toggle between any of the models they have downloaded (e.g., switching from the 8B to the 70B model).
    
- **Document Uploads:** A powerful feature of Open WebUI is the ability to upload private files (like [[entities/python|Python]] code or text documents). Because it runs locally, the AI can read, summarize, and explain these private documents without sending your data to the cloud.