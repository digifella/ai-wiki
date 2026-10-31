---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: dd0d969d134d7e1fbcc2
suggested-topic: "Tools, Platforms & Infrastructure"
domain: "ai-agents"
title: "Why Is AI Rewriting Code in Rust? (We Converted a Neural Network)"
date: 2026-11-01
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-01-QdQG8H9Nf2k-Why-Is-AI-Rewriting-Code-in-Rust-We-Converted-a-Neural-N"
---
## Why Is AI Rewriting Code in Rust? (We Converted a Neural Network)
**Clip title:** Why Is AI Rewriting Code in Rust? (We Converted a Neural Network)
**Author / channel:** It's Not Magic
**URL:** https://www.youtube.com/watch?v=QdQG8H9Nf2k

### Summary
Here is a summary of the video:

**Main Topic**
The video discusses the process of rewriting a neural network program originally written in Python into the Rust programming language using AI assistance, comparing the performance, safety, and correctness of both versions.

**Key Points**
- The video explores why Rust is increasingly used for performance-critical and secure software, noting that memory safety bugs account for around 70% of vulnerabilities in large codebases like Microsoft and Android.
- Rust's strict compiler enforces memory safety through concepts like ownership and borrowing, which can make it challenging for human developers ("fighting the borrow checker") but serves as a rigorous code reviewer for AI.
- The speaker used an AI tool (Claude) to port "micrograd"—a small Python neural network implementation by Andrej Karpathy—into Rust, following strict rules that included running tests and linters after every change.
- The resulting Rust program matched the Python version's numerical outputs bit-for-bit while running significantly faster (up to 137x faster for training steps) and using zero unsafe code.

**Conclusions & Takeaways**
The speaker concludes that combining AI with Rust's strict compiler creates a powerful development workflow, allowing for fast, memory-safe code that matches original implementations without introducing errors. However, the video notes that Rust does not guarantee logical correctness, as safe code can still contain flawed logic. Ultimately, the success of the rewrite demonstrates how AI can overcome Rust's steep learning curve, making high-performance languages more accessible.

### Video Description & Links
#### Description
Why is so much code suddenly being rewritten in Rust, and what does AI have to do with it? We took micrograd, Andrej Karpathy's tiny neural-network engine in Python, and converted it to Rust from scratch in one Claude Code session. Then we checked every number against the original.

What's in the video
0:00 Same network, 69 seconds vs half a second
0:34 Why code is moving to Rust: speed and memory safety
2:21 Why AI changes the maths
2:45 DARPA, MIT Lincoln Lab and Microsoft
3:27 micrograd, and how a neural network learns
4:49 Three Rust ideas: ownership, borrowing, the shared graph
6:05 The walkthrough in Claude Code
7:56 637 numbers, 0 differences
8:16 Speed: about 137× faster
8:30 Ten times bigger (and Python's recursion error)
9:25 Results, and what part is the design
10:06 What Rust doesn't fix
10:37 Wrap-up

How we measured
Apple M1. Python 3.12 running the unmodified micrograd code vs the Rust port in release mode, timed with hyperfine (Rust 10 runs, Python 3). Demo: 100 points, 337 parameters, 100 training steps: Python 69.3 s, Rust 0.51 s. Bigger run: 1,000 points, 1,185 parameters: Rust 22.2 s; Python about 95 minutes, estimated from 6 measured steps (it needed a raised recursion limit to run at all). The Rust port reproduces all 637 compared values (losses, accuracies, learning rates, final weights) bit for bit, after pinning the order of Python's backward pass, which otherwise varies run to run. The 0.04 s "flat list" figure is a separate port we wrote off camera on the same Mac. The compiler messages in the "hard to learn" scene are typical examples, not from our session.

Code
Rust port and benchmark scripts: https://github.com/ranjanj1/micrograd-rust
micrograd (MIT licence): https://github.com/karpathy/micrograd
Andrej Karpathy, "The spelled-out intro to neural networks and backpropagation: building micrograd" (2022): https://www.youtube.com/watch?v=VMj-3S1tku0

Sources
Microsoft Security Response Center, "A proactive approach to more secure code" (July 2019): https://www.microsoft.com/en-us/msrc/blog/2019/07/a-proactive-approach-to-more-secure-code
Chromium, Memory safety: https://www.chromium.org/Home/chromium-security/memory-safety/
Google Security Blog, "Eliminating Memory Safety Vulnerabilities at the Source" (25 Sep 2024): https://security.googleblog.com/2024/09/eliminating-memory-safety-vulnerabilities-Android.html
DARPA, TRACTOR (Translating All C to Rust): https://www.darpa.mil/research/programs/translating-all-c-to-rust
TRACTOR Benchmark for Evaluating C to Rust Translators, arXiv 2609.25121 (MIT Lincoln Laboratory, 20 Sep 2026): https://arxiv.org/abs/2609.25121
InfoWorld, "Microsoft is not rewriting Windows in Rust" (24 Dec 2025): https://www.infoworld.com/article/4111553/microsoft-is-not-rewriting-windows-in-rust.html
uv: https://github.com/astral-sh/uv
Ruff: https://github.com/astral-sh/ruff
Cloudflare, "Cloudflare outage on November 18, 2025": https://blog.cloudflare.com/18-november-2025-outage/

#rust #python #claudecode

#### URLs
- https://github.com/ranjanj1/micrograd-rust
- https://github.com/karpathy/micrograd
- https://www.youtube.com/watch?v=VMj-3S1tku0
- https://www.microsoft.com/en-us/msrc/blog/2019/07/a-proactive-approach-to-more-secure-code
- https://www.chromium.org/Home/chromium-security/memory-safety/
- https://security.googleblog.com/2024/09/eliminating-memory-safety-vulnerabilities-Android.html
- https://www.darpa.mil/research/programs/translating-all-c-to-rust
- https://arxiv.org/abs/2609.25121
- https://www.infoworld.com/article/4111553/microsoft-is-not-rewriting-windows-in-rust.html
- https://github.com/astral-sh/uv
- https://github.com/astral-sh/ruff
- https://blog.cloudflare.com/18-november-2025-outage/
