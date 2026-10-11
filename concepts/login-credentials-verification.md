---
type: concept
domain: ai-agents
group: training-fine-tuning-evaluation
tags:
  - "login-verification"
  - "company-portal"
  - "acn"
  - "credentials"
  - "asic"
  - "authentication"
aliases:
  - "Company Portal Login"
  - "ACN Verification"
summary: A process for verifying login credentials on the Company Portal using a company's ACN.
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Login Credentials Verification

Login credentials verification is the process of authenticating user access to the Company Portal by validating company identification details against official records. The primary verification method utilizes the Australian Company Number (ACN), a unique identifier assigned to all registered companies in Australia by the Australian Securities and Investments Commission (ASIC). This approach ensures that only authorized representatives of legitimate registered companies can access portal services.

The verification workflow typically involves cross-referencing the provided ACN with ASIC’s public registers to confirm the entity’s current registration status and details. This step validates that the company exists and is active, preventing access by entities that are deregistered or do not exist. By anchoring authentication to a government-issued identifier, the system reduces the risk of fraud and ensures that the organization attempting to log in is legally recognized.

Once the ACN is confirmed, the system verifies the user’s authority to act on behalf of the company. This often requires additional proof of identity or authorization, such as a director’s details or a specific authorization code, to link the individual user to the verified corporate entity. This two-layered verification process—confirming both the company’s legitimacy and the user’s right to access—maintains the integrity of the portal and protects sensitive corporate data.
