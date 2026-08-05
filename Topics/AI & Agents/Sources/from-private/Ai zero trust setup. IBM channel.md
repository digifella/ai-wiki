---
wiki-ingested: true
domain: undecided
group: needs-review
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=undecided name=Undecided

https://www.youtube.com/watch?v=d8d9EZHU7fw

Here is a summary of the video **"[[concepts/zero|Zero]] Trust for AI Agents"** featuring Jeff Crume, Distinguished Engineer at IBM, formatted in [[concepts/markdown|Markdown]].

# Zero Trust for AI Agents

**Speaker:** Jeff Crume, IBM Distinguished Engineer **Context:** We have entered the age of "Agentic AI"—systems that do not just think, but act. Agents can talk to APIs, call tools, conduct transactions, move data, and create [[concepts/sub-agents|sub-agents]]. While powerful, this expands the [[concepts/attack-surface|attack surface]] significantly.

* * *

## 1\. What is Zero Trust? (A Refresher)

Jeff argues that Zero Trust is not just a marketing slogan but a necessary [[concepts/secure|security]] [[concepts/architecture|architecture]] for the AI era.

* **Verify $\\rightarrow$ Trust:** Trust follows [[concepts/verification|verification]]; it does not precede it.
* **Just-in-Time (JIT):** Move away from "Just-in-Case" access. Grant [[concepts/user-permissions|access rights]] only when needed and revoke them immediately after.
* **Principle of Least Privilege:** Users/Agents have only the minimum access required to do their job.
* **No Perimeters:** Move away from the "hard crunchy outside, soft chewy center" model. Security controls must be pervasive throughout the system, not just at the edge.
* **Assume Breach:** [[concepts/design|Design]] security under the assumption that the bad guy is _already_ in the network, database, or application.

* * *

## 2\. Transitioning: Traditional vs. Agentic Security

Applying Zero Trust to AI agents requires doing everything we did for humans, plus addressing specific non-human factors.

|     |     |
| --- | --- |
| Traditional Zero Trust | Agentic Zero Trust (The "Plus") |
| **Users:** Verifying human identity (IAM). | **Actors:** Managing **Non-Human Identities (NHI)**. There is a proliferation of these identities compared to humans. |
| **Devices:** Ensuring laptops/phones aren't jailbroken. | **Tools:** Securing the [[concepts/software|software]] tools and APIs the agents call. |
| **Data:** Encryption and micro-segmentation. | **Data Context:** Securing [[concepts/training-data|training data]], [[concepts/user-control|user preferences]], and context prompts from tampering. |
| **Network:** Perimeter and internal security. | **Intent:** verifying that the [[entities/agent|agent]]'s actions match the original user's intentions. |

* * *

## 3\. Threat Modeling an [[concepts/agentic-system|Agentic System]]

In an agentic [[concepts/workflow|workflow]] (Sensing $\\rightarrow$ Thinking $\\rightarrow$ Acting), attackers have several entry points:

1. **Direct Prompt Injection:** Sending inputs designed to break the context and force the agent to act maliciously.
2. **Poisoning:** attacking the "Thinking" phase by manipulating policies, preferences, or the underlying training model.
3. **Interface Attacks:** Inserting malicious [[concepts/code|code]] into API calls, data sources, or tools the agent utilizes.
4. **Credential Theft:** Stealing [[concepts/api-keys|API keys]] or tokens to escalate privileges or create rogue accounts.

* * *

## 4\. The Zero Trust [[concepts/solution|Solution]] for Agents

Jeff outlines a specific architecture to mitigate these threats:

### A. Dynamic Credentials (The Vault)

* **Problem:** Developers often embed static API keys/passwords in code (a major security risk).
* **Solution:** Store Non-Human Identities (NHI) in a **Vault**.
	* Use dynamic secrets (check-in/check-out).
	* Enforce Just-in-Time (JIT) access.
	* Implement Role-Based Access Control (RBAC).

### B. Trusted Tooling

* **Problem:** Agents calling unverified or malicious tools.
* **Solution:** Implement a **Tool Registry**.
	* Only allow agents to use registered, vetted versions of tools/APIs.
	* Ensure "pure ingredients" go into the process.

### C. Inspection & Enforcement (AI Firewall)

* **Problem:** Malicious prompts in or [[concepts/data-leakage|data leakage]] out.
* **Solution:** Deploy an **AI [[concepts/gateway|Gateway]] / Firewall**.
	* Inspect inputs for prompt injections.
	* Inspect outputs for data leakage or improper calls.
	* Block actions that violate policy.

### D. Traceability

* **Problem:** Inability to know _why_ an agent did something after a breach.
* **Solution:** **Immutable Logs**.
	* Logs that cannot be altered by an attacker, ensuring a reliable audit trail.

### E. Scanning

* **Scope:** continuous scanning of the network and endpoints, but also **Model Scanning** to look for latent vulnerabilities hidden within the [[concepts/ai-models|AI models]] themselves.

### F. Human in the Loop (HITL)

* **Kill Switch:** The ability to immediately stop a runaway agent.
* **Throttling:** Rate-limiting actions (e.g., preventing an agent from buying 1,000 items in a minute).
* **Canary Deployments:** "Drop the canary in the coal mine"—test agents in isolated environments before full deployment.

* * *

## Conclusion

Agentic AI multiplies both **power** and **risk**. Zero Trust provides the [[concepts/ai-safety|guardrails]] required to ensure that [[concepts/innovation|innovation]] stays aligned with human intent, keeping the "bad guys" out while allowing autonomous systems to function safely.

## Related Concepts
- [[concepts/agentic-ai|Agentic AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_AI)
- [[concepts/zero-trust|Zero Trust architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/Zero_Trust_architecture)
- [[concepts/just-in-time-jit-verification|Just-in-Time (JIT) verification]] — [Wikipedia](https://en.wikipedia.org/wiki/Just-in-Time_%28JIT%29_verification)
- [[concepts/trust-follows-verification|Trust follows verification]] — [Wikipedia](https://en.wikipedia.org/wiki/Trust_follows_verification)

## Related Entities
- [[entities/jeff-crume|Jeff Crume]] — [Wikipedia](https://en.wikipedia.org/wiki/Jeff_Crume)
- [[entities/ibm|IBM]] — [Wikipedia](https://en.wikipedia.org/wiki/IBM)