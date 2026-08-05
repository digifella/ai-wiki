---
type: concept
domain: maths-logic-crypto
tags:
  - "binary-representation"
  - "steganography"
  - "data-hiding"
  - "digital-media"
  - "bit-manipulation"
  - "error-detection"
  - "information-security"
aliases:
  - "Least Significant Bit"
  - "LSB"
  - "2^0 position"
summary: The Least Significant Bit is the binary digit with the lowest positional weight, valued at 1, used in steganography for high-capacity data embedding due to its minimal visual or auditory impact.
updated: 2026-07-11
group: cryptography-codes-ciphers
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# LSB (Least Significant Bit)

The **Least Significant Bit** is the bit in a binary representation of a number that has the lowest positional weight. In an integer, it represents the $2^0$ position. Changing the LSB alters the value by only 1, making it imperceptible in high-[[concepts/accuracy|precision]] data contexts like [[concepts/audio-modality|audio]] or image pixels.

## Properties
- **Value Impact**: Flipping the LSB [[concepts/causes|causes]] minimal change to the overall magnitude.
- **Noise [[concepts/resilience|Resilience]]**: LSB data is fragile; compression or noise filtering often destroys hidden payloads.
- **Capacity**: Provides maximum embedding capacity per bit of [[entities/storage|storage]] compared to higher-order [[concepts/classical-bits|bits]].

## Applications

### Steganography
LSB substitution is a primary method for [[concepts/data-hiding|Steganography]] in digital media.
- **[[concepts/image-hiding|Image Hiding]]**: Replaces the LSB of pixel color channels (Red, Green, Blue) with secret data bits.
- **Visual Indifference**: Human visual systems rarely detect 1-unit intensity changes in high-color-depth images.
- **Integration with Other Methods**: Often contrasted with more robust techniques like manipulating DCT (Discrete Cosine Transform) coefficients in JPEGs.
- **Reference**: See [[lab-notes/2026-06-05-Steganography-in-Digital-Images-Concealing-Data-via-LSB|Steganography in Digital Images: Concealing Data via LSB and DCT Coefficients]] for a detailed breakdown of LSB vs. DCT approaches in Computerphile's analysis.

### Data Storage & Encoding
- **Parity Bits**: Used in error detection to ensure even/odd parity.
- **Endianness**: In little-endian systems, the LSB is stored at the lowest [[concepts/memory|memory]] address.

## Related Concepts
- MSB (Most Significant Bit)
- Binary [[concepts/number-system|Number System]]
- Pixel
- [[concepts/data-hiding|Data Hiding]]
