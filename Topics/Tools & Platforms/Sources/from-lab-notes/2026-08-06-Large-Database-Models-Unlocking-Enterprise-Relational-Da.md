---
wiki-ingested: true
title: "Large Database Models: Unlocking Enterprise Relational Data for AI"
date: 2026-08-06
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: data-pipelines-sync-storage
type: "source-summary"
aliases:
  - "lab-notes/2026-08-06-Large-Database-Models-Unlocking-Enterprise-Relational-Da"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## Large Database Models: Unlocking Enterprise Relational Data for AI
**Clip title:** What Are Large Database Models? AI for SQL Data
**Author / channel:** IBM Technology
**URL:** https://www.youtube.com/watch?v=uU1EP9_4qBU

### Summary
The video introduces Large Database Models (LDMs) as a distinct and crucial advancement in artificial intelligence, differentiating them from [[concepts/large-language-models|Large Language Models]] (LLMs) and Large Reasoning Models (LRMs). While LLMs and LRMs are primarily trained on publicly available text-based data like books, articles, and Wikipedia, LDMs are designed to directly learn from and operate on selected tables and views within relational databases. This distinction is critical because, by estimate, only about 1% of enterprise data ever reaches traditional LLMs, with the vast majority (99%) remaining locked within secure, relational databases. LDMs aim to unlock the full potential of this enterprise data, making AI more useful for day-to-day business operations by enabling it to interact with proprietary, structured information directly where it resides.

The speaker illustrates the inefficiency of traditional data processing for business insights through a customer recommendation example. Conventionally, a data scientist would manually create customer profiles based on historical purchase patterns, then craft rigid SQL queries with predefined constraints (e.g., age, city, beauty spend) to identify similar customers. This process is slow, expensive—with 30-40% of IT budgets often spent just moving data—and introduces security risks as data leaves its protected environment. Furthermore, the rigidity of such queries relies on the data scientist *guessing* which specific fields and values are most relevant for determining similarity, potentially overlooking other crucial factors like gender or recent return history.

LDMs overcome these limitations through a five-step process that transforms raw database data into actionable AI insights. First, a database table is selected. Second, each column is classified as categorical, numeric, or a key, and every value is converted into a "token" and then into a numerical vector through a process called embeddings. Notably, numerical values are first "binned" into clusters (e.g., ages 35-39 become 'B7') to ensure numerically close values are treated as equivalent tokens, and each token is tagged with its column name to maintain context. Third, each row is treated as an unordered "bag of words" (a sentence composed of these column-tagged value tokens). Fourth, a self-supervised neural network is trained on these "row sentences" to learn a vector for each unique token, where values appearing in similar rows are mapped to be close to each other in vector space. Finally, these trained vectors are exposed through SQL, allowing users to query for similarity, dissimilarity, clustering, analogy, and commonality directly within the database.

This innovative approach allows the AI model to run *in place* where the data already lives, significantly reducing data movement costs and security risks. Moreover, anyone proficient in SQL can now ask sophisticated semantic questions of the database without needing a data scientist to preprocess or move data into separate analytics pipelines. IBM's commercial products, such as SQL Data Insights for DB2 for z/OS and SQL Data Insights Pro, exemplify this capability, extending it to unstructured text and offering incremental model refreshes. LDMs are already being applied across various industries, including insurance (predicting successful quotes), fraud detection (flagging unusual transactions), contract analysis (identifying unique agreements), and food & retail (exploring product similarity, like nutritionally similar items). The key takeaway is the democratized access to powerful, in-depth data insights, empowering a broader range of users to leverage AI directly within their enterprise data environments.

### Video Description & Links
#### Description
Learn more about Large Database Models here → https://ibm.biz/~LdYkjFu30

AI isn’t reaching most of your data, until now 🤯. Martin Keen introduces large database models (LDMs) and how they bring AI directly into SQL and relational databases.
Learn how embeddings and semantic queries unlock faster insights without moving your data.

AI was used in the creation of the transcript and metadata for this video.

#ai #sql #data #dataengineering

#### Tags
`IBM`, `IBM Cloud`

#### URLs
- https://ibm.biz/~LdYkjFu30

## Related Concepts
- Large Database Models
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
- Large Reasoning Models — [Wikipedia](https://en.wikipedia.org/wiki/Reasoning_model)
- Relational Data
- SQL — [Wikipedia](https://en.wikipedia.org/wiki/SQL)
- AI — [Wikipedia](https://en.wikipedia.org/wiki/Artificial_intelligence)
- Vector Space — [Wikipedia](https://en.wikipedia.org/wiki/Vector_space)
- Self-supervised Learning — [Wikipedia](https://en.wikipedia.org/wiki/Self-supervised_learning)
- Data Binning — [Wikipedia](https://en.wikipedia.org/wiki/Data_binning)
- Data Security — [Wikipedia](https://en.wikipedia.org/wiki/Data_security)
- Structured Data — [Wikipedia](https://en.wikipedia.org/wiki/Data_model)

## Related Entities
- [[entities/ibm-technology|IBM Technology]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]