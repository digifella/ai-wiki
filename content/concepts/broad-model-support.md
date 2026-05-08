---
type: concept
domain: ai-agents
group: open-systems-local-models
tags:
  - "model-support"
  - "local-inference"
  - "multi-backend"
  - "npu-gpu-cpu"
  - "developer-toolkit"
aliases:
  - "Model Compatibility"
  - "Multi-Backend Support"
summary: Nexa SDK is an open-source developer toolkit that enables running AI models locally on NPUs, GPUs, and CPUs.
updated: 2026-05-01
---
# Broad Model Support

Broad model support refers to a development toolkit's ability to run diverse [[concepts/ai-models|AI models]] across multiple [[concepts/hardware|hardware]] configurations without requiring model-specific optimizations or format conversions. In the context of [[concepts/gguf|Nexa SDK]], this capability enables developers to work with various model architectures and sizes while maintaining flexibility in their [[concepts/deployment|deployment]] choices.

## Hardware Compatibility

Nexa SDK achieves broad model support through compatibility with multiple processing backends. The toolkit can execute models on NPUs ([[concepts/neural-processing-units|Neural Processing Units]]), GPUs, and CPUs, allowing developers to choose hardware based on their specific performance requirements and available infrastructure. This flexibility means the same model can be deployed across different devices without requiring separate implementations.

## Model Flexibility

The toolkit supports a range of model types and architectures rather than restricting developers to particular formats or model families. This approach reduces [[concepts/friction|friction]] in the development workflow by eliminating the need to convert or rewrite models to fit toolkit-specific requirements. Developers can work with models from different sources and frameworks, integrating them into their [[concepts/software|applications]] more directly.
