---
type: entity
tags:
  - "cyber-security"
  - "cryptography"
  - "steganography"
  - "threat-landscape"
  - "cybersecurity"
  - "data-concealment"
  - "attack-vectors"
  - "defense-mechanisms"
aliases:
  - "InfoSec"
  - "Digital Security"
  - "Computer Security"
  - "Cyber Defense"
summary: Cyber security involves practices, technologies, and processes designed to protect networks, devices, programs, and data from digital attacks, damage, or unauthorized access.
updated: 2026-07-12
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
# Cyber Security

Cyber [[concepts/security|security]] encompasses the practices, technologies, and processes designed to protect networks, devices, [[concepts/software|programs]], and data from digital attacks, damage, or [[concepts/security-exposure|unauthorized access]]. Key domains include [[concepts/vpn|network security]], application security, information security, operational security, disaster recovery, and end-user education.

## Core Concepts & Techniques

- **[[concepts/data-hiding|Data Concealment]]**: Unlike [[concepts/cryptography|cryptography]] which obscures meaning, Steganography hides the existence of the data itself within other media (images, [[concepts/audio-modality|audio]], video).
	- See also: [[lab-notes/2026-06-11-Steganography-Concealment-Detection-and-Hacker-Exploitat|Steganography: Concealment, Detection, and Hacker Exploitation]] for a breakdown of how hackers use file structures to embed secret data.
- **[[concepts/cybersecurity-threats|Attack Vectors]]**: Includes Malware, Phishing, Denial-of-Service (DoS), and Man-in-the-Middle attacks.
- **Defense [[concepts/causes|Mechanisms]]**: Involves Firewalls, Intrusion Detection Systems (IDS), [[concepts/encryption-standards|encryption standards]] (AES, RSA), and multi-factor [[concepts/authentication|authentication]].

## Threat Landscape

Threat actors utilize social [[entities/national-academies|engineering]] and technical exploits to bypass security controls. Recent trends show an increase in supply chain attacks and the use of AI-driven phishing campaigns. Steganography is increasingly used by advanced persistent threats (APTs) to exfiltrate data without triggering [[concepts/anomaly|anomaly]] detection systems that rely on traffic volume or pattern analysis.

## References & Resources

- [[concepts/owasp|OWASP]] Top Ten
- NIST [[concepts/cybersecurity|Cybersecurity]] Framework
- [[concepts/data-hiding|Steganography]] case studies and detection methodologies.
