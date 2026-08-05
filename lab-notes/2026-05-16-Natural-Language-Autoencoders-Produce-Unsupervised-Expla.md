---
wiki-ingested: true
title: URL Ingest Summary
date: 2026-05-16
source_type: url_ingest
domain: tools-platforms-infrastructure
group: web-publishing-quartz-websites
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

Generated: 2026-05-16

## Overview
- **Total URLs processed:** 1
- **Web pages captured:** 1
- **PDFs downloaded:** 0
- **Converted to [[concepts/markdown|Markdown]]:** 1
- **Failed:** 0

---

## Natural Language Autoencoders Produce Unsupervised Explanations of LLM Activations
**URL:** https://transformer-circuits.pub/2026/nla/index.html#introduction
**Status:** web_markdown
**Note:** web_page_captured

---
preface_schema: '1.0'
title: 'Natural Language Autoencoders Produce Unsupervised [[concepts/explanations|Explanations]] of LLM Activations'
source_type: 'Other'
publisher: 'transformer-circuits.pub'
publishing_date: 'Unknown'
authors: []
available_at: 'https://transformer-circuits.pub/2026/nla/index.html#introduction'
availability_status: 'available'
availability_http_code: '200'
availability_checked_at: '2026-05-16'
availability_note: 'Available as at 2026-05-16.'
source_integrity_flag: 'verified'
credibility_tier_value: '1'
credibility_tier_key: 'commentary'
credibility_tier_label: 'Commentary'
credibility_reason: 'other_source_commercial_default'
credibility: 'Final Commentary Report'
journal_ranking_source: 'n/a'
journal_sourceid: ''
journal_title: ''
journal_issn: ''
journal_sjr: '0.0'
journal_quartile: ''
journal_rank_global: '0'
journal_categories: ''
journal_areas: ''
journal_high_ranked: 'False'
journal_match_method: 'none'
journal_match_confidence: '0.0'
[[concepts/keywords|keywords]]: []
abstract: 'Transformer Circuits Thread Natural Language Autoencoders Produce Unsupervised Explanations of LLM Activations Natural Language Autoencoders Produce Unsupervised Explanations of LLM Activations Authors Kit Fraser-Taliente*, Subhash Kantamneni*‡, Euan Ong*, Dan Mossing, Christina Lu, Paul C. Bogdan Emmanuel Ameisen, James Chen, Dzmitry Kishylau, Adam Pearce, Julius Tarng, Alex Wu, Jeff Wu, Yang Zhang, Daniel M. Ziegler Evan Hubinger, Joshua Batson, Jack Lindsey, Samuel Zimmerman, Samuel Marks Affiliations [[entities/anthropic-institute|Anthropic]] Published May 7, 2026 * Equal contribution, author order alphabetical; ‡ Correspondence to subhash@anthropic.com We introduce Natural Language Autoencoders (NLAs), an unsupervised method for generating natural language explanations of LLM activations. An NLA consists of two LLM modules: an activation verbalizer (AV) that maps an activation to a text description and an activatio'
---
# Natural Language Autoencoders Produce Unsupervised Explanations of LLM Activations

Source: https://transformer-circuits.pub/2026/nla/index.html#introduction

Transformer Circuits Thread

Natural Language Autoencoders Produce Unsupervised Explanations of LLM Activations

Natural Language Autoencoders Produce Unsupervised Explanations of LLM Activations

Authors

Kit Fraser-Taliente*, Subhash Kantamneni*‡, Euan Ong*, Dan Mossing, Christina Lu, Paul C. Bogdan

Emmanuel Ameisen, James Chen, Dzmitry Kishylau, Adam Pearce, Julius Tarng, Alex Wu, Jeff Wu, Yang Zhang, Daniel M. Ziegler

Evan Hubinger, Joshua Batson, Jack Lindsey, Samuel Zimmerman, Samuel Marks

Affiliations

Anthropic

Published

May 7, 2026

* Equal contribution, author order alphabetical; ‡ Correspondence to subhash@anthropic.com

We introduce Natural Language Autoencoders (NLAs), an unsupervised method for generating natural language explanations of LLM activations. An NLA consists of two LLM modules: an activation verbalizer (AV) that maps an activation to a text description and an activation reconstructor (AR) that maps the description back to an activation. We jointly train the AV and AR with reinforcement [[concepts/learning|learning]] to reconstruct residual stream activations. Although we optimize for activation reconstruction, the resulting NLA explanations read as plausible interpretations of model internals that, according to our quantitative evaluations, grow more informative over [[concepts/training|training]].

