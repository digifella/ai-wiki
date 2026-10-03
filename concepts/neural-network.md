---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "machine-learning"
  - "artificial-intelligence"
  - "deep-learning"
  - "neural-networks"
  - "backpropagation"
  - "recurrent-neural-networks"
  - "transformers"
  - "state-space-models"
aliases:
  - "ANN"
  - "Artificial Neural Network"
  - "Neural Net"
  - "Deep Learning Model"
  - "RNN"
  - "Recurrent Neural Network"
summary: A neural network is a machine learning model inspired by biological neural networks, consisting of interconnected artificial neurons organized in layers. Recurrent Neural Networks (RNNs) are a class of these networks designed for sequential data, currently facing competition from State-Space Models as alternatives to the dominant Transformer architecture.
updated: 2026-10-01
group: devices-access-networks
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T02:02:56+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Neural Network

A **neural network** is a type of [[concepts/machine-learning-model|machine learning model]] inspired by the structure and function of biological [[concepts/neural-networks|neural networks]]. It consists of interconnected [[concepts/nodes|nodes]] (or artificial neurons) organized in layers. These networks can learn to perform tasks such as classification, regression, clustering, and [[concepts/user-attention-prediction|prediction]].

## Recurrent Neural Networks (RNNs)

**Recurrent [[concepts/ai-models|Neural Networks]]** are a specific class of neural networks designed to handle sequential data by maintaining an internal state (memory) of previous inputs. While historically dominant for [[concepts/transformer-models|sequence modeling]] before the rise of Transformers, they are currently being re-evaluated due to [[concepts/algorithm-efficiency|computational efficiency]] concerns.

### Key Concepts
- **Neuron**: Basic computational unit that processes inputs and outputs a signal.
- **Layer**: A set of neurons connected by directed edges with [[concepts/weights|weights]].
- **[[concepts/activation-functions|Activation Function]]**: Determines the output of a neuron given an input or set of inputs.
- **[[concepts/backpropagation|Backpropagation]]**: [[concepts/algorithm|Algorithm]] used to update [[concepts/weights|weights]] by propagating errors backward through the network.
- **Hidden State**: The internal memory of an RNN that captures information about previous steps in a sequence.

## Architectural Landscape: Transformers vs. RNNs vs. State-Space Models

The AI landscape is currently defined by the dominance of **Transformers**, but significant research is exploring alternatives to address their limitations.

- **Transformer Dominance**: Since 2017, Transformers have become ubiquitous in models like ChatGPT, Claude, and Gemini due to their ability to parallelize training and capture long-range dependencies via [[concepts/attention-mechanisms|attention mechanisms]].
- **Transformer Weaknesses**: The primary driver for exploring alternatives is the **quadratic computational cost** of the self-[[concepts/attention-mechanism|attention mechanism]] relative to [[concepts/context-length|sequence length]], which limits efficiency and scalability for very long contexts.
- **RNN Resurgence & [[concepts/ssm|State-Space Models]]**: To mitigate these costs, research is pivoting toward **State-Space Models** and refined **Recurrent Neural Network** architectures. These models offer linear [[concepts/complexity-classes|computational complexity]] with respect to sequence length, making them highly efficient for inference and [[concepts/200k-token-context-window|long-context processing]].
- **The Race to Replace**: There is an active engineering effort to replace or augment Transformers with these more efficient architectures, balancing performance with computational resource constraints.

For detailed analysis of this architectural shift, see [[lab-notes/2026-10-01-Beyond-Transformers-Exploring-State-Space-and-Recurrent|Beyond Transformers: Exploring State-Space and Recurrent AI Model Architectures]].

## References
- [Beyond Transformers: Exploring State-Space and Recurrent AI Model Architectures](https://www.youtube.com/watch?v=GSAOe0JNt94)
