---
type: concept
domain: ai-agents
tags:
  - "ai-security"
  - "api-key-theft"
  - "llmjacking"
  - "cybersecurity"
  - "financial-impact"
  - "ibm-research"
  - "unauthorized-inference"
  - "billing-fraud"
  - "credential-compromise"
aliases:
  - "LLMjacking"
  - "AI API Key Compromise"
  - "AI Credential Theft"
summary: Unauthorized access to AI service API keys enabling attackers to run inference workloads, exfiltrate data, and fraudulently consume computational resources at the victim's expense.
updated: 2026-05-23
group: ai-foundations-concepts
---
# AI API Key Theft

Compromise of [[concepts/authentication|authentication]] [[concepts/tokens|tokens]] for [[concepts/ai-technologies|Artificial Intelligence]] services, leading to unauthorized [[concepts/inference|inference]], [[concepts/data-leakage|data leakage]], and billing fraud.

## Overview
Attackers target [[concepts/api-keys|API keys]] to access [[concepts/large-language-model]] endpoints, exploit [[concepts/computational-resources|computational resources]], and manipulate outputs. Threats [[concepts/range|range]] from static credential leaks to active injection campaigns.

## LLMjacking & Financial Impact
- **LLMjacking**: Coined term describing theft of AI keys specifically to run inference workloads, generating direct Financial Liability for the victim.
- **[[entities/ibm|IBM]] Analysis**: [[entities/ibm-technology]] [[concepts/highlights|highlights]] LLMjacking as a primary concern; hackers "stick you with the bill" by maximizing API consumption before detection.
- **Key Areas**: Recent discourse focuses on LLMjacking, AI in advanced [[concepts/cybersecurity]] operations, and economic consequences of key compromise.
- **Source**: [[lab-notes/2026-05-14-LLMjacking-AI-API-Key-Theft-Financial-Impact-and-Evolvin|LLMjacking: AI API Key Theft, Financial Impact, and Evolving Cybersecurity]].

## Vectors & Risks
- Repository leaks, environment variable misconfiguration, and supply chain injection.
- Risk of Prompt Injection, Data Exfiltration, and model manipulation.
- High [[concepts/cost|cost]] of recovery and potential reputational damage.

## Mitigation
- Automated secret detection, regular key rotation, and usage monitoring.
- Least-privilege scoping and [[concepts/anomaly|anomaly]] detection for billing spikes.
