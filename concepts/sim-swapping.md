---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "sim-swapping"
  - "phone-security"
  - "account-takeover"
  - "identity-theft"
  - "two-factor-authentication"
  - "mobile-security"
aliases:
  - "SIM swap"
  - "SIM jacking"
  - "SIM hijacking"
summary: A social engineering attack where an attacker convinces a mobile carrier to transfer a target's phone number to a SIM card under the attacker's control.
updated: 2026-07-12
group: privacy-security-guardrails
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Sim Swapping

Sim swapping is a social [[entities/national-academies|engineering]] attack in which an attacker contacts a mobile carrier and convinces customer service representatives to transfer a target's phone number to a new SIM card controlled by the attacker. By impersonating the target or exploiting weak [[concepts/authentication|identity verification]] procedures, the attacker gains the ability to receive calls and text messages intended for the victim. This access is then leveraged to compromise other accounts and services that rely on the phone number for authentication.

## Attack Mechanics

The attack typically begins with reconnaissance. The attacker gathers personal information about the target—such as name, address, account number, or [[concepts/security|security]] question answers—through public sources, data breaches, or social media. Armed with this information, they [[entities/contact|contact]] the victim's mobile carrier, often claiming they have lost or damaged their SIM card, switched devices, or are traveling internationally. They request that the carrier port the phone number to a new SIM. If the carrier's [[concepts/verification|verification]] procedures are inadequate, the request is approved without alerting the legitimate account holder.

## Impact and Use Cases

Once the attacker controls the victim's phone number, they can intercept one-time passwords (OTPs) and verification codes sent via SMS or [[concepts/tone|voice]] call. This allows them to reset passwords on [[entities/email|email]] accounts, cryptocurrency exchanges, banking platforms, and other sensitive services. Sim swapping has been used to compromise cryptocurrency wallets, steal from financial accounts, and access personal data. The attack is particularly effective against high-profile targets and individuals with valuable digital assets.

## Mitigation

Mobile carriers have begun implementing stronger authentication measures, including verbal or in-person verification requirements for number transfers, account PINs, and restricted account settings that prevent unauthorized changes. Users can reduce risk by avoiding the use of SMS for critical authentication, enabling additional security features offered by their carrier, and using authenticator [[concepts/apps|apps]] instead of SMS-based two-factor authentication where possible.