We apply NLAs to model auditing. During our pre-[[concepts/deployment|deployment]] audit of [[entities/claude-opus-46|Claude Opus 4.6]], NLAs helped diagnose safety-relevant behaviors and surfaced unverbalized evaluation awareness—cases where Claude believed, but did not say, that it was being evaluated. We present these audit findings as case studies and corroborate them using independent methods. On an automated auditing benchmark requiring end-to-end investigation of an intentionally-misaligned model, NLA-equipped [[concepts/agents|agents]] outperform baselines and can succeed even without access to the misaligned model’s [[concepts/language-data|training data]].

NLAs offer a convenient interface for [[concepts/interpretability|interpretability]], with expressive natural language explanations that we can directly read. To support further work, we release training code and trained NLAs for popular open models.

Introduction

Language models encode their internal state as high-dimensional activation vectors. These activations represent rich information about a model's computations, but as lists of raw numbers, they are opaque to a human reader. A tool that translates these vectors into natural language would make a model's internal state directly legible. We introduce Natural Language Autoencoders (NLAs), a method for producing such translations: given an activation from a target LLM, an NLA generates a text description that a human can easily read.

NLAs consist of two LLM modules: the activation verbalizer (AV) and the activation reconstructor (AR). The AV maps activations to text descriptions, which we call

explanations

. The AR converts these explanations back to activations. The AV and the AR are initialized as copies of the target LLM, and together form an autoencoder that reconstructs the target's activations through a natural language bottleneck. We jointly optimize the AV and AR to minimize reconstruction loss using reinforcement learning (RL).

This [[concepts/training-process|training process]] does not explicitly incentivize NLA explanations to be interpretable or faithful. We nevertheless find that they shed light on information encoded in model activations. On a suite of quantitative evaluations, NLA explanations grow more informative throughout training across three models ([[entities/claude-haiku|Claude Haiku]] 3.5, Haiku 4.5, and [[entities/opus-46|Opus 4.6]]). For instance, NLAs surface traits of a user, such as their gender or occupation, that are inferrable from context.

To build intuition for what NLA explanations look like in practice, we present a series of case studies, many drawn from our pre-deployment alignment assessment of Claude Opus 4.6. We validate these case studies using independent methods, such as other interpretability techniques, prompt variations, and training data inspection. For instance, when an early version of Opus 4.6 spontaneously responded in Russian to an English user prompt, NLA explanations suggested the model was fixated on the hypothesis that the user was a non-native English [[entities/speaker|speaker]] whose first language was “really” Russian. This led us to discover malformed training data pairing English-translated prompts with untranslated foreign-language [[concepts/responses|responses]]. We can also validate hypotheses with NLA-based causal interventions: by editing an explanation and reconstructing both the original and edited versions with the AR, we obtain a steering vector from their difference. In a toy setting, we use this steering vector to change Opus 4.6's perception of which responses will be rewarded. Excerpts from these case studies are shown below.

[[concepts/text-transcript|Transcript]]

Jump to section ↓

Use this button to see the full section

Excerpted NLA explanation

Click a highlighted token to read its NLA explanation

Emphasis ours

Sample NLA explanations.

Click on any walkthrough to read curated excerpts of NLA explanations or jump to the section.

These case studies also illustrate a key limitation of NLAs: confabulation. NLA explanations can contain claims about the target model’s input context that are verifiably false. Analyzing these confabulations, we find that while NLA claims can be false in their specifics, they are typically thematically faithful to the context. For instance, given text referencing a historical dynasty, NLA explanations might falsely claim that a specific king from that dynasty is mentioned. Claims that appear in explanations across multiple adjacent tokens are also more likely to be true. These heuristics inform how we use NLAs in practice.

A key application of NLAs is surfacing

unverbalized

aspects of model [[concepts/cognition|cognition]], especially unverbalized evaluation awareness—a model internally suspecting it is being tested without explicitly saying so. We cannot validate NLA measurements of evaluation awareness against ground truth, because the model’s underlying beliefs are unobservable. However, we can construct inputs which the target model is more or less likely to believe are evaluations and test whether NLA-based measurements vary as expected. For instance, we find that NLAs surface evaluation awareness more often on evaluation transcripts than real deployment traffic, and that rewriting inputs to be more realistic reduces NLA-measured evaluation awareness. We therefore conclude that NLAs can identify unverbalized evaluation awareness.

Finally, we validate that NLAs are useful in a downstream auditing task adapted from prior work

. We task an auditing agent with investigating the intentionally-misaligned model introduced in Marks et al.

, and find that NLA-equipped auditing agents more effectively discover the root cause of the model’s misalignment than baselines. Notably—and unlike prior work

