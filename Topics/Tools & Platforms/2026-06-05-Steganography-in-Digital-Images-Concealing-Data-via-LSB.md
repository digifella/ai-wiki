---
wiki-ingested: true
title: "Steganography in Digital Images: Concealing Data via LSB and DCT Coefficients"
date: 2026-06-05
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: data-pipelines-sync-storage
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

Generated: 2026-06-05 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Steganography in Digital Images: Concealing Data via LSB and DCT Coefficients
**Clip title:** Secrets Hidden in [[concepts/images|Images]] (Steganography) - Computerphile
**Author / channel:** Computerphile
**URL:** https://www.youtube.com/watch?v=TWEXCYQKyDc

### Summary
The video provides a comprehensive overview of steganography, contrasting it with [[concepts/cryptography|cryptography]] and delving into practical methods, particularly within [[concepts/digital-images|digital images]]. The main topic revolves around the [[concepts/art|art]] of concealing the *existence* of a message, rather than just its meaning, within seemingly innocuous cover media. The presenter highlights that as digital images can be megabytes in size, they offer a vast [[concepts/canvas|canvas]] for hiding substantial amounts of data.

One of the simplest forms discussed is Least Significant Bit (LSB) steganography. This technique involves altering the lowest-order [[concepts/classical-bits|bits]] of the pixel values in an image. Since these [[concepts/classical-bits|bits]] contribute minimally to the overall color or intensity of a pixel, changing them to embed a secret message results in an almost imperceptible visual difference in the image. For instance, modifying the last two bits of an 8-bit color channel only changes its [[concepts/value|value]] by a small amount (e.g., 0-3 out of 255), making the change undetectable to the human eye. The video demonstrates this by hiding the entire works of Shakespeare (zipped to 1.5MB) within a 3-megapixel image of a tree, with no visible change. However, LSB steganography is vulnerable to detection if the original image is available for comparison, or if one extracts only the LSBs, revealing the hidden data as patterns or increased noise.

A more sophisticated approach for JPEG images is hiding information within the Discrete Cosine Transform (DCT) coefficients, as implemented by algorithms like JSteg. JPEG compression works by transforming image blocks into frequency components via DCT and then quantizing these coefficients, discarding less visually important data. Embedding a message here involves subtly altering these coefficients. Unlike LSB, where changes are local to individual pixels, a change in a DCT coefficient affects an entire 8x8 block of pixels, making the visual impact much less predictable and nearly impossible to detect through direct observation or by merely extracting LSBs (which JPEG compression already randomizes). Detection of DCT steganography often relies on statistical analysis, such as examining the histograms of [[concepts/dct-coefficients|DCT coefficients]] to identify subtle, non-natural distributions caused by the embedded message.

Beyond covert [[concepts/communication|communication]] for clandestine purposes, the video concludes by highlighting the prevalent real-world application of steganography: digital watermarking. Here, the goal isn't to perfectly conceal the message, but to embed a small, robust piece of information – like a logo or copyright [[concepts/text|text]] – repeatedly throughout the image. This ensures that even if the image is cropped, re-compressed, or otherwise altered, the watermark remains, allowing the original [[concepts/creator|creator]] or distributor to prove ownership or trace unauthorized dissemination. This technique is widely used by stock photo agencies and film studios to combat piracy of their digital assets, illustrating the ongoing "arms race" between those who hide information and those who seek to uncover it using increasingly advanced statistical and [[concepts/machine-learning|machine learning]] methods.

### Video Description & Links
#### Description
Secret texts buried in a picture of your dog? Image Analyst Dr. Mike Pound explains the art of steganography in digital images. 

The Problem with JPEG: https://youtu.be/yBX8GFqt6GA 
The Bayer Filter: https://youtu.be/LWxu4rkZBLw 
Super Computer & the [[concepts/milky-way|Milky Way]]: https://youtu.be/5KEhhW8TOGk 
JPEG Discrete Cosine Transform (DCT): https://youtu.be/Q2aEzeMDHMA 


http://www.facebook.com/computerphile
https://twitter.com/computer_phile

This video was filmed and edited by Sean Riley.

Computer [[concepts/science|Science]] [[concepts/assistive-technology|at]] the University of Nottingham: http://bit.ly/nottscomputer

Computerphile is a sister project to Brady Haran's [[entities/numberphile|Numberphile]]. More at http://www.bradyharan.com

#### Tags
`computers`, `computerphile`, `computer science`, `steganography`, `university of nottingham`, `secrets`

#### URLs
- https://youtu.be/yBX8GFqt6GA
- https://youtu.be/LWxu4rkZBLw
- https://youtu.be/5KEhhW8TOGk
- https://youtu.be/Q2aEzeMDHMA
- http://www.facebook.com/computerphile
- https://twitter.com/computer_phile
- http://bit.ly/nottscomputer
- http://www.bradyharan.com

## Related Concepts
- [[concepts/digital-images|Digital Images]] — [Wikipedia](https://en.wikipedia.org/wiki/Digital_Images)
- [[concepts/lsb-least-significant-bit|LSB (Least Significant Bit)]] — [Wikipedia](https://en.wikipedia.org/wiki/LSB_%28Least_Significant_Bit%29)
- [[concepts/dct-coefficients|DCT Coefficients]] — [Wikipedia](https://en.wikipedia.org/wiki/DCT_Coefficients)
- [[concepts/morse-code-authority-laundering|Steganography]] — [Wikipedia](https://en.wikipedia.org/wiki/Steganography)
- [[concepts/cryptography|Cryptography]] — [Wikipedia](https://en.wikipedia.org/wiki/Cryptography)
- [[concepts/lsb-least-significant-bit|Least Significant Bit (LSB)]] — [Wikipedia](https://en.wikipedia.org/wiki/Least_Significant_Bit_%28LSB%29)
- Discrete Cosine Transform (DCT) — [Wikipedia](https://en.wikipedia.org/wiki/Discrete_Cosine_Transform_%28DCT%29)
- JPEG Compression — [Wikipedia](https://en.wikipedia.org/wiki/JPEG_Compression)
- Pixel Values — [Wikipedia](https://en.wikipedia.org/wiki/Pixel_Values)
- [[concepts/model-compression|Quantization]] — [Wikipedia](https://en.wikipedia.org/wiki/Quantization)
- Digital Watermarking — [Wikipedia](https://en.wikipedia.org/wiki/Digital_Watermarking)
- Statistical Analysis — [Wikipedia](https://en.wikipedia.org/wiki/Statistical_Analysis)
- Covert [[concepts/communication|Communication]] — [Wikipedia](https://en.wikipedia.org/wiki/Covert_Communication)
- [[concepts/data-embedding|Data Embedding]] — [Wikipedia](https://en.wikipedia.org/wiki/Data_Embedding)
- [[concepts/digital-image-noise|Image Noise]] — [Wikipedia](https://en.wikipedia.org/wiki/Image_Noise)
- Ownership Provenance — [Wikipedia](https://en.wikipedia.org/wiki/Ownership_Provenance)
- Digital Asset Protection — [Wikipedia](https://en.wikipedia.org/wiki/Digital_Asset_Protection)

## Related Entities
- Computerphile — [Wikipedia](https://en.wikipedia.org/wiki/Computerphile)
- Dr. Mike Pound — [Wikipedia](https://en.wikipedia.org/wiki/Dr._Mike_Pound)
- JSteg — [Wikipedia](https://en.wikipedia.org/wiki/JSteg)
- Shakespeare — [Wikipedia](https://en.wikipedia.org/wiki/Shakespeare)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)