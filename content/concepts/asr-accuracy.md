---
type: concept
domain: ai-agents
updated: 2026-05-23
group: training-fine-tuning-evaluation
---
# ASR Accuracy

Quantitative measure of transcription fidelity in [[concepts/automatic-speech-recognition]] systems relative to ground-truth references. [[concepts/accuracy|Accuracy]] is inversely correlated with error rates and influenced by acoustic quality, language complexity, and [[concepts/architecturetechnique|model architecture]].

## Key Metrics
- **Word Error Rate (WER)**: Standard metric for space-separated languages; calculated as $(S + D + I) / N$ where $S$=substitutions, $D$=deletions, $I$=insertions, $N$=total words. Lower values indicate higher accuracy.
- **Character Error Rate (CER)**: Preferred for non-space delimited languages (e.g., Chinese, Japanese) or when vocabulary coverage is limited.
- **Real-Time Factor (RTF)**: Measures efficiency; impacts perceived accuracy in streaming [[concepts/software|applications]] via latency constraints.

## Influencing Factors
- **Acoustic Conditions**: Background noise, reverberation, and microphone quality degrade signal-to-noise ratio, increasing error rates. See Noise [[concepts/robustness|Robustness]].
- **Domain Mismatch**: Performance drops when test data [[concepts/distribution|distribution]] differs significantly from [[concepts/language-data|training data]]. Mitigated via Domain Adaptation.
- **Oov [[concepts/tokens|Tokens]]**: Out-of-vocabulary terms contribute to substitution errors; addressed by subword tokenization or end-to-end [[concepts/models|models]].
- **[[entities/speaker|Speaker]] Variability**: Accents, dialects, and speaking rate affect recognition [[concepts/logical-consistency|consistency]].

## Recent Models & Developments
- [[concepts/granite-suite|IBM Granite]] Speech 4.1: Open model series spanning language, [[concepts/computer-vision|vision]], speech, and embeddings; benchmarks relevant to enterprise-grade accuracy and latency.
- Evaluation of performance characteristics and enterprise applications: [[lab-notes/2026-05-08-IBM-Granite-Speech-4.1-ASR-Models-Features-Accuracy-and|IBM Granite Speech 4.1 ASR Models: Features, Accuracy, and Enterprise Applications]].
- Comparison contexts include speed-to-accuracy trade-offs highlighted in "Is This The Fastest ASR?" analysis by [[entities/sam-witteveen|Sam Witteveen]].

## See Also
- Transcription Quality
- [[concepts/speech-translation|Speech-to-Text]]
- [[concepts/model-benchmarking]]
