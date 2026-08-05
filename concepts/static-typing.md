---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "static-typing"
  - "type-systems"
  - "compile-time-checking"
  - "typescript"
  - "programming-languages"
  - "type-safety"
aliases:
  - "static type checking"
  - "type annotations"
summary: A programming language feature that enforces type checking at compile time rather than runtime, catching type errors before code execution.
updated: 2026-07-12
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Static Typing

Static typing is a programming language feature in which type checking occurs at compile time, before [[concepts/code-execution|code execution]]. When variables, function parameters, or return values are declared with a specific type, the compiler verifies that all operations on those values are compatible with their declared types. If a type mismatch is detected—such as passing a string to a function expecting an integer—compilation fails and the error is reported to the [[concepts/developer|developer]] before the program runs.

## Advantages

Static typing provides several practical benefits. Type errors are caught early in development rather than discovered during execution or in production, reducing [[concepts/debugging|debugging]] time and preventing runtime failures. The explicit type declarations also serve as documentation, making code intentions clearer to other developers. Additionally, static type information allows compilers to perform optimizations and generate more efficient machine code compared to dynamically typed languages.

## Trade-offs

The primary trade-off is increased development overhead. Developers must declare types for variables and function signatures, which requires more initial code and planning. This verbosity can slow prototyping and make simple [[concepts/software|programs]] more complex. Languages with static typing also require compilation steps before execution, whereas dynamically typed languages often run code immediately. However, many modern languages like [[concepts/typescript-development|TypeScript]] add optional static typing to provide flexibility in choosing between the two approaches.
