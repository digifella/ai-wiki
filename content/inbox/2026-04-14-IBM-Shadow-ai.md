---
wiki-ingested: true
title: "IBM Shadow ai"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "technology"
  - "onedrive-import"
wiki-ready: true
domain: ai-agents
group: safety-guardrails-governance
---
# [[entities/ibm|IBM]] [[concepts/shadow-ai|Shadow ai]]

---
---
https://www.youtube.com/watch?v=YBE6hq-OTFI in

The video discusses the concept of "Shadow AI" within corporate environments and proposes a strategy to manage it effectively.
**Understanding Shadow AI and its Risks:** The [[entities/speaker|speaker]], [[entities/jeff-crume|Jeff Crume]] from [[entities/ibm-technology|IBM Technology]], [[concepts/highlights|highlights]] that many organizations are unaware of all AI instances [[concepts/running|running]] within their corporate environment, referring to these unauthorized or undiscovered [[concepts/ai-projects|AI projects]] as "Shadow AI." He emphasizes that while employees leverage [[concepts/generative-ai|generative AI]] for various tasks, these unsanctioned projects pose a significant threat. Potential risks include [[concepts/data-leakage|data leakage]] and other [[concepts/security|security]] exposures due to improperly secured AI deployments \[0:35, 0:50\].
**Addressing Shadow AI: Discover, [[concepts/secure|Secure]], and Provide Alternatives:** Crume argues that instead of simply prohibiting AI use (saying "no"), organizations should focus on understanding and managing it (saying "how"). He proposes a three-step approach:

1. **Discover:** Actively identify all instances of AI in the environment, especially those currently unknown \[0:43, 0:50\].
2. **Secure:** Lock down and secure discovered AI deployments to prevent data leakage and other exposures \[0:56, 1:00\].
3. **Provide Alternatives:** Offer sanctioned and secure AI alternatives to employees rather than simply denying their use of unapproved tools \[1:10\].

**Where to Look for AI Deployments:** To discover AI, Crume suggests starting with cloud environments, as large and compute-intensive [[concepts/ai-models|AI models]] are often hosted there. These include major cloud providers like [[entities/azure|Azure]], AWS, GCP, and IBM \[1:46, 2:57\]. Within these environments, organizations should look for:

* **AI Platforms:** Full-blown AI platforms such as Watsonx, [[entities/openai|OpenAI]], and [[entities/anthropic|Anthropic]] \[3:13\].
* **AI [[concepts/models|Models]]:** Pure AI models, often downloaded from [[concepts/open-source|open-source]] platforms like [[entities/hugging-face|Hugging Face]] (e.g., [[entities/llama|Llama]], [[entities/nemotron|Nemotron]], [[entities/gemma|Gemma]]) \[3:40, 3:45\].

**Data and Security Considerations:** Once connections to cloud environments are established, the next step is to look for data associated with AI models, specifically "tuning data" (used for [[concepts/training|training]] and tuning models) and "RAG data" (Retrieval Augmented Generation, additional information used for inferencing) \[4:28, 4:35\]. This discovery process should be automated and visualized to provide clear insights into AI deployments \[5:29, 5:35\].
Crume then outlines critical security concerns:

* **Data Exfiltration:** Unsecured AI deployments, particularly RAG data, can be exploited by malicious actors to extract sensitive information, such as customer databases \[6:20, 6:52\].
* **Poisoning:** Attackers can introduce subtle errors into training or RAG data, which can then propagate through the system and lead to compromised or unreliable model outputs \[7:50, 8:09\].
* **Excessive Agency:** Granting AI applications more privileges than necessary can create vulnerabilities. If a bug exists or a bad actor gains control, excessive agency can lead to unintended modifications or exploitation of the system, underscoring the importance of adhering to the Principle of Least Privilege (PoLP) \[8:33, 9:11\].

**Conclusion:** Ultimately, effectively managing AI requires "visibility and control." Organizations cannot secure what they cannot see. By implementing discovery mechanisms and robust [[concepts/risk-mitigation|security measures]], and by offering secure alternatives, businesses can transform "Shadow AI" into "helpful AI," benefiting the organization rather than posing threats \[10:00, 10:35, 11:00\].