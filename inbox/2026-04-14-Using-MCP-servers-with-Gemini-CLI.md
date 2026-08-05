---
wiki-ingested: true
title: "Using MCP servers with Gemini CLI"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: google-ai-ecosystem
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Using [[concepts/mcp-servers|MCP servers]] with [[concepts/gemini-cli|Gemini CLI]]

---
---
<https://www.youtube.com/watch?v=FE1LChbgFEw>

This video demonstrates how to configure and use [[concepts/model-context-protocol|Model Context Protocol]] (MCP) servers, specifically [[concepts/bright-data|Bright Data]], with the Gemini [[concepts/command-line-interface-cli|Command Line Interface (CLI)]] and [[entities/claude-desktop|Claude Desktop]] for enhanced web [[concepts/data-extraction|data extraction]].
**Key Steps and Concepts:**

1. **Initial Check (0:08):** The video starts by showing that the Gemini CLI initially has "No MCP servers configured" when [[concepts/running|running]] the `/mcp` command.
2. **Creating the** `**settings.json**` **File (0:39):**
	To configure MCP servers, a `settings.json` file is required in the `~/.gemini` directory. [[concepts/commands|Commands]] like `mkdir -p ~/.gemini` and `code ~/.gemini/settings.json` (for [[entities/vs-code|VS Code]]) are used to create the directory and open the file.
	
3. **Introducing Bright Data MCP (1:18):**
	The video [[concepts/highlights|highlights]] Bright Data MCP, a service that enables [[concepts/large-language-models|Large Language Models]] (LLMs) and [[concepts/agents|agents]] to access, discover, and extract real-time web data, particularly from websites that are usually hard to scrape (e.g., LinkedIn, [[entities/amazon|Amazon]], [[entities/youtube|YouTube]]). Bright Data is a paid service but offers credits for users to try.
	
4. **Configuring Bright Data in** `**settings.json**` **(1:54):**
	The JSON schema for configuring Bright Data is copied from their documentation. This schema is pasted into the `settings.json` file under an `mcpServers` block. Crucial environmental variables to set within the `env` block are: `API_TOKEN`: Your unique API key from Bright Data. `WEB_UNLOCKER_ZONE`: The specific zone created in Bright Data (e.g., `web_unlocker4`). `BROWSER_ZONE`: Optional, defaults to `mcp_browser`. `RATE_LIMIT`: Optional, sets the request rate limit.
	
5. **Obtaining API Key and Zone from Bright Data (2:35):**
	Users need to sign up/log in to Bright Data. Navigate to "Proxies & [[concepts/scraping|Scraping]]" and create a new "Web Unlocker API" zone. The video recommends enabling "CAPTCHA Solver". After creation, the API Key and Zone Name (e.g., `web_unlocker4`) are provided and should be copied into the `settings.json` file.
	
6. **Verifying Configuration in Gemini CLI (4:07):**
	After saving `settings.json`, restarting the Gemini CLI (`gemini`) is necessary for changes to take effect. Running `/mcp` again now shows "Bright Data - Ready (48 tools)", indicating successful configuration and listing all available [[concepts/web-scraping|web scraping]] tools (e.g., `web_data_youtube_profiles`, `web_data_linkedin_job_listings`, `web_data_amazon_product`).
	
7. **Demonstrating Web Scraping with Gemini CLI (4:50):**
	A query is sent to Gemini CLI: "what are the latest stats of the youtube channel https://www.youtube.com/@engineerprompt . what are the last 10 videos on this channel". Gemini CLI identifies and asks permission to use the `web_data_youtube_profiles` tool from "Bright Data". Upon approval, it successfully extracts and presents YouTube channel statistics (subscribers, total views, videos, creation date) and the last 10 videos with their links and views. The video also shows how to check for errors (Ctrl+O) which revealed a "Too Many Requests" error for the free tier, causing a fallback to Gemini 2.5 Flash model.
	
8. **Understanding Tool Inputs and Limitations (6:19):**
	Pressing Ctrl+T in Gemini CLI shows detailed descriptions of each MCP tool, including their expected inputs (e.g., valid URL, structured text query). The video attempts a more complex query involving searching for "remote [[entities/ai-engineer|AI engineer]] positions" on LinkedIn and Indeed using a query loaded from a `linkedin.txt` file (`@linkedin.txt`). Despite configuring Bright Data, Gemini CLI attempts to use "[[concepts/google-search|Google Search]]" for initial queries, leading to an "API Error: Unexpected line format in response" when trying to parse the results from Google. It's noted that Gemini CLI sometimes struggles to use the specific MCP tools even when configured, often falling back to general Google Search, and there's currently no way to disable default Gemini tools.
	
9. **Configuring Bright Data on Claude Desktop (8:26):**
	The video briefly shows that setting up Bright Data MCP on Claude Desktop is similar. Navigate to Claude > Settings > [[entities/developer|Developer]] > Edit Config, and the `claude_desktop_config.json` file can be edited with the same `mcpServers` block and API key as in Gemini CLI. It's mentioned that Claude Desktop handled the LinkedIn scraping task successfully, unlike Gemini CLI in the direct demo.
	

The video concludes by reiterating the utility of MCP servers for real-time web data and thanking Bright Data for their sponsorship. While the Gemini CLI [[concepts/integration|integration]] is still evolving and has some quirks (like defaulting to Google Search), it provides a powerful way to enhance LLM [[concepts/capabilities|capabilities]] with real-time web access.
