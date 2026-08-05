---
wiki-ingested: true
title: "running Open AI OSS N8N and Ollama locally"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: entertainment-games
group: individual-sports-performance
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=entertainment-games name=Entertainment & Games

# running Open AI OSS [[entities/n8n|N8N]] and [[entities/llama|Ollama]] locally

---
---
<https://www.youtube.com/watch?v=mnV-lXxaFhk>
The video's creator, [[entities/lucas|Lucas]], explains that [[entities/openai|OpenAI]] released its first [[concepts/open-source-model|open-source model]], `gpt-oss`, since `GPT-2`. This model runs locally, costs nothing, and performs comparably to [[concepts/gpt-4|GPT-4]]. Lucas plans to demonstrate how to set it up on a local machine, integrate it with `n8n`, and use it in [[concepts/automated-ai-agents|automated AI agents]] without [[concepts/api-keys|API keys]] or [[concepts/cloud-dependencies|cloud dependencies]].
**The Gameplan:**

1. **Setup n8n locally:** Lucas recommends using [[concepts/docker|Docker]] for easy setup and teardown.
	He directs viewers to the `n8n` Docker documentation page. Prerequisite: Docker Desktop must be installed. Lucas shows how to download it for different operating systems and verify its installation via the terminal. He then executes two Docker [[concepts/commands|commands]] in the terminal: `docker volume create n8n_data`: To create a persistent data volume for `n8n` [[concepts/workflow|workflows]], executions, and debug data. He verifies this by listing Docker volumes. `docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8n`: To spin up and run the `n8n` Docker container, binding the data volume and exposing it on port 5678. After running the command, `n8n` starts, and Lucas navigates to `http://localhost:5678` in his browser to access the `n8n` editor. He completes the initial owner account setup and skips the onboarding session.
	
2. **Install Ollama:**
	Lucas goes to `ollama.com` and downloads the appropriate installer for his macOS system. He demonstrates dragging `Ollama` to the Applications folder (though he already has it installed).
	
3. **Install** `**gpt-oss**` **(using Ollama):**
	Lucas visits `ollama.com/library/gpt-oss` to find the `gpt-oss` model. He copies the command `ollama run gpt-oss:latest` and executes it in his terminal. This downloads the [[concepts/model-weights|model weights]] for `gpt-oss:latest`. Once the download is complete, he tests it by asking `gpt-oss` to write a poem about `n8n`. The model responds quickly, demonstrating its local operation.
	
4. **Hook up Ollama Chat Model inside n8n and start [[concepts/prompting|prompting]]:**
	Lucas returns to `n8n` and first stops the current `Ollama` server in his terminal, as `n8n` needs to connect to the `Ollama` server itself, not the interactive chat. He runs `ollama serve` in a new terminal window to start the `Ollama` server. He creates a new workflow in `n8n`, adding a "Manual Trigger" and an "Ollama Chat Model" node. To connect `n8n` to the `Ollama` server, he needs to change the `Base URL` in the "Ollama Chat Model" credential settings. He finds the correct URL (`http://host.docker.internal:11434`) from the `n8n-io/self-hosted-ai-starter-kit` [[entities/github|GitHub]] repository. After updating the `Base URL` and saving, the connection tests successfully. He then connects a "Basic LLM Chain" node to the "Ollama Chat Model" and adds a "User Message" prompt: "write a Linkedin post comparing n8n vs make.com". Upon executing the workflow, he encounters an error because the model `llama3.2` was not found. He corrects this by selecting `gpt-oss:latest` from the "Model" dropdown in the "Ollama Chat Model" node. He re-executes the workflow. It takes slightly longer but successfully generates a LinkedIn post comparing `n8n` and `make.com` in [[concepts/markdown|markdown]] format. He then extends the workflow by adding a "Chat Trigger" node, an "AI [[entities/agent|Agent]]" node, a "Simple [[concepts/memory|Memory]]" node, a "Think Tool" node, and another "Edit Fields" node. He configures the "AI Agent" to use the "Ollama Chat Model" and "Simple Memory." He adds the "Think Tool." He tests this more complex agent by providing a prompt: "Think deeply about the differences between n8n and make.com and write me a LinkedIn post breaking down the pros and cons of each." The agent successfully executes, utilizes the "Think" tool (as seen in the logs), and generates a comprehensive LinkedIn post.
	

Lucas concludes by highlighting the incredible potential of running powerful [[concepts/ai-models|AI models]] locally for free, opening up new opportunities for AI developers in industries with strict [[concepts/privacy|privacy]] concerns like defense, healthcare, and legal. He encourages viewers to like, subscribe, and join their free School community to access this [[concepts/automation|automation]] template and other AI resources.