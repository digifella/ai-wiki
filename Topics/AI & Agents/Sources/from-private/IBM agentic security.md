---
wiki-ingested: true
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

https://www.youtube.com/watch?v=wiU7VEvi1LM
The video provides an overview of challenges and strategies for secure identity propagation within agentic systems, particularly relevant with the increasing [[concepts/adoption|adoption]] of Generative AI (GenAI) and Retrieval Augmented Generation (RAG) models.
**Core Challenges:** The [[entities/speaker|speaker]] outlines three primary challenges when dealing with identity in these evolving systems:

1. **Propagating Identity:** How to effectively carry a user's identity across various components within an agentic [[concepts/workflow|workflow]].
2. **User Permissions:** Determining what actions a user is authorized to perform ("what can user do?").
3. **Trust in Identity:** How to ensure the identity remains trustworthy as it propagates through multiple layers and agents in a system, especially when dealing with "transitive trust."

**Delegation Patterns:** The video illustrates the evolution of identity propagation through several patterns:

* **No Delegation:** In the simplest scenario, a user connects to an application, which then independently connects to a database using its own credentials. The database has no knowledge of the end-user's identity.
* **Trusted Assertion:** A user authenticates against an Identity Provider (IdP). The application then receives an assertion of the user's identity from the IdP and uses this assertion to inform the database about the user's privileges. The application effectively "asserts" who the user is to the database.
* **Simple Delegation:** Similar to trusted assertion, but instead of just asserting identity, a token representing the user's authenticated session is passed from the IdP to the application and then to the database. This token encapsulates the user's privileges.
* **On-behalf of Delegation:** This pattern introduces agents that act on behalf of a user. Both the user and the [[entities/agent|agent]] possess their own identities and privileges. The agent is trusted by the user to perform actions on their behalf. The challenge here is when a malicious actor impersonates a legitimate user to gain unauthorized privileges.
* **Multiple IdPs:** This extends the "on-behalf of" delegation across different organizational boundaries, each potentially having its own Identity Provider. This significantly complicates trust management as identities need to be propagated and trusted across distinct domains.

**Strategies for Secure Identity Propagation:** To address these challenges, especially in complex agentic flows, the speaker proposes several strategies:

1. **Use OAuth2/OIDC (OpenID Connect):** Adhering to industry standards for [[concepts/authorization|authorization]] (OAuth2) and authentication (OpenID Connect) provides a common and robust framework for managing identities and privileges.
2. **Token Exchange:** Instead of simply passing a single token through every hop, the strategy suggests performing a token exchange at each node or agent in the flow. This involves validating the incoming token and exchanging it for a new token tailored for the next hop. This process verifies the identity at each stage and establishes trust along the path.
3. **Leverage Context, Scope, and Audience:** As tokens are exchanged, their "scope" (what actions are allowed) should be progressively narrowed to only what is necessary for the next hop. Additionally, tokens should include an "audience" claim, specifying the intended recipient of the token, which helps prevent unauthorized use.
4. **Connect via APIs (API Gateways):** Utilizing API gateways to manage connections between agents and systems centralizes the responsibility of token exchange and [[concepts/secure|security]]. This offloads the complexity from individual developers and provides a single point for enforcing security [[concepts/policies|policies]].
5. **Monitor:** Continuous monitoring of agentic flows is crucial for [[concepts/compliance|compliance]] and security. By observing and analyzing the flow of identities and tokens, organizations can detect and respond to any anomalous or malicious behavior.

## Related Concepts
- [[concepts/identity-propagation|Identity Propagation]] — [Wikipedia](https://en.wikipedia.org/wiki/Identity_Propagation)
- [[concepts/user-permissions|User Permissions]] — [Wikipedia](https://en.wikipedia.org/wiki/User_Permissions)
- [[concepts/generative-ai|Generative AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Generative_AI)
- [[concepts/vector-store|Retrieval Augmented Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval_Augmented_Generation)
- [[concepts/agentic-systems|Agentic Systems]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_Systems)
- Transitive Trust — [Wikipedia](https://en.wikipedia.org/wiki/Transitive_Trust)
- Delegation Patterns — [Wikipedia](https://en.wikipedia.org/wiki/Delegation_Patterns)
- Token Exchange — [Wikipedia](https://en.wikipedia.org/wiki/Token_Exchange)
- OAuth2/OIDC — [Wikipedia](https://en.wikipedia.org/wiki/OAuth2/OIDC)
- Context, Scope, and Audience — [Wikipedia](https://en.wikipedia.org/wiki/Context%2C_Scope%2C_and_Audience)
- API Gateways — [Wikipedia](https://en.wikipedia.org/wiki/API_Gateways)
- Continuous Monitoring — [Wikipedia](https://en.wikipedia.org/wiki/Continuous_Monitoring)

## Related Entities
- [[entities/ibm|IBM]] — [Wikipedia](https://en.wikipedia.org/wiki/IBM)