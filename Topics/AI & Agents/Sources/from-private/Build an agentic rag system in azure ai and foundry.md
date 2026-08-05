---
wiki-ingested: true
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=xXTuxKdzZrI>
[[entities/azure|Azure]] [[concepts/innovation|Innovation]] Station channel

Here is a [[concepts/markdown|markdown]] guide based on the video [[concepts/tutorial|tutorial]] for creating an AI [[entities/agent|Agent]] using Agentic RAG ([[concepts/traditional-rag|Retrieval-Augmented Generation]]) in [[entities/microsoft|Microsoft]] Azure.

* * *

# How to Create an Agentic RAG AI Agent in Azure

This guide outlines the process of setting up an AI agent that uses Retrieval-Augmented Generation (RAG) to [[concepts/solution|answer]] questions based on specific documents ([[concepts/e-books|e-books]]) rather than general knowledge.

## Prerequisites

* An active [[concepts/azure-subscription|Azure Subscription]].
* Access to the [[concepts/azure-portal|Azure Portal]].

* * *

## Step 1: Create a [[concepts/microsoft-foundry|Microsoft Foundry]] Resource

1. Navigate to the **Azure Portal**.
2. Create a new [[concepts/resource-group|resource group]] (or use an existing empty one).
3. Search for and create a **Microsoft Foundry** resource.
	* _Note: Previously known as [[concepts/azure-ai|Azure AI]] Foundry._
4. **Configuration:**
	* **Name:** `msfoundry-ais-eastus2-demo-agenticrag` (or similar).
	* **Region:** East US 2 (recommended for model availability).
	* **Project Name:** Leave as default (e.g., `proj-ais-demo...`).
5. Click **Create**.

## Step 2: Create and Configure the Agent

1. Once deployed, click **Go to Foundry portal**.
2. In the Foundry portal, verify you are in the "New Foundry" experience.
3. Go to the **Build** tab and click **Create Agent**.
4. **Agent Details:**
	* **Name:** `e-book-agent`.
	* **Model:** The system defaults to **[[concepts/gpt-41|GPT-4.1]]** (You can deploy other models via the "Models" tab if desired).
5. **System [[concepts/prompting|Prompting]]:**
	* In the instructions pane, ask the AI to generate a restrictive prompt:
		"Create a system prompt that [[entities/will|will]] encourage our AI agent to only pull from an [[concepts/ai-search|AI search]] [[concepts/knowledge-base|knowledge base]] with the ebook data that we upload."
		
	* **Copy the generated prompt** and paste it into the **Instructions** field.
	* **Save** the agent.

## Step 3: Set Up Data [[entities/storage|Storage]]

1. Return to the **Azure Portal** (Resource Group).
2. Create a **Storage Account**.
	* **Performance:** Standard.
	* **Redundancy:** LRS (Locally-redundant storage) is sufficient for demos.
3. Once created, go to the Storage Account resource.
4. Navigate to **Data storage** -> **Containers**.
5. Create a new container named `e-book-container`.
6. **Upload Data:** Upload your PDF documents (e.g., _Boundaries_ by Cloud/Townsend, _The E-Myth Revisited_ by Gerber).

## Step 4: Set Up Azure AI Search

1. In the Azure Portal, create an **Azure AI Search** resource.
2. **Configuration:**
	* **Name:** `aisearch-ais...`
	* **Pricing Tier:** **Basic** (Required for semantic ranking and storage limits; costs ~$75/mo).
3. Click **Create**.

## Step 5: Index the Data

1. Go to your **Azure AI Search** resource.
2. Click **Import Data**.
3. **Data Source:** Choose **Azure Blob Storage**.
	* Select the storage account and container created in Step 3.
4. **Vectorization (RAG):**
	* **Kind:** Azure AI Foundry (Preview).
	* **Project:** Select the project created in Step 1.
	* **Model:** Select `text-embedding-3-small` (auto-deployed by Foundry).
5. **Enrichment:**
	* Check **Enable semantic ranker** (improves search relevance).
6. **Index Configuration:** Review fields (`chunk_id`, `parent_id`, `vector`, `title`).
7. **Indexer:** Name it `e-book-agenticrag-indexer` and click **Create**.
8. _Wait for the indexer status to change to "Success"._

## Step 6: Connect Knowledge to Agent

1. Return to the **Microsoft Foundry Portal**.
2. Select your `e-book-agent`.
3. Go to the **Knowledge** section (or "Tools").
4. Click **Add** -> **Azure AI Search**.
5. **Connect Resource:**
	* Select the Azure AI Search resource created in Step 4.
	* Select the Index created in Step 5 (`e-book-agenticrag`).
6. Click **Add**.

## Step 7: Test the Agent

You can now test the agent in the "Playground" or chat window within Foundry.
**Example Query:**

> "What is the [[concepts/slms|definition]] of a boundary according to John Townsend and Henry Cloud?"

**Expected Result:** The agent should provide an answer derived _only_ from the uploaded PDF and cite the specific document as a reference.

* * *

## Step 8: [[concepts/integration|Integration]] (Optional)

* **[[concepts/code|Code]]:** Use the "View Code" button to get [[entities/python|Python]], JavaScript, or C# snippets to run the agent in your own application.
* **Publish:** Use the "Publish" button to deploy the agent to Microsoft Teams or [[entities/copilot|Copilot]].

## Related Concepts
- [[concepts/agentic-rag|Agentic RAG AI Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_RAG_AI_Agent)
- [[concepts/vector-store|Retrieval-Augmented Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval-Augmented_Generation)
- [[concepts/azure-innovation-station|Azure Innovation Station]] — [Wikipedia](https://en.wikipedia.org/wiki/Azure_Innovation_Station)

## Related Entities
- [[entities/azure-portal|Azure Portal]] — [Wikipedia](https://en.wikipedia.org/wiki/Azure_Portal)
- Microsoft Foundry Resource — [Wikipedia](https://en.wikipedia.org/wiki/Microsoft_Foundry_Resource)