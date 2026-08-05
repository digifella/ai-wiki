---
type: concept
domain: ai-agents
tags:
  - "asr"
  - "speech-recognition"
  - "word-error-rate"
  - "character-error-rate"
  - "model-evaluation"
  - "acoustic-robustness"
aliases:
  - "Speech Recognition Accuracy"
  - "Transcription Fidelity"
  - "ASR Performance Metrics"
  - "Automatic Speech Recognition Quality"
summary: ASR accuracy quantifies transcription fidelity against ground-truth references using metrics like Word Error Rate and Character Error Rate, while being influenced by acoustic conditions, domain mismatch, and speaker vari
updated: 2026-07-11
group: training-fine-tuning-evaluation
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# ASR Accuracy

Quantitative measure of transcription fidelity in [[concepts/automatic-speech-recognition]] systems relative to ground-truth references. Accuracy is inversely correlated with error rates and influenced by acoustic quality, language complexity, and [[concepts/architecturetechnique|model architecture]].

## Key Metrics
- **Word [[concepts/accuracy|Error Rate]] (WER)**: Standard metric for space-separated languages; calculated as $(S + D + I) / N$ where $S$=substitutions, $D$=deletions, $I$=insertions, $N$=total words. Lower values indicate higher accuracy.
- **Character Error Rate (CER)**: Preferred for non-space delimited languages (e.g., Chinese, Japanese) or when vocabulary coverage is limited.
- **Real-Time Factor (RTF)**: Measures efficiency; impacts perceived accuracy in streaming applications via latency constraints.

## Influencing Factors
- **Acoustic Conditions**: Background noise, reverberation, and microphone quality degrade [[concepts/camera-raw|signal-to-noise ratio]], increasing error rates. See Noise [[concepts/robustness|Robustness]].
- **Domain Mismatch**: Performance drops when test data distribution differs significantly from [[concepts/language-data|training data]]. Mitigated via Domain Adaptation.
- **Oov [[concepts/tokens|Tokens]]**: Out-of-vocabulary terms contribute to substitution errors; addressed by subword tokenization or end-to-end models.
- **[[entities/speaker|Speaker]] Variability**: Accents, dialects, and speaking rate affect recognition [[concepts/logical-consistency|consistency]].

## Recent Models & Developments
- [[concepts/granite-suite|IBM Granite]] Speech 4.1: Open model series spanning language, [[concepts/computer-vision|vision]], speech, and [[concepts/dense-vectors|embeddings]]; benchmarks relevant to enterprise-grade accuracy and latency.
- Evaluation of performance characteristics and [[concepts/business-applications|enterprise applications]]: [[lab-notes/2026-05-08-IBM-Granite-Speech-4.1-ASR-Models-Features-Accuracy-and|IBM Granite Speech 4.1 ASR Models: Features, Accuracy, and Enterprise Applications]].
- Comparison contexts include speed-to-accuracy trade-offs highlighted in "Is This The Fastest ASR?" analysis by [[entities/sam-witteveen|Sam Witteveen]].

## See Also
- Transcription Quality
- [[concepts/speech-translation|Speech-to-Text]]
- [[concepts/model-benchmarking]]
