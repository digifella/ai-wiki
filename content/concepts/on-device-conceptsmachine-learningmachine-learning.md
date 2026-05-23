---
type: concept
domain: science-physics
tags:
  - "machine-learning"
  - "on-device-ml"
  - "edge-computing"
  - "mobile-ai"
  - "inference"
  - "local-processing"
aliases:
  - "Edge Machine Learning"
  - "Local ML Inference"
summary: Machine learning models executed directly on devices rather than relying on cloud-based servers.
updated: 2026-05-23
group: engineering-systems-robotics-autonomous-vehicles
---
# On-Device Machine Learning

On-device [[concepts/machine-learning|machine learning]] refers to the execution of [[concepts/artificial-intelligence-models|machine learning models]] directly on local [[concepts/hardware|hardware]]—such as smartphones, tablets, embedded systems, or [[concepts/internet-of-things|IoT devices]]—rather than transmitting data to remote cloud servers for processing. This approach keeps computational operations and [[concepts/inference|inference]] within the physical device itself, eliminating the need for constant network connectivity or reliance on external infrastructure.

## Technical Characteristics

On-device [[concepts/models|models]] are typically smaller and more computationally efficient than their server-based counterparts, requiring [[concepts/algorithm-optimization|optimization techniques]] such as [[concepts/parameter-reduction|quantization]], pruning, and knowledge distillation to fit within device [[concepts/memory|memory]] and [[concepts/power|power]] constraints. The inference happens locally, meaning results are produced with minimal latency and data remains on the device throughout the processing pipeline. Common frameworks and tools supporting [[concepts/on-device-ai|on-device deployment]] include TensorFlow Lite, Core ML, and ONNX Runtime.

## Practical Implications

This approach offers several practical advantages: reduced latency since data need not travel to distant servers, improved [[concepts/privacy|privacy]] since sensitive information remains on the user's device, and reduced dependence on continuous internet connectivity. However, on-device models generally have reduced capability compared to larger cloud-based models, as they must operate under strict constraints on memory, processing power, and energy consumption. The choice between on-device and cloud-based machine [[concepts/learning|learning]] depends on specific application requirements regarding [[concepts/speed|speed]], privacy, connectivity, and model sophistication.
