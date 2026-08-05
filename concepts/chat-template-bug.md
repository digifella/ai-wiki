---
type: concept
domain: ai-agents
tags:
  - "chat-template"
  - "token-leakage"
  - "role-confusion"
  - "llm-formatting"
  - "agent-failure"
  - "context-corruption"
  - "prompt-engineering"
aliases:
  - "Chat Template Error"
  - "LLM Formatting Bug"
  - "Conversation Structure Failure"
summary: A chat template bug is a formatting logic failure that disrupts the structuring of multi-turn conversation history for language models, leading to token leakage, role confusion, and context corruption.
updated: 2026-07-11
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Chat Template Bug

A **chat template bug** occurs when the formatting [[concepts/open-source-philosophy|logic]] responsible for structuring multi-turn [[concepts/conversation-history|conversation history]] (system, user, assistant messages) into a single input string for an [[concepts/llm]] fails to preserve semantic boundaries or token [[concepts/integrity|integrity]]. This often results in hallucinated responses, [[concepts/instruction-following|instruction following]] failures, or [[concepts/context-window|context window]] corruption.

## Common Manifestations
- **Token Leakage**: Special [[concepts/tokens|tokens]] (e.g., `<bos>`, `<eos>`, `<start_of_turn>`) are omitted, duplicated, or misplaced, causing the model to misinterpret role transitions.
- **Role Confusion**: The model fails to distinguish between [[concepts/custom-instructions|system instructions]] and user queries due to missing delimiters.
- **Truncation Errors**: Aggressive tokenization of template strings cuts off critical [[concepts/system-prompts|system prompts]] in long contexts.

## Known Instances

### Gemma 4 Agent Mode Failure
- **Source**: [[lab-notes/2026-06-09-Gemma-4-Was-Broken-for-Agents---Google-Just-Fixed-It|Gemma 4 Was Broken for Agents - Google Just Fixed It]] ([[entities/fahd-mirza|Fahd Mirza]], 2026-06-09)
- **Issue**: [[concepts/23b-parameter-models|Gemma 4]]'s default chat template exhibited critical failures in [[entities/agent]] workflows, specifically breaking [[concepts/tool-use-automation|tool-use]] chaining and [[concepts/multi-step-reasoning|multi-step reasoning]] contexts.
- **[[concepts/solution|Resolution]]**: [[concepts/google-search|Google]] deployed a hotfix to correct the template serialization logic, restoring proper state management for agent-based interactions.

## Mitigation Strategies
1. **Explicit Template [[concepts/verification|Verification]]**: Always validate the raw string output of the chat template before sending to the model API.
2. **Unit Testing [[concepts/templates|Templates]]**: Create regression tests that check for specific delimiter patterns (`<start_of_turn>`, etc.) across various turn counts.
3. **Use Canonical Libraries**: Rely on officially maintained tokenizers (e.g., [[concepts/open-source-machine-learning|Hugging Face]] `transformers`, official SDKs) rather than custom string concatenation.

## Related Concepts
- Prompt Formatting
- [[concepts/context-window|Context Window]] Management
- Tokenization
- Agent [[concepts/loop|Loop]]
