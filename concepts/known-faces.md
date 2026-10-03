---
type: concept
domain: ai-agents
tags:
  - "face-recognition"
  - "computer-vision"
  - "privacy"
  - "python"
  - "opencv"
  - "yolo"
  - "known-faces"
  - "local-ai"
  - "identity-enrollment"
  - "feature-matching"
aliases:
  - "Known Faces Database"
  - "Enrolled Identities"
  - "Recognized Faces"
summary: Known faces are enrolled facial entities matched against a reference database to identify specific individuals rather than just detecting their presence.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-27T20:44:01+00:00" }
group: applied-ai-workflows
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Known Faces

**Known faces** refers to the subset of detected facial entities within a computer-vision system that have been previously enrolled, indexed, and matched against a specific database of identities. Unlike generic face detection (identifying *that* a face exists), known [[concepts/face-recognition|face recognition]] involves *who* the face belongs to.

## Core Concepts
- **Identity Enrollment**: The process of capturing and encoding facial features of specific individuals into a reference database.
- **Feature Matching**: Comparing real-time facial embeddings against stored vectors to determine identity.
- **Privacy-First Architecture**: [[concepts/local-processing|Local processing]] ensures biometric data does not leave the device, mitigating cloud-based surveillance risks.

## Implementation Reference
A practical implementation of this concept is detailed in the following report, which demonstrates a local, free, and privacy-focused system using Python and OpenCV:

- [[lab-notes/2026-08-28-Python-OpenCV-YOLO-Face-Recognition-System-Report|Python OpenCV YOLO Face Recognition System Report]]

### Key Technical Details from Report
- **Stack**: Python, OpenCV, YOLO (You Only Look Once) for detection.
- **Objective**: Enable real-time identification of specific individuals via [[concepts/live-camera-feed|live camera feed]].
- **Advantages**:
  - Local execution ensures data [[concepts/privacy|privacy]].
  - No reliance on external APIs or cloud services.
  - Cost-effective (free tools).
- **Source**: [Python OpenCV YOLO Face Recognition System Report](https://www.youtube.com/watch?v=Z2Ojl7m3JXk) by [[entities/python-simplified|Python Simplified]].

## Related Concepts
- Face Detection
- [[concepts/face-recognition|Facial Recognition]]
- Biometric Security
- [[concepts/local-ai|Local AI]] Processing
