---
type: concept
domain: tools-platforms
tags:
  - "computing"
  - "memory-management"
  - "machine-learning"
  - "systems-programming"
  - "memory-mapping"
  - "operating-systems"
  - "llm-inference"
  - "weight-management"
  - "virtual-address-space"
  - "performance-optimization"
aliases:
  - "memory-mapped-files"
summary: "A mechanism in operating systems that maps files or hardware devices into a process's virtual address space to allow the CPU to access disk-resident data as if it were in RAM."
updated: 2026-04-26
group: platforms-runtimes-environments
---
# memory mapping

A mechanism in operating systems that maps [[concepts/files|files]] or [[concepts/hardware|hardware]] devices directly into a process's virtual address space. This allows the [[concepts/cpu|CPU]] to access data stored on disk as if it were residing in [[concepts/ram]], bypassing the need for explicit and frequent read/write system calls.

## LLM Inference Context
- **[[concepts/weight-management|Weight Management]]**: In [[concepts/llm-inference|LLM Inference]], [[concepts/memory|memory]] mapping is essential for handling the massive weight tensors that constitute a model.
- **Data [[concepts/structure|Structure]]**: LLMs are not simple executables but collections of [[concepts/weights|weights]]/tensors; memory mapping allows [[concepts/inference|Inference]] Engines to treat these disk-resident files as accessible memory.
- **[[concepts/software-performance|Performance Optimization]]**:
    - Reduces the overhead of manual data loading by mapping files directly.
    - Minimizes the latency associated with copying large [[concepts/training-data|datasets]] from [[entities/storage|storage]] to physical memory.
    - Facilitates more efficient use of [[concepts/vram]] and system memory during model execution.

---
**Backlink**: 2026 04 22 LLM Inference Engines Memory Mapping and Performance Optimization

## Source Notes

- 2026-04-22: LLM Inference · [▶ source](https://www.youtube.com/watch?v=B18zBnjZKmc)
- 2026-04-14: [[lab-notes/2026-04-14-Transforming-NotebookLM-Mind-Maps-into-Engaging-Visuals-with-Google-Ge|Transforming NotebookLM Mind Maps into Engaging Visuals with Google Ge]] · [▶ source](https://www.youtube.com/watch?v=m25BiEBU7GU)