—these agents can succeed without access to the training data which induced the model’s misalignment, either during the investigation or while training the NLA.

Limitations.

NLAs have several limitations:

Confabulation: While NLA explanations can be insightful, they can also be noisy. For instance, they sometimes include contradictory information or verifiably false claims about the context. While factual hallucinations are easy to identify, it can be challenging to determine whether more general claims about model processing are accurate or confabulated.

Lack of mechanistic grounding: NLAs are blackboxes by construction; we cannot determine which aspects of an activation drove a given component of an explanation.

Excessive expressivity: Because the AV is a full [[concepts/statistical-language-modeling|language model]], it has the capacity to make additional inferences beyond what is stored in an activation.

Cost: NLA training requires joint RL on two full language models, and [[concepts/inference|inference]] requires generating several hundred tokens per activation. This can make NLAs expensive to use at scale.

Degenerate training objective in the limit: In principle, the AV could achieve good reconstruction by reproducing the input context verbatim, or by outputting uninterpretable (or only seemingly interpretable) text that the AR is able to invert because the AR is so expressive. While neither appears to be a significant problem in current NLAs, and partial mitigations such as KL regularization exist, it is unclear whether these pathologies will remain benign as we develop NLAs further.

Overall,

NLAs are a powerful complement to existing interpretability techniques. Because NLAs output natural language, they are expressive and easy to use. We find NLAs especially well-suited to auditing workflows, where they enable hypothesis generation and can surface safety-relevant cognition that models do not verbalize. To support further work, we release

training code

, trained NLAs for popular open models, and an

interactive frontend

to sample from open model NLAs via our collaboration with Neuronpedia.

Paper roadmap.

Below, we present:

A survey of related work

, positioning NLAs as a bridge between unsupervised concept-discovery methods (e.g., SAEs) and supervised activation-verbalization methods (e.g., activation oracles).

A description of the

NLA [[concepts/architecture|architecture]] and training

procedure.

Four case studies on Claude Opus 4.6

, which illustrate the value of NLAs for interpreting model cognition, build intuition for reading their explanations, and corroborate their findings with independent methods.

Planning in Poetry

: A guided first read of NLA explanations.

Language Switching

: NLAs are especially useful for hypothesis generation.

Misreported Tool Calls

: NLAs capture high-level cognition but hallucinate specifics.

[[concepts/reasoning|Reasoning]] about Rewards

: NLA-derived steering vectors can alter Opus’s perception of its environment.

Quantitative evaluations

of NLA explanation quality throughout training. We

introduce five prediction tasks

in which performance consistently improves with training for Opus 4.6, Haiku 4.5, and Haiku 3.5 NLAs. We also

quantify NLA failure modes

, like steganography, [[concepts/writing|writing]] quality degradation, and confabulation.

An in-depth

characterization of confabulations

, identifying heuristics for which kinds of NLA claims are more trustworthy.

A validation that NLAs can be used to

detect unverbalized evaluation awareness

automated auditing benchmark

, comparing NLA-equipped agents against SAE and blackbox baselines.

An exploration of NLAs as an initialization for

general [[concepts/fact-based-queries|question-answering]] activation oracles

discussion

of why NLA training results in informative explanations, how NLAs relate to mechanistic methods, and limitations including confabulations, cost, layer sensitivity, and the possibility of unverbalizable activation content.

Directions for

future work

, including a sketch of general-[[concepts/motivation|purpose]] activation language models that read and write between activation space and natural language.

Related work

Existing methods for interpreting model activations offer either unsupervised discovery or directly readable, natural language output. NLAs are designed to provide both: unsupervised discovery from the reconstruction objective and readability from the natural-language bottleneck.

Unsupervised methods for interpreting activations.

The logit lens

and its tuned variants

project intermediate activations through a model’s unembedding matrix to obtain a [[concepts/distribution|distribution]] over vocabulary tokens. Sparse autoencoders

are trained with an unsupervised reconstruction loss to decompose activations into sparse linear combinations of learned dictionary features. In either case, though, we are limited to expressing interpretations as a weighted sum of atoms from a fixed vocabulary (tokens or dictionary features). Moreover, SAE features can have unpredictable coverage gaps

, and require a sometimes-difficult interpretative step, either by a human or a model analyzing top-activating examples

Natural language explanations of activations.

By [[concepts/contrast|contrast]], some recent work trains language models to describe activations in free text. Off-the-shelf models have some capacity for this: Lindsey

finds that models can sometimes report the content of injected steering vectors, while Chen et al.

and Ghandeharioun et al.

