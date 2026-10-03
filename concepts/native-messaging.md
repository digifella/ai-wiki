---
type: concept
domain: ai-agents
tags:
  - "browser-extensions"
  - "native-messaging"
  - "inter-process-communication"
  - "json-protocol"
  - "system-integration"
  - "security-model"
aliases:
  - "Native Messaging Host"
  - "Browser-Native Communication"
  - "Extension Native API"
summary: Native Messaging is a protocol enabling browser extensions to communicate with external native applications via JSON messages over standard input/output pipes.
updated: 2026-07-12
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Native Messaging

**Native [[concepts/communication|Messaging]]** is a protocol allowing Web Browser extensions to communicate with external native applications via standard input/output (stdin/stdout) using JSON messages. It bridges the gap between sandboxed browser environments and the host operating system, enabling extensions to leverage system-level capabilities without compromising browser [[concepts/security|security]] models.

## Architecture & Protocol

- **Transport Layer**: Uses pipes (Unix/Linux/macOS) or named pipes ([[entities/windows|Windows]]) for bidirectional communication.
- **Message Format**: JSON-encoded messages prefixed with a 4-byte big-endian integer indicating message length.
- **Security Model**:
  - Native hosts are registered via manifest files (JSON) in specific OS directories.
  - Browsers validate host permissions and paths before establishing connections.
  - No direct file system or [[concepts/remote-access|network access]] granted to the extension; all I/O is mediated by the native host.

## Use Cases

- **[[concepts/integration|System Integration]]**: Accessing local hardware, file systems, or OS-specific [[concepts/open-standard-protocols|APIs]] not exposed to web contexts.
- **Performance Offloading**: Running computationally intensive tasks (e.g., [[concepts/image-input-processing|image processing]], AI [[concepts/inference|inference]]) outside the browser's main thread.
- **Legacy Interoperability**: Connecting modern web interfaces with existing desktop applications.

## Recent Developments & Integrations

- **[[concepts/agentic-ai|Hermes Agent]] 0.17**: The [[lab-notes/2026-06-25-Hermes-Agent-0.17-Update-iMessage-Background-Agents-Unre|Hermes Agent 0.17 Update: iMessage, Background Agents, Unreal Engine Integration]] highlights significant advancements in native messaging capabilities, specifically:
  - **[[concepts/imessage-integration|iMessage Integration]]**: Enables seamless messaging functionality through native host bridges.
  - **[[concepts/background-agents|Background Agents]]**: Supports persistent [[concepts/background-processes|background processes]] for [[concepts/continuous-monitoring|continuous monitoring]] or [[concepts/data-synchronization|data synchronization]].
  - **[[concepts/unreal-engine-integration|Unreal Engine Integration]]**: Demonstrates [[entities/high-performance|high-performance]] [[concepts/fat-rendering|rendering]] and [[concepts/open-source-philosophy|logic]] offloading to game engines via native messaging protocols.
  - Claimed to surpass competitors like [[concepts/automated-information-pipelines|OpenClaw]] in functional breadth and stability.

## Implementation Considerations

- **Cross-[[concepts/platform-compatibility|Platform Compatibility]]**: Requires distinct native host implementations for Windows, [[entities/macos|macOS]], and [[entities/linux|Linux]] due to differing pipe [[concepts/causes|mechanisms]] and path structures.
- **Error Handling**: Robust error handling is critical, as broken pipes or [[concepts/malformed-json|malformed JSON]] can terminate the [[concepts/connection|connection]] abruptly.
- **Security Audits**: Native hosts execute with [[concepts/user-permissions|user privileges]]; vulnerabilities in the native code can lead to privilege escalation or data exfiltration.

## References

- [Hermes Agent 0.17 Update: iMessage, Background Agents, Unreal Engine Integration](https://www.youtube.com/watch?v=bQ1LCFrwj08)
