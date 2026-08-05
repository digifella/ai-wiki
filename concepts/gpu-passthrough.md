---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "gpu-passthrough"
  - "virtualization"
  - "vfio"
  - "iommu"
  - "sr-iov"
  - "mdev"
  - "wsl2"
  - "containers"
aliases:
  - "GPU Virtualization"
  - "vGPU"
  - "Direct GPU Assignment"
  - "GPU Passthrough"
summary: GPU Passthrough is a virtualization technique that assigns a physical GPU directly to a virtual machine or container, bypassing the host OS graphics stack to enable near-native performance for graphics-intensive tasks an
updated: 2026-07-11
group: platforms-runtimes-environments
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# GPU Passthrough

**GPU Passthrough** (also known as GPU Virtualization or vGPU) is a virtualization technique that allows a physical GPU to be assigned directly to a [[concepts/vps|Virtual Machine]] (VM) or container, bypassing the host OS's [[concepts/webgpu|graphics]] stack. This enables near-native performance for graphics-intensive tasks, AI/ML workloads, and [[concepts/fat-rendering|rendering]] within [[concepts/isolated-environments|isolated environments]].

## Core Mechanisms

- **IOMMU/VT-d/AMD-Vi**: Hardware support required to isolate device [[concepts/memory|memory]] and DMA transactions.
- **VFIO (Virtual Function I/O)**: [[entities/linux|Linux]] kernel subsystem used to bind devices to userspace [[concepts/causes|drivers]], preventing the host from claiming the GPU.
- **SR-IOV (Single Root I/O Virtualization)**: Allows a single physical GPU to appear as multiple virtual GPUs (vGPUs), enabling sharing among multiple VMs.
- **MDEV (Mediated Devices)**: Kernel framework for creating mediated devices, often used in conjunction with [[entities/nvidia|NVIDIA]] vGPU or AMD MxGPU.

## Use Cases

- **AI/Deep [[concepts/learning|Learning]]**: Running PyTorch or TensorFlow models in isolated [[entities/docker]] [[concepts/containerization-technology|containers]] or VMs with direct hardware access.
- **Cloud [[concepts/gaming|Gaming]]**: Streaming high-fidelity graphics from remote servers to clients.
- **[[concepts/developer-platforms|Development Environments]]**: Providing developers with dedicated GPU resources for CUDA/OpenCL development without affecting the host system.

## Integration with WSL and Containers

Recent advancements have blurred the lines between traditional VM passthrough and containerized GPU access, particularly on [[entities/windows|Windows]] hosts.

- **WSL 2 GPU Support**: WSL 2 now supports direct GPU access for Linux distributions, allowing [[concepts/compute-unified-device-architecture|CUDA]] and ROCm workloads to run without full VM overhead.
- **Native [[concepts/wsl-containers|WSL Containers]]**: [[entities/microsoft|Microsoft]] has introduced native [[concepts/containerization|containerization]] within WSL, reducing dependency on external [[concepts/docker|Docker]] daemons for Linux [[concepts/container-management|container management]].
	- See: [[lab-notes/2026-07-04-WSL-Containers-Native-Linux-Containerization-Docker-Hub|WSL Containers: Native Linux Containerization, Docker Hub Integration, GPU Passthrough]]
	- This technology enables [[concepts/native-linux-containerization|native Linux containerization]] with integrated [[entities/docker-hub|Docker Hub]] access and streamlined GPU passthrough capabilities directly within the WSL environment.

## Configuration Considerations

- **Host OS**: Windows (Hyper-V), Linux (KVM/QEMU), or ESXi.
- **Guest OS**: Typically Linux for AI/ML workloads; Windows for gaming/rendering.
- **Driver Management**: Requires careful handling of host vs. guest drivers to avoid conflicts. In WSL [[concepts/scenarios|scenarios]], the host Windows driver often manages the hardware while the guest Linux environment accesses it via virtualized interfaces.

## References

- [WSL Containers: Native Linux Containerization, Docker Hub Integration, GPU Passthrough](https://www.youtube.com/watch?v=sF5opJgyh_A)