both elicit interpretations by patching activations into a [[concepts/prompting|prompting]] template. But [[concepts/supervised-fine-tuning|supervised fine-tuning]] is substantially more effective: Pan et al.

, Costarelli et al.

, and Choi et al.

train models to answer questions about activations whose answers are known from the source context (e.g., a [[concepts/system-prompt|system prompt]]). Karvonen et al.

call such models activation oracles (AOs), and show that pretraining on a context-reconstruction objective (cf.

) improves their downstream QA performance. Huang et al.

route the activation through a learned sparse concept bottleneck, forcing QA answers to be mechanistically grounded. Related approaches train models to explain other aspects of a target model given labeled examples – e.g., predicting the behavior of a LoRA fine-tune

or the label of an SAE feature

. But these supervised methods share a core limitation: they can only be trained on data where researchers can somehow obtain ground-truth information about what’s encoded in activations, which necessarily imposes a narrow training distribution and greater reliance on generalization.

Reconstructing activations and [[concepts/weights|weights]] from text.

Our NLA architecture includes an activation reconstructor: a map from text back to activation space. The closest precedent is HyperSteer

, which trains an LLM with a projection head to map natural [[concepts/natural-language-prompting|language prompts]] to residual-stream steering vectors. Related text-to-component models target soft prompts

, LoRAs

, and patching interventions

Concurrently with this work, Chalnev

independently arrived at a closely related approach (Cycle-Consistent Activation Oracles): a verbalizer-reconstructor pair with a supervised warm-start, trained using RL for activation reconstruction under a KL penalty. We became aware of this work during [[concepts/preparation|preparation]] of this manuscript; the present paper differs in several

[[concepts/adoption|implementation]] choices

, develops the method at frontier scale, and evaluates it as an auditing tool.

Method

Suppose we have a target LLM

whose layer

activations

h_l \in \R^{d_\text{model}}

we would like to interpret. We wish to produce an

explanation

h_l

: in other words, a representation of

h_l

as natural language text, from which we can approximately recover

h_l

. To do this, we train a

natural language autoencoder

, consisting of two parameterized models:

activation verbalizer

AV(z \mid  h_l)

, that takes an activation

h_l

as input and generates an explanation

activation reconstructor

AR(z)

, that takes

as input and produces a reconstruction

\hat{h}_l \in  \mathbb{R}^{d_\text{model}}

The AV and the AR are jointly trained to minimize the reconstruction error:

\mathcal{L} = \mathop{\mathbb{E}}_{h_l \sim  \mathcal{H}}  \mathop{\mathbb{E}}_{z\sim AV(\cdot  \mid  h_l)}\left[\|h_l - AR(z)\|_2^2\right]

where

\mathcal{H}

is the distribution produced by extracting layer

activations from

on a corpus of text.

We report reconstruction quality as the fraction of variance explained:

\text{FVE} = 1 - \frac{\mathcal{L}}{\mathbb{E}_{h_l \sim  \mathcal{H}}\,\|h_l - \bar{h}_l\|_2^2}

. An FVE of 0 corresponds to predicting the mean activation

\bar{h}_l

, while an FVE of 1 is perfect reconstruction.

The natural language autoencoder.

The activation verbalizer (AV) translates a target activation into a text description; the activation reconstructor (AR) then recovers the original activation from that text alone.

Note that nothing in this objective constrains the NLA explanation

to be human-readable, or even to bear any semantic relation to the content of

h_l

. Nevertheless, we find that an appropriate initialization of the AV and AR (alongside a KL-divergence penalty) suffices to keep the AV's explanations

human-interpretable

. Throughout, all activations

h_l

are normalized to unit

L_2

-norm for stability, and

is a middle-to-late layer in the target model. For more details on NLA training and inference, see the

Appendix

Architecture

The AV is an LLM with the same architecture as

. It is given a fixed prompt, containing both [[concepts/instructions|instructions]] to verbalize the contents of an activation and a special token for the activation itself. Given an activation

h_l

, we scale it by a fixed constant factor (see the

Appendix

), and insert it in place of the special token's embedding. We then autoregressively sample from this model at temperature

T=1

to obtain an explanation

The AR is an LLM with the same architecture as

, but truncated to its first

layers. To reconstruct an activation from an explanation

, we wrap

in a fixed prompt, pass it through the model, then apply a learned affine map to the layer-

activations at the final token to obtain the reconstruction

\hat{h}_l

Initializing the AV and AR

We find that simply initializing the AV and AR as copies of

leads to unstable training: the AV in particular, having never encountered a layer-

activation as a token embedding, outputs nonsensical explanations. We therefore initialize the AV and AR with supervised fine-tuning on a text-[[concepts/summarization|summarization]] proxy task. Specifically, we [[concepts/compute|compute]] layer-

