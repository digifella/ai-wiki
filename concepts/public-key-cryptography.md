---
type: concept
domain: maths-logic-crypto
tags:
  - "public-key-cryptography"
  - "asymmetric-cryptography"
  - "key-pairs"
  - "encryption"
  - "digital-signatures"
  - "cryptographic-protocols"
aliases:
  - "asymmetric cryptography"
  - "PKC"
summary: A cryptographic system using paired public and private keys where the public key encrypts data that only the corresponding private key can decrypt.
updated: 2026-07-12
group: cryptography-codes-ciphers
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Public Key Cryptography

Public key cryptography is a cryptographic system that uses a pair of mathematically linked keys: a public key and a private key. The public key is distributed openly and used to encrypt data, while the private key is kept secret and used to decrypt that same data. This asymmetric design solves a fundamental problem in [[concepts/cryptography|cryptography]]: how two parties can communicate securely without first exchanging a shared secret through a [[concepts/secure|secure]] channel.

The [[concepts/security|security]] of public key cryptography relies on [[concepts/mathematical-problems|mathematical problems]] that are computationally easy in one direction but extremely difficult in the reverse. The most widely used approach, RSA, depends on the difficulty of factoring large composite numbers into their [[concepts/prime-lens|prime]] factors. Other systems use different hard problems, such as the discrete logarithm problem (used in ElGamal and Diffie-Hellman) or elliptic curve [[concepts/mathematics|mathematics]]. The strength of the system depends on key length and the current state of computational capability.

## Common Applications

Public key cryptography enables several critical security functions. Digital signatures allow a sender to prove they created a message by encrypting it with their private key; recipients verify authenticity by decrypting with the sender's public key. Secure key exchange protocols, like Diffie-Hellman, allow two parties to establish a shared secret over an insecure channel. Public key infrastructure (PKI) systems use certificates to bind public keys to identities, forming the foundation of HTTPS, [[entities/email|email]] security, and [[concepts/ssl-certificates|digital certificates]].

The main trade-off of public key cryptography is computational overhead compared to symmetric encryption. For this [[concepts/purpose|reason]], hybrid systems are common in practice: public key cryptography establishes a secure [[concepts/connection|connection]] and exchanges a symmetric key, which then encrypts the bulk of the data due to its greater [[concepts/speed|speed]].
