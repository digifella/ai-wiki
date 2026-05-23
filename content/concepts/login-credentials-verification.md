---
type: concept
domain: ai-agents
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
updated: 2026-05-23
group: training-fine-tuning-evaluation
---
# Login Credentials Verification

Login credentials [[concepts/verification|verification]] is the process of authenticating user access to the Company Portal by validating company identification details. The primary verification method uses the Australian Company Number (ACN), a unique identifier assigned to all registered companies in Australia by the [[entities/asic-company|Australian Securities and Investments Commission]] (ASIC).

## Verification Process

When accessing the Company Portal, users are required to enter their company's ACN as part of the [[concepts/authentication|authentication]] process. The system [[concepts/cross-references|cross-references]] this ACN against ASIC's official company registry to confirm the company's registration status and validity. Successful verification grants access to portal services, while failed verification attempts prevent login until correct credentials are provided.

## Portal Access

The Company Portal is maintained by ASIC and serves as a centralized platform for company information and services. Access to certain portal functions may be restricted based on the verification outcome and the user's registered role or permissions within the company.