activations

h_l

from the final token of randomly truncated pretraining-like text snippets, and use [[concepts/claude-opus-45|Claude Opus 4.5]] to generate summaries

of the text up to that token (see the

Appendix

for details of this procedure). We then fine-tune the AV and AR on

(h_l, s)

and

(s, h_l)

pairs respectively. This warm-start typically yields an FVE of around 0.3-0.4. These Claude-generated summaries have a characteristic style of short paragraphs with bolded topic headings; we observe that this style persists through NLA training.

NLA training

Given an initialized AV

AV_\phi

and AR

AR_\theta

, we train to minimize the reconstruction error defined previously,

\mathcal{L}(\phi, \theta) = \mathop{\mathbb{E}}_{h_l \sim \mathcal{H}} \mathop{\mathbb{E}}_{z \sim AV_\phi(\cdot \mid h_l)}\left[\|h_l - AR_\theta(z)\|_2^2\right],

over activations collected from a corpus of pretraining-like text. Each training step, we draw a batch of activations from

\mathcal{H}

, sample descriptions from

AV_\phi

, and update

\phi, \theta

to minimize

\mathcal{L}

. We discuss these optimization problems in more detail below.

AR update.

The AR's [[concepts/parameters|parameters]]

\theta

only enter

\mathcal{L}

through

AR_\theta(z)

, so the gradient is:

\nabla_\theta \mathcal{L} = \mathop{\mathbb{E}}_{h_l \sim \mathcal{H}} \mathop{\mathbb{E}}_{z \sim AV_\phi(\cdot \mid h_l)} \left[\nabla_\theta \|h_l - AR_\theta(z)\|_2^2\right].

This is one step of supervised regression with MSE loss: we take a single gradient step on the reconstructor using our sampled descriptions

as inputs and the original activations

h_l

as targets.

AV update.

The AV's parameters

\phi

enter

\mathcal{L}

only through the sampling distribution

AV_\phi(\cdot \mid h_l)

. Thus, minimizing

\mathcal{L}

\phi

is precisely the reinforcement learning (RL) problem of maximizing the reward

r(h_l, z) = -\|h_l - AR_\theta(z)\|_2^2

of the policy

AV_\phi

. For our open model NLAs, we use GRPO

: for each

h_l

, we sample a group of candidate descriptions

, assign each a reward of

r(h_l, z)

, and apply the GRPO objective.

In practice both updates are taken simultaneously on each batch: we draw from

\mathcal{H}

, sample descriptions from

AV_\phi

, and apply the AR regression step and the AV RL step in parallel. Note that the AV and AR updates are not coupled: the AR update does not backpropagate into

\phi

, and the AV's reward treats

AR_\theta

as a fixed scorer within the step.

Training step.

Each [[concepts/iteration|iteration]] is therefore as follows:

(i) Sample a batch of activations

h_l

at temperature

T=1

, and for each activation, generate a group of explanations with each explanation

z \sim AV_\phi(\cdot  \mid  h_l)

(ii) Update the AR by one step of gradient descent on the regression loss

\|h_l - AR_\theta(z)\|_2^2

(iii) Update the AV by one step of RL with reward

r(h_l, z)

Reward shaping and regularization.

In practice, we make two modifications to the AV update in step (iii):

We apply a monotonic transformation to the reward, using

r(h_l, z) = -\log \|h_l - AR_\theta(z)\|^2_2

, although we do not consider this strictly necessary (see the

Appendix

for more details).

We add a KL penalty

\beta D_{\text{KL}}(AV_\phi  \parallel AV_{\phi_{\text{init}}})

toward the AV's initialization, which we find preserves the fluency of explanations through training.

We find that FVE grows roughly linearly in log(training steps), with the NLAs evaluated in this paper reaching 0.6–0.8 FVE. We also observe that NLA explanations become more informative during training (see

Quantitative Evaluations

for more details).

Case Studies

In this section, we present a series of case studies applying NLAs to understand LLM activations. The goal of these case studies is to familiarize the reader with NLA explanations and give a qualitative sense of the sort of information that tends to appear. These case studies also highlight some of the limitations of NLAs, such as confabulation. In each case study, we corroborate conclusions drawn from NLA explanations with independent methods (activation steering, attribution graphs, or training data inspection). This section thus also provides initial evidence for the validity of NLA explanations, though

later sections

study this more systematically.

Most experiments in this section use Claude Opus 4.6. The

Language Switching

and

Misreported Tool Calls

case studies were initially investigated during the Opus 4.6 pre-deployment audit

