---
wiki-ingested: true
domain: security-infrastructure
group: data-pipelines-sync-storage
type: "source-summary"
---
<https://www.youtube.com/watch?v=XEiQV4zRC-U>
Here is a [[concepts/markdown|markdown]] summary of the video transcript.

# The Future of Database Search: pg\_textsearch

This video introduces **pg\_textsearch**, an [[concepts/open-source|open-source]] extension for Postgres that brings state-of-the-art [[concepts/bm25|BM25]] ranking and search relevance directly into the database. It eliminates the need for external search engines like Elasticsearch for many [[concepts/use-cases|use cases]], particularly for AI and RAG (Retrieval Augmented Generation) applications.

## The Evolution of Search

The video categorizes search history into three distinct eras:

1. **1st Era: Human-Facing Search:**
	* Users searching for products or blogs.
	* Postgres built-in [[concepts/full-text-search|full-text search]] (`tsvector`, `tsquery`) was sufficient.
	* Scale was relatively small and data was mostly static.
2. **2nd Era: Search for Systems:**
	* Focus on logs, metrics, and event streaming.
	* Ranking mattered less than scale, speed, and aggregation.
	* **Elasticsearch** dominated this era due to its ability to handle massive, constantly changing [[concepts/training-data|datasets]].
3. **3rd Era: AI Native Applications (Current):**
	* Search is used by LLMs ([[concepts/large-language-models|Large Language Models]]), Agents, and RAG systems.
	* **Search Quality is Critical:** If retrieval returns mediocre documents, the AI generates mediocre answers.
	* Modern systems need a combination of **Semantic Search** (Vector/Fuzzy) and **Precision Search** (Keywords).

## The Problem with Native Postgres Search

While Postgres has native full-text search, it relies on `ts_rank` and Boolean matching, which has significant drawbacks for modern applications:

* **Boolean Matching:** It is brittle; if a document misses one keyword, it is excluded entirely.
* **Keyword Stuffing:** It does not prevent ranking manipulation via repeated words.
* **No Length Normalization:** It unfairly favors longer documents regardless of relevance.
* **Lack of Corpus Awareness:** Common words (e.g., "database") are weighted the same as rare, meaningful words (e.g., "pooling").

## The [[concepts/solution|Solution]]: BM25 Algorithm

**pg\_textsearch** implements the **BM25** algorithm, which is the industry standard for search ranking (used by [[entities/google|Google]], [[entities/youtube|YouTube]], etc.). It improves upon standard keyword search in three ways:

1. **Inverse Document Frequency (IDF):** Increases the weight of rare, meaningful terms while downplaying common terms (e.g., "the", "it").
2. **Term Frequency Saturation:** Prevents keyword stuffing. Repeating a term helps up to a point, but eventually yields [[concepts/diminishing-returns|diminishing returns]].
3. **Length Normalization:** Ensures shorter, focused documents can compete fairly with longer documents.

## How to Use pg\_textsearch

The video demonstrates how to implement this using **Tiger Data** (cloud Postgres) and the **[[entities/cursor|Cursor]] IDE** with an MCP ([[concepts/model-context-protocol|Model Context Protocol]]) server to execute queries.

### 1\. Setup

You must first enable the extension in your Postgres database:
```
CREATE EXTENSION pg_textsearch;


```

### 2\. Create an Index

Instead of a standard index, you create a BM25 index on your text column:
```
CREATE INDEX articles_content_idx ON articles
USING bm25(content)
WITH (text_config='english');


```
_Note: This index is transactional. It automatically syncs with the database without external pipelines._

### 3\. Querying

To perform a ranked search, use the `@` operator and the `to_bm25query` function:
```
SELECT id, title,
      content @ to_bm25query('search terms', 'index_name') AS score
FROM articles
ORDER BY score
LIMIT 5;


```

## Hybrid Search

The ultimate goal for AI applications is **Hybrid Search**, which combines:

1. **[[concepts/vector-search|Vector Search]] (pgvector):** For semantic understanding/concepts.
2. **Keyword Search (pg\_textsearch):** For precise term matching.

By keeping both the vector search and the high-quality keyword search inside a single Postgres database, developers can simplify their [[concepts/architecture|architecture]], reduce costs, and improve RAG performance without managing external search infrastructure.

* * *

_The technology showcased is open-source and can be experimented with for free via Tiger Data._

Based on the video, installing the tools on a [[entities/windows|Windows]] PC requires a slightly different approach than Mac or Linux, specifically regarding how the CLI is installed and how environment variables are set in PowerShell.
Here are the specific steps for Windows:

### Prerequisites

The video [[concepts/notes|notes]] that for Windows, the easiest method is to use **Go**.

* **Requirement:** You must have **Go (Golang)** installed on your machine.

### Step 1: Install the CLI using Go

Do not use the `curl` script provided on the website (which is for Mac/Linux). Instead, open your terminal (PowerShell) and run:
```
go install github.com/timescale/tiger-cli/cmd/tiger@latest


```

### Step 2: Login to your Account

Once installed, authenticate the CLI with your Tiger Data account:
```
tiger auth login


```

* Copy the [[concepts/code|code]] provided in the terminal.
* Paste it into the browser window that pops up to authorize.

### Step 3: Securely Store Database Password (PowerShell Specific)

**Crucial Step:** The command provided on the Tiger Data website is formatted for Bash (Linux/Mac). If you paste it directly into PowerShell, it [[entities/will|will]] fail.
You need to convert the command to PowerShell syntax using `$env:`.
**The website will show you something like this (DO NOT RUN THIS):** `TIGER_NEW_PASSWORD='abc123' tiger db save-password project-id`
**You must run this instead (PowerShell Syntax):**
```
$env:TIGER_NEW_PASSWORD='YOUR_PASSWORD_HERE'; tiger db save-password YOUR_PROJECT_ID_HERE


```
_(Replace_ `_YOUR_PASSWORD_HERE_` _and_ `_YOUR_PROJECT_ID_HERE_` _with the actual values shown on your Tiger Data dashboard)._

### Step 4: Install the [[concepts/mcp-server|MCP Server]]

Finally, to connect the database to the Cursor IDE (or other [[concepts/ai-tools|AI tools]]), run:
```
tiger mcp install


```

* Select **Cursor** (or your preferred editor) from the list.
* This will automatically configure the MCP server settings in your editor.

## Related Concepts
- [[concepts/pg-textsearch|pg_textsearch]] — [Wikipedia](https://en.wikipedia.org/wiki/pg_textsearch)
- [[concepts/bm25-ranking|BM25 ranking]] — [Wikipedia](https://en.wikipedia.org/wiki/BM25_ranking)
- [[concepts/search-relevance|search relevance]] — [Wikipedia](https://en.wikipedia.org/wiki/search_relevance)
- [[concepts/postgresql-extension|PostgreSQL extension]] — [Wikipedia](https://en.wikipedia.org/wiki/PostgreSQL_extension)
- [[concepts/ai-workflow|AI applications]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_applications)
- [[concepts/retrieval-augmented-generation-rag|RAG (Retrieval Augmented Generation)]] — [Wikipedia](https://en.wikipedia.org/wiki/RAG_%28Retrieval_Augmented_Generation%29)