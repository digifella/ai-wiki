---
wiki-ingested: true
title: "Using Gemini via CLI"
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
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

---
---
https://www.youtube.com/watch?v=KUCZe1xBKFM

Here's a breakdown of the video content by [[entities/sam-witteveen|Sam Witteveen]]:

	**0:00 - 0:11: Introduction to [[concepts/claude-code|Claude Code]]:** The speaker introduces [[entities/anthropic|Anthropic]]'s Claude Code, a [[concepts/cli|command-line]] interface for [[concepts/ai-coding-assistance|AI coding assistance]] that has grown significantly since its initial release. He notes its utility for navigating and updating codebases but mentions a common complaint among developers: high API costs.
	
	**0:11 - 0:36: Claude Code Demo:** A demo of Claude Code shows it being used to modify a project. Claude analyzes existing components (LeftSidebar, TopNavBar, ChatArea), outlines a plan to implement [[concepts/conversation-history|chat history]] and a "New Chat" button, and then presents code changes for approval. The speaker accepts these changes, and Claude updates the files.
	
	**0:36 - 0:47: Introducing [[entities/gemini-cli|Gemini CLI]]:** The video transitions to the announcement of [[entities/gemini-ai|Google's Gemini]] CLI, an [[concepts/open-source|open-source]] AI agent that brings Gemini's power directly into the developer's terminal.
	
	**0:47 - 1:13: Gemini CLI Overview and Features (from Google Blog Post):**
		The speaker explains that Gemini CLI is an open-source AI agent, likely influenced by the success of Claude Code.
		
		It offers lightweight access to Gemini and is versatile for various tasks, from content generation to [[concepts/problem-solving|problem-solving]].
		
		It shares technology with Gemini Code Assist, allowing prompt-driven, AI-first coding in both VS Code and the CLI.
		
	**1:13 - 1:21: Gemini Code Assist in VS Code:** A brief visual shows Gemini Code Assist integrated into VS Code, with a chat interface for coding help.
	
	**1:21 - 1:30: Gemini CLI Key Selling Points (Animated Text):** "Introducing Gemini CLI," "An open-source AI agent that brings the power of Gemini directly into your terminal," "It's lightweight yet versatile."
	
	**1:30 - 1:44: Gemini CLI GitHub Repository:** The video shows the google-gemini/gemini-cli GitHub repository, emphasizing its open-source nature ([[concepts/apache-2.0-license|Apache 2.0 license]]).
	
	**1:44 - 2:02: Quickstart and Authentication:** The [README.md](https://README.md) shows prerequisites (Node.js 18+), the npx command to run the CLI, theme selection, and authentication via a personal Google account.
	
	**2:02 - 3:05: Unmatched [[concepts/usage-limits|Usage Limits]]:** The speaker highlights Gemini CLI's free tier: a free Gemini Code Assist license when logging in with a Google account, providing access to [[entities/gemini-2-5-pro|Gemini 2.5 Pro]] with a [[concepts/1-million-token-context|1 million token context]] window. Usage limits are generous: 60 model requests per minute and 1,000 requests per day at no charge. For professional developers needing higher limits or specific models, [[entities/google-ai-studio|Google AI Studio]] or Vertex AI keys can be used.
	
	**3:05 - 3:28: Powerful Models and Built-in Tools:** Gemini CLI offers AI capabilities for code understanding, file manipulation, command execution, and troubleshooting. Its power comes from built-in tools allowing:
		**Grounding prompts with [[concepts/google-search|Google Search]]:** Fetch web pages for real-time context.
		
		**Extending capabilities:** Through [[concepts/model-context-protocol|Model Context Protocol (MCP)]] or bundled [[concepts/plugins|extensions]].
		
		**Customizing prompts and instructions.**
		
		**Automating tasks and integrating with existing [[concepts/workflow|workflows]].**
		
	**3:28 - 3:40: Demo Transition:** Screen displays "Demo" over a code background.
	
	**3:40 - 4:13: Initial Setup Demo:**
		The speaker runs the npx command, which launches the Gemini CLI.
		
		He selects a default theme.
		
		He chooses "Login with Google" for authentication, which opens a browser window for authorization.
		
		Once authorized, the terminal confirms successful setup.
		
	**4:13 - 5:39: Building a Basic Tailwind Card:**
		The speaker prompts Gemini: "lets make a html and js file that shows off the power of tailwind. Makes sure to bring in tailwind from a CDN etc".
		
		Gemini outlines its plan: create index.html with Tailwind CDN and script.js for interactivity, demonstrating a responsive card with text and a button.
		
		Gemini presents the index.html code changes, and the speaker selects "Yes, allow always" for applying changes automatically.
		
		Gemini then generates the script.js file.
		
		The speaker opens the generated index.html in a web browser, showing a simple card with an image, text, and a button that changes color and text when clicked.
		
	**5:39 - 6:29: Building a Cat Cafe Landing Page (Iteration 1):**
		The speaker, finding the previous card "boring," prompts: "this is pretty boring build me a landing page for a cat cafe in San Francisco."
		
		Gemini begins constructing the landing page, outlining a hero section, "Our Cats" gallery, and a menu.
		
		The speaker previews the result in the browser, revealing a full cat cafe landing page named "The Purrfect Cup" with responsive design, embedded images (from Unsplash, as later revealed by Gemini), and menu sections for coffee and pastries.
		
	**6:29 - 7:34: Adding Cat Treats and "About Us" Page (Iteration 2):**
		The speaker requests: "please add some cat treats to the menu and also add an about us page that shows the cafe is owned by a family of MaineCoon cats."
		
		Gemini adds a "Cat Treats" section to the menu in index.html and creates a new about.html page detailing the fictional backstory of the Maine Coon family.
		
		The speaker checks the updated menu (now including "Cat Treats") and navigates to the "About" page, which displays the story but has a placeholder for a Maine Coon image.
		
	**7:34 - 8:01: Fixing the "About Us" Image:**
		The speaker points out the missing Maine Coon family image.
		
		Gemini performs a Google Search for "Maine Coon cat family images" and finds a new, reliable image URL.
		
		It updates the about.html file to replace the broken image link with the new one. The speaker notes the [[concepts/context-window|context window]] usage (down to 98% left).
		
		The "About" page now displays a single large orange cat image, which the speaker humorously notes isn't a "family" but is an improvement.
		
	**8:01 - 8:44: Generating Project Documentation ([GEMINI.md](https://GEMINI.md)):**
		The speaker asks Gemini to "please make the [gemini.md](https://gemini.md)."
		
		Gemini creates a [GEMINI.md](https://GEMINI.md) file providing an overview of the project, including its purpose, key features (responsive design, interactive elements, multi-page structure, fictional narrative), and technologies used (HTML, Tailwind CSS, JavaScript, Google Fonts, Unsplash).
		
		The speaker then opens the generated [GEMINI.md](https://GEMINI.md) file in a separate window to view its contents.
		
	**8:44 - 10:37: Adding a Flask Backend and Running the Application:**
		The speaker asks Gemini to "please add a Flask backend for this using python."
		
		Gemini creates requirements.txt (with Flask) and [app.py](https://app.py) (with Flask routes for index and about pages).
		
		It then creates templates and static directories and moves the HTML and JS files into them, asking for execution permission for each shell command.
		
		Gemini updates index.html to correctly reference the script.js file from the static directory using Flask's url\_for function.
		
		The speaker saves a fact in Gemini's memory: "we are going to run on port 5000".
		
		Gemini then provides instructions on how to install Flask and run the application. The speaker asks Gemini to activate the virtual environment and run the Flask app, which Gemini executes using a combined shell command.
		
	**10:37 - 10:52: Flask App Running:** The Flask application successfully runs on <http://127.0.0.1:5000>. The speaker navigates to it in the browser, showing the cat cafe website fully functional with the Flask backend. He mentions future possibilities like pushing to Cloud Run.
	
	**10:52 - 11:16: Cumulative Stats:** The speaker types /quit to exit the Gemini CLI. The terminal displays "Cumulative Stats" for the session: 15 turns, ~1.15 million input tokens, ~16,500 output tokens, ~4,700 thought tokens, and ~991,700 cached tokens (84.3%).
	
	**11:16 - 12:59: [[entities/hugging-face|Hugging Face]] [[concepts/mcp-server|MCP Server]] Demo:**
		The speaker loads Gemini CLI again and shows that it's using 2 [GEMINI.md](https://GEMINI.md) files and 1 MCP server (the Hugging Face MCP server, previously added).
		
		He lists the configured MCP server and its available tools (hf\_whoami, space\_search, model\_search, paper\_search, dataset\_search, etc.).
		
		The speaker prompts: "find me the latest models from qwen rerankers." Gemini uses the model\_search tool to search Hugging Face for relevant models and displays detailed results including task, library, downloads, likes, and links.
		
		He then prompts: "find me the easy ghibli space." Gemini uses the space\_search tool, asks for permission to execute it, and then returns a list of "Easy Ghibli" spaces from Hugging Face, including descriptions and links.
		
	**12:59 - 13:50: Final Thoughts on Gemini CLI:** The speaker returns to the [README.md](https://README.md) to reiterate Gemini CLI's value. He highlights the documentation sections for commands, configuration, token caching, themes, and tutorials. He re-emphasizes that the biggest advantage is the large number of free API calls available daily, making it highly competitive against other similar tools.
	
	**13:50 - 14:14: Call to Action:** The speaker encourages viewers to like and subscribe, and to leave questions or video suggestions in the comments.