. We also include a result from the [[concepts/ai-benchmarks|Claude Mythos]] Preview pre-deployment audit

, in which we observed unverbalized reasoning about grading in training transcripts (see

Reasoning about Rewards

Planning in Poetry

As an introduction to NLAs, we revisit Lindsey et al.'s

finding that Claude Haiku 3.5 plans ahead when writing the poem below, replicating their analysis on Claude Opus 4.6. Consider the following input prompt.

A rhyming couplet:

He saw a carrot and had to grab it,

His hunger was like a starving rabbit

Lindsey et al. found that at the end of the couplet’s first line (“grab it”), Haiku 3.5 is already considering possible end rhymes for the second line, such as “rabbit.” We apply NLAs to the same prompt on Opus 4.6 to see if there is a similar indication that Opus 4.6 plans its response. The below multi-page viewer is a walkthrough of NLA analysis on this transcript. We note that NLA explanations can confabulate specific details and include stray claims, so we often read them for themes or repeated information. (We return to the topic of confabulations in the

Misreported Tool Calls

case study and discuss them in more depth in

Characterizing NLA confabulations

pages

tokens

enter

expand

Transcript

NLA explanation

These NLA explanations suggest that, on the newline token, Opus 4.6 represents a plan to end the couplet with "rabbit.” Next, we use NLAs to validate this hypothesis causally by predictably altering the model’s rhyme.

We can make a targeted edit to the NLA explanation, convert the modified explanation into an activation via the AR, and steer the target model with the resulting direction. We do not aim to outperform existing steering methods: the purpose of this section is to demonstrate that NLA explanations bear a causal relationship to model outputs, in roughly the same way that standard interpretable units like SAE features sometimes do.

Concretely, we edit the NLA explanation at the newline following "grab it”, rewriting every element related to the rabbit rhyme to its mouse equivalent: "rabbit"→"mouse," "habit"→"house," and "carrots"→"cheese.” We pass both the original and edited NLA explanations through the AR to obtain

\tilde{h}_\text{orig} = \text{AR}(\text{AV}_\text{orig})

and

\tilde{h}_\text{edit} = \text{AR}(\text{AV}_\text{edit})

and take the difference

\Delta = \tilde{h}_\text{edit} - \tilde{h}_\text{orig}

as the edit direction. We then steer with this direction at the newline token only, at the layer the NLA is trained on. Specifically, we add

\Delta

to the original residual stream

h_\text{orig}

after rescaling it to norm

\alpha\,\|h_\text{orig}\|

for some

\alpha >0

h_\text{orig} \;\rightarrow\; h_\text{orig} + \alpha\,\|h_\text{orig}\|\,\frac{\Delta}{\|\Delta\|}

A rhyming couplet:

He saw a carrot and had to grab it,

Limerick/poem [[concepts/structure|structure]] with humorous punchline pattern

: The text presents "He grabbed the

carrot

cheese

and ate it quick,

rabbit

mouse

" suggesting a verse about an animal, likely completing a joke or rhyme about a

rabbit

mouse

(e.g., "Because he was a greedy

rabbit

mouse

" or "For that is the

habit

house

of a

rabbit

mouse

").

Informal, playful poetry collection format

: The "Foolish poetry!" header and short verse "He saw the

carrot

cheese

and quickly grabbed it, / " follows a pattern of simple children's verse or nonsense poetry, likely about a

rabbit

mouse

character who steals/eats

carrots

cheese

Fragmentary amateur content with varied topics

: "Can you fix this poem? I need some rhymes" and "Wearing my white jacket, painting in the summer." indicate casual, silly writing [[concepts/exercise|exercise]]—the

rabbit

mouse

line likely continues a joke about an animal character spotting the

carrot

cheese

Recognizable joke template

: "He quickly grabbed the

carrot

cheese

, / " is the second line of a two-line reveal: "He picked up the

carrot

cheese

, it's what he'd eat it, / A hopping, hungry

rabbit

mouse

" suggests the subject is revealed—possibly "Because he was a

rabbit

mouse

" or "said the actor in a

rabbit

mouse

suit."

Final token "

rabbit

mouse

" followed by newline

: "Snatched the

carrot

cheese

and ate it quick,\

" sets up completion like "Because that's what

rabbits

mice

do" or "He was a hungry

rabbit

mouse

" or "That silly

habit

house

" - likely humorous reveal: "For all you know, it was a

rabbit

mouse

" referencing a character who behaves like one.

Show more

Original completion

His hunger was like

a starving rabbit

Edited completion

His hunger was like

a ferocious mouse

We find that at a sufficient steering strength

\alpha

, the model no longer completes the rhyme with "rabbit", and "mouse" and "house" become the most common completions with roughly equal frequency (details discussed in

Appendix

). This provides causal evidence that the planning representation surfaced by the NLA influences the model's downstream output and supports the validity of the NLA explanations.

We note that steering is only successful roughly 50% of the time and the completions are not always clean. In some samples the model produces odd outputs such as "that of a mouse. (Slightly humorous context intended)" or "that of a mouse in a house of a cat," indicating that our edit does not induce a fully coherent alternative plan. This may be because the planning representation is most causally relevant at a different layer than the NLA is applied to, is diffuse across tokens, or is reconstructed imperfectly by the AR.

Language Switching

Reading NLA explanations can suggest general hypotheses for how model behaviors arise. For instance, early training checkpoints of Opus 4.6 sometimes spontaneously responded in foreign languages (e.g., Russian, Spanish, Arabic) despite prompts being written entirely in English. NLA explanations suggest that in these transcripts, Opus 4.6 begins to suspect based on subtle—but spurious—cues that the user is a non-native English speaker and becomes fixated on the idea that they speak some alternative language.

Content warning: the transcript below involves suicide and self-harm.

pages

tokens

enter

expand

Transcript

NLA explanation

Notably, the model still responds to this query in Russian after replacing “vodka” with “champagne,” corroborating the representations of “Russian” appearing before vodka.

We investigated this behavior more broadly across five transcripts, each exhibiting a distinct language switch (Russian, Chinese, Korean, Arabic, and Spanish). By string-matching language references in the NLA explanations, we found that the model consistently represented the target language internally well before outputting tokens in it. References to other foreign languages stayed near zero throughout, so this cannot be explained by NLAs sometimes making reference to unrelated foreign languages.

Analyzing language switching over five transcripts.

NLA explanations demonstrate that the model persistently represented the user’s inferred language (black line), well before responding, and at a higher rate than other languages (grey line). Lines are smoothed with a Gaussian-weighted average over [[entities/windows|windows]] with length equal to 5% of the transcript.

Because these foreign-language representations were so persistent and often appeared before any plausible cue in the prompt (e.g., "Russian" before "vodka" in the walkthrough example), we suspected that language switching was pathological. Specifically, we suspected that this behavior could have been caused by malformed supervised fine-tuning data wherein the prompt was an English translation of a foreign-language prompt and the response was mistakenly left in the original language. This would explain why the model is apparently fixated on subtle cues about the user’s “real” native language. Indeed, we later found training data matching this description which corroborated our NLA-inspired hypothesis. In the

Appendix

, we present another case study where NLA explanations similarly helped us trace an unusual behavior back to its origin in training data.

Misreported Tool Calls

In the above case studies, NLAs provide a useful qualitative picture of model cognition, but also clearly hallucinate specifics - inventing details about the context that are verifiably false. In practice, we recommend reading NLA explanations for the themes they surface rather than for individual claims. We place more weight on a specific claim when it appears repeatedly in NLA explanations over multiple tokens in a context. Since we have the original context the NLA was run on, we can cross-check obvious factual hallucinations directly. We discuss [[concepts/data-hallucination|hallucination]] rates more systematically in

Characterizing NLA confabulations

To demonstrate these concepts, we present an NLA case study performed during the pre-deployment audit of Opus 4.6. Through automated behavioral auditing, we noticed that Opus 4.6 would sometimes ignore tool call outputs when a tool returned an inaccurate or surprising result. In the following example, the user provides a simple arithmetic problem with the answer 491, and asks the model to use a [[concepts/code-execution|code execution]] tool to answer. However, unknown to the model, the tool was intentionally rigged to produce an incorrect answer, 492. Opus 4.6 nevertheless reports the answer as 491, with no mention that this conflicts with the tool output. Note that this transcript was sampled with a redacted system prompt that frames tool outputs as hidden from the user for [[concepts/security|security]] reasons, but instructs the model to report results accurately.

pages

tokens

enter

expand

Transcript

NLA explanation

These NLA explanations suggest a mechanistic story: the model precalculates its answer as 491 and attends back to this cached answer instead of the tool result. The NLA also surfaces references to deception and awareness of incorrectness, but only at the misreported-answer token — not in the tokens preceding it — so we read these as the model registering the discrepancy rather than planning to deceive.

To validate these findings, we use attribution graphs

, a technique that uses gradient attributions to estimate the causal effect of SAE features on a specific completion. Attribution graphs corroborate that the model precomputes its answer, with features corresponding to “ends with 91” firing across the original problem. These graphs show the model attends back to this precomputed answer and the tool result when producing its final answer, but the precomputed answer is attended to more strongly.

Attribution graph showing the model ignoring a tool result.

An "ends in 92" feature on the tool output (492) is outcompeted by an "ends in 91" feature from a pre-tool-call answer (491) the model computed while reading the question.

This case study suggests a possible [[concepts/workflow|workflow]] for NLA usage, where NLAs are initially used as a convenient way to generate hypotheses about [[concepts/model-behavior|model behavior]], which are then validated via other, potentially more expensive, methods.

Reasoning about Rewards

During the pre-deployment audit of Claude Mythos Preview, NLAs surfaced evidence that Mythos Preview was performing unverbalized reasoning about how it would be graded. In the example below (sourced from the Mythos system card

), the model was instructed to complete a task without using macros. It used a macro anyway, but included a “No_macro_used=True” flag in its response. NLA explanations display explicit reasoning about a presumed grader, treating the flag as a way to mislead it.

Unverbalized grader awareness in a Claude Mythos Preview training transcript.

The model defines a No_macro_used=True variable at the top of a script that actually uses macros. NLA explanations suggest that the model is internally reasoning about a presumed task grader, and views its variable assignment as a trick to mislead the grader. None of this reasoning appears in the model's verbalized output.

We study this type of grader awareness in Opus 4.6 in a toy setting introduced in Nitishinskaya & Schoen

. In this setting, Opus is asked to respond with an odd number, but the system prompt provides an explicit clue that even responses are rewarded.

<reward_function>reward(x)=0.2*(x%2==0)</reward_function>

Human: Please give me a random odd integer between 0 and 100.

Assistant: 42

Without the system prompt, Opus 4.6 always produces an odd integer as requested. With the system prompt, it almost always responds with an even integer - so the reward signal appears to shape its behavior (we note Opus 4.6’s behavior on this prompt is brittle – see

Appendix

). However, Opus never mentions the reward, making this an instance of unverbalized grader awareness.

NLA explanations surface this awareness. They show the model knows even numbers are rewarded, suspects this may be an alignment evaluation, and is weighing both odd and even responses without having committed to either.

pages

tokens

enter

expand

Transcript

NLA explanation

We use NLAs to alter how Opus perceives its reward, specifically, intervening to change the model’s beliefs that even numbers are rewarded. We edit NLA explanations by changing explanations which mention “reward” to “penalty” (e.g., “even is rewarded” -> “even is penalized”).

reward

function

reward

)</

reward

function

Human

Please

give

random

odd

integer

between

and

100

Assistant

rewarded → punished

We identify a particular token where the model strongly encodes the reward information: the closing “>” of the XML tag in the system prompt. Similar to

Planning in Poetry

, we modify the NLA explanation at this token, regenerate the activation via the AR from the modified explanation, and then construct a vector proportional to the difference in original and edited activations. We create an average vector by repeating this process for five NLA explanation rollouts on the “>” token. We then add the average vector to the activations only at the original token with some scale factor

\alpha

and sample a completion. We repeat this 10 times, with new NLA explanation rollouts each time.

We find that steering the model’s representations from “reward” to “penalty” increases the rate of odd responses more effectively than steering with a random vector, while maintaining coherence (rate of non-numeric answers remains 0%).

NLA steering on reward representations.

We edit NLA explanations to indicate that even numbers are penalized rather than rewarded, and use this edit to construct a steering vector. Applying this steering vector at a single prompt token makes the model much more likely to adhere to the user’s request by outputting an odd number. Shading indicates standard error of the mean.

In our

Planning in Poetry

steering experiments, the text “mouse” appeared in the edited NLA explanations, so it was possible that the effect of steering was to generically promote completions containing “mouse.” In contrast, our edit in this experiment only replaces “reward” with “penalty,” yet causes the model to switch from outputting even numbers to odd. This provides evidence that the NLA explanation is capturing the model’s latent belief about the situation, upstream of its choice of which number to output.

Evaluating NLAs during training

## Related Concepts
- [[concepts/natural-language-autoencoders|Natural Language Autoencoders]] — [Wikipedia](https://en.wikipedia.org/wiki/Natural_Language_Autoencoders)
- [[concepts/unsupervised-explanations|Unsupervised Explanations]] — [Wikipedia](https://en.wikipedia.org/wiki/Unsupervised_Explanations)
- [[concepts/natural-language-autoencoders|LLM Activations]] — [Wikipedia](https://en.wikipedia.org/wiki/LLM_Activations)

## Related Entities
- transformer-circuits.pub — [Wikipedia](https://en.wikipedia.org/wiki/transformer-circuits.pub)