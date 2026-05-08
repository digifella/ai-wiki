---
type: concept
domain: tools-platforms
group: web-publishing-quartz-websites
tags:
  - "neural-networks"
  - "graph-structures"
  - "machine-learning"
  - "deep-learning"
aliases:
  - "GNN"
  - "graph neural network"
summary: A concept involving neural networks applied to graph structures.
updated: 2026-05-01
---
# Graph Neural Networks

Graph Neural Networks (GNNs) are a class of [[concepts/deep-learning-models|neural network architectures]] designed to process data structured as graphs. Unlike traditional [[concepts/neural-networks|neural networks]] that operate on fixed-size vectors or grid-like data, GNNs work directly with graph-structured information where entities are represented as nodes and [[concepts/relationships|relationships]] as edges. This makes them particularly suited for domains where data naturally forms networks, such as social networks, molecular structures, [[concepts/knowledge-graphs|knowledge graphs]], and recommendation systems.

## Core Mechanism

GNNs operate through message passing, where information is propagated between neighboring nodes in the graph. In each layer, nodes aggregate information from their connected neighbors, update their representations based on this aggregated information, and pass messages to adjacent nodes. This [[concepts/iterative-refinement|iterative process]] allows the network to capture both local node features and broader structural patterns within the graph. Common GNN variants include Graph Convolutional Networks (GCNs), Graph [[concepts/attention-mechanisms|Attention]] Networks (GATs), and GraphSAGE, each implementing different aggregation and message-passing strategies.

## Applications

The flexibility of GNNs has enabled applications across multiple fields. In chemistry and biology, they predict molecular properties and protein structures. In recommendation systems, they model user-item interactions to improve [[concepts/personalization|personalization]]. Knowledge graphs use GNNs for link prediction and entity classification. Social network analysis leverages GNNs for tasks like community detection and influence prediction. The ability to handle variable-sized, non-Euclidean data has made GNNs a foundational tool in modern machine [[concepts/learning|learning]] for relational and networked data.